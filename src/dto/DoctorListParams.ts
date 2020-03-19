export interface IDoctorListParams {
    isValidated?: boolean;
}

export class DoctorListParams {
    static deserialize(
        data: IDoctorListParams
    ): DoctorListParams {
        return new DoctorListParams(
            data.isValidated
        );
    }

    constructor(
        public isValidated?: boolean
    ) {}

    toJSON(): IDoctorListParams {
        const params: IDoctorListParams = {};
        if (this.isValidated === true || this.isValidated === false) {
            params.isValidated = this.isValidated;
        }
        return params;
    }
}
