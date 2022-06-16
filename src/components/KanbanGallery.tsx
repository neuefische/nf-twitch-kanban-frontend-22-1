import React, {useEffect, useState} from "react";
import {getAllKanbans} from "../service/apiService";
import {KanbanItem, KanbanStatus} from "../service/models";
import KanbanCard from "./KanbanCard";

interface KanbanGalleryProps {
    tasks: KanbanItem[],
    onChange: () => void,
}

export default function KanbanGallery(props: KanbanGalleryProps){

    const [categorizedTasks, setCategorizedTasks] = useState(new Map<KanbanStatus, KanbanItem[]>())

    useEffect(() => {
        const taskByStatus = new Map<KanbanStatus, KanbanItem[]>();
        props.tasks.forEach(task => {
            let tasksForThisStatus = taskByStatus.get(task.status);
            if (!tasksForThisStatus) {
                tasksForThisStatus = []
                taskByStatus.set(task.status, tasksForThisStatus)
            }
            tasksForThisStatus.push(task)
        })
        setCategorizedTasks(taskByStatus)
    }, [props.tasks])

    return(
        <div className={'kanbanGallery'}>
            {
                Array.from(categorizedTasks.keys()).map(column =>
                    <div key={column}>
                        <h2>{column}</h2>
                        {
                            categorizedTasks.get(column)!.map(task =>
                                <KanbanCard key={task.id} card={task} onChange={props.onChange}/>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}