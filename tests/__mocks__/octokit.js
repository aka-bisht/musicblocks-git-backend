"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Octokit = void 0;
class Octokit {
    constructor() {
        this.request = jest.fn();
        this.graphql = jest.fn();
        this.log = jest.fn();
        this.hook = jest.fn();
        this.auth = jest.fn();
    }
}
exports.Octokit = Octokit;
exports.default = Octokit;
