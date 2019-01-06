export class User {
    constructor(
        public fullname: string,
        public phone: string,
        public email: string,
        public password: string,
        public terms: boolean,
    ) {}
}