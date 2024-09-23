exports.id = 110;
exports.ids = [110];
exports.modules = {

/***/ 8380:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 3619:
/***/ (() => {



/***/ }),

/***/ 5124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8714);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__  auto */ 

function Hero() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative min-h-screen w-full bg-[url('/image/image-4.jpeg')] bg-cover bg-no-repeat",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 h-full w-full bg-gray-900/75"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid min-h-screen px-8",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container relative z-10 my-auto mx-auto grid place-items-center text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            placeholder: "",
                            onPointerEnterCapture: undefined,
                            onPointerLeaveCapture: undefined,
                            variant: "h1",
                            color: "white",
                            children: "Espacio del Debate en la Universidad de Camag\xfcey."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            placeholder: "",
                            onPointerEnterCapture: undefined,
                            onPointerLeaveCapture: undefined,
                            variant: "lead",
                            color: "white",
                            className: "mt-4 mb-12 w-full md:max-w-full lg:max-w-3xl",
                            children: "Siempre escuchamos todas las opiniones!"
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 5240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ fetchApp)
/* harmony export */ });
/* unused harmony export getCookieValue */
const baseUrl = "http://127.0.0.1:8000";
const getCookieValue = (name)=>{
    const value = document.cookie.match("(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)");
    return value ? value.pop() : null;
};
const fetchApp = (endpoint, options, onSuccess = (data)=>{}, onError = (data)=>{})=>{
    const csrftoken = getCookieValue("csrftoken"), init = options || {};
    init["credentials"] = "include";
    init["mode"] = "cors" || 0;
    init["cookies"] = {
        csrftoken: csrftoken
    };
    init["headers"] = {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
        "Access-Control-Allow-Origin": "*"
    };
    if (init.method === "post" || init.method === "put" || init.method === "delete") {
        //init.data.csrftoken = csrftoken;
        if (!init.body) init.body = JSON.stringify(init.data);
    //init.data = {};
    }
    let searchParams = "";
    if (options.params) {
        searchParams = new URLSearchParams(options.params);
    }
    const url = `${baseUrl}${endpoint}${searchParams ? "/?" + searchParams.toString() : "/"}`;
    fetch(url, init).then((response)=>{
        if (response.status == "403") {
            return {
                success: false,
                message: "No tiene permiso para realizar esta acci\xf3n."
            };
        }
        return response.json();
    }).then((data)=>data.success ? onSuccess(data) : onError(data));
};


/***/ }),

