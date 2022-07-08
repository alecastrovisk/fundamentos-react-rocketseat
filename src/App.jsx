import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/alecastrovisk.png',
      name: 'Alexandre Castro',
      role: 'Front-end developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de desistir da matéria da mônica!🚀' },
      { type: 'link', content: '👉leohas/dev' },
    ],
    publishedAt: new Date('2022-07-07 08:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/leohas.png',
      name: 'Leonardo Henrique',
      role: 'Front-end developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de desistir da matéria da mônica!🚀' },
      { type: 'link', content: '👉leohas/dev' },
    ],
    publishedAt: new Date('2022-07-08 10:00:00')
  }
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App
