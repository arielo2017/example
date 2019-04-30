"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Base page
var protractor_1 = require("protractor");
var IdentificationType;
(function (IdentificationType) {
    IdentificationType[IdentificationType["Id"] = 0] = "Id";
    IdentificationType[IdentificationType["className"] = 1] = "className";
    IdentificationType[IdentificationType["Css"] = 2] = "Css";
    IdentificationType[IdentificationType["Xpath"] = 3] = "Xpath";
    IdentificationType[IdentificationType["LinkTextm"] = 4] = "LinkTextm";
    IdentificationType[IdentificationType["Js"] = 5] = "Js";
    IdentificationType[IdentificationType["PartialLinkText"] = 6] = "PartialLinkText";
})(IdentificationType = exports.IdentificationType || (exports.IdentificationType = {}));
var BasePage = /** @class */ (function () {
    function BasePage() {
    }
    BasePage.prototype.ElementLocator = function (obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Css]:
                return protractor_1.element(protractor_1.by.css(obj.value));
            case IdentificationType[IdentificationType.className]:
                return protractor_1.element(protractor_1.by.className(obj.value));
            case IdentificationType[IdentificationType.Id]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.Xpath]:
                return protractor_1.element(protractor_1.by.xpath(obj.value));
            case IdentificationType[IdentificationType.Js]:
                return protractor_1.element(protractor_1.by.js(obj.value));
            default:
                break;
        }
    };
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map