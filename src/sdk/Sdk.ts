import Promise from 'bluebird';

import { ApiClient } from './ApiClient';
import { Auth, IAuthApiResponse } from '../entities/Auth';
import { AxiosResponse } from 'axios';
import { Users } from './Users';
import { RegisterDoctorDto } from '../dto/RegisterDoctorDto';
import { Inquiries } from './Inquiries';
import { Doctors } from './Doctors';

export class Sdk {
    public doctors: Doctors;
    public inquiries: Inquiries;
    public users: Users;

    constructor(
        private apiClient: ApiClient
    ) {
        this.doctors = new Doctors(apiClient);
        this.inquiries = new Inquiries(apiClient);
        this.users = new Users(apiClient);
    }

    async login(email: string, password: string): Promise<Auth> {
        return this.apiClient.post<IAuthApiResponse>('/login', {
                email,
                password
            })
            .then((response: AxiosResponse<IAuthApiResponse>) => Auth.createFromResponse(response.data))
    }

    async registerDoctor(registerDoctorDto: RegisterDoctorDto): Promise<Auth> {
        return this.apiClient.post<IAuthApiResponse>('/register/doctor', registerDoctorDto)
            .then((response: AxiosResponse<IAuthApiResponse>) => Auth.createFromResponse(response.data));
    }

    setAuthorization(auth: Auth): void {
        this.apiClient.setAuthorization(auth);
    }
}
