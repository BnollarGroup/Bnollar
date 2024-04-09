import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "routes/route-generator";
import { Provider } from "react-redux";
import { store } from "app/store";
import Modals from "providers/Modals";
import Testt from "Testt";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={false}>
        <Provider store={store}>
          <Modals />

          <Routes>
            {publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
            <Route path="/testt" element={<Testt />} />
          </Routes>
        </Provider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
