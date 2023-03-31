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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n    var list = []; // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = cssWithMappingToString(item, useSourceMap);\n            if (item[2]) {\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n            }\n            return content;\n        }).join('');\n    }; // import a list of modules into the list\n    // eslint-disable-next-line func-names\n    list.i = function (modules, mediaQuery, dedupe) {\n        if (typeof modules === 'string') {\n            // eslint-disable-next-line no-param-reassign\n            modules = [[null, modules, '']];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var i = 0; i < this.length; i++) {\n                // eslint-disable-next-line prefer-destructuring\n                var id = this[i][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _i = 0; _i < modules.length; _i++) {\n            var item = [].concat(modules[_i]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                // eslint-disable-next-line no-continue\n                continue;\n            }\n            if (mediaQuery) {\n                if (!item[2]) {\n                    item[2] = mediaQuery;\n                }\n                else {\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\nfunction cssWithMappingToString(item, useSourceMap) {\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n    var cssMapping = item[3];\n    if (!cssMapping) {\n        return content;\n    }\n    if (useSourceMap && typeof btoa === 'function') {\n        var sourceMapping = toComment(cssMapping);\n        var sourceURLs = cssMapping.sources.map(function (source) {\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n        });\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n    }\n    return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    return \"/*# \".concat(data, \" */\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppComponent = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar actions_1 = __webpack_require__(/*! ./redux/auth/actions */ \"./src/redux/auth/actions.ts\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar PostModal_1 = __webpack_require__(/*! ./shared/CardsList/Card/TextContent/PostModal */ \"./src/shared/CardsList/Card/TextContent/PostModal/index.ts\");\nvar PageNotFound_1 = __webpack_require__(/*! ./shared/PageNotFound */ \"./src/shared/PageNotFound/index.ts\");\nfunction AppComponent() {\n    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];\n    var dispatch = (0, react_redux_1.useDispatch)();\n    (0, react_1.useEffect)(function () {\n        dispatch((0, actions_1.setTokenThunk)());\n        setMounted(true);\n    }, []);\n    return (react_1.default.createElement(react_1.default.Fragment, null, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\n        react_1.default.createElement(Layout_1.Layout, null,\n            react_1.default.createElement(Header_1.Header, null),\n            react_1.default.createElement(Content_1.Content, null,\n                react_1.default.createElement(react_router_dom_1.Switch, null,\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/posts\" },\n                        react_1.default.createElement(CardsList_1.CardsList, null)),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"*\" },\n                        react_1.default.createElement(PageNotFound_1.PageNotFound, null))))),\n        react_1.default.createElement(react_router_dom_1.Switch, null,\n            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: \"/\" },\n                react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/posts\" })),\n            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: \"/auth\" },\n                react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/posts\" })),\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"/posts/post/:id\" },\n                react_1.default.createElement(PostModal_1.PostModal, null)))))));\n}\nexports.AppComponent = AppComponent;\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/Provider.tsx":
/*!**************************!*\
  !*** ./src/Provider.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar App_1 = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\nvar rootStore_1 = __webpack_require__(/*! ./redux/rootStore */ \"./src/redux/rootStore.ts\");\nfunction ProviderComponent() {\n    return (react_1.default.createElement(react_redux_1.Provider, { store: rootStore_1.store },\n        react_1.default.createElement(App_1.AppComponent, null)));\n}\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(ProviderComponent, null); });\n\n\n//# sourceURL=webpack:///./src/Provider.tsx?");

/***/ }),

/***/ "./src/hooks/usePostCommentsData.ts":
/*!******************************************!*\
  !*** ./src/hooks/usePostCommentsData.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.usePostCommentsData = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar rootStore_1 = __webpack_require__(/*! ../redux/rootStore */ \"./src/redux/rootStore.ts\");\nfunction usePostCommentsData(subreddit, articleID) {\n    var token = rootStore_1.store.getState().token.token;\n    var _a = (0, react_1.useState)([]), commentsData = _a[0], setCommentsData = _a[1];\n    (0, react_1.useEffect)(function () {\n        axios_1.default.get(\"https://oauth.reddit.com/\".concat(subreddit, \"/comments/\").concat(articleID, \".json\"), {\n            headers: { Authorization: \"bearer \".concat(token) }\n        }).then(function (res) {\n            setCommentsData(res.data[1].data.children);\n        }).catch(console.log);\n    }, []);\n    return commentsData;\n}\nexports.usePostCommentsData = usePostCommentsData;\n\n\n//# sourceURL=webpack:///./src/hooks/usePostCommentsData.ts?");

/***/ }),

/***/ "./src/hooks/useUserAvatar.ts":
/*!************************************!*\
  !*** ./src/hooks/useUserAvatar.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useUserAvatar = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nfunction useUserAvatar(username) {\n    var _a = (0, react_1.useState)(''), userAvatar = _a[0], setUserAvatar = _a[1];\n    (0, react_1.useEffect)(function () {\n        if (username === \"[deleted]\")\n            return;\n        axios_1.default.get(\"https://www.reddit.com/user/\".concat(username, \"/about.json\")).then(function (res) {\n            setUserAvatar(res.data.data['snoovatar_img']);\n        }).catch(console.log);\n    }, [username]);\n    return userAvatar;\n}\nexports.useUserAvatar = useUserAvatar;\n\n\n//# sourceURL=webpack:///./src/hooks/useUserAvatar.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useUserData = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar actions_1 = __webpack_require__(/*! ../redux/me/actions */ \"./src/redux/me/actions.ts\");\nfunction useUserData() {\n    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.me.loading; });\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.token; });\n    var dispath = (0, react_redux_1.useDispatch)();\n    (0, react_1.useEffect)(function () {\n        if (token !== \"\" && token !== 'undefined') {\n            dispath((0, actions_1.meRequestAsync)());\n        }\n    }, [token]);\n    return {\n        data: data,\n        loading: loading\n    };\n}\nexports.useUserData = useUserData;\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n  --black:          #333333;\\n  --orange:         #CC6633;\\n  --green:          #A4CC33;\\n  --whiteLightness: 100%;\\n  --white:          hsl(0, 0%, var(--whiteLightness));\\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\n  --greyE5:         hsl(0, 0%, calc(var(--whiteLightness) - 10%));\\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--grayF4);\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', serif;\\n}\\n\\n* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/redux/auth/actions.ts":
/*!***********************************!*\
  !*** ./src/redux/auth/actions.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setTokenThunk = exports.setToken = exports.SET_TOKEN = void 0;\nexports.SET_TOKEN = 'SET_TOKEN';\nvar setToken = function (token) { return ({\n    type: exports.SET_TOKEN,\n    token: token\n}); };\nexports.setToken = setToken;\nvar setTokenThunk = function () { return function (dispath) {\n    if (window.__token__ !== \"undefined\" && window.localStorage.getItem('token') === \"undefined\") {\n        dispath((0, exports.setToken)(window.__token__));\n        window.localStorage.setItem('token', window.__token__);\n    }\n    else if (window.__token__ !== \"undefined\" && window.__token__ !== window.localStorage.getItem('token')) {\n        window.localStorage.setItem('token', window.__token__);\n        dispath((0, exports.setToken)(window.localStorage.getItem('token')));\n    }\n    else if (window.localStorage.getItem('token') !== \"undefined\") {\n        dispath((0, exports.setToken)(window.localStorage.getItem('token')));\n    }\n    else {\n        dispath((0, exports.setToken)(window.__token__));\n    }\n}; };\nexports.setTokenThunk = setTokenThunk;\n\n\n//# sourceURL=webpack:///./src/redux/auth/actions.ts?");

/***/ }),

/***/ "./src/redux/auth/reduser.ts":
/*!***********************************!*\
  !*** ./src/redux/auth/reduser.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.tokenReduser = void 0;\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/redux/auth/actions.ts\");\nvar tokenReduser = function (state, action) {\n    switch (action.type) {\n        case actions_1.SET_TOKEN:\n            return __assign(__assign({}, state), { token: action.token });\n        default:\n            return state;\n    }\n};\nexports.tokenReduser = tokenReduser;\n\n\n//# sourceURL=webpack:///./src/redux/auth/reduser.ts?");

/***/ }),

/***/ "./src/redux/me/actions.ts":
/*!*********************************!*\
  !*** ./src/redux/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.meRequestAsync = exports.MeRequestError = exports.ME_REQUEST_ERROR = exports.MeRequestSuccsess = exports.ME_REQUEST_SUCCSESS = exports.MeRequest = exports.ME_REQUEST = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nexports.ME_REQUEST = 'ME_REQUEST';\nvar MeRequest = function () { return ({\n    type: exports.ME_REQUEST,\n}); };\nexports.MeRequest = MeRequest;\nexports.ME_REQUEST_SUCCSESS = 'ME_REQUEST_SUCCSESS';\nvar MeRequestSuccsess = function (data) { return ({\n    type: exports.ME_REQUEST_SUCCSESS,\n    data: data,\n}); };\nexports.MeRequestSuccsess = MeRequestSuccsess;\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\nvar MeRequestError = function (error) { return ({\n    type: exports.ME_REQUEST_ERROR,\n    error: error,\n}); };\nexports.MeRequestError = MeRequestError;\nvar meRequestAsync = function () { return function (dispath, getState) {\n    dispath((0, exports.MeRequest)());\n    axios_1.default.get(\"https://oauth.reddit.com/api/v1/me.json\", {\n        headers: { Authorization: \"bearer \".concat(getState().token.token) }\n    }).then(function (res) {\n        var _a = res.data, name = _a.name, snoovatar_img = _a.snoovatar_img;\n        dispath((0, exports.MeRequestSuccsess)({ name: name, iconImg: snoovatar_img }));\n    }).catch(function (req) {\n        console.log(req);\n        dispath((0, exports.MeRequestError)(String(req)));\n    });\n}; };\nexports.meRequestAsync = meRequestAsync;\n\n\n//# sourceURL=webpack:///./src/redux/me/actions.ts?");

/***/ }),

/***/ "./src/redux/me/reduser.ts":
/*!*********************************!*\
  !*** ./src/redux/me/reduser.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.meReduser = void 0;\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/redux/me/actions.ts\");\nvar meReduser = function (state, action) {\n    switch (action.type) {\n        case actions_1.ME_REQUEST:\n            return __assign(__assign({}, state), { loading: true });\n        case actions_1.ME_REQUEST_SUCCSESS:\n            return __assign(__assign({}, state), { data: action.data, loading: false });\n        case actions_1.ME_REQUEST_ERROR:\n            return __assign(__assign({}, state), { error: action.error, loading: false });\n        default:\n            return state;\n    }\n};\nexports.meReduser = meReduser;\n\n\n//# sourceURL=webpack:///./src/redux/me/reduser.ts?");

/***/ }),

