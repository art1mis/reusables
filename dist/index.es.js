import e from"react";import t from"prop-types";import r from"@mui/material/Box";import o from"@mui/material/IconButton";import{styled as a,createTheme as i,ThemeProvider as l}from"@mui/material/styles";import n from"@mui/material/useMediaQuery";import p from"@mui/material/AppBar";import s from"@mui/material/CssBaseline";import d from"@mui/material/Drawer";import m from"@mui/material/Toolbar";import c from"../../../src/utils/isPlainObject";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},u.apply(this,arguments)}const g=({disableX:t=!1,disableY:o=!1,sx:a={},...i})=>e.createElement(r,u({sx:{display:"block",position:"absolute",top:o?"auto":"50%",left:t?"auto":"50%",transform:`translate(${t?"auto":"-50%"}, ${o?"auto":"-50%"})`,...a}},i));g.propTypes={disableX:t.bool,disableY:t.bool,sx:t.object};const y=({sx:t,...r})=>e.createElement(o,u({sx:{border:"1px solid",borderColor:e=>"dark"===e.palette.mode?"primaryDark.600":"grey.200",borderRadius:1,...t}},r));y.defaultProps={sx:{}},y.propTypes={sx:t.object};const f=a(p,{shouldForwardProp:e=>"hideAppBarStyles"!==e})((({hideAppBarStyles:e,theme:t})=>({transition:t.transitions.create("width"),color:"dark"===t.palette.mode?t.palette.grey[500]:t.palette.grey[800],...e?{boxShadow:"none",background:"transparent"}:{boxShadow:`inset 0px -1px 1px ${"dark"===t.palette.mode?t.palette.primaryDark[700]:t.palette.grey[100]}`,background:"dark"===t.palette.mode?t.palette.primaryDark[900]:"#FFF"}})));function b(t){const{hideAppBarStyles:o,toolbar:a,window:i,drawer:l,hideDrawer:p,...c}=t,[g,y]=e.useState(!1),b=()=>{p||y(!g)},h=void 0!==i?()=>i().document.body:void 0,k=n("(min-width:600px)");return e.createElement(r,{sx:{display:"flex"}},e.createElement(s,null),e.createElement(f,{position:"fixed",sx:{width:p?"100%":{sm:"calc(100% - 240px)"},ml:p?0:{sm:"240px"}},hideAppBarStyles:o},e.createElement(m,null,e.Children.map(a,(t=>e.createElement(t,{toggleDrawer:b}))))),e.createElement(r,{component:"nav",sx:{width:{sm:p?0:240},flexShrink:{sm:0}}},e.createElement(d,{container:h,variant:k?"permanent":"temporary",open:!p&&(!!k||g),onClose:handleDrawerToggle,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{boxSizing:"border-box",width:p?0:240}}},l)),e.createElement(r,u({component:"main",sx:{position:"absolute",width:p?"100%":{sm:"calc(100% - 240px)",xs:"100%"},ml:p?0:{sm:"240px"},top:0,bottom:0,"@media (min-width: 0px) and (orientation: landscape)":{mt:6.4},mt:{xs:5.6,sm:6.4}}},c)))}b.propTypes={window:t.func,hideAppBarStyles:t.bool,hideDrawer:t.bool},b.defaultProps={toolbar:e.createElement(e.Fragment,null),drawer:e.createElement(e.Fragment,null),hideAppBarStyles:!1,hideDrawer:!1};const h=e.createContext((()=>{throw new Error("Forgot to wrap component in `ThemeProvider`")})),k=()=>n("(prefers-color-scheme: dark)")?"dark":"light",F=({getDesignTokens:t,darkScrollbar:r,getCookie:o,setCookie:a,cookieName:n,...p})=>{const s=k(),[d,m]=e.useState("system");e.useEffect((()=>{if("undefined"!=typeof window){const e=o(n);["light","dark","system"].includes(e)&&m(e)}}),[o,n,m]),e.useEffect((()=>{"undefined"!=typeof window&&a(n,d,{path:"/",maxAge:31536e3})}),[d]);const c="system"===d?s?"dark":"light":d,g=e.useMemo((()=>{const e=t(c);return i({...e,palette:{...e.palette,actualMode:c}},null,{components:{MuiCssBaseline:{styleOverrides:{body:"dark"===c?r():null}}}})}),[d]);return e.createElement(l,{theme:g},e.createElement(h.Provider,u({value:m},p)))};F.defaultProps={cookieName:"theme",getDesignTokens:()=>({}),darkScrollbar:()=>null,getCookie:()=>null,setCookie:()=>null},F.propTypes={cookieName:t.string,getDesignTokens:t.func,darkScrollbar:t.func,getCookie:t.func,setCookie:t.func};const x=()=>{const t=e.useContext(h);return e.useCallback((e=>{if(!["light","dark","system"].includes(e))throw new Error('changeTheme accepts only "light","dark" and "system" value');t(e)}),[t])},C={50:"#F0F7FF",100:"#C2E0FF",200:"#A5D8FF",300:"#66B2FF",400:"#3399FF",main:"#007FFF",500:"#007FFF",600:"#0072E5",700:"#0059B2",800:"#004C99",900:"#003A75"},E={50:"#E2EDF8",100:"#CEE0F3",200:"#91B9E3",300:"#5090D3",main:"#5090D3",400:"#265D97",500:"#1E4976",600:"#173A5E",700:"#132F4C",800:"#001E3C",900:"#0A1929"},w={50:"#F3F6F9",100:"#EAEEF3",200:"#E5E8EC",300:"#D7DCE1",400:"#BFC7CF",500:"#AAB4BE",600:"#7F8E9D",700:"#46505A",800:"#2F3A45",900:"#20262D"},v=["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'],B=i(),D=e=>({light:w[50],dark:E[800]}[e]),S=e=>({palette:{primary:{...C,..."dark"===e&&{main:C[400]}},divider:"dark"===e?E[700]:w[200],primaryDark:E,mode:e,..."dark"===e&&{background:{default:E[800],paper:E[900]}},common:{black:"#1D1D1D"},..."light"===e&&{text:{primary:w[900],secondary:w[800]}},..."dark"===e&&{text:{primary:"#fff",secondary:w[500]}},grey:w,error:{50:"#FFF0F1",100:"#FFDBDE",200:"#FFBDC2",300:"#FF99A2",400:"#FF7A86",500:"#FF505F",main:"#EB0014",600:"#EB0014",700:"#C70011",800:"#94000D",900:"#570007"},success:{50:"#E9FBF0",100:"#C6F6D9",200:"#9AEFBC",300:"#6AE79C",400:"#3EE07F",500:"#21CC66",600:"#1DB45A",..."dark"===e&&{main:"#1DB45A"},..."light"===e&&{main:"#1AA251"},700:"#1AA251",800:"#178D46",900:"#0F5C2E"},warning:{50:"#FFF9EB",100:"#FFF4DB",200:"#FFEDC2",300:"#FFE4A3",400:"#FFD980",500:"#FCC419",600:"#FAB005",main:"#F1A204",700:"#F1A204",800:"#DB9A00",900:"#8F6400"},svgBg:{base:"dark"===e?E[400]:w[50],active:"dark"===e?E[400]:w[50]},svgFilled:{base:"dark"===e?E[800]:w[500],active:"dark"===e?C[300]:C[500]},svgStroke:{base:"dark"===e?E[600]:"#ffffff",active:"dark"===e?C[700]:"#ffffff"}},shape:{borderRadius:10},spacing:10,typography:{fontFamily:['"IBM Plex Sans"',...v].join(","),fontFamilyCode:['"IBM Plex Mono"',...v].join(","),fontFamilyTagline:['"PlusJakartaSans-ExtraBold"',...v].join(","),fontWeightExtraBold:800,h1:{fontFamily:['"PlusJakartaSans-ExtraBold"',...v].join(","),fontSize:"clamp(2.625rem, 1.2857rem + 3.5714vw, 4.5rem)",fontWeight:800,lineHeight:80/72,..."light"===e&&{color:E[900]}},h2:{fontFamily:['"PlusJakartaSans-ExtraBold"',...v].join(","),fontSize:"clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",fontWeight:800,lineHeight:44/36,color:"dark"===e?w[200]:E[700]},h3:{fontSize:B.typography.pxToRem(36),lineHeight:44/36,letterSpacing:0},h4:{fontSize:B.typography.pxToRem(28),lineHeight:1.5,letterSpacing:0},h5:{fontSize:B.typography.pxToRem(24),lineHeight:1.5,letterSpacing:0},h6:{fontSize:B.typography.pxToRem(20),lineHeight:1.5,letterSpacing:0},button:{textTransform:"initial",fontWeight:700,letterSpacing:0},subtitle1:{fontSize:B.typography.pxToRem(18),lineHeight:24/18,letterSpacing:0,fontWeight:500},body1:{fontSize:B.typography.pxToRem(16),lineHeight:1.5,letterSpacing:0},body2:{fontSize:B.typography.pxToRem(14),lineHeight:1.5,letterSpacing:0},caption:{display:"inline-block",fontSize:B.typography.pxToRem(12),lineHeight:1.5,letterSpacing:0,fontWeight:600}}});function M(e){return{components:{MuiButtonBase:{defaultProps:{disableTouchRipple:!0}},MuiButton:{defaultProps:{disableElevation:!0},styleOverrides:{sizeLarge:{padding:"1rem 1.25rem",...e.typography.body1,lineHeight:21/16,fontWeight:700},containedPrimary:{backgroundColor:e.palette.primary[500],color:"#fff"}},variants:[{props:{variant:"code"},style:{color:"dark"===e.palette.mode?e.palette.grey[400]:e.palette.grey[800],border:"1px solid",borderColor:"dark"===e.palette.mode?e.palette.primaryDark[400]:e.palette.grey[200],backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[700]:e.palette.grey[50],fontFamily:e.typography.fontFamilyCode,"&:hover, &.Mui-focusVisible":{borderColor:e.palette.primary.main,backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[500]:e.palette.primary[50],"& .MuiButton-endIcon":{color:"dark"===e.palette.mode?e.palette.primary[300]:e.palette.primary.main}},"& .MuiButton-startIcon":{color:e.palette.grey[400]},"& .MuiButton-endIcon":{color:"dark"===e.palette.mode?e.palette.grey[400]:e.palette.grey[700]}}},{props:{variant:"code",size:"large"},style:{...e.typography.body2,fontFamily:e.typography.fontFamilyCode,fontWeight:e.typography.fontWeightBold}}]},MuiContainer:{styleOverrides:{root:{[e.breakpoints.up("md")]:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}}}},MuiDivider:{styleOverrides:{root:{borderColor:"dark"===e.palette.mode?e.palette.primaryDark[700]:e.palette.grey[100]}}},MuiLink:{defaultProps:{underline:"none"},styleOverrides:{root:{color:"dark"===e.palette.mode?e.palette.primary[400]:e.palette.primary[600],fontWeight:600,display:"inline-flex",alignItems:"center","&.MuiTypography-body1 > svg":{marginTop:2},"& svg:last-child":{marginLeft:2}}}},MuiTab:{defaultProps:{disableTouchRipple:!0}},MuiPaper:{styleOverrides:{root:{"&[href]":{textDecorationLine:"none"}},outlined:{display:"block",borderColor:"dark"===e.palette.mode?e.palette.primaryDark[400]:e.palette.grey[100],..."dark"===e.palette.mode&&{backgroundColor:e.palette.primaryDark[700]},"a&, button&":{"&:hover":{boxShadow:"1px 1px 20px 0 rgb(90 105 120 / 20%)"}}}}},MuiTableCell:{styleOverrides:{root:{padding:e.spacing(1,2),borderColor:e.palette.divider},head:{color:e.palette.text.primary,fontWeight:600},body:{color:e.palette.text.secondary}}},MuiToggleButtonGroup:{styleOverrides:{root:{backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[800]:"#fff"}}},MuiToggleButton:{styleOverrides:{root:{textTransform:"none",fontWeight:600,color:"dark"===e.palette.mode?e.palette.grey[300]:e.palette.grey[700],borderColor:"dark"===e.palette.mode?e.palette.primaryDark[500]:e.palette.grey[200],"&.Mui-selected":{borderColor:`${e.palette.primary[500]} !important`,color:"dark"===e.palette.mode?"#fff":e.palette.primary[500],backgroundColor:"dark"===e.palette.mode?e.palette.primary[800]:e.palette.primaryDark[50]}}}},MuiSwitch:{styleOverrides:{root:{width:32,height:20,padding:0},switchBase:{height:20,width:20,padding:0,color:"#fff","&.Mui-checked + .MuiSwitch-track":{opacity:1},"&.Mui-checked":{transform:"translateX(11px)",color:"#fff"}},track:{opacity:1,borderRadius:32,backgroundColor:"dark"===e.palette.mode?e.palette.grey[800]:e.palette.grey[400]},thumb:{flexShrink:0,width:"14px",height:"14px"}}}}}}i(S("dark"));const A={track:"#2b2b2b",thumb:"#6b6b6b",active:"#959595"};function P(e=A){return{scrollbarColor:`${e.thumb} ${e.track}`,"&::-webkit-scrollbar, & *::-webkit-scrollbar":{backgroundColor:e.track},"&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb":{borderRadius:8,backgroundColor:e.thumb,minHeight:24,border:`3px solid ${e.track}`},"&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":{backgroundColor:e.active},"&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":{backgroundColor:e.active},"&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":{backgroundColor:e.active},"&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner":{backgroundColor:e.track}}}const T={components:{MuiButton:{defaultProps:{size:"small"}},MuiFilledInput:{defaultProps:{margin:"dense"}},MuiFormControl:{defaultProps:{margin:"dense"}},MuiFormHelperText:{defaultProps:{margin:"dense"}},MuiIconButton:{defaultProps:{size:"small"},styleOverrides:{sizeSmall:{marginLeft:4,marginRight:4,padding:12}}},MuiInputBase:{defaultProps:{margin:"dense"}},MuiInputLabel:{defaultProps:{margin:"dense"}},MuiListItem:{defaultProps:{dense:!0}},MuiOutlinedInput:{defaultProps:{margin:"dense"}},MuiFab:{defaultProps:{size:"small"}},MuiTable:{defaultProps:{size:"small"}},MuiTextField:{defaultProps:{margin:"dense"}},MuiToolbar:{defaultProps:{variant:"dense"}}}};function O(e){return null!==e&&"object"==typeof e&&e.constructor===Object}const z=(e,t,r={clone:!0})=>{const o=r.clone?{...e}:e;return c(e)&&c(t)&&Object.keys(t).forEach((a=>{"__proto__"!==a&&(c(t[a])&&a in e&&c(e[a])?o[a]=z(e[a],t[a],r):o[a]=t[a])})),o},R=(e="function")=>{if("undefined"==typeof document)throw new Error(e+" is not supported on the server.")},j=e=>{R("getCookie");const t=document.cookie.split(/;\s*/);for(let r=0;r<t.length;r++){const[o,a]=t[r].split("=");if(unescape(o)===e)return unescape(a)}},I=(e,t,r)=>{R("setCookie"),r||(r={});let o=escape(e)+"="+escape(t);return r.expires&&(o+="; expires="+r.expires),r.maxAge&&(o+="; max-age="+r.maxAge),r.path&&(o+="; path="+escape(r.path)),r.domain&&(o+="; domain="+escape(r.domain)),r.secure&&(o+="; secure"),document.cookie=o,o};export{g as Center,b as Layout,y as OutlinedIconButton,F as ThemeProvider,P as darkScrollbar,z as deepmerge,j as getCookie,S as getDesignTokens,D as getMetaThemeColor,M as getThemedComponents,T as highDensity,O as isPlaintObject,I as setCookie,x as useChangeTheme,k as usePrefersDark};
