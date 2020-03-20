export interface ICreateInquiryDto {
    age: string;
    email: string;
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
            speciality: this.speciality,
            summary: this.summary,
            terms: this.terms,
            privacy: this.privacy,
            confirmAge: this.confirmAge,
        };
    }
}
