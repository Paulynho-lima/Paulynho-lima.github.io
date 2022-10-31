"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var swiper_1 = require("swiper");
var react_1 = require("swiper/react");
require("swiper/swiper.min.css");
require("swiper/modules/pagination/pagination.min.css");
require("swiper/modules/navigation/navigation.min.css");
require("./carossel.css");
function Carossel(_a) {
    var settings = _a.settings, children = _a.children;
    return (React.createElement("div", null,
        React.createElement(react_1.Swiper, __assign({ modules: [swiper_1.Navigation, swiper_1.Pagination, swiper_1.A11y] }, settings), children)));
}
exports.default = Carossel;
//# sourceMappingURL=index.js.map