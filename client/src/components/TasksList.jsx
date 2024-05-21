import { useEffect } from "react"
import { fetchData } from "../api/tasks.api"


export function TasksList() {

    useEffect(() => {
        async function loadTasks() {
            const res = await fetchData()
            console.log(res)
        }
        loadTasks()
    }, [])

    return (
        <div>TasksList</div>
    )
}