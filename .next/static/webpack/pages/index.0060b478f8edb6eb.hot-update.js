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

/***/ "./components/SignUpForm/hooks.ts":
/*!****************************************!*\
  !*** ./components/SignUpForm/hooks.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useSignUpFormHooks: function() { return /* binding */ useSignUpFormHooks; }\n/* harmony export */ });\n/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/contexts/auth */ \"./contexts/auth.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useSignUpFormHooks = ()=>{\n    const { signUpWithEmail } = (0,_contexts_auth__WEBPACK_IMPORTED_MODULE_0__.useAuthState)();\n    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const inititalValues = {\n        firstName: \"\",\n        lastName: \"\",\n        email: \"\",\n        password: \"\",\n        policy: false\n    };\n    // const onClickSignIn = useCallback(() => {\n    //   router.replace('/');\n    // }, [router]);\n    const onSubmitForm = async (values)=>{\n        try {\n            signUpWithEmail(values);\n        } catch (error) {\n            //@ts-ignore\n            toastError(error.message);\n        }\n    };\n    const onToggleShowPassword = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setShowPassword(!showPassword);\n    }, [\n        showPassword\n    ]);\n    return {\n        inititalValues,\n        showPassword,\n        onSubmitForm,\n        onToggleShowPassword\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ25VcEZvcm0vaG9va3MudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQztBQUVEO0FBS3ZDLE1BQU1HLHFCQUFxQjtJQUNoQyxNQUFNLEVBQUVDLGVBQWUsRUFBRSxHQUFHSiw0REFBWUE7SUFDeEMsTUFBTSxDQUFDSyxjQUFjQyxnQkFBZ0IsR0FBR0osK0NBQVFBLENBQVU7SUFFMUQsTUFBTUssaUJBQW9DO1FBQ3hDQyxXQUFXO1FBQ1hDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFFBQVE7SUFDVjtJQUVBLDRDQUE0QztJQUM1Qyx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBRWhCLE1BQU1DLGVBQWUsT0FBT0M7UUFDMUIsSUFBSTtZQUNGVixnQkFBZ0JVO1FBQ2xCLEVBQUUsT0FBT0MsT0FBTztZQUNkLFlBQVk7WUFDWkMsV0FBV0QsTUFBTUU7UUFDbkI7SUFDRjtJQUVBLE1BQU1DLHVCQUF1QmpCLGtEQUFXQSxDQUFDO1FBQ3ZDSyxnQkFBZ0IsQ0FBQ0Q7SUFDbkIsR0FBRztRQUFDQTtLQUFhO0lBRWpCLE9BQU87UUFDTEU7UUFDQUY7UUFDQVE7UUFDQUs7SUFDRjtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduVXBGb3JtL2hvb2tzLnRzP2M2YTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSBcIkAvY29udGV4dHMvYXV0aFwiO1xuaW1wb3J0IHsgSVNpZ25VcEZvcm1WYWx1ZXMgfSBmcm9tIFwiQC9xdWVyaWVzL3R5cGVcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVNpZ25VcEZvcm1Ib29rcyA9ICgpID0+IHtcbiAgY29uc3QgeyBzaWduVXBXaXRoRW1haWwgfSA9IHVzZUF1dGhTdGF0ZSgpO1xuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGluaXRpdGFsVmFsdWVzOiBJU2lnblVwRm9ybVZhbHVlcyA9IHtcbiAgICBmaXJzdE5hbWU6IFwiXCIsXG4gICAgbGFzdE5hbWU6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgcG9saWN5OiBmYWxzZSxcbiAgfTtcblxuICAvLyBjb25zdCBvbkNsaWNrU2lnbkluID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAvLyAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XG4gIC8vIH0sIFtyb3V0ZXJdKTtcblxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSBhc3luYyAodmFsdWVzOiBJU2lnblVwRm9ybVZhbHVlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzaWduVXBXaXRoRW1haWwodmFsdWVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB0b2FzdEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uVG9nZ2xlU2hvd1Bhc3N3b3JkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKTtcbiAgfSwgW3Nob3dQYXNzd29yZF0pO1xuXG4gIHJldHVybiB7XG4gICAgaW5pdGl0YWxWYWx1ZXMsXG4gICAgc2hvd1Bhc3N3b3JkLFxuICAgIG9uU3VibWl0Rm9ybSxcbiAgICBvblRvZ2dsZVNob3dQYXNzd29yZCxcbiAgfVxufSJdLCJuYW1lcyI6WyJ1c2VBdXRoU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlU2lnblVwRm9ybUhvb2tzIiwic2lnblVwV2l0aEVtYWlsIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiaW5pdGl0YWxWYWx1ZXMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwb2xpY3kiLCJvblN1Ym1pdEZvcm0iLCJ2YWx1ZXMiLCJlcnJvciIsInRvYXN0RXJyb3IiLCJtZXNzYWdlIiwib25Ub2dnbGVTaG93UGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SignUpForm/hooks.ts\n"));

/***/ })

});