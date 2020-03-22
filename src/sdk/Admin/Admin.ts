import { AxiosResponse } from "axios";

import { ApiClient } from "../ApiClient";
import { IStatsApiResponse } from "../../entities/Stats";

export class Admin {
    constructor(
        private apiClient: ApiClient
    ) {}

    async getStats(): Promise<IStatsApiResponse> {
        return this.apiClient.get<IStatsApiResponse>('/admin/stats')
            .then((response: AxiosResponse<IStatsApiResponse>): IStatsApiResponse => response.data);
    }
}
