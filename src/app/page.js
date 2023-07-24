import styles from './page.module.css';
import StackOfCards from '@/models/StackOfCards';

import '../styles/pageText.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Is "the choosen one"? </h2>
      <StackOfCards></StackOfCards>
    </main>
  )
}
