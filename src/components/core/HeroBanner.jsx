import SearchBar from '../shared/SearchBar'
import Button from '../shared/Button';

import indiaFlag from '../../../public/assets/india-flag.png'

// react icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCart } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineArrowDropDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CategoryList from '../shared/CategoryList';


const HeroBanner = () => {



    return (
        <div className="w-full h-[650px] md:h-[600px] flex justify-center items-center relative text-white ">

            {/* background image */}
            <div className='w-full h-full absolute top-0 left-0 bottom-0 overflow-y-hidden object-cover banner_bg_main'>
            </div>

            <div className='w-full px-24 py-1 flex flex-col justify-around md:justify-center h-full items-center gap-5 md:gap-11 relative '>
                <h2 className='text-[30px] md:text-[40px] font-bold font-rubik '>
                    Eflyer
                </h2>

                <div className='w-full flex flex-col lg:flex-row justify-between items-center h-12 gap-7  '>
                    {/* menu button */}
                    <div className='flex gap-5 items-center'>
                        <div className="cursor-pointer">
                            <GiHamburgerMenu size={50} />
                        </div>

                        {/* category list */}
                        <CategoryList />
                    </div>


                    {/* searh input */}
                    <SearchBar />

                    <div className='flex justify-between gap-5'>
                        {/* language select */}
                        <div className='bg-white w-full text-black py-2 px-5 rounded-lg h-full flex justify-between gap-2 items-center cursor-pointer'>
                            <img src={indiaFlag} alt="india flag" className='w-6 h-5 object-contain' />
                            <p>English</p>
                            <MdOutlineArrowDropDown size={35} />
                        </div>

                        <div className="flex items-center gap-2 cursor-pointer">
                            <IoIosCart size={25} />
                            Cart
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <MdAccountCircle size={25} />
                            Profile
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center justify-center rounded-full bg-[#FEFEFE] bg-opacity-60 w-10 h-10 text-black cursor-pointer'>
                        <MdKeyboardArrowLeft size={23} />
                    </div>

                    <h1 className='text-3xl sm:text-6xl leading-[40px] sm:leading-[90px] text-center font-bold text-white uppercase '>
                        Get start <br />
                        your favourite shopping
                    </h1>

                    <div className='flex items-center justify-center rounded-full bg-[#FEFEFE] bg-opacity-60 w-10 h-10 text-black cursor-pointer'>
                        <MdKeyboardArrowRight size={23} />
                    </div>
                </div>

                <Button
                    btnTitle={'Buy Now'}
                    btnType={"button"}
                    btnLink={"/all-product"}
                />

            </div>
        </div>
    )
}

export default HeroBanner
