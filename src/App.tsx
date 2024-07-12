import { Navigate, redirect, Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout"
import MainPage from "./components/main-page"
import Catalog from "./pages/catalog"
import Card from "./pages/card"
import Cart from "./pages/cart"
import Delievery from "./pages/delievery"
import NotFound from "./pages/not-found"

import ScrollToTop from "./components/scrollToTop"
import PrivateOffice from "./pages/private-office"
import { useAuth } from "./hooks/use-auth/useAuth"


const App = () => {
  const {isAuth} = useAuth()
  return (
      <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<MainPage/>} />
          <Route path= "catalog/:category" element={ <Catalog/>}/>
          <Route path= "catalog" element={ <Navigate to={"/catalog/sushi"} replace/>}/>
          <Route path="card/:id" element={<Card/>} />
          <Route path="cart" element={<Cart/>} />
          <Route path="delievery" element={<Delievery/>} />
          <Route path="lc" element={isAuth ? <PrivateOffice/> : <Navigate to="/" replace />} />
          <Route path="*" element={<NotFound/>} />

      </Route>

    </Routes>
    </>
  )
}

export default App



//           <Route path="delievery" element={<Delievery/>} />

