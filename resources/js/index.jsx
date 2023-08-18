import {createRoot} from "react-dom/client";
import App from "./App";
import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
import axios from "axios";
import { createApp } from "@shopify/app-bridge";
import { getSessionToken } from "@shopify/app-bridge/utilities";



axios.interceptors.request.use(function (config) {
    const app = createApp(shopify.config);
    return getSessionToken(app) // requires a Shopify App Bridge instance
        .then((token) => {
            // Append your request headers with an authenticated token
            config.headers.Authorization = `Bearer ${token}`
            return config
        });
});

const root = document.createElement('div');
document.body.appendChild(root);

createRoot(root).render(<AppProvider i18n={en}><App /></AppProvider>)
