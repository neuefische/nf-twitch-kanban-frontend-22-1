import React from 'react';
import './App.css';

export default function App() {

    const columns = ["TODO", "IN PROGRESS", "DONE"]

    return (
        <div className="App">
            <h1>Kanban-Board</h1>
            <div>
                <input type="text"/>
                <input type="text"/>
                <button>save</button>
            </div>
            {
                columns.map(column =>
                    <div key={column}>
                        <h2>{column}</h2>
                        <div>
                            <p>Hunde füttern</p>
                            <p>Futter einkaufen</p>
                            <button>prev</button>
                            <button>edit</button>
                            <button>next</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}


