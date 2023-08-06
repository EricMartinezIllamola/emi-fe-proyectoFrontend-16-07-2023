import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/project_A.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import index_es from "./translations/es/index.json";
import index_ca from "./translations/ca/index.json";
import index_en from "./translations/en/index.json";
import project_1_es from "./translations/es/project_1.json";
import project_1_ca from "./translations/ca/project_1.json";
import project_1_en from "./translations/en/project_1.json";
import i18next from "i18next";
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: true },
  lng: localStorage.getItem("lng") || "es",
  resources: {
    es: {
      index: index_es,
      project_1: project_1_es,
    },
    ca: {
      index: index_ca,
      project_1: project_1_ca,
    },
    en: {
      index: index_en,
      project_1: project_1_en,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider >
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
