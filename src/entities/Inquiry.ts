export enum InquiryPagination {
    PER_PAGE = 100
}

export interface IInquiry {
    createdAt: string;
    age: string;
    email: string;
    id: string;
    speciality: string | null;
    summary: string;
    time: string | null;
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
    speciality: string | null;
    summary: string;
    time: string | null;
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
            response.speciality,
            response.summary,
            response.time,
        );
    }

    constructor(
        public createdAt: Date,
        public age: string,
        public email: string,
        public id: string,
        public speciality: string | null,
        public summary: string,
        public time: string | null,
    ) {}

    toJSON(): IInquiry {
        return {
            createdAt: this.createdAt.toISOString(),
            age: this.age,
            email: this.email,
            id: this.id,
            speciality: this.speciality,
            summary: this.summary,
            time: this.time,
        };
    }
}
