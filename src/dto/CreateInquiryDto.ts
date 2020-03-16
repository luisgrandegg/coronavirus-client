import { UserType } from "../entities/User";

export interface ICreateInquiryDto {
    age: string;
    email: string;
    speciality: string | null;
    summary: string;
}

export class CreateInquiryDto {
    public userType: UserType = UserType.PATIENT;

    static deserialize(data: ICreateInquiryDto): CreateInquiryDto {
        return new CreateInquiryDto(
            data.age,
            data.email,
            data.speciality || null,
            data.summary,
        );
    }

    constructor(
        public age: string,
        public email: string,
        public speciality: string | null,
        public summary: string,
    ) {}

    toJSON(): ICreateInquiryDto {
        return {
            age: this.age,
            email: this.email,
            speciality: this.speciality,
            summary: this.summary,
        };
    }
}
