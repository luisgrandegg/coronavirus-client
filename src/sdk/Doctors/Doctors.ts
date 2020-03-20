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

    async validate(doctorId: string): Promise<Doctor> {
        return this.apiClient.post<IDoctorApiResponse>(`/doctors/${doctorId}/validate`)
            .then((response: AxiosResponse<IDoctorApiResponse>): Doctor => Doctor.createFromResponse(response.data));
    }

    async deactivate(doctorId: string): Promise<Doctor> {
        return this.apiClient.post<IDoctorApiResponse>(`/doctors/${doctorId}/deactivate`)
            .then((response: AxiosResponse<IDoctorApiResponse>): Doctor => Doctor.createFromResponse(response.data));
    }
}
