export enum DoctorType {
    REGULAR = 'regular',
    PSYCHOLOGIST = 'psychologist'
}
export interface IDoctor {
    createdAt: string;
    name: string;
    surname: string;
    speciality: string;
    license: string;
    email: string;
    phone: string;
    id: string;
    userId: string;
    inquiriesAttended: number;
    comment?: string;
    doctorType: DoctorType;
}

export interface IDoctorApiResponse {
    createdAt: string;
    name: string;
    surname: string;
    speciality: string;
    license: string;
    email: string;
    phone: string;
    id: string;
    userId: string;
    inquiriesAttended: number;
    comment?: string;
    doctorType: string;
}

export class Doctor {
    static createFromResponse(response: IDoctorApiResponse): Doctor {
        return new Doctor(
            new Date(response.createdAt),
            response.name,
            response.surname,
            response.speciality,
            response.license,
            response.email,
            response.phone,
            response.id,
            response.userId,
            response.inquiriesAttended,
            response.doctorType as DoctorType,
            response.comment
        );
    }

    constructor(
        public createdAt: Date,
        public name: string,
        public surname: string,
        public speciality: string,
        public license: string,
        public email: string,
        public phone: string,
        public id: string,
        public userId: string,
        public inquiriesAttended: number,
        public doctorType: DoctorType,
        public comment?: string,
    ) {}

    toJSON(): IDoctor {
        return {
            createdAt: this.createdAt.toISOString(),
            name: this.name,
            surname: this.surname,
            id: this.id,
            speciality: this.speciality,
            license: this.license,
            email: this.email,
            phone: this.phone,
            userId: this.userId,
            inquiriesAttended: this.inquiriesAttended,
            comment: this.comment,
            doctorType: this.doctorType
        };
    }

    isPsychologist(): boolean {
        return this.doctorType === DoctorType.PSYCHOLOGIST;
    }
}
