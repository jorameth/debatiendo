"use strict";
exports.id = 282;
exports.ids = [282];
exports.modules = {

/***/ 1029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Comments": () => (/* binding */ Comments),
  "default": () => (/* binding */ comments)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@material-tailwind/react/index.js
var react = __webpack_require__(8714);
// EXTERNAL MODULE: ./src/components/new-comment.tsx
var new_comment = __webpack_require__(9396);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(1966);
// EXTERNAL MODULE: ./src/app/utils.js
var utils = __webpack_require__(5240);
;// CONCATENATED MODULE: ./src/app/login.tsx





function Login({ open , setOpen , setUsuario  }) {
    const [formData, setFormData] = (0,react_.useState)({
        username: "",
        password: ""
    });
    const handleChange = (e)=>setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    const handleSubmit = (e)=>{
        e.preventDefault();
        (0,utils/* fetchApp */._)("/login", {
            method: "post",
            data: formData
        }, (data)=>{
            if (data.usuario && data.usuario.is_authenticated) {
                setUsuario(data.usuario);
                setOpen(false);
            }
        }, (data)=>alert(`Error: ${data}`));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react.Dialog, {
        placeholder: "",
        onPointerEnterCapture: undefined,
        onPointerLeaveCapture: undefined,
        size: "sm",
        open: open,
        handler: ()=>setOpen(false),
        className: "p-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react.DialogHeader, {
                placeholder: "",
                onPointerEnterCapture: undefined,
                onPointerLeaveCapture: undefined,
                className: "relative m-0 block",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                        placeholder: "",
                        onPointerEnterCapture: undefined,
                        onPointerLeaveCapture: undefined,
                        variant: "h4",
                        color: "blue-gray",
                        children: "Identificarse"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react.IconButton, {
                        placeholder: "",
                        onPointerEnterCapture: undefined,
                        onPointerLeaveCapture: undefined,
                        size: "sm",
                        variant: "text",
                        className: "!absolute right-3.5 top-3.5",
                        onClick: ()=>setOpen(false),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon/* default */.Z, {
                            className: "h-4 w-4 stroke-2"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react.DialogBody, {
                placeholder: "",
                onPointerEnterCapture: undefined,
                onPointerLeaveCapture: undefined,
                className: "space-y-4 pb-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                                placeholder: "",
                                onPointerEnterCapture: undefined,
                                onPointerLeaveCapture: undefined,
                                variant: "small",
                                color: "blue-gray",
                                className: "mb-2 text-left font-medium",
                                children: "Usuario"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react.Input, {
                                crossOrigin: undefined,
                                onPointerEnterCapture: undefined,
                                onPointerLeaveCapture: undefined,
                                color: "gray",
                                size: "lg",
                                value: formData.username,
                                onChange: handleChange,
                                placeholder: "Usuario",
                                name: "username",
                                className: "placeholder:opacity-100 focus:!border-t-gray-900",
                                containerProps: {
                                    className: "!min-w-full"
                                },
                                labelProps: {
                                    className: "hidden"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                                placeholder: "",
                                onPointerEnterCapture: undefined,
                                onPointerLeaveCapture: undefined,
                                variant: "small",
                                color: "blue-gray",
                                className: "mb-2 text-left font-medium",
                                children: "Contrase\xf1a"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react.Input, {
                                type: "password",
                                crossOrigin: undefined,
                                onPointerEnterCapture: undefined,
                                onPointerLeaveCapture: undefined,
                                color: "gray",
                                size: "lg",
                                value: formData.password,
                                onChange: handleChange,
                                placeholder: "Usuario",
                                name: "password",
                                className: "placeholder:opacity-100 focus:!border-t-gray-900",
                                containerProps: {
                                    className: "!min-w-full"
                                },
                                labelProps: {
                                    className: "hidden"
                                }
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react.DialogFooter, {
                placeholder: "",
                onPointerEnterCapture: undefined,
                onPointerLeaveCapture: undefined,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react.Button, {
                    placeholder: "",
                    onPointerEnterCapture: undefined,
                    onPointerLeaveCapture: undefined,
                    onClick: handleSubmit,
                    className: "ml-auto",
                    children: "Enviar"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/index.ts + 7 modules
var components = __webpack_require__(4169);
;// CONCATENATED MODULE: ./src/app/comments.tsx
/* __next_internal_client_entry_do_not_use__ Comments auto */ 






function Comments({ slug  }) {
    const [showLoginForm, setShowLoginForm] = (0,react_.useState)(false);
    const [userMe, setUserMe] = (0,react_.useState)(null);
    const [debate, setDebate] = (0,react_.useState)(null);
    const [comentarios, setComentarios] = (0,react_.useState)([]);
    (0,react_.useEffect)(()=>{
        // get data and update
        if (false) {}
    }, []);
    const handleupdate = (comment)=>{
        setComentarios([
            ...comentarios,
            comment
        ]);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "w-full py-10 max-w-2xl mx-auto flex flex-col px-5 pb-20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                placeholder: "",
                onPointerEnterCapture: undefined,
                onPointerLeaveCapture: undefined,
                variant: "h4",
                className: " md:text-center",
                color: "blue-gray",
                children: debate && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        "Comentarios de ",
                        debate.titulo
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-8 grid grid-cols-1 gap-6 lg:grid-cols-1",
                children: [
                    comentarios?.filter((e)=>e.es_replica === undefined).map((comment, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components.CommentCard, {
                                comment: comment,
                                userMe: userMe,
                                handleupdate: handleupdate
                            })
                        }, index)),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "md:pl-14"
                    })
                ]
            }),
            userMe ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                        placeholder: "",
                        onPointerEnterCapture: undefined,
                        onPointerLeaveCapture: undefined,
                        variant: "h4",
                        className: "my-6 md:my-14 md:text-center",
                        color: "blue-gray",
                        children: "Agrega tu Comentario"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(new_comment/* NewComment */.H, {
                        reply: undefined,
                        userMe: userMe,
                        id: slug,
                        handleupdate: handleupdate
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react.Button, {
                        placeholder: "",
                        onPointerEnterCapture: undefined,
                        onPointerLeaveCapture: undefined,
                        variant: "text",
                        onClick: ()=>setShowLoginForm(true),
                        children: "Identificarse"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Login, {
                        open: showLoginForm,
                        setOpen: setShowLoginForm,
                        setUsuario: setUserMe
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const comments = (Comments);


/***/ }),

/***/ 1345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof, Comments */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`E:\Daniels_proyect\src\app\comments.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proxy.default);

const e0 = proxy["Comments"];


/***/ })

};
;