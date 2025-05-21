import { Outlet } from "react-router"
import Footer from "../Footer/Footer"
import Nav from "../Navbar/Nav"


const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root
