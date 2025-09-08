import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';
import { toast } from 'react-toastify';
import database, { app } from '../firebaseConfig';
import { collection, addDoc, onSnapshot, query, where } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { auth } from '../firebaseConfig';
function Task_table() {
    const navigate = useNavigate();
    const inputRef = useRef();
    const [taskItem, setTaskItem] = useState([]); // store tasks from firestore
    const user = auth.currentUser; // logged in user...
    useEffect(() => {
        if (!user) return; // wait until user is logged in

        // ✅ create a query for the current user's tasks
        const q = query(
            collection(database, "tasks"),
            where("userId", "==", user.uid)
        );

        // ✅ listen in real-time
        const unsubscribe = onSnapshot(
            q,
            (querySnapshot) => {
                const tasks = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setTaskItem(tasks); // update state with live data
            },
            (error) => {
                console.error("Error fetching tasks:", error);
                toast.error("Error fetching tasks.");
            }
        );

        return () => unsubscribe(); // cleanup listener on unmount
    }, [user]); // re-run if user changes

    const handleSubmit = async (event) => {
        event.preventDefault();
        const task = event.target.task.value;

        if (!task) {
            toast.error("Task cannot be empty");
            return;
        }

        const user = auth.currentUser; // get latest user

        if (!user) {
            toast.error("You must be logged in to add a task.");
            return;
        }

        try {
            const docRef = await addDoc(collection(database, "tasks"), {
                task: task,
                created: new Date(),
                userId: user.uid, // ✅ safe now
            });

            console.log("Document written with ID: ", docRef.id);
            toast.success("Task added successfully!");
            event.target.reset();
        } catch (e) {
            console.error("Error adding document: ", e);
            toast.error("Error adding task.");
        }
    };

    return (
        <>
            <div>
                <div className='flex justify-center my-5 items-center'>
                    <span className='text-xl md:text-3xl font-bold'>Your tasks</span>
                </div>
                <div className='my-5 flex justify-center items-center  py-2 px-4 w-full md:w-1/2 mx-auto  gap-2'>
                    <form action="" onSubmit={handleSubmit} className='flex justify-center items-center w-full gap-2'>
                        <input type="text"
                            name="task" id="task"
                            className='border border-[#c9c7c7] dark:border-[#2d2f38] rounded p-1.5 dark:placeholder:text-[#929292] placeholder:text-[#939090]' placeholder='Add a new task' />
                        <button type='submit' className='bg-[#004145] dark:bg-[var(--color-bg-dark)] hover:cursor-pointer text-white font-bold py-2 px-4 rounded' ref={inputRef}>Add Task</button>
                    </form>
                </div>
                <div className='w-11/12 md:w-3/4 mx-auto my-5 '>
                    <div className='flex justify-evenly rounded-t-2xl items-center dark:bg-[var(--color-bg-dark)]  py-3 md:py-4 border-b border-gray-200 dark:border-[#2d2f38] w-full'>
                        <div>No.</div>
                        <div>Status</div>
                        <div>Details</div>
                    </div>
                    <div className='flex flex-col overflow-auto h-[32rem] md:h-[28rem] text-xs scrollbar-hidden'>
                        <table className='w-full'>

                            <tbody>
                                {
                                    taskItem.map((task) => (
                                        <tr key={task.id} className='flex justify-between md:justify-evenly items-center  border border-gray-200 dark:border-[#2d2f38] p-5 w-full my-2 rounded-2xl'>
                                            <td className=' dark:text-white dark:bg-[var(--color-bg-dark)] rounded-full py-1.5 md:py-2 px-2.5'>{task.no}</td>
                                            <td className='font-thin w-[20%] text-center h-5 text-wrap overflow-hidden'>{task.task}....</td>
                                            <td>
                                                <button onClick={() => navigate(`/details/${task.id}`)} className='bg-[#004145] hover:cursor-pointer text-white dark:bg-[var(--color-bg-dark)] py-1.5 px-4 rounded-full'>
                                                    Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Task_table;