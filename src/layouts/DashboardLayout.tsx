import Header from "../components/react-components/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () =>{
    return(
        <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        </>
    )
}
export default DashboardLayout;