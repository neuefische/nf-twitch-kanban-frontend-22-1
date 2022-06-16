export type KanbanStatus =
    'OPEN' |
    'IN_PROGRESS' |
    'DONE'

export interface KanbanItem {
    id?: string,
    task: string,
    description: string,
    status: KanbanStatus,
}
