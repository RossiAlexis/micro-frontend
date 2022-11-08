import Head from 'next/head'
import Image from 'next/image'
import Loyalty from '../src/components/Loyalty'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <Loyalty></Loyalty>
    </div>
  )
}
