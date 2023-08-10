import { BrowserRouter, Navigate, Outlet, Route, Routes as Switch } from "react-router-dom";
import { Home } from "./common/components/pages/Home";
import { Login } from "./common/components/pages/Login";
import { Header } from "./common/components/organisms/Header";
// import { Footer } from "./common/components/organisms/Footer";

export type Rota = {
  path: string;
  element: () => JSX.Element;
};

const rotas: Rota[] = [
  {
    path: "/home",
    element: Home,
  },
  {
    path: "/",
    element: Login,
  },
];

function construirRotas(): JSX.Element[] {
  return rotas.map(rota => (
    <Route
      index={rota.path === "/" ? true : false}
      key={rota.path}
      path={rota.path}
      element={<rota.element />}
    />
  ));
}

const logado = location.pathname != "/";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          element={
            <>
              {logado && <Header />}
              <Outlet />
              {/* logado && < Footer /> */}
            </>
          }>
          {construirRotas()}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
