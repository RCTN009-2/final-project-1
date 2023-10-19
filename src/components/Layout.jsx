import { Outlet } from "react-router-dom";
import { NavbarDark } from "./Navbar";

export default function Layout() {
    return (
        <>
        <NavbarDark />
        <Outlet />
        </>
    )
}