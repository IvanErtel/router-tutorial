import { Outlet, Link } from "react-router-dom";

/*importamos Link, Link es similar a la etiqueta <a> en HTML pero con la diferencia que 
con link no recarga toda la pagina si no el modulo al cual nos referimos, en vez de utilizar
href usamos to="(ruta)"*/

export default function App() {
  return (
    <div>
      <h1>Bienvenidos!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}