/***/ "./src/redux/posts/actions.ts":
/*!************************************!*\
  !*** ./src/redux/posts/actions.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.postAsyncRequst = exports.PostRequsetError = exports.POST_REQUST_ERROR = exports.PostRequsetSuccsess = exports.POST_REQUST_SUCCSESS = exports.PostRequset = exports.POST_REQUST = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar action_1 = __webpack_require__(/*! ./pagination/action */ \"./src/redux/posts/pagination/action.ts\");\nvar actions_1 = __webpack_require__(/*! ./paginationLimit/actions */ \"./src/redux/posts/paginationLimit/actions.ts\");\nexports.POST_REQUST = 'POST_REQUST';\nvar PostRequset = function () { return ({\n    type: exports.POST_REQUST,\n}); };\nexports.PostRequset = PostRequset;\nexports.POST_REQUST_SUCCSESS = 'POST_REQUST_SUCCSESS';\nvar PostRequsetSuccsess = function (data) { return ({\n    type: exports.POST_REQUST_SUCCSESS,\n    data: data\n}); };\nexports.PostRequsetSuccsess = PostRequsetSuccsess;\nexports.POST_REQUST_ERROR = 'POST_REQUST_ERROR';\nvar PostRequsetError = function (error) { return ({\n    type: exports.POST_REQUST_ERROR,\n    error: error\n}); };\nexports.PostRequsetError = PostRequsetError;\nvar postAsyncRequst = function () { return function (dispath, getState) {\n    if (getState().post.error !== '') {\n        dispath((0, exports.PostRequsetError)(''));\n    }\n    if (getState().pagination !== 'end' && getState().paginationLimit.isLoadMore) {\n        dispath((0, exports.PostRequset)());\n        axios_1.default.get(\"https://oauth.reddit.com/new.json?sr_detail=true&after=\".concat(getState().pagination, \"&limit=10\"), {\n            headers: { Authorization: \"bearer \".concat(getState().token.token) }\n        }).then(function (res) {\n            console.log('res.data.data.after: ', res.data.data.after);\n            if (getState().pagination !== res.data.data.after && res.data.data.after !== null) {\n                dispath((0, exports.PostRequsetSuccsess)(res.data.data.children));\n                dispath((0, action_1.paginationAction)(res.data.data.after));\n                if (getState().paginationLimit.limit === 0) {\n                    dispath((0, actions_1.limitAction)(3));\n                    dispath((0, actions_1.isLoadMoreAction)(false));\n                }\n                else if (getState().paginationLimit.limit !== 0) {\n                    dispath((0, actions_1.limitAction)(getState().paginationLimit.limit - 1));\n                }\n            }\n            else if (getState().pagination !== '' && res.data.data.after === null) {\n                dispath((0, exports.PostRequsetSuccsess)(res.data.data.children));\n                dispath((0, action_1.paginationAction)('end'));\n                dispath((0, actions_1.limitAction)(3));\n            }\n        }).catch(function (error) {\n            console.log(error);\n            dispath((0, exports.PostRequsetError)(String(error)));\n        });\n    }\n}; };\nexports.postAsyncRequst = postAsyncRequst;\n\n\n//# sourceURL=webpack:///./src/redux/posts/actions.ts?");

/***/ }),

/***/ "./src/redux/posts/pagination/action.ts":
/*!**********************************************!*\
  !*** ./src/redux/posts/pagination/action.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.paginationAction = exports.PAGINATION = void 0;\nexports.PAGINATION = 'PAGINATION';\nvar paginationAction = function (listing) { return ({\n    type: exports.PAGINATION,\n    listing: listing\n}); };\nexports.paginationAction = paginationAction;\n\n\n//# sourceURL=webpack:///./src/redux/posts/pagination/action.ts?");

/***/ }),

/***/ "./src/redux/posts/paginationLimit/actions.ts":
/*!****************************************************!*\
  !*** ./src/redux/posts/paginationLimit/actions.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.limitAction = exports.LIMIT = exports.isLoadMoreAction = exports.IS_LOAD_MORE = void 0;\nexports.IS_LOAD_MORE = 'IS_LOAD_MORE';\nvar isLoadMoreAction = function (isLoadMore) { return ({\n    type: exports.IS_LOAD_MORE,\n    isLoadMore: isLoadMore\n}); };\nexports.isLoadMoreAction = isLoadMoreAction;\nexports.LIMIT = 'LIMIT';\nvar limitAction = function (limit) { return ({\n    type: exports.LIMIT,\n    limit: limit\n}); };\nexports.limitAction = limitAction;\n\n\n//# sourceURL=webpack:///./src/redux/posts/paginationLimit/actions.ts?");

/***/ }),

/***/ "./src/redux/posts/paginationLimit/reduser.ts":
/*!****************************************************!*\
  !*** ./src/redux/posts/paginationLimit/reduser.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.paginationReduser = void 0;\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/redux/posts/paginationLimit/actions.ts\");\nvar paginationReduser = function (state, action) {\n    if (state === void 0) { state = {\n        isLoadMore: true,\n        limit: 3\n    }; }\n    switch (action.type) {\n        case actions_1.LIMIT:\n            return __assign(__assign({}, state), { limit: action.limit });\n        case actions_1.IS_LOAD_MORE:\n            return __assign(__assign({}, state), { isLoadMore: action.isLoadMore });\n        default:\n            return state;\n    }\n};\nexports.paginationReduser = paginationReduser;\n\n\n//# sourceURL=webpack:///./src/redux/posts/paginationLimit/reduser.ts?");

/***/ }),

/***/ "./src/redux/posts/reduser.ts":
/*!************************************!*\
  !*** ./src/redux/posts/reduser.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PostReduser = void 0;\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/redux/posts/actions.ts\");\nvar PostReduser = function (state, action) {\n    var _a;\n    switch (action.type) {\n        case actions_1.POST_REQUST:\n            return __assign(__assign({}, state), { loading: true });\n        case actions_1.POST_REQUST_SUCCSESS:\n            return __assign(__assign({}, state), { loading: false, data: (_a = state.data).concat.apply(_a, action.data) });\n        case actions_1.POST_REQUST_ERROR:\n            return __assign(__assign({}, state), { loading: false, error: action.error });\n        default:\n            return state;\n    }\n};\nexports.PostReduser = PostReduser;\n\n\n//# sourceURL=webpack:///./src/redux/posts/reduser.ts?");

/***/ }),

/***/ "./src/redux/rootStore.ts":
/*!********************************!*\
  !*** ./src/redux/rootStore.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.store = void 0;\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\nvar actions_1 = __webpack_require__(/*! ./auth/actions */ \"./src/redux/auth/actions.ts\");\nvar reduser_1 = __webpack_require__(/*! ./auth/reduser */ \"./src/redux/auth/reduser.ts\");\nvar actions_2 = __webpack_require__(/*! ./me/actions */ \"./src/redux/me/actions.ts\");\nvar reduser_2 = __webpack_require__(/*! ./me/reduser */ \"./src/redux/me/reduser.ts\");\nvar actions_3 = __webpack_require__(/*! ./posts/actions */ \"./src/redux/posts/actions.ts\");\nvar action_1 = __webpack_require__(/*! ./posts/pagination/action */ \"./src/redux/posts/pagination/action.ts\");\nvar actions_4 = __webpack_require__(/*! ./posts/paginationLimit/actions */ \"./src/redux/posts/paginationLimit/actions.ts\");\nvar reduser_3 = __webpack_require__(/*! ./posts/paginationLimit/reduser */ \"./src/redux/posts/paginationLimit/reduser.ts\");\nvar reduser_4 = __webpack_require__(/*! ./posts/reduser */ \"./src/redux/posts/reduser.ts\");\nvar initialState = {\n    token: {\n        token: ''\n    },\n    me: {\n        loading: false,\n        error: '',\n        data: {},\n    },\n    post: {\n        loading: false,\n        error: '',\n        data: []\n    },\n    pagination: '',\n    paginationLimit: {\n        isLoadMore: true,\n        limit: 3\n    }\n};\nvar rootReducer = function (state, action) {\n    if (state === void 0) { state = initialState; }\n    switch (action.type) {\n        case actions_3.POST_REQUST:\n        case actions_3.POST_REQUST_SUCCSESS:\n        case actions_3.POST_REQUST_ERROR:\n            return __assign(__assign({}, state), { post: (0, reduser_4.PostReduser)(state.post, action) });\n        case action_1.PAGINATION:\n            return __assign(__assign({}, state), { pagination: action.listing });\n        case actions_4.LIMIT:\n        case actions_4.IS_LOAD_MORE:\n            return __assign(__assign({}, state), { paginationLimit: (0, reduser_3.paginationReduser)(state.paginationLimit, action) });\n        case actions_2.ME_REQUEST:\n        case actions_2.ME_REQUEST_SUCCSESS:\n        case actions_2.ME_REQUEST_ERROR:\n            return __assign(__assign({}, state), { me: (0, reduser_2.meReduser)(state.me, action) });\n        case actions_1.SET_TOKEN:\n            return __assign(__assign({}, state), { token: (0, reduser_1.tokenReduser)(state.token, action) });\n        default:\n            return state;\n    }\n};\nexports.store = (0, redux_1.legacy_createStore)(rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\n\n\n//# sourceURL=webpack:///./src/redux/rootStore.ts?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nvar indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Reddit</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  <script>\\n    window.__token__ = '\".concat(token, \"';\\n  </script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\").concat(content, \"</div>\\n  <div id=\\\"react-modal\\\"></div>\\n  <div id=\\\"dropdown-modal\\\"></div>\\n</body>\\n\\n</html>\\n\"); };\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar Provider_1 = __webpack_require__(/*! ../Provider */ \"./src/Provider.tsx\");\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar app = (0, express_1.default)();\nvar prevAccessToken = 'undefined';\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\napp.get(\"/\", function (req, res) {\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, Provider_1.App)())));\n});\napp.get(\"/auth\", function (req, res) {\n    console.log(req.query.code);\n    console.log(process.env.CLIENT_ID);\n    axios_1.default.post(\"https://www.reddit.com/api/v1/access_token\", \"grant_type=authorization_code&code=\".concat(req.query.code, \"&redirect_uri=http://localhost:3000/auth\"), {\n        auth: { username: process.env.CLIENT_ID, password: 'cGjyMeKr4NY-gePerCiipu2zsoAuFQ' },\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' },\n    }).then(function (_a) {\n        var data = _a.data;\n        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, Provider_1.App)()), data[\"access_token\"]));\n        prevAccessToken = data[\"access_token\"];\n    })\n        .catch(function (err) {\n        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, Provider_1.App)()), prevAccessToken));\n        console.log(err);\n    });\n});\napp.get(\"*\", function (req, res) {\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, Provider_1.App)()), prevAccessToken));\n});\napp.listen(3000, function () {\n    console.log(\"server started on port http://localhost:3000\");\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Card = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/index.ts\"); // Munu_6 Test leasson component\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/index.ts\");\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/index.ts\");\nvar _ontrols_1 = __webpack_require__(/*! ./Сontrols */ \"./src/shared/CardsList/Card/Сontrols/index.ts\");\nfunction Card(props) {\n    var thumbnail = props.thumbnail, score = props.score, comments = props.comments;\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\n        react_1.default.createElement(TextContent_1.TextContent, __assign({}, props)),\n        react_1.default.createElement(Preview_1.Preview, __assign({}, { thumbnail: thumbnail })),\n        react_1.default.createElement(Menu_1.Menu, null),\n        react_1.default.createElement(_ontrols_1.Сontrols, __assign({}, { score: score, comments: comments }))));\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Menu = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\nvar menuDropdownList_1 = __webpack_require__(/*! ../../../Dropdown/exemples/menuDropdownList */ \"./src/shared/Dropdown/exemples/menuDropdownList.ts\");\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\nvar Icon_1 = __webpack_require__(/*! ../../../icon/Icon */ \"./src/shared/icon/Icon.tsx\");\nfunction Menu() {\n    var _a = (0, react_1.useState)(false), isOpen = _a[0], setOpen = _a[1];\n    var _b = (0, react_1.useState)([0, 0]), btnRect = _b[0], setBtnRect = _b[1];\n    var btnRef = (0, react_1.useRef)(null);\n    (0, react_1.useEffect)(function () {\n        if (isOpen) {\n            if (!btnRef.current)\n                return;\n            var rect = btnRef.current.getBoundingClientRect();\n            setBtnRect([rect.left, rect.top, rect.height]);\n        }\n    }, [isOpen]);\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\n        react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton, onClick: function () {\n                setOpen(!isOpen);\n            }, ref: btnRef },\n            react_1.default.createElement(Icon_1.Icon, { width: \"5\", height: \"20\", iconName: Icon_1.EIcon.Menu })),\n        isOpen &&\n            react_1.default.createElement(Dropdown_1.Dropdown, __assign({}, { onClick: function () { return setOpen(!isOpen); }, arrayLiItem: menuDropdownList_1.arrayLiItem, btnRect: btnRect }))));\n}\nexports.Menu = Menu;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/menu.css":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/menu.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--22Yos\",\n\t\"menuButton\": \"menu__menuButton--2RzAb\",\n\t\"dropdown\": \"menu__dropdown--2v5tI\",\n\t\"closeButton\": \"menu__closeButton--1Vmbj\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Preview = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/CardsList/Card/Preview/preview.css\"));\nfunction Preview(_a) {\n    var thumbnail = _a.thumbnail;\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview },\n        react_1.default.createElement(\"img\", { src: thumbnail === 'self' || thumbnail === 'nsfw' || thumbnail === 'default' ?\n                \"https://cdn.dribbble.com/userupload/4027430/file/original-2dec48cfbbcef11346dc39ecddb8e3c7.png?compress=1&resize=400x300&vertical=top\"\n                : thumbnail, alt: \"\", className: preview_css_1.default.previewImg })));\n}\nexports.Preview = Preview;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/Preview.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/preview.css":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/preview.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--1Nukb\",\n\t\"previewImg\": \"preview__previewImg--3kTAV\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/PostModal/CommentForm/CommentForm.tsx":
