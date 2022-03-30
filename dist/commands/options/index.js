"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 通过交互方式收集参数
 */
var inquirer_1 = __importDefault(require("inquirer"));
var process_1 = require("../../helper/process");
var prompt = inquirer_1.default.prompt;
function getFolderName() {
    return __awaiter(this, void 0, void 0, function () {
        var folderName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompt({
                        type: "input",
                        name: "folderName",
                        message: "Input your new folder name:",
                    })];
                case 1:
                    folderName = (_a.sent()).folderName;
                    return [2 /*return*/, folderName];
            }
        });
    });
}
function getEntryName() {
    return __awaiter(this, void 0, void 0, function () {
        var entryName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompt({
                        type: "input",
                        name: "entryName",
                        message: "Input your entry relative path: \n Default: [Current work dir:".concat(process.cwd(), "]"),
                    })];
                case 1:
                    entryName = (_a.sent()).entryName;
                    return [2 /*return*/, entryName];
            }
        });
    });
}
function getFileNames() {
    return __awaiter(this, void 0, void 0, function () {
        var fileNames;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompt({
                        type: "input",
                        name: "fileNames",
                        message: "Input your file names: (Like: index.less,index.tsx)",
                    })];
                case 1:
                    fileNames = (_a.sent()).fileNames;
                    return [2 /*return*/, fileNames];
            }
        });
    });
}
function optionsCommand(config) {
    return __awaiter(this, void 0, void 0, function () {
        var entry, files, name, entryName, _a, folderName, _b, fileNames, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    entry = config.entry, files = config.files, name = config.name;
                    _a = entry;
                    if (_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, getEntryName()];
                case 1:
                    _a = (_d.sent());
                    _d.label = 2;
                case 2:
                    entryName = _a || process.cwd();
                    _b = name;
                    if (_b) return [3 /*break*/, 4];
                    return [4 /*yield*/, getFolderName()];
                case 3:
                    _b = (_d.sent());
                    _d.label = 4;
                case 4:
                    folderName = _b;
                    if (!folderName) {
                        (0, process_1.handleErrorWithExitProcess)("Invalid folder name!");
                    }
                    _c = files;
                    if (_c) return [3 /*break*/, 6];
                    return [4 /*yield*/, getFileNames()];
                case 5:
                    _c = (_d.sent());
                    _d.label = 6;
                case 6:
                    fileNames = _c || "";
                    return [2 /*return*/, { name: folderName, entry: entryName, files: fileNames }];
            }
        });
    });
}
exports.default = optionsCommand;
