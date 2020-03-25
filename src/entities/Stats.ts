export interface IStatApiResponse {
    inquiries?: number;
    inquiries_attended?: number;
    inquiries_flagged?: number;
    inquiries_banned?: number;
    doctors?: number;
    doctors_validated?: number;
    psychologists_validated?: number;
}

export interface IStatsApiResponse {
    [key: string]: IStatApiResponse
}
