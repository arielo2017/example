"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = require('../utils/JsonUtil');
var JsonUtil = /** @class */ (function () {
    function JsonUtil() {
    }
    JsonUtil.ReadJson = function () {
        var fs = require('fs');
        // Read the file, and pass it to your callback
        fs.readFile("../Test/datapost.json", handleJSONFile);
        var handleJSONFile = function (err, data) {
            if (err) {
                throw err;
            }
        };
        return data;
    };
    return JsonUtil;
}());
exports.JsonUtil = JsonUtil;
//# sourceMappingURL=JsonUtil.js.map