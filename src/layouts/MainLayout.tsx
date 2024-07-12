
import Header from '../components/header'
import { Outlet } from 'react-router'
import Footer from '../components/footer'
import Container from '../components/container'

const MainLayout = () => {
  return (
    <>
    <Container>
      <Header/>
      <Outlet/>
      </Container>
      <Footer/>
    </>
  )
}

export default MainLayout
