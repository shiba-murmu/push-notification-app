import React from 'react'
import Task_table from './Task_table'
import Button_tap_animate from '../components/animation/Button_tap_animate'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { MyContext } from '../pages/Data/MyContext'
import { toast } from 'react-toastify';

const PicAndInfo = () => {
    const { User } = useContext(MyContext);

  
    return (
        <>
            <div className='mt-10 mb-5 md:h-full md:flex md:justify-center md:items-center md:mt-5 md:w-1/4'>
                {/* for profile image */}
                <img src={User.photo} alt="Profile"
                    className='h-30 w-30 md:h-50 md:w-50 rounded-full'
                />
            </div>
            <div className='flex flex-col md:h-full md:w-3/4 md:flex md:justify-center md:items-start  items-center '>
                {/* For user's informations. */}
                <h2 className='text-lg md:text-3xl font-bold'>{User.name}</h2>
                <p className='text-sm'>{User.email}</p>
            </div>
        </>
    )
}



function Profile() {
    const navigate = useNavigate();
    const { logout } = useContext(MyContext);
    const handleButtonClick = () => {
        navigate('/add-task');
    }

    const Logouthandle = () => {
        logout(); // calling the logout funt. from the MyContext
        toast.success("Logout Successful"); // toast notification for logout success.
        navigate('/') // navigate to sign-in page.  
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
                        <button onClick={Logouthandle} className='bg-[#efefef] w-40 border border-[#c9c7c7] dark:border-0 dark:bg-[#293749] hover:cursor-pointer hover:dark:bg-[var(--color-bg-light-dark)] dark:text-white rounded-md px-4 py-2'>Logout</button>
                    </Button_tap_animate>
                </div>
            </div>
        </>
    )
}

export default Profile