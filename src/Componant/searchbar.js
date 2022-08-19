import React from "react";
import {AiOutlineSearch} from "react-icons/ai"
import {FaRegBell} from "react-icons/fa"
import {FaUserAlt} from "react-icons/fa"
import {BsThreeDotsVertical} from "react-icons/bs"


export default function Searchbar() {

    return <div className="w-full bg-white h-[70px] shadow-xl flex flex-row items-center justify-between">
            <div className="left pl-5">
                <form action="">
                    <div className="flex items-center p-5 ">
                        <AiOutlineSearch className="text-2xl text-gray-600"/>
                        <input type="Search"  placeholder="Search now" className=" py-1 px-2 text-lg" />
                    </div>
                </form>
            </div>
            <div className="right flex items-center space-x-5 pr-5">
                <FaRegBell className="text-blue-500 text-xl cursor-pointer"/>
                <form action="" className="flex items-center space-x-2 cursor-pointer">
                <div className="bg-gray-700 p-2 rounded-full">
                    <FaUserAlt className="text-xl text-white"/>
                </div>
                <div className="text-left">
                        <p className="text-base">Nasir Khan</p>
                        <p className="text-xs text-gray-500">nasirkhan@gmail.com</p>
                </div>
                    <BsThreeDotsVertical className="cursor-pointer text-gray-500"/>
                </form>
            </div>
    </div>
}





















































