import React from 'react'

function Task_table() {
    return (
        <>
            <div>
                <div className='flex justify-center my-5 items-center'>
                    <span className='text-xl md:text-3xl font-bold'>Your tasks</span>
                </div>
                <div className='my-5 flex justify-center items-center  py-2 px-4 w-full md:w-1/2 mx-auto  gap-2'>
                    <input type="text" className='border border-[#c9c7c7] dark:border-[#2d2f38] rounded p-1.5' placeholder='Add a new task'/>
                    <button className='bg-[#004145] hover:bg-[#45a049] text-white font-bold py-2 px-4 rounded'>Add Task</button>
                </div>
                <div className=' flex justify-center items-center w-full'>
                    <table className='min-w-full'>
                        <thead className='mb-5'>
                            <tr className=''>
                                <th className=" w-1/3 text-center ">
                                    <span className=' border border-[#c9c7c7]  dark:border-[#2d2f38] py-2 px-4 rounded dark:bg-[var(--color-bg-dark)]'>Task No.</span>
                                </th>
                                <th className=" w-1/3 text-center ">
                                    <span className=' border border-[#c9c7c7] dark:border-[#2d2f38]  py-2 px-4 rounded dark:bg-[var(--color-bg-dark)]'>Status</span>
                                </th>
                                <th className=" w-1/3 text-center ">
                                    <span className=' border border-[#c9c7c7] dark:border-[#2d2f38] py-2 px-4 rounded dark:bg-[var(--color-bg-dark)]'>Details</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="border-b h-20 border-gray-200 dark:border-[#2d2f38]">
                                <td className="px-4 py-2 text-center">1</td>
                                <td className="px-4 py-2 text-center">In Progress</td>
                                <td className="py-5 flex justify-center items-center">
                                    <button
                                        className={`bg-[#efefef]  dark:bg-[var(--color-bg-light-dark)] hover:dark:bg-[#293749] flex md:w-24 items-center justify-center rounded-[5px] px-3 py-1 md:py-[10px] border border-[#c9c7c7] dark:border-[#2d2f38] text-base  font-medium hover:cursor-pointer text-[#787878] dark:text-white`}>
                                        Details
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-b h-20 border-gray-200 dark:border-[#2d2f38]">
                                <td className="px-4 py-2 text-center">2</td>
                                <td className="px-4 py-2 text-center">Completed</td>
                                <td className="py-5 flex justify-center items-center">
                                    <button
                                       className={`bg-[#efefef]  dark:bg-[var(--color-bg-light-dark)] hover:dark:bg-[#293749] flex md:w-24 items-center justify-center rounded-[5px] px-3 py-1 md:py-[10px] border border-[#c9c7c7] dark:border-[#2d2f38] text-base  font-medium hover:cursor-pointer text-[#787878] dark:text-white`}
                                    >
                                        Details
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Task_table