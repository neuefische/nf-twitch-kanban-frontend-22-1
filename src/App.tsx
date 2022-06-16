import React, {useEffect, useState} from 'react';
import './App.css';
import Headline from "./components/Headline";
import CreateForm from "./components/CreateForm";
import KanbanGallery from "./components/KanbanGallery";
import {KanbanItem} from "./service/models";
import {getAllKanbans} from "./service/apiService";

export default function App() {

    const [tasks, setTasks] = useState<KanbanItem[]>();

    const fetchAllItems = () => {
        getAllKanbans()
            .then(tasksFromServer => setTasks(tasksFromServer))
    }

    useEffect(() => {
        fetchAllItems()
    }, [])

    return (
        <div className="App">
            <Headline/>
            <CreateForm onCreate={fetchAllItems}/>
            {
                tasks ?
                    <KanbanGallery tasks={tasks} onChange={fetchAllItems}/>
                    : <div>'Lade...'</div>
            }

        </div>
    );
}