/*!*************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/PostModal/CommentForm/CommentForm.tsx ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentForm = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar Icon_1 = __webpack_require__(/*! ../../../../../icon/Icon */ \"./src/shared/icon/Icon.tsx\");\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CardsList/Card/TextContent/PostModal/CommentForm/commentform.css\"));\nvar zustand_1 = __webpack_require__(/*! zustand */ \"zustand\");\nvar useCommentStore = (0, zustand_1.create)(function (set) { return ({\n    comment: 'Привет из Zustand!',\n    setComment: function (text) { return set({ comment: text }); }\n}); });\nfunction CommentForm(_a) {\n    var answerName = _a.answerName;\n    var name = (0, react_redux_1.useSelector)(function (store) { return store.me.data.name; });\n    // const [commentValue, setCommentValue] = useState('');\n    var _b = (0, react_1.useState)(false), isLogin = _b[0], setIsLogin = _b[1];\n    var _c = useCommentStore(), comment = _c.comment, setComment = _c.setComment;\n    var _d = (0, react_hook_form_1.useForm)(), register = _d.register, handleSubmit = _d.handleSubmit, setFocus = _d.setFocus;\n    var onSubmit = function (data) { return alert(JSON.stringify(data)); };\n    (0, react_1.useEffect)(function () {\n        setFocus(\"comment\");\n        if (answerName !== undefined || name !== undefined) {\n            setIsLogin(true);\n        }\n    }, [name]);\n    function hendleChange(event) {\n        setComment(event.target.value);\n        console.log(\"OnChangeEventState: \" + comment);\n    }\n    // {`${answerName? answerName : name}, оставьте ваш комментарий`}\n    return (react_1.default.createElement(\"div\", { className: commentform_css_1.default.formWrapper },\n        !isLogin && react_1.default.createElement(\"div\", null, \"\\u0432\\u043E\\u0439\\u0434\\u0438\\u0442\\u0435, \\u0447\\u0442\\u043E\\u0431\\u044B \\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0442\\u044C \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\"),\n        isLogin && (react_1.default.createElement(\"form\", { className: \"commentForm\", onSubmit: handleSubmit(onSubmit) },\n            react_1.default.createElement(\"textarea\", __assign({ className: commentform_css_1.default.commentInput, defaultValue: comment }, register(\"comment\", { onChange: function (e) { return hendleChange(e); } }))),\n            react_1.default.createElement(\"div\", { className: commentform_css_1.default.formControls },\n                react_1.default.createElement(\"ul\", { className: commentform_css_1.default.controlList },\n                    react_1.default.createElement(\"li\", { className: commentform_css_1.default.controlItem },\n                        react_1.default.createElement(\"button\", { className: commentform_css_1.default.controlBtn, onClick: function (e) { e.preventDefault(); } },\n                            react_1.default.createElement(Icon_1.Icon, { width: '20', height: '12', iconName: Icon_1.EIcon.FragmentCode }))),\n                    react_1.default.createElement(\"li\", { className: commentform_css_1.default.controlItem },\n                        react_1.default.createElement(\"button\", { className: commentform_css_1.default.controlBtn, onClick: function (e) { e.preventDefault(); } },\n                            react_1.default.createElement(Icon_1.Icon, { width: \"18\", height: \"18\", iconName: Icon_1.EIcon.Image }))),\n                    react_1.default.createElement(\"li\", { className: commentform_css_1.default.controlItem },\n                        react_1.default.createElement(\"button\", { className: commentform_css_1.default.controlBtn, onClick: function (e) { e.preventDefault(); } },\n                            react_1.default.createElement(Icon_1.Icon, { width: \"16\", height: \"20\", iconName: Icon_1.EIcon.Document }))),\n                    react_1.default.createElement(\"li\", { className: commentform_css_1.default.controlItem },\n                        react_1.default.createElement(\"button\", { className: commentform_css_1.default.controlBtn, onClick: function (e) { e.preventDefault(); } },\n                            react_1.default.createElement(Icon_1.Icon, { width: \"14\", height: \"17\", iconName: Icon_1.EIcon.Download }))),\n                    react_1.default.createElement(\"li\", { className: commentform_css_1.default.controlItem },\n                        react_1.default.createElement(\"button\", { className: commentform_css_1.default.controlBtn, onClick: function (e) { e.preventDefault(); } },\n                            react_1.default.createElement(Icon_1.Icon, { width: \"18\", height: \"18\", iconName: Icon_1.EIcon.Contact }))),\n                    react_1.default.createElement(\"li\", { className: commentform_css_1.default.controlItem },\n                        react_1.default.createElement(\"button\", { className: commentform_css_1.default.controlBtn, onClick: function (e) { e.preventDefault(); } },\n                            react_1.default.createElement(Icon_1.Icon, { width: \"22\", height: \"16\", iconName: Icon_1.EIcon.Update }))),\n                    react_1.default.createElement(\"li\", { className: commentform_css_1.default.controlItem },\n                        react_1.default.createElement(\"button\", { className: commentform_css_1.default.controlBtn, onClick: function (e) { e.preventDefault(); } },\n                            react_1.default.createElement(Icon_1.Icon, { width: \"20\", height: \"10\", iconName: Icon_1.EIcon.Link }))),\n                    react_1.default.createElement(\"li\", { className: commentform_css_1.default.controlItem },\n                        react_1.default.createElement(\"button\", { className: commentform_css_1.default.controlBtn, onClick: function (e) { e.preventDefault(); } },\n                            react_1.default.createElement(Icon_1.Icon, { width: \"20\", height: \"18\", iconName: Icon_1.EIcon.СameraVoiсe }))),\n                    react_1.default.createElement(\"li\", { className: commentform_css_1.default.controlItem },\n                        react_1.default.createElement(\"button\", { className: commentform_css_1.default.controlBtn, onClick: function (e) { e.preventDefault(); } },\n                            react_1.default.createElement(Icon_1.Icon, { width: \"20\", height: \"20\", iconName: Icon_1.EIcon.Discuss }))),\n                    react_1.default.createElement(\"li\", { className: commentform_css_1.default.controlItem },\n                        react_1.default.createElement(\"button\", { className: commentform_css_1.default.controlBtn, onClick: function (e) { e.preventDefault(); } },\n                            react_1.default.createElement(Icon_1.Icon, { width: \"19\", height: \"19\", iconName: Icon_1.EIcon.Edit }))),\n                    react_1.default.createElement(\"li\", { className: commentform_css_1.default.controlItem },\n                        react_1.default.createElement(\"button\", { className: commentform_css_1.default.controlBtn, onClick: function (e) { e.preventDefault(); } },\n                            react_1.default.createElement(Icon_1.Icon, { width: \"16\", height: \"18\", iconName: Icon_1.EIcon.Translite }))),\n                    react_1.default.createElement(\"li\", { className: commentform_css_1.default.controlItem },\n                        react_1.default.createElement(\"button\", { className: commentform_css_1.default.controlBtn, onClick: function (e) { e.preventDefault(); } },\n                            react_1.default.createElement(Icon_1.Icon, { width: \"20\", height: \"20\", iconName: Icon_1.EIcon.PDFDocument })))),\n                react_1.default.createElement(\"button\", { className: commentform_css_1.default.formBtn }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"))))));\n}\nexports.CommentForm = CommentForm;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/PostModal/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/PostModal/CommentForm/commentform.css":
/*!*************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/PostModal/CommentForm/commentform.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentInput\": \"commentform__commentInput--EJBLK\",\n\t\"formControls\": \"commentform__formControls--3fZcY\",\n\t\"controlList\": \"commentform__controlList--3BNoe\",\n\t\"controlItem\": \"commentform__controlItem--1cSmp\",\n\t\"formBtn\": \"commentform__formBtn--3-mys\",\n\t\"controlBtn\": \"commentform__controlBtn--2kjzQ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/PostModal/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/PostModal/CommentForm/index.ts":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/PostModal/CommentForm/index.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CardsList/Card/TextContent/PostModal/CommentForm/CommentForm.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/PostModal/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/PostModal/Comments/Comment/Comment.tsx":
/*!**************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/PostModal/Comments/Comment/Comment.tsx ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Comment = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar useUserAvatar_1 = __webpack_require__(/*! ../../../../../../../hooks/useUserAvatar */ \"./src/hooks/useUserAvatar.ts\");\nvar convertDate_1 = __webpack_require__(/*! ../../../../../../../utils/convertDate */ \"./src/utils/convertDate.ts\");\nvar Icon_1 = __webpack_require__(/*! ../../../../../../icon/Icon */ \"./src/shared/icon/Icon.tsx\");\nvar CommentForm_1 = __webpack_require__(/*! ../../CommentForm */ \"./src/shared/CardsList/Card/TextContent/PostModal/CommentForm/index.ts\");\nvar comment_css_1 = __importDefault(__webpack_require__(/*! ./comment.css */ \"./src/shared/CardsList/Card/TextContent/PostModal/Comments/Comment/comment.css\"));\nfunction Comment(props) {\n    var author = props.author, body = props.body, created = props.created, replies = props.replies;\n    var createdAt = (0, convertDate_1.convertDate)(new Date(created * 1000));\n    var userAvatarUrl = (0, useUserAvatar_1.useUserAvatar)(author);\n    var _a = (0, react_1.useState)(false), isAnswer = _a[0], setAnswer = _a[1];\n    return (react_1.default.createElement(\"div\", { className: comment_css_1.default.commentWrapper },\n        react_1.default.createElement(\"div\", { className: comment_css_1.default.counter },\n            react_1.default.createElement(\"button\", { className: comment_css_1.default.counterUp },\n                react_1.default.createElement(Icon_1.Icon, { width: '19', height: '10', iconName: Icon_1.EIcon.KarmaBtn })),\n            react_1.default.createElement(\"button\", { className: comment_css_1.default.counterDown },\n                react_1.default.createElement(Icon_1.Icon, { width: '19', height: '10', iconName: Icon_1.EIcon.KarmaBtn }))),\n        react_1.default.createElement(\"div\", { className: comment_css_1.default.commentatorWrapper },\n            react_1.default.createElement(\"div\", { className: comment_css_1.default.avatarWrapper }, userAvatarUrl\n                ? react_1.default.createElement(\"img\", { src: userAvatarUrl, alt: \"avatar\" })\n                : react_1.default.createElement(Icon_1.Icon, { width: '50', height: '50', iconName: Icon_1.EIcon.Anon })),\n            react_1.default.createElement(\"span\", { className: comment_css_1.default.username },\n                author,\n                \" \"),\n            react_1.default.createElement(\"span\", { className: comment_css_1.default.created }, createdAt)),\n        react_1.default.createElement(\"p\", { className: comment_css_1.default.commentText }, body),\n        react_1.default.createElement(\"div\", { className: comment_css_1.default.control },\n            react_1.default.createElement(\"ul\", { className: comment_css_1.default.controlList },\n                react_1.default.createElement(\"li\", null,\n                    react_1.default.createElement(\"button\", { className: comment_css_1.default.controlBtn, onClick: function () { setAnswer(!isAnswer); } },\n                        react_1.default.createElement(Icon_1.Icon, { width: '14', height: '14', iconName: Icon_1.EIcon.Comment }),\n                        react_1.default.createElement(\"span\", { className: comment_css_1.default.buttonText }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\"))),\n                react_1.default.createElement(\"li\", null,\n                    react_1.default.createElement(\"button\", { className: comment_css_1.default.controlBtn },\n                        react_1.default.createElement(Icon_1.Icon, { width: '12', height: '14', iconName: Icon_1.EIcon.Share }),\n                        react_1.default.createElement(\"span\", { className: comment_css_1.default.buttonText }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\"))),\n                react_1.default.createElement(\"li\", null,\n                    react_1.default.createElement(\"button\", { className: comment_css_1.default.controlBtn },\n                        react_1.default.createElement(Icon_1.Icon, { width: '16', height: '14', iconName: Icon_1.EIcon.Report }),\n                        react_1.default.createElement(\"span\", { className: comment_css_1.default.buttonText }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))))),\n        isAnswer && react_1.default.createElement(CommentForm_1.CommentForm, { answerName: author }),\n        replies !== '' &&\n            (replies === null || replies === void 0 ? void 0 : replies.data.children.map(function (replied) {\n                if (typeof replied.data.body === \"undefined\")\n                    return;\n                return (react_1.default.createElement(\"div\", null,\n                    react_1.default.createElement(Comment, __assign({}, replied.data))));\n            }))));\n}\nexports.Comment = Comment;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/PostModal/Comments/Comment/Comment.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/PostModal/Comments/Comment/comment.css":
/*!**************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/PostModal/Comments/Comment/comment.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentWrapper\": \"comment__commentWrapper--2mi2n\",\n\t\"commentatorWrapper\": \"comment__commentatorWrapper--1MGMC\",\n\t\"counter\": \"comment__counter--10hYH\",\n\t\"counterDown\": \"comment__counterDown--jtErB\",\n\t\"created\": \"comment__created--3lOdL\",\n\t\"controlList\": \"comment__controlList--lnvhg\",\n\t\"controlBtn\": \"comment__controlBtn--1se2H\",\n\t\"avatarWrapper\": \"comment__avatarWrapper--7kHPM\",\n\t\"buttonText\": \"comment__buttonText--1FTpe\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/PostModal/Comments/Comment/comment.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/PostModal/Comments/Comments.tsx":
/*!*******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/PostModal/Comments/Comments.tsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Comments = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar usePostCommentsData_1 = __webpack_require__(/*! ../../../../../../hooks/usePostCommentsData */ \"./src/hooks/usePostCommentsData.ts\");\nvar EmptyResponse_1 = __webpack_require__(/*! ../../../../../EmptyResponse */ \"./src/shared/EmptyResponse/index.ts\");\nvar Comment_1 = __webpack_require__(/*! ./Comment/Comment */ \"./src/shared/CardsList/Card/TextContent/PostModal/Comments/Comment/Comment.tsx\");\nvar comments_css_1 = __importDefault(__webpack_require__(/*! ./comments.css */ \"./src/shared/CardsList/Card/TextContent/PostModal/Comments/comments.css\"));\nfunction Comments(props) {\n    var username = props.username, postID = props.postID;\n    var comments = (0, usePostCommentsData_1.usePostCommentsData)(username, postID);\n    var _a = (0, react_1.useState)(true), isLoading = _a[0], setIsLoading = _a[1];\n    var _b = (0, react_1.useState)(true), isCommentEmpty = _b[0], setIsCommentEmpty = _b[1];\n    (0, react_1.useEffect)(function () {\n        if (comments.length) {\n            setIsLoading(false);\n            setIsCommentEmpty(false);\n        }\n        else {\n            setIsLoading(false);\n            setIsCommentEmpty(true);\n        }\n    }, [comments]);\n    return (react_1.default.createElement(\"div\", { className: comments_css_1.default.commentWrapper },\n        react_1.default.createElement(\"div\", { className: comments_css_1.default.commentsSorted },\n            react_1.default.createElement(\"span\", { className: comments_css_1.default.commentSortedText },\n                \"\\u0421\\u043E\\u0440\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C \\u043F\\u043E: \",\n                react_1.default.createElement(\"button\", { className: comments_css_1.default.commentSortedBtn }, \"\\u041B\\u0443\\u0447\\u0448\\u0435\\u0435\"))),\n        !isLoading && isCommentEmpty && (react_1.default.createElement(EmptyResponse_1.EmptyResponse, null)),\n        !isLoading && !isCommentEmpty && (react_1.default.createElement(\"div\", { className: comments_css_1.default.comments }, comments.map(function (_a) {\n            var data = _a.data;\n            if (typeof data.body === \"undefined\")\n                return;\n            return (react_1.default.createElement(Comment_1.Comment, __assign({ key: data.id }, data)));\n        })))));\n}\nexports.Comments = Comments;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/PostModal/Comments/Comments.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/PostModal/Comments/comments.css":
/*!*******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/PostModal/Comments/comments.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"comments\": \"comments__comments--IpKir\",\n\t\"commentsSorted\": \"comments__commentsSorted--xOT1e\",\n\t\"commentSortedText\": \"comments__commentSortedText--2rvt_\",\n\t\"commentSortedBtn\": \"comments__commentSortedBtn--3q-nF\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/PostModal/Comments/comments.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/PostModal/Comments/index.ts":
/*!***************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/PostModal/Comments/index.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Comments */ \"./src/shared/CardsList/Card/TextContent/PostModal/Comments/Comments.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/PostModal/Comments/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/PostModal/PostModal.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/PostModal/PostModal.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PostModal = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar convertDate_1 = __webpack_require__(/*! ../../../../../utils/convertDate */ \"./src/utils/convertDate.ts\");\nvar postControlsList_1 = __webpack_require__(/*! ../../../../Dropdown/exemples/postControlsList */ \"./src/shared/Dropdown/exemples/postControlsList.ts\");\nvar List_1 = __webpack_require__(/*! ../../../../Dropdown/List */ \"./src/shared/Dropdown/List/index.ts\");\nvar loader_1 = __webpack_require__(/*! ../../../../icon/loader */ \"./src/shared/icon/loader.tsx\");\nvar KarmaCounter_1 = __webpack_require__(/*! ../../Сontrols/KarmaCounter */ \"./src/shared/CardsList/Card/Сontrols/KarmaCounter/index.ts\");\nvar TextContent_1 = __webpack_require__(/*! ../TextContent */ \"./src/shared/CardsList/Card/TextContent/TextContent.tsx\");\nvar CommentForm_1 = __webpack_require__(/*! ./CommentForm */ \"./src/shared/CardsList/Card/TextContent/PostModal/CommentForm/index.ts\");\nvar Comments_1 = __webpack_require__(/*! ./Comments */ \"./src/shared/CardsList/Card/TextContent/PostModal/Comments/index.ts\");\nvar postmodal_css_1 = __importDefault(__webpack_require__(/*! ./postmodal.css */ \"./src/shared/CardsList/Card/TextContent/PostModal/postmodal.css\"));\nfunction PostModal() {\n    var history = (0, react_router_dom_1.useHistory)();\n    var urlParam = (0, react_router_dom_1.useParams)();\n    var _a = (0, react_1.useState)({\n        key: \"\",\n        postID: \"\",\n        thumbnail: \"\",\n        title: \"\",\n        createdAt: \"\",\n        username: \"\",\n        icon_img: '',\n        score: 0,\n        comments: 0,\n        postURL: \"\",\n        userURL: \"\",\n        upvote_ratio: 0,\n        isTitleClickable: false\n    }), postData = _a[0], setPostData = _a[1];\n    var _b = (0, react_1.useState)(false), isLoading = _b[0], setIsLoading = _b[1];\n    var node = document.getElementById(\"react-modal\");\n    if (!node)\n        return null;\n    var modalRef = (0, react_1.useRef)(null);\n    (0, react_1.useEffect)(function () {\n        function hendelClick(e) {\n            if (e.target === modalRef.current)\n                history.push('/posts/');\n        }\n        if (!modalRef.current)\n            return;\n        modalRef.current.addEventListener('click', hendelClick);\n        return function () {\n            var _a;\n            (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('click', hendelClick);\n        };\n    }, []);\n    (0, react_1.useEffect)(function () {\n        setIsLoading(true);\n        axios_1.default.get(\"https://www.reddit.com/r/technology/api/info.json?sr_details=true&id=t3_\".concat(urlParam.id)).then(function (_a) {\n            var children = _a.data.data.children;\n            setPostData({\n                key: children[0].data.id,\n                postID: children[0].data.id,\n                thumbnail: children[0].data.thumbnail,\n                title: children[0].data.title,\n                createdAt: (0, convertDate_1.convertDate)(new Date(children[0].data.created * 1000)),\n                username: children[0].data.subreddit_name_prefixed,\n                icon_img: '',\n                score: children[0].data.score,\n                comments: children[0].data.num_comments,\n                postURL: children[0].data.permalink,\n                userURL: children[0].data.author_fullname,\n                upvote_ratio: children[0].data.upvote_ratio,\n                isTitleClickable: false\n            });\n            setIsLoading(false);\n        }).catch(function (e) {\n            setIsLoading(false);\n            console.error(e);\n        });\n    }, []);\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: postmodal_css_1.default.modal, ref: modalRef },\n        isLoading && (react_1.default.createElement(\"div\", null,\n            \" \",\n            react_1.default.createElement(loader_1.Loader, null),\n            \" \")),\n        !isLoading &&\n            (react_1.default.createElement(\"div\", { className: postmodal_css_1.default.modalContainer },\n                react_1.default.createElement(\"div\", { className: postmodal_css_1.default.modalHeader },\n                    react_1.default.createElement(KarmaCounter_1.KarmaCounter, __assign({}, { score: postData.score })),\n                    react_1.default.createElement(TextContent_1.TextContent, __assign({}, postData, { postURL: '#userPost', isTitleClickable: false }))),\n                react_1.default.createElement(\"div\", { className: postmodal_css_1.default.controls },\n                    react_1.default.createElement(List_1.List, { arrayLiItem: postControlsList_1.postControlsList, isDropdown: false, comments: postData.comments }),\n                    react_1.default.createElement(\"span\", { className: postmodal_css_1.default.controlsText }, \"\".concat(postData.upvote_ratio * 100, \"% \\u041F\\u0440\\u043E\\u0433\\u043E\\u043B\\u043E\\u0441\\u043E\\u0432\\u0430\\u043B\\u0438\"))),\n                react_1.default.createElement(CommentForm_1.CommentForm, null),\n                react_1.default.createElement(Comments_1.Comments, __assign({}, postData)))))), node);\n}\nexports.PostModal = PostModal;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/PostModal/PostModal.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/PostModal/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/PostModal/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./PostModal */ \"./src/shared/CardsList/Card/TextContent/PostModal/PostModal.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/PostModal/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/PostModal/postmodal.css":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/PostModal/postmodal.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"postmodal__modal--2uNWN\",\n\t\"modalContainer\": \"postmodal__modalContainer--3h11-\",\n\t\"modalHeader\": \"postmodal__modalHeader--1kQf8\",\n\t\"controls\": \"postmodal__controls--1Fmr0\",\n\t\"controlsText\": \"postmodal__controlsText--2PcUt\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/PostModal/postmodal.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TextContent = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/CardsList/Card/TextContent/textcontent.css\"));\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/CardsList/Card/TextContent/Title/index.ts\");\nvar UserLink_1 = __webpack_require__(/*! ./UserLink */ \"./src/shared/CardsList/Card/TextContent/UserLink/index.ts\");\nfunction TextContent(props) {\n    var createdAt = props.createdAt, username = props.username, icon_img = props.icon_img, userURL = props.userURL;\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\n        react_1.default.createElement(\"div\", { className: textcontent_css_1.default.metaData },\n            react_1.default.createElement(UserLink_1.UserLink, __assign({}, { username: username, icon_img: icon_img, userURL: userURL })),\n            react_1.default.createElement(\"span\", { className: textcontent_css_1.default.createdAt },\n                react_1.default.createElement(\"span\", { className: textcontent_css_1.default.publishedLabel }, \"\\u041E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\n                createdAt)),\n        react_1.default.createElement(Title_1.Title, __assign({}, props))));\n}\nexports.TextContent = TextContent;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/Title/Title.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/Title/Title.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Title = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar title_css_1 = __importDefault(__webpack_require__(/*! ./title.css */ \"./src/shared/CardsList/Card/TextContent/Title/title.css\"));\nfunction Title(props) {\n    var title = props.title;\n    return (react_1.default.createElement(\"h2\", { className: title_css_1.default.title },\n        react_1.default.createElement(react_router_dom_1.Link, { to: {\n                pathname: \"/posts/post/\".concat(props.postID),\n                state: props\n            }, className: title_css_1.default.postLink }, title)));\n}\nexports.Title = Title;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/Title/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/Title/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/CardsList/Card/TextContent/Title/Title.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/Title/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/Title/title.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/Title/title.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"title__title--3THtn\",\n\t\"postLink\": \"title__postLink--3ZH1E\",\n\t\"textContent\": \"title__textContent--1BWZQ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/Title/title.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/UserLink/UserLink.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/UserLink/UserLink.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserLink = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar userlink_css_1 = __importDefault(__webpack_require__(/*! ./userlink.css */ \"./src/shared/CardsList/Card/TextContent/UserLink/userlink.css\"));\nfunction UserLink(_a) {\n    var username = _a.username, icon_img = _a.icon_img, userURL = _a.userURL;\n    return (react_1.default.createElement(\"div\", { className: userlink_css_1.default.userLink },\n        react_1.default.createElement(\"a\", { href: userURL, className: userlink_css_1.default.username },\n            react_1.default.createElement(\"img\", { src: icon_img, alt: \"\", className: userlink_css_1.default.avatar }),\n            username)));\n}\nexports.UserLink = UserLink;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/UserLink/UserLink.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/UserLink/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/UserLink/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./UserLink */ \"./src/shared/CardsList/Card/TextContent/UserLink/UserLink.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/UserLink/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/UserLink/userlink.css":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/UserLink/userlink.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userLink\": \"userlink__userLink--X580t\",\n\t\"avatar\": \"userlink__avatar--3wav7\",\n\t\"username\": \"userlink__username--1lMzo\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/UserLink/userlink.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/TextContent.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/textcontent.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/textcontent.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--2RuXa\",\n\t\"metaData\": \"textcontent__metaData--1L7oU\",\n\t\"publishedLabel\": \"textcontent__publishedLabel--C6Pau\",\n\t\"createdAt\": \"textcontent__createdAt--1vECY\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/textcontent.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--7bN6-\",\n\t\"textContent\": \"card__textContent--3Ki_7\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/Card.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Сontrols/CommentsButton/CommentsButton.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Сontrols/CommentsButton/CommentsButton.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentsButton = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Icon_1 = __webpack_require__(/*! ../../../../icon/Icon */ \"./src/shared/icon/Icon.tsx\");\nvar commentsbutton_css_1 = __importDefault(__webpack_require__(/*! ./commentsbutton.css */ \"./src/shared/CardsList/Card/Сontrols/CommentsButton/commentsbutton.css\"));\nfunction CommentsButton(_a) {\n    var comments = _a.comments;\n    return (react_1.default.createElement(\"button\", { className: commentsbutton_css_1.default.commentsButton },\n        react_1.default.createElement(Icon_1.Icon, { width: '15', height: '15', iconName: Icon_1.EIcon.Comment }),\n        react_1.default.createElement(\"span\", { className: commentsbutton_css_1.default.commentsNumber }, comments)));\n}\nexports.CommentsButton = CommentsButton;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/%D0%A1ontrols/CommentsButton/CommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Сontrols/CommentsButton/commentsbutton.css":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Сontrols/CommentsButton/commentsbutton.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsButton\": \"commentsbutton__commentsButton--LPubV\",\n\t\"commentsNumber\": \"commentsbutton__commentsNumber--2W_qY\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/%D0%A1ontrols/CommentsButton/commentsbutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Сontrols/CommentsButton/index.ts":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/Сontrols/CommentsButton/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/Сontrols/CommentsButton/CommentsButton.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/%D0%A1ontrols/CommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Сontrols/KarmaCounter/KarmaCounter.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Сontrols/KarmaCounter/KarmaCounter.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.KarmaCounter = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Icon_1 = __webpack_require__(/*! ../../../../icon/Icon */ \"./src/shared/icon/Icon.tsx\");\nvar karmacounter_css_1 = __importDefault(__webpack_require__(/*! ./karmacounter.css */ \"./src/shared/CardsList/Card/Сontrols/KarmaCounter/karmacounter.css\"));\nfunction KarmaCounter(_a) {\n    var score = _a.score;\n    return (react_1.default.createElement(\"div\", { className: karmacounter_css_1.default.karmaCounter },\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.up },\n            react_1.default.createElement(Icon_1.Icon, { width: '19', height: '10', iconName: Icon_1.EIcon.KarmaBtn })),\n        react_1.default.createElement(\"span\", { className: karmacounter_css_1.default.karmaValue }, score),\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.down },\n            react_1.default.createElement(Icon_1.Icon, { width: '19', height: '10', iconName: Icon_1.EIcon.KarmaBtn }))));\n}\nexports.KarmaCounter = KarmaCounter;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/%D0%A1ontrols/KarmaCounter/KarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Сontrols/KarmaCounter/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/Card/Сontrols/KarmaCounter/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/Card/Сontrols/KarmaCounter/KarmaCounter.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/%D0%A1ontrols/KarmaCounter/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Сontrols/KarmaCounter/karmacounter.css":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Сontrols/KarmaCounter/karmacounter.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaCounter\": \"karmacounter__karmaCounter--yKEJe\",\n\t\"karmaValue\": \"karmacounter__karmaValue--21CZB\",\n\t\"down\": \"karmacounter__down--Rf2-M\",\n\t\"up\": \"karmacounter__up--KDIuR\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/%D0%A1ontrols/KarmaCounter/karmacounter.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Сontrols/SaveButton/SaveButton.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/Сontrols/SaveButton/SaveButton.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SaveButton = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar savebutton_css_1 = __importDefault(__webpack_require__(/*! ./savebutton.css */ \"./src/shared/CardsList/Card/Сontrols/SaveButton/savebutton.css\"));\nfunction SaveButton() {\n    return (react_1.default.createElement(\"button\", { className: savebutton_css_1.default.saveButton },\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n            react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))));\n}\nexports.SaveButton = SaveButton;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/%D0%A1ontrols/SaveButton/SaveButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Сontrols/SaveButton/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/Сontrols/SaveButton/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SaveButton */ \"./src/shared/CardsList/Card/Сontrols/SaveButton/SaveButton.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/%D0%A1ontrols/SaveButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Сontrols/SaveButton/savebutton.css":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/Сontrols/SaveButton/savebutton.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"saveButton\": \"savebutton__saveButton--3vEpg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/%D0%A1ontrols/SaveButton/savebutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Сontrols/ShareButton/ShareButton.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Сontrols/ShareButton/ShareButton.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ShareButton = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar sharebutton_css_1 = __importDefault(__webpack_require__(/*! ./sharebutton.css */ \"./src/shared/CardsList/Card/Сontrols/ShareButton/sharebutton.css\"));\nfunction ShareButton() {\n    return (react_1.default.createElement(\"button\", { className: sharebutton_css_1.default.shareButton },\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n            react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))));\n}\nexports.ShareButton = ShareButton;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/%D0%A1ontrols/ShareButton/ShareButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Сontrols/ShareButton/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/Сontrols/ShareButton/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ShareButton */ \"./src/shared/CardsList/Card/Сontrols/ShareButton/ShareButton.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/%D0%A1ontrols/ShareButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Сontrols/ShareButton/sharebutton.css":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Сontrols/ShareButton/sharebutton.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"shareButton\": \"sharebutton__shareButton--2zh_d\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/%D0%A1ontrols/ShareButton/sharebutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Сontrols/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Сontrols/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Сontrols */ \"./src/shared/CardsList/Card/Сontrols/Сontrols.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/%D0%A1ontrols/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Сontrols/Сontrols.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Сontrols/Сontrols.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Сontrols = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar CommentsButton_1 = __webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/Сontrols/CommentsButton/index.ts\");\nvar KarmaCounter_1 = __webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/Card/Сontrols/KarmaCounter/index.ts\");\nvar SaveButton_1 = __webpack_require__(/*! ./SaveButton */ \"./src/shared/CardsList/Card/Сontrols/SaveButton/index.ts\");\nvar ShareButton_1 = __webpack_require__(/*! ./ShareButton */ \"./src/shared/CardsList/Card/Сontrols/ShareButton/index.ts\");\nvar _ontrols_css_1 = __importDefault(__webpack_require__(/*! ./сontrols.css */ \"./src/shared/CardsList/Card/Сontrols/сontrols.css\"));\nfunction Сontrols(_a) {\n    var score = _a.score, comments = _a.comments;\n    return (react_1.default.createElement(\"div\", { className: _ontrols_css_1.default.controls },\n        react_1.default.createElement(KarmaCounter_1.KarmaCounter, { score: score }),\n        react_1.default.createElement(CommentsButton_1.CommentsButton, __assign({}, { comments: comments })),\n        react_1.default.createElement(\"div\", { className: _ontrols_css_1.default.actions },\n            react_1.default.createElement(ShareButton_1.ShareButton, null),\n            react_1.default.createElement(SaveButton_1.SaveButton, null))));\n}\nexports.Сontrols = Сontrols;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/%D0%A1ontrols/%D0%A1ontrols.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Сontrols/сontrols.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Сontrols/сontrols.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"сontrols__controls--2V2sW\",\n\t\"actions\": \"сontrols__actions--wd75S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/%D0%A1ontrols/%D1%81ontrols.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.convertDate = exports.CardsList = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar convertDate_1 = __webpack_require__(/*! ../../utils/convertDate */ \"./src/utils/convertDate.ts\");\nObject.defineProperty(exports, \"convertDate\", { enumerable: true, get: function () { return convertDate_1.convertDate; } });\nvar actions_1 = __webpack_require__(/*! ../../redux/posts/actions */ \"./src/redux/posts/actions.ts\");\nvar actions_2 = __webpack_require__(/*! ../../redux/posts/paginationLimit/actions */ \"./src/redux/posts/paginationLimit/actions.ts\");\nvar REDDIT_URL = \"https://www.reddit.com/\";\nfunction CardsList() {\n    var postData = (0, react_redux_1.useSelector)(function (state) { return state.post; });\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.token; });\n    var _a = (0, react_1.useState)(false), isFinishListing = _a[0], setIsFinishListing = _a[1];\n    var isLoadMore = (0, react_redux_1.useSelector)(function (state) { return state.paginationLimit.isLoadMore; });\n    var finishListingRef = (0, react_1.useRef)(null);\n    var dispath = (0, react_redux_1.useDispatch)();\n    (0, react_1.useEffect)(function () {\n        var observer = new IntersectionObserver(function (e) {\n            setIsFinishListing(e[0].isIntersecting);\n            if (isFinishListing && token && isLoadMore) {\n                dispath((0, actions_1.postAsyncRequst)());\n            }\n        }, {\n            rootMargin: \"50px\",\n        });\n        if (finishListingRef.current) {\n            observer.observe(finishListingRef.current);\n        }\n        return function () {\n            if (finishListingRef.current) {\n                observer.unobserve(finishListingRef.current);\n            }\n        };\n    }, [isFinishListing, isLoadMore]);\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\n        postData.data.map(function (_a) {\n            var data = _a.data;\n            return (react_1.default.createElement(Card_1.Card, __assign({ key: data.id }, {\n                thumbnail: data.thumbnail,\n                title: data.title,\n                createdAt: (0, convertDate_1.convertDate)(new Date(data.created_utc * 1000)),\n                username: data.subreddit_name_prefixed,\n                icon_img: data.sr_detail.icon_img,\n                score: data.score,\n                comments: data.num_comments,\n                postURL: \"\".concat(REDDIT_URL).concat(data.permalink),\n                userURL: \"\".concat(REDDIT_URL).concat(data.url),\n                upvote_ratio: data.upvote_ratio,\n                postID: data.id,\n            })));\n        }),\n        postData.loading && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")),\n        !postData.loading && postData.error !== '' && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, postData.error)),\n        react_1.default.createElement(\"div\", { ref: finishListingRef }),\n        !isLoadMore && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } },\n            react_1.default.createElement(\"button\", { onClick: function () { dispath((0, actions_2.isLoadMoreAction)(true)); } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0435...\")))));\n}\nexports.CardsList = CardsList;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--1DoiZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\nfunction Content(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children));\n}\nexports.Content = Content;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Dropdown = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\nvar List_1 = __webpack_require__(/*! ./List */ \"./src/shared/Dropdown/List/index.ts\");\nvar react_dom_1 = __webpack_require__(/*! react-dom */ \"react-dom\");\nfunction Dropdown(_a) {\n    var onClick = _a.onClick, arrayLiItem = _a.arrayLiItem, btnRect = _a.btnRect;\n    var node = document.getElementById(\"dropdown-modal\");\n    if (!node)\n        return null;\n    return (0, react_dom_1.createPortal)(react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container, style: { left: btnRect[0], top: btnRect[1] + btnRect[2] } },\n        react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer, onClick: function () { return onClick(); } },\n            react_1.default.createElement(List_1.List, __assign({}, { arrayLiItem: arrayLiItem, isDropdown: true })))), node);\n}\nexports.Dropdown = Dropdown;\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/List/List.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Dropdown/List/List.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.List = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar list_css_1 = __importDefault(__webpack_require__(/*! ./list.css */ \"./src/shared/Dropdown/List/list.css\"));\nfunction List(_a) {\n    var arrayLiItem = _a.arrayLiItem, isDropdown = _a.isDropdown, comments = _a.comments;\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"ul\", { className: isDropdown ? list_css_1.default.listDropdown : list_css_1.default.listPost }, arrayLiItem.map(function (_a) {\n            var value = _a.value, As = _a.As, AsClassName = _a.AsClassName, className = _a.className;\n            if ((window.innerWidth <= 1020) &&\n                (As === 'span' && AsClassName === 'dropdownPost_comment' ||\n                    As === 'span' && AsClassName === 'dropdownPost_share' ||\n                    As === 'span' && AsClassName === 'dropdownPost_save')) {\n                return;\n            }\n            else {\n                return (react_1.default.createElement(\"li\", { key: AsClassName, className: list_css_1.default[className] },\n                    react_1.default.createElement(As, { className: list_css_1.default[AsClassName], onClick: function () { return AsClassName === 'dropdownPost_hide' ? console.log(\"object\") : false; } },\n                        (!isDropdown && AsClassName === 'dropdownPost_comment')\n                            && react_1.default.createElement(react_1.default.Fragment, null,\n                                comments,\n                                \" \"),\n                        value)));\n            }\n        })),\n        isDropdown && react_1.default.createElement(\"button\", { className: list_css_1.default.closeBtn }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")));\n}\nexports.List = List;\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/List/List.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/List/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/Dropdown/List/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./List */ \"./src/shared/Dropdown/List/List.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/List/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/List/list.css":
/*!*******************************************!*\
  !*** ./src/shared/Dropdown/List/list.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"listDropdown\": \"list__listDropdown--x-ZG1\",\n\t\"listPost\": \"list__listPost--3q7dc\",\n\t\"closeBtn\": \"list__closeBtn--2wzui\",\n\t\"menuItem\": \"list__menuItem--CjKz0\",\n\t\"dropdownPost_comment\": \"list__dropdownPost_comment--nHSwg\",\n\t\"dropdownPost_share\": \"list__dropdownPost_share--2lLYJ\",\n\t\"dropdownPost_hide\": \"list__dropdownPost_hide--3s9m-\",\n\t\"dropdownPost_save\": \"list__dropdownPost_save--72AEE\",\n\t\"dropdownPost_report\": \"list__dropdownPost_report--1Qi0j\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/List/list.css?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--a5Jzh\",\n\t\"listContainer\": \"dropdown__listContainer--YYYB3\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/exemples/menuDropdownList.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Dropdown/exemples/menuDropdownList.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.arrayLiItem = void 0;\nexports.arrayLiItem = [\n    {\n        value: 'Комментарии',\n        className: 'menuItem',\n        As: 'span',\n        AsClassName: 'dropdownPost_comment',\n    },\n    {\n        value: 'Поделиться',\n        className: 'menuItem',\n        As: 'span',\n        AsClassName: 'dropdownPost_share',\n    },\n    {\n        value: 'Скрыть',\n        className: 'menuItem',\n        As: 'span',\n        AsClassName: 'dropdownPost_hide',\n    },\n    {\n        value: 'Сохранить',\n        className: 'menuItem',\n        As: 'span',\n        AsClassName: 'dropdownPost_save',\n    },\n    {\n        value: 'Пожаловаться',\n        AsClassName: 'dropdownPost_report',\n        As: 'span',\n        className: 'menuItem',\n    },\n];\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/exemples/menuDropdownList.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/exemples/postControlsList.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Dropdown/exemples/postControlsList.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.postControlsList = void 0;\nexports.postControlsList = [\n    {\n        value: 'Комментарии',\n        className: 'menuItem',\n        As: 'button',\n        AsClassName: 'dropdownPost_comment',\n    },\n    {\n        value: 'Поделиться',\n        className: 'menuItem',\n        As: 'button',\n        AsClassName: 'dropdownPost_share',\n    },\n    {\n        value: 'Скрыть',\n        className: 'menuItem',\n        As: 'button',\n        AsClassName: 'dropdownPost_hide',\n    },\n    {\n        value: 'Сохранить',\n        className: 'menuItem',\n        As: 'button',\n        AsClassName: 'dropdownPost_save',\n    },\n    {\n        value: 'Пожаловаться',\n        AsClassName: 'dropdownPost_report',\n        As: 'button',\n        className: 'menuItem',\n    },\n];\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/exemples/postControlsList.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/EmptyResponse/EmptyResponse.tsx":
/*!****************************************************!*\
  !*** ./src/shared/EmptyResponse/EmptyResponse.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.EmptyResponse = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar emptyresponse_css_1 = __importDefault(__webpack_require__(/*! ./emptyresponse.css */ \"./src/shared/EmptyResponse/emptyresponse.css\"));\nfunction EmptyResponse(_a) {\n    var _b = _a.text, text = _b === void 0 ? 'Хмм... здесь пока пусто' : _b;\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"p\", { className: emptyresponse_css_1.default.emptyEmoji },\n            react_1.default.createElement(\"svg\", { width: \"40\", height: \"40\", viewBox: \"0 0 40 40\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\", xmlnsXlink: \"http://www.w3.org/1999/xlink\" },\n                react_1.default.createElement(\"rect\", { width: \"40\", height: \"40\", fill: \"url(#pattern0)\" }),\n                react_1.default.createElement(\"defs\", null,\n                    react_1.default.createElement(\"pattern\", { id: \"pattern0\", patternContentUnits: \"objectBoundingBox\", width: \"1\", height: \"1\" },\n                        react_1.default.createElement(\"use\", { xlinkHref: \"#image0_16_2280\", transform: \"scale(0.00833333)\" })),\n                    react_1.default.createElement(\"image\", { id: \"image0_16_2280\", width: \"120\", height: \"120\", xlinkHref: \"data:image/png;base64,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\" })))),\n        react_1.default.createElement(\"p\", { className: emptyresponse_css_1.default.emptyText }, text)));\n}\nexports.EmptyResponse = EmptyResponse;\n\n\n//# sourceURL=webpack:///./src/shared/EmptyResponse/EmptyResponse.tsx?");

