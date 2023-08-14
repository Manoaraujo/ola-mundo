import MainButton from "components/MainButton";
import styles from "./notFound.module.css";
import erro404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
   const navegar = useNavigate();

   return (
      <>
         <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
            <p className={styles.paragrafo}>
               Tem certeza de que era isso que você estava procurando?
            </p>
            <p className={styles.paragrafo}>
               Aguarde uns instantes e recarregue a página, ou volte para a
               página inicial.
            </p>
            <div onClick={() => navegar(-1)} className={styles.botaoContainer}>
               <MainButton tamanho="lg">Voltar</MainButton>
            </div>
            <div>
               <img
                  className={styles.imagemCachorro}
                  alt="cachorro de óculos vestido como humano"
                  src={erro404}
               ></img>
            </div>
         </div>
         <div className={styles.espacoEmBranco}></div>
      </>
   );
}
