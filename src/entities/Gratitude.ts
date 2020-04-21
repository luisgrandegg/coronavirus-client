import moment from '../utils/moment';

export interface IGratitude {
    createdAt: string;
    id: string;
    message: string;
    name: string;
    imagePublicId: string | null;
    imagePublicUrl: string | null;
}

export class Gratitude {
    static createFromResponse(
        request: IGratitude
    ): Gratitude {
        return new Gratitude(
            request.id,
            request.message,
            request.name,
            moment(request.createdAt),
            request.imagePublicId,
            request.imagePublicUrl
        );
    }

    constructor(
        public id: string,
        public message: string,
        public name: string,
        public createdAt: moment.Moment,
        public imagePublicId: string | null,
        public imagePublicUrl: string | null
    ) { }

    clone(): Gratitude {
        return new Gratitude(
            this.id,
            this.message,
            this.name,
            this.createdAt,
            this.imagePublicId,
            this.imagePublicUrl
        );
    }
}
