export interface ICreateGratitudeDto {
    message: string;
    name: string;
    title: string;
}

export class CreateGratitudeDto {
    static deserialize(data: ICreateGratitudeDto): CreateGratitudeDto {
        return new CreateGratitudeDto(
            data.title,
            data.message,
            data.name
        );
    }

    constructor(
        public title: string,
        public message: string,
        public name: string
    ) { }

    toJSON(): ICreateGratitudeDto {
        return {
            title: this.title,
            message: this.message,
            name: this.name
        };
    }
}
