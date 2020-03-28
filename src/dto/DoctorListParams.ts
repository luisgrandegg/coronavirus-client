import { DoctorType } from "../entities/Doctor";

export interface IDoctorListParams {
    isActive?: boolean;
    isValidated?: boolean;
    doctorType?: DoctorType;
}

export class DoctorListParams {
    static deserialize(
        data: IDoctorListParams
    ): DoctorListParams {
        return new DoctorListParams(
            data.isActive,
            data.isValidated,
            data.doctorType
        );
    }

    constructor(
        public isActive?: boolean,
        public isValidated?: boolean,
        public doctorType?: DoctorType
    ) {}

    toJSON(): IDoctorListParams {
        const params: IDoctorListParams = {};
        if (this.isActive === true || this.isActive === false) {
            params.isActive = this.isActive;
        }
        if (this.isValidated === true || this.isValidated === false) {
            params.isValidated = this.isValidated;
        }
        if (this.doctorType) {
            params.doctorType = this.doctorType;
        }
        return params;
    }
}
