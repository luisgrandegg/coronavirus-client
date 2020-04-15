import { DoctorType } from "../entities/Doctor";

export interface IInquiryListParams {
    doctorId?: string;
    countries?: string[];
    speciality?: string;
    specialities?: string[];
    attended?: boolean;
    solved?: boolean;
    active?: boolean;
    flagged?: boolean;
    page?: number;
    perPage?: number;
    doctorType?: DoctorType;
}

export class InquiryListParams {
    static deserialize(
        data: IInquiryListParams
    ): InquiryListParams {
        return new InquiryListParams(
            data.doctorId,
            data.speciality,
            data.specialities,
            data.attended,
            data.solved,
            data.active,
            data.flagged,
            data.page,
            data.perPage,
            data.doctorType,
            data.countries
        );
    }

    constructor(
        public doctorId?: string,
        public speciality?: string,
        public specialities?: string[],
        public attended?: boolean,
        public solved?: boolean,
        public active?: boolean,
        public flagged?: boolean,
        public page?: number,
        public perPage?: number,
        public doctorType?: DoctorType,
        public countries?: string[]
    ) { }

    toJSON(): IInquiryListParams {
        const params: IInquiryListParams = {};
        if (this.doctorId) {
            params.doctorId = this.doctorId;
        }
        if (this.speciality) {
            params.speciality = this.speciality;
        }
        if (this.speciality) {
            params.specialities = this.specialities;
        }
        if (this.countries) {
            params.countries = this.countries;
        }
        if (this.attended === true || this.attended === false) {
            params.attended = this.attended;
        }
        if (this.solved === true || this.solved === false) {
            params.solved = this.solved;
        }
        if (this.active === true || this.active === false) {
            params.active = this.active;
        }
        if (this.flagged === true || this.flagged === false) {
            params.flagged = this.flagged;
        }
        if (this.page) {
            params.page = this.page;
        }
        if (this.perPage) {
            params.perPage = this.perPage;
        }
        if (this.doctorType) {
            params.doctorType = this.doctorType;
        }
        return params;
    }
}
