export interface ICreateGratitudeDto {
    imagePublicId?: string | null;
    imagePublicUrl?: string | null;
    message: string;
    name: string;
}

export class CreateGratitudeDto {
    static deserialize(data: ICreateGratitudeDto): CreateGratitudeDto {
        return new CreateGratitudeDto(
            data.message,
            data.name,
            data.imagePublicId,
            data.imagePublicUrl
        );
    }

    constructor(
        public message: string,
        public name: string,
        public imagePublicId: string | null = null,
        public imagePublicUrl: string | null = null
    ) { }

    toJSON(): ICreateGratitudeDto {
        return {
            message: this.message,
            name: this.name,
            imagePublicId: this.imagePublicId,
            imagePublicUrl: this.imagePublicUrl
        };
    }
}
