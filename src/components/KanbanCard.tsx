import React from "react";
import {KanbanItem} from "../service/models";

interface KanbanItemProps {
    card: KanbanItem,
}

export default function KanbanCard(props: KanbanItemProps) {
    return <div>
        <p>{props.card.task}</p>
        <p>{props.card.description}</p>
        <button>prev</button>
        <button>edit</button>
        <button>next</button>
    </div>
}