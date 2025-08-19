/// <reference types="vite/client" />

interface CalConfig {
  theme?: string;
  layout?: string;
  [key: string]: unknown;
}

interface CalInlineConfig {
  elementOrSelector: HTMLElement | string;
  calLink: string;
  config?: CalConfig;
}

interface CalModalConfig {
  calLink: string;
  config?: CalConfig;
}

interface CalFloatingButtonConfig {
  calLink: string;
  buttonText?: string;
  buttonPosition?: string;
  config?: CalConfig;
}

interface CalPrerenderConfig {
  calLink: string;
  type: string;
  pageType?: string;
  options?: Record<string, unknown>;
}

declare global {
  interface Window {
    Cal?: {
      (action: "init", config?: { origin: string }): void;
      (action: "inline", config: CalInlineConfig): void;
      (action: "modal", config: CalModalConfig): void;
      (action: "floatingButton", config: CalFloatingButtonConfig): void;
      (action: "prerender", config: CalPrerenderConfig): void;
      (action: string, ...args: unknown[]): void;
      loaded?: boolean;
      ns?: Record<string, unknown>;
      q?: unknown[];
    };
  }
}
