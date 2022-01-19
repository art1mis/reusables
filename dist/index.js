"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types"),r=require("@mui/material/Box"),a=require("@mui/material/IconButton"),o=require("@mui/material/styles"),l=require("@mui/material/useMediaQuery"),i=require("@mui/material/AppBar"),n=require("@mui/material/CssBaseline"),d=require("@mui/material/Drawer"),p=require("@mui/material/Toolbar"),s=require("../../../src/utils/isPlainObject");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=u(e),m=u(t),f=u(r),g=u(a),y=u(l),h=u(i),b=u(n),k=u(d),x=u(p),F=u(s);function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},C.apply(this,arguments)}const E=({disableX:e=!1,disableY:t=!1,sx:r={},...a})=>c.default.createElement(f.default,C({sx:{display:"block",position:"absolute",top:t?"auto":"50%",left:e?"auto":"50%",transform:`translate(${e?"auto":"-50%"}, ${t?"auto":"-50%"})`,...r}},a));E.propTypes={disableX:m.default.bool,disableY:m.default.bool,sx:m.default.object};const v=({sx:e,...t})=>c.default.createElement(g.default,C({sx:{border:"1px solid",borderColor:e=>"dark"===e.palette.mode?"primaryDark.600":"grey.200",borderRadius:1,...e}},t));v.defaultProps={sx:{}},v.propTypes={sx:m.default.object};const w=o.styled(h.default,{shouldForwardProp:e=>"hideAppBarStyles"!==e})((({hideAppBarStyles:e,theme:t})=>({transition:t.transitions.create("width"),color:"dark"===t.palette.mode?t.palette.grey[500]:t.palette.grey[800],...e?{boxShadow:"none",background:"transparent"}:{boxShadow:`inset 0px -1px 1px ${"dark"===t.palette.mode?t.palette.primaryDark[700]:t.palette.grey[100]}`,background:"dark"===t.palette.mode?t.palette.primaryDark[900]:"#FFF"}})));function D(e){const{hideAppBarStyles:t,toolbar:r,window:a,drawer:o,hideDrawer:l,...i}=e,[n,d]=c.default.useState(!1),p=()=>{l||d(!n)},s=void 0!==a?()=>a().document.body:void 0,u=y.default("(min-width:600px)");return c.default.createElement(f.default,{sx:{display:"flex"}},c.default.createElement(b.default,null),c.default.createElement(w,{position:"fixed",sx:{width:l?"100%":{sm:"calc(100% - 240px)"},ml:l?0:{sm:"240px"}},hideAppBarStyles:t},c.default.createElement(x.default,null,c.default.Children.map(r,(e=>c.default.createElement(e,{toggleDrawer:p}))))),c.default.createElement(f.default,{component:"nav",sx:{width:{sm:l?0:240},flexShrink:{sm:0}}},c.default.createElement(k.default,{container:s,variant:u?"permanent":"temporary",open:!l&&(!!u||n),onClose:handleDrawerToggle,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{boxSizing:"border-box",width:l?0:240}}},o)),c.default.createElement(f.default,C({component:"main",sx:{position:"absolute",width:l?"100%":{sm:"calc(100% - 240px)",xs:"100%"},ml:l?0:{sm:"240px"},top:0,bottom:0,"@media (min-width: 0px) and (orientation: landscape)":{mt:6.4},mt:{xs:5.6,sm:6.4}}},i)))}D.propTypes={window:m.default.func,hideAppBarStyles:m.default.bool,hideDrawer:m.default.bool},D.defaultProps={toolbar:c.default.createElement(c.default.Fragment,null),drawer:c.default.createElement(c.default.Fragment,null),hideAppBarStyles:!1,hideDrawer:!1};const B=c.default.createContext((()=>{throw new Error("Forgot to wrap component in `ThemeProvider`")})),S=()=>y.default("(prefers-color-scheme: dark)")?"dark":"light",M=({getDesignTokens:e,darkScrollbar:t,getCookie:r,setCookie:a,cookieName:l,...i})=>{const n=S(),[d,p]=c.default.useState("system");c.default.useEffect((()=>{if("undefined"!=typeof window){const e=r(l);["light","dark","system"].includes(e)&&p(e)}}),[r,l,p]),c.default.useEffect((()=>{"undefined"!=typeof window&&a(l,d,{path:"/",maxAge:31536e3})}),[d]);const s="system"===d?n?"dark":"light":d,u=c.default.useMemo((()=>{const r=e(s);return o.createTheme({...r,palette:{...r.palette,actualMode:s}},null,{components:{MuiCssBaseline:{styleOverrides:{body:"dark"===s?t():null}}}})}),[d]);return c.default.createElement(o.ThemeProvider,{theme:u},c.default.createElement(B.Provider,C({value:p},i)))};M.defaultProps={cookieName:"theme",getDesignTokens:()=>({}),darkScrollbar:()=>null,getCookie:()=>null,setCookie:()=>null},M.propTypes={cookieName:m.default.string,getDesignTokens:m.default.func,darkScrollbar:m.default.func,getCookie:m.default.func,setCookie:m.default.func};const T={50:"#F0F7FF",100:"#C2E0FF",200:"#A5D8FF",300:"#66B2FF",400:"#3399FF",main:"#007FFF",500:"#007FFF",600:"#0072E5",700:"#0059B2",800:"#004C99",900:"#003A75"},P={50:"#E2EDF8",100:"#CEE0F3",200:"#91B9E3",300:"#5090D3",main:"#5090D3",400:"#265D97",500:"#1E4976",600:"#173A5E",700:"#132F4C",800:"#001E3C",900:"#0A1929"},A={50:"#F3F6F9",100:"#EAEEF3",200:"#E5E8EC",300:"#D7DCE1",400:"#BFC7CF",500:"#AAB4BE",600:"#7F8E9D",700:"#46505A",800:"#2F3A45",900:"#20262D"},O=["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'],j=o.createTheme(),z=e=>({palette:{primary:{...T,..."dark"===e&&{main:T[400]}},divider:"dark"===e?P[700]:A[200],primaryDark:P,mode:e,..."dark"===e&&{background:{default:P[800],paper:P[900]}},common:{black:"#1D1D1D"},..."light"===e&&{text:{primary:A[900],secondary:A[800]}},..."dark"===e&&{text:{primary:"#fff",secondary:A[500]}},grey:A,error:{50:"#FFF0F1",100:"#FFDBDE",200:"#FFBDC2",300:"#FF99A2",400:"#FF7A86",500:"#FF505F",main:"#EB0014",600:"#EB0014",700:"#C70011",800:"#94000D",900:"#570007"},success:{50:"#E9FBF0",100:"#C6F6D9",200:"#9AEFBC",300:"#6AE79C",400:"#3EE07F",500:"#21CC66",600:"#1DB45A",..."dark"===e&&{main:"#1DB45A"},..."light"===e&&{main:"#1AA251"},700:"#1AA251",800:"#178D46",900:"#0F5C2E"},warning:{50:"#FFF9EB",100:"#FFF4DB",200:"#FFEDC2",300:"#FFE4A3",400:"#FFD980",500:"#FCC419",600:"#FAB005",main:"#F1A204",700:"#F1A204",800:"#DB9A00",900:"#8F6400"},svgBg:{base:"dark"===e?P[400]:A[50],active:"dark"===e?P[400]:A[50]},svgFilled:{base:"dark"===e?P[800]:A[500],active:"dark"===e?T[300]:T[500]},svgStroke:{base:"dark"===e?P[600]:"#ffffff",active:"dark"===e?T[700]:"#ffffff"}},shape:{borderRadius:10},spacing:10,typography:{fontFamily:['"IBM Plex Sans"',...O].join(","),fontFamilyCode:['"IBM Plex Mono"',...O].join(","),fontFamilyTagline:['"PlusJakartaSans-ExtraBold"',...O].join(","),fontWeightExtraBold:800,h1:{fontFamily:['"PlusJakartaSans-ExtraBold"',...O].join(","),fontSize:"clamp(2.625rem, 1.2857rem + 3.5714vw, 4.5rem)",fontWeight:800,lineHeight:80/72,..."light"===e&&{color:P[900]}},h2:{fontFamily:['"PlusJakartaSans-ExtraBold"',...O].join(","),fontSize:"clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",fontWeight:800,lineHeight:44/36,color:"dark"===e?A[200]:P[700]},h3:{fontSize:j.typography.pxToRem(36),lineHeight:44/36,letterSpacing:0},h4:{fontSize:j.typography.pxToRem(28),lineHeight:1.5,letterSpacing:0},h5:{fontSize:j.typography.pxToRem(24),lineHeight:1.5,letterSpacing:0},h6:{fontSize:j.typography.pxToRem(20),lineHeight:1.5,letterSpacing:0},button:{textTransform:"initial",fontWeight:700,letterSpacing:0},subtitle1:{fontSize:j.typography.pxToRem(18),lineHeight:24/18,letterSpacing:0,fontWeight:500},body1:{fontSize:j.typography.pxToRem(16),lineHeight:1.5,letterSpacing:0},body2:{fontSize:j.typography.pxToRem(14),lineHeight:1.5,letterSpacing:0},caption:{display:"inline-block",fontSize:j.typography.pxToRem(12),lineHeight:1.5,letterSpacing:0,fontWeight:600}}});o.createTheme(z("dark"));const I={track:"#2b2b2b",thumb:"#6b6b6b",active:"#959595"};const R=(e,t,r={clone:!0})=>{const a=r.clone?{...e}:e;return F.default(e)&&F.default(t)&&Object.keys(t).forEach((o=>{"__proto__"!==o&&(F.default(t[o])&&o in e&&F.default(e[o])?a[o]=R(e[o],t[o],r):a[o]=t[o])})),a},H=(e="function")=>{if("undefined"==typeof document)throw new Error(e+" is not supported on the server.")};exports.Center=E,exports.Layout=D,exports.OutlinedIconButton=v,exports.ThemeProvider=M,exports.darkScrollbar=function(e=I){return{scrollbarColor:`${e.thumb} ${e.track}`,"&::-webkit-scrollbar, & *::-webkit-scrollbar":{backgroundColor:e.track},"&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb":{borderRadius:8,backgroundColor:e.thumb,minHeight:24,border:`3px solid ${e.track}`},"&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":{backgroundColor:e.active},"&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":{backgroundColor:e.active},"&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":{backgroundColor:e.active},"&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner":{backgroundColor:e.track}}},exports.deepmerge=R,exports.getCookie=e=>{H("getCookie");const t=document.cookie.split(/;\s*/);for(let r=0;r<t.length;r++){const[a,o]=t[r].split("=");if(unescape(a)===e)return unescape(o)}},exports.getDesignTokens=z,exports.getMetaThemeColor=e=>({light:A[50],dark:P[800]}[e]),exports.getThemedComponents=function(e){return{components:{MuiButtonBase:{defaultProps:{disableTouchRipple:!0}},MuiButton:{defaultProps:{disableElevation:!0},styleOverrides:{sizeLarge:{padding:"1rem 1.25rem",...e.typography.body1,lineHeight:21/16,fontWeight:700},containedPrimary:{backgroundColor:e.palette.primary[500],color:"#fff"}},variants:[{props:{variant:"code"},style:{color:"dark"===e.palette.mode?e.palette.grey[400]:e.palette.grey[800],border:"1px solid",borderColor:"dark"===e.palette.mode?e.palette.primaryDark[400]:e.palette.grey[200],backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[700]:e.palette.grey[50],fontFamily:e.typography.fontFamilyCode,"&:hover, &.Mui-focusVisible":{borderColor:e.palette.primary.main,backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[500]:e.palette.primary[50],"& .MuiButton-endIcon":{color:"dark"===e.palette.mode?e.palette.primary[300]:e.palette.primary.main}},"& .MuiButton-startIcon":{color:e.palette.grey[400]},"& .MuiButton-endIcon":{color:"dark"===e.palette.mode?e.palette.grey[400]:e.palette.grey[700]}}},{props:{variant:"code",size:"large"},style:{...e.typography.body2,fontFamily:e.typography.fontFamilyCode,fontWeight:e.typography.fontWeightBold}}]},MuiContainer:{styleOverrides:{root:{[e.breakpoints.up("md")]:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}}}},MuiDivider:{styleOverrides:{root:{borderColor:"dark"===e.palette.mode?e.palette.primaryDark[700]:e.palette.grey[100]}}},MuiLink:{defaultProps:{underline:"none"},styleOverrides:{root:{color:"dark"===e.palette.mode?e.palette.primary[400]:e.palette.primary[600],fontWeight:600,display:"inline-flex",alignItems:"center","&.MuiTypography-body1 > svg":{marginTop:2},"& svg:last-child":{marginLeft:2}}}},MuiTab:{defaultProps:{disableTouchRipple:!0}},MuiPaper:{styleOverrides:{root:{"&[href]":{textDecorationLine:"none"}},outlined:{display:"block",borderColor:"dark"===e.palette.mode?e.palette.primaryDark[400]:e.palette.grey[100],..."dark"===e.palette.mode&&{backgroundColor:e.palette.primaryDark[700]},"a&, button&":{"&:hover":{boxShadow:"1px 1px 20px 0 rgb(90 105 120 / 20%)"}}}}},MuiTableCell:{styleOverrides:{root:{padding:e.spacing(1,2),borderColor:e.palette.divider},head:{color:e.palette.text.primary,fontWeight:600},body:{color:e.palette.text.secondary}}},MuiToggleButtonGroup:{styleOverrides:{root:{backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[800]:"#fff"}}},MuiToggleButton:{styleOverrides:{root:{textTransform:"none",fontWeight:600,color:"dark"===e.palette.mode?e.palette.grey[300]:e.palette.grey[700],borderColor:"dark"===e.palette.mode?e.palette.primaryDark[500]:e.palette.grey[200],"&.Mui-selected":{borderColor:`${e.palette.primary[500]} !important`,color:"dark"===e.palette.mode?"#fff":e.palette.primary[500],backgroundColor:"dark"===e.palette.mode?e.palette.primary[800]:e.palette.primaryDark[50]}}}},MuiSwitch:{styleOverrides:{root:{width:32,height:20,padding:0},switchBase:{height:20,width:20,padding:0,color:"#fff","&.Mui-checked + .MuiSwitch-track":{opacity:1},"&.Mui-checked":{transform:"translateX(11px)",color:"#fff"}},track:{opacity:1,borderRadius:32,backgroundColor:"dark"===e.palette.mode?e.palette.grey[800]:e.palette.grey[400]},thumb:{flexShrink:0,width:"14px",height:"14px"}}}}}},exports.highDensity={components:{MuiButton:{defaultProps:{size:"small"}},MuiFilledInput:{defaultProps:{margin:"dense"}},MuiFormControl:{defaultProps:{margin:"dense"}},MuiFormHelperText:{defaultProps:{margin:"dense"}},MuiIconButton:{defaultProps:{size:"small"},styleOverrides:{sizeSmall:{marginLeft:4,marginRight:4,padding:12}}},MuiInputBase:{defaultProps:{margin:"dense"}},MuiInputLabel:{defaultProps:{margin:"dense"}},MuiListItem:{defaultProps:{dense:!0}},MuiOutlinedInput:{defaultProps:{margin:"dense"}},MuiFab:{defaultProps:{size:"small"}},MuiTable:{defaultProps:{size:"small"}},MuiTextField:{defaultProps:{margin:"dense"}},MuiToolbar:{defaultProps:{variant:"dense"}}}},exports.isPlaintObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},exports.setCookie=(e,t,r)=>{H("setCookie"),r||(r={});let a=escape(e)+"="+escape(t);return r.expires&&(a+="; expires="+r.expires),r.maxAge&&(a+="; max-age="+r.maxAge),r.path&&(a+="; path="+escape(r.path)),r.domain&&(a+="; domain="+escape(r.domain)),r.secure&&(a+="; secure"),document.cookie=a,a},exports.useChangeTheme=()=>{const e=c.default.useContext(B);return c.default.useCallback((t=>{if(!["light","dark","system"].includes(t))throw new Error('changeTheme accepts only "light","dark" and "system" value');e(t)}),[e])},exports.usePrefersDark=S;
