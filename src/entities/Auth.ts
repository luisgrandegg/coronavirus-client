import { UserType } from "./User";

export interface IAuth {
    token: string;
    userType: string;
}

export interface IAuthApiResponse {
    token: string;
    userId: string;
    userType: string;
}

export class Auth {
    static createFromResponse(response: IAuthApiResponse): Auth {
        return new Auth(
            response.token,
            response.userType as UserType
        );
    }

    static deserialize(data: IAuth): Auth {
        return new Auth(
            data.token,
            data.userType as UserType
        )
    }

    constructor(
        public token: string,
        public userType: UserType
    ) {}

    toJSON(): IAuth {
        return {
            token: this.token,
            userType: this.userType
        }
    }
}
