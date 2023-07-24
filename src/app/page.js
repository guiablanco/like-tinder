import styles from './page.module.css';
import StackOfCards from '@/models/StackOfCards';


export default function Home() {
  return (
    <main className={styles.main}>
      <StackOfCards></StackOfCards>
    </main>
  )
}
