import { DoctorType } from "./Doctor";

export enum InquiryPagination {
    PER_PAGE = 100
}

export interface IInquiry {
    createdAt: string;
    age: string;
    email: string;
    id: string;
    doctorType: DoctorType;
    flagged: boolean;
    active: boolean;
    attended: boolean;
    doctorId?: string;
    speciality?: string;
    summary: string;
    time?: string;
}

export interface IInquiryPaginated {
    inquiries: Inquiry[];
    total: number;
}

export interface IInquiryApiResponse {
    createdAt: string;
    age: string;
    email: string;
    id: string;
    doctorType: string;
    flagged: boolean;
    active: boolean;
    attended: boolean;
    doctorId?: string;
    speciality?: string;
    summary: string;
    time?: string;
}

export interface IInquiryPaginatedApiResponse {
    inquiries: IInquiry[];
    total: number;
}

export class Inquiry {
    static createFromResponse(response: IInquiryApiResponse): Inquiry {
        return new Inquiry(
            new Date(response.createdAt),
            response.age,
            response.email,
            response.id,
            response.summary,
            response.doctorType as DoctorType,
            response.flagged,
            response.active,
            response.attended,
            response.speciality,
            response.time,
            response.doctorId
        );
    }

    constructor(
        public createdAt: Date,
        public age: string,
        public email: string,
        public id: string,
        public summary: string,
        public doctorType: DoctorType,
        public flagged: boolean,
        public active: boolean,
        public attended: boolean,
        public speciality?: string,
        public time?: string,
        public doctorId?: string
    ) {}

    toJSON(): IInquiry {
        return {
            createdAt: this.createdAt.toISOString(),
            age: this.age,
            email: this.email,
            id: this.id,
            doctorType: this.doctorType,
            flagged: this.flagged,
            active: this.active,
            attended: this.attended,
            speciality: this.speciality,
            summary: this.summary,
            time: this.time,
            doctorId: this.doctorId
        };
    }
}
