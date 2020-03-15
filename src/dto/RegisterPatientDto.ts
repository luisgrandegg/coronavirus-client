import { UserType } from "../entities/User";

export interface IRegisterPatientDto {
    name: string;
    surname: string;
    speciality: string;
    license: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    userType: UserType;
}

export class RegisterPatientDto {
    public userType: UserType = UserType.PATIENT;

    static deserialize(data: IRegisterPatientDto): RegisterPatientDto {
        return new RegisterPatientDto(
            data.name,
            data.surname,
            data.speciality,
            data.license,
            data.email,
            data.phone,
            data.password,
            data.confirmPassword
        );
    }

    constructor(
        public name: string,
        public surname: string,
        public speciality: string,
        public license: string,
        public email: string,
        public phone: string,
        public password: string,
        public confirmPassword: string
    ) {}

    toJSON(): IRegisterPatientDto {
        return {
            name: this.name,
            surname: this.surname,
            speciality: this.speciality,
            license: this.license,
            email: this.email,
            phone: this.phone,
            password: this.password,
            confirmPassword: this.confirmPassword,
            userType: this.userType
        };
    }
}
