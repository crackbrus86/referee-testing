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
var questions_1 = __webpack_require__(3);
ReactDOM.render(React.createElement(questions_1.Questions, null), document.getElementById("app"));


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
var header_1 = __webpack_require__(4);
var questionsList_1 = __webpack_require__(6);
var Questions = /** @class */ (function (_super) {
    __extends(Questions, _super);
    function Questions(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            questions: [],
            defaultQuestion: {
                id: null,
                text: "",
                answers: []
            }
        };
        return _this;
    }
    Questions.prototype.componentDidMount = function () {
    };
    Questions.prototype.changeQuestionText = function (newText) {
        var tmp = this.state.defaultQuestion;
        tmp.text = newText;
        this.setState({ defaultQuestion: tmp });
    };
    Questions.prototype.render = function () {
        return React.createElement("div", { className: "questions-app" },
            React.createElement(header_1.QuestionsHeader, { question: this.state.defaultQuestion, changeQuestion: this.changeQuestionText.bind(this) }),
            React.createElement(questionsList_1.QuestionsList, { questions: this.state.questions }));
    };
    return Questions;
}(React.Component));
exports.Questions = Questions;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var questionEditTemplate_1 = __webpack_require__(5);
exports.QuestionsHeader = function (props) {
    return React.createElement("div", null,
        React.createElement(questionEditTemplate_1.QuestionEditTemplate, { question: props.question, changeText: props.changeQuestion }),
        React.createElement("button", { type: "button" }, "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043F\u0438\u0442\u0430\u043D\u043D\u044F"));
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
exports.QuestionEditTemplate = function (props) {
    var answers = props.question.answers.map(function (x, index) { return React.createElement("div", null,
        React.createElement("input", { type: "text", key: index, value: x.text })); });
    return React.createElement("div", { className: "quesion-edit-tpl" },
        React.createElement("div", null,
            React.createElement("label", null,
                "\u0417\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F",
                React.createElement("textarea", { value: props.question.text, onChange: function (e) { return props.changeText(e.target.value); } }))),
        React.createElement("div", null,
            React.createElement("label", null, "\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456"),
            answers));
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
exports.QuestionsList = function (props) {
    var items = props.questions.map(function (x) { return React.createElement("li", { key: x.id }, x.text); });
    return React.createElement("ul", null, items);
};


/***/ })
/******/ ]);
//# sourceMappingURL=questions-bundle.js.map