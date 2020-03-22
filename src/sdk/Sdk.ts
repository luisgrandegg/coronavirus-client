import Promise from 'bluebird';

import { ApiClient } from './ApiClient';
import { Auth, IAuthApiResponse } from '../entities/Auth';
import { AxiosResponse } from 'axios';
import { Users } from './Users';
import { RegisterDoctorDto } from '../dto/RegisterDoctorDto';
import { Inquiries } from './Inquiries';
import { Doctors } from './Doctors';
import { IStatsApiResponse } from '../entities/Stats';
import { Admin } from './Admin';
import { Stat, IStat, IStatApiResponse } from '../entities/Stat';

export class Sdk {
    public admin: Admin;
    public doctors: Doctors;
    public inquiries: Inquiries;
    public users: Users;

    constructor(
        private apiClient: ApiClient
    ) {
        this.admin = new Admin(apiClient);
        this.doctors = new Doctors(apiClient);
        this.inquiries = new Inquiries(apiClient);
        this.users = new Users(apiClient);
    }

    async getClaps(): Promise<Stat> {
        return this.apiClient.get<IStat>('/claps')
            .then((response: AxiosResponse<IStatApiResponse>) => Stat.createFromResponse(response.data));
    }

    async clap(): Promise<Stat> {
        return this.apiClient.post<IStat>('/claps')
            .then((response: AxiosResponse<IStatApiResponse>) => Stat.createFromResponse(response.data));
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

    async getStats(): Promise<IStatsApiResponse> {
        return this.apiClient.get<IStatsApiResponse>('/stats')
            .then((response: AxiosResponse<IStatsApiResponse>) => response.data)
    }

    setAuthorization(auth: Auth): void {
        this.apiClient.setAuthorization(auth);
    }
}
