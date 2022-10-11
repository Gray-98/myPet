import Api from '../../lib/api'
import Head from "next/head"
import styles from './styles'

const Home = ({data}) => {
  return (
    <>
      <Head><title>My pet</title></Head>
      <div className='homepage-container'>
        <h1>Welcome to use my pet website ~</h1>
        <div>Home Page</div>
        <h1>Get Information Test</h1>
        <div>{data}</div>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

Home.getInitialProps = async() => {
  const data = await Api.getHealth()

  return { data }
}

export default Home