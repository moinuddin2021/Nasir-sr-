import React from 'react'
import { MdLocalPrintshop } from 'react-icons/md';

const FeesHistory = () => {
  return (
    <>
        <section className='flex items-center justify-center'>
            <div className='FeesHistory w-3/4 bg-white mt-10 p-10 rounded drop-shadow-md'>
                <div className='top flex items-center justify-center'>
                    <div className='lable block mx-auto'>
                        <h1 className='text-[#020D46] font-bold text-3xl text-center p-3'>Fees History</h1>
                    </div> 
                    <div className='btn block'>
                        <button class="rounded-md p-1 text-3xl bg-[#020D46] text-white"><MdLocalPrintshop/></button>
                    </div>  
                </div>
                <div className="overflow-x-auto relative">
                    <table className="w-full text-sm text-left">
                        <thead className="text-sm uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="py-3 px-6">Date</th>
                                <th scope="col" className="py-3 px-6">Total</th>
                                <th scope="col" className="py-3 px-6">Paidup</th>
                                <th scope="col" className="py-3 px-6">Pending</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <td className="py-4 px-6">01-04-2022</td>
                                <td className="py-4 px-6">15000</td>
                                <td className="py-4 px-6">5000</td>
                                <td className="py-4 px-6">10000</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="py-4 px-6">01-04-2022</td>
                                <td className="py-4 px-6">15000</td>
                                <td className="py-4 px-6">5000</td>
                                <td className="py-4 px-6">10000</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="py-4 px-6">01-04-2022</td>
                                <td className="py-4 px-6">15000</td>
                                <td className="py-4 px-6">5000</td>
                                <td className="py-4 px-6">10000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </>
  )
}

export default FeesHistory
