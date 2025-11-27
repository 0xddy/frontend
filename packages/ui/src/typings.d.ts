import type i18n from "i18next";

declare global {
  interface Window {
    logout: () => void;
    i18n: typeof i18n;
  }
}
