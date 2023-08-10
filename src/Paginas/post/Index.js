import "./post.css";
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import ModelPost from "components/ModelPost/Index";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Post() {
   const params = useParams();
   const post = posts.find((post) => post.id === Number(params.id));

   return (
      <ModelPost
         fotoCapa={`/assets/posts/${post.id}/capa.png`}
         titulo={post.titulo}
      >
         <div className="post-markdown-container">
            <ReactMarkdown>{post.texto}</ReactMarkdown>
         </div>
      </ModelPost>
   );
}
