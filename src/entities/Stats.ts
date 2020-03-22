export interface IStatsApiResponse {
    [key: string]: {
        inquiries?: number;
        inquiries_attended?: number;
        inquiries_flagged?: number;
        inquiries_banned?: number;
        doctors?: number;
        doctors_validated?: number;
    }
}