/***/ }),

/***/ "./src/shared/EmptyResponse/emptyresponse.css":
/*!****************************************************!*\
  !*** ./src/shared/EmptyResponse/emptyresponse.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"emptyText\": \"emptyresponse__emptyText--8HtNh\",\n\t\"emptyEmoji\": \"emptyresponse__emptyEmoji--KApQA\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/EmptyResponse/emptyresponse.css?");

/***/ }),

/***/ "./src/shared/EmptyResponse/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/EmptyResponse/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./EmptyResponse */ \"./src/shared/EmptyResponse/EmptyResponse.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/EmptyResponse/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\nfunction Header() {\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SearchBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\nvar serchblock_css_1 = __importDefault(__webpack_require__(/*! ./serchblock.css */ \"./src/shared/Header/SearchBlock/serchblock.css\"));\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\nfunction SearchBlock() {\n    var _a = (0, useUserData_1.useUserData)(), data = _a.data, loading = _a.loading;\n    return (react_1.default.createElement(\"div\", { className: serchblock_css_1.default.searchBlock },\n        \"searchBlock\",\n        react_1.default.createElement(UserBlock_1.UserBlock, { username: data.name, avatarSrc: data.iconImg, loading: loading })));\n}\nexports.SearchBlock = SearchBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Icon_1 = __webpack_require__(/*! ../../../icon/Icon */ \"./src/shared/icon/Icon.tsx\");\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\nfunction UserBlock(_a) {\n    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;\n    return (react_1.default.createElement(\"a\", { className: userblock_css_1.default.userBox, href: 'https://www.reddit.com/api/v1/authorize?client_id=I6-sQrx07sk-asemopk70A&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity' },\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, className: userblock_css_1.default.avatarImage })\n            : react_1.default.createElement(Icon_1.Icon, { width: '50', height: '50', iconName: Icon_1.EIcon.Anon })),\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username },\n            react_1.default.createElement(\"span\", null, loading ? (\"Загрузка...\") : (username || \"Аноним\")))));\n}\nexports.UserBlock = UserBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--24rEF\",\n\t\"avatarBox\": \"userblock__avatarBox--2OTfi\",\n\t\"avatarImage\": \"userblock__avatarImage--2ryXC\",\n\t\"username\": \"userblock__username--3bLc0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/serchblock.css":
/*!******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/serchblock.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"serchblock__searchBlock--y9sza\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/serchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SortBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\nfunction SortBlock() {\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"sorting dropdown\"));\n}\nexports.SortBlock = SortBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--141aZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ThreadTitle = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\nfunction ThreadTitle() {\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Title\"));\n}\nexports.ThreadTitle = ThreadTitle;\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--oxugx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\nfunction Layout(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\n}\nexports.Layout = Layout;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/PageNotFound/PageNotFound.tsx":
/*!**************************************************!*\
  !*** ./src/shared/PageNotFound/PageNotFound.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PageNotFound = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar EmptyResponse_1 = __webpack_require__(/*! ../EmptyResponse */ \"./src/shared/EmptyResponse/index.ts\");\nfunction PageNotFound() {\n    return (react_1.default.createElement(EmptyResponse_1.EmptyResponse, { text: '404... \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430. \\u041C\\u043E\\u0436\\u0435\\u0442, \\u0435\\u0451 \\u043F\\u043E\\u0445\\u0438\\u0442\\u0438\\u043B\\u0438 \\u0438\\u043D\\u043E\\u043F\\u043B\\u0430\\u043D\\u0435\\u0442\\u043D\\u044B\\u0435 \\u0438\\u043D\\u0434\\u0443\\u0441\\u044B?' }));\n}\nexports.PageNotFound = PageNotFound;\n\n\n//# sourceURL=webpack:///./src/shared/PageNotFound/PageNotFound.tsx?");

