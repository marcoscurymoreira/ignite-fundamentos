import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/marcoscurymoreira.png',
      name: 'Marcos Moreira',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'To fazendo este projeto aqui e em breve estará no meu Github. 🚀' },
      { type: 'link', content: 'Marcos Moreira' },
    ],
    publishedAt: new Date('2024-07-02 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/enesolucoes.png',
      name: 'Ene Soluções',
      role: 'Technology Company'
    },
    content: [
      { type: 'paragraph', content: 'Boa, boa 👋' },
      { type: 'paragraph', content: 'Parabéns pelo projeto! 🚀' },
      { type: 'link', content: 'eNe Soluções' },
    ],
    publishedAt: new Date('2024-06-12 20:00:00'),
  },
];

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
