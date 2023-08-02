import SocialList from "../SocialList/SocialList";
import TechList from "../TechList/TechList";
import styles from './styles.module.scss'
export default function InitialScreen() {
  return (
    <>
    <div className={styles.main}>
      <div className={styles.main_container}>
        <h3 className={styles.main_container_h3}>OI, EU SOU KAROL!</h3>
        <h1 className={styles.main_container_h1__first}>FULLSTACK</h1>
        <h1 className={styles.main_container_h1__second}>DEVELOPER</h1>
        <div className={styles.main_container_list}>
          <SocialList/>
        </div>
        <TechList/>
      </div>
    </div>
    </>
  )
}
