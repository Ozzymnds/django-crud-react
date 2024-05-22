import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'

export function TaskFormPage() {

    const { register, handleSubmit, setValue, formState: {
        errors
    } } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            updateTask(params.id, data)
        } else {
            console.log('creating')
            await createTask(data);
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
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title" {...register("title", { required: true })} />
                {errors.title && <span>this field is required</span>}
                <textarea rows="3" placeholder="description" {...register("description", { required: true })}></textarea>
                {errors.description && <span>this field is required</span>}
                <button type="submit">Save</button>
            </form>

            {params.id && <button onClick={async () => {
                const accepted = window.confirm('Are you sure you want to delete this field?')
                if (accepted) {
                    await deleteTask(params.id)
                    navigate("/tasks");
                }
            }}>Delete</button>}
        </div>
    )
}
