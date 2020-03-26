import { AxiosResponse } from "axios";

import { ApiClient } from "../ApiClient";
import { IDoctorApiResponse, Doctor } from "../../entities/Doctor";
import { IDoctorListParams } from "../../dto/DoctorListParams";

export class Doctors {
    constructor(
        private apiClient: ApiClient
    ) {}

    async get(doctorListParams?: IDoctorListParams): Promise<Doctor[]> {
        return this.apiClient.get<IDoctorApiResponse[]>('/doctors', doctorListParams)
            .then((response: AxiosResponse<IDoctorApiResponse[]>): Doctor[] => response.data.map(Doctor.createFromResponse));
    }

    async comment(id: string, comment: string): Promise<Doctor> {
        return this.apiClient.post<IDoctorApiResponse>(`/doctors/${id}/comment`, { comment })
            .then((response: AxiosResponse<IDoctorApiResponse>): Doctor => Doctor.createFromResponse(response.data));
    }
}
