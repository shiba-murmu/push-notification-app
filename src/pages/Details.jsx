import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import database from '../firebaseConfig';
import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { toast } from 'react-toastify';

function Details() {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const navigate = useNavigate();
    const inputRef = useRef();

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const docRef = doc(database, 'tasks', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setTask({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("task not found");
                }
            } catch (error) {
                console.error("Error fetching document:", error);
                toast.error("Failed to fetch task details.");
            }
        }
        fetchTask();
    }, [id])

    const updateTask = async (event) => {
        event.preventDefault();
        // Update task logic here
        const updatedTask = event.target.updateInput.value;
        if (!updatedTask) {
            toast.error("Update input cannot be empty.");
            return;
        }
        console.log(updatedTask);
        try {
            await updateDoc(doc(database, 'tasks', id), { task: updatedTask });
            toast.success("Task updated successfully.");
            setTask({ ...task, task: updatedTask });
            event.target.reset();
        } catch (error) {
            console.error("Error updating document:", error);
            toast.error("Failed to update task.");
        }
        
    }

    const deleteTask = async (id) => {
        try {
            await deleteDoc(doc(database, 'tasks', id));
            toast.success("Task deleted successfully.");
            navigate('/add-task');
        } catch (error) {
            console.error("Error deleting document:", error);
            toast.error("Failed to delete task.");
        }
    }

    if (!task) {
        return <div className='text-center mt-10'>Task may be deleted or not found!</div>;
    }

    return (
        <>
            <div className='flex text-center justify-center flex-col my-5 items-center'>
                <div className=' p-5 text-md m-2 md:w-1/2 md:text-xl rounded-lg border border-[var(--border-in-light-theme)] dark:border-0 flex flex-col gap-5'>
                    <div>
                        <p>{task.task}</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-full justify-center items-center h-30 px-2'>
                    <form action="" onSubmit={(event) => updateTask(event)} className='w-full md:w-1/3 flex h-[50rem] justify-center items-center flex-col gap-2'>
                        <textarea name="updateInput" id="" ref={inputRef} className='dark:bg-[var(--color-bg-dark)]  w-[100%] md:w-1/2 p-2 text-sm mb-3 md:text-md rounded-lg border border-[var(--border-in-light-theme)] dark:border-[#2d2f38]  flex flex-col gap-5'></textarea>
                        <div className='flex gap-5'>
                            <button type='submit' className='hover:cursor-pointer  bg-[#004145] dark:bg-[var(--color-bg-dark)] text-white px-4 py-2 rounded'>Update</button>
                            <button onClick={() => deleteTask(task.id)} className='hover:cursor-pointer  bg-[#004145] dark:bg-[var(--color-bg-dark)] text-white px-4 py-2 rounded'>Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Details