/***/ }),

/***/ "./src/shared/PageNotFound/index.ts":
/*!******************************************!*\
  !*** ./src/shared/PageNotFound/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./PageNotFound */ \"./src/shared/PageNotFound/PageNotFound.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/PageNotFound/index.ts?");

/***/ }),

/***/ "./src/shared/icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Icon = exports.EIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar anonIcon_1 = __webpack_require__(/*! ./anonIcon */ \"./src/shared/icon/anonIcon.tsx\");\nvar blockIcon_1 = __webpack_require__(/*! ./blockIcon */ \"./src/shared/icon/blockIcon.tsx\");\nvar cameraVoi_eIcon_1 = __webpack_require__(/*! ./cameraVoiсeIcon */ \"./src/shared/icon/cameraVoiсeIcon.tsx\");\nvar commentIcon_1 = __webpack_require__(/*! ./commentIcon */ \"./src/shared/icon/commentIcon.tsx\");\nvar contactIcon_1 = __webpack_require__(/*! ./contactIcon */ \"./src/shared/icon/contactIcon.tsx\");\nvar discussIcon_1 = __webpack_require__(/*! ./discussIcon */ \"./src/shared/icon/discussIcon.tsx\");\nvar documentIcon_1 = __webpack_require__(/*! ./documentIcon */ \"./src/shared/icon/documentIcon.tsx\");\nvar downloadIcon_1 = __webpack_require__(/*! ./downloadIcon */ \"./src/shared/icon/downloadIcon.tsx\");\nvar editIcon_1 = __webpack_require__(/*! ./editIcon */ \"./src/shared/icon/editIcon.tsx\");\nvar fragmentCodeIcon_1 = __webpack_require__(/*! ./fragmentCodeIcon */ \"./src/shared/icon/fragmentCodeIcon.tsx\");\nvar imageIcon_1 = __webpack_require__(/*! ./imageIcon */ \"./src/shared/icon/imageIcon.tsx\");\nvar karmaBtnIcon_1 = __webpack_require__(/*! ./karmaBtnIcon */ \"./src/shared/icon/karmaBtnIcon.tsx\");\nvar linkIcon_1 = __webpack_require__(/*! ./linkIcon */ \"./src/shared/icon/linkIcon.tsx\");\nvar menuIcon_1 = __webpack_require__(/*! ./menuIcon */ \"./src/shared/icon/menuIcon.tsx\");\nvar pdfDocumentIcon_1 = __webpack_require__(/*! ./pdfDocumentIcon */ \"./src/shared/icon/pdfDocumentIcon.tsx\");\nvar reportIcon_1 = __webpack_require__(/*! ./reportIcon */ \"./src/shared/icon/reportIcon.tsx\");\nvar saveIcon_1 = __webpack_require__(/*! ./saveIcon */ \"./src/shared/icon/saveIcon.tsx\");\nvar shareIcon_1 = __webpack_require__(/*! ./shareIcon */ \"./src/shared/icon/shareIcon.tsx\");\nvar transliteIcon_1 = __webpack_require__(/*! ./transliteIcon */ \"./src/shared/icon/transliteIcon.tsx\");\nvar updateIcon_1 = __webpack_require__(/*! ./updateIcon */ \"./src/shared/icon/updateIcon.tsx\");\nvar EIcon;\n(function (EIcon) {\n    EIcon[EIcon[\"Block\"] = 0] = \"Block\";\n    EIcon[EIcon[\"Comment\"] = 1] = \"Comment\";\n    EIcon[EIcon[\"Menu\"] = 2] = \"Menu\";\n    EIcon[EIcon[\"Report\"] = 3] = \"Report\";\n    EIcon[EIcon[\"Save\"] = 4] = \"Save\";\n    EIcon[EIcon[\"Share\"] = 5] = \"Share\";\n    EIcon[EIcon[\"Anon\"] = 6] = \"Anon\";\n    EIcon[EIcon[\"KarmaBtn\"] = 7] = \"KarmaBtn\";\n    EIcon[EIcon[\"FragmentCode\"] = 8] = \"FragmentCode\";\n    EIcon[EIcon[\"Image\"] = 9] = \"Image\";\n    EIcon[EIcon[\"Document\"] = 10] = \"Document\";\n    EIcon[EIcon[\"Download\"] = 11] = \"Download\";\n    EIcon[EIcon[\"Contact\"] = 12] = \"Contact\";\n    EIcon[EIcon[\"Update\"] = 13] = \"Update\";\n    EIcon[EIcon[\"Link\"] = 14] = \"Link\";\n    EIcon[EIcon[\"\\u0421ameraVoi\\u0441e\"] = 15] = \"\\u0421ameraVoi\\u0441e\";\n    EIcon[EIcon[\"Discuss\"] = 16] = \"Discuss\";\n    EIcon[EIcon[\"Edit\"] = 17] = \"Edit\";\n    EIcon[EIcon[\"Translite\"] = 18] = \"Translite\";\n    EIcon[EIcon[\"PDFDocument\"] = 19] = \"PDFDocument\";\n})(EIcon = exports.EIcon || (exports.EIcon = {}));\nfunction Icon(_a) {\n    var width = _a.width, height = _a.height, iconName = _a.iconName;\n    return (react_1.default.createElement(\"svg\", { width: \"\".concat(width), height: \"\".concat(height), viewBox: \"0 0 \".concat(width, \" \").concat(height), fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        iconName === 0 && react_1.default.createElement(blockIcon_1.BlockIcon, null),\n        iconName === 1 && react_1.default.createElement(commentIcon_1.CommentIcon, null),\n        iconName === 2 && react_1.default.createElement(menuIcon_1.MenuIcon, null),\n        iconName === 3 && react_1.default.createElement(reportIcon_1.ReportIcon, null),\n        iconName === 4 && react_1.default.createElement(saveIcon_1.SaveIcon, null),\n        iconName === 5 && react_1.default.createElement(shareIcon_1.ShareIcon, null),\n        iconName === 6 && react_1.default.createElement(anonIcon_1.AnonIcon, null),\n        iconName === 7 && react_1.default.createElement(karmaBtnIcon_1.KarmaBtnIcon, null),\n        iconName === 8 && react_1.default.createElement(fragmentCodeIcon_1.FragmentCodeIcon, null),\n        iconName === 9 && react_1.default.createElement(imageIcon_1.ImageIcon, null),\n        iconName === 10 && react_1.default.createElement(documentIcon_1.DocumentIcon, null),\n        iconName === 11 && react_1.default.createElement(downloadIcon_1.DownloadIcon, null),\n        iconName === 12 && react_1.default.createElement(contactIcon_1.ContactIcon, null),\n        iconName === 13 && react_1.default.createElement(updateIcon_1.UpdateIcon, null),\n        iconName === 14 && react_1.default.createElement(linkIcon_1.LinkIcon, null),\n        iconName === 15 && react_1.default.createElement(cameraVoi_eIcon_1.СameraVoiсeIcon, null),\n        iconName === 16 && react_1.default.createElement(discussIcon_1.DiscussIcon, null),\n        iconName === 17 && react_1.default.createElement(editIcon_1.EditIcon, null),\n        iconName === 18 && react_1.default.createElement(transliteIcon_1.TransliteIcon, null),\n        iconName === 19 && react_1.default.createElement(pdfDocumentIcon_1.PdfDocumentIcon, null)));\n}\nexports.Icon = Icon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/icon/anonIcon.tsx":
/*!**************************************!*\
  !*** ./src/shared/icon/anonIcon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AnonIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction AnonIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\n}\nexports.AnonIcon = AnonIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/anonIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/blockIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icon/blockIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BlockIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction BlockIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z\", fill: \"#999999\" })));\n}\nexports.BlockIcon = BlockIcon;\n;\n\n\n//# sourceURL=webpack:///./src/shared/icon/blockIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/cameraVoiсeIcon.tsx":
/*!*********************************************!*\
  !*** ./src/shared/icon/cameraVoiсeIcon.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.СameraVoiсeIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction СameraVoiсeIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H9V15.91C6.17 15.43 4 12.97 4 10H6C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10H16C16 12.97 13.83 15.43 11 15.91V18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V10Z\", fill: \"#999999\" })));\n}\nexports.СameraVoiсeIcon = СameraVoiсeIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/cameraVoi%D1%81eIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/commentIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/icon/commentIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction CommentIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\n}\nexports.CommentIcon = CommentIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/commentIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/contactIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/icon/contactIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ContactIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction ContactIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2ZM12 6C12 7.66 10.66 9 9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6ZM3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14Z\", fill: \"#999999\" })));\n}\nexports.ContactIcon = ContactIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/contactIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/discussIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/icon/discussIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DiscussIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction DiscussIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z\", fill: \"#999999\" })));\n}\nexports.DiscussIcon = DiscussIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/discussIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/documentIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/icon/documentIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DocumentIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction DocumentIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 16H4V14H12V16ZM12 12H4V10H12V12ZM9 7V1.5L14.5 7H9Z\", fill: \"#999999\" })));\n}\nexports.DocumentIcon = DocumentIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/documentIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/downloadIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/icon/downloadIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DownloadIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction DownloadIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z\", fill: \"#999999\" })));\n}\nexports.DownloadIcon = DownloadIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/downloadIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/editIcon.tsx":
/*!**************************************!*\
  !*** ./src/shared/icon/editIcon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.EditIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction EditIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M0 15.2501V19.0001H3.75L14.81 7.94006L11.06 4.19006L0 15.2501ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006Z\", fill: \"#999999\" })));\n}\nexports.EditIcon = EditIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/editIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/fragmentCodeIcon.tsx":
/*!**********************************************!*\
  !*** ./src/shared/icon/fragmentCodeIcon.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.FragmentCodeIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction FragmentCodeIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z\", fill: \"#999999\" })));\n}\nexports.FragmentCodeIcon = FragmentCodeIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/fragmentCodeIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/imageIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icon/imageIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ImageIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction ImageIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z\", fill: \"#999999\" })));\n}\nexports.ImageIcon = ImageIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/imageIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/karmaBtnIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/icon/karmaBtnIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.KarmaBtnIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction KarmaBtnIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" })));\n}\nexports.KarmaBtnIcon = KarmaBtnIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/karmaBtnIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/linkIcon.tsx":
/*!**************************************!*\
  !*** ./src/shared/icon/linkIcon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.LinkIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction LinkIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z\", fill: \"#999999\" })));\n}\nexports.LinkIcon = LinkIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/linkIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/loader.tsx":
/*!************************************!*\
  !*** ./src/shared/icon/loader.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Loader = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction Loader() {\n    return (react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", style: { margin: \"auto\", background: \"rgb(241, 242, 243)\", display: \"block\" }, width: \"200px\", height: \"200px\", viewBox: \"0 0 100 100\", preserveAspectRatio: \"xMidYMid\" },\n        react_1.default.createElement(\"g\", { transform: \"rotate(0 50 50)\" },\n            react_1.default.createElement(\"rect\", { x: \"47\", y: \"24\", rx: \"3\", ry: \"6\", width: \"6\", height: \"12\", fill: \"#d75838\" },\n                react_1.default.createElement(\"animate\", { attributeName: \"opacity\", values: \"1;0\", keyTimes: \"0;1\", dur: \"1s\", begin: \"-0.9166666666666666s\", repeatCount: \"indefinite\" }))),\n        react_1.default.createElement(\"g\", { transform: \"rotate(30 50 50)\" },\n            react_1.default.createElement(\"rect\", { x: \"47\", y: \"24\", rx: \"3\", ry: \"6\", width: \"6\", height: \"12\", fill: \"#d75838\" },\n                react_1.default.createElement(\"animate\", { attributeName: \"opacity\", values: \"1;0\", keyTimes: \"0;1\", dur: \"1s\", begin: \"-0.8333333333333334s\", repeatCount: \"indefinite\" }))),\n        react_1.default.createElement(\"g\", { transform: \"rotate(60 50 50)\" },\n            react_1.default.createElement(\"rect\", { x: \"47\", y: \"24\", rx: \"3\", ry: \"6\", width: \"6\", height: \"12\", fill: \"#d75838\" },\n                react_1.default.createElement(\"animate\", { attributeName: \"opacity\", values: \"1;0\", keyTimes: \"0;1\", dur: \"1s\", begin: \"-0.75s\", repeatCount: \"indefinite\" }))),\n        react_1.default.createElement(\"g\", { transform: \"rotate(90 50 50)\" },\n            react_1.default.createElement(\"rect\", { x: \"47\", y: \"24\", rx: \"3\", ry: \"6\", width: \"6\", height: \"12\", fill: \"#d75838\" },\n                react_1.default.createElement(\"animate\", { attributeName: \"opacity\", values: \"1;0\", keyTimes: \"0;1\", dur: \"1s\", begin: \"-0.6666666666666666s\", repeatCount: \"indefinite\" }))),\n        react_1.default.createElement(\"g\", { transform: \"rotate(120 50 50)\" },\n            react_1.default.createElement(\"rect\", { x: \"47\", y: \"24\", rx: \"3\", ry: \"6\", width: \"6\", height: \"12\", fill: \"#d75838\" },\n                react_1.default.createElement(\"animate\", { attributeName: \"opacity\", values: \"1;0\", keyTimes: \"0;1\", dur: \"1s\", begin: \"-0.5833333333333334s\", repeatCount: \"indefinite\" }))),\n        react_1.default.createElement(\"g\", { transform: \"rotate(150 50 50)\" },\n            react_1.default.createElement(\"rect\", { x: \"47\", y: \"24\", rx: \"3\", ry: \"6\", width: \"6\", height: \"12\", fill: \"#d75838\" },\n                react_1.default.createElement(\"animate\", { attributeName: \"opacity\", values: \"1;0\", keyTimes: \"0;1\", dur: \"1s\", begin: \"-0.5s\", repeatCount: \"indefinite\" }))),\n        react_1.default.createElement(\"g\", { transform: \"rotate(180 50 50)\" },\n            react_1.default.createElement(\"rect\", { x: \"47\", y: \"24\", rx: \"3\", ry: \"6\", width: \"6\", height: \"12\", fill: \"#d75838\" },\n                react_1.default.createElement(\"animate\", { attributeName: \"opacity\", values: \"1;0\", keyTimes: \"0;1\", dur: \"1s\", begin: \"-0.4166666666666667s\", repeatCount: \"indefinite\" }))),\n        react_1.default.createElement(\"g\", { transform: \"rotate(210 50 50)\" },\n            react_1.default.createElement(\"rect\", { x: \"47\", y: \"24\", rx: \"3\", ry: \"6\", width: \"6\", height: \"12\", fill: \"#d75838\" },\n                react_1.default.createElement(\"animate\", { attributeName: \"opacity\", values: \"1;0\", keyTimes: \"0;1\", dur: \"1s\", begin: \"-0.3333333333333333s\", repeatCount: \"indefinite\" }))),\n        react_1.default.createElement(\"g\", { transform: \"rotate(240 50 50)\" },\n            react_1.default.createElement(\"rect\", { x: \"47\", y: \"24\", rx: \"3\", ry: \"6\", width: \"6\", height: \"12\", fill: \"#d75838\" },\n                react_1.default.createElement(\"animate\", { attributeName: \"opacity\", values: \"1;0\", keyTimes: \"0;1\", dur: \"1s\", begin: \"-0.25s\", repeatCount: \"indefinite\" }))),\n        react_1.default.createElement(\"g\", { transform: \"rotate(270 50 50)\" },\n            react_1.default.createElement(\"rect\", { x: \"47\", y: \"24\", rx: \"3\", ry: \"6\", width: \"6\", height: \"12\", fill: \"#d75838\" },\n                react_1.default.createElement(\"animate\", { attributeName: \"opacity\", values: \"1;0\", keyTimes: \"0;1\", dur: \"1s\", begin: \"-0.16666666666666666s\", repeatCount: \"indefinite\" }))),\n        react_1.default.createElement(\"g\", { transform: \"rotate(300 50 50)\" },\n            react_1.default.createElement(\"rect\", { x: \"47\", y: \"24\", rx: \"3\", ry: \"6\", width: \"6\", height: \"12\", fill: \"#d75838\" },\n                react_1.default.createElement(\"animate\", { attributeName: \"opacity\", values: \"1;0\", keyTimes: \"0;1\", dur: \"1s\", begin: \"-0.08333333333333333s\", repeatCount: \"indefinite\" }))),\n        react_1.default.createElement(\"g\", { transform: \"rotate(330 50 50)\" },\n            react_1.default.createElement(\"rect\", { x: \"47\", y: \"24\", rx: \"3\", ry: \"6\", width: \"6\", height: \"12\", fill: \"#d75838\" },\n                react_1.default.createElement(\"animate\", { attributeName: \"opacity\", values: \"1;0\", keyTimes: \"0;1\", dur: \"1s\", begin: \"0s\", repeatCount: \"indefinite\" })))));\n}\nexports.Loader = Loader;\n\n\n//# sourceURL=webpack:///./src/shared/icon/loader.tsx?");

/***/ }),

