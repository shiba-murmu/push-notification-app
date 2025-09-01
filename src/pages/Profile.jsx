import React from 'react'
import Task_table from './Task_table'
import Button_tap_animate from '../components/animation/Button_tap_animate'
import { useNavigate } from 'react-router-dom'
const PicAndInfo = () => {
    return (
        <>
            <div className='mt-10 mb-5 md:h-full md:flex md:justify-center md:items-center md:mt-5 md:w-1/4'>
                {/* for profile image */}
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Profile"
                    className='h-30 w-30 md:h-50 md:w-50 rounded-full'
                />
            </div>
            <div className='flex flex-col md:h-full md:w-3/4 md:flex md:justify-center md:items-start  items-center '>
                {/* For user's informations. */}
                <h2 className='text-lg md:text-3xl font-bold'>User Name</h2>
                <p className='text-sm'>user@example.com</p>
            </div>
        </>
    )
}



function Profile() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/add-task');
    }
    return (
        <>
            <div>
                <div className='flex flex-col md:flex-row md:justify-center md:items-center items-center h-70'>
                    <PicAndInfo />
                </div>
                <div className='flex gap-4 flex-col md:flex-row md:justify-center md:items-center justify-center items-center h-50'>
                    <Button_tap_animate>
                        <button onClick={handleButtonClick} className='bg-[#efefef] w-40 border border-[#c9c7c7] dark:border-0 dark:bg-[#293749] hover:cursor-pointer hover:dark:bg-[var(--color-bg-light-dark)] dark:text-white rounded-md px-4 py-2'>Add Task</button>
                    </Button_tap_animate>
                    <Button_tap_animate>
                        <button className='bg-[#efefef] w-40 border border-[#c9c7c7] dark:border-0 dark:bg-[#293749] hover:cursor-pointer hover:dark:bg-[var(--color-bg-light-dark)] dark:text-white rounded-md px-4 py-2'>Logout</button>
                    </Button_tap_animate>
                </div>
            </div>
        </>
    )
}

export default Profile