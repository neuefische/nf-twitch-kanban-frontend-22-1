import React from "react";

export default function KanbanGallery(){

    const columns = ["TODO", "IN PROGRESS", "DONE"]

    return(
        <div className={'kanbanGallery'}>
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
    )
}