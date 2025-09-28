"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
global.console = Object.assign(Object.assign({}, console), { debug: globals_1.jest.fn(), info: globals_1.jest.fn(), warn: globals_1.jest.fn(), error: globals_1.jest.fn() });
globals_1.jest.setTimeout(10000);
global.testUtils = {
    createMockRequest: (body = {}, params = {}, query = {}) => ({
        body,
        params,
        query,
        headers: {},
    }),
    createMockResponse: () => {
        const res = {};
        res.status = globals_1.jest.fn().mockReturnValue(res);
        res.json = globals_1.jest.fn().mockReturnValue(res);
        res.send = globals_1.jest.fn().mockReturnValue(res);
        return res;
    },
};
