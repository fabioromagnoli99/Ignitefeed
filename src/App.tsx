import { Post, PostType } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts: PostType[]  = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/fabioromagnoli99.png",
      name: 'Fabio Romagnoli',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal. 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: 'Mayk Brito',
      role: 'Educator @ RocketSeat'
    },
    content: [
      { type: 'paragraph', content: 'Hey everyone 👋'},
      { type: 'paragraph', content: 'I just uploaded another project to my portfolio.🚀'},
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-03-31 12:50:00')
  },
]

export function App() {
  return (
    <>
     <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              post={post} 
            />
          )
        })}
      </main>
     </div>
    </>
  )
}
