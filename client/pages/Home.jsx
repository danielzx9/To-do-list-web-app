import { useEffect, useState } from "react";
import axios from "../utils/axios";

export default function Home() {
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try {
            const res = await axios.get("/api/tasks");
            setTasks(res.data);

        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Mis tareas</h1>
            <ul>
                {tasks.map((t) => (
                    <li key={t._id} className="mb-2 border-b pb-1">
                        <span className={t.completed ? "line-through" : ""}>{t.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )


}
