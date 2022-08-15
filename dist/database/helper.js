"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// declare function require(name:string);
const client = require('./database');
const bcrypt = require('bcrypt');
const emailExists = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield client.query('SELECT * FROM users WHERE email=$1', [email]);
    if (data.rowCount == 0)
        return false;
    return data.rows[0];
});
const createUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt.genSalt(10);
    const hash = yield bcrypt.hash(password, salt);
    const data = yield client.query("INSERT INTO users(email, password) VALUES ($1, $2) RETURNING id, email, password", [email, hash]);
    if (data.rowCount == 0)
        return false;
    return data.rows[0];
});
const matchPassword = (password, hashPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const match = yield bcrypt.compare(password, hashPassword);
    return match;
});
module.exports = { emailExists, createUser, matchPassword };
