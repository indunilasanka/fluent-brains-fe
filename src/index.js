import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./Context/Context";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "si"],
    fallbackLng: "en",
    detection: {
      order: [
        "htmlTag",
        "localStorage",
        "cookie",

        "localStorage",
        "path",
        "subdomain",
      ],
      cache: ["cookie"],
    },

    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });

const loadingMockup = (
  <div className="my-2 text-center">
    <h1>Loading....</h1>
  </div>
);
ReactDOM.render(
  <ContextProvider fallbackLng={loadingMockup}>
    <Suspense>
      <App />
    </Suspense>
  </ContextProvider>,

  document.getElementById("root")
);
