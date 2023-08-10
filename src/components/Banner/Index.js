import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

export default function Banner() {
   return (
      <div className={styles.banner}>
         <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Olá mundo </h1>
            <p className={styles.paragrafo}>
               Boas vindas ao meu espaço pessoal! Eu sou Mano Araújo, trabalho
               como Consultor Gastronômico e agora estou buscando uma transição
               para a área de desenvolvimento front-end, motivado por meu
               entusiasmo por aprender e enfrentar novos desafios.
            </p>
         </div>
         <div className={styles.imagens}>
            <img
               className={styles.circuloColorido}
               src={circuloColorido}
               aria-hidden={true}
               alt="circulo colorido"
            />
            <img
               className={styles.minhaFoto}
               src={minhaFoto}
               alt="Foto Germano"
            />
         </div>
      </div>
   );
}
