import { AxiosResponse } from "axios";

import { ApiClient } from "../ApiClient";

export class Media {
    constructor(
        private apiClient: ApiClient
    ) {}

    async sign(paramsToSign: object): Promise<string> {
        console.log(paramsToSign);
        return this.apiClient.post<{ signature: string; }>('/media/sign', paramsToSign)
            .then((response: AxiosResponse<{ signature: string; }>): string => response.data.signature);
    }
}
