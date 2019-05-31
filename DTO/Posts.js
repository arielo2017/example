"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post(datepost, post) {
        this._datepost = datepost;
    }
    Object.defineProperty(Post.prototype, "datepost", {
        get: function () {
            return this._datepost;
        },
        set: function (value) {
            this._datepost = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "post", {
        get: function () {
            return this._post;
        },
        set: function (value) {
            this._post = value;
        },
        enumerable: true,
        configurable: true
    });
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=Posts.js.map