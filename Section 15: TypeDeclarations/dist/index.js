"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const ENDPOINT = 'https://jsonplaceholder.typicode.com';
// We can user axios' **.d.ts as documentation
axios_1.default.get(`${ENDPOINT}/users/1`)
    .then((res) => {
    const { data } = res;
    printUser(data);
})
    .catch(err => {
    console.error(err);
});
axios_1.default.get(`${ENDPOINT}/users`)
    .then((res) => {
    const { data } = res;
    data.forEach(printUser);
})
    .catch(err => {
    console.error(err);
});
function printUser(user) {
    console.log(user.username);
    console.log(user.email);
    console.log(user.phone);
    console.log();
}
