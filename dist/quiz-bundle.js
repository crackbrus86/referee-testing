/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var layout_1 = __webpack_require__(3);
ReactDOM.render(React.createElement(layout_1.RtQuiz, null), document.getElementById("quiz-app"));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var login_1 = __webpack_require__(4);
var RtQuiz = /** @class */ (function (_super) {
    __extends(RtQuiz, _super);
    function RtQuiz(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            user: null
        };
        return _this;
    }
    RtQuiz.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(login_1.Login, { user: this.state.user }));
    };
    return RtQuiz;
}(React.Component));
exports.RtQuiz = RtQuiz;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var sign_in_1 = __webpack_require__(5);
var register_1 = __webpack_require__(6);
var LoginViewTypes;
(function (LoginViewTypes) {
    LoginViewTypes[LoginViewTypes["SignIn"] = 0] = "SignIn";
    LoginViewTypes[LoginViewTypes["Register"] = 1] = "Register";
})(LoginViewTypes || (LoginViewTypes = {}));
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            member: {
                name: '',
                surname: '',
                midName: '',
                email: ''
            },
            viewType: 0,
            password: '',
            confirm: ''
        };
        return _this;
    }
    Login.prototype.showSingIn = function () {
        this.setState({ viewType: LoginViewTypes.SignIn });
    };
    Login.prototype.showRegister = function () {
        this.setState({ viewType: LoginViewTypes.Register });
    };
    Login.prototype.render = function () {
        if (!!this.props.user)
            return null;
        var form = (this.state.viewType) ?
            React.createElement(register_1.Register, { member: this.state.member, password: this.state.password, confirm: this.state.confirm }) :
            React.createElement(sign_in_1.SignIn, { email: this.state.member.email, password: this.state.password });
        return React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("button", { type: "button", onClick: this.showSingIn.bind(this) }, "\u0423\u0432\u0456\u0439\u0442\u0438"),
                React.createElement("button", { type: "button", onClick: this.showRegister.bind(this) }, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F")),
            form);
    };
    return Login;
}(React.Component));
exports.Login = Login;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
exports.SignIn = function (props) {
    return React.createElement("div", null,
        React.createElement("form", null,
            React.createElement("div", null,
                React.createElement("label", null, "email"),
                React.createElement("input", { type: "email" })),
            React.createElement("div", null,
                React.createElement("label", null, "\u043F\u0430\u0440\u043E\u043B\u044C"),
                React.createElement("input", { type: "password" })),
            React.createElement("div", null,
                React.createElement("button", { type: "button" }, "\u0423\u0432\u0456\u0439\u0442\u0438"))));
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
exports.Register = function (props) {
    return React.createElement("div", null,
        React.createElement("form", null,
            React.createElement("div", null,
                React.createElement("label", null, "\u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),
                React.createElement("input", { type: "text", value: props.member.surname })),
            React.createElement("div", null,
                React.createElement("label", null, "\u0456\u043C'\u044F"),
                React.createElement("input", { type: "text", value: props.member.name })),
            React.createElement("div", null,
                React.createElement("label", null, "\u043F\u043E-\u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456"),
                React.createElement("input", { type: "text", value: props.member.midName })),
            React.createElement("div", null,
                React.createElement("label", null, "email"),
                React.createElement("input", { type: "email", value: props.member.email })),
            React.createElement("div", null,
                React.createElement("label", null, "\u043F\u0430\u0440\u043E\u043B\u044C"),
                React.createElement("input", { type: "password", value: props.password })),
            React.createElement("div", null,
                React.createElement("label", null, "\u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u043B\u044F"),
                React.createElement("input", { type: "password", value: props.confirm })),
            React.createElement("div", null,
                React.createElement("button", { type: "button" }, "\u0420\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F"))));
};


/***/ })
/******/ ]);
//# sourceMappingURL=quiz-bundle.js.map