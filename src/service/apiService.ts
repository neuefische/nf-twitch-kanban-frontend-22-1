import {KanbanItem} from "./models";
import axios from "axios";

export const saveNewKanban = (item : Omit<KanbanItem, 'id'>) => {
    return axios.post("/api/kanban", item)
        .then(response => response.data)
}

export const getAllKanbans = () => {
    return axios.get("/api/kanban")
        .then(response => response.data)

}

export const deleteKanban = (id: string) => {
    return axios.delete(`/api/kanban/${id}`)
        .then(response => response.data)
}

export const advanceItem = (item : KanbanItem) => {
    return axios.put(`/api/kanban/next`,item)
        .then(response => response.data)
}

export const moveBackItem = (item : KanbanItem) => {
    return axios.put(`/api/kanban/prev`,item)
        .then(response => response.data)
}