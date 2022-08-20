import React from "react";
import { HiPlus } from "react-icons/hi"
import { GiTeacher } from "react-icons/gi"
import { FaUsers } from "react-icons/fa"



export default function Cards() {

    return <div className="">
      
        
              
                <div className="right h-52 flex justify-center text-center space-x-10 pr-5 ">
                        <div id="faculty" className="Faculty bg-student-900 text-white w-80  h-48 rounded-xl  cursor-pointer space-y-2 ">
                            <div className="flex items-center justify-center space-x-5 pt-3">
                                <div className="left bg-white w-20 h-14 justify-center   rounded-md  ">
                                    <GiTeacher className="text-5xl text-student-900 mx-3"/>
                                </div>
                                <div className="right">
                                    <h1 className=" text-2xl ">Faculties</h1>
                                    <p className=" text-4xl font-bold ">500</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pl-6 pr-6 pt-3 ">
                                <div>
                                <p className=" text-2xl font-bold ">500</p>
                                <h1 className=" text-xs font-medium ">Total Pending Faculty </h1>
                                </div>
                                    <div className="bg-white h-16">
                                            .
                                    </div>
                                <div>
                                <p className=" text-2xl font-bold ">2500</p>
                                <h1 className=" text-xs font-medium ">Total Pending Salary</h1>
                                </div>
                            </div>
                        </div>
                        <div id="student" className="student bg-faculty-900 text-white w-80  h-48 rounded-xl  cursor-pointer space-y-2">
                            <div className="flex items-center justify-center space-x-5 pt-3">
                                <div className="left bg-white w-20 px-2 h-14 justify-center   rounded-md  ">
                                    <FaUsers className="text-6xl text-faculty-900 "/>
                                </div>
                                <div className="right">
                                    <h1 className=" text-2xl ">Students</h1>
                                    <p className=" text-4xl font-bold ">500</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pl-6 pr-6 pt-3 ">
                                <div>
                                <p className=" text-2xl font-bold ">500</p>
                                <h1 className=" text-xs font-medium ">Total Pending Student </h1>
                                </div>
                                    <div className="bg-white h-16">
                                            .
                                    </div>
                                <div>
                                <p className=" text-2xl font-bold ">2500</p>
                                <h1 className=" text-xs font-medium ">Total Pending Fees</h1>
                                </div>
                            </div>
                        </div>
                        
                </div>
    </div>
}