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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/game */ \"./src/game.ts\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.querySelector(\"canvas\");\n    const game = new _src_game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"](canvas);\n    game.startLoop();\n    // setTimeout(() => {\n    //   game.endLoop();\n    // }, 2000);\n});\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./src/apple.ts":
/*!**********************!*\
  !*** ./src/apple.ts ***!
  \**********************/
/*! exports provided: Apple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Apple\", function() { return Apple; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n\nclass Apple {\n    constructor(x, y, canvas) {\n        this.x = x;\n        this.y = y;\n        let canvasWidth = canvas.width;\n        let canvasHeight = canvas.height;\n        this.cellWidth = canvasWidth / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        this.cellHeight = canvasHeight / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        // this.x = 5;\n        // this.y = 9;\n    }\n    draw(ctx) {\n        ctx.fillStyle = 'green';\n        ctx.fillRect(this.x * this.cellWidth + 4, this.y * this.cellHeight + 4, 15, 15);\n    }\n    ;\n    move() {\n        // picks a random place on the board to put apple\n    }\n}\n\n\n//# sourceURL=webpack:///./src/apple.ts?");

/***/ }),

/***/ "./src/board.ts":
/*!**********************!*\
  !*** ./src/board.ts ***!
  \**********************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n\nclass Board {\n    constructor(canvas) {\n        this.canvas = canvas;\n        this.canvasWidth = 0;\n        this.canvasHeight = 0;\n        this.validSpots = [];\n        this.grid = [];\n        this.ctx = canvas.getContext(\"2d\");\n        this.canvasWidth = canvas.width;\n        this.canvasHeight = canvas.height;\n        this.cellWidth = this.canvasWidth / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        this.cellHeight = this.canvasHeight / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        this.createPossibleSpotList();\n    }\n    createPossibleSpotList() {\n        for (let row = 1; row < _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX - 1; row++) {\n            for (let col = 1; col < _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY - 1; col++) {\n                this.validSpots.push(`${col},${row}`);\n            }\n        }\n    }\n    draw() {\n        this.ctx.fillStyle = \"black\";\n        for (let row = 1; row < _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX - 1; row++) {\n            for (let col = 1; col < _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY - 1; col++) {\n                this.ctx.fillRect(row * this.cellWidth, col * this.cellHeight, this.cellWidth - 1, this.cellHeight - 1);\n            }\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/board.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.ts\");\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake */ \"./src/snake.ts\");\n/* harmony import */ var _apple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apple */ \"./src/apple.ts\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n\n\n\n\nclass Game {\n    constructor(canvas) {\n        this.requestedFrameId = -1;\n        this.canvas = canvas;\n        this.ctx = canvas.getContext(\"2d\");\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"](canvas);\n        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_1__[\"Snake\"](canvas);\n        this.apple = new _apple__WEBPACK_IMPORTED_MODULE_2__[\"Apple\"](6, 5, canvas);\n    }\n    loop() {\n        this.requestedFrameId = requestAnimationFrame(() => this.loop());\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.board.draw();\n        if (this.snakeIsEatingApple()) {\n            this.snake.grow();\n            const appleCoord = this.generateAppleCoord();\n            this.apple = new _apple__WEBPACK_IMPORTED_MODULE_2__[\"Apple\"](appleCoord[0], appleCoord[1], this.canvas);\n        }\n        if (this.snakeIsDead()) {\n            this.endLoop();\n        }\n        this.snake.draw();\n        this.snake.update();\n        this.apple.draw(this.ctx);\n    }\n    generateAppleCoord() {\n        const occupiedSet = this.snake.toSpotSet();\n        const openSpots = this.board.validSpots.filter(spot => {\n            return !occupiedSet[spot];\n        });\n        const randomIdx = Math.floor(Math.random() * openSpots.length);\n        const appleX = parseInt(openSpots[randomIdx].split(',')[0]);\n        const appleY = parseInt(openSpots[randomIdx].split(',')[1]);\n        return [appleX, appleY];\n    }\n    snakeIsEatingApple() {\n        return (this.apple.x === this.snake.x &&\n            this.apple.y === this.snake.y);\n    }\n    snakeIsDead() {\n        if (this.snake.x > _settings__WEBPACK_IMPORTED_MODULE_3__[\"board\"].dimX - 2)\n            return true;\n        if (this.snake.y > _settings__WEBPACK_IMPORTED_MODULE_3__[\"board\"].dimY - 2)\n            return true;\n        if (this.snake.x < 1)\n            return true;\n        if (this.snake.y < 1)\n            return true;\n    }\n    startLoop() {\n        this.requestedFrameId = requestAnimationFrame(() => this.loop());\n    }\n    endLoop() {\n        cancelAnimationFrame(this.requestedFrameId);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/*! exports provided: board, snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"board\", function() { return board; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"snake\", function() { return snake; });\nconst board = {\n    dimX: 20,\n    dimY: 20\n};\nconst snake = {\n    growAmount: 1\n};\n\n\n//# sourceURL=webpack:///./src/settings.ts?");

