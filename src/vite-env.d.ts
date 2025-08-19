/// <reference types="vite/client" />

declare global {
  interface Window {
    Cal?: {
      (action: "init", config?: any): void;
      (action: "inline", config: { elementOrSelector: HTMLElement | string; calLink: string; config?: any }): void;
      (action: "modal", config: { calLink: string; config?: any }): void;
      (action: "floatingButton", config: { calLink: string; buttonText?: string; buttonPosition?: string; config?: any }): void;
      (action: "prerender", config: { calLink: string; type: string; pageType?: string; options?: any }): void;
      (action: string, ...args: any[]): void;
      loaded?: boolean;
      ns?: Record<string, any>;
      q?: any[];
    };
  }
}
