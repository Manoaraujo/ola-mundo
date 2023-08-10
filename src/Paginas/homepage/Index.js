import styles from "./home.module.css";
import PostCard from "components/PostCard";
import posts from "json/posts.json";

export default function Homepage() {
   return (
      <ul className={styles.posts}>
         {posts.map((post) => (
            <li key={styles.id}>
               <PostCard post={post} />
            </li>
         ))}
      </ul>
   );
}
