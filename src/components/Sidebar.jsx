import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src='https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50'
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src='https://github.com/alecastrovisk.png' alt='gostosão'/>
        <strong>Alexandre Castro</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}