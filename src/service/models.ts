export enum KanbanStatus {
    'OPEN' = 'OPEN',
    'IN_PROGRESS'= 'IN_PROGRESS',
    'DONE' = 'DONE',
}

export interface KanbanItem {
    id?: string,
    task: string,
    description: string,
    status: KanbanStatus,
}
