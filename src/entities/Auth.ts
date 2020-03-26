import { UserType } from "./User";
import { DoctorType } from "./Doctor";

export interface IAuth {
    token: string;
    userId: string;
    userType: string;
    doctorType: string;
}

export interface IAuthApiResponse {
    token: string;
    userId: string;
    userType: string;
    doctorType: string;
}

export class Auth {
    static createFromResponse(response: IAuthApiResponse): Auth {
        return new Auth(
            response.token,
            response.userId,
            response.userType as UserType,
            response.doctorType as DoctorType
        );
    }

    static deserialize(data: IAuth): Auth {
        return new Auth(
            data.token,
            data.userId,
            data.userType as UserType
            data.doctorType as DoctorType
        )
    }

    constructor(
        public token: string,
        public userId: string,
        public userType: UserType,
        public doctorType: DoctorType
    ) {}

    toJSON(): IAuth {
        return {
            token: this.token,
            userId: this.userId,
            userType: this.userType,
            doctorType: this.doctorType
        }
    }

    isAdmin(): boolean {
        return this.userType === UserType.ADMIN ||
            this.userType === UserType.DOCTOR_ADMIN;
    }

    isDoctor(): boolean {
        return this.userType === UserType.DOCTOR ||
            this.userType === UserType.DOCTOR_ADMIN;
    }
}
