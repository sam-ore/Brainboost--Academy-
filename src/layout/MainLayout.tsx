import { Outlet } from "react-router-dom";
import { Footer, Header } from "../component";
import ScrollToHash from "../scroll/ScrolltoHash";

const MainLayout = () => {
  return (
    <div>
        <Header />
        <ScrollToHash />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout;