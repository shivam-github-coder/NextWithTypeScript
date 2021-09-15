import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { appWithTranslation } from "@i18n";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Provider>
      <Component {...pageProps} />
    </Provider>;
}

export default MyApp;
