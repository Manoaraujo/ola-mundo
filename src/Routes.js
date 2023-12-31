import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Paginas/homepage/Index";
import AboutMe from "./Paginas/aboutMe/Index";
import Menu from "./components/menu/Index";
import Footer from "components/Footer/Index";
import DefaultPage from "components/DefaultPage/Index";
import Post from "Paginas/post/Index";
import NotFound from "Paginas/notFound";
import ScrollToTop from "components/ScrollToTop/Index";

function AppRoutes() {
   return (
      <BrowserRouter>
         <ScrollToTop />
         <Menu />

         <Routes>
            <Route path="/" element={<DefaultPage />}>
               <Route index element={<Homepage />} />
               <Route path="aboutme" element={<AboutMe />} />
            </Route>
            <Route path="post/:id/*" element={<Post />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default AppRoutes;
