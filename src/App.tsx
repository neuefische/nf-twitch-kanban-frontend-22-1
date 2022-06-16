import React from 'react';
import './App.css';
import Headline from "./components/Headline";
import CreateForm from "./components/CreateForm";
import KanbanGallery from "./components/KanbanGallery";

export default function App() {

    return (
        <div className="App">
            <Headline/>
            <CreateForm/>
            <KanbanGallery/>
        </div>
    );
}


