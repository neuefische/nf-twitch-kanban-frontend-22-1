import React from "react";
import {getAllKanbans} from "../service/apiService";
import {KanbanItem} from "../service/models";
import KanbanCard from "./KanbanCard";

interface KanbanGalleryProps {
    tasks: KanbanItem[],
    onChange: () => void,
}

export default function KanbanGallery(props: KanbanGalleryProps){

    const columns = ["TODO", "IN PROGRESS", "DONE"]

    return(
        <div className={'kanbanGallery'}>
            {
                columns.map(column =>
                    <div key={column}>
                        <h2>{column}</h2>
                        {
                            props.tasks.map(task =>
                                <KanbanCard key={task.id} card={task} onChange={props.onChange}/>
                            )
                        }

                    </div>
                )
            }
        </div>
    )
}