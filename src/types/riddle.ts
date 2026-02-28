export type ClearStatus = 'SUCCESS' | 'FAILURE' | 'PARTICIPATED';

export interface RiddleRecord {
    id: string;
    title: string;
    location: string;
    organizer: string;
    status: ClearStatus;
    participants: string[];
    comment: string;
    playDate: string;
}
