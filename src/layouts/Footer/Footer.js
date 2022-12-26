import { Link } from "react-router-dom";
import logo from "../../images/repaircar.png"

export default function Footer(){

    const menus = [
        {
            page: 'Contact',
            path: '/contact'
        },
        {
            page: 'Career',
            path: '/career'
        },
        {
            page: 'Contact',
            path: '/contact'
        },

    ];

    return(
        <footer className="mt-10">
            <div className="w-full bg-blue-900 text-white font-semibold">
                <div className="flex flex-row justify-around">
                    <div className="p-5">
                        <img src={logo} alt="repair" width="200" />
                    </div>
                    <div clsas>
                        <ul>
                            {menus.map((menu)=>{
                                return(
                                    <Link to={menu.path}>
                                        <li className="my-5 text-left">{menu.page}</li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        map
                    </div>
                </div>
            </div>
        </footer>
    );
}