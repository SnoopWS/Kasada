// reconstructed Kasada clean version
function read(object, key) {
  try {
    return object == null ? undefined : object[key];
  } catch {
    return undefined;
  }
}

function call(object, key, ...args) {
  const method = read(object, key);
  try {
    return typeof method === "function" ? method.apply(object, args) : undefined;
  } catch {
    return undefined;
  }
}

function primitive(value) {
  return value == null || ["string", "number", "boolean"].includes(typeof value)
    ? value
    : undefined;
}

function list(value, fields) {
  try {
    return Array.from(value ?? []).slice(0, 32).map((entry) =>
      Object.fromEntries(fields.map((field) => [field, primitive(read(entry, field))])),
    );
  } catch {
    return [];
  }
}

export function collectNavigatorChecks(windowLike) {
  const navigatorLike = read(windowLike, "navigator");
  const userAgent = primitive(read(navigatorLike, "userAgent")) ?? "";
  let names = [];
  try { names = Object.getOwnPropertyNames(windowLike); } catch {}

  return {
    userAgent,
    platform: primitive(read(navigatorLike, "platform")),
    vendor: primitive(read(navigatorLike, "vendor")),
    language: primitive(read(navigatorLike, "language")),
    languages: (() => { try { return Array.from(read(navigatorLike, "languages") ?? []); } catch { return []; } })(),
    webdriver: primitive(read(navigatorLike, "webdriver")),
    hardwareConcurrency: primitive(read(navigatorLike, "hardwareConcurrency")),
    deviceMemory: primitive(read(navigatorLike, "deviceMemory")),
    maxTouchPoints: primitive(read(navigatorLike, "maxTouchPoints")),
    plugins: list(read(navigatorLike, "plugins"), ["name", "filename", "description"]),
    mimeTypes: list(read(navigatorLike, "mimeTypes"), ["type", "description"]),
    userAgentData: read(navigatorLike, "userAgentData")
      ? {
          brands: list(read(read(navigatorLike, "userAgentData"), "brands"), ["brand", "version"]),
          mobile: primitive(read(read(navigatorLike, "userAgentData"), "mobile")),
          platform: primitive(read(read(navigatorLike, "userAgentData"), "platform")),
        }
      : undefined,
    headlessChrome: userAgent.includes("HeadlessChrome/"),
    phantomJs: userAgent.includes("PhantomJS/"),
    playwrightGlobals: names.filter((name) => /^__playwright|^__pw/i.test(name)).sort(),
  };
}

export function collectScreenChecks(windowLike) {
  const screen = read(windowLike, "screen");
  return {
    innerWidth: primitive(read(windowLike, "innerWidth")),
    innerHeight: primitive(read(windowLike, "innerHeight")),
    outerWidth: primitive(read(windowLike, "outerWidth")),
    outerHeight: primitive(read(windowLike, "outerHeight")),
    devicePixelRatio: primitive(read(windowLike, "devicePixelRatio")),
    screenX: primitive(read(windowLike, "screenX")),
    screenY: primitive(read(windowLike, "screenY")),
    width: primitive(read(screen, "width")),
    height: primitive(read(screen, "height")),
    availWidth: primitive(read(screen, "availWidth")),
    availHeight: primitive(read(screen, "availHeight")),
    colorDepth: primitive(read(screen, "colorDepth")),
    pixelDepth: primitive(read(screen, "pixelDepth")),
  };
}

export function collectCanvasAndWebGlChecks(windowLike) {
  const canvas = call(read(windowLike, "document"), "createElement", "canvas");
  const twoD = call(canvas, "getContext", "2d");
  const webgl = call(canvas, "getContext", "webgl2")
    ?? call(canvas, "getContext", "webgl")
    ?? call(canvas, "getContext", "experimental-webgl");
  const extension = call(webgl, "getExtension", "WEBGL_debug_renderer_info");
  const vendorToken = read(extension, "UNMASKED_VENDOR_WEBGL");
  const rendererToken = read(extension, "UNMASKED_RENDERER_WEBGL");
  return {
    canvas: Boolean(canvas),
    twoD: Boolean(twoD),
    webgl: Boolean(webgl),
    webglAttributes: call(webgl, "getContextAttributes"),
    webglVendor: vendorToken === undefined ? undefined : primitive(call(webgl, "getParameter", vendorToken)),
    webglRenderer: rendererToken === undefined ? undefined : primitive(call(webgl, "getParameter", rendererToken)),
  };
}

export function collectMediaAndTimingChecks(windowLike) {
  const audio = call(read(windowLike, "document"), "createElement", "audio");
  const performance = read(windowLike, "performance");
  return {
    audioWebm: primitive(call(audio, "canPlayType", "audio/webm")),
    audioOpus: primitive(call(audio, "canPlayType", "audio/webm;codecs=opus")),
    rtcPeerConnection: typeof read(windowLike, "RTCPeerConnection") === "function",
    performanceNow: primitive(call(performance, "now")),
    timeOrigin: primitive(read(performance, "timeOrigin")),
    requestAnimationFrame: typeof read(windowLike, "requestAnimationFrame") === "function",
  };
}

export function collectBotChecks(windowLike) {
  return {
    navigator: collectNavigatorChecks(windowLike),
    screen: collectScreenChecks(windowLike),
    canvasAndWebgl: collectCanvasAndWebGlChecks(windowLike),
    mediaAndTiming: collectMediaAndTimingChecks(windowLike),
  };
}
