import React, {useState} from "react";
import {saveNewKanban} from "../service/apiService";

export default function CreateForm() {

    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')

    const sendData = () => {
        saveNewKanban({task,description,status:'OPEN'})
            .then(()=>{
                setTask('')
                setDescription('')
            })
            .catch(err => console.log(err.message))
    }

    return <div>
        <input type="text" placeholder={'Neue Task'} value={task} onChange={ev => setTask(ev.target.value)}/>
        <input type="text" placeholder={'Beschreibung'} value={description} onChange={ev => setDescription(ev.target.value)}/>
        <button onClick={sendData}>save</button>
    </div>
}