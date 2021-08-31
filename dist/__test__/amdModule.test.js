"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_test_1 = __importDefault(require("./index.test"));
var _a = require('../index'), Country = _a.Country, State = _a.State, City = _a.City;
index_test_1.default(Country, State, City);