/***/ "./src/shared/icon/menuIcon.tsx":
/*!**************************************!*\
  !*** ./src/shared/icon/menuIcon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MenuIcon = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nfunction MenuIcon() {\n    return (React.createElement(React.Fragment, null,\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\n}\nexports.MenuIcon = MenuIcon;\n;\n\n\n//# sourceURL=webpack:///./src/shared/icon/menuIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/pdfDocumentIcon.tsx":
/*!*********************************************!*\
  !*** ./src/shared/icon/pdfDocumentIcon.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PdfDocumentIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction PdfDocumentIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z\", fill: \"#999999\" })));\n}\nexports.PdfDocumentIcon = PdfDocumentIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/pdfDocumentIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/reportIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icon/reportIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ReportIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction ReportIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z\", fill: \"#999999\" })));\n}\nexports.ReportIcon = ReportIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/reportIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/saveIcon.tsx":
/*!**************************************!*\
  !*** ./src/shared/icon/saveIcon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SaveIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction SaveIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\n}\nexports.SaveIcon = SaveIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/saveIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/shareIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icon/shareIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ShareIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction ShareIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\n}\nexports.ShareIcon = ShareIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/shareIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/transliteIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/icon/transliteIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TransliteIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction TransliteIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M7.75 0H6.25L1.5 11H3.6L4.5 8.8H9.5L10.4 11H12.5L7.75 0ZM5.13 7L7 1.98L8.87 7H5.13ZM15.5 15L12.5 12V14H0V16H12.5V18L15.5 15Z\", fill: \"#999999\" })));\n}\nexports.TransliteIcon = TransliteIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/transliteIcon.tsx?");

/***/ }),

