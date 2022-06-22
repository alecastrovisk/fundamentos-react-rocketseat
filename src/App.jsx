import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Alexandre Castro"
            content="blablabla"
          />
        </main>
      </div>
    </div>
  )
}

export default App