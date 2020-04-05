export interface IGratitude {
    id: string;
    message: string;
    name: string;
    title: string;
    imagePublicId: string | null;
    imagePublicUrl: string | null;
}

export class Gratitude {
    static createFromResponse(
        request: IGratitude
    ): Gratitude {
        return new Gratitude(
            request.id,
            request.title,
            request.message,
            request.name,
            request.imagePublicId,
            request.imagePublicUrl
        );
    }

    constructor(
        public id: string,
        public title: string,
        public message: string,
        public name: string,
        public imagePublicId: string | null,
        public imagePublicUrl: string | null
    ) { }
}
