export interface IGratitude {
    id: string;
    message: string;
    name: string;
    title: string;
}

export class Gratitude {
    static createFromResponse(
        request: IGratitude
    ): Gratitude {
        return new Gratitude(
            request.id,
            request.title,
            request.message,
            request.name
        );
    }

    constructor(
        public id: string,
        public title: string,
        public message: string,
        public name: string
    ) { }
}
