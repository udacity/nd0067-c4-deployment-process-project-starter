"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.AuthRouter = exports.requireAuth = void 0;
const express_1 = require("express");
const User_1 = require("../models/User");
const c = __importStar(require("../../../../config/config"));
// import * as bcrypt from 'bcrypt';
const jwt = __importStar(require("jsonwebtoken"));
const EmailValidator = __importStar(require("email-validator"));
const router = (0, express_1.Router)();
var bcrypt = require('bcryptjs');
function generatePassword(plainTextPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const saltRounds = 10;
        const salt = yield bcrypt.genSalt(saltRounds);
        return yield bcrypt.hash(plainTextPassword, salt);
    });
}
function comparePasswords(plainTextPassword, hash) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt.compare(plainTextPassword, hash);
    });
}
function generateJWT(user) {
    return jwt.sign(user.short(), c.config.jwt.secret);
}
function requireAuth(req, res, next) {
    if (!req.headers || !req.headers.authorization) {
        return res.status(401).send({ message: 'No authorization headers.' });
    }
    const tokenBearer = req.headers.authorization.split(' ');
    if (tokenBearer.length != 2) {
        return res.status(401).send({ message: 'Malformed token.' });
    }
    const token = tokenBearer[1];
    return jwt.verify(token, c.config.jwt.secret, (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate.' });
        }
        return next();
    });
}
exports.requireAuth = requireAuth;
router.get('/verification', requireAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).send({ auth: true, message: 'Authenticated.' });
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !EmailValidator.validate(email)) {
        return res.status(400).send({ auth: false, message: 'Email is required or malformed.' });
    }
    if (!password) {
        return res.status(400).send({ auth: false, message: 'Password is required.' });
    }
    const user = yield User_1.User.findByPk(email);
    if (!user) {
        return res.status(401).send({ auth: false, message: 'User was not found..' });
    }
    const authValid = yield comparePasswords(password, user.passwordHash);
    if (!authValid) {
        return res.status(401).send({ auth: false, message: 'Password was invalid.' });
    }
    const jwt = generateJWT(user);
    res.status(200).send({ auth: true, token: jwt, user: user.short() });
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const plainTextPassword = req.body.password;
    if (!email || !EmailValidator.validate(email)) {
        return res.status(400).send({ auth: false, message: 'Email is missing or malformed.' });
    }
    if (!plainTextPassword) {
        return res.status(400).send({ auth: false, message: 'Password is required.' });
    }
    const user = yield User_1.User.findByPk(email);
    if (user) {
        return res.status(422).send({ auth: false, message: 'User already exists.' });
    }
    const generatedHash = yield generatePassword(plainTextPassword);
    //@ts-ignore
    const newUser = yield new User_1.User({
        email: email,
        passwordHash: generatedHash,
    });
    const savedUser = yield newUser.save();
    const jwt = generateJWT(savedUser);
    res.status(201).send({ token: jwt, user: savedUser.short() });
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('auth');
}));
exports.AuthRouter = router;
//# sourceMappingURL=auth.router.js.map