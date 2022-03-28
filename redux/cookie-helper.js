import cookie from "js-cookie";

/**
 * cookie helper methods
 */

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: "/",
    });
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

const getCookieFromBrowser = (key) => {
  return cookie.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split("=")[1];
};

// check if the page is being loaded on the server, and if so, get auth token from the cookie
export const checkServerSideCookie = (ctx) => {
  if (ctx.isServer) {
    if (ctx.req.headers.cookie) {
      const token = getCookie("token", ctx.req);
      ctx.store.dispatch(reauthenticate(token, user));
    }
  } else {
    const token = ctx.store.getState().authentication.token;

    if (
      token &&
      user &&
      (ctx.pathname === "/login" || ctx.pathname === "/register")
    ) {
      setTimeout(function () {
        Router.push("/");
      }, 0);
    }
  }
};
