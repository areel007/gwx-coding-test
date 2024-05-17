import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

type TNavigation = {
    icon: ReactNode;
    navigationName: string;
    url: string;
}

export const Navigation = ({ icon, navigationName, url }: TNavigation) => {
    const location = useLocation()

    return <Link to={url} className={`flex items-center gap-[5px] p-[15px_20px] cursor-pointer ${url === location.pathname ? "bg-gray-100" : "bg-white"}`}>
        {icon}
        <span className={`capitalize font-[300] hidden md:block ${url === location.pathname ? 'text-primary' : 'text-zinc-600'}`}>{navigationName}</span>
    </Link>
}