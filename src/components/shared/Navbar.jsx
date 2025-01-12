import { useEffect, useState } from "react";
import { headerLinks } from "../../constants";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

    const [lastScollY, setLastScrollY] = useState(0);
    const [showNavBar, setShowNavBar] = useState('top');


    // control Navbar - show / hide   
    const controlNavbar = () => {

        if (window.scrollY > 200) {
            if (window.scrollY > lastScollY) {
                setShowNavBar('hide')
            }
            else {
                setShowNavBar('show')
            }
        }

        else {
            setShowNavBar('top')
        }

        setLastScrollY(window.scrollY);
    }


    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    })


    return (
        <nav className={`${showNavBar} w-full h-14 fixed flex justify-between items-center p-2 px-4 gap-4 text-white z-[10] translate-y-0 transition-all`}>

            {/* company logo */}
            <Link
                to="/"
                className="flex items-center gap-2"
            >
                <img
                    src="/eflyer-icon.png"
                    alt="Eflyer Logo"
                    className="w-8 h-8 md:w-10 md:h-10"
                />
                <p className="text-white text-base md:text-2xl font-rubik ">Eflyer</p>
            </Link>


            <div className="w-full sm:flex justify-end md:justify-center items-center header_section_top hidden bg-[#2b2a29]">
                <ul className="flex gap-6 ">
                    {headerLinks.map((link) => (
                        <li key={link.id} className="py-4 capitalize relative hover:text-orange-500 transition-all duration-200 group cursor-pointer">
                            <Link to={link.route}
                                className=""
                            >
                                {link.label}
                            </Link>
                            <div className='hidden group-hover:block absolute h-1 w-full bg-orange-500 bottom-0'></div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* for mobile */}
            <div className="sm:hidden cursor-pointer">
                <GiHamburgerMenu size={30} />
            </div>

            {/* <div className="container">
                <div className="header_section_top">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="custom_menu">
                                <ul>
                                    <li><a href="#">Best Sellers</a></li>
                                    <li><a href="#">Gift Ideas</a></li>
                                    <li><a href="#">New Releases</a></li>
                                    <li><a href="#">Today's Deals</a></li>
                                    <li><a href="#">Customer Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </nav>
    );
};

export default Navbar;
