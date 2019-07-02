"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer = require("nodemailer");
var EmailUtils = /** @class */ (function () {
    function EmailUtils() {
    }
    EmailUtils.sendEmails = function (list) {
        return __awaiter(this, void 0, void 0, function () {
            var transporter, mailOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        transporter = nodemailer.createTransport({
                            service: 'Gmail',
                            auth: {
                                user: 'kuleherman81@gmail.com',
                                pass: 'arielo1985'
                            }
                        });
                        mailOptions = {
                            from: 'kuleherman81@gmail.com',
                            to: 'ariel1985@gmail.com, vivianpcoando@gmail.com',
                            subject: 'Posts De FB jinetes en el exterior ✔',
                            //  text: 'Hello world ✔', // plaintext body
                            html: '<b>Hello world ✔</b>' // html body
                        };
                        // promise send mail without callback
                        return [4 /*yield*/, transporter
                                .sendMail(mailOptions)
                                .then(function (info) { return info.messageId; })];
                    case 1:
                        // promise send mail without callback
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EmailUtils.getNewPosts = function (listold, listnew) {
        return __awaiter(this, void 0, void 0, function () {
            var finalarray, index, element, index, element, postconcat, indexpost, elementemp;
            return __generator(this, function (_a) {
                console.log("----------------Comparison--------------");
                finalarray = [];
                for (index = 0; index < listold.length; index++) {
                    element = listold[index];
                    console.log(element);
                }
                console.log("new");
                for (index = 0; index < listnew.length; index++) {
                    element = listnew[index];
                    postconcat = "";
                    for (indexpost = 0; indexpost < element.post.length; indexpost++) {
                        elementemp = element.post[indexpost];
                        postconcat += elementemp;
                    }
                    element.post = postconcat.toString();
                    listnew[index] = element;
                    console.log("new element:" + listnew[index].post);
                }
                //in the meantime send the new posts by day    
                return [2 /*return*/, listnew];
            });
        });
    };
    return EmailUtils;
}());
exports.EmailUtils = EmailUtils;
//# sourceMappingURL=EmailUtils.js.map