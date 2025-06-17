(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/RotatingTextF.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const RotatingText = ({ texts, rotationInterval })=>{
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RotatingText.useEffect": ()=>{
            const interval = setInterval({
                "RotatingText.useEffect.interval": ()=>{
                    setIndex({
                        "RotatingText.useEffect.interval": (prevIndex)=>(prevIndex + 1) % texts.length
                    }["RotatingText.useEffect.interval"]);
                }
            }["RotatingText.useEffect.interval"], rotationInterval);
            return ({
                "RotatingText.useEffect": ()=>clearInterval(interval)
            })["RotatingText.useEffect"];
        }
    }["RotatingText.useEffect"], [
        texts.length,
        rotationInterval
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: -20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 20
        },
        transition: {
            duration: 0.5
        },
        className: "text-center",
        children: texts[index]
    }, index, false, {
        fileName: "[project]/components/RotatingTextF.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
_s(RotatingText, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
_c = RotatingText;
const __TURBOPACK__default__export__ = RotatingText;
var _c;
__turbopack_context__.k.register(_c, "RotatingText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/GlobalPartner.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GlobalPartnerSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const partners = [
    {
        name: "Partner A",
        slug: "partner-a",
        logos: [
            {
                src: "degzzo-logo-web.png",
                link: "/Partners/unique"
            },
            {
                src: "/logos/partner-a-2.svg",
                link: "/Partners/unique"
            }
        ],
        interval: 2000
    },
    {
        name: "Partner B",
        slug: "partner-b",
        logos: [
            {
                src: "degzzo-logo-web.png",
                link: "/partners/unique"
            },
            {
                src: "/logos/partner-b-2.svg",
                link: "/partners/unique"
            }
        ],
        interval: 3000
    },
    {
        name: "Partner C",
        slug: "partner-c",
        logos: [
            {
                src: "degzzo-logo-web.png",
                link: "/partners/unique"
            },
            {
                src: "/logos/partner-c-2.svg",
                link: "/partners/unique"
            }
        ],
        interval: 2500
    },
    {
        name: "Partner D",
        slug: "partner-d",
        logos: [
            {
                src: "degzzo-logo-web.pngg",
                link: "/partners/partner-d/logo1"
            },
            {
                src: "/logos/partner-d-2.svg",
                link: "/partners/partner-d/logo2"
            }
        ],
        interval: 4000
    },
    {
        name: "Partner E",
        slug: "partner-e",
        logos: [
            {
                src: "degzzo-logo-web.png",
                link: "/partners/partner-e/logo1"
            },
            {
                src: "/logos/partner-e-2.svg",
                link: "/partners/partner-e/logo2"
            }
        ],
        interval: 3500
    },
    {
        name: "Partner F",
        slug: "partner-f",
        logos: [
            {
                src: "degzzo-logo-web.png",
                link: "/partners/partner-f/logo1"
            },
            {
                src: "/logos/partner-f-2.svg",
                link: "/partners/partner-f/logo2"
            }
        ],
        interval: 2200
    }
];
function GlobalPartnerSection() {
    _s();
    const [logoIndexes, setLogoIndexes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(partners.map({
        "GlobalPartnerSection.useState": ()=>0
    }["GlobalPartnerSection.useState"]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalPartnerSection.useEffect": ()=>{
            const intervals = partners.map({
                "GlobalPartnerSection.useEffect.intervals": (partner, i)=>setInterval({
                        "GlobalPartnerSection.useEffect.intervals": ()=>{
                            setLogoIndexes({
                                "GlobalPartnerSection.useEffect.intervals": (prev)=>{
                                    const newIndexes = [
                                        ...prev
                                    ];
                                    newIndexes[i] = newIndexes[i] === 0 ? 1 : 0;
                                    return newIndexes;
                                }
                            }["GlobalPartnerSection.useEffect.intervals"]);
                        }
                    }["GlobalPartnerSection.useEffect.intervals"], partner.interval)
            }["GlobalPartnerSection.useEffect.intervals"]);
            return ({
                "GlobalPartnerSection.useEffect": ()=>intervals.forEach(clearInterval)
            })["GlobalPartnerSection.useEffect"];
        }
    }["GlobalPartnerSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-16 px-4 md:px-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    className: "text-3xl md:text-4xl font-bold mb-10",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    viewport: {
                        once: true
                    },
                    children: "Our Global Partners"
                }, void 0, false, {
                    fileName: "[project]/components/GlobalPartner.jsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-start justify-center",
                    children: partners.map((partner, index)=>{
                        const activeLogo = partner.logos[logoIndexes[index]];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center h-20 relative mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: activeLogo.link,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "wait",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                            src: activeLogo.src,
                                            alt: partner.name,
                                            initial: {
                                                opacity: 1
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: 0.1
                                            },
                                            className: "absolute h-full object-contain grayscale hover:grayscale-0 transition duration-300 cursor-pointer"
                                        }, activeLogo.src, false, {
                                            fileName: "[project]/components/GlobalPartner.jsx",
                                            lineNumber: 103,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/GlobalPartner.jsx",
                                        lineNumber: 102,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/GlobalPartner.jsx",
                                    lineNumber: 101,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/GlobalPartner.jsx",
                                lineNumber: 100,
                                columnNumber: 17
                            }, this)
                        }, index, false, {
                            fileName: "[project]/components/GlobalPartner.jsx",
                            lineNumber: 98,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/GlobalPartner.jsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/GlobalPartner.jsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/GlobalPartner.jsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(GlobalPartnerSection, "ugO2VprtDlscdAeSVRh9hy75FdY=");
_c = GlobalPartnerSection;
var _c;
__turbopack_context__.k.register(_c, "GlobalPartnerSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_8496c661._.js.map