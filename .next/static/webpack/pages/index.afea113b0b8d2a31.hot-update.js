"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/cart.js":
/*!***************************!*\
  !*** ./src/pages/cart.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n// THIS IS THE CART PAGE TO BE ACCESSED WHEN URL IS /CARTS\n// import { db } from \"@/server/db\";\n// export default function handler(req, res) {\n//   if (req.method === \"GET\") {\n//     const cartItems = db.cart.get();\n//     res.status(200).json({ menu: cartItems });\n//   } else if (req.method === \"POST\") {\n//     const { id, quantity } = req.body;\n//     db.cart.add({ id, quantity });\n//     res.status(200).json({ message: \"Item added to cart\" });\n//   } else {\n//     res.status(404).json({ message: \"We only support GET requests\" });\n//   }\n// }\n\nvar _s = $RefreshSig$();\n\n\nfunction Cart() {\n    _s();\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function goHome() {\n        router.push(\"/\");\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/cart\").then((response)=>response.json()).then((data)=>setCartItems(data.cart));\n    }, []);\n    const addToCart = async (id, quantity)=>{\n        const response = await fetch(\"/api/cart\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                id,\n                quantity\n            })\n        });\n        const data = await response.json();\n        alert(data.message);\n    };\n    const emptyCart = async ()=>{\n        try {\n            const response = await fetch(\"/api/cart\", {\n                method: \"DELETE\"\n            });\n            const data = await response.json();\n            alert(data.message);\n            setCartItems([]);\n        } catch (error) {\n            console.error(\"Failed to empty cart:\", error);\n        }\n    };\n    async function removeFromCart(id) {\n        await fetch(\"/api/cart/\".concat(id), {\n            method: \"DELETE\"\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Cart\"\n            }, void 0, false, {\n                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/cart.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: cartItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            item.id,\n                            \" \",\n                            item.name,\n                            \" - Quantity: \",\n                            item.quantity\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/cart.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/cart.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: emptyCart,\n                children: \"Empty Cart\"\n            }, void 0, false, {\n                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/cart.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: goHome,\n                children: \"Go Home\"\n            }, void 0, false, {\n                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/cart.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/cart.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(Cart, \"wJhtTlKQBohzaeB5iSfxmiCPEp4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Cart;\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2FydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMERBQTBEO0FBRTFELG9DQUFvQztBQUVwQyw4Q0FBOEM7QUFDOUMsZ0NBQWdDO0FBQ2hDLHVDQUF1QztBQUN2QyxpREFBaUQ7QUFDakQsd0NBQXdDO0FBQ3hDLHlDQUF5QztBQUN6QyxxQ0FBcUM7QUFDckMsK0RBQStEO0FBQy9ELGFBQWE7QUFDYix5RUFBeUU7QUFDekUsTUFBTTtBQUNOLElBQUk7OztBQUV3QztBQUNKO0FBRXpCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNTSxTQUFTSixzREFBU0E7SUFFeEIsU0FBU0s7UUFDUEQsT0FBT0UsSUFBSSxDQUFDO0lBQ2Q7SUFFQVAsZ0RBQVNBLENBQUM7UUFDUlEsTUFBTSxhQUNIQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNHLE9BQVNSLGFBQWFRLEtBQUtDLElBQUk7SUFDMUMsR0FBRyxFQUFFO0lBRUwsTUFBTUMsWUFBWSxPQUFPQyxJQUFJQztRQUMzQixNQUFNTixXQUFXLE1BQU1GLE1BQU0sYUFBYTtZQUN4Q1MsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVOO2dCQUFJQztZQUFTO1FBQ3RDO1FBQ0EsTUFBTUosT0FBTyxNQUFNRixTQUFTQyxJQUFJO1FBQ2hDVyxNQUFNVixLQUFLVyxPQUFPO0lBQ3BCO0lBRUEsTUFBTUMsWUFBWTtRQUNoQixJQUFJO1lBQ0YsTUFBTWQsV0FBVyxNQUFNRixNQUFNLGFBQWE7Z0JBQ3hDUyxRQUFRO1lBQ1Y7WUFDQSxNQUFNTCxPQUFPLE1BQU1GLFNBQVNDLElBQUk7WUFDaENXLE1BQU1WLEtBQUtXLE9BQU87WUFDbEJuQixhQUFhLEVBQUU7UUFDakIsRUFBRSxPQUFPcUIsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtRQUN6QztJQUNGO0lBRUEsZUFBZUUsZUFBZVosRUFBRTtRQUM5QixNQUFNUCxNQUFNLGFBQWdCLE9BQUhPLEtBQU07WUFBRUUsUUFBUTtRQUFTO0lBQ3BEO0lBRUEscUJBQ0UsOERBQUNXOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQ0UzQixVQUFVNEIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNwQiw4REFBQ0M7OzRCQUNFRixLQUFLakIsRUFBRTs0QkFBQzs0QkFBRWlCLEtBQUtHLElBQUk7NEJBQUM7NEJBQWNILEtBQUtoQixRQUFROzt1QkFEekNpQjs7Ozs7Ozs7OzswQkFLYiw4REFBQ0c7Z0JBQU9DLFNBQVNiOzBCQUFXOzs7Ozs7MEJBQzVCLDhEQUFDWTtnQkFBT0MsU0FBUy9COzBCQUFROzs7Ozs7Ozs7Ozs7QUFHL0I7R0F6RHdCSjs7UUFFUEQsa0RBQVNBOzs7S0FGRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NhcnQuanM/ZmRiOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUSElTIElTIFRIRSBDQVJUIFBBR0UgVE8gQkUgQUNDRVNTRUQgV0hFTiBVUkwgSVMgL0NBUlRTXG5cbi8vIGltcG9ydCB7IGRiIH0gZnJvbSBcIkAvc2VydmVyL2RiXCI7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbi8vICAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbi8vICAgICBjb25zdCBjYXJ0SXRlbXMgPSBkYi5jYXJ0LmdldCgpO1xuLy8gICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVudTogY2FydEl0ZW1zIH0pO1xuLy8gICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4vLyAgICAgY29uc3QgeyBpZCwgcXVhbnRpdHkgfSA9IHJlcS5ib2R5O1xuLy8gICAgIGRiLmNhcnQuYWRkKHsgaWQsIHF1YW50aXR5IH0pO1xuLy8gICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJJdGVtIGFkZGVkIHRvIGNhcnRcIiB9KTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiV2Ugb25seSBzdXBwb3J0IEdFVCByZXF1ZXN0c1wiIH0pO1xuLy8gICB9XG4vLyB9XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0KCkge1xuICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBmdW5jdGlvbiBnb0hvbWUoKSB7XG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcIi9hcGkvY2FydFwiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0Q2FydEl0ZW1zKGRhdGEuY2FydCkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgYWRkVG9DYXJ0ID0gYXN5bmMgKGlkLCBxdWFudGl0eSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NhcnRcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZCwgcXVhbnRpdHkgfSksXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBhbGVydChkYXRhLm1lc3NhZ2UpO1xuICB9O1xuXG4gIGNvbnN0IGVtcHR5Q2FydCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvY2FydFwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGFsZXJ0KGRhdGEubWVzc2FnZSk7XG4gICAgICBzZXRDYXJ0SXRlbXMoW10pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGVtcHR5IGNhcnQ6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlRnJvbUNhcnQoaWQpIHtcbiAgICBhd2FpdCBmZXRjaChgL2FwaS9jYXJ0LyR7aWR9YCwgeyBtZXRob2Q6IFwiREVMRVRFXCIgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Q2FydDwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtjYXJ0SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtpdGVtLmlkfSB7aXRlbS5uYW1lfSAtIFF1YW50aXR5OiB7aXRlbS5xdWFudGl0eX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2VtcHR5Q2FydH0+RW1wdHkgQ2FydDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb0hvbWV9PkdvIEhvbWU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkNhcnQiLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJyb3V0ZXIiLCJnb0hvbWUiLCJwdXNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhcnQiLCJhZGRUb0NhcnQiLCJpZCIsInF1YW50aXR5IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYWxlcnQiLCJtZXNzYWdlIiwiZW1wdHlDYXJ0IiwiZXJyb3IiLCJjb25zb2xlIiwicmVtb3ZlRnJvbUNhcnQiLCJkaXYiLCJoMSIsInVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJuYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/cart.js\n"));

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart */ \"./src/pages/cart.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function loadData() {\n            const res = await fetch(\"/api/menu\");\n            const data = await res.json();\n            setMenu(data.menu);\n        }\n        loadData();\n    }, []);\n    function addToCart(id) {\n        fetch(\"/api/cart\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                id: id,\n                quantity: 1\n            })\n        });\n    }\n    function viewCart() {\n        router.push(\"/cart\");\n    }\n    if (menu.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/index.js\",\n            lineNumber: 33,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Coffee Shop!\"\n            }, void 0, false, {\n                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Here is our menu\"\n            }, void 0, false, {\n                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: viewCart,\n                children: \"View Your Cart\"\n            }, void 0, false, {\n                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    flexWrap: \"wrap\",\n                    padding: \"10px\"\n                },\n                children: menu.map((item)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"300px\",\n                            border: \"1px solid black\",\n                            borderRadius: \"10px\",\n                            margin: \"10px\",\n                            padding: \"10px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.description\n                            }, void 0, false, {\n                                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.price\n                            }, void 0, false, {\n                                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>addToCart(item.id),\n                                children: \"Add to cart\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/hlvn_1/Coding/coffee-shop-nextjs/src/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"O0PPbfLAOADUasw2XciRWSAt0bE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ2Q7QUFFWCxTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTU0sU0FBU0wsc0RBQVNBO0lBRXhCRixnREFBU0EsQ0FBQztRQUNSLGVBQWVRO1lBQ2IsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO1lBQ3hCLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtZQUMzQk4sUUFBUUssS0FBS04sSUFBSTtRQUNuQjtRQUNBRztJQUNGLEdBQUcsRUFBRTtJQUVMLFNBQVNLLFVBQVVDLEVBQUU7UUFDbkJKLE1BQU8sYUFBWTtZQUNqQkssUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVMLElBQUlBO2dCQUFJTSxVQUFVO1lBQUU7UUFDN0M7SUFDRjtJQUVBLFNBQVNDO1FBQ1BkLE9BQU9lLElBQUksQ0FBQztJQUNkO0lBRUEsSUFBSWpCLEtBQUtrQixNQUFNLEtBQUssR0FBRztRQUNyQixxQkFBTyw4REFBQ0M7c0JBQUc7Ozs7OztJQUNiO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQTswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBT0MsU0FBU047MEJBQVU7Ozs7OzswQkFDM0IsOERBQUNPO2dCQUNDQyxPQUFPO29CQUNMQyxTQUFTO29CQUNUQyxlQUFlO29CQUNmQyxVQUFVO29CQUNWQyxTQUFTO2dCQUNYOzBCQUVDNUIsS0FBSzZCLEdBQUcsQ0FBQyxDQUFDQztvQkFDVCxxQkFDRSw4REFBQ1A7d0JBRUNDLE9BQU87NEJBQ0xPLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLGNBQWM7NEJBQ2RDLFFBQVE7NEJBQ1JOLFNBQVM7d0JBQ1g7OzBDQUVBLDhEQUFDTzswQ0FBSUwsS0FBS00sSUFBSTs7Ozs7OzBDQUNkLDhEQUFDQzswQ0FBR1AsS0FBS1EsV0FBVzs7Ozs7OzBDQUNwQiw4REFBQ0Q7MENBQUdQLEtBQUtTLEtBQUs7Ozs7OzswQ0FDZCw4REFBQ2xCO2dDQUFPQyxTQUFTLElBQU1kLFVBQVVzQixLQUFLckIsRUFBRTswQ0FBRzs7Ozs7Ozt1QkFadENxQixLQUFLckIsRUFBRTs7Ozs7Z0JBZWxCOzs7Ozs7OztBQUlSO0dBbEV3QlY7O1FBRVBGLGtEQUFTQTs7O0tBRkZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4vY2FydFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbWVudSwgc2V0TWVudV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZERhdGEoKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvbWVudVwiKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgc2V0TWVudShkYXRhLm1lbnUpO1xuICAgIH1cbiAgICBsb2FkRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gYWRkVG9DYXJ0KGlkKSB7XG4gICAgZmV0Y2goYC9hcGkvY2FydGAsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQ6IGlkLCBxdWFudGl0eTogMSB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZpZXdDYXJ0KCkge1xuICAgIHJvdXRlci5wdXNoKFwiL2NhcnRcIik7XG4gIH1cblxuICBpZiAobWVudS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5XZWxjb21lIHRvIENvZmZlZSBTaG9wITwvaDE+XG4gICAgICA8aDQ+SGVyZSBpcyBvdXIgbWVudTwvaDQ+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ZpZXdDYXJ0fT5WaWV3IFlvdXIgQ2FydDwvYnV0dG9uPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7bWVudS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMzAwcHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aDM+e2l0ZW0ubmFtZX08L2gzPlxuICAgICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxwPntpdGVtLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRUb0NhcnQoaXRlbS5pZCl9PkFkZCB0byBjYXJ0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQ2FydCIsIkhvbWUiLCJtZW51Iiwic2V0TWVudSIsInJvdXRlciIsImxvYWREYXRhIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImFkZFRvQ2FydCIsImlkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVhbnRpdHkiLCJ2aWV3Q2FydCIsInB1c2giLCJsZW5ndGgiLCJoMSIsImg0IiwiYnV0dG9uIiwib25DbGljayIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsInBhZGRpbmciLCJtYXAiLCJpdGVtIiwid2lkdGgiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJoMyIsIm5hbWUiLCJwIiwiZGVzY3JpcHRpb24iLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});