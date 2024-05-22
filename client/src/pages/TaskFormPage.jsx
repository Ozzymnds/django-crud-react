import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function TaskFormPage() {

    const { register, handleSubmit, setValue, formState: {
        errors
    } } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            updateTask(params.id, data)
            toast.success('Task updated', {
                duration: 3000,
                position: 'top-right',
                style: {
                    background: 'blue',
                    color: 'black'
                }
            })
        } else {
            console.log('creating')
            await createTask(data);
            toast.success('Task created', {
                duration: 3000,
                position: 'top-right',
                style: {
                    background: 'green',
                    color: 'black'
                }
            })
        }
        navigate("/tasks");
    })

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const { data } = await getTask(params.id)
                setValue('title', data.title)
                setValue('description', data.description)
            }
        }
        loadTask();
    }, []);

    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input type="text"
                    placeholder="title"
                    {...register("title", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb3' />
                {errors.title && <span>this field is required</span>}
                <textarea rows="3"
                    placeholder="description"
                    {...register("description",
                        { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb3'></textarea>
                {errors.description && <span>this field is required</span>}
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3' type="submit">Save</button>
            </form>

            {params.id &&
                <div>
                    <button className='bg-red-500 p-3 rounded-lg block w-full mt-3' onClick={async () => {
                        const accepted = window.confirm('Are you sure you want to delete this field?')
                        if (accepted) {
                            await deleteTask(params.id)
                            navigate("/tasks");
                            toast.success('Task deleted', {
                                duration: 3000,
                                position: 'top-right',
                                style: {
                                    background: 'red',
                                    color: 'black'
                                }
                            })
                        }
                    }}>Delete</button>
                </div>}
        </div>
    )
}
