import React from "react";
import {KanbanItem} from "../service/models";
import {deleteKanban} from "../service/apiService";

interface KanbanItemProps {
    card: KanbanItem,
    onChange: () => void,
}

export default function KanbanCard(props: KanbanItemProps) {

    const onDeleteClick = () => {
        deleteKanban(props.card.id)
            .then(() => props.onChange())
    }

    return <div>
        <p>{props.card.task}</p>
        <p>{props.card.description}</p>
        <button>prev</button>
        <button>edit</button>
        <button>next</button>
        <button onClick={onDeleteClick}>delete</button>
    </div>
}