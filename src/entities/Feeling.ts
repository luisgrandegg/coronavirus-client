export enum FeelingType {
    BETTER = 'better',
    SAME = 'same',
    WORSE = 'worse'
}

export interface IFeeling {
    createdAt: string;
    type: FeelingType;
    updatedAt: string;
}

export interface IFeelingApiResponse {
    createdAt: string;
    type: FeelingType;
    updatedAt: string;
}

export class Feeling {
    static createFromResponse(response: IFeelingApiResponse): Feeling {
        return new Feeling(
            new Date(response.createdAt),
            response.type,
            new Date(response.updatedAt)
        );
    }

    constructor(
        public createdAt: Date,
        public type: FeelingType,
        public updatedAt: Date
    ) {}

    toJSON(): IFeeling {
        return {
            createdAt: this.createdAt.toISOString(),
            type: this.type,
            updatedAt: this.updatedAt.toISOString()
        }
    }
}
