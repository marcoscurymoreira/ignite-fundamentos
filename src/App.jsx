import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import styles from './App.module.css'
import './global.css'

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
          author="Marcos Moreira"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius tempora obcaecati alias, nostrum id magni at expedita, molestiae quisquam veritatis nesciunt magnam enim rerum quaerat quas aliquam. Omnis, neque aperiam."
          />
          <Post
          author="Marcos Moreira"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius tempora obcaecati alias, nostrum id magni at expedita, molestiae quisquam veritatis nesciunt magnam enim rerum quaerat quas aliquam. Omnis, neque aperiam."
          />
        </main>
      </div>
    </div>
  )
}
