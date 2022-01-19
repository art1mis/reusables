const ifServer = (name = "function") => {
  if (typeof document === "undefined") {
    throw new Error(name + " is not supported on the server.");
  }
};

export const getCookie = (key) => {
  ifServer("getCookie");
  const cookies = document.cookie.split(/;\s*/);
  for (let i = 0; i < cookies.length; i++) {
    const [k, value] = cookies[i].split("=");
    if (unescape(k) === key) return unescape(value);
  }
};

export const setCookie = (key, value, opts) => {
  ifServer("setCookie");
  if (!opts) opts = {};
  let s = escape(key) + "=" + escape(value);
  if (opts.expires) s += "; expires=" + opts.expires;
  if (opts.maxAge) s += "; max-age=" + opts.maxAge;
  if (opts.path) s += "; path=" + escape(opts.path);
  if (opts.domain) s += "; domain=" + escape(opts.domain);
  if (opts.secure) s += "; secure";
  document.cookie = s;
  return s;
};
