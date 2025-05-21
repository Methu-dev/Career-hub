import { Outlet } from "react-router"
import Footer from "../Footer/Footer"
import Nav from "../Navbar/Nav"


const Root = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Root
