import React, {useState} from "react";
import axios from "axios";
import {KanbanStatus} from "../service/models";

export default function CreateForm() {

    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')

    const sendData = () => {
        axios.post("/api/kanban", {
            task,
            description,
            status : KanbanStatus.OPEN
        })
    }

    return <div>
        <input type="text" placeholder={'Neue Task'} value={task} onChange={ev => setTask(ev.target.value)}/>
        <input type="text" placeholder={'Beschreibung'} value={description} onChange={ev => setDescription(ev.target.value)}/>
        <button onClick={sendData}>save</button>
    </div>
}