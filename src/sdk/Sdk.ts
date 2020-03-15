import Promise from 'bluebird';

import { ApiClient } from './ApiClient';
import { Auth, IAuthApiResponse } from '../entities/Auth';
import { AxiosResponse } from 'axios';
import { Users } from './Users';
import { RegisterDoctorDto } from '../dto/RegisterDoctorDto';
import { RegisterPatientDto } from '../dto/RegisterPatientDto';

export class Sdk {
    public users: Users;

    constructor(
        private apiClient: ApiClient
    ) {
        this.users = new Users(apiClient);
    }

    async login(username: string, password: string): Promise<Auth> {
        return this.apiClient.post<IAuthApiResponse>('/login', {
                password,
                username
            })
            .then((response: AxiosResponse<IAuthApiResponse>) => Auth.createFromResponse(response.data))
    }

    async registerDoctor(registerDoctorDto: RegisterDoctorDto): Promise<Auth> {
        return this.apiClient.post<IAuthApiResponse>('/register/doctor', registerDoctorDto)
            .then((response: AxiosResponse<IAuthApiResponse>) => Auth.createFromResponse(response.data));
    }

    async registerPatient(patientDoctorDto: RegisterPatientDto): Promise<Auth> {
        return this.apiClient.post<IAuthApiResponse>('/register/patient', patientDoctorDto)
            .then((response: AxiosResponse<IAuthApiResponse>) => Auth.createFromResponse(response.data));
    }

    setAuthorization(auth: Auth): void {
        this.apiClient.setAuthorization(auth);
    }
}
