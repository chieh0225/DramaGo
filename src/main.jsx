import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/all.scss";
import FrontLayout from "./layout/front/FrontLayout";

createRoot(document.getElementById("root")).render(

    <FrontLayout/>

);
