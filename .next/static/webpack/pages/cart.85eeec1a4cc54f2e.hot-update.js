"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./src/pages/cart/index.js":
/*!*********************************!*\
  !*** ./src/pages/cart/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Cart() {\n    _s();\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        cart: []\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function goHome() {\n        router.push(\"/\");\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function loadData() {\n            const res = await fetch(\"/api/cart\");\n            const data = await res.json();\n            setCartItems(data);\n        }\n        loadData();\n    }, []);\n    async function removeFromCart(id) {\n        const res = await fetch(\"/api/cart/\".concat(id), {\n            method: \"DELETE\"\n        });\n        if (res.ok) {\n            setCartItems((prevState)=>({\n                    cart: prevState.cart.filter((item)=>item.id !== id)\n                }));\n            alert(\"Item removed from cart\");\n        } else {\n            throw new Error(\"Failed to remove item from cart\");\n        }\n    }\n    // async function increment(id) {\n    //   //   const res = await fetch(`/api/cart/${id}`, { method: \"POST\" });\n    //   //   if (res.ok) {\n    //   //     setCartItems((prevState) => ({\n    //   //       cart: prevState.cart.filter((item) => item.id !== id.quantity++),\n    //   //     }));\n    //   //     alert(\"Item increased in cart\");\n    //   //   } else {\n    //   //     throw new Error(\"Failed to increase item in cart\");\n    //   //   }\n    //   // }\n    //   try {\n    //     const res = await fetch(\"/api/cart\", {\n    //       method: \"POST\",\n    //       headers: {\n    //         \"Content-Type\": \"application/json\",\n    //       },\n    //       body: JSON.stringify({ action: \"increment\", itemId: id }),\n    //     });\n    //     if (!res.ok) {\n    //       throw new Error(\"Failed to increase item qty in cart\");\n    //     }\n    //     const { cart } = await res.json();\n    //     setCartItems({ cart });\n    //     alert(\"Item quantity increased in cart\");\n    //   } catch (error) {\n    //     console.error(error);\n    //     alert(error.message);\n    //   }\n    // }\n    // async function decrement(id) {\n    //   const res = await fetch(`/api/cart/${id}`, { method: \"POST\" });\n    //   if (res.ok) {\n    //     setCartItems((prevState) => ({\n    //       cart: prevState.cart.filter((item) => item.id !== id.quantity--),\n    //     }));\n    //     alert(\"Item decreased in cart\");\n    //   } else {\n    //     throw new Error(\"Failed to decrease item in cart\");\n    //   }\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Cart\"\n            }, void 0, false, {\n                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/cart/index.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Here is our cart:\"\n            }, void 0, false, {\n                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/cart/index.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: goHome,\n                children: \"Go Home\"\n            }, void 0, false, {\n                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/cart/index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    flexWrap: \"wrap\",\n                    padding: \"10px\"\n                },\n                children: cartItems.cart.map((item, index)=>{\n                    const itemName = item || item.title || \"Unnamed Item\";\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"300px\",\n                            border: \"1px solid black\",\n                            borderRadius: \"10px\",\n                            margin: \"10px\",\n                            padding: \"10px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: [\n                                    item.id,\n                                    \". \",\n                                    item.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/cart/index.js\",\n                                lineNumber: 104,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Quantity - \",\n                                    item.quantity\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/cart/index.js\",\n                                lineNumber: 107,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>removeFromCart(item.id),\n                                children: \"Remove\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/cart/index.js\",\n                                lineNumber: 108,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>increment(item.quantity),\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/cart/index.js\",\n                                lineNumber: 109,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>decrement(item.quantity),\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/cart/index.js\",\n                                lineNumber: 110,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/cart/index.js\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/cart/index.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Cart, \"9Iasd5m4p48cVwCTQZcSIQNOrRI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Cart;\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFOzs7OztnQkFrQmxCOzs7Ozs7OztBQUlSO0dBakh3QmI7O1FBRVBELGtEQUFTQTs7O0tBRkZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jYXJ0L2luZGV4LmpzPzFhNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZSh7IGNhcnQ6IFtdIH0pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBmdW5jdGlvbiBnb0hvbWUoKSB7XG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkRGF0YSgpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9jYXJ0XCIpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBzZXRDYXJ0SXRlbXMoZGF0YSk7XG4gICAgfVxuICAgIGxvYWREYXRhKCk7XG4gIH0sIFtdKTtcblxuICBhc3luYyBmdW5jdGlvbiByZW1vdmVGcm9tQ2FydChpZCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2NhcnQvJHtpZH1gLCB7IG1ldGhvZDogXCJERUxFVEVcIiB9KTtcbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICBzZXRDYXJ0SXRlbXMoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgY2FydDogcHJldlN0YXRlLmNhcnQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpZCksXG4gICAgICB9KSk7XG4gICAgICBhbGVydChcIkl0ZW0gcmVtb3ZlZCBmcm9tIGNhcnRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byByZW1vdmUgaXRlbSBmcm9tIGNhcnRcIik7XG4gICAgfVxuICB9XG5cbiAgLy8gYXN5bmMgZnVuY3Rpb24gaW5jcmVtZW50KGlkKSB7XG4gIC8vICAgLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9jYXJ0LyR7aWR9YCwgeyBtZXRob2Q6IFwiUE9TVFwiIH0pO1xuICAvLyAgIC8vICAgaWYgKHJlcy5vaykge1xuICAvLyAgIC8vICAgICBzZXRDYXJ0SXRlbXMoKHByZXZTdGF0ZSkgPT4gKHtcbiAgLy8gICAvLyAgICAgICBjYXJ0OiBwcmV2U3RhdGUuY2FydC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkLnF1YW50aXR5KyspLFxuICAvLyAgIC8vICAgICB9KSk7XG4gIC8vICAgLy8gICAgIGFsZXJ0KFwiSXRlbSBpbmNyZWFzZWQgaW4gY2FydFwiKTtcbiAgLy8gICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgLy8gICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBpbmNyZWFzZSBpdGVtIGluIGNhcnRcIik7XG4gIC8vICAgLy8gICB9XG4gIC8vICAgLy8gfVxuICAvLyAgIHRyeSB7XG4gIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvY2FydFwiLCB7XG4gIC8vICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gIC8vICAgICAgIGhlYWRlcnM6IHtcbiAgLy8gICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb246IFwiaW5jcmVtZW50XCIsIGl0ZW1JZDogaWQgfSksXG4gIC8vICAgICB9KTtcblxuICAvLyAgICAgaWYgKCFyZXMub2spIHtcbiAgLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGluY3JlYXNlIGl0ZW0gcXR5IGluIGNhcnRcIik7XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIGNvbnN0IHsgY2FydCB9ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgLy8gICAgIHNldENhcnRJdGVtcyh7IGNhcnQgfSk7XG4gIC8vICAgICBhbGVydChcIkl0ZW0gcXVhbnRpdHkgaW5jcmVhc2VkIGluIGNhcnRcIik7XG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAvLyAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gYXN5bmMgZnVuY3Rpb24gZGVjcmVtZW50KGlkKSB7XG4gIC8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvY2FydC8ke2lkfWAsIHsgbWV0aG9kOiBcIlBPU1RcIiB9KTtcbiAgLy8gICBpZiAocmVzLm9rKSB7XG4gIC8vICAgICBzZXRDYXJ0SXRlbXMoKHByZXZTdGF0ZSkgPT4gKHtcbiAgLy8gICAgICAgY2FydDogcHJldlN0YXRlLmNhcnQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpZC5xdWFudGl0eS0tKSxcbiAgLy8gICAgIH0pKTtcbiAgLy8gICAgIGFsZXJ0KFwiSXRlbSBkZWNyZWFzZWQgaW4gY2FydFwiKTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGRlY3JlYXNlIGl0ZW0gaW4gY2FydFwiKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+Q2FydDwvaDE+XG4gICAgICA8aDQ+SGVyZSBpcyBvdXIgY2FydDo8L2g0PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb0hvbWV9PkdvIEhvbWU8L2J1dHRvbj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NhcnRJdGVtcy5jYXJ0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGl0ZW0gfHwgaXRlbS50aXRsZSB8fCBcIlVubmFtZWQgSXRlbVwiO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIzMDBweFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICB7aXRlbS5pZH0uIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxwPlF1YW50aXR5IC0ge2l0ZW0ucXVhbnRpdHl9PC9wPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZyb21DYXJ0KGl0ZW0uaWQpfT5SZW1vdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBpbmNyZW1lbnQoaXRlbS5xdWFudGl0eSl9Pis8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWNyZW1lbnQoaXRlbS5xdWFudGl0eSl9Pi08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJDYXJ0IiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwiY2FydCIsInJvdXRlciIsImdvSG9tZSIsInB1c2giLCJsb2FkRGF0YSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJyZW1vdmVGcm9tQ2FydCIsImlkIiwibWV0aG9kIiwib2siLCJwcmV2U3RhdGUiLCJmaWx0ZXIiLCJpdGVtIiwiYWxlcnQiLCJFcnJvciIsImgxIiwiaDQiLCJidXR0b24iLCJvbkNsaWNrIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXhXcmFwIiwicGFkZGluZyIsIm1hcCIsImluZGV4IiwiaXRlbU5hbWUiLCJ0aXRsZSIsIndpZHRoIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwiaDMiLCJuYW1lIiwicCIsInF1YW50aXR5IiwiaW5jcmVtZW50IiwiZGVjcmVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/cart/index.js\n"));

/***/ })

});