/***/ "./src/shared/icon/updateIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icon/updateIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UpdateIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction UpdateIcon() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"path\", { d: \"M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z\", fill: \"#999999\" })));\n}\nexports.UpdateIcon = UpdateIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icon/updateIcon.tsx?");

/***/ }),

/***/ "./src/utils/convertDate.ts":
/*!**********************************!*\
  !*** ./src/utils/convertDate.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.convertDate = void 0;\nfunction convertDate(date) {\n    var currentDate = new Date();\n    var hours = Number(((currentDate.getTime() - date.getTime()) / 3600000).toFixed());\n    if (hours < 25) {\n        switch (hours) {\n            case 0:\n                return \"менее часа назад\";\n            case 1:\n            case 21:\n                return \"\".concat(hours, \" \\u0447\\u0430\\u0441 \\u043D\\u0430\\u0437\\u0430\\u0434\");\n            case 2:\n            case 3:\n            case 4:\n            case 22:\n            case 23:\n            case 24:\n                return \"\".concat(hours, \" \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\");\n            default:\n                return \"\".concat(hours, \" \\u0447\\u0430\\u0441\\u043E\\u0432 \\u043D\\u0430\\u0437\\u0430\\u0434\");\n        }\n    }\n    else {\n        return date.toString().split(' ').splice(0, 5).join(' ');\n    }\n}\nexports.convertDate = convertDate;\n\n\n//# sourceURL=webpack:///./src/utils/convertDate.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hook-form\");\n\n//# sourceURL=webpack:///external_%22react-hook-form%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "zustand":
/*!**************************!*\
  !*** external "zustand" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"zustand\");\n\n//# sourceURL=webpack:///external_%22zustand%22?");

/***/ })

/******/ });