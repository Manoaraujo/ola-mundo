import styles from "./Footer.module.css";
import { ReactComponent as TradeMark } from "assets/marca_registrada.svg";

export default function Footer() {
   return (
      <footer className={styles.rodape}>
         <TradeMark />
         Desenvolvido por Mano Araújo.
      </footer>
   );
}
