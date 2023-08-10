import styles from "./home.module.css";
import Post from "components/Post";
import posts from "json/posts.json";

export default function Homepage() {
   return (
      <ul className={styles.posts}>
         {posts.map((post) => (
            <li key={styles.id}>
               <Post post={post} />
            </li>
         ))}
      </ul>
   );
}
