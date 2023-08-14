import "./post.css";
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import ModelPost from "components/ModelPost/Index";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NotFound from "Paginas/notFound";
import DefaultPage from "components/DefaultPage/Index";
import styles from "./Post.module.css";
import PostCard from "components/PostCard";

export default function Post() {
   const params = useParams();
   const post = posts.find((post) => post.id === Number(params.id));

   if (!post) {
      return <NotFound />;
   }

   const recommendedPosts = posts
      .filter((post) => post.id !== Number(params.id))
      .sort((a, b) => b.id - a.id)
      .slice(0, 4);
   console.log(recommendedPosts);

   return (
      <DefaultPage>
         <ModelPost
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
         >
            <div className="post-markdown-container">
               <ReactMarkdown>{post.texto}</ReactMarkdown>
            </div>

            <h2 className={styles.tituloOutrosPosts}>
               Outros posts que você pode gostar:
            </h2>
            <ul className={styles.postsRecomendados}>
               {recommendedPosts.map((post) => (
                  <li key={post.id}>
                     <PostCard post={post} />
                  </li>
               ))}
            </ul>
         </ModelPost>
      </DefaultPage>
   );
}
