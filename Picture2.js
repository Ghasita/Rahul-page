
import styles from './Picture2.module.css'
const Picture2 = () => {
  return (
    <div className={styles.main}>
      <div className={styles.sub1}>
        <section className={styles.container1}>30%</section>
        <section className={styles.container2}>Reduction In Time To Hire</section>
        <section className={styles.container3}>Adopt skills-based hiring to work smarter, attract the right talent, and acquire essential capabilities effectively.</section>
      </div>
      <div className={styles.sub2}>
        <section className={styles.container1}>2.5X</section>
        <section className={styles.container2}>Improved Talent</section> 
        <section className={styles.container3}>Enable internal role discovery, fostering engagement, retention, and career advancement opportunities.</section>
      </div>
      <div className={styles.sub3}>
        <section className={styles.container1}>20%</section>
        <section className={styles.container2}>Reduction In Cost Of Hiring</section>
        <section className={styles.container3}>Utilize ongoing, real-time skills data to reduce expenses and enhance business flexibility.</section>
      </div>
    </div>

  )
}

export default Picture2 