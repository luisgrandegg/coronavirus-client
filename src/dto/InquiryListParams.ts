export interface IInquiryListParams {
    doctorId?: string;
    speciality?: string;
    attended?: boolean;
    solved?: boolean;
}

export class InquiryListParams {
    static deserialize(
        data: IInquiryListParams
    ): InquiryListParams {
        return new InquiryListParams(
            data.doctorId,
            data.speciality,
            data.attended,
            data.solved
        );
    }

    constructor(
        public doctorId?: string,
        public speciality?: string,
        public attended?: boolean,
        public solved?: boolean
    ) {}

    toJSON(): IInquiryListParams {
        const params: IInquiryListParams = {};
        if (this.doctorId) {
            params.doctorId = this.doctorId;
        }
        if (this.speciality) {
            params.speciality = this.speciality;
        }
        if (this.attended === true || this.attended === false) {
            params.attended = this.attended;
        }
        if (this.solved === true || this.solved === false) {
            params.solved = this.solved;
        }
        return params;
    }
}
