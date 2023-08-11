import { BrowserRouter, Navigate, Outlet, Route, Routes as Switch } from "react-router-dom";
import { Sobre, Login, Home, Header, Contato, DadosCadastrais } from "@components";

export type Rota = {
  path: string;
  element: () => JSX.Element;
};

const rotas: Rota[] = [
  {
    path: "/dadoscadastrais",
    element: DadosCadastrais,
  },
  {
    path: "/contato",
    element: Contato,
  },
  {
    path: "/sobre",
    element: Sobre,
  },
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
