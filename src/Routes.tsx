import { BrowserRouter, Navigate, Outlet, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Header } from "./components/organisms/Header";
import { Footer } from "./components/organisms/Footer";

export type Rota = {
  path: string;
  element: () => JSX.Element;
};

const rotas: Rota[] = [
  {
    path: "/",
    element: Home,
  },
];

function construirRotas(): JSX.Element[] {
  return rotas.map((rota) => {
    return (
      <Route
        index={rota.path === "/" ? true : false}
        key={rota.path}
        path={rota.path}
        element={rota.element()}
      />
    );
  });
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Route
        path="/"
        element={
          <div>
            <Header />
            <Outlet />
            <Footer />
          </div>
        }
      />
      {construirRotas()}
      <Route path="*" element={<Navigate to="/" />} />
    </BrowserRouter>
  );
};

export default Routes;