/***/ }),

/***/ "./src/snake.ts":
/*!**********************!*\
  !*** ./src/snake.ts ***!
  \**********************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Snake\", function() { return Snake; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n\nclass Snake {\n    constructor(canvas) {\n        this.canvas = canvas;\n        this.updateFrame = 0;\n        this.canvasWidth = 0;\n        this.canvasHeight = 0;\n        this.snakeBody = [[5, 5], [4, 5], [3, 5], [2, 5]];\n        this.ctx = canvas.getContext(\"2d\");\n        this.canvasWidth = canvas.width;\n        this.canvasHeight = canvas.height;\n        this.cellWidth = this.canvasWidth / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        this.cellHeight = this.canvasHeight / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        this.x = this.snakeBody[0][0];\n        this.y = this.snakeBody[0][1];\n        this.tail = this.snakeBody[this.snakeBody.length - 1];\n        this.direction = [1, 0];\n        this.changeDirection = this.changeDirection.bind(this);\n        this.update = this.update.bind(this);\n        document.addEventListener(\"keydown\", this.changeDirection);\n    }\n    draw() {\n        this.ctx.fillStyle = 'red';\n        for (let i = 1; i < this.snakeBody.length; i++) {\n            let node = this.snakeBody[i];\n            this.ctx.fillRect(node[0] * this.cellWidth + 4, node[1] * this.cellHeight + 4, 15, 15);\n        }\n        this.ctx.fillStyle = 'purple';\n        this.ctx.fillRect(this.x * this.cellWidth + 4, this.y * this.cellHeight + 4, 15, 15);\n    }\n    toSpotSet() {\n        const set = {};\n        this.snakeBody.forEach(node => {\n            set[`${node[0]},${node[1]}`] = true;\n        });\n        return set;\n    }\n    updateSnakeBody(head, tail) {\n        this.tail = tail;\n        this.snakeBody.unshift(head);\n        this.snakeBody.pop();\n    }\n    grow() {\n        const growAmount = _settings__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].growAmount;\n        for (let i = 0; i < growAmount; i++) {\n            this.snakeBody.push(this.tail);\n        }\n    }\n    changeDirection(e) {\n        const LEFT_KEY = 37;\n        const RIGHT_KEY = 39;\n        const UP_KEY = 38;\n        const DOWN_KEY = 40;\n        const keyPressed = e.keyCode;\n        // finds bug when pressing up and right super quickly the snake will go in \n        // the opposite direction unwanted behavior\n        if (keyPressed === LEFT_KEY && this.direction[0] !== 1) {\n            this.direction = [-1, 0];\n        }\n        if (keyPressed === UP_KEY && this.direction[1] !== 1) {\n            this.direction = [0, -1];\n        }\n        if (keyPressed === RIGHT_KEY && this.direction[0] !== -1) {\n            this.direction = [1, 0];\n        }\n        if (keyPressed === DOWN_KEY && this.direction[1] !== -1) {\n            this.direction = [0, 1];\n        }\n    }\n    update() {\n        this.updateFrame++;\n        if (this.updateFrame % 10 === 0) {\n            this.x += this.direction[0];\n            this.y += this.direction[1];\n            if (this.x > _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX - 1)\n                this.x = 0;\n            if (this.y > _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY - 1)\n                this.y = 0;\n            if (this.x < 0)\n                this.x = _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n            if (this.y < 0)\n                this.y = _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY;\n            this.updateSnakeBody([this.x, this.y], this.snakeBody[this.snakeBody.length - 1]);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/snake.ts?");

/***/ })

/******/ });