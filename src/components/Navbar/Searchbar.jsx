import logo from '../../assets/Notch_Optical_logo.webp';
import { PiUser } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import {AiOutlineMenu} from "react-icons/ai";
import {GoHeart} from "react-icons/go";
import {IoSearchOutline} from "react-icons/io5";
import {Link} from "react-router-dom";

const Searchbar = () => {
    return (
        <div className="Searchbar py-4 border-b border-borderGray">
            <div className="container mx-auto px-4 flex flex-row items-center justify-between">
                <div className='xl:hidden mobile-nav flex gap-4'>
                    <AiOutlineMenu className='visible xl:hidden w-6 h-6 xl:w-9 xl:h-9 text-accentGray'/>
                    <GoHeart className='visible xl:hidden w-6 h-6 xl:w-9 xl:h-9 text-accentGray'/>
                </div>
                {/*Notch Optics Logo */}
                <div className="logo flex-shrink-0">
                    <Link to='./'><img src={logo} alt="Notch Optics" className="w-36 xl:w-48 h-auto"/></Link>
                </div>

                {/*Searchbar + Profile + Favourite + Cart */}
                <div className="flex flex-row searchBar items-center justify-between gap-4 xl:gap-10">
                    <div className="search">
                        <div className="join hidden xl:flex">
                            <div>
                                <div>
                                    <input
                                        className="input input-bordered border-borderGray rounded-none focus:ring-1 hover:ring-1 hover:ring-accentGray focus:ring-accentGray focus:outline-none join-item"
                                        placeholder="Search..."/>
                                </div>
                            </div>
                            <div className="indicator">
                                <button className="join-item rounded-none  bg-accentGray hover:bg-accentGray transition-none px-3"><IoSearchOutline className='w-6 h-6 text-white'/>
                                </button>
                            </div>
                        </div>
                        <IoSearchOutline className='visible xl:hidden w-6 h-6 xl:w-9 xl:h-9 text-accentGray'/>
                    </div>
                    <div className="profile hidden xl:flex">
                        <PiUser className='w-9 h-9 text-accentGray'/>
                    </div>
                    <div className="favourite hidden xl:flex">
                        <GoHeart className='w-9 h-9 text-accentGray'/>
                    </div>
                    <div className="menuCart">
                        <BsCart3 className='w-6 h-6 xl:w-9 xl:h-9 text-accentGray'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;