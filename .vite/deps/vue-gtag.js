import {
  isFunction,
  isPlainObject,
  nextTick
} from "./chunk-MXA35QX2.js";

// node_modules/vue-gtag/dist/vue-gtag.esm.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var load = function load2(url) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return new Promise(function(resolve, reject) {
    if (typeof document === "undefined") {
      return;
    }
    var head = document.head || document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.async = true;
    script.src = url;
    script.defer = options.defer;
    if (options.preconnectOrigin) {
      var link = document.createElement("link");
      link.href = options.preconnectOrigin;
      link.rel = "preconnect";
      head.appendChild(link);
    }
    head.appendChild(script);
    script.onload = resolve;
    script.onerror = reject;
  });
};
var mergeDeep = function mergeDeep2(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  if (!sources.length) {
    return target;
  }
  var source = sources.shift();
  if (!isPlainObject(target) || !isPlainObject(source)) {
    return;
  }
  for (var key in source) {
    if (isPlainObject(source[key])) {
      if (!target[key]) {
        Object.assign(target, _defineProperty({}, key, {}));
      }
      mergeDeep2(target[key], source[key]);
    } else {
      Object.assign(target, _defineProperty({}, key, source[key]));
    }
  }
  return mergeDeep2.apply(void 0, [target].concat(sources));
};
var isBrowser = function isBrowser2() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }
  return true;
};
var warn = function warn2(text) {
  var shouldLog = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (!isBrowser() || false) {
    return;
  }
  if (!shouldLog) {
    return;
  }
  console.warn("[vue-gtag] ".concat(text));
};
var validateScreenviewShape = function validateScreenviewShape2() {
  var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  warn('Missing "appName" property inside the plugin options.', obj.app_name == null);
  warn('Missing "name" property in the route.', obj.screen_name == null);
  return obj;
};
function getPathWithBase() {
  var path = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var base = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var pathAsArray = path.split("/");
  var baseAsArray = base.split("/");
  if (pathAsArray[0] === "" && base[base.length - 1] === "/") {
    pathAsArray.shift();
  }
  return baseAsArray.join("/") + pathAsArray.join("/");
}
var getDefaultParams = function getDefaultParams2() {
  return {
    bootstrap: true,
    onReady: null,
    onError: null,
    onBeforeTrack: null,
    onAfterTrack: null,
    pageTrackerTemplate: null,
    customResourceURL: "https://www.googletagmanager.com/gtag/js",
    customPreconnectOrigin: "https://www.googletagmanager.com",
    deferScriptLoad: false,
    pageTrackerExcludedRoutes: [],
    pageTrackerEnabled: true,
    enabled: true,
    disableScriptLoad: false,
    pageTrackerScreenviewEnabled: false,
    appName: null,
    pageTrackerUseFullPath: false,
    pageTrackerPrependBase: true,
    pageTrackerSkipSamePath: true,
    globalDataLayerName: "dataLayer",
    globalObjectName: "gtag",
    defaultGroupName: "default",
    includes: null,
    config: {
      id: null,
      params: {
        send_page_view: false
      }
    }
  };
};
var params = {};
var setOptions = function setOptions2() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var defaultParams = getDefaultParams();
  params = mergeDeep(defaultParams, options);
};
var getOptions = function getOptions2() {
  return params;
};
var query = function() {
  var _window;
  var _getOptions = getOptions(), globalObjectName = _getOptions.globalObjectName;
  if (!isBrowser() || typeof window[globalObjectName] === "undefined") {
    return;
  }
  (_window = window)[globalObjectName].apply(_window, arguments);
};
var config = function() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var _getOptions = getOptions(), config2 = _getOptions.config, includes = _getOptions.includes;
  query.apply(void 0, ["config", config2.id].concat(args));
  if (Array.isArray(includes)) {
    includes.forEach(function(domain) {
      query.apply(void 0, ["config", domain.id].concat(args));
    });
  }
};
var assignGlobalProperty = function assignGlobalProperty2(id, value) {
  if (!isBrowser()) {
    return;
  }
  window["ga-disable-".concat(id)] = value;
};
var disable = function() {
  var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  var _getOptions = getOptions(), config2 = _getOptions.config, includes = _getOptions.includes;
  assignGlobalProperty(config2.id, value);
  if (Array.isArray(includes)) {
    includes.forEach(function(domain) {
      return assignGlobalProperty(domain.id, value);
    });
  }
};
var optOut = function() {
  disable(true);
};
var optIn = function() {
  disable(false);
};
var router;
var setRouter = function setRouter2(instance) {
  router = instance;
};
var getRouter = function getRouter2() {
  return router;
};
var event = function(name) {
  var params2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _getOptions = getOptions(), includes = _getOptions.includes, defaultGroupName = _getOptions.defaultGroupName;
  if (params2.send_to == null && Array.isArray(includes) && includes.length) {
    params2.send_to = includes.map(function(domain) {
      return domain.id;
    }).concat(defaultGroupName);
  }
  query("event", name, params2);
};
var pageview = function(param) {
  if (!isBrowser()) {
    return;
  }
  var template;
  if (typeof param === "string") {
    template = {
      page_path: param
    };
  } else if (param.path || param.fullPath) {
    var _getOptions = getOptions(), useFullPath = _getOptions.pageTrackerUseFullPath, useBase = _getOptions.pageTrackerPrependBase;
    var router2 = getRouter();
    var base = router2 && router2.options.base;
    var path = useFullPath ? param.fullPath : param.path;
    template = _objectSpread2(_objectSpread2({}, param.name && {
      page_title: param.name
    }), {}, {
      page_path: useBase ? getPathWithBase(path, base) : path
    });
  } else {
    template = param;
  }
  if (template.page_location == null) {
    template.page_location = window.location.href;
  }
  if (template.send_page_view == null) {
    template.send_page_view = true;
  }
  event("page_view", template);
};
var screenview = function(param) {
  var _getOptions = getOptions(), appName = _getOptions.appName;
  if (!param) {
    return;
  }
  var template;
  if (typeof param === "string") {
    template = {
      screen_name: param
    };
  } else {
    template = param;
  }
  template.app_name = template.app_name || appName;
  event("screen_view", template);
};
var exception = function() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  event.apply(void 0, ["exception"].concat(args));
};
var linker = function(params2) {
  config("linker", params2);
};
var time = function(params2) {
  event("timing_complete", params2);
};
var set = function() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  query.apply(void 0, ["set"].concat(args));
};
var refund = function() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  event.apply(void 0, ["refund"].concat(args));
};
var purchase = function(params2) {
  event("purchase", params2);
};
var customMap = function(map) {
  config({
    custom_map: map
  });
};
var api = Object.freeze({
  __proto__: null,
  query,
  config,
  optOut,
  optIn,
  pageview,
  screenview,
  exception,
  linker,
  time,
  set,
  refund,
  purchase,
  customMap,
  event
});
var attachApi = function attachApi2(app) {
  app.config.globalProperties.$gtag = api;
};
var registerGlobals = function() {
  if (!isBrowser()) {
    return;
  }
  var _getOptions = getOptions(), enabled = _getOptions.enabled, globalObjectName = _getOptions.globalObjectName, globalDataLayerName = _getOptions.globalDataLayerName;
  if (window[globalObjectName] == null) {
    window[globalDataLayerName] = window[globalDataLayerName] || [];
    window[globalObjectName] = function() {
      window[globalDataLayerName].push(arguments);
    };
  }
  window[globalObjectName]("js", /* @__PURE__ */ new Date());
  if (!enabled) {
    optOut();
  }
  return window[globalObjectName];
};
var mergeDefaultParams = function mergeDefaultParams2(params2) {
  return _objectSpread2({
    send_page_view: false
  }, params2);
};
var addConfiguration = function() {
  var _getOptions = getOptions(), config2 = _getOptions.config, includes = _getOptions.includes;
  query("config", config2.id, mergeDefaultParams(config2.params));
  if (Array.isArray(includes)) {
    includes.forEach(function(domain) {
      query("config", domain.id, mergeDefaultParams(domain.params));
    });
  }
};
var track = function() {
  var to = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _getOptions = getOptions(), appName = _getOptions.appName, proxy = _getOptions.pageTrackerTemplate, useScreenview = _getOptions.pageTrackerScreenviewEnabled, skipSamePath = _getOptions.pageTrackerSkipSamePath;
  if (skipSamePath && to.path === from.path) {
    return;
  }
  var template = to;
  if (isFunction(proxy)) {
    template = proxy(to, from);
  } else if (useScreenview) {
    template = validateScreenviewShape({
      app_name: appName,
      screen_name: to.name
    });
  }
  if (useScreenview) {
    screenview(template);
    return;
  }
  pageview(template);
};
var isRouteExcluded = function isRouteExcluded2(route) {
  var _getOptions = getOptions(), routes = _getOptions.pageTrackerExcludedRoutes;
  return routes.includes(route.path) || routes.includes(route.name);
};
var addRoutesTracker = function() {
  var _getOptions2 = getOptions(), onBeforeTrack = _getOptions2.onBeforeTrack, onAfterTrack = _getOptions2.onAfterTrack;
  var router2 = getRouter();
  router2.isReady().then(function() {
    nextTick().then(function() {
      var currentRoute = router2.currentRoute;
      addConfiguration();
      if (isRouteExcluded(currentRoute.value)) {
        return;
      }
      track(currentRoute.value);
    });
    router2.afterEach(function(to, from) {
      nextTick().then(function() {
        if (isRouteExcluded(to)) {
          return;
        }
        if (isFunction(onBeforeTrack)) {
          onBeforeTrack(to, from);
        }
        track(to, from);
        if (isFunction(onAfterTrack)) {
          onAfterTrack(to, from);
        }
      });
    });
  });
};
var bootstrap = function() {
  var _getOptions = getOptions(), onReady = _getOptions.onReady, onError = _getOptions.onError, globalObjectName = _getOptions.globalObjectName, globalDataLayerName = _getOptions.globalDataLayerName, config2 = _getOptions.config, customResourceURL = _getOptions.customResourceURL, customPreconnectOrigin = _getOptions.customPreconnectOrigin, deferScriptLoad = _getOptions.deferScriptLoad, pageTrackerEnabled = _getOptions.pageTrackerEnabled, disableScriptLoad = _getOptions.disableScriptLoad;
  var isPageTrackerEnabled = Boolean(pageTrackerEnabled && getRouter());
  registerGlobals();
  if (isPageTrackerEnabled) {
    addRoutesTracker();
  } else {
    addConfiguration();
  }
  if (disableScriptLoad) {
    return;
  }
  return load("".concat(customResourceURL, "?id=").concat(config2.id, "&l=").concat(globalDataLayerName), {
    preconnectOrigin: customPreconnectOrigin,
    defer: deferScriptLoad
  }).then(function() {
    if (onReady) {
      onReady(window[globalObjectName]);
    }
  })["catch"](function(error) {
    if (onError) {
      onError(error);
    }
    return error;
  });
};
var install = function install2(app) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var router2 = arguments.length > 2 ? arguments[2] : void 0;
  attachApi(app);
  setOptions(options);
  setRouter(router2);
  if (getOptions().bootstrap) {
    bootstrap();
  }
};
var vue_gtag_esm_default = install;
export {
  addRoutesTracker,
  bootstrap,
  config,
  customMap,
  vue_gtag_esm_default as default,
  event,
  exception,
  install,
  linker,
  optIn,
  optOut,
  pageview,
  purchase,
  query,
  refund,
  screenview,
  set,
  setOptions,
  setRouter,
  time
};
//# sourceMappingURL=vue-gtag.js.map
