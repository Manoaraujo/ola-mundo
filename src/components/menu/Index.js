import styles from "./Menu.module.css";
import MenuLink from "../menuLink/Index";

export default function Menu() {
   return (
      <header>
         <nav className={styles.navegacao}>
            <MenuLink to={"/"}> Inicio</MenuLink>
            <MenuLink to={"/aboutme"}> Sobre mim</MenuLink>
         </nav>
      </header>
   );
}
