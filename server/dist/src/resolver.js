"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const faker_1 = require("@faker-js/faker");
exports.resolvers = {
    Query: {
        name() {
            return faker_1.faker.name.fullName();
        },
        users: (parent, args) => {
            const { limit, offset } = args;
            const numberOfUsers = (offset !== null && offset !== void 0 ? offset : 0) + (limit !== null && limit !== void 0 ? limit : 0);
            const users = [];
            for (let i = offset !== null && offset !== void 0 ? offset : 0; i < numberOfUsers; i++) {
                users.push({
                    name: faker_1.faker.name.fullName(),
                    email: faker_1.faker.internet.email(),
                    phoneNumber: faker_1.faker.phone.number(),
                    address: {
                        street: faker_1.faker.address.street(),
                        city: faker_1.faker.address.city(),
                        zipCode: faker_1.faker.address.zipCode(),
                    }
                });
            }
            return users;
        },
    },
};