/***/ 4169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BlogCardWithImage": () => (/* reexport */ BlogCardWithImage),
  "BlogPostCard": () => (/* reexport */ BlogPostCard),
  "CommentCard": () => (/* reexport */ CommentCard),
  "FixedPlugin": () => (/* reexport */ FixedPlugin),
  "Footer": () => (/* reexport */ Footer),
  "Navbar": () => (/* reexport */ Navbar),
  "NewComment": () => (/* reexport */ new_comment/* NewComment */.H),
  "SimpleBlogCard": () => (/* reexport */ SimpleBlogCard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@material-tailwind/react/index.js
var react = __webpack_require__(8714);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(1966);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var Bars3Icon = __webpack_require__(4832);
;// CONCATENATED MODULE: ./src/components/navbar.tsx




const NAV_MENU = [
    "Inicio",
    "Acerca",
    "Contacto"
];
function NavItem({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
            placeholder: "",
            onPointerEnterCapture: undefined,
            onPointerLeaveCapture: undefined,
            as: "a",
            href: "#",
            variant: "paragraph",
            className: "flex items-center gap-2 font-medium",
            children: children
        })
    });
}
function Navbar() {
    const [open, setOpen] = (0,react_.useState)(false);
    const [isScrolling, setIsScrolling] = (0,react_.useState)(false);
    function handleOpen() {
        setOpen((cur)=>!cur);
    }
    (0,react_.useEffect)(()=>{
        window.addEventListener("resize", ()=>window.innerWidth >= 960 && setOpen(false));
    }, []);
    (0,react_.useEffect)(()=>{
        function handleScroll() {
            if (window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react.Navbar, {
        placeholder: "",
        onPointerEnterCapture: undefined,
        onPointerLeaveCapture: undefined,
        fullWidth: true,
        shadow: false,
        blurred: false,
        color: isScrolling ? "white" : "transparent",
        className: "fixed top-0 z-50 border-0",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto flex items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                        placeholder: "",
                        onPointerEnterCapture: undefined,
                        onPointerLeaveCapture: undefined,
                        as: "a",
                        href: "/",
                        className: "text-lg font-bold",
                        color: isScrolling ? "blue-gray" : "white",
                        children: "Debatiendo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: `ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-gray-900" : "text-white"}`,
                        children: NAV_MENU.map((name)=>/*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                                children: name
                            }, name))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react.IconButton, {
                        placeholder: "",
                        onPointerEnterCapture: undefined,
                        onPointerLeaveCapture: undefined,
                        variant: "text",
                        onClick: handleOpen,
                        color: isScrolling ? "gray" : "white",
                        className: "ml-auto inline-block lg:hidden",
                        children: open ? /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon/* default */.Z, {
                            strokeWidth: 2,
                            className: "h-6 w-6"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(Bars3Icon/* default */.Z, {
                            strokeWidth: 2,
                            className: "h-6 w-6"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react.Collapse, {
                open: open,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container mx-auto bg-white rounded-lg py-4 px-6 mt-3 border-t border-gray-200",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "flex flex-col gap-4",
                        children: NAV_MENU.map((name)=>/*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                                children: name
                            }, name))
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const navbar = ((/* unused pure expression or super */ null && (Navbar)));

;// CONCATENATED MODULE: ./src/components/footer.tsx


const LINKS = [
    {
        title: "Company",
        items: [
            "About Us",
            "Careers"
        ]
    },
    {
        title: "Pages",
        items: [
            "Login",
            "Register"
        ]
    },
    {
        title: "Legal",
        items: [
            "Terms",
            "Privacy"
        ]
    }
];
const CURRENT_YEAR = new Date().getFullYear();
function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "mt-10 px-8 pt-20",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 justify-between gap-4 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                            placeholder: "",
                            onPointerEnterCapture: undefined,
                            onPointerLeaveCapture: undefined,
                            as: "a",
                            href: "https://www.material-tailwind.com",
                            target: "_blank",
                            variant: "h4",
                            className: "mb-6",
                            children: "Material Tailwind"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "grid grid-cols-3 justify-between gap-4",
                            children: LINKS.map(({ title , items  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                                            placeholder: "",
                                            onPointerEnterCapture: undefined,
                                            onPointerLeaveCapture: undefined,
                                            variant: "h6",
                                            color: "blue-gray",
                                            className: "mb-4",
                                            children: title
                                        }),
                                        items.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                                                    placeholder: "",
                                                    onPointerEnterCapture: undefined,
                                                    onPointerLeaveCapture: undefined,
                                                    as: "a",
                                                    href: "#",
                                                    variant: "small",
                                                    className: "py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900",
                                                    children: link
                                                })
                                            }, link))
                                    ]
                                }, title))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mt-16 flex flex-wrap items-end justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center md:text-start",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                                    placeholder: "",
                                    onPointerEnterCapture: undefined,
                                    onPointerLeaveCapture: undefined,
                                    variant: "h4",
                                    color: "blue-gray",
                                    className: "mb-2",
                                    children: "The reward for getting on the stage is fame."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                                    placeholder: "",
                                    onPointerEnterCapture: undefined,
                                    onPointerLeaveCapture: undefined,
                                    className: "font-normal !text-gray-700",
                                    children: "The price of fame is you can't get off the stage."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react.Typography, {
                            placeholder: "",
                            onPointerEnterCapture: undefined,
                            onPointerLeaveCapture: undefined,
                            color: "gray",
                            className: "text-center font-normal !text-gray-700",
                            children: [
                                "\xa9 ",
                                CURRENT_YEAR,
                                " Made with",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.material-tailwind.com",
                                    target: "_blank",
                                    children: "Material Tailwind"
                                }),
                                " ",
                                "by",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.creative-tim.com",
                                    target: "_blank",
                                    children: "Creative Tim"
                                }),
                                "."
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const footer = ((/* unused pure expression or super */ null && (Footer)));

// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js
var UserCircleIcon = __webpack_require__(2234);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CalendarIcon.js
var CalendarIcon = __webpack_require__(4501);
;// CONCATENATED MODULE: ./src/components/comment-card.tsx



function CommentCard({ comment , userMe , handleupdate  }) {
    //const [isReply, setIsReply] = useState(false)
    return /*#__PURE__*/ jsx_runtime_.jsx(react.Card, {
        placeholder: "",
        onPointerEnterCapture: undefined,
        onPointerLeaveCapture: undefined,
        shadow: false,
        color: "transparent",
        className: "grid items-center gap-6  ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react.Card, {
            placeholder: "",
            onPointerEnterCapture: undefined,
            onPointerLeaveCapture: undefined,
            className: "p-4 gap-5 flex flex-col ",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " !m-0 h-full  w-full  max-h-[40px] max-w-[40px] ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(UserCircleIcon/* default */.Z, {
                            className: "w-10 text-10 h-10"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                            placeholder: "",
                            onPointerEnterCapture: undefined,
                            onPointerLeaveCapture: undefined,
                            variant: "small",
                            className: " font-bold flex items-center gap-2 !text-gray-900",
                            children: comment.usuario && comment.usuario.name
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex gap-1 mb-3 items-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                                placeholder: "",
                                onPointerEnterCapture: undefined,
                                onPointerLeaveCapture: undefined,
                                variant: "small",
                                className: " font-bold flex items-center gap-2 !text-gray-900",
                                children: userMe && userMe.name
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                            placeholder: "",
                            onPointerEnterCapture: undefined,
                            onPointerLeaveCapture: undefined,
                            className: "w-full font-normal mb-4 !text-gray-500",
                            children: comment.comentario
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "!w-full flex justify-end",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react.Typography, {
                                    placeholder: "",
                                    onPointerEnterCapture: undefined,
                                    onPointerLeaveCapture: undefined,
                                    variant: "small",
                                    className: "d-inline font-medium !text-gray-500",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(CalendarIcon/* default */.Z, {
                                            className: "w-4 text-4 h-4"
                                        }),
                                        comment.creado
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const comment_card = ((/* unused pure expression or super */ null && (CommentCard)));

// EXTERNAL MODULE: ./src/components/new-comment.tsx
var new_comment = __webpack_require__(9396);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/blog-post-card.tsx




function BlogPostCard({ img , tag , title , desc , author , date  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react.Card, {
        placeholder: "",
        onPointerEnterCapture: undefined,
        onPointerLeaveCapture: undefined,
        shadow: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react.Card, {
                placeholder: "",
                onPointerEnterCapture: undefined,
                onPointerLeaveCapture: undefined,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    width: 768,
                    height: 768,
                    src: img,
                    alt: title,
                    className: "h-full w-full scale-110 object-cover"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react.Card, {
                placeholder: "",
                onPointerEnterCapture: undefined,
                onPointerLeaveCapture: undefined,
                className: "p-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                        placeholder: "",
                        onPointerEnterCapture: undefined,
                        onPointerLeaveCapture: undefined,
                        variant: "small",
                        color: "blue",
                        className: "mb-2 !font-medium",
                        children: tag
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                        placeholder: "",
                        onPointerEnterCapture: undefined,
                        onPointerLeaveCapture: undefined,
                        as: "a",
                        href: "#",
                        variant: "h5",
                        color: "blue-gray",
                        className: "mb-2 normal-case transition-colors hover:text-gray-900",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                        placeholder: "",
                        onPointerEnterCapture: undefined,
                        onPointerLeaveCapture: undefined,
                        className: "mb-6 font-normal !text-gray-500",
                        children: desc
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react.Avatar, {
                                placeholder: "",
                                onPointerEnterCapture: undefined,
                                onPointerLeaveCapture: undefined,
                                size: "sm",
                                variant: "circular",
                                src: author.img,
                                alt: author.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                                        placeholder: "",
                                        onPointerEnterCapture: undefined,
                                        onPointerLeaveCapture: undefined,
                                        variant: "small",
                                        color: "blue-gray",
                                        className: "mb-0.5 !font-medium",
                                        children: author.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                                        placeholder: "",
                                        onPointerEnterCapture: undefined,
                                        onPointerLeaveCapture: undefined,
                                        variant: "small",
                                        color: "gray",
                                        className: "text-xs !text-gray-500 font-normal",
                                        children: date
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const blog_post_card = ((/* unused pure expression or super */ null && (BlogPostCard)));

;// CONCATENATED MODULE: ./src/components/blog-card-with-image.tsx



function BlogCardWithImage() {
    return /*#__PURE__*/ jsx_runtime_.jsx(react.Card, {
        placeholder: "",
        onPointerEnterCapture: undefined,
        onPointerLeaveCapture: undefined,
        shadow: false,
        className: "pb-5 p-0 !border-b md:border-none border-blue-gray-100",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react.Card, {
            placeholder: "",
            onPointerEnterCapture: undefined,
            onPointerLeaveCapture: undefined,
            className: "p-0 ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full mb-4 h-[211px] ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        width: 768,
                        height: 768,
                        src: "/image/blogs/blog-1.png",
                        className: "w-full h-full rounded-lg",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                    placeholder: "",
                    onPointerEnterCapture: undefined,
                    onPointerLeaveCapture: undefined,
                    variant: "h3",
                    className: "leading-[45px] mb-4 !text-gray-900",
                    children: "How to Build a $24 Billion Dollar Company in Just 2 Years."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                    placeholder: "",
                    onPointerEnterCapture: undefined,
                    onPointerLeaveCapture: undefined,
                    className: "font-normal mb-4 !text-base text-gray-500 ",
                    children: "I've come to the conclusion that 50% of folks in this world don't even spend enough time alone with their thoughts to have their own opinions. They haven't done the work to decide what they think. And that isn't a rewarding way to live."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 256,
                                height: 256,
                                src: "/image/avatar3.jpg",
                                className: "w-12 h-12 rounded-lg",
                                alt: "photo"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                                    placeholder: "",
                                    onPointerEnterCapture: undefined,
                                    onPointerLeaveCapture: undefined,
                                    className: "!font-bold !text-sm text-gray-900",
                                    children: "Andrew Peterson"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                                    placeholder: "",
                                    onPointerEnterCapture: undefined,
                                    onPointerLeaveCapture: undefined,
                                    className: "!font-normal !text-xs text-gray-500 ",
                                    children: "Redactor"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const blog_card_with_image = ((/* unused pure expression or super */ null && (BlogCardWithImage)));

;// CONCATENATED MODULE: ./src/components/simple-blog-card.tsx


function SimpleBlogCard({ title , subtitle , name , icon: Icon  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " pb-10",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center mb-3 gap-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                        className: "h-5 w-5 text-gray-900"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                        placeholder: "",
                        onPointerEnterCapture: undefined,
                        onPointerLeaveCapture: undefined,
                        className: "w-full",
                        variant: "h6",
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                placeholder: "",
                onPointerEnterCapture: undefined,
                onPointerLeaveCapture: undefined,
                className: "!text-base w-7/12 md:w-full mb-3 font-normal !text-gray-700",
                children: subtitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react.Typography, {
                placeholder: "",
                onPointerEnterCapture: undefined,
                onPointerLeaveCapture: undefined,
                className: "!text-xs font-normal !text-gray-500",
                children: name
            })
        ]
    });
}
/* harmony default export */ const simple_blog_card = ((/* unused pure expression or super */ null && (SimpleBlogCard)));

;// CONCATENATED MODULE: ./src/components/fixed-plugin.tsx
/* __next_internal_client_entry_do_not_use__ FixedPlugin auto */ 


function FixedPlugin() {
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "https://www.material-tailwind.com",
        target: "_blank",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react.Button, {
            placeholder: "",
            onPointerEnterCapture: undefined,
            onPointerLeaveCapture: undefined,
            color: "white",
            size: "sm",
            className: "!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    width: 128,
                    height: 128,
                    className: "w-5 h-5",
                    alt: "Material Tailwind",
                    src: "https://www.material-tailwind.com/favicon.png"
                }),
                " ",
                "Made With Material Tailwind"
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/index.ts
/* __next_internal_client_entry_do_not_use__ *,*,*,*,*,*,*,*,* auto */ 










/***/ }),

/***/ 9396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ NewComment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8714);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5240);




function NewComment({ handleupdate , userMe , reply , setIsReply  }) {
    const [comentario, setComentario] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        const currentSlug = window.location.pathname.split("/").pop();
        const formData = {
            usuario: "",
            debate: currentSlug,
            comentario: comentario
        };
        (0,_app_utils__WEBPACK_IMPORTED_MODULE_3__/* .fetchApp */ ._)(`/debates/${currentSlug}`, {
            method: "post",
            data: formData
        }, (data)=>{
            handleupdate(data.obj);
            setComentario("");
            setIsReply && setIsReply(false);
        }, (data)=>console.log(data));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex !items-center gap-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    placeholder: "",
                    onPointerEnterCapture: undefined,
                    onPointerLeaveCapture: undefined,
                    variant: "small",
                    className: "font-bold flex items-center gap-2 !text-gray-900",
                    children: userMe?.name
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-col mt-4 pl-14 h-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit,
                    className: "flex flex-col items-end",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
                            onPointerEnterCapture: undefined,
                            onPointerLeaveCapture: undefined,
                            onChange: (e)=>setComentario(e.target.value),
                            value: comentario,
                            label: "Tu Comentario",
                            variant: "static",
                            placeholder: "Escribe un comentario. Respeta las reglas de cotes\xeda"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            placeholder: "",
                            onPointerEnterCapture: undefined,
                            onPointerLeaveCapture: undefined,
                            onClick: handleSubmit,
                            color: "gray",
                            className: "mt-2",
                            size: "md",
                            children: "Enviar"
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 3132:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  auto */ const { createProxy  } = __webpack_require__(5985);
module.exports = createProxy("E:\\Daniels_proyect\\src\\app\\hero.tsx");


/***/ }),

/***/ 4180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   "metadata": () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5553);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);


const metadata = {
    title: "Debatiendo",
    description: "Un blog"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "es",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("head", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 9554:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ *,*,*,*,*,*,*,*,* auto */ const { createProxy  } = __webpack_require__(5985);
module.exports = createProxy("E:\\Daniels_proyect\\src\\components\\index.ts");


/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;