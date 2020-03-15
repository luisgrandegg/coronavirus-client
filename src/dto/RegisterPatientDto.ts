import { UserType } from "../entities/User";

export interface IRegisterPatientDto {
    age: string;
    email: string;
    speciality: string | null;
    summary: string;
}

export class RegisterPatientDto {
    public userType: UserType = UserType.PATIENT;

    static deserialize(data: IRegisterPatientDto): RegisterPatientDto {
        return new RegisterPatientDto(
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

    toJSON(): IRegisterPatientDto {
        return {
            age: this.age,
            email: this.email,
            speciality: this.speciality,
            summary: this.summary,
        };
    }
}
