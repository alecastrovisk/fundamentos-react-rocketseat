import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://github.com/alecastrovisk.png' />
          <div className={styles.authorInfo}>
            <strong>Alexandre Castro</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de pegar gold e tô pronto pra jobar o Roberto, Yan e o Potinho 🚀
        </p>
        <p>
          {' '} <a 
                href='https://br.op.gg/summoners/br/not%20castr0visk?hl=tr_TR'>
                  👉notCastr0visk/carry
                </a>
        </p>
        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#nlw</a>{' '}
          <a href=''>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário'
        />
        
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  );
}