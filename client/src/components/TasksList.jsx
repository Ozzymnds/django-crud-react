import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api"
import { TaskCard } from "./TaskCard";

export function TasksList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            try {
                const res = await getAllTasks();
                if (res && res.data) {
                    setTasks(res.data);
                } else {
                    console.error('Unexpected response format or no data:', res);
                }
            } catch (error) {
                console.error('Error loading tasks:', error);
            }
        }
        loadTasks();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-3">
            {Array.isArray(tasks) && tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}