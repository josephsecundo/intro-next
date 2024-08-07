import Image from "next/image";
import styles from "./page.module.css";



export default function Home() {
  return (
    <div className='containerGlobal'>
    <div className={styles.containerTitulo}>
      <h1 className={styles.txtTitulo}>Aula Next</h1>
      <h2>Exemplo h2</h2>
      <h3>Exemplo h3</h3>

      <div className={styles.containerImagem}><Image 
      src="/maduro.jpg"
      width={100}
      height={100}
      alt="Madurito"
      className={styles.imagemHome}
      />

        <Image 
      src="/maduro.jpg"
      width={100}
      height={100}
      alt="Madurito"
      className={styles.imagemHome}
      />
      </div>

      </div>
    </div>
    );
}
