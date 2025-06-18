(function(root, factory) {
    if ('object' == typeof exports && 'object' == typeof module) module.exports = factory();
    else if ('function' == typeof define && define.amd) define([], factory);
    else if ('object' == typeof exports) exports["Foo"] = factory();
    else root["Foo"] = factory();
})(globalThis, ()=>(()=>{
        "use strict";
        var __webpack_require__ = {};
        (()=>{
            __webpack_require__.d = (exports1, definition)=>{
                for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
                    enumerable: true,
                    get: definition[key]
                });
            };
        })();
        (()=>{
            __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
        })();
        (()=>{
            __webpack_require__.r = (exports1)=>{
                if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
                    value: 'Module'
                });
                Object.defineProperty(exports1, '__esModule', {
                    value: true
                });
            };
        })();
        var __webpack_exports__ = {};
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: ()=>Foo
        });
        class Foo {
            hello() {
                return 'hello';
            }
        }
        return __webpack_exports__;
    })());
