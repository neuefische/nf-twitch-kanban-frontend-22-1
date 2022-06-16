import {KanbanItem} from "./models";
import axios from "axios";

export const saveNewKanban = (item : KanbanItem) => {
    return axios.post("/api/kanban", item)
        .then(response => response.data)
}