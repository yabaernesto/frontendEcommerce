import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

// Arquivo de configuracao de layout [Componentes que se repetem]

export function DefaultLayout() {
  return (
    <div>
      <Header />
      {/*Outlet define que abaixo tera conteudo*/}
      <Outlet />
    </div>
  );
}
