export interface ICreateInquiryDto {
    age: string;
    email: string;
    doctorType: string | null;
    speciality: string | null;
    summary: string;
    terms: boolean;
    privacy: boolean;
    confirmAge: boolean;
}

export class CreateInquiryDto {
    static deserialize(data: ICreateInquiryDto): CreateInquiryDto {
        return new CreateInquiryDto(
            data.age,
            data.email,
            data.doctorType || null,
            data.speciality || null,
            data.summary,
            data.terms,
            data.privacy,
            data.confirmAge,
        );
    }

    constructor(
        public age: string,
        public email: string,
        public doctorType: string | null,
        public speciality: string | null,
        public summary: string,
        public terms: boolean,
        public privacy: boolean,
        public confirmAge: boolean,
    ) { }

    toJSON(): ICreateInquiryDto {
        return {
            age: this.age,
            email: this.email,
            doctorType: this.doctorType,
            speciality: this.speciality,
            summary: this.summary,
            terms: this.terms,
            privacy: this.privacy,
            confirmAge: this.confirmAge,
        };
    }
}
