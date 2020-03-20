export interface IDoctorListParams {
    isActive?: boolean;
    isValidated?: boolean;
}

export class DoctorListParams {
    static deserialize(
        data: IDoctorListParams
    ): DoctorListParams {
        return new DoctorListParams(
            data.isActive,
            data.isValidated
        );
    }

    constructor(
        public isActive?: boolean,
        public isValidated?: boolean
    ) {}

    toJSON(): IDoctorListParams {
        const params: IDoctorListParams = {};
        if (this.isActive === true || this.isActive === false) {
            params.isActive = this.isActive;
        }
        if (this.isValidated === true || this.isValidated === false) {
            params.isValidated = this.isValidated;
        }
        return params;
    }
}
