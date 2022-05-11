import Head from 'next/head'
import Teste from '../components/meucomp'
import Form from '../components/form'
import styles from '../components/test.module.css'

export default function Home() {
  return (
    <div>
      <title>Site do Jones</title>
      <Teste></Teste>
      <Form></Form>
    </div>
  )
}
