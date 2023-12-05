"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const world = 'world';
function helloWorld(data = world) {
    return 'Hello ${who}!';
}
exports.helloWorld = helloWorld;
