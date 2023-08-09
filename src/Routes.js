import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Paginas/homepage/Index";
import AboutMe from "./Paginas/aboutMe/Index";
import Menu from "./components/menu/Index";

function AppRoutes() {
   return (
      <BrowserRouter>
         <Menu />

         <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="*" element={<div>Página não encontrada</div>} />
         </Routes>
      </BrowserRouter>
   );
}

export default AppRoutes;
