import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "routes/route-generator";

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={false}>
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
