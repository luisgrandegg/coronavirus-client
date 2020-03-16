import { AxiosResponse } from "axios";

import { ApiClient } from "../ApiClient";
import { Inquiry, IInquiryApiResponse } from "../../entities/Inquiry";
import { CreateInquiryDto } from "../../dto/CreateInquiryDto";

export class Inquiries {
    constructor(
        private apiClient: ApiClient
    ) {}

    async get(): Promise<Inquiry[]> {
        return this.apiClient.get<IInquiryApiResponse[]>('/inquiries')
            .then((response: AxiosResponse<IInquiryApiResponse[]>): Inquiry[] => response.data.map(Inquiry.createFromResponse));
    }

    async create(createInquiryDto: CreateInquiryDto): Promise<Inquiry> {
        return this.apiClient.post<IInquiryApiResponse>('/inquiries', createInquiryDto)
            .then((response: AxiosResponse<IInquiryApiResponse>): Inquiry => Inquiry.createFromResponse(response.data));
    }

    async solve(inquiryId: string): Promise<Inquiry> {
        return this.apiClient.post<IInquiryApiResponse>(`/inquiries/${inquiryId}/solve`)
            .then((response: AxiosResponse<IInquiryApiResponse>) => Inquiry.createFromResponse(response.data));
    }
}
