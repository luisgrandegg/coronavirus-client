import { Sdk } from './Sdk';
import { ApiClient } from './ApiClient';
import { IConfig } from '../entities/Config';

export * from './Sdk';

declare var config: IConfig;

const apiClient = new ApiClient({
    baseUrl: config.apiUrl
});

export const sdk = new Sdk(apiClient);
