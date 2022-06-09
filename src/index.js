import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
/*BrowserRouter nos deja navegar entre paginas/importamos Routes y dentro incorporamos las 
diferentes rutas con sus respectivos componentes a mostrar (Route lleva 2 parametros, 
  path=(nombre de la ruta) y element=(el modulo que se va a mostrar))*/

 <BrowserRouter>
    <Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />}>
      <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <h3>Seleccione su factura</h3>
          </main>
        }
      />
      <Route path=":invoiceId" element={<Invoice />} />
    </Route> 
    {/* en caso de no encontrar la ruta se mostrara el siguiente <p></p> (tambien se
      podria crear otro componente con una pagina y importarlo a esta Route ) */}
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem", background: "#c8c32f" }}>
          <h1>404 NOT FOUND!</h1>
        </main>
      }
    />
  </Route>
</Routes>
  </BrowserRouter>
);