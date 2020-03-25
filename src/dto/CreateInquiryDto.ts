export interface ICreateInquiryDto {
    age: string;
    email: string;
    doctorType: string;
    speciality?: string;
    summary: string;
    terms: boolean;
    time?: string;
    privacy: boolean;
    confirmAge: boolean;
}

export class CreateInquiryDto {
    static deserialize(data: ICreateInquiryDto): CreateInquiryDto {
        return new CreateInquiryDto(
            data.age,
            data.email,
            data.doctorType,
            data.summary,
            data.terms,
            data.privacy,
            data.confirmAge,
            data.speciality,
            data.time,
        );
    }

    constructor(
        public age: string,
        public email: string,
        public doctorType: string,
        public summary: string,
        public terms: boolean,
        public privacy: boolean,
        public confirmAge: boolean,
        public time?: string,
        public speciality?: string,
    ) { }

    toJSON(): ICreateInquiryDto {
        return {
            age: this.age,
            email: this.email,
            doctorType: this.doctorType,
            speciality: this.speciality,
            summary: this.summary,
            terms: this.terms,
            time: this.time,
            privacy: this.privacy,
            confirmAge: this.confirmAge,
        };
    }
}
