import React, { createContext } from "react";
import storeInstance from "../store/index";
import "typeface-nunito";

export const StoreContext = createContext();

export default function MyApp({ Component, pageProps }) {
  return (
    <StoreContext.Provider value={storeInstance}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}
