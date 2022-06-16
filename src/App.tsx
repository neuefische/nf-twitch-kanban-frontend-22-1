import React, {useEffect, useState} from 'react';
import './App.css';
import Headline from "./components/Headline";
import CreateForm from "./components/CreateForm";
import KanbanGallery from "./components/KanbanGallery";
import {KanbanItem} from "./service/models";
import {getAllKanbans} from "./service/apiService";

export default function App() {

    const [tasks, setTasks] = useState<KanbanItem[]>();

    useEffect(() => {
        getAllKanbans()
            .then(tasksFromServer => setTasks(tasksFromServer))
    }, [])

    return (
        <div className="App">
            <Headline/>
            <CreateForm/>
            {
                tasks ?
                    <KanbanGallery tasks={tasks}/>
                    : <div>'Lade...'</div>
            }

        </div>
    );
}
