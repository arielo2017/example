"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'firefox'
    },
    specs: ['./FirstTestSpec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: "http://localhost:8808/",
    //directConnect:true,
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
};
//# sourceMappingURL=conf.js.map