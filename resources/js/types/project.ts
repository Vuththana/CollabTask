export interface Project {
    id: number;
    name: string;
    team_id: number;
    description?: string;
    start_date?: string;
    end_date?: string;
    status?: string;
    members: Member[]
}

export interface Member {
    user_id: number;
    project_id: number;
    name: string;
}