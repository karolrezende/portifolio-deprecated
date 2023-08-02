import styles from './styles.module.scss'
export default function SocialList() {
  return (
    <ul className={styles.container}>
    <li className={styles.container_li}>
      <a href='https://github.com/karolrezende'>
        <img src="src\components\SocialList\assets\github.svg" alt="github icon" />
      </a>
    </li>
    <li className={styles.container_li}>
      <a href='https://instagram.com/karolrezend33'>
        <img src="src\components\SocialList\assets\ig.svg" alt="instagram icon" />
      </a>
    </li>
    <li className={styles.container_li}>
      <a href='https://www.linkedin.com/in/karolrezende'>
        <img src="src\components\SocialList\assets\in.svg" alt="linkedin icon" />
      </a>
    </li>
    <li className={styles.container_li}>
      <a href='https://www.tiktok.com/@karolrezend33'>
        <img src="src\components\SocialList\assets\tiktok.svg" alt="tiktok icon " />
      </a>
    </li>
    <li className={styles.container_li}>
      <a href='https://www.youtube.com/@karolinenovais1593'>
        <img src="src\components\SocialList\assets\yt.svg" alt="youtube icon" />
      </a>
    </li>
  </ul>
  )
}
