import React from "react";
import {KanbanItem} from "../service/models";
import {advanceItem, deleteKanban, moveBackItem} from "../service/apiService";

interface KanbanItemProps {
    card: KanbanItem,
    onChange: () => void,
}

export default function KanbanCard(props: KanbanItemProps) {

    const onDeleteClick = () => {
        deleteKanban(props.card.id)
            .then(() => props.onChange())
    }

    const moveNext = () => {
        advanceItem(props.card)
            .then(() => props.onChange())
    }

    const moveBack = () => {
        moveBackItem(props.card)
            .then(() => props.onChange())
    }

    const deleteButton = <button onClick={onDeleteClick}>delete</button>

    return <div>
        <p>{props.card.task}</p>
        <p>{props.card.description}</p>
        {
            props.card.status === 'OPEN' ?
                deleteButton
                :
                <button className={'button'} onClick={moveBack}>prev</button>
        }
        <button className={'button'}>edit</button>
        {
            props.card.status === 'DONE' ?
                deleteButton
                :
                <button className={'button'} onClick={moveNext}>next</button>
        }
    </div>
}