import { UserType } from "../entities/User";
import { DoctorType } from "../entities/Doctor";

export interface IRegisterDoctorDto {
    name: string;
    surname: string;
    speciality?: string;
    license: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
    privacy: boolean;
    userType: UserType;
    doctorType: DoctorType
}

export class RegisterDoctorDto {
    public userType: UserType = UserType.DOCTOR;

    static deserialize(data: IRegisterDoctorDto): RegisterDoctorDto {
        return new RegisterDoctorDto(
            data.name,
            data.surname,
            data.license,
            data.email,
            data.phone,
            data.password,
            data.confirmPassword,
            data.terms,
            data.privacy,
            data.doctorType,
            data.speciality
        );
    }

    constructor(
        public name: string,
        public surname: string,
        public license: string,
        public email: string,
        public phone: string,
        public password: string,
        public confirmPassword: string,
        public terms: boolean,
        public privacy: boolean,
        public doctorType: DoctorType,
        public speciality?: string
    ) {}

    toJSON(): IRegisterDoctorDto {
        return {
            name: this.name,
            surname: this.surname,
            speciality: this.speciality,
            license: this.license,
            email: this.email,
            phone: this.phone,
            password: this.password,
            confirmPassword: this.confirmPassword,
            terms: this.terms,
            privacy: this.privacy,
            userType: this.userType,
            doctorType: this.doctorType
        };
    }
}
