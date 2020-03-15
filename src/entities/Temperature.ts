export interface ITemperature {
    createdAt: string;
    measure: number;
    updatedAt: string;
}

export interface ITemperatureApiResponse {
    createdAt: string;
    measure: number;
    updatedAt: string;
}

export class Temperature {
    static createFromResponse(response: ITemperatureApiResponse): Temperature {
        return new Temperature(
            new Date(response.createdAt),
            response.measure,
            new Date(response.updatedAt)
        );
    }

    constructor(
        public createdAt: Date,
        public measure: number,
        public updatedAt: Date
    ) {}

    toJSON(): ITemperature {
        return {
            createdAt: this.createdAt.toISOString(),
            measure: this.measure,
            updatedAt: this.updatedAt.toISOString()
        }
    }
}
