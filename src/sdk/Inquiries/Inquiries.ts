import { AxiosResponse } from "axios";

import { ApiClient } from "../ApiClient";
import { Inquiry, IInquiryApiResponse } from "../../entities/Inquiry";
import { CreateInquiryDto } from "../../dto/CreateInquiryDto";
import { IInquiryListParams } from "../../dto/InquiryListParams";

export class Inquiries {
    constructor(
        private apiClient: ApiClient
    ) {}

    async get(inquiryListParams?: IInquiryListParams): Promise<Inquiry[]> {
        return this.apiClient.get<IInquiryApiResponse[]>('/inquiries', inquiryListParams)
            .then((response: AxiosResponse<IInquiryApiResponse[]>): Inquiry[] => response.data.map(Inquiry.createFromResponse));
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
}
