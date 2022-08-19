import React from "react";
import { RiDashboardFill } from "react-icons/ri"
import { FaUsers } from "react-icons/fa"
import { BiRupee } from "react-icons/bi"
import { FaWpforms } from "react-icons/fa"
import { BsReceipt } from "react-icons/bs"
import { AiFillReconciliation } from "react-icons/ai"
import { GiTeacher } from "react-icons/gi"
import { IoMdInformationCircle } from "react-icons/io"
import { BiLogOut } from "react-icons/bi"

export default function Sidebar() {

    return <div className=" h-screen ">
        <div className="sidebar bg-white h-screen w-60">
            <div className="sidebar-top p-6 ">
                <img
                    src="../images/logo.png" alt="" className="w-44 cursor-pointer   " id="logo" />

            </div>
            <div className="navigation  ">
                <ul className="">
                    <li className="flex items-center  cursor-pointer hover:bg-lightblue-200 hover:text-blue-500 space-x-3  h-10 rounded-md pl-6 mr-8 ml-4  ">

                        <RiDashboardFill className="text-xl " />
                        <h1 className="text-base   ">
                            Dashboard
                        </h1>
                    </li>
                    <li className="flex items-center  cursor-pointer hover:bg-lightblue-200 hover:text-blue-500 space-x-3  h-10 rounded-md pl-6 mr-8 ml-4 ">



                        <FaUsers className="text-xl" />
                        <h1 className="text-base  ">
                            My Class
                        </h1>
                    </li>
                    <li className="flex items-center  cursor-pointer hover:bg-lightblue-200 hover:text-blue-500 space-x-3  h-10 rounded-md pl-6 mr-8 ml-4 ">



                        <BiRupee className="text-xl" />
                        <h1 className="text-base  ">Fees</h1>
                    </li>
                     <li className="flex items-center  cursor-pointer hover:bg-lightblue-200 hover:text-blue-500 space-x-3  h-10 rounded-md pl-6 mr-8 ml-4 ">



                        <BsReceipt className="text-xl" />
                        <h1 className="text-base  "> Reciept</h1>
                    </li>
                    <li className="flex items-center  cursor-pointer hover:bg-lightblue-200 hover:text-blue-500 space-x-3  h-10 rounded-md pl-6 mr-8 ml-4">



                        <FaWpforms className="text-xl" />

                        <h1 className="text-base  "> Report</h1>
                    </li>
                    <li className="flex items-center  cursor-pointer hover:bg-lightblue-200 hover:text-blue-500 space-x-3  h-10 rounded-md pl-6 mr-8 ml-4">



                        <GiTeacher className="text-xl" />
                        <h1 className="text-base  "> Faculty</h1>
                    </li>
                    <li className="flex items-center  cursor-pointer hover:bg-lightblue-200 hover:text-blue-500 space-x-3  h-10 rounded-md pl-6 mr-8 ml-4 ">



                        <AiFillReconciliation className="text-xl" />
                        <h1 className="text-base  ">Student Register</h1>
                    </li>
                    <li className="flex items-center  cursor-pointer hover:bg-lightblue-200 hover:text-blue-500 space-x-3  h-10 rounded-md pl-6 mr-8 ml-4 ">



                        <IoMdInformationCircle className="text-xl" />
                        <h1 className="text-base  "> Help</h1>
                    </li>
                    <li className="flex items-center  cursor-pointer hover:bg-lightblue-200 hover:text-blue-500 space-x-3  h-10 rounded-md pl-6 mr-8 ml-4 ">



                        <BiLogOut className="text-xl" />
                        <h1 className="text-base "> Logout</h1>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}



















































