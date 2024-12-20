import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./Context/ShopContext";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProductProvider } from "./Context/ProductContext";
import { CartProvider } from "./Context/GraphContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopContextProvider>
    <CartProvider>
      <ProductProvider>
        <Auth0Provider
          domain="dev-r32ani1xrxhcu4n3.us.auth0.com"
          clientId="DWaKJuQOMADaU4PnlljkMuefoc1sy44V"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </ProductProvider>
      ,
    </CartProvider>
  </ShopContextProvider>
);
