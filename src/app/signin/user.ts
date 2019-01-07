export class User {
    constructor(
        public fullname: String,
        public phone: String,
        public email: String,
        public password: String,
        public terms: Boolean,
        public type: String,
    ) {}
}
