import React, {useEffect, useState} from "react";
import {getAllKanbans} from "../service/apiService";
import {KanbanItem, KanbanStatus} from "../service/models";
import KanbanCard from "./KanbanCard";

interface KanbanGalleryProps {
    tasks: KanbanItem[],
    onChange: () => void,
}

export default function KanbanGallery(props: KanbanGalleryProps) {

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

    const columns: { title: string, status: KanbanStatus }[] = [
        {
            title: 'Offen',
            status: 'OPEN',
        },
        {
            title: 'In Arbeit',
            status: 'IN_PROGRESS',
        },
        {
            title: 'Fertig',
            status: 'DONE',
        }
    ]

    return (
        <div className={'kanbanGallery'}>
            {
                columns.map(column =>
                    <div key={column.status}>
                        <h2>{column.title}</h2>
                        {
                            (categorizedTasks.get(column.status) || []).map(task =>
                                <KanbanCard key={task.id} card={task} onChange={props.onChange}/>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}