import { BrowserRouter, Navigate, Outlet, Route, Routes as Switch } from "react-router-dom";
import { Home } from "./common/components/pages/Home";
import { Login } from "./common/components/pages/Login";

export type Rota = {
  path: string;
  element: () => JSX.Element;
};

const rotas: Rota[] = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/login",
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

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          element={
            <>
              {/* <Header /> */}
              <Outlet />
              {/* <Footer /> */}
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
