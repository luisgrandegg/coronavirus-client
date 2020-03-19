export interface IDoctor {
    createdAt: string;
    name: string;
    surname: string;
    speciality: string;
    license: string;
    email: string;
    phone: string;
    id: string;
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
            response.id
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
        public id: string
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
            phone: this.phone
        };
    }
}
