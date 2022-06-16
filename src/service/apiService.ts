import {KanbanItem} from "./models";
import axios from "axios";

export const saveNewKanban = (item : KanbanItem) => {
    return axios.post("/api/kanban", item)
        .then(response => response.data)
}

export const getAllKanbans = () => {
    return axios.get("/api/kanban")
        .then(response => response.data)
}