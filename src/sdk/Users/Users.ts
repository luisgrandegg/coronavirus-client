import { AxiosResponse } from "axios";

import { ApiClient } from "../ApiClient";
import { User, IUserApiResponse } from "../../entities/User";

export class Users {
    constructor(
        private apiClient: ApiClient
    ) {}

    async get(): Promise<User> {
        return this.apiClient.get<IUserApiResponse>('/users')
            .then((response: AxiosResponse<IUserApiResponse>): User => User.createFromResponse(response.data));
    }

    async validate(userId: string): Promise<User> {
        return this.apiClient.post<IUserApiResponse>(`/users/${userId}/validate`)
            .then((response: AxiosResponse<IUserApiResponse>): User => User.createFromResponse(response.data));
    }

    async invalidate(userId: string): Promise<User> {
        return this.apiClient.post<IUserApiResponse>(`/users/${userId}/invalidate`)
            .then((response: AxiosResponse<IUserApiResponse>): User => User.createFromResponse(response.data));
    }

    async activate(userId: string): Promise<User> {
        return this.apiClient.post<IUserApiResponse>(`/users/${userId}/activate`)
            .then((response: AxiosResponse<IUserApiResponse>): User => User.createFromResponse(response.data));
    }

    async deactivate(userId: string): Promise<User> {
        return this.apiClient.post<IUserApiResponse>(`/users/${userId}/deactivate`)
            .then((response: AxiosResponse<IUserApiResponse>): User => User.createFromResponse(response.data));
    }
}
