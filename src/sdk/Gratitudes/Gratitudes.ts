import { AxiosResponse } from "axios";

import { ApiClient } from "../ApiClient";
import { CreateGratitudeDto } from "../../dto/CreateGratitudeDto";
import { IGratitude, Gratitude } from "../../entities/Gratitude";

export class Gratitudes {
    constructor(
        private apiClient: ApiClient
    ) { }

    async get(): Promise<Gratitude[]> {
        return this.apiClient.get<IGratitude[]>('/gratitudes')
            .then((response: AxiosResponse<IGratitude[]>): Gratitude[] => response.data.map(Gratitude.createFromResponse));
    }

    async create(createGratitudeDto: CreateGratitudeDto): Promise<Gratitude> {
        return this.apiClient.post<IGratitude>('/gratitudes', createGratitudeDto.toJSON())
            .then((response: AxiosResponse<IGratitude>): Gratitude => Gratitude.createFromResponse(response.data));
    }
}
