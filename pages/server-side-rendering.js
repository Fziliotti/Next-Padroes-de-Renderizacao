import Head from 'next/head'
import Link from 'next/link'
import { api } from '../services/api'
import styles from '../styles/Home.module.css'

const TIPO_DE_RENDERIZACAO = "SSR"

export async function getServerSideProps() {
    const {data} = await api.get('/books')
    return {
        props: {
            books: data.results,
        },
    }
}

  export default function Home({books}) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Server-Side-Rendering</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Link href={"/"}>
            <a className={styles.initialPageLink}>
                Página Inicial
            </a>
        </Link>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Modelo de Renderização: <a href="https://nextjs.org">{TIPO_DE_RENDERIZACAO}</a>
          </h1>

          <p className={styles.description}>
            Livros retirados de:  {" "}
            <strong>
              http://gutendex.com
            </strong>
          </p>


          <div className={styles.grid}>
            {books.map(book => {
              return (
                <a href="https://nextjs.org/docs" className={styles.card}>
                  <h2>{book.title}</h2>
                  <img src={book.formats["image/jpeg"]} alt={book.title}/>
                  <p>{book.authors.map(author => author.name ).join(' ')}</p>
                </a>
              )
            })}
            
          </div>
        </main>

        <footer className={styles.footer}>
          Pattern - {TIPO_DE_RENDERIZACAO}
        </footer>
      </div>
    )
  }
