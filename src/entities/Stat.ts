export enum StatType {
    INQUIRIES = 'inquiries',
    INQUIRIES_ATTENDED = 'inquiries_attended',
    INQUIRIES_FLAGGED = 'inquiries_flagged',
    INQUIRIES_BANNED = 'inquiries_banned',
    DOCTORS = 'doctors',
    DOCTORS_VALIDATED = 'doctors_validated',
    DOCTOR_CLAPS = 'doctor_claps'
}

export enum StatPeriod {
    TOTAL = 'total',
    DAILY = 'daily'
}

export interface IStat {
    count: number;
    period: StatPeriod;
    type: StatType;
}

export interface IStatApiResponse {
    count: number;
    period: string;
    type: string;
}

export class Stat {
    static createFromResponse(response: IStatApiResponse): Stat {
        return new Stat(
            response.count,
            response.period as StatPeriod,
            response.type as StatType
        );
    }

    constructor(
        public count: number,
        public period: StatPeriod,
        public type: StatType
    ) {}

    toJSON(): IStat {
        return {
            count: this.count,
            period: this.period,
            type: this.type
        };
    }
}
