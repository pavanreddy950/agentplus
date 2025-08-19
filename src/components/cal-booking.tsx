import { useEffect, useRef } from "react";

interface CalBookingProps {
  calLink?: string;
  height?: string;
  theme?: "light" | "dark";
  layout?: "month_view" | "week_view" | "column_view";
  className?: string;
  embedType?: "inline" | "modal" | "link";
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
  const envCalLink = (import.meta as any).env?.VITE_CAL_LINK as string | undefined;
  const resolvedCalLink = calLink || envCalLink || "router?form=2935075";

  useEffect(() => {
    // If we only render a link, skip loading embed script
    if (embedType === "link") return;

    // Official Cal.com embed snippet
    const initCalEmbed = () => {
      (function (C: any, A: string, L: string) {
        let p = function (a: any, ar: any) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ['initNamespace', namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      // Wait for Cal to be available
      const waitForCal = () => {
        if ((window as any).Cal && containerRef.current) {
          // Initialize Cal
          (window as any).Cal("init", {
            origin: "https://app.cal.com"
          });

          if (embedType === "inline") {
            // Use inline embed
            if (containerRef.current) {
              containerRef.current.innerHTML = "";
            }
            (window as any).Cal("inline", {
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
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [resolvedCalLink, theme, layout, embedType]);

  if (embedType === "modal") {
    // For modal type, return a button that triggers the modal
    const handleModalClick = () => {
      // Initialize Cal if not already done
      if (!(window as any).Cal) {
        (function (C: any, A: string, L: string) {
          let p = function (a: any, ar: any) { a.q.push(ar); };
          let d = C.document;
          C.Cal = C.Cal || function () {
            let cal = C.Cal;
            let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              d.head.appendChild(d.createElement("script")).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () { p(api, arguments); };
              const namespace = ar[1];
              api.q = api.q || [];
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ['initNamespace', namespace]);
              } else p(cal, ar);
              return;
            }
            p(cal, ar);
          };
        })(window, "https://app.cal.com/embed/embed.js", "init");
      }

      // Wait and trigger modal
      const waitAndTrigger = () => {
        if ((window as any).Cal) {
          (window as any).Cal("init", {
            origin: "https://app.cal.com"
          });
          
          (window as any).Cal("modal", {
            calLink: resolvedCalLink,
            config: {
              theme: theme,
              layout: layout
            }
          });
        } else {
          setTimeout(waitAndTrigger, 100);
        }
      };

      waitAndTrigger();
    };

    return (
      <button 
        onClick={handleModalClick}
        className={`cal-booking-button bg-brand-orange hover:bg-brand-orange/90 text-white px-4 py-2 rounded-lg ${className}`}
      >
        Book Free Discovery Call
      </button>
    );
  }

  if (embedType === "link") {
    const href = `https://cal.com/${resolvedCalLink}`;
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange/90 text-white px-5 py-3 rounded-lg ${className}`}
      >
        Book Now
      </a>
    );
  }

  return (
    <div className={`cal-booking-widget ${className}`}>
      <div 
        ref={containerRef}
        style={{ 
          width: '100%', 
          height: height, 
          minHeight: height,
          borderRadius: '12px',
          overflow: 'hidden'
        }}
        className="relative"
      >
        {/* Visual fallback while embed script loads */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/calendarimage.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="absolute bottom-4 right-4">
          <a
            href={`https://cal.com/${resolvedCalLink}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange/90 text-white px-4 py-2 rounded-lg shadow-soft"
          >
            Open Scheduler
          </a>
        </div>
      </div>
    </div>
  );
};

export default CalBooking; 