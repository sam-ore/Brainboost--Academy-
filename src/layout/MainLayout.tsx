import { Outlet } from "react-router-dom";
import { Footer, Header } from "../component";

const MainLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout;