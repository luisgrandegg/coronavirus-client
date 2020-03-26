import { AxiosResponse } from "axios";

import { ApiClient } from "../ApiClient";
import { Inquiry, IInquiryPaginated, IInquiryApiResponse, IInquiryPaginatedApiResponse } from "../../entities/Inquiry";
import { CreateInquiryDto } from "../../dto/CreateInquiryDto";
import { IInquiryListParams } from "../../dto/InquiryListParams";

export class Inquiries {
    constructor(
        private apiClient: ApiClient
    ) { }

    async get(inquiryListParams?: IInquiryListParams): Promise<IInquiryPaginated> {
        return this.apiClient.get<IInquiryPaginatedApiResponse>('/inquiries', inquiryListParams)
            .then((response: AxiosResponse<IInquiryPaginatedApiResponse>): IInquiryPaginated => {
                return {
                    inquiries: response.data.inquiries.map(Inquiry.createFromResponse),
                    total: response.data.total
                }
            });
    }

    async getOne(inquiryId: string): Promise<Inquiry> {
        return this.apiClient.get<IInquiryApiResponse>(`/inquiries/${inquiryId}`)
            .then((response: AxiosResponse<IInquiryApiResponse>): Inquiry => Inquiry.createFromResponse(response.data));
    }

    async create(createInquiryDto: CreateInquiryDto): Promise<Inquiry> {
        return this.apiClient.post<IInquiryApiResponse>('/inquiries', createInquiryDto)
            .then((response: AxiosResponse<IInquiryApiResponse>): Inquiry => Inquiry.createFromResponse(response.data));
    }

    async attend(inquiryId: string): Promise<Inquiry> {
        return this.apiClient.post<IInquiryApiResponse>(`/inquiries/${inquiryId}/attend`)
            .then((response: AxiosResponse<IInquiryApiResponse>) => Inquiry.createFromResponse(response.data));
    }

    async solve(inquiryId: string): Promise<Inquiry> {
        return this.apiClient.post<IInquiryApiResponse>(`/inquiries/${inquiryId}/solve`)
            .then((response: AxiosResponse<IInquiryApiResponse>) => Inquiry.createFromResponse(response.data));
    }

    async unattend(inquiryId: string): Promise<Inquiry> {
        return this.apiClient.post<IInquiryApiResponse>(`/inquiries/${inquiryId}/unattend`)
            .then((response: AxiosResponse<IInquiryApiResponse>) => Inquiry.createFromResponse(response.data));
    }

    async flag(inquiryId: string): Promise<Inquiry> {
        return this.apiClient.post<IInquiryApiResponse>(`inquiries/${inquiryId}/flag`)
            .then((response: AxiosResponse<IInquiryApiResponse>) => Inquiry.createFromResponse(response.data));
    }

    async unflag(inquiryId: string): Promise<Inquiry> {
        return this.apiClient.post<IInquiryApiResponse>(`inquiries/${inquiryId}/unflag`)
            .then((response: AxiosResponse<IInquiryApiResponse>) => Inquiry.createFromResponse(response.data));
    }

    async activate(inquiryId: string): Promise<Inquiry> {
        return this.apiClient.post<IInquiryApiResponse>(`inquiries/${inquiryId}/activate`)
            .then((response: AxiosResponse<IInquiryApiResponse>) => Inquiry.createFromResponse(response.data));
    }

    async deactivate(inquiryId: string): Promise<Inquiry> {
        return this.apiClient.post<IInquiryApiResponse>(`inquiries/${inquiryId}/deactivate`)
            .then((response: AxiosResponse<IInquiryApiResponse>) => Inquiry.createFromResponse(response.data));
    }

    async updateSpeciality(inquiryId: string, speciality: string): Promise<Inquiry> {
        return this.apiClient.post<IInquiryApiResponse>(`/inquiries/${inquiryId}/speciality/${speciality}`)
            .then((response: AxiosResponse<IInquiryApiResponse>) => Inquiry.createFromResponse(response.data));
    }
}
