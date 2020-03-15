import { AxiosResponse } from "axios";

import { ApiClient } from "../ApiClient";
import { User, IUserApiResponse } from "../../entities/User";
import { Feeling, IFeelingApiResponse, FeelingType } from "../../entities/Feeling";
import { Temperature, ITemperatureApiResponse } from "../../entities/Temperature";

export class Users {
    constructor(
        private apiClient: ApiClient
    ) {}

    async get(): Promise<User> {
        return this.apiClient.get<IUserApiResponse>('/users')
            .then((response: AxiosResponse<IUserApiResponse>): User => User.createFromResponse(response.data));
    }

    async createFeeling(feelingType: FeelingType): Promise<Feeling> {
        return this.apiClient.post<IFeelingApiResponse>('/users/feeling', { type: feelingType })
            .then((response: AxiosResponse<IFeelingApiResponse>): Feeling => Feeling.createFromResponse(response.data));
    }

    async createTemperature(measure: number): Promise<Temperature> {
        return this.apiClient.post<ITemperatureApiResponse>('/users/temperature', { measure })
            .then((response: AxiosResponse<ITemperatureApiResponse>): Temperature => Temperature.createFromResponse(response.data));
    }
}
