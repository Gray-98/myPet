import styles from './styles'

const Layout = ({children}) => {
  return (
    <div className='main-container'>
      {children}
      <style jsx>{styles}</style>
    </div>
  )
}

export default Layout