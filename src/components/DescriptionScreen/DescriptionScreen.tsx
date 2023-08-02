import img from './assets/img.png'
import styles from './styles.module.scss'
export default function DescriptionScreen() {
  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        <div className={styles.main_container_img}>
          <img src={img} alt="Imagem da Karol" />
        </div>
        <div className={styles.main_container_text}>
          <p>Natural de Cuiabá, sempre fui apaixonada por astronomia e áreas afins, por conta disso fui atrás de uma profissão que me possibilitasse estar nesse meio (me aguarde Elon Musk rsrs). Gosto muito de desenvolvimento web, criar apis, robótica, games e muitas outras áreas. </p>
        </div>
      </div>
    </div>
  )
}
