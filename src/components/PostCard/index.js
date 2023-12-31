import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import MainButton from "components/MainButton";

export default function PostCard({ post }) {
   return (
      <Link to={`/post/${post.id}`}>
         <div className={styles.post}>
            <img
               className={styles.capa}
               src={`/assets/posts/${post.id}/capa.png`}
               alt="imagem de capa"
            />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <MainButton>Ler</MainButton>
         </div>
      </Link>
   );
}
