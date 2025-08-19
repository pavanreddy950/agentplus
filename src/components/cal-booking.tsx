import { useEffect, useRef } from "react";

interface CalBookingProps {
  calLink?: string;
  height?: string;
  theme?: "light" | "dark";
  layout?: "month_view" | "week_view" | "column_view";
  className?: string;
  embedType?: "inline" | "modal" | "link";
}

interface CalConfig {
  theme: string;
  layout: string;
}

interface CalInlineConfig {
  elementOrSelector: HTMLElement | string;
  calLink: string;
  config?: CalConfig;
}

interface CalInitConfig {
  origin: string;
}

interface CalEmbedFunction {
  (action: "init", config?: CalInitConfig): void;
  (action: "inline", config: CalInlineConfig): void;
  (action: "modal", config: { calLink: string; config?: CalConfig }): void;
  loaded?: boolean;
  ns?: Record<string, unknown>;
  q?: unknown[];
}

interface WindowWithCal extends Window {
  Cal?: CalEmbedFunction;
}

const CalBooking = ({ 
  calLink = undefined,
  height = "500px",
  theme = "dark",
  layout = "month_view",
  className = "",
  embedType = "inline"
}: CalBookingProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const envCalLink = (import.meta as { env?: { VITE_CAL_LINK?: string } }).env?.VITE_CAL_LINK;
  const resolvedCalLink = calLink || envCalLink || "router?form=2935075";

  useEffect(() => {
    // If we only render a link, skip loading embed script
    if (embedType === "link") return;

    // Official Cal.com embed snippet
    const initCalEmbed = () => {
      (function (C: Window, A: string, L: string) {
        const p = function (a: { q: unknown[] }, ar: unknown) { a.q.push(ar); };
        const d = C.document;
        C.Cal = C.Cal || function (...args: unknown[]) {
          const cal = C.Cal as CalEmbedFunction;
          const ar = args;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function (...apiArgs: unknown[]) { p(api, apiArgs); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace] as { q: unknown[] }, ar);
              p(cal, ['initNamespace', namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      // Wait for Cal to be available
      const waitForCal = () => {
        const windowWithCal = window as WindowWithCal;
        if (windowWithCal.Cal && containerRef.current) {
          // Initialize Cal
          windowWithCal.Cal("init", {
            origin: "https://app.cal.com"
          });

          if (embedType === "inline") {
            // Use inline embed
            if (containerRef.current) {
              containerRef.current.innerHTML = "";
            }
            windowWithCal.Cal("inline", {
              elementOrSelector: containerRef.current,
              calLink: resolvedCalLink,
              config: {
                theme: theme,
                layout: layout
              }
            });
          }
        } else {
          setTimeout(waitForCal, 100);
        }
      };

      waitForCal();
    };

    if (embedType === "inline" && containerRef.current) {
      initCalEmbed();
    }

    return () => {
      // Cleanup
      const currentContainer = containerRef.current;
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
    };
  }, [resolvedCalLink, theme, layout, embedType]);

  if (embedType === "modal") {
    // For modal type, return a button that triggers the modal
    return (
      <button
        className={`cal-link ${className}`}
        data-cal-link={resolvedCalLink}
        data-cal-config={`{"theme":"${theme}","layout":"${layout}"}`}
      >
        Book a meeting
      </button>
    );
  }

  if (embedType === "link") {
    // For link type, return a simple link
    return (
      <a
        href={`https://app.cal.com/${resolvedCalLink}`}
        className={`cal-link ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a meeting
      </a>
    );
  }

  // For inline type, return the container
  return (
    <div
      ref={containerRef}
      className={`cal-inline ${className}`}
      style={{ height }}
    />
  );
};

export default CalBooking; 