"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var API_URL = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(API_URL).then(function (res) { return console.log(res); });
