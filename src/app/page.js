import Imagen from "./components/Imagen"
import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <main className={styles.container}>
      <p className="description">Esta es una pagina para que RobertVDev haga pruebas. 
        <br /> esta desarrollada con el framework Next.js para React
      </p>
      <Imagen />
    </main>
  )
}
