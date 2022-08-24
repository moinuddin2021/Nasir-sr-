import React from 'react'
import {MdDelete} from 'react-icons/md';
import {MdEdit} from 'react-icons/md';
import { Tooltip } from "@material-tailwind/react";

const Table = () => {
  return (
    <>
        <section className='table h-full w-full mt-10'>
            <div className='flex justify-center items-center'>              
              <div class="overflow-x-auto relative shadow-md sm:rounded-lg bg-white p-5">
                  <table class="w-full text-sm text-left shadow-md">
                      <thead class="text-xs text-gray-700 uppercase dark:bg-[#D9D9D9]">
                          <tr>
                              <th scope="col" class="py-3 px-6">Profile</th>
                              <th scope="col" class="py-3 px-6">ID</th>
                              <th scope="col" class="py-3 px-6">Name</th>
                              <th scope="col" class="py-3 px-6">Class</th>
                              <th scope="col" class="py-3 px-6">Phone</th>
                              <th scope="col" class="py-3 px-6">Total</th>
                              <th scope="col" class="py-3 px-6">Paidup</th>
                              <th scope="col" class="py-3 px-6">Pending</th>
                              <th scope="col" class="py-3 px-6 text-center" colSpan="2">Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr class="bg-white border">
                              <th scope="row" class="py-4 px-6"><img className='h-10 w-10 rounded-full' src="./images/profile.jpg" alt="profile" /></th>
                              <td class="py-4 px-6">0001</td>
                              <td class="py-4 px-6">Jhone</td>
                              <td class="py-4 px-6">12</td>
                              <td class="py-4 px-6">1234567891</td>
                              <td class="py-4 px-6">20000</td>
                              <td class="py-4 px-6">10000</td>
                              <td class="py-4 px-6">10000</td>
                              <td class="py-4 px-6 flex">
                                <Tooltip content="Delete" placement="bottom-end" className='text-white bg-black rounded p-2'><a href="#" class="text-xl p-2"><MdDelete/></a></Tooltip>
                                <Tooltip content="Edit" placement="bottom-end" className='text-white bg-black rounded p-2'><a href="#" class="text-xl p-2"><MdEdit/></a></Tooltip>
                              </td>
                          </tr>
                          <tr class="bg-white border">
                              <th scope="row" class="py-4 px-6"><img className='h-10 w-10 rounded-full' src="./images/profile.jpg" alt="profile" /></th>
                              <td class="py-4 px-6">0001</td>
                              <td class="py-4 px-6">Jhone</td>
                              <td class="py-4 px-6">12</td>
                              <td class="py-4 px-6">1234567891</td>
                              <td class="py-4 px-6">20000</td>
                              <td class="py-4 px-6">10000</td>
                              <td class="py-4 px-6">10000</td>
                              <td class="py-4 px-6 flex">
                                <Tooltip content="Delete" placement="bottom-end" className='text-white bg-black rounded p-2'><a href="#" class="text-xl p-2"><MdDelete/></a></Tooltip>
                                <Tooltip content="Edit" placement="bottom-end" className='text-white bg-black rounded p-2'><a href="#" class="text-xl p-2"><MdEdit/></a></Tooltip>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
            </div>
        </section>
{/*                 
<nav aria-label="Page navigation example">
  <ul class="inline-flex items-center -space-x-px">
    <li>
      <a href="#" class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Previous</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
    <li>
      <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
  </ul>
</nav> */}  
    </>
  )
}

export default Table