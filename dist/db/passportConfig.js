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
const LocalStrategy = require('passport-local');
const { emailExists, createUser, matchPassword } = require('./helper.ts');
module.exports = (passport) => {
    passport.use("local-signup", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
    }, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userExists = yield emailExists(email);
            if (userExists) {
                return done(null, false);
            }
            const user = yield createUser(email, password);
            return done(null, user);
        }
        catch (error) {
            done(error);
        }
    })));
    passport.use("local-login", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
    }, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield emailExists(email);
            if (!user)
                return done(null, false);
            const isMatch = yield matchPassword(password, user.password);
            if (!isMatch)
                return done(null, false);
            return done(null, { id: user.id, email: user.email });
        }
        catch (error) {
            return done(error, false);
        }
    })));
};
//# sourceMappingURL=passportConfig.js.map