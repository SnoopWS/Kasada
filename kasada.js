// Kasada p.js - reconstruction
// Note this took a while to deobfuscate 
// Kasada is a central VM which each VM state is a register array
// It was represented as sometihng like state.l
// Important slots includs [0,1,2,3,4++] in their state
// VM performs const result on the state read value write register current frame host
// objects and runtime helps
// The dispatch loop selects a decoded handler using the current virtual program counter
// and invokes it with the value decoder register writer scope accesor and runtime helpers
// The handlers themselves implement things simillar to result = left + right, result
// = object[property] result = fn(arg) jump(target) 
// these contain handlers for arthimetic comparsion calls property access lexical bindings jumps
// execution handling function creation etc
// some handlers are simple but many of them are fused super insturcitons that perform
// several operations at once t hat makes it harder to assign one clean opcode name to
// every handler. It is stored as bytecode the VM program is embeded with encoded strings
// At startup it derives a time bukcet dependent decoding candidate applies a custom variable
// length integer decoding and verifies an integrity hash - and produces a large integer instruction
// stream. Seperates or references a pool string region. The decoder includes a time derived
// Seed and an FNV-1a like integrity calculation before accepting the decoded stream.
// It also uses tagged values operands use their low bits as type tags.
// The Opcodes themselves were also hidden as it does lazy handler decoding. The handler
// Table was implemented through a proxy when the VM request a handler for the first time
// the wrapper retrieved and encoded handler source string decoded it and compiled it with new function
// cached the resulting javascript function.

"use strict";

/** @typedef {{domain?: string, path: string, method?: string, caseSensitiveMatch?: boolean}} EndpointDefinition */
/** @typedef {{domain: string, pathPattern: string, methodPattern: string, caseSensitive: boolean}} CompiledEndpointMatcher */
/** @typedef {{endpoints?: EndpointDefinition[], resourceAddress?: string}} EndpointConfiguration */
/** @typedef {{window: Window, interceptData: unknown, input: RequestInfo|URL, init?: RequestInit}} RequestInterceptContext */
/** @typedef {{configurationPayload: string, timingVersion: string, retryAfter?: number}} RemoteConfigurationResponse */
/** @typedef {{systemTimes?: unknown, contexts?: Object<string, unknown>}} RuntimeContextRecord */
/** @typedef {{currentState: unknown, allowedTransitions: Object<string, unknown[]>, waitQueues: Object<string, Function[]>, readyEventDispatched: boolean}} ObservableClientStateShape */

class SdkErrorReporter {
  constructor(...args) {
    const constructed = Reflect.construct(initializeSdkErrorReporter, args, new.target);
    return constructed;
  }
  setEndpointPrefix(...args) {
    return setEndpointPrefix.apply(this, args);
  }
  bindCallback(...args) {
    return bindCallback.apply(this, args);
  }
  executeWithReporting(...args) {
    return executeWithReporting.apply(this, args);
  }
  report(...args) {
    return report.apply(this, args);
  }
  encodePayload(...args) {
    return encodePayload.apply(this, args);
  }
}

class BufferedLifecycleLogger {
  constructor(...args) {
    const constructed = Reflect.construct(initializeBufferedLifecycleLogger, args, new.target);
    return constructed;
  }
  enqueue(...args) {
    return enqueue.apply(this, args);
  }
  scheduleFlush(...args) {
    return scheduleFlush.apply(this, args);
  }
  flush(...args) {
    return flush.apply(this, args);
  }
  normalizeAndBuffer(...args) {
    return normalizeAndBuffer.apply(this, args);
  }
  flushOnPageHide(...args) {
    return flushOnPageHide.apply(this, args);
  }
}

class SdkLogger {
  constructor(...args) {
    const constructed = Reflect.construct(initializeSdkLogger, args, new.target);
    return constructed;
  }
  normalizeRecord(...args) {
    return normalizeRecord.apply(this, args);
  }
  initialize(...args) {
    return initialize.apply(this, args);
  }
  verbose(...args) {
    return verbose.apply(this, args);
  }
  info(...args) {
    return info.apply(this, args);
  }
  warning(...args) {
    return warning.apply(this, args);
  }
  error(...args) {
    return error.apply(this, args);
  }
  critical(...args) {
    return critical.apply(this, args);
  }
  sendBatch(...args) {
    return sendBatch.apply(this, args);
  }
  postBatch(...args) {
    return postBatch.apply(this, args);
  }
  sendBeaconBatch(...args) {
    return sendBeaconBatch.apply(this, args);
  }
  createRecord(...args) {
    return createRecord.apply(this, args);
  }
  appendStartupRecord(...args) {
    return appendStartupRecord.apply(this, args);
  }
  emit(...args) {
    return emit.apply(this, args);
  }
}

class SdkDiagnosticError extends Error {
  constructor(...args) {
    const constructed = Reflect.construct(initializeSdkDiagnosticError, args, new.target);
    return constructed;
  }
}

class PerformanceTimeline {
  constructor(...args) {
    const constructed = Reflect.construct(initializePerformanceTimeline, args, new.target);
    return constructed;
  }
  start(...args) {
    return start.apply(this, args);
  }
  record(...args) {
    return record.apply(this, args);
  }
  getEntries(...args) {
    return getEntries.apply(this, args);
  }
}

class DeferredReadySignal {
  constructor(...args) {
    const constructed = Reflect.construct(initializeDeferredReadySignal, args, new.target);
    return constructed;
  }
  scheduleTimeout(...args) {
    return scheduleTimeout.apply(this, args);
  }
  resolve(...args) {
    return resolve.apply(this, args);
  }
}

class RemoteFrameContextManager {
  constructor(...args) {
    const constructed = Reflect.construct(initializeRemoteFrameContextManager, args, new.target);
    return constructed;
  }
  initialize(...args) {
    return initialize2.apply(this, args);
  }
  markReady(...args) {
    return markReady.apply(this, args);
  }
  configureFrames(...args) {
    return configureFrames.apply(this, args);
  }
  reportTimeouts(...args) {
    return reportTimeouts.apply(this, args);
  }
  loadContext(...args) {
    return loadContext.apply(this, args);
  }
  attachFrame(...args) {
    return attachFrame.apply(this, args);
  }
  removeFrame(...args) {
    return removeFrame.apply(this, args);
  }
  validateMessage(...args) {
    return validateMessage.apply(this, args);
  }
  buildContext(...args) {
    return buildContext.apply(this, args);
  }
  postMessage(...args) {
    return postMessage.apply(this, args);
  }
  resolveOrigin(...args) {
    return resolveOrigin.apply(this, args);
  }
  collectNavigatorIdentity(...args) {
    return collectNavigatorIdentity.apply(this, args);
  }
  handleMessage(...args) {
    return handleMessage.apply(this, args);
  }
  collectSignals(...args) {
    return collectSignals.apply(this, args);
  }
}

class RuntimeContextRegistry {
  constructor(...args) {
    const constructed = Reflect.construct(initializeRuntimeContextRegistry, args, new.target);
    return constructed;
  }
  initializeProtectedState(...args) {
    return initializeProtectedState.apply(this, args);
  }
  allReady(...args) {
    return allReady.apply(this, args);
  }
  get(...args) {
    return get.apply(this, args);
  }
  setProtectedState(...args) {
    return setProtectedState.apply(this, args);
  }
  publish(...args) {
    return publish.apply(this, args);
  }
  validate(...args) {
    return validate.apply(this, args);
  }
  installVisibilityHook(...args) {
    return installVisibilityHook.apply(this, args);
  }
  scheduleTimer(...args) {
    return scheduleTimer.apply(this, args);
  }
  update(...args) {
    return update.apply(this, args);
  }
}

class ObservableClientState {
  constructor(...args) {
    const constructed = Reflect.construct(initializeObservableClientState, args, new.target);
    return constructed;
  }
  getState(...args) {
    return getState.apply(this, args);
  }
  isOneOf(...args) {
    return isOneOf.apply(this, args);
  }
  waitFor(...args) {
    return waitFor.apply(this, args);
  }
  transition(...args) {
    return transition.apply(this, args);
  }
  dispatchEvent(...args) {
    return dispatchEvent.apply(this, args);
  }
}

class SdkRuntimeController {
  constructor(...args) {
    const constructed = Reflect.construct(initializeSdkRuntimeController, args, new.target);
    return constructed;
  }
  load(...args) {
    return load.apply(this, args);
  }
  isStarted(...args) {
    return isStarted.apply(this, args);
  }
  configureContext(...args) {
    return configureContext.apply(this, args);
  }
  getProtectedState(...args) {
    return getProtectedState.apply(this, args);
  }
  resolveEndpointContext(...args) {
    return resolveEndpointContext.apply(this, args);
  }
  resolveHost(...args) {
    return resolveHost.apply(this, args);
  }
  waitForOperational(...args) {
    return waitForOperational.apply(this, args);
  }
  normalizeInput(...args) {
    return normalizeInput.apply(this, args);
  }
  submit(...args) {
    return submit.apply(this, args);
  }
  setProtectedStateA(...args) {
    return setProtectedStateA.apply(this, args);
  }
  setProtectedStateB(...args) {
    return setProtectedStateB.apply(this, args);
  }
  enterLoading(...args) {
    return enterLoading.apply(this, args);
  }
  enterReady(...args) {
    return enterReady.apply(this, args);
  }
  handleConfiguration(...args) {
    return handleConfiguration.apply(this, args);
  }
  createStartupTask(...args) {
    return createStartupTask.apply(this, args);
  }
  applyOverrides(...args) {
    return applyOverrides.apply(this, args);
  }
}

class KpsdkClient {
  constructor(...args) {
    const constructed = Reflect.construct(initializeKpsdkClient, args, new.target);
    return constructed;
  }
  isReady(...args) {
    return isReady.apply(this, args);
  }
  configure(...args) {
    return configure.apply(this, args);
  }
  applyEndpointConfiguration(...args) {
    return applyEndpointConfiguration.apply(this, args);
  }
}


function createAsyncGeneratorPromise() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue5;
  let localState1, localState2;

  localState1 = undefined;
  localState2 = undefined;
  temporaryValue1 = this;
  localState1 = temporaryValue1;
  localState2 = arguments;
  temporaryValue3 = Promise;
  temporaryValue1 = new Array(1);
  temporaryValue5 = function (nestedParameter0, nestedParameter1) { return runAsyncGeneratorExecutor.apply(this, arguments); };
  temporaryValue1[0] = temporaryValue5;
  temporaryValue2 = Reflect.construct(temporaryValue3, temporaryValue1);
  return temporaryValue2;
}

function runAsyncGeneratorExecutor(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue7;
  let localState1, resumeGeneratorNext, resumeGeneratorThrow, capturedPromiseImplementation, resolvePromise, rejectPromise;

  localState1 = undefined;
  resumeGeneratorNext = undefined;
  resumeGeneratorThrow = undefined;
  temporaryValue1 = function (parameter0) { return resumeGeneratorNext.apply(this, arguments); };
  resumeGeneratorNext = temporaryValue1;
  temporaryValue2 = function (parameter0) { return resumeGeneratorThrow.apply(this, arguments); };
  resumeGeneratorThrow = temporaryValue2;
  temporaryValue1 = capturedPromiseImplementation;
  temporaryValue3 = temporaryValue1.apply;
  temporaryValue2 = resolvePromise;
  temporaryValue5 = [undefined, undefined];
  temporaryValue5[0] = temporaryValue2;
  temporaryValue5[1] = rejectPromise;
  temporaryValue4 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue5);
  localState1 = temporaryValue4;
  temporaryValue2 = resumeGeneratorNext;
  temporaryValue3 = undefined;
  temporaryValue1 = temporaryValue2(temporaryValue3);
  return undefined;
}

function resumeGeneratorNext(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4;
  let generatorArguments, generatorFunction, generatorThis, resumeGeneratorNext, resumeGeneratorThrow;

  temporaryValue2 = generatorArguments;
  temporaryValue4 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined];
  temporaryValue4[0] = temporaryValue2;
  temporaryValue2 = generatorFunction;
  temporaryValue4[1] = temporaryValue2;
  temporaryValue2 = generatorThis;
  temporaryValue4[2] = temporaryValue2;
  temporaryValue2 = resumeGeneratorNext;
  temporaryValue4[3] = temporaryValue2;
  temporaryValue2 = resumeGeneratorThrow;
  temporaryValue4[4] = temporaryValue2;
  temporaryValue4[5] = "next";
  temporaryValue2 = parameter0;
  temporaryValue4[6] = temporaryValue2;
  temporaryValue1 = Reflect.apply(asyncGeneratorStep, undefined, temporaryValue4);
  return undefined;
}

function resumeGeneratorThrow(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let generatorArguments, generatorFunction, generatorThis, resumeGeneratorNext, resumeGeneratorThrow;

  temporaryValue1 = generatorArguments;
  temporaryValue4 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined];
  temporaryValue4[0] = temporaryValue1;
  temporaryValue1 = generatorFunction;
  temporaryValue4[1] = temporaryValue1;
  temporaryValue1 = generatorThis;
  temporaryValue4[2] = temporaryValue1;
  temporaryValue1 = resumeGeneratorNext;
  temporaryValue4[3] = temporaryValue1;
  temporaryValue4[4] = resumeGeneratorThrow;
  temporaryValue4[5] = "throw";
  temporaryValue4[6] = parameter0;
  temporaryValue2 = Reflect.apply(asyncGeneratorStep, undefined, temporaryValue4);
  return undefined;
}

function createNativeSuperWrapper() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let createNativeSuperWrapperDependency;

  temporaryValue5 = this;
  temporaryValue4 = getPrototypeOf(temporaryValue5);
  temporaryValue5 = temporaryValue4.constructor;
  temporaryValue1 = construct(createNativeSuperWrapperDependency, arguments, temporaryValue5);
  return temporaryValue1;
}

function probeReflectConstruct() {
  return undefined;
}

function probeNativeConstructor() {
  let temporaryValue1, temporaryValue2;
  let localState1, capturedDependency;

  localState1 = currentFunction;
  temporaryValue1 = capturedDependency;
  temporaryValue1 = !!temporaryValue1;
  return temporaryValue1;
}

function setObjectPrototype(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;

  temporaryValue1 = parameter0;
  temporaryValue2 = parameter1;
  temporaryValue1.__proto__ = temporaryValue2;
  temporaryValue1 = parameter0;
  return temporaryValue1;
}

function copyEnumerableProperties(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue7, temporaryValue10;
  let capturedDependencyVariant1, capturedDependencyVariant2;

  temporaryValue1 = defineProperty(capturedDependencyVariant1, parameter0, capturedDependencyVariant2[parameter0]);
  return undefined;
}

function createIteratorAdapter() {
  let localState1;

  localState1 = currentFunction;
  return undefined;
}

function advanceIterator() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue8;
  let localState1, localState2, capturedDependency;

  localState1 = currentFunction;
  temporaryValue2 = localState2;
  temporaryValue1 = capturedDependency;
  temporaryValue3 = temporaryValue1.length;
  temporaryValue1 = temporaryValue2 >= temporaryValue3;
  if (temporaryValue1) {
    temporaryValue1 = {};
    temporaryValue2 = !0;
    temporaryValue1.done = temporaryValue2;
    temporaryValue3 = temporaryValue1;
  } else {
    temporaryValue1 = {};
    temporaryValue4 = !1;
    temporaryValue1.done = temporaryValue4;
    temporaryValue8 = localState2;
    temporaryValue2 = temporaryValue8;
    temporaryValue8 = temporaryValue8 + 1;
    localState2 = temporaryValue8;
    temporaryValue4 = capturedDependency[temporaryValue2];
    temporaryValue1.value = temporaryValue4;
    temporaryValue3 = temporaryValue1;
  }
  return temporaryValue3;
}

function handleIteratorError(parameter0) {
  let temporaryValue1 = parameter0;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = parameter0;
  throw temporaryValue1;
}

function startIterator() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, localState2, capturedDependency;

  localState1 = currentFunction;
  temporaryValue3 = localState2;
  temporaryValue1 = temporaryValue3.call(capturedDependency);
  localState2 = temporaryValue1;
  return undefined;
}

function readIteratorStep() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4;
  let localState1, localState2, capturedDependency, localState3;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue2 = capturedDependency;
  temporaryValue3 = temporaryValue2.next;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, []);
  localState2 = temporaryValue1;
  temporaryValue1 = localState2;
  temporaryValue2 = temporaryValue1.done;
  localState3 = temporaryValue2;
  temporaryValue3 = localState2;
  return temporaryValue3;
}

function captureIteratorError(parameter0) {
  let temporaryValue1 = parameter0;
  let localState1, localState2, localState3;

  localState1 = currentFunction;
  temporaryValue1 = !0;
  localState2 = temporaryValue1;
  temporaryValue1 = parameter0;
  localState3 = temporaryValue1;
  return undefined;
}

function closeIterator() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, closeIteratorDependencyVariant1, capturedDependency, localState2, localState3, closeIteratorDependencyVariant2, closeIteratorDependencyVariant3;

  localState1 = currentFunction;
  __catchTarget = 4524;
  __finallyTarget = 4524;
  temporaryValue4 = closeIteratorDependencyVariant1;
  if (!(temporaryValue4)) {
    temporaryValue1 = capturedDependency;
    temporaryValue2 = temporaryValue1.return;
    temporaryValue3 = null == temporaryValue2;
    temporaryValue4 = temporaryValue3;
  }
  if (!(temporaryValue4)) {
    temporaryValue2 = capturedDependency;
    temporaryValue3 = temporaryValue2.return;
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, []);
    temporaryValue4 = temporaryValue1;
  }
  __catchTarget = null;
  __finallyTarget = null;
  __savePendingException(242);
  __saveCompletion(243);
  temporaryValue1 = closeIteratorDependencyVariant2;
  if (temporaryValue1) {
    temporaryValue1 = closeIteratorDependencyVariant3;
    throw temporaryValue1;
  } else {
    __restoreSavedCompletion(243);
    __resumeUnwind(242);
    __catchTarget = null;
    return undefined;
  }
}

function xorStringWithRepeatingKey(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, inputLength;

  localState1 = undefined;
  inputLength = undefined;
  temporaryValue1 = arguments.length;
  temporaryValue3 = temporaryValue1 > 1;
  if (temporaryValue3) {
    temporaryValue1 = arguments[1];
    temporaryValue4 = globalThis.undefined;
    temporaryValue2 = temporaryValue1 !== temporaryValue4;
    temporaryValue3 = temporaryValue2;
  }
  if (temporaryValue3) {
    temporaryValue1 = arguments[1];
    temporaryValue2 = temporaryValue1;
  } else {
    temporaryValue2 = "c139db69-c5a0-413e-8b58-90785319bc49";
  }
  localState1 = temporaryValue2;
  temporaryValue1 = localState1;
  inputLength = temporaryValue1.length;
  temporaryValue2 = parameter0;
  temporaryValue3 = temporaryValue2.split;
  temporaryValue6 = [""];
  temporaryValue4 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue6);
  temporaryValue3 = temporaryValue4.reduce;
  temporaryValue6 = new Array(1);
  temporaryValue2 = function (parameter0, nestedParameter1, nestedParameter2) { return appendXorEncodedCharacter.apply(this, arguments); };
  temporaryValue6[0] = temporaryValue2;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue4, temporaryValue6);
  return temporaryValue1;
}

function normalizeError(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;

  temporaryValue1 = parameter0;
  temporaryValue2 = Error;
  temporaryValue3 = temporaryValue1 instanceof temporaryValue2;
  if (temporaryValue3) {
    temporaryValue2 = parameter0;
    temporaryValue1 = temporaryValue2;
  } else {
    temporaryValue2 = Error;
    temporaryValue5 = globalThis.String(parameter0);
    temporaryValue3 = new temporaryValue2(temporaryValue5);
    temporaryValue1 = temporaryValue3;
  }
  return temporaryValue1;
}

function readRequestHeaderValue() {
  let temporaryValue1, temporaryValue4;
  let getSdkRuntimeConfiguration;

  temporaryValue1 = getSdkRuntimeConfiguration;
  temporaryValue4 = temporaryValue1();
  temporaryValue1 = temporaryValue4.uxd;
  return temporaryValue1;
}

function decodeBase64UrlCharacter(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2;

  temporaryValue1 = parameter0;
  if (temporaryValue1 === "_") {
    temporaryValue1 = "/";
  } else {
    temporaryValue1 = "+";
  }
  return temporaryValue1;
}

function decodeOptionalConfigurationValue(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue9;
  let localState1, localState2, decodeEncodedBlob, localState3;

  localState1 = undefined;
  localState2 = undefined;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.egq;
  localState1 = temporaryValue2;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.kpd;
  localState2 = temporaryValue2;
  try {
    temporaryValue1 = localState1;
    if (temporaryValue1) {
      temporaryValue2 = localState2;
      temporaryValue1 = temporaryValue2;
    }
    if (temporaryValue1) {
      temporaryValue7 = localState2;
      temporaryValue5 = temporaryValue7.slice(2);
      temporaryValue4 = {  };
      temporaryValue4.zwq = temporaryValue5;
      temporaryValue5 = localState1;
      temporaryValue4.egq = temporaryValue5;
      temporaryValue1 = decodeEncodedBlob(temporaryValue4);
      temporaryValue2 = temporaryValue1;
    } else {
      temporaryValue1 = undefined;
      temporaryValue2 = temporaryValue1;
    }
    return temporaryValue2;
  } catch (error) {
    localState3 = error;
    temporaryValue1 = undefined;
    return temporaryValue1;
  }
  return undefined;
}

function parseKpsdkMarkerMessage(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue7;
  let localState1, localState2, localState3, markerMessageHandlers;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue1 = parameter0;
  temporaryValue4 = typeof temporaryValue1;
  temporaryValue1 = temporaryValue4 !== "string";
  if (!(temporaryValue1)) {
    temporaryValue3 = parameter0;
    temporaryValue4 = temporaryValue3.startsWith;
    temporaryValue5 = ["KPSDK:"];
    temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue5);
    temporaryValue4 = !temporaryValue2;
    temporaryValue1 = temporaryValue4;
  }
  if (temporaryValue1) {
    temporaryValue1 = undefined;
    return temporaryValue1;
  } else {
    temporaryValue2 = parameter0;
    temporaryValue3 = temporaryValue2.split;
    temporaryValue5 = [":"];
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue5);
    localState1 = temporaryValue1;
    temporaryValue3 = localState1;
    temporaryValue2 = temporaryValue3[1];
    localState2 = temporaryValue2;
    temporaryValue3 = arrayLikeToArray;
    temporaryValue4 = localState1;
    temporaryValue2 = temporaryValue3(temporaryValue4);
    temporaryValue3 = temporaryValue2.slice;
    temporaryValue5 = [2];
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue5);
    localState3 = temporaryValue1;
    temporaryValue2 = {};
    temporaryValue3 = markerMessageHandlers;
    temporaryValue5 = localState2;
    temporaryValue1 = temporaryValue3[temporaryValue5];
    temporaryValue2.rxd = temporaryValue1;
    temporaryValue4 = localState3;
    temporaryValue1 = temporaryValue4.join;
    temporaryValue3 = Reflect.apply(temporaryValue1, temporaryValue4, [":"]);
    temporaryValue2.jnh = temporaryValue3;
    return temporaryValue2;
  }
}

function dispatchKpsdkMarkerMessage(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, localState3, localState4, parseKpsdkMarkerMessage, performanceMarkerApi;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue2 = parseKpsdkMarkerMessage;
  temporaryValue3 = parameter0;
  temporaryValue1 = temporaryValue2(temporaryValue3);
  localState1 = temporaryValue1;
  temporaryValue3 = temporaryValue1 !== null;
  if (temporaryValue3) {
    temporaryValue1 = localState1;
    temporaryValue4 = undefined;
    temporaryValue2 = temporaryValue1 !== temporaryValue4;
    temporaryValue3 = temporaryValue2;
  }
  if (temporaryValue3) {
    temporaryValue3 = localState1;
    temporaryValue1 = temporaryValue3;
  } else {
    temporaryValue3 = {};
    temporaryValue1 = temporaryValue3;
  }
  localState2 = temporaryValue1;
  temporaryValue1 = localState2;
  temporaryValue2 = temporaryValue1.rxd;
  localState3 = temporaryValue2;
  temporaryValue1 = localState2;
  temporaryValue2 = temporaryValue1.jnh;
  localState4 = temporaryValue2;
  temporaryValue1 = localState3;
  temporaryValue3 = undefined;
  temporaryValue2 = temporaryValue1 === temporaryValue3;
  if (!(temporaryValue2)) {
    temporaryValue3 = localState4;
    temporaryValue1 = undefined;
    temporaryValue4 = temporaryValue3 === temporaryValue1;
    temporaryValue2 = temporaryValue4;
  }
  if (temporaryValue2) {
    temporaryValue2 = undefined;
    return temporaryValue2;
  } else {
    temporaryValue1 = localState3;
    temporaryValue3 = temporaryValue1 === "markerConfig";
    if (temporaryValue3) {
      temporaryValue1 = {};
      temporaryValue2 = localState3;
      temporaryValue1.rxd = temporaryValue2;
      temporaryValue2 = performanceMarkerApi;
      temporaryValue4 = new Array(1);
      temporaryValue5 = localState4;
      temporaryValue4[0] = temporaryValue5;
      temporaryValue3 = temporaryValue2.markerConfig(...temporaryValue4);
      temporaryValue1.nwq = temporaryValue3;
      return temporaryValue1;
    } else {
      temporaryValue1 = localState3;
      temporaryValue5 = temporaryValue1 === "marker";
      if (temporaryValue5) {
        temporaryValue3 = {};
        temporaryValue1 = localState3;
        temporaryValue3.rxd = temporaryValue1;
        temporaryValue2 = performanceMarkerApi;
        temporaryValue5 = temporaryValue2.marker;
        temporaryValue4 = new Array(1);
        temporaryValue6 = localState4;
        temporaryValue4[0] = temporaryValue6;
        temporaryValue1 = Reflect.apply(temporaryValue5, temporaryValue2, temporaryValue4);
        temporaryValue3.nwq = temporaryValue1;
        return temporaryValue3;
      } else {
        temporaryValue2 = {};
        temporaryValue1 = localState3;
        temporaryValue2.rxd = temporaryValue1;
        temporaryValue1 = performanceMarkerApi;
        temporaryValue4 = temporaryValue1.done;
        temporaryValue5 = new Array(1);
        temporaryValue6 = localState4;
        temporaryValue5[0] = temporaryValue6;
        temporaryValue3 = Reflect.apply(temporaryValue4, temporaryValue1, temporaryValue5);
        temporaryValue2.nwq = temporaryValue3;
        return temporaryValue2;
      }
    }
  }
}

function createConfiguredProbe(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, createCookieBackedProbe, capturedDependencyVariant1, createConfiguredProbeDependencyVariant1, capturedDependencyVariant2, createConfiguredProbeDependencyVariant2, capturedDependencyVariant3, createConfiguredProbeDependencyVariant3;

  localState1 = currentFunction;
  temporaryValue1 = createCookieBackedProbe;
  temporaryValue4 = new Array(7);
  temporaryValue5 = capturedDependencyVariant1;
  temporaryValue4[0] = temporaryValue5;
  temporaryValue3 = createConfiguredProbeDependencyVariant1;
  temporaryValue4[1] = temporaryValue3;
  temporaryValue3 = capturedDependencyVariant2;
  temporaryValue4[2] = temporaryValue3;
  temporaryValue3 = createConfiguredProbeDependencyVariant2;
  temporaryValue4[3] = temporaryValue3;
  temporaryValue5 = capturedDependencyVariant3;
  temporaryValue4[4] = temporaryValue5;
  temporaryValue3 = parameter0;
  temporaryValue4[5] = temporaryValue3;
  temporaryValue5 = parameter1;
  if (temporaryValue5) {
    temporaryValue5 = createConfiguredProbeDependencyVariant3;
    temporaryValue3 = temporaryValue5;
  } else {
    temporaryValue5 = undefined;
    temporaryValue3 = temporaryValue5;
  }
  temporaryValue4[6] = temporaryValue3;
  temporaryValue2 = Reflect.apply(temporaryValue1, undefined, temporaryValue4);
  return temporaryValue2;
}

function hexPrefixToUnitInterval(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9;

  temporaryValue2 = globalThis.Number;
  temporaryValue7 = parameter0;
  temporaryValue6 = temporaryValue7.slice(0, 13);
  temporaryValue3 = "0x".concat(temporaryValue6);
  temporaryValue1 = temporaryValue2(temporaryValue3);
  temporaryValue2 = temporaryValue1 + 1;
  temporaryValue3 = "<double high=1127219200 low=0>" / temporaryValue2;
  return temporaryValue3;
}

function generateRandomHexId() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11;
  let localState1, localState2;

  localState1 = undefined;
  localState2 = undefined;
  localState1 = "";
  localState2 = 0;
  temporaryValue1 = localState2;
  temporaryValue3 = temporaryValue1 < 32;
  while (temporaryValue3) {
    temporaryValue2 = localState1;
    temporaryValue3 = Math;
    temporaryValue7 = Math;
    temporaryValue8 = temporaryValue7.random();
    temporaryValue4 = temporaryValue3.floor(temporaryValue8 * 16);
    temporaryValue1 = "0123456789abcdef"[temporaryValue4];
    temporaryValue1 = temporaryValue2 + temporaryValue1;
    localState1 = temporaryValue1;
    temporaryValue1 = localState2;
    temporaryValue2 = 1;
    temporaryValue2 = temporaryValue1 + temporaryValue2;
    localState2 = temporaryValue2;
    continue;
  }
  temporaryValue1 = localState1;
  return temporaryValue1;
}

function matchesEndpointHost(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let matchesEndpointHostDependency;

  temporaryValue1 = parameter0;
  temporaryValue3 = matchesEndpointHostDependency;
  temporaryValue1 = temporaryValue3.toLowerCase();
  temporaryValue3 = temporaryValue1.nbk === temporaryValue1;
  return temporaryValue3;
}

function copyEnumerableModuleBindings(target, moduleValue, excludedKey = "default") {
  if (moduleValue && (typeof moduleValue === "object" || typeof moduleValue === "function")) {
    const iterator = createForOfIteratorHelper(listEnumerableKeys(moduleValue));
    try {
      for (iterator.s(); !(step = iterator.n()).done;) {
        const key = step.value;
        if (!objectPrototype.call(target, key) && key !== excludedKey) {
          const descriptor = objectGetOwnPropertyDescriptor(moduleValue, key);
          objectDefineProperty(target, key, {
            get: () => moduleValue[key],
            enumerable: !descriptor || descriptor.enumerable,
          });
        }
      }
    } catch (error) {
      iterator.e(error);
    } finally {
      iterator.f();
    }
  }
  return target;
}

async function runWithTimeout() {
  const timeoutMs = timeoutMilliseconds;
  const operation = timedOperation;
  const options = timedOperationOptions;

  if (timeoutMs <= 0) return operation(options);

  if (typeof globalThis.AbortSignal?.timeout !== "undefined") {
    return operation(objectSpread2({}, options, {
      signal: globalThis.AbortSignal.timeout(timeoutMs),
    }));
  }

  let timerId;
  const timeoutPromise = new Promise((resolve, reject) => {
    timerId = installTimeoutSettlement_25772(resolve, reject, timeoutMs);
  });
  try {
    return await Promise.race([operation(options), timeoutPromise]);
  } finally {
    if (timerId !== undefined) globalThis.clearTimeout(timerId);
  }
}

async function retryAsyncOperation() {
  const options = retryOptions ?? {};
  const maximumAttempts = options.vqa ?? 1;
  const retryDelay = options.qix ?? 0;
  const operationMode = options.lmr ?? 0;
  const operationContext = options.xwq;
  const throwLastError = options.uzv ?? true;
  const operation = createProtectedRequestThunk();

  for (let attempt = 0; attempt < maximumAttempts; attempt += 1) {
    try {
      return await networkRequestFactory(operation, operationMode, operationContext);
    } catch (error) {
      if (attempt === maximumAttempts - 1) {
        if (throwLastError) throw normalizeError(error);
        return undefined;
      }
      await logTransportOptions((attempt + 1) * retryDelay);
    }
  }
  throw new Error("Invalid number of attempts");
}

function handlePageHide() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue7;
  let capturedDependency;

  temporaryValue2 = capturedDependency;
  temporaryValue1 = temporaryValue2.lnh();
  return undefined;
}

function initializeSdkLogger(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9;
  let initializeSdkLogger, logEndpointConfiguration, maxLogBatchSize, logRequestDefaults;

  temporaryValue2 = classCallCheck;
  temporaryValue3 = this;
  temporaryValue4 = initializeSdkLogger;
  temporaryValue1 = temporaryValue2(temporaryValue3, temporaryValue4);
  temporaryValue3 = this;
  temporaryValue2 = parameter0;
  temporaryValue3.kcn = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue3 = parameter1;
  temporaryValue1.qlj = temporaryValue3;
  temporaryValue2 = this;
  temporaryValue4 = logEndpointConfiguration;
  temporaryValue3 = maxLogBatchSize;
  temporaryValue5 = [undefined, undefined, undefined, undefined];
  temporaryValue5[0] = temporaryValue3;
  temporaryValue3 = logRequestDefaults;
  temporaryValue5[1] = temporaryValue3;
  temporaryValue6 = this;
  temporaryValue8 = temporaryValue6.rhd;
  temporaryValue7 = temporaryValue8.bind;
  temporaryValue9 = this;
  temporaryValue6 = [undefined];
  temporaryValue6[0] = temporaryValue9;
  temporaryValue3 = Reflect.apply(temporaryValue7, temporaryValue8, temporaryValue6);
  temporaryValue5[2] = temporaryValue3;
  temporaryValue6 = this;
  temporaryValue7 = temporaryValue6.jpd;
  temporaryValue6 = temporaryValue7.bind;
  temporaryValue9 = this;
  temporaryValue8 = [undefined];
  temporaryValue8[0] = temporaryValue9;
  temporaryValue3 = Reflect.apply(temporaryValue6, temporaryValue7, temporaryValue8);
  temporaryValue5[3] = temporaryValue3;
  temporaryValue1 = Reflect.construct(temporaryValue4, temporaryValue5);
  temporaryValue2.gbk = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue1.nmr = false;
  temporaryValue1 = this;
  temporaryValue1.yjc = [];
  temporaryValue1 = this;
  temporaryValue1.vhd = 1;
  return undefined;
}

function normalizeBufferedRecord(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue7;
  let normalizeBufferedRecordDependency;

  temporaryValue3 = normalizeBufferedRecordDependency;
  temporaryValue1 = temporaryValue3.rhd(parameter0);
  return temporaryValue1;
}

function removeEmptyLogRecord(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2;

  temporaryValue1 = parameter0;
  return temporaryValue1 !== null;
}

function createLogRequestId() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1;

  localState1 = undefined;
  temporaryValue1 = asyncToGenerator;
  temporaryValue3 = regeneratorRuntime;
  temporaryValue5 = temporaryValue3.mark;
  temporaryValue6 = new Array(1);
  temporaryValue7 = function (nestedParameter0) { return protectedLogTransportGenerator.apply(this, arguments); };
  temporaryValue6[0] = temporaryValue7;
  temporaryValue2 = Reflect.apply(temporaryValue5, temporaryValue3, temporaryValue6);
  temporaryValue4 = temporaryValue1(temporaryValue2);
  localState1 = temporaryValue4;
  temporaryValue1 = function (nestedParameter0) { return invokeProtectedLogTransport.apply(this, arguments); };
  return temporaryValue1;
}

function handleLogTransportFailure(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let handleLogTransportFailureDependency, normalizeError;

  temporaryValue3 = handleLogTransportFailureDependency;
  temporaryValue4 = temporaryValue3.kcn;
  temporaryValue3 = normalizeError(parameter0);
  temporaryValue6 = [undefined, undefined];
  temporaryValue6[0] = temporaryValue3;
  temporaryValue6[1] = 204;
  temporaryValue1 = temporaryValue4.xmr(...temporaryValue6);
  return undefined;
}

function inferUrlProtocol(url) {
  let temporaryValue1 = url;
  let temporaryValue2, temporaryValue3, temporaryValue4;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = url;
  temporaryValue3 = temporaryValue2.startsWith;
  temporaryValue4 = ["http://"];
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
  if (temporaryValue1) {
    return "http:";
  } else {
    temporaryValue2 = url;
    temporaryValue3 = temporaryValue2.startsWith;
    temporaryValue4 = ["https://"];
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
    if (temporaryValue1) {
      return "https:";
    } else {
      temporaryValue1 = undefined;
      return temporaryValue1;
    }
  }
}

function validateEndpointConfiguration(configuration) {
  const format = configurationResultFactory(configuration);
  if (format === configurationModeEnum.v0) {
    return { xgq: configurationModeEnum.v0, uuv: configuration.map(buildLocalConfiguration) };
  }

  const errors = [];
  let endpoints;
  let resourceAddress;

  if (configuration.endpoints !== undefined) {
    if (Array.isArray(configuration.endpoints)) {
      endpoints = configuration.endpoints
        .map((endpoint, index) => runtimeConfigurationSource(endpoint, index, errors))
        .filter(Boolean);
      resourceAddress = remoteConfigurationDefaults(configuration.resourceAddress, errors);
    } else {
      errors.push("endpoints must be an array");
    }
  }

  if (errors.length > 0) return { xgq: configurationModeEnum.v1, zfp: errors };
  return {
    xgq: configurationModeEnum.v1,
    uuv: objectSpread2(
      {},
      endpoints !== undefined ? { endpoints } : undefined,
      resourceAddress !== undefined ? { resourceAddress } : undefined,
    ),
  };
}

function initializePerformanceTimeline() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let initializePerformanceTimeline;

  temporaryValue1 = classCallCheck(this, initializePerformanceTimeline);
  this.gcn = {  };
  return undefined;
}

function formatPerformanceMeasurement(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11, temporaryValue12;
  let localState1, localState2, localState3;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.kkj;
  localState1 = temporaryValue2;
  temporaryValue2 = parameter0;
  temporaryValue4 = temporaryValue2.jkj;
  localState2 = temporaryValue4;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.ygq;
  localState3 = temporaryValue2;
  temporaryValue1 = objectSpread2;
  temporaryValue2 = {};
  temporaryValue4 = localState1;
  temporaryValue2.qkj = temporaryValue4;
  temporaryValue4 = localState3;
  temporaryValue6 = undefined;
  temporaryValue5 = temporaryValue4 !== temporaryValue6;
  if (temporaryValue5) {
    temporaryValue4 = {};
    temporaryValue8 = Math;
    temporaryValue6 = temporaryValue8.round;
    temporaryValue7 = Reflect.apply(temporaryValue6, temporaryValue8, [localState3 - localState2]);
    temporaryValue4.lwq = temporaryValue7;
    temporaryValue5 = temporaryValue4;
  }
  temporaryValue3 = temporaryValue1(temporaryValue2, temporaryValue5);
  return temporaryValue3;
}

function initializeDeferredReadySignal(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, initializeDeferredReadySignal;

  localState1 = undefined;
  temporaryValue1 = this;
  localState1 = temporaryValue1;
  temporaryValue2 = classCallCheck;
  temporaryValue3 = this;
  temporaryValue4 = initializeDeferredReadySignal;
  temporaryValue1 = temporaryValue2(temporaryValue3, temporaryValue4);
  temporaryValue1 = this;
  temporaryValue2 = parameter0;
  temporaryValue1.qlj = temporaryValue2;
  temporaryValue2 = this;
  temporaryValue3 = Promise;
  temporaryValue1 = new Array(1);
  temporaryValue4 = function (parameter0) { return captureReadyResolver.apply(this, arguments); };
  temporaryValue1[0] = temporaryValue4;
  temporaryValue5 = Reflect.construct(temporaryValue3, temporaryValue1);
  temporaryValue2.vpd = temporaryValue5;
  temporaryValue1 = this;
  temporaryValue1.ubk = false;
  return undefined;
}

function captureReadyResolver(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3;
  let capturedStateXrc_1613;

  capturedStateXrc_1613.xrc = parameter0;
  return undefined;
}

function handleReadyTimeout() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let handleReadyTimeoutDependencyVariant1, handleReadyTimeoutDependencyVariant2;

  temporaryValue5 = handleReadyTimeoutDependencyVariant1;
  temporaryValue1 = temporaryValue5.kgq(handleReadyTimeoutDependencyVariant2);
  return temporaryValue1;
}

function initializeRemoteFrameContextManager(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue6;
  let initializeRemoteFrameContextManager, PerformanceTimelineClass;

  temporaryValue2 = classCallCheck;
  temporaryValue3 = this;
  temporaryValue1 = temporaryValue2(temporaryValue3, initializeRemoteFrameContextManager);
  temporaryValue1 = this;
  temporaryValue2 = parameter0;
  temporaryValue1.qlj = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue3 = parameter1;
  temporaryValue1.kcn = temporaryValue3;
  temporaryValue2 = this;
  temporaryValue3 = PerformanceTimelineClass;
  temporaryValue1 = new temporaryValue3();
  temporaryValue2.uhd = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue1.zjc = {  };
  temporaryValue1 = this;
  temporaryValue1.ebk = false;
  return undefined;
}

function finalizeRemoteFrameInitialization() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let finalizeRemoteFrameInitializationDependencyVariant1, finalizeRemoteFrameInitializationDependencyVariant2;

  temporaryValue2 = finalizeRemoteFrameInitializationDependencyVariant1;
  temporaryValue4 = temporaryValue2.qlj;
  temporaryValue2 = temporaryValue4.addEventListener;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, ["message", finalizeRemoteFrameInitializationDependencyVariant2]);
  return temporaryValue1;
}

function requestRemoteFrameConfiguration(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3;
  let remoteFrameDefinitionMap;

  temporaryValue1 = remoteFrameDefinitionMap;
  temporaryValue2 = temporaryValue1.zjc;
  temporaryValue1 = temporaryValue2[parameter0];
  temporaryValue2 = temporaryValue1.yvf;
  temporaryValue1 = temporaryValue2.vpd;
  return temporaryValue1;
}

function commitRemoteFrameConfiguration(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, commitRemoteFrameConfigurationDependency, runtimeModeEnum;

  localState1 = undefined;
  temporaryValue1 = commitRemoteFrameConfigurationDependency;
  temporaryValue3 = temporaryValue1.some;
  temporaryValue4 = new Array(1);
  temporaryValue5 = function (parameter0) { return computeFrameVisibilityMask.apply(this, arguments); };
  temporaryValue4[0] = temporaryValue5;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue4);
  localState1 = temporaryValue2;
  temporaryValue1 = {};
  temporaryValue3 = localState1;
  if (temporaryValue3) {
    temporaryValue3 = runtimeModeEnum;
    temporaryValue4 = temporaryValue3.qmr;
    temporaryValue2 = temporaryValue4;
  } else {
    temporaryValue4 = runtimeModeEnum;
    temporaryValue3 = temporaryValue4.vvf;
    temporaryValue2 = temporaryValue3;
  }
  temporaryValue1.ywq = temporaryValue2;
  temporaryValue3 = commitRemoteFrameConfigurationDependency;
  temporaryValue4 = temporaryValue3.reduce;
  temporaryValue5 = new Array(2);
  temporaryValue6 = function (parameter0, nestedParameter1, nestedParameter2) { return copyIndexedFrameMetadata.apply(this, arguments); };
  temporaryValue5[0] = temporaryValue6;
  temporaryValue5[1] = {  };
  temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue5);
  temporaryValue1.qnh = temporaryValue2;
  return temporaryValue1;
}

async function getOrCreateRemoteContext() {
  const key = attachRemoteFrameDependencyVariant1;
  const existing = this.zjc[key];
  if (!existing) return null;

  existing.zvf.euv();
  const channel = existing.zvf.gqa(attachRemoteFrameDependencyVariant2);
  const context = {
    zvf: channel,
    yvf: new remoteFrameRegistry(this.qlj),
    uwq: new remoteFrameRegistry(this.qlj),
    vxd: visibilityApi.gmr,
  };

  this.zjc[key] = context;
  this.nqa(key, context);
  return context.yvf.vpd;
}

async function loadRemoteConfiguration() {
  if (!remoteConfigEndpoint) return;

  const cookieState = readCookieState("remote-configs");
  if (cookieState) applyRemoteConfigurationResponseCallbackVariant1(remoteConfigCacheKey);

  const cached = applyRemoteConfigurationResponseCallbackVariant2(remoteConfigCacheKey);
  if (cached?.ywq === "valid") {
    getLoggerConfiguration.nuv(cached.ljc, dateClock(cached.nwq));
    return;
  }

  const fetched = await timingConstants(remoteConfigEndpoint, remoteConfigRequestOptions);
  if (!fetched) return;

  getLoggerConfiguration.nuv(fetched.ljc, fetched.nwq);
  timingValidator(remoteConfigCacheKey, fetched.ljc, timerApi(fetched.nwq));
}

function executePromisePipeline() {
  return timingClock(executePromisePipelineDependency)
    .then(normalizeRuntimeContextResponse)
    .catch(reportRuntimeContextRefreshError);
}

function wildcardMatch(pattern, value, comparator = wildcardMatchDependency) {
  let patternIndex = 0;
  let valueIndex = 0;
  let starIndex = -1;
  let retryValueIndex = 0;

  while (valueIndex < value.length) {
    if (patternIndex < pattern.length && pattern[patternIndex] === "*") {
      starIndex = patternIndex++;
      retryValueIndex = valueIndex;
    } else if (
      patternIndex < pattern.length
      && comparator(pattern[patternIndex], value[valueIndex], comparator)
    ) {
      patternIndex += 1;
      valueIndex += 1;
    } else if (starIndex !== -1) {
      patternIndex = starIndex + 1;
      valueIndex = ++retryValueIndex;
    } else {
      return false;
    }
  }

  while (patternIndex < pattern.length && pattern[patternIndex] === "*") patternIndex += 1;
  return patternIndex === pattern.length;
}

function processDeferredAction() {
  const eligible = capturedCallbackVariant1(processDeferredActionDependencyVariant1, this, processDeferredActionDependencyVariant2)
    && (!capturedCallbackVariant2(this, capturedDependencyVariant1) || capturedCallbackVariant2(this, capturedDependencyVariant2));

  if (eligible) {
    const descriptor = capturedCallbackVariant3(processDeferredActionDependencyVariant1, this);
    if (descriptor.action && descriptor.method) {
      const action = parseUrlAgainstWindow(processDeferredActionDependencyVariant1, descriptor.action);
      const invocation = processDeferredActionCallback(descriptor.method, action);
      capturedCallbackVariant4(processDeferredActionDependencyVariant1, invocation, this);
      capturedCallbackVariant5(this, capturedDependencyVariant1);
      capturedCallbackVariant5(this, capturedDependencyVariant2);
      return;
    }
  }
  processDeferredActionStateCall.call(this);
}

function runGuardedSdkTask(task) {
  try {
    const resource = runGuardedSdkTaskCallbackVariant1(runGuardedSdkTaskDependencyVariant1, runGuardedSdkTaskDependencyVariant2);
    if (resource !== null) capturedCallback(resource, runGuardedSdkTaskDependencyVariant3);
    return runGuardedSdkTaskCallbackVariant2(task);
  } catch (error) {
    const normalized = normalizeError(error);
    capturedStateXmr_2421.xmr(normalized, 211);
    globalThis.console.error("KPSDK Error:", normalized);
    return undefined;
  }
}

function initializeRuntimeContextRegistry(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue6;
  let initializeRuntimeContextRegistry, getSdkRuntimeConfiguration;

  temporaryValue1 = classCallCheck;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue1(temporaryValue2, initializeRuntimeContextRegistry);
  temporaryValue1 = this;
  temporaryValue2 = parameter0;
  temporaryValue1.qlj = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue1.uxj = {  };
  temporaryValue1 = this;
  temporaryValue1.zwc = {  };
  temporaryValue1 = this;
  temporaryValue2 = getSdkRuntimeConfiguration();
  temporaryValue3 = temporaryValue2.xjc;
  temporaryValue2 = temporaryValue3.uqa;
  temporaryValue1.egx = temporaryValue2;
  return undefined;
}

function initializeObservableClientState(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11, temporaryValue12, temporaryValue13, temporaryValue14, temporaryValue15, temporaryValue16, temporaryValue17, temporaryValue20;
  let initializeObservableClientState, clientStateEnum;

  temporaryValue2 = classCallCheck;
  temporaryValue3 = this;
  temporaryValue5 = initializeObservableClientState;
  temporaryValue1 = temporaryValue2(temporaryValue3, temporaryValue5);
  temporaryValue1 = this;
  temporaryValue2 = parameter0;
  temporaryValue1.qlj = temporaryValue2;
  temporaryValue2 = this;
  temporaryValue1 = parameter1;
  temporaryValue2.nhj = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue1.ywc = {  };
  temporaryValue2 = this;
  temporaryValue2.vfm = false;
  temporaryValue1 = this;
  temporaryValue2 = clientStateEnum;
  temporaryValue6 = temporaryValue2.rcg;
  temporaryValue1.vwq = temporaryValue6;
  temporaryValue1 = this;
  temporaryValue3 = defineProperty;
  temporaryValue5 = defineProperty;
  temporaryValue6 = defineProperty;
  temporaryValue10 = defineProperty;
  temporaryValue9 = defineProperty;
  temporaryValue12 = defineProperty;
  temporaryValue15 = clientStateEnum;
  temporaryValue16 = temporaryValue15.rcg;
  temporaryValue17 = clientStateEnum.euo;
  temporaryValue15 = [undefined];
  temporaryValue15[0] = temporaryValue17;
  temporaryValue13 = temporaryValue12({  }, temporaryValue16, temporaryValue15);
  temporaryValue12 = clientStateEnum;
  temporaryValue14 = temporaryValue12.euo;
  temporaryValue17 = clientStateEnum;
  temporaryValue15 = temporaryValue17.zvj;
  temporaryValue16 = [undefined];
  temporaryValue16[0] = temporaryValue15;
  temporaryValue11 = temporaryValue9(temporaryValue13, temporaryValue14, temporaryValue16);
  temporaryValue9 = clientStateEnum;
  temporaryValue13 = temporaryValue9.zvj;
  temporaryValue14 = clientStateEnum;
  temporaryValue12 = temporaryValue14.kjh;
  temporaryValue9 = [undefined, undefined];
  temporaryValue9[0] = temporaryValue12;
  temporaryValue12 = clientStateEnum;
  temporaryValue15 = temporaryValue12.gqh;
  temporaryValue9[1] = temporaryValue15;
  temporaryValue7 = temporaryValue10(temporaryValue11, temporaryValue13, temporaryValue9);
  temporaryValue10 = clientStateEnum;
  temporaryValue11 = temporaryValue10.gqh;
  temporaryValue10 = clientStateEnum;
  temporaryValue12 = temporaryValue10.jcg;
  temporaryValue9 = [undefined];
  temporaryValue9[0] = temporaryValue12;
  temporaryValue8 = temporaryValue6(temporaryValue7, temporaryValue11, temporaryValue9);
  temporaryValue7 = clientStateEnum;
  temporaryValue9 = temporaryValue7.kjh;
  temporaryValue7 = clientStateEnum;
  temporaryValue10 = temporaryValue7.jcg;
  temporaryValue6 = [undefined];
  temporaryValue6[0] = temporaryValue10;
  temporaryValue4 = temporaryValue5(temporaryValue8, temporaryValue9, temporaryValue6);
  temporaryValue8 = clientStateEnum;
  temporaryValue5 = temporaryValue8.jcg;
  temporaryValue6 = clientStateEnum;
  temporaryValue9 = temporaryValue6.kjh;
  temporaryValue7 = [undefined];
  temporaryValue7[0] = temporaryValue9;
  temporaryValue2 = temporaryValue3(temporaryValue4, temporaryValue5, temporaryValue7);
  temporaryValue1.qaf = temporaryValue2;
  return undefined;
}

function initializeSdkRuntimeController(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue9;
  let initializeSdkRuntimeController, createRuntimeIdentity, RuntimeContextRegistryClass, RemoteFrameContextManagerClass, ObservableClientStateClass;

  temporaryValue4 = classCallCheck;
  temporaryValue2 = this;
  temporaryValue3 = initializeSdkRuntimeController;
  temporaryValue1 = temporaryValue4(temporaryValue2, temporaryValue3);
  temporaryValue6 = this;
  temporaryValue2 = parameter0;
  temporaryValue6.qlj = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue2 = parameter1;
  temporaryValue1.kcn = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue3 = parameter2;
  temporaryValue1.nhj = temporaryValue3;
  temporaryValue1 = this;
  temporaryValue2 = undefined;
  temporaryValue1.kzp = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue1.gxj = false;
  temporaryValue3 = this;
  temporaryValue4 = createRuntimeIdentity;
  temporaryValue2 = this;
  temporaryValue1 = temporaryValue4(temporaryValue2.qlj);
  temporaryValue3.rvj = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue5 = RuntimeContextRegistryClass;
  temporaryValue4 = this;
  temporaryValue6 = temporaryValue4.qlj;
  temporaryValue3 = [undefined];
  temporaryValue3[0] = temporaryValue6;
  temporaryValue2 = Reflect.construct(temporaryValue5, temporaryValue3);
  temporaryValue1.jhj = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue2 = RemoteFrameContextManagerClass;
  temporaryValue6 = this;
  temporaryValue5 = temporaryValue6.qlj;
  temporaryValue4 = [undefined, undefined];
  temporaryValue4[0] = temporaryValue5;
  temporaryValue6 = this;
  temporaryValue5 = temporaryValue6.kcn;
  temporaryValue4[1] = temporaryValue5;
  temporaryValue3 = Reflect.construct(temporaryValue2, temporaryValue4);
  temporaryValue1.nbx = temporaryValue3;
  temporaryValue1 = this;
  temporaryValue5 = ObservableClientStateClass;
  temporaryValue3 = this.qlj;
  temporaryValue2 = [undefined, undefined];
  temporaryValue2[0] = temporaryValue3;
  temporaryValue3 = this;
  temporaryValue6 = temporaryValue3.nhj;
  temporaryValue2[1] = temporaryValue6;
  temporaryValue4 = Reflect.construct(temporaryValue5, temporaryValue2);
  temporaryValue1.yyy = temporaryValue4;
  return undefined;
}

function initializeKpsdkClient(parameter0, parameter1, parameter2, parameter3) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue5, temporaryValue6;
  let initializeKpsdkClient, configurationModeEnum, SdkRuntimeControllerClass;

  temporaryValue1 = classCallCheck;
  temporaryValue3 = this;
  temporaryValue4 = initializeKpsdkClient;
  temporaryValue2 = temporaryValue1(temporaryValue3, temporaryValue4);
  temporaryValue1 = this;
  temporaryValue2 = parameter0;
  temporaryValue1.qlj = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue3 = parameter1;
  temporaryValue1.kcn = temporaryValue3;
  temporaryValue2 = this;
  temporaryValue1 = parameter3;
  temporaryValue2.vcn = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue4 = configurationModeEnum;
  temporaryValue2 = temporaryValue4.v0;
  temporaryValue1.xqh = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue1.ufm = false;
  temporaryValue1 = this;
  temporaryValue1.zcg = [];
  temporaryValue2 = this;
  temporaryValue2.ekz = [];
  temporaryValue3 = this;
  temporaryValue2 = SdkRuntimeControllerClass;
  temporaryValue5 = parameter0;
  temporaryValue4 = [undefined, undefined, undefined];
  temporaryValue4[0] = temporaryValue5;
  temporaryValue4[1] = parameter1;
  temporaryValue5 = parameter2;
  temporaryValue4[2] = temporaryValue5;
  temporaryValue1 = Reflect.construct(temporaryValue2, temporaryValue4);
  temporaryValue3.kdj = temporaryValue1;
  return undefined;
}

async function configureSdk() {
  if (this.ufm) throw new Error("KPSDK has already been configured");

  const validated = validateSdkConfiguration(applyEndpointConfigurationDependency);
  if ("errors$" in validated) {
    return { type: "Error", errorMessage: validated.zfp.join(", ") };
  }

  const useRemoteContext = getSdkRuntimeConfiguration().ejc.kmr;
  const baseContext = { qlj: this.qlj, vcn: this.vcn };
  this.ufm = true;

  if (validated.xgq === configurationModeEnum.v1) {
    const configuration = buildConfiguredContext(validated.uuv, baseContext);
    const normalized = normalizeConfiguredContext(configuration);
    this.ekz = normalized.qjc;
    this.xqh = configurationModeEnum.v1;
    this.kzp = useRemoteContext ? normalized.lxd : undefined;
    this.gkz(useRemoteContext);
    this.kdj.vjh(
      this.ekz,
      this.kzp ?? this.rkz,
      configurationModeEnum.v1,
    );
    return { type: "Configured", configuration };
  }

  const normalized = normalizeDefaultConfiguration(validated, baseContext);
  this.zcg = normalized.qjc;
  this.kzp = useRemoteContext ? normalized.lxd : undefined;
  this.rkz = selectInternalEndpoint(this.qlj, this.zcg);
  this.gkz(useRemoteContext);
  return this.kdj.vjh(
    this.zcg,
    this.kzp ?? this.rkz,
    configurationModeEnum.v0,
  );
}

//env checks start
function wrapNativeSuperclass(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue9, temporaryValue10, temporaryValue11;
  let localState1, createNativeSuperWrapper, nativeSuperclassWrapperCache;

  localState1 = currentFunction;
  createNativeSuperWrapper = undefined;
  temporaryValue1 = function () { return createNativeSuperWrapper.apply(this, arguments); };
  createNativeSuperWrapper = temporaryValue1;
  temporaryValue3 = parameter0;
  temporaryValue2 = null === temporaryValue3;
  if (!(temporaryValue2)) {
    temporaryValue3 = isNativeFunction;
    temporaryValue6 = parameter0;
    temporaryValue1 = temporaryValue3(temporaryValue6);
    temporaryValue3 = !temporaryValue1;
    temporaryValue2 = temporaryValue3;
  }
  if (temporaryValue2) {
    temporaryValue1 = parameter0;
    return temporaryValue1;
  } else {
    temporaryValue1 = parameter0;
    temporaryValue2 = typeof temporaryValue1;
    temporaryValue3 = "function" != temporaryValue2;
    if (temporaryValue3) {
      temporaryValue3 = TypeError;
      temporaryValue1 = ["Super expression must either be null or a function"];
      temporaryValue2 = Reflect.construct(temporaryValue3, temporaryValue1);
      throw temporaryValue2;
    } else {
      temporaryValue1 = undefined;
      temporaryValue2 = nativeSuperclassWrapperCache;
      temporaryValue3 = temporaryValue1 !== temporaryValue2;
      if (temporaryValue3) {
        temporaryValue2 = nativeSuperclassWrapperCache;
        temporaryValue4 = temporaryValue2.has;
        temporaryValue5 = new Array(1);
        temporaryValue3 = parameter0;
        temporaryValue5[0] = temporaryValue3;
        temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue5);
        if (temporaryValue1) {
          temporaryValue2 = nativeSuperclassWrapperCache;
          temporaryValue3 = temporaryValue2.get;
          temporaryValue6 = new Array(1);
          temporaryValue5 = parameter0;
          temporaryValue6[0] = temporaryValue5;
          temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue6);
          return temporaryValue1;
        }
        temporaryValue2 = nativeSuperclassWrapperCache;
        temporaryValue3 = temporaryValue2.set;
        temporaryValue4 = new Array(2);
        temporaryValue5 = parameter0;
        temporaryValue4[0] = temporaryValue5;
        temporaryValue5 = createNativeSuperWrapper;
        temporaryValue4[1] = temporaryValue5;
        temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
      }
      temporaryValue2 = createNativeSuperWrapper;
      temporaryValue1 = Object;
      temporaryValue3 = temporaryValue1.create;
      temporaryValue6 = new Array(2);
      temporaryValue5 = parameter0;
      temporaryValue7 = temporaryValue5.prototype;
      temporaryValue6[0] = temporaryValue7;
      temporaryValue5 = !0;
      temporaryValue9 = { value: createNativeSuperWrapper, enumerable: !1 };
      temporaryValue9.writable = temporaryValue5;
      temporaryValue5 = !0;
      temporaryValue9.configurable = temporaryValue5;
      temporaryValue6[1] = { constructor: temporaryValue9 };
      temporaryValue4 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue6);
      temporaryValue2.prototype = temporaryValue4;
      temporaryValue2 = setPrototypeOf;
      temporaryValue3 = createNativeSuperWrapper;
      temporaryValue4 = parameter0;
      temporaryValue1 = temporaryValue2(temporaryValue3, temporaryValue4);
      return temporaryValue1;
    }
  }
}

function getObjectPrototype(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;

  temporaryValue3 = parameter0;
  temporaryValue2 = temporaryValue3.__proto__;
  if (!(temporaryValue2)) {
    temporaryValue4 = Object;
    temporaryValue1 = temporaryValue4.getPrototypeOf;
    temporaryValue3 = Reflect.apply(temporaryValue1, temporaryValue4, [parameter0]);
    temporaryValue2 = temporaryValue3;
  }
  return temporaryValue2;
}

function copyPropertyDescriptor(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue7;
  let copyPropertyDescriptorDependency;

  temporaryValue2 = Object;
  temporaryValue1 = temporaryValue2.getOwnPropertyDescriptor(copyPropertyDescriptorDependency, parameter0);
  temporaryValue3 = temporaryValue1.enumerable;
  return temporaryValue3;
}

function defineObjectProperty(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10;
  let capturedDependencyVariant1, capturedDependencyVariant2;

  temporaryValue2 = Object;
  temporaryValue4 = capturedDependencyVariant1;
  temporaryValue6 = [undefined, undefined, undefined];
  temporaryValue6[0] = temporaryValue4;
  temporaryValue4 = parameter0;
  temporaryValue6[1] = temporaryValue4;
  temporaryValue5 = Object;
  temporaryValue4 = temporaryValue5.getOwnPropertyDescriptor(capturedDependencyVariant2, parameter0);
  temporaryValue6[2] = temporaryValue4;
  temporaryValue1 = temporaryValue2.defineProperty(...temporaryValue6);
  return undefined;
}

function integrityCheckStep1(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue4;

  temporaryValue2 = function () { return bootstrapSha256Library.apply(this, arguments); };
  temporaryValue1 = Reflect.apply(temporaryValue2, undefined, []);
  return undefined;
}

function integrityCheckStep2() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9;
  let capturedStateYyw_1717, capturedDependencyVariant1, capturedDependencyVariant2, integrityCheckDependency;

  temporaryValue1 = capturedStateYyw_1717;
  if (temporaryValue1) {
    temporaryValue1 = capturedDependencyVariant1;
    temporaryValue2 = capturedStateYyw_1717;
    temporaryValue3 = temporaryValue2.exd;
    temporaryValue5 = capturedDependencyVariant2;
    temporaryValue6 = temporaryValue5.kqa;
    temporaryValue4 = new Array(2);
    temporaryValue7 = capturedStateYyw_1717;
    temporaryValue4[0] = temporaryValue7.exd;
    temporaryValue7 = capturedStateYyw_1717.yyw;
    temporaryValue4[1] = temporaryValue7;
    temporaryValue2 = Reflect.apply(temporaryValue6, temporaryValue5, temporaryValue4);
    temporaryValue1[temporaryValue3] = temporaryValue2;
  } else {
    temporaryValue2 = integrityCheckDependency;
    temporaryValue4 = temporaryValue2.forEach;
    temporaryValue3 = new Array(1);
    temporaryValue6 = function (nestedParameter0) { return integrityCheckStep3.apply(this, arguments); };
    temporaryValue3[0] = temporaryValue6;
    temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue3);
  }
  return undefined;
}

function integrityCheckStep3(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue11;
  let localState1, capturedDependencyVariant1, capturedDependencyVariant2;

  localState1 = undefined;
  temporaryValue2 = parameter0;
  temporaryValue3 = temporaryValue2.exd;
  temporaryValue2 = temporaryValue3.toLowerCase;
  temporaryValue5 = [];
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue5);
  localState1 = temporaryValue1;
  temporaryValue2 = Object;
  temporaryValue3 = temporaryValue2.prototype;
  temporaryValue2 = temporaryValue3.hasOwnProperty;
  temporaryValue4 = temporaryValue2.call;
  temporaryValue3 = new Array(2);
  temporaryValue5 = capturedDependencyVariant1;
  temporaryValue3[0] = temporaryValue5;
  temporaryValue5 = localState1;
  temporaryValue3[1] = temporaryValue5;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue3);
  temporaryValue3 = !temporaryValue1;
  if (temporaryValue3) {
    temporaryValue3 = capturedDependencyVariant1;
    temporaryValue1 = localState1;
    temporaryValue2 = capturedDependencyVariant2;
    temporaryValue5 = temporaryValue2.kqa;
    temporaryValue6 = parameter0;
    temporaryValue6 = parameter0;
    temporaryValue4 = Reflect.apply(temporaryValue5, temporaryValue2, [temporaryValue6.exd, temporaryValue6.yyw]);
    temporaryValue3[temporaryValue1] = temporaryValue4;
  }
  return undefined;
}

function integrityCheckStep4(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue7;
  let localState1, localState2, localState3;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1 === null;
  if (!(temporaryValue2)) {
    temporaryValue1 = parameter0;
    temporaryValue3 = undefined;
    temporaryValue4 = temporaryValue1 === temporaryValue3;
    temporaryValue2 = temporaryValue4;
  }
  if (!(temporaryValue2)) {
    temporaryValue1 = parameter0;
    temporaryValue3 = temporaryValue1.toString;
    localState2 = temporaryValue3;
    temporaryValue1 = temporaryValue3 === null;
    if (!(temporaryValue1)) {
      temporaryValue3 = localState2;
      temporaryValue5 = undefined;
      temporaryValue4 = temporaryValue3 === temporaryValue5;
      temporaryValue1 = temporaryValue4;
    }
    temporaryValue2 = temporaryValue1;
  }
  if (temporaryValue2) {
    temporaryValue1 = undefined;
    temporaryValue3 = temporaryValue1;
  } else {
    temporaryValue2 = localState2;
    temporaryValue4 = temporaryValue2.call;
    temporaryValue5 = parameter0;
    temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, [temporaryValue5]);
    temporaryValue3 = temporaryValue1;
  }
  localState3 = temporaryValue3;
  temporaryValue1 = localState3;
  if (temporaryValue1) {
    temporaryValue2 = localState3;
    temporaryValue3 = temporaryValue2 !== "[object Object]";
    temporaryValue1 = temporaryValue3;
  }
  return temporaryValue1;
}

function integrityCheckStep5(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue14;
  let localState1, localState2, normalizeRemoteError;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue1 = parameter0;
  if (temporaryValue1) {
    temporaryValue2 = parameter0;
    temporaryValue3 = typeof temporaryValue2;
    temporaryValue5 = temporaryValue3 === "object";
    temporaryValue1 = temporaryValue5;
  }
  if (temporaryValue1) {
    temporaryValue2 = parameter0;
    temporaryValue3 = "stack" in temporaryValue2;
    temporaryValue1 = temporaryValue3;
  }
  if (temporaryValue1) {
    temporaryValue4 = parameter0;
    return temporaryValue4;
  } else {
    temporaryValue1 = parameter0;
    temporaryValue3 = typeof temporaryValue1;
    temporaryValue1 = temporaryValue3 === "string";
    if (!(temporaryValue1)) {
      temporaryValue5 = normalizeRemoteError;
      temporaryValue3 = parameter0;
      temporaryValue2 = temporaryValue5(temporaryValue3);
      temporaryValue1 = temporaryValue2;
    }
    if (temporaryValue1) {
      temporaryValue2 = Error;
      temporaryValue3 = new Array(1);
      temporaryValue4 = parameter0;
      temporaryValue5 = temporaryValue4 === null;
      if (!(temporaryValue5)) {
        temporaryValue6 = parameter0;
        temporaryValue4 = undefined;
        temporaryValue8 = temporaryValue6 === temporaryValue4;
        temporaryValue5 = temporaryValue8;
      }
      if (!(temporaryValue5)) {
        temporaryValue4 = parameter0;
        temporaryValue7 = temporaryValue4.toString;
        localState2 = temporaryValue7;
        temporaryValue4 = temporaryValue7 === null;
        if (!(temporaryValue4)) {
          temporaryValue6 = localState2;
          temporaryValue7 = undefined;
          temporaryValue8 = temporaryValue6 === temporaryValue7;
          temporaryValue4 = temporaryValue8;
        }
        temporaryValue5 = temporaryValue4;
      }
      if (temporaryValue5) {
        temporaryValue6 = undefined;
        temporaryValue4 = temporaryValue6;
      } else {
        temporaryValue9 = localState2;
        temporaryValue6 = temporaryValue9.call;
        temporaryValue7 = [parameter0];
        temporaryValue5 = Reflect.apply(temporaryValue6, temporaryValue9, temporaryValue7);
        temporaryValue4 = temporaryValue5;
      }
      temporaryValue3[0] = temporaryValue4;
      temporaryValue1 = Reflect.construct(temporaryValue2, temporaryValue3);
      return temporaryValue1;
    } else {
      temporaryValue3 = Error;
      temporaryValue2 = ["Unknown"];
      temporaryValue1 = Reflect.construct(temporaryValue3, temporaryValue2);
      return temporaryValue1;
    }
  }
}

function integrityCheckStep6(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = parameter1;
  temporaryValue3 = typeof temporaryValue2;
  temporaryValue1 = temporaryValue3 === "string";
  if (temporaryValue1) {
    temporaryValue1 = parameter1;
    return temporaryValue1;
  } else {
    temporaryValue1 = parameter1;
    temporaryValue2 = globalThis.Request;
    temporaryValue3 = temporaryValue1 instanceof temporaryValue2;
    if (temporaryValue3) {
      temporaryValue1 = parameter1;
      temporaryValue3 = temporaryValue1.url;
      return temporaryValue3;
    } else {
      temporaryValue4 = parameter1;
      temporaryValue2 = temporaryValue4.toString;
      temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, []);
      return temporaryValue1;
    }
  }
}

function integrityCheckStep7(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = Object;
  temporaryValue4 = temporaryValue2.prototype;
  temporaryValue3 = temporaryValue4.hasOwnProperty;
  temporaryValue2 = parameter0;
  temporaryValue4 = [undefined, undefined];
  temporaryValue4[0] = temporaryValue2;
  temporaryValue2 = parameter1;
  temporaryValue6 = [undefined];
  temporaryValue6[0] = temporaryValue2;
  temporaryValue4[1] = temporaryValue6;
  temporaryValue1 = temporaryValue3.apply(...temporaryValue4);
  return temporaryValue1;
}

function integrityCheckStep8(parameter0, parameter1, parameter2, parameter3) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue6, temporaryValue7;
  let localState1, localState2, processDeferredAction;

  localState1 = currentFunction;
  localState2 = undefined;
  processDeferredAction = undefined;
  temporaryValue2 = function () { return processDeferredAction.apply(this, arguments); };
  processDeferredAction = temporaryValue2;
  temporaryValue3 = parameter0;
  temporaryValue1 = temporaryValue3.HTMLFormElement;
  temporaryValue2 = temporaryValue1.prototype;
  temporaryValue3 = temporaryValue2.submit;
  localState2 = temporaryValue3;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.HTMLFormElement;
  temporaryValue1 = temporaryValue2.prototype;
  temporaryValue2 = parameter3;
  temporaryValue3 = temporaryValue2.ekj;
  temporaryValue4 = Reflect.apply(temporaryValue3, temporaryValue2, [processDeferredAction, 210]);
  temporaryValue1.submit = temporaryValue4;
  return undefined;
}

function integrityCheckStep9(parameter0, parameter1, parameter2, parameter3, parameter4, parameter5) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue5 = parameter4;
  let temporaryValue6 = parameter5;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = function (parameter0) { return integrityCheckStep10.apply(this, arguments); };
  return temporaryValue2;
}

function integrityCheckStep10(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let integrityCheckDependencyVariant1, integrityCheckDependencyVariant2, integrityCheckDependencyVariant3;

  temporaryValue3 = Symbol;
  temporaryValue1 = typeof temporaryValue3;
  temporaryValue2 = temporaryValue1 !== "undefined";
  if (temporaryValue2) {
    temporaryValue3 = Symbol;
    temporaryValue6 = temporaryValue3.iterator;
    temporaryValue2 = temporaryValue6;
  }
  if (temporaryValue2) {
    temporaryValue1 = Symbol;
    temporaryValue7 = temporaryValue1.iterator;
    temporaryValue1 = temporaryValue7.toString;
    temporaryValue3 = [];
    temporaryValue4 = Reflect.apply(temporaryValue1, temporaryValue7, temporaryValue3);
    temporaryValue1 = typeof temporaryValue4;
    temporaryValue3 = temporaryValue1 !== "string";
    temporaryValue2 = temporaryValue3;
  }
  if (temporaryValue2) {
    temporaryValue1 = Symbol;
    temporaryValue3 = temporaryValue1.iterator;
    temporaryValue1 = function () { return getIteratorSymbolTag.apply(this, arguments); };
    temporaryValue3.toString = temporaryValue1;
  }
  temporaryValue1 = integrityCheckDependencyVariant1;
  temporaryValue6 = {};
  temporaryValue5 = integrityCheckDependencyVariant2;
  temporaryValue6.yhd = temporaryValue5;
  temporaryValue5 = integrityCheckDependencyVariant3;
  temporaryValue6.vzv = temporaryValue5;
  temporaryValue4 = temporaryValue1(temporaryValue6);
  temporaryValue1 = temporaryValue4.then;
  temporaryValue5 = new Array(1);
  temporaryValue6 = function (parameter0) { return invokeGuardedCallback.apply(this, arguments); };
  temporaryValue5[0] = temporaryValue6;
  temporaryValue3 = Reflect.apply(temporaryValue1, temporaryValue4, temporaryValue5);
  temporaryValue4 = temporaryValue3.catch;
  temporaryValue1 = new Array(1);
  temporaryValue7 = function (parameter0) { return reportUnhandledSdkError.apply(this, arguments); };
  temporaryValue1[0] = temporaryValue7;
  temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue1);
  return undefined;
}

//SHA-256 / HMAC-SHA-256 support
function bootstrapSha256Library() {
  const INVALID_INPUT = "input is invalid type";
  const root = detectSha256GlobalObject();
  const commonJs = !root.JS_SHA256_NO_COMMON_JS && typeof capturedStateExports_734 === "object" && capturedStateExports_734.exports;
  const amd = typeof globalThis.define === "function" && globalThis.define.amd;
  const arrayBufferSupported = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";

  installArrayCompatibilityShims(root, arrayBufferSupported);

  const api = createSha256Api({
    Sha256: sha256InternalStep1,
    HmacSha256: initializeHmacSha256,
    invalidInputMessage: INVALID_INPUT,
    hexChars: "0123456789abcdef".split(""),
    extraBytes: [0x80000000, 0x00800000, 0x00008000, 0x00000080],
    byteShift: [24, 16, 8, 0],
    roundConstants: SHA256_ROUND_CONSTANTS,
    outputMethods: ["hex", "array", "digest", "arrayBuffer"],
  });

  sha256InternalStep1.prototype.update = sha256Update;
  sha256InternalStep1.prototype.finalize = sha256Finalize;
  sha256InternalStep1.prototype.hash = sha256HashBlock;
  sha256InternalStep1.prototype.hex = sha256HexDigest;
  sha256InternalStep1.prototype.toString = sha256HexDigest;
  sha256InternalStep1.prototype.digest = sha256ArrayDigest;
  sha256InternalStep1.prototype.array = sha256ArrayDigest;
  sha256InternalStep1.prototype.arrayBuffer = sha256Digest;

  initializeHmacSha256.prototype = new sha256InternalStep1();
  initializeHmacSha256.prototype.finalize = sha256ArrayBufferDigest;

  api.sha256 = api;
  api.sha224 = createSha256ApiVariant(true);
  api.sha256.hmac = createHmacApi(false);
  api.sha224.hmac = createHmacApi(true);

  if (commonJs) capturedStateExports_734.exports = api;
  else {
    root.sha256 = api.sha256;
    root.sha224 = api.sha224;
    if (amd) globalThis.define(() => api);
  }
  return api;
}

function sha256InternalStep1(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11, temporaryValue12, temporaryValue13, temporaryValue14, temporaryValue15, temporaryValue16, temporaryValue17;
  let bootstrapSha256LibraryDependency;

  temporaryValue2 = parameter1;
  if (temporaryValue2) {
    temporaryValue1 = bootstrapSha256LibraryDependency;
    temporaryValue2 = bootstrapSha256LibraryDependency;
    temporaryValue3 = bootstrapSha256LibraryDependency;
    temporaryValue4 = bootstrapSha256LibraryDependency;
    bootstrapSha256LibraryDependency[15] = 0;
    bootstrapSha256LibraryDependency[14] = 0;
    bootstrapSha256LibraryDependency[13] = 0;
    bootstrapSha256LibraryDependency[12] = 0;
    bootstrapSha256LibraryDependency[11] = 0;
    bootstrapSha256LibraryDependency[10] = 0;
    bootstrapSha256LibraryDependency[9] = 0;
    bootstrapSha256LibraryDependency[8] = 0;
    bootstrapSha256LibraryDependency[7] = 0;
    bootstrapSha256LibraryDependency[6] = 0;
    bootstrapSha256LibraryDependency[5] = 0;
    bootstrapSha256LibraryDependency[4] = 0;
    bootstrapSha256LibraryDependency[3] = 0;
    temporaryValue4[2] = 0;
    temporaryValue3[1] = 0;
    temporaryValue2[16] = 0;
    temporaryValue1[0] = 0;
    temporaryValue1 = this;
    temporaryValue2 = bootstrapSha256LibraryDependency;
    temporaryValue1.blocks = temporaryValue2;
  } else {
    temporaryValue1 = this;
    temporaryValue3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    temporaryValue1.blocks = temporaryValue3;
  }
  temporaryValue3 = parameter0;
  if (temporaryValue3) {
    temporaryValue2 = this;
    temporaryValue2.h0 = "<double high=1105731763 low=-620756992>";
    temporaryValue1 = this;
    temporaryValue1.h1 = 914150663;
    temporaryValue1 = this;
    temporaryValue1.h2 = 812702999;
    temporaryValue1 = this;
    temporaryValue1.h3 = "<double high=1106174411 low=656408576>";
    temporaryValue1 = this;
    temporaryValue1.h4 = "<double high=1106245633 low=1713373184>";
    temporaryValue1 = this;
    temporaryValue1.h5 = "<double high=1104811525 low=1145044992>";
    temporaryValue1 = this;
    temporaryValue1.h6 = "<double high=1104756323 low=-373293056>";
    temporaryValue2 = this;
    temporaryValue2.h7 = "<double high=1105715017 low=-192937984>";
  } else {
    temporaryValue1 = this;
    temporaryValue1.h0 = "<double high=1104839289 low=-1715470336>";
    temporaryValue1 = this;
    temporaryValue1.h1 = "<double high=1105685749 low=-794820608>";
    temporaryValue1 = this;
    temporaryValue1.h2 = 1013904242;
    temporaryValue1 = this;
    temporaryValue1.h3 = "<double high=1105504766 low=-1488977920>";
    temporaryValue1 = this;
    temporaryValue1.h4 = "<double high=1104429972 low=-1614807040>";
    temporaryValue3 = this;
    temporaryValue3.h5 = "<double high=1105420461 low=293601280>";
    temporaryValue2 = this;
    temporaryValue2.h6 = 528734635;
    temporaryValue2 = this;
    temporaryValue2.h7 = "<double high=1104607283 low=1178599424>";
  }
  temporaryValue2 = this;
  temporaryValue1 = this;
  temporaryValue4 = this;
  temporaryValue3 = this;
  temporaryValue3.hBytes = 0;
  temporaryValue4.bytes = 0;
  temporaryValue1.start = 0;
  temporaryValue2.block = 0;
  temporaryValue1 = this;
  temporaryValue2 = this;
  temporaryValue2.hashed = false;
  temporaryValue1.finalized = false;
  temporaryValue3 = this;
  temporaryValue3.first = true;
  temporaryValue1 = this;
  temporaryValue2 = parameter0;
  temporaryValue1.is224 = temporaryValue2;
  return undefined;
}

function initializeHmacSha256(key, is224, sharedMemory) {
  let bytes = normalizeSha256Input(key, capturedDependencyVariant1, capturedDependencyVariant2);
  if (bytes.length > 64) {
    bytes = new sha256InternalStep1(is224, true).update(bytes).array();
  }

  const outerKeyPad = new Array(64);
  const innerKeyPad = new Array(64);
  for (let index = 0; index < 64; index += 1) {
    const byte = bytes[index] || 0;
    outerKeyPad[index] = byte ^ 0x5c;
    innerKeyPad[index] = byte ^ 0x36;
  }

  sha256InternalStep1.call(this, is224, sharedMemory);
  this.update(innerKeyPad);
  this.oKeyPad = outerKeyPad;
  this.inner = true;
  this.sharedMemory = sharedMemory;
}

function sha256InternalStep2(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue6;

  temporaryValue3 = Object;
  temporaryValue4 = temporaryValue3.prototype;
  temporaryValue1 = temporaryValue4.toString;
  temporaryValue3 = temporaryValue1.call;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, [parameter0]);
  temporaryValue1 = temporaryValue2 === "[object Array]";
  return temporaryValue1;
}

function sha256InternalStep3(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4;

  temporaryValue2 = parameter0;
  temporaryValue1 = typeof temporaryValue2;
  temporaryValue4 = temporaryValue1 === "object";
  if (temporaryValue4) {
    temporaryValue1 = parameter0;
    temporaryValue2 = temporaryValue1.buffer;
    temporaryValue4 = temporaryValue2;
  }
  if (temporaryValue4) {
    temporaryValue1 = parameter0;
    temporaryValue2 = temporaryValue1.buffer;
    temporaryValue1 = temporaryValue2.constructor;
    temporaryValue2 = ArrayBuffer;
    temporaryValue4 = temporaryValue1 === temporaryValue2;
  }
  return temporaryValue4;
}

function sha256InternalStep4(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = function (parameter0) { return sha256InternalStep5.apply(this, arguments); };
  return temporaryValue1;
}

function sha256InternalStep5(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue9;
  let sha256InternalStep1, sha256HelperDependencyVariant1, sha256HelperDependencyVariant2;

  temporaryValue3 = sha256InternalStep1;
  temporaryValue4 = new temporaryValue3(sha256HelperDependencyVariant1, true);
  temporaryValue3 = temporaryValue4.update;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue4, [parameter0]);
  temporaryValue4 = sha256HelperDependencyVariant2;
  temporaryValue3 = temporaryValue2[temporaryValue4];
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, []);
  return temporaryValue1;
}

function sha256InternalStep6(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, localState2, localState3, localState4, sha256HelperDependencyVariant1, sha256HelperDependencyVariant2, sha256HelperDependencyVariant3, capturedDependency;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue2 = sha256HelperDependencyVariant1;
  temporaryValue3 = parameter0;
  temporaryValue1 = temporaryValue2("hex", temporaryValue3);
  localState2 = temporaryValue1;
  temporaryValue1 = sha256HelperDependencyVariant2;
  if (temporaryValue1) {
    temporaryValue1 = sha256HelperDependencyVariant3;
    temporaryValue2 = localState2;
    temporaryValue4 = parameter0;
    temporaryValue3 = temporaryValue1(temporaryValue2, temporaryValue4);
    localState2 = temporaryValue3;
  }
  temporaryValue1 = localState2;
  temporaryValue2 = function () { return sha256InternalStep7.apply(this, arguments); };
  temporaryValue1.create = temporaryValue2;
  temporaryValue1 = localState2;
  temporaryValue4 = function (parameter0) { return sha256InternalStep8.apply(this, arguments); };
  temporaryValue1.update = temporaryValue4;
  localState3 = 0;
  temporaryValue4 = localState3;
  temporaryValue1 = capturedDependency;
  temporaryValue3 = temporaryValue1.length;
  temporaryValue1 = temporaryValue4 < temporaryValue3;
  while (temporaryValue1) {
    temporaryValue1 = capturedDependency;
    temporaryValue2 = localState3;
    temporaryValue3 = temporaryValue1[temporaryValue2];
    localState4 = temporaryValue3;
    temporaryValue2 = localState2;
    temporaryValue1 = localState4;
    temporaryValue4 = sha256HelperDependencyVariant1;
    temporaryValue3 = temporaryValue4(localState4, parameter0);
    temporaryValue2[temporaryValue1] = temporaryValue3;
    temporaryValue1 = localState3;
    temporaryValue1 = temporaryValue1 + 1;
    localState3 = temporaryValue1;
    continue;
  }
  temporaryValue2 = localState2;
  return temporaryValue2;
}

function sha256InternalStep7() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue5;
  let sha256InternalStep1, sha256HelperDependency;

  temporaryValue1 = new sha256InternalStep1(sha256HelperDependency);
  return temporaryValue1;
}

function sha256InternalStep8(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let sha256HelperDependency;

  temporaryValue2 = sha256HelperDependency;
  temporaryValue4 = temporaryValue2.create;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, []);
  temporaryValue4 = temporaryValue1.update;
  temporaryValue5 = parameter0;
  temporaryValue2 = [undefined];
  temporaryValue2[0] = temporaryValue5;
  temporaryValue3 = Reflect.apply(temporaryValue4, temporaryValue1, temporaryValue2);
  return temporaryValue3;
}

function sha256InternalStep9(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue6;
  let localState1, localState2, localState3, localState4, localState5, localState6, sha256HelperCallback, sha256HelperDependencyVariant1, sha256HelperDependencyVariant2;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  temporaryValue1 = sha256HelperCallback();
  localState2 = temporaryValue1;
  temporaryValue3 = sha256HelperDependencyVariant1;
  temporaryValue1 = temporaryValue3();
  temporaryValue2 = temporaryValue1.Buffer;
  localState3 = temporaryValue2;
  temporaryValue1 = parameter1;
  if (temporaryValue1) {
    temporaryValue3 = "sha224";
  } else {
    temporaryValue3 = "sha256";
  }
  localState4 = temporaryValue3;
  temporaryValue1 = localState3;
  temporaryValue3 = temporaryValue1.from;
  if (temporaryValue3) {
    temporaryValue1 = sha256HelperDependencyVariant2;
    temporaryValue2 = temporaryValue1.JS_SHA256_NO_BUFFER_FROM;
    temporaryValue1 = !temporaryValue2;
    temporaryValue3 = temporaryValue1;
  }
  if (temporaryValue3) {
    temporaryValue1 = localState3.from;
    localState5 = temporaryValue1;
  } else {
    temporaryValue1 = function (parameter0) { return sha256InternalStep10.apply(this, arguments); };
    localState5 = temporaryValue1;
  }
  temporaryValue1 = function (parameter0) { return sha256Hex.apply(this, arguments); };
  localState6 = temporaryValue1;
  temporaryValue3 = localState6;
  return temporaryValue3;
}

function sha256InternalStep10(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue4, temporaryValue5;
  let localState1, nodeBufferConstructor;

  localState1 = currentFunction;
  temporaryValue1 = parameter0;
  temporaryValue2 = new nodeBufferConstructor(temporaryValue1);
  return temporaryValue2;
}

function sha256Hex(input) {
  if (typeof input === "string") {
    return capturedStateCreateHash_843.createHash(sha256HexDependency).update(input, "utf8").digest("hex");
  }
  if (input == null) throw new Error(capturedDependency);

  if (input.constructor === ArrayBuffer) input = new Uint8Array(input);
  const nodeCompatible = Array.isArray(input)
    || ArrayBuffer.isView(input)
    || input.constructor === nodeBufferConstructor;

  if (nodeCompatible) {
    return capturedStateCreateHash_843.createHash(sha256HexDependency).update(sha256HexCallbackVariant1(input)).digest("hex");
  }
  return sha256HexCallbackVariant2(input);
}

function sha256InternalStep11(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = function (parameter0, parameter1) { return sha256InternalStep12.apply(this, arguments); };
  return temporaryValue1;
}

function sha256InternalStep12(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let initializeHmacSha256, sha256HelperDependencyVariant1, sha256HelperDependencyVariant2;

  temporaryValue6 = initializeHmacSha256;
  temporaryValue3 = parameter0;
  temporaryValue5 = [undefined, undefined, undefined];
  temporaryValue5[0] = temporaryValue3;
  temporaryValue3 = sha256HelperDependencyVariant1;
  temporaryValue5[1] = temporaryValue3;
  temporaryValue5[2] = true;
  temporaryValue4 = Reflect.construct(temporaryValue6, temporaryValue5);
  temporaryValue3 = temporaryValue4.update;
  temporaryValue6 = parameter1;
  temporaryValue5 = [undefined];
  temporaryValue5[0] = temporaryValue6;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue4, temporaryValue5);
  temporaryValue4 = sha256HelperDependencyVariant2;
  temporaryValue3 = temporaryValue2[temporaryValue4];
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, []);
  return temporaryValue1;
}

function sha256InternalStep13(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, localState2, localState3, localState4, sha256HelperDependency, capturedDependency;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue2 = sha256HelperDependency;
  temporaryValue4 = parameter0;
  temporaryValue1 = temporaryValue2("hex", temporaryValue4);
  localState2 = temporaryValue1;
  temporaryValue1 = localState2;
  temporaryValue2 = function (parameter0) { return sha256InternalStep14.apply(this, arguments); };
  temporaryValue1.create = temporaryValue2;
  temporaryValue1 = localState2;
  temporaryValue3 = function (parameter0, nestedParameter1) { return sha256InternalStep15.apply(this, arguments); };
  temporaryValue1.update = temporaryValue3;
  localState3 = 0;
  temporaryValue1 = localState3;
  temporaryValue3 = capturedDependency;
  temporaryValue4 = temporaryValue3.length;
  temporaryValue5 = temporaryValue1 < temporaryValue4;
  while (temporaryValue5) {
    temporaryValue5 = capturedDependency;
    temporaryValue3 = localState3;
    temporaryValue2 = temporaryValue5[temporaryValue3];
    localState4 = temporaryValue2;
    temporaryValue1 = localState2;
    temporaryValue3 = localState4;
    temporaryValue5 = sha256HelperDependency;
    temporaryValue4 = parameter0;
    temporaryValue2 = temporaryValue5(localState4, temporaryValue4);
    temporaryValue1[temporaryValue3] = temporaryValue2;
    temporaryValue2 = localState3;
    temporaryValue2 = temporaryValue2 + 1;
    localState3 = temporaryValue2;
    continue;
  }
  temporaryValue1 = localState2;
  return temporaryValue1;
}

function sha256InternalStep14(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue5;
  let initializeHmacSha256, sha256HelperDependency;

  temporaryValue5 = parameter0;
  temporaryValue3 = [undefined, undefined];
  temporaryValue3[0] = temporaryValue5;
  temporaryValue5 = sha256HelperDependency;
  temporaryValue3[1] = temporaryValue5;
  temporaryValue1 = Reflect.construct(initializeHmacSha256, temporaryValue3);
  return temporaryValue1;
}

function sha256InternalStep15(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue7;
  let sha256HelperDependency;

  temporaryValue4 = sha256HelperDependency;
  temporaryValue3 = temporaryValue4.create;
  temporaryValue5 = parameter0;
  temporaryValue7 = [undefined];
  temporaryValue7[0] = temporaryValue5;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue4, temporaryValue7);
  temporaryValue4 = temporaryValue1.update;
  temporaryValue5 = parameter1;
  temporaryValue3 = [undefined];
  temporaryValue3[0] = temporaryValue5;
  temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue1, temporaryValue3);
  return temporaryValue2;
}

function sha256Update(input) {
  if (this.finalized) return;

  const isString = typeof input === "string";
  if (!isString) input = normalizeSha256Input(input, capturedDependencyVariant1, capturedDependencyVariant2);

  const blocks = this.blocks;
  let inputIndex = 0;
  const inputLength = input.length;

  while (inputIndex < inputLength) {
    if (this.hashed) {
      this.hashed = false;
      blocks[0] = this.block;
      for (let word = 1; word <= 16; word += 1) blocks[word] = 0;
      this.block = 0;
    }

    let byteIndex = this.start;
    const writeByte = (byte) => {
      blocks[byteIndex >>> 2] |= byte << sha256UpdateDependency[byteIndex & 3];
      byteIndex += 1;
    };

    while (inputIndex < inputLength && byteIndex < 64) {
      if (!isString) {
        writeByte(input[inputIndex++]);
        continue;
      }

      let codePoint = input.charCodeAt(inputIndex++);
      if (codePoint < 0x80) {
        writeByte(codePoint);
      } else if (codePoint < 0x800) {
        writeByte(0xc0 | (codePoint >>> 6));
        writeByte(0x80 | (codePoint & 0x3f));
      } else if (codePoint < 0xd800 || codePoint >= 0xe000) {
        writeByte(0xe0 | (codePoint >>> 12));
        writeByte(0x80 | ((codePoint >>> 6) & 0x3f));
        writeByte(0x80 | (codePoint & 0x3f));
      } else {
        codePoint = 0x10000 + (((codePoint & 0x3ff) << 10) | (input.charCodeAt(inputIndex++) & 0x3ff));
        writeByte(0xf0 | (codePoint >>> 18));
        writeByte(0x80 | ((codePoint >>> 12) & 0x3f));
        writeByte(0x80 | ((codePoint >>> 6) & 0x3f));
        writeByte(0x80 | (codePoint & 0x3f));
      }
    }

    this.lastByteIndex = byteIndex;
    this.bytes += byteIndex - this.start;
    if (byteIndex >= 64) {
      this.block = blocks[16];
      this.start = byteIndex - 64;
      this.hash();
      this.hashed = true;
    } else {
      this.start = byteIndex;
    }
  }

  if (this.bytes > 0xffffffff) {
    this.hBytes += (this.bytes / 0x100000000) << 0;
    this.bytes %= 0x100000000;
  }
  return this;
}

function sha256Finalize() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11, temporaryValue12, temporaryValue13, temporaryValue14, temporaryValue15, temporaryValue16;
  let localState1, localState2, sha256UpdateDependency;

  localState1 = undefined;
  localState2 = undefined;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.finalized;
  if (temporaryValue2) {
    return undefined;
  } else {
    temporaryValue2 = this;
    temporaryValue2.finalized = true;
    temporaryValue1 = this;
    temporaryValue4 = temporaryValue1.blocks;
    localState1 = temporaryValue4;
    temporaryValue1 = this;
    temporaryValue2 = temporaryValue1.lastByteIndex;
    localState2 = temporaryValue2;
    temporaryValue2 = localState1;
    temporaryValue1 = this;
    temporaryValue3 = temporaryValue1.block;
    temporaryValue2[16] = temporaryValue3;
    temporaryValue1 = localState1;
    temporaryValue4 = localState2;
    temporaryValue3 = temporaryValue4 >>> 2;
    temporaryValue4 = temporaryValue1[temporaryValue3];
    temporaryValue5 = sha256UpdateDependency;
    temporaryValue6 = localState2;
    temporaryValue7 = temporaryValue6 & 3;
    temporaryValue2 = temporaryValue5[temporaryValue7];
    temporaryValue2 = temporaryValue4 | temporaryValue2;
    temporaryValue1[temporaryValue3] = temporaryValue2;
    temporaryValue1 = this;
    temporaryValue3 = localState1;
    temporaryValue2 = temporaryValue3[16];
    temporaryValue1.block = temporaryValue2;
    temporaryValue2 = localState2;
    temporaryValue1 = temporaryValue2 >= 56;
    if (temporaryValue1) {
      temporaryValue1 = this;
      temporaryValue2 = temporaryValue1.hashed;
      temporaryValue1 = !temporaryValue2;
      if (temporaryValue1) {
        temporaryValue2 = this;
        temporaryValue3 = temporaryValue2.hash;
        temporaryValue4 = [];
        temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
      }
      temporaryValue1 = localState1;
      temporaryValue2 = this;
      temporaryValue3 = temporaryValue2.block;
      temporaryValue1[0] = temporaryValue3;
      temporaryValue1 = localState1;
      temporaryValue2 = localState1;
      temporaryValue6 = localState1;
      temporaryValue3 = localState1;
      temporaryValue4 = localState1;
      temporaryValue7 = localState1;
      temporaryValue5 = localState1;
      localState1[15] = 0;
      localState1[14] = 0;
      localState1[13] = 0;
      localState1[12] = 0;
      localState1[11] = 0;
      localState1[10] = 0;
      localState1[9] = 0;
      localState1[8] = 0;
      localState1[7] = 0;
      temporaryValue5[6] = 0;
      temporaryValue7[5] = 0;
      temporaryValue4[4] = 0;
      temporaryValue3[3] = 0;
      temporaryValue6[2] = 0;
      temporaryValue2[1] = 0;
      temporaryValue1[16] = 0;
    }
    temporaryValue1 = localState1;
    temporaryValue2 = this;
    temporaryValue3 = temporaryValue2.hBytes;
    temporaryValue4 = temporaryValue3 << 3;
    temporaryValue2 = this;
    temporaryValue3 = temporaryValue2.bytes;
    temporaryValue2 = temporaryValue3 >>> 29;
    temporaryValue5 = temporaryValue4 | temporaryValue2;
    temporaryValue1[14] = temporaryValue5;
    temporaryValue1 = localState1;
    temporaryValue2 = this;
    temporaryValue3 = temporaryValue2.bytes;
    temporaryValue2 = temporaryValue3 << 3;
    temporaryValue1[15] = temporaryValue2;
    temporaryValue2 = this;
    temporaryValue3 = temporaryValue2.hash;
    temporaryValue4 = [];
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
    return undefined;
  }
}

function sha256HashBlock() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue9, temporaryValue12;
  let localState1, localState2, localState3, localState4, localState5, localState6, localState7, localState8, localState9, localState10, localState11, localState12, localState13, localState14, localState15, localState16, localState17, localState18, localState19, localState20, sha256HashBlockDependency;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  localState7 = undefined;
  localState8 = undefined;
  localState9 = undefined;
  localState10 = undefined;
  localState11 = undefined;
  localState12 = undefined;
  localState13 = undefined;
  localState14 = undefined;
  localState15 = undefined;
  localState16 = undefined;
  localState17 = undefined;
  localState18 = undefined;
  localState19 = undefined;
  localState20 = undefined;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.h0;
  localState1 = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue3 = temporaryValue1.h1;
  localState2 = temporaryValue3;
  temporaryValue3 = this;
  temporaryValue1 = temporaryValue3.h2;
  localState3 = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.h3;
  localState4 = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue4 = temporaryValue1.h4;
  localState5 = temporaryValue4;
  temporaryValue1 = this;
  temporaryValue3 = temporaryValue1.h5;
  localState6 = temporaryValue3;
  temporaryValue2 = this;
  temporaryValue1 = temporaryValue2.h6;
  localState7 = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue3 = temporaryValue1.h7;
  localState8 = temporaryValue3;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.blocks;
  localState9 = temporaryValue3;
  localState10 = 16;
  temporaryValue1 = localState10;
  temporaryValue2 = temporaryValue1 < 64;
  while (temporaryValue2) {
    temporaryValue2 = localState9;
    temporaryValue3 = localState10;
    temporaryValue4 = temporaryValue3 - 15;
    temporaryValue1 = temporaryValue2[temporaryValue4];
    localState14 = temporaryValue1;
    temporaryValue1 = localState14;
    temporaryValue2 = temporaryValue1 >>> 7;
    temporaryValue3 = localState14;
    temporaryValue1 = temporaryValue3 << 25;
    temporaryValue3 = temporaryValue2 | temporaryValue1;
    temporaryValue1 = localState14;
    temporaryValue2 = temporaryValue1 >>> 18;
    temporaryValue4 = localState14;
    temporaryValue1 = temporaryValue4 << 14;
    temporaryValue5 = temporaryValue2 | temporaryValue1;
    temporaryValue1 = temporaryValue3 ^ temporaryValue5;
    temporaryValue2 = localState14;
    temporaryValue3 = temporaryValue2 >>> 3;
    temporaryValue2 = temporaryValue1 ^ temporaryValue3;
    localState11 = temporaryValue2;
    temporaryValue1 = localState9;
    temporaryValue3 = localState10;
    temporaryValue4 = temporaryValue3 - 2;
    temporaryValue2 = temporaryValue1[temporaryValue4];
    localState14 = temporaryValue2;
    temporaryValue1 = localState14;
    temporaryValue2 = temporaryValue1 >>> 17;
    temporaryValue1 = localState14;
    temporaryValue6 = temporaryValue1 << 15;
    temporaryValue1 = temporaryValue2 | temporaryValue6;
    temporaryValue4 = localState14;
    temporaryValue2 = temporaryValue4 >>> 19;
    temporaryValue3 = localState14;
    temporaryValue4 = temporaryValue3 << 13;
    temporaryValue5 = temporaryValue2 | temporaryValue4;
    temporaryValue2 = temporaryValue1 ^ temporaryValue5;
    temporaryValue3 = localState14;
    temporaryValue1 = temporaryValue3 >>> 10;
    temporaryValue3 = temporaryValue2 ^ temporaryValue1;
    localState12 = temporaryValue3;
    temporaryValue1 = localState9;
    temporaryValue2 = localState10;
    temporaryValue3 = localState9;
    temporaryValue4 = localState10;
    temporaryValue7 = temporaryValue4 - 16;
    temporaryValue5 = temporaryValue3[temporaryValue7];
    temporaryValue3 = localState11;
    temporaryValue4 = temporaryValue5 + temporaryValue3;
    temporaryValue3 = localState9;
    temporaryValue6 = localState10 - 7;
    temporaryValue5 = temporaryValue3[temporaryValue6];
    temporaryValue3 = temporaryValue4 + temporaryValue5;
    temporaryValue4 = localState12;
    temporaryValue6 = temporaryValue3 + temporaryValue4;
    temporaryValue4 = temporaryValue6 << 0;
    temporaryValue1[temporaryValue2] = temporaryValue4;
    temporaryValue1 = localState10;
    temporaryValue1 = temporaryValue1 + 1;
    localState10 = temporaryValue1;
    continue;
  }
  temporaryValue1 = localState2;
  temporaryValue2 = localState3;
  temporaryValue3 = temporaryValue1 & temporaryValue2;
  localState20 = temporaryValue3;
  localState10 = 0;
  temporaryValue2 = localState10;
  temporaryValue1 = temporaryValue2 < 64;
  while (temporaryValue1) {
    temporaryValue3 = this;
    temporaryValue1 = temporaryValue3.first;
    if (temporaryValue1) {
      temporaryValue1 = this;
      temporaryValue2 = temporaryValue1.is224;
      if (temporaryValue2) {
        localState17 = 300032;
        temporaryValue1 = localState9;
        temporaryValue2 = temporaryValue1[0];
        temporaryValue1 = temporaryValue2 - "<double high=1104482086 low=-1765801984>";
        localState14 = temporaryValue1;
        temporaryValue1 = localState14;
        temporaryValue2 = temporaryValue1 - 150054599;
        temporaryValue1 = temporaryValue2 << 0;
        localState8 = temporaryValue1;
        temporaryValue1 = localState14;
        temporaryValue2 = temporaryValue1 + 24177077;
        temporaryValue1 = temporaryValue2 << 0;
        localState4 = temporaryValue1;
      } else {
        localState17 = 704751109;
        temporaryValue1 = localState9;
        temporaryValue2 = temporaryValue1[0];
        temporaryValue3 = temporaryValue2 - 210244248;
        localState14 = temporaryValue3;
        temporaryValue1 = localState14;
        temporaryValue2 = temporaryValue1 - "<double high=1104587778 low=-1317011456>";
        temporaryValue1 = temporaryValue2 << 0;
        localState8 = temporaryValue1;
        temporaryValue1 = localState14;
        temporaryValue2 = temporaryValue1 + 143694565;
        temporaryValue4 = temporaryValue2 << 0;
        localState4 = temporaryValue4;
      }
      temporaryValue2 = this;
      temporaryValue2.first = false;
    } else {
      temporaryValue1 = localState1;
      temporaryValue2 = temporaryValue1 >>> 2;
      temporaryValue1 = localState1;
      temporaryValue3 = temporaryValue1 << 30;
      temporaryValue1 = temporaryValue2 | temporaryValue3;
      temporaryValue2 = localState1;
      temporaryValue3 = temporaryValue2 >>> 13;
      temporaryValue2 = localState1;
      temporaryValue4 = temporaryValue2 << 19;
      temporaryValue2 = temporaryValue3 | temporaryValue4;
      temporaryValue4 = temporaryValue1 ^ temporaryValue2;
      temporaryValue1 = localState1;
      temporaryValue2 = temporaryValue1 >>> 22;
      temporaryValue1 = localState1;
      temporaryValue5 = temporaryValue1 << 10;
      temporaryValue1 = temporaryValue2 | temporaryValue5;
      temporaryValue2 = temporaryValue4 ^ temporaryValue1;
      localState11 = temporaryValue2;
      temporaryValue2 = localState5;
      temporaryValue1 = temporaryValue2 >>> 6;
      temporaryValue2 = localState5;
      temporaryValue3 = temporaryValue2 << 26;
      temporaryValue2 = temporaryValue1 | temporaryValue3;
      temporaryValue1 = localState5;
      temporaryValue3 = temporaryValue1 >>> 11;
      temporaryValue4 = localState5;
      temporaryValue1 = temporaryValue4 << 21;
      temporaryValue4 = temporaryValue3 | temporaryValue1;
      temporaryValue1 = temporaryValue2 ^ temporaryValue4;
      temporaryValue3 = localState5;
      temporaryValue4 = temporaryValue3 >>> 25;
      temporaryValue2 = localState5;
      temporaryValue3 = temporaryValue2 << 7;
      temporaryValue2 = temporaryValue4 | temporaryValue3;
      temporaryValue3 = temporaryValue1 ^ temporaryValue2;
      localState12 = temporaryValue3;
      temporaryValue1 = localState1;
      temporaryValue3 = localState2;
      temporaryValue2 = temporaryValue1 & temporaryValue3;
      localState17 = temporaryValue2;
      temporaryValue1 = localState17;
      temporaryValue2 = localState1;
      temporaryValue3 = localState3;
      temporaryValue5 = temporaryValue2 & temporaryValue3;
      temporaryValue2 = temporaryValue1 ^ temporaryValue5;
      temporaryValue1 = localState20;
      temporaryValue3 = temporaryValue2 ^ temporaryValue1;
      localState13 = temporaryValue3;
      temporaryValue1 = localState5;
      temporaryValue2 = localState6;
      temporaryValue4 = temporaryValue1 & temporaryValue2;
      temporaryValue1 = localState5;
      temporaryValue2 = ~temporaryValue1;
      temporaryValue3 = localState7;
      temporaryValue7 = temporaryValue2 & temporaryValue3;
      temporaryValue2 = temporaryValue4 ^ temporaryValue7;
      localState16 = temporaryValue2;
      temporaryValue3 = localState8;
      temporaryValue2 = localState12;
      temporaryValue1 = temporaryValue3 + temporaryValue2;
      temporaryValue2 = localState16;
      temporaryValue7 = temporaryValue1 + temporaryValue2;
      temporaryValue1 = sha256HashBlockDependency;
      temporaryValue5 = localState10;
      temporaryValue2 = temporaryValue1[temporaryValue5];
      temporaryValue1 = temporaryValue7 + temporaryValue2;
      temporaryValue2 = localState9;
      temporaryValue5 = localState10;
      temporaryValue3 = temporaryValue2[temporaryValue5];
      temporaryValue2 = temporaryValue1 + temporaryValue3;
      localState14 = temporaryValue2;
      temporaryValue1 = localState11;
      temporaryValue2 = localState13;
      temporaryValue4 = temporaryValue1 + temporaryValue2;
      localState15 = temporaryValue4;
      temporaryValue2 = localState4;
      temporaryValue1 = localState14;
      temporaryValue3 = temporaryValue2 + temporaryValue1;
      temporaryValue4 = temporaryValue3 << 0;
      localState8 = temporaryValue4;
      temporaryValue5 = localState14;
      temporaryValue1 = localState15;
      temporaryValue2 = temporaryValue5 + temporaryValue1;
      temporaryValue3 = temporaryValue2 << 0;
      localState4 = temporaryValue3;
    }
    temporaryValue2 = localState4;
    temporaryValue3 = temporaryValue2 >>> 2;
    temporaryValue1 = localState4;
    temporaryValue2 = temporaryValue1 << 30;
    temporaryValue4 = temporaryValue3 | temporaryValue2;
    temporaryValue2 = localState4;
    temporaryValue6 = temporaryValue2 >>> 13;
    temporaryValue1 = localState4;
    temporaryValue7 = temporaryValue1 << 19;
    temporaryValue1 = temporaryValue6 | temporaryValue7;
    temporaryValue2 = temporaryValue4 ^ temporaryValue1;
    temporaryValue1 = localState4;
    temporaryValue3 = temporaryValue1 >>> 22;
    temporaryValue4 = localState4;
    temporaryValue1 = temporaryValue4 << 10;
    temporaryValue4 = temporaryValue3 | temporaryValue1;
    temporaryValue1 = temporaryValue2 ^ temporaryValue4;
    localState11 = temporaryValue1;
    temporaryValue1 = localState8;
    temporaryValue2 = temporaryValue1 >>> 6;
    temporaryValue3 = localState8;
    temporaryValue1 = temporaryValue3 << 26;
    temporaryValue5 = temporaryValue2 | temporaryValue1;
    temporaryValue2 = localState8;
    temporaryValue1 = temporaryValue2 >>> 11;
    temporaryValue2 = localState8;
    temporaryValue3 = temporaryValue2 << 21;
    temporaryValue2 = temporaryValue1 | temporaryValue3;
    temporaryValue12 = temporaryValue5 ^ temporaryValue2;
    temporaryValue1 = localState8;
    temporaryValue2 = temporaryValue1 >>> 25;
    temporaryValue1 = localState8;
    temporaryValue3 = temporaryValue1 << 7;
    temporaryValue1 = temporaryValue2 | temporaryValue3;
    temporaryValue2 = temporaryValue12 ^ temporaryValue1;
    localState12 = temporaryValue2;
    temporaryValue1 = localState4;
    temporaryValue2 = localState1;
    temporaryValue3 = temporaryValue1 & temporaryValue2;
    localState18 = temporaryValue3;
    temporaryValue1 = localState18;
    temporaryValue2 = localState4;
    temporaryValue3 = localState2;
    temporaryValue5 = temporaryValue2 & temporaryValue3;
    temporaryValue2 = temporaryValue1 ^ temporaryValue5;
    temporaryValue1 = localState17;
    temporaryValue3 = temporaryValue2 ^ temporaryValue1;
    localState13 = temporaryValue3;
    temporaryValue1 = localState8;
    temporaryValue2 = localState5;
    temporaryValue3 = temporaryValue1 & temporaryValue2;
    temporaryValue1 = localState8;
    temporaryValue2 = ~temporaryValue1;
    temporaryValue1 = localState6;
    temporaryValue5 = temporaryValue2 & temporaryValue1;
    temporaryValue2 = temporaryValue3 ^ temporaryValue5;
    localState16 = temporaryValue2;
    temporaryValue1 = localState7;
    temporaryValue2 = localState12;
    temporaryValue3 = temporaryValue1 + temporaryValue2;
    temporaryValue1 = localState16;
    temporaryValue2 = temporaryValue3 + temporaryValue1;
    temporaryValue1 = sha256HashBlockDependency;
    temporaryValue3 = localState10;
    temporaryValue4 = temporaryValue3 + 1;
    temporaryValue6 = temporaryValue1[temporaryValue4];
    temporaryValue1 = temporaryValue2 + temporaryValue6;
    temporaryValue4 = localState9;
    temporaryValue2 = localState10;
    temporaryValue5 = temporaryValue2 + 1;
    temporaryValue3 = temporaryValue4[temporaryValue5];
    temporaryValue2 = temporaryValue1 + temporaryValue3;
    localState14 = temporaryValue2;
    temporaryValue2 = localState11;
    temporaryValue3 = localState13;
    temporaryValue1 = temporaryValue2 + temporaryValue3;
    localState15 = temporaryValue1;
    temporaryValue1 = localState3;
    temporaryValue2 = localState14;
    temporaryValue3 = temporaryValue1 + temporaryValue2;
    temporaryValue1 = temporaryValue3 << 0;
    localState7 = temporaryValue1;
    temporaryValue2 = localState14;
    temporaryValue1 = localState15;
    temporaryValue3 = temporaryValue2 + temporaryValue1;
    temporaryValue1 = temporaryValue3 << 0;
    localState3 = temporaryValue1;
    temporaryValue2 = localState3;
    temporaryValue1 = temporaryValue2 >>> 2;
    temporaryValue3 = localState3;
    temporaryValue4 = temporaryValue3 << 30;
    temporaryValue2 = temporaryValue1 | temporaryValue4;
    temporaryValue1 = localState3;
    temporaryValue3 = temporaryValue1 >>> 13;
    temporaryValue4 = localState3;
    temporaryValue1 = temporaryValue4 << 19;
    temporaryValue4 = temporaryValue3 | temporaryValue1;
    temporaryValue1 = temporaryValue2 ^ temporaryValue4;
    temporaryValue4 = localState3;
    temporaryValue3 = temporaryValue4 >>> 22;
    temporaryValue2 = localState3;
    temporaryValue4 = temporaryValue2 << 10;
    temporaryValue2 = temporaryValue3 | temporaryValue4;
    temporaryValue3 = temporaryValue1 ^ temporaryValue2;
    localState11 = temporaryValue3;
    temporaryValue1 = localState7;
    temporaryValue2 = temporaryValue1 >>> 6;
    temporaryValue1 = localState7;
    temporaryValue4 = temporaryValue1 << 26;
    temporaryValue1 = temporaryValue2 | temporaryValue4;
    temporaryValue2 = localState7;
    temporaryValue4 = temporaryValue2 >>> 11;
    temporaryValue2 = localState7;
    temporaryValue3 = temporaryValue2 << 21;
    temporaryValue6 = temporaryValue4 | temporaryValue3;
    temporaryValue2 = temporaryValue1 ^ temporaryValue6;
    temporaryValue1 = localState7;
    temporaryValue3 = temporaryValue1 >>> 25;
    temporaryValue1 = localState7;
    temporaryValue4 = temporaryValue1 << 7;
    temporaryValue1 = temporaryValue3 | temporaryValue4;
    temporaryValue3 = temporaryValue2 ^ temporaryValue1;
    localState12 = temporaryValue3;
    temporaryValue1 = localState3;
    temporaryValue4 = localState4;
    temporaryValue2 = temporaryValue1 & temporaryValue4;
    localState19 = temporaryValue2;
    temporaryValue4 = localState19;
    temporaryValue1 = localState3;
    temporaryValue6 = localState1;
    temporaryValue2 = temporaryValue1 & temporaryValue6;
    temporaryValue3 = temporaryValue4 ^ temporaryValue2;
    temporaryValue1 = localState18;
    temporaryValue2 = temporaryValue3 ^ temporaryValue1;
    localState13 = temporaryValue2;
    temporaryValue1 = localState7;
    temporaryValue2 = localState8;
    temporaryValue3 = temporaryValue1 & temporaryValue2;
    temporaryValue2 = localState7;
    temporaryValue1 = ~temporaryValue2;
    temporaryValue2 = localState5;
    temporaryValue4 = temporaryValue1 & temporaryValue2;
    temporaryValue1 = temporaryValue3 ^ temporaryValue4;
    localState16 = temporaryValue1;
    temporaryValue1 = localState6;
    temporaryValue3 = localState12;
    temporaryValue2 = temporaryValue1 + temporaryValue3;
    temporaryValue3 = localState16;
    temporaryValue1 = temporaryValue2 + temporaryValue3;
    temporaryValue2 = sha256HashBlockDependency;
    temporaryValue6 = localState10;
    temporaryValue7 = temporaryValue6 + 2;
    temporaryValue4 = temporaryValue2[temporaryValue7];
    temporaryValue2 = temporaryValue1 + temporaryValue4;
    temporaryValue1 = localState9;
    temporaryValue4 = localState10;
    temporaryValue5 = temporaryValue4 + 2;
    temporaryValue3 = temporaryValue1[temporaryValue5];
    temporaryValue1 = temporaryValue2 + temporaryValue3;
    localState14 = temporaryValue1;
    temporaryValue1 = localState11;
    temporaryValue2 = localState13;
    temporaryValue3 = temporaryValue1 + temporaryValue2;
    localState15 = temporaryValue3;
    temporaryValue1 = localState2;
    temporaryValue2 = localState14;
    temporaryValue4 = temporaryValue1 + temporaryValue2;
    temporaryValue1 = temporaryValue4 << 0;
    localState6 = temporaryValue1;
    temporaryValue2 = localState14;
    temporaryValue1 = localState15;
    temporaryValue3 = temporaryValue2 + temporaryValue1;
    temporaryValue1 = temporaryValue3 << 0;
    localState2 = temporaryValue1;
    temporaryValue1 = localState2;
    temporaryValue3 = temporaryValue1 >>> 2;
    temporaryValue1 = localState2;
    temporaryValue2 = temporaryValue1 << 30;
    temporaryValue1 = temporaryValue3 | temporaryValue2;
    temporaryValue2 = localState2;
    temporaryValue3 = temporaryValue2 >>> 13;
    temporaryValue2 = localState2;
    temporaryValue4 = temporaryValue2 << 19;
    temporaryValue5 = temporaryValue3 | temporaryValue4;
    temporaryValue2 = temporaryValue1 ^ temporaryValue5;
    temporaryValue1 = localState2;
    temporaryValue3 = temporaryValue1 >>> 22;
    temporaryValue1 = localState2;
    temporaryValue4 = temporaryValue1 << 10;
    temporaryValue1 = temporaryValue3 | temporaryValue4;
    temporaryValue3 = temporaryValue2 ^ temporaryValue1;
    localState11 = temporaryValue3;
    temporaryValue1 = localState6;
    temporaryValue3 = temporaryValue1 >>> 6;
    temporaryValue1 = localState6;
    temporaryValue2 = temporaryValue1 << 26;
    temporaryValue1 = temporaryValue3 | temporaryValue2;
    temporaryValue2 = localState6;
    temporaryValue4 = temporaryValue2 >>> 11;
    temporaryValue2 = localState6;
    temporaryValue6 = temporaryValue2 << 21;
    temporaryValue2 = temporaryValue4 | temporaryValue6;
    temporaryValue3 = temporaryValue1 ^ temporaryValue2;
    temporaryValue1 = localState6;
    temporaryValue2 = temporaryValue1 >>> 25;
    temporaryValue4 = localState6;
    temporaryValue5 = temporaryValue4 << 7;
    temporaryValue1 = temporaryValue2 | temporaryValue5;
    temporaryValue2 = temporaryValue3 ^ temporaryValue1;
    localState12 = temporaryValue2;
    temporaryValue1 = localState2;
    temporaryValue4 = localState3;
    temporaryValue3 = temporaryValue1 & temporaryValue4;
    localState20 = temporaryValue3;
    temporaryValue1 = localState20;
    temporaryValue3 = localState2;
    temporaryValue2 = localState4;
    temporaryValue4 = temporaryValue3 & temporaryValue2;
    temporaryValue2 = temporaryValue1 ^ temporaryValue4;
    temporaryValue1 = localState19;
    temporaryValue3 = temporaryValue2 ^ temporaryValue1;
    localState13 = temporaryValue3;
    temporaryValue1 = localState6;
    temporaryValue2 = localState7;
    temporaryValue3 = temporaryValue1 & temporaryValue2;
    temporaryValue2 = localState6;
    temporaryValue1 = ~temporaryValue2;
    temporaryValue2 = localState8;
    temporaryValue4 = temporaryValue1 & temporaryValue2;
    temporaryValue2 = temporaryValue3 ^ temporaryValue4;
    localState16 = temporaryValue2;
    temporaryValue2 = localState5;
    temporaryValue1 = localState12;
    temporaryValue3 = temporaryValue2 + temporaryValue1;
    temporaryValue1 = localState16;
    temporaryValue5 = temporaryValue3 + temporaryValue1;
    temporaryValue1 = sha256HashBlockDependency;
    temporaryValue3 = localState10;
    temporaryValue4 = temporaryValue3 + 3;
    temporaryValue2 = temporaryValue1[temporaryValue4];
    temporaryValue3 = temporaryValue5 + temporaryValue2;
    temporaryValue2 = localState9;
    temporaryValue4 = localState10;
    temporaryValue5 = temporaryValue4 + 3;
    temporaryValue1 = temporaryValue2[temporaryValue5];
    temporaryValue2 = temporaryValue3 + temporaryValue1;
    localState14 = temporaryValue2;
    temporaryValue1 = localState11;
    temporaryValue2 = localState13;
    temporaryValue3 = temporaryValue1 + temporaryValue2;
    localState15 = temporaryValue3;
    temporaryValue1 = localState1;
    temporaryValue2 = localState14;
    temporaryValue4 = temporaryValue1 + temporaryValue2;
    temporaryValue1 = temporaryValue4 << 0;
    localState5 = temporaryValue1;
    temporaryValue1 = localState14;
    temporaryValue2 = localState15;
    temporaryValue3 = temporaryValue1 + temporaryValue2;
    temporaryValue1 = temporaryValue3 << 0;
    localState1 = temporaryValue1;
    temporaryValue1 = this;
    temporaryValue1.chromeBugWorkAround = true;
    temporaryValue1 = localState10;
    temporaryValue2 = 4;
    temporaryValue2 = temporaryValue1 + temporaryValue2;
    localState10 = temporaryValue2;
    continue;
  }
  temporaryValue1 = this;
  temporaryValue2 = this;
  temporaryValue4 = temporaryValue2.h0;
  temporaryValue2 = localState1;
  temporaryValue3 = temporaryValue4 + temporaryValue2;
  temporaryValue2 = temporaryValue3 << 0;
  temporaryValue1.h0 = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.h1;
  temporaryValue2 = localState2;
  temporaryValue4 = temporaryValue3 + temporaryValue2;
  temporaryValue2 = temporaryValue4 << 0;
  temporaryValue1.h1 = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.h2;
  temporaryValue5 = localState3;
  temporaryValue2 = temporaryValue3 + temporaryValue5;
  temporaryValue4 = temporaryValue2 << 0;
  temporaryValue1.h2 = temporaryValue4;
  temporaryValue1 = this;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.h3;
  temporaryValue12 = localState4;
  temporaryValue2 = temporaryValue3 + temporaryValue12;
  temporaryValue3 = temporaryValue2 << 0;
  temporaryValue1.h3 = temporaryValue3;
  temporaryValue1 = this;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.h4;
  temporaryValue2 = localState5;
  temporaryValue7 = temporaryValue3 + temporaryValue2;
  temporaryValue2 = temporaryValue7 << 0;
  temporaryValue1.h4 = temporaryValue2;
  temporaryValue3 = this;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.h5;
  temporaryValue1 = localState6;
  temporaryValue5 = temporaryValue2 + temporaryValue1;
  temporaryValue1 = temporaryValue5 << 0;
  temporaryValue3.h5 = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue4 = this;
  temporaryValue2 = temporaryValue4.h6;
  temporaryValue3 = localState7;
  temporaryValue4 = temporaryValue2 + temporaryValue3;
  temporaryValue2 = temporaryValue4 << 0;
  temporaryValue1.h6 = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue2 = this;
  temporaryValue4 = temporaryValue2.h7;
  temporaryValue3 = localState8;
  temporaryValue2 = temporaryValue4 + temporaryValue3;
  temporaryValue3 = temporaryValue2 << 0;
  temporaryValue1.h7 = temporaryValue3;
  return undefined;
}

function sha256HexDigest() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8;
  let localState1, localState2, localState3, localState4, localState5, localState6, localState7, localState8, localState9, sha256HexDigestDependency;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  localState7 = undefined;
  localState8 = undefined;
  localState9 = undefined;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.finalize;
  temporaryValue6 = [];
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue6);
  temporaryValue2 = this;
  temporaryValue1 = temporaryValue2.h0;
  localState1 = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.h1;
  localState2 = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.h2;
  localState3 = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.h3;
  localState4 = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue5 = temporaryValue1.h4;
  localState5 = temporaryValue5;
  temporaryValue1 = this;
  temporaryValue4 = temporaryValue1.h5;
  localState6 = temporaryValue4;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.h6;
  localState7 = temporaryValue2;
  temporaryValue2 = this;
  temporaryValue1 = temporaryValue2.h7;
  localState8 = temporaryValue1;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue3 = localState1;
  temporaryValue4 = temporaryValue3 >>> 28;
  temporaryValue3 = temporaryValue4 & 15;
  temporaryValue2 = temporaryValue1[temporaryValue3];
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue4 = localState1;
  temporaryValue5 = temporaryValue4 >>> 24;
  temporaryValue4 = temporaryValue5 & 15;
  temporaryValue3 = temporaryValue1[temporaryValue4];
  temporaryValue1 = temporaryValue2 + temporaryValue3;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue4 = localState1;
  temporaryValue5 = temporaryValue4 >>> 20;
  temporaryValue6 = temporaryValue5 & 15;
  temporaryValue3 = temporaryValue2[temporaryValue6];
  temporaryValue2 = temporaryValue1 + temporaryValue3;
  temporaryValue3 = sha256HexDigestDependency;
  temporaryValue5 = localState1;
  temporaryValue1 = temporaryValue5 >>> 16;
  temporaryValue6 = temporaryValue1 & 15;
  temporaryValue4 = temporaryValue3[temporaryValue6];
  temporaryValue1 = temporaryValue2 + temporaryValue4;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue4 = localState1;
  temporaryValue7 = temporaryValue4 >>> 12;
  temporaryValue4 = temporaryValue7 & 15;
  temporaryValue3 = temporaryValue2[temporaryValue4];
  temporaryValue2 = temporaryValue1 + temporaryValue3;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue5 = localState1;
  temporaryValue4 = temporaryValue5 >>> 8;
  temporaryValue7 = temporaryValue4 & 15;
  temporaryValue3 = temporaryValue1[temporaryValue7];
  temporaryValue1 = temporaryValue2 + temporaryValue3;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue4 = localState1;
  temporaryValue5 = temporaryValue4 >>> 4;
  temporaryValue8 = temporaryValue5 & 15;
  temporaryValue3 = temporaryValue2[temporaryValue8];
  temporaryValue2 = temporaryValue1 + temporaryValue3;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue6 = localState1;
  temporaryValue3 = temporaryValue6 & 15;
  temporaryValue4 = temporaryValue1[temporaryValue3];
  temporaryValue3 = temporaryValue2 + temporaryValue4;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue5 = localState2;
  temporaryValue2 = temporaryValue5 >>> 28;
  temporaryValue5 = temporaryValue2 & 15;
  temporaryValue4 = temporaryValue1[temporaryValue5];
  temporaryValue1 = temporaryValue3 + temporaryValue4;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue3 = localState2;
  temporaryValue6 = temporaryValue3 >>> 24;
  temporaryValue3 = temporaryValue6 & 15;
  temporaryValue4 = temporaryValue2[temporaryValue3];
  temporaryValue2 = temporaryValue1 + temporaryValue4;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue4 = localState2;
  temporaryValue6 = temporaryValue4 >>> 20;
  temporaryValue4 = temporaryValue6 & 15;
  temporaryValue3 = temporaryValue1[temporaryValue4];
  temporaryValue4 = temporaryValue2 + temporaryValue3;
  temporaryValue6 = sha256HexDigestDependency;
  temporaryValue3 = localState2;
  temporaryValue1 = temporaryValue3 >>> 16;
  temporaryValue5 = temporaryValue1 & 15;
  temporaryValue2 = temporaryValue6[temporaryValue5];
  temporaryValue1 = temporaryValue4 + temporaryValue2;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue3 = localState2;
  temporaryValue6 = temporaryValue3 >>> 12;
  temporaryValue3 = temporaryValue6 & 15;
  temporaryValue5 = temporaryValue2[temporaryValue3];
  temporaryValue2 = temporaryValue1 + temporaryValue5;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue4 = localState2;
  temporaryValue5 = temporaryValue4 >>> 8;
  temporaryValue4 = temporaryValue5 & 15;
  temporaryValue3 = temporaryValue1[temporaryValue4];
  temporaryValue5 = temporaryValue2 + temporaryValue3;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue2 = localState2;
  temporaryValue4 = temporaryValue2 >>> 4;
  temporaryValue2 = temporaryValue4 & 15;
  temporaryValue3 = temporaryValue1[temporaryValue2];
  temporaryValue1 = temporaryValue5 + temporaryValue3;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue5 = localState2;
  temporaryValue4 = temporaryValue5 & 15;
  temporaryValue3 = temporaryValue2[temporaryValue4];
  temporaryValue2 = temporaryValue1 + temporaryValue3;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue4 = localState3;
  temporaryValue5 = temporaryValue4 >>> 28;
  temporaryValue4 = temporaryValue5 & 15;
  temporaryValue3 = temporaryValue1[temporaryValue4];
  temporaryValue1 = temporaryValue2 + temporaryValue3;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue3 = localState3;
  temporaryValue5 = temporaryValue3 >>> 24;
  temporaryValue3 = temporaryValue5 & 15;
  temporaryValue4 = temporaryValue2[temporaryValue3];
  temporaryValue3 = temporaryValue1 + temporaryValue4;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue5 = localState3;
  temporaryValue4 = temporaryValue5 >>> 20;
  temporaryValue6 = temporaryValue4 & 15;
  temporaryValue1 = temporaryValue2[temporaryValue6];
  temporaryValue2 = temporaryValue3 + temporaryValue1;
  temporaryValue3 = sha256HexDigestDependency;
  temporaryValue4 = localState3;
  temporaryValue5 = temporaryValue4 >>> 16;
  temporaryValue4 = temporaryValue5 & 15;
  temporaryValue1 = temporaryValue3[temporaryValue4];
  temporaryValue3 = temporaryValue2 + temporaryValue1;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue4 = localState3;
  temporaryValue5 = temporaryValue4 >>> 12;
  temporaryValue6 = temporaryValue5 & 15;
  temporaryValue1 = temporaryValue2[temporaryValue6];
  temporaryValue2 = temporaryValue3 + temporaryValue1;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue5 = localState3;
  temporaryValue6 = temporaryValue5 >>> 8;
  temporaryValue3 = temporaryValue6 & 15;
  temporaryValue4 = temporaryValue1[temporaryValue3];
  temporaryValue3 = temporaryValue2 + temporaryValue4;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue4 = localState3;
  temporaryValue5 = temporaryValue4 >>> 4;
  temporaryValue7 = temporaryValue5 & 15;
  temporaryValue2 = temporaryValue1[temporaryValue7];
  temporaryValue1 = temporaryValue3 + temporaryValue2;
  temporaryValue5 = sha256HexDigestDependency;
  temporaryValue4 = localState3;
  temporaryValue2 = temporaryValue4 & 15;
  temporaryValue3 = temporaryValue5[temporaryValue2];
  temporaryValue2 = temporaryValue1 + temporaryValue3;
  temporaryValue3 = sha256HexDigestDependency;
  temporaryValue5 = localState4;
  temporaryValue7 = temporaryValue5 >>> 28;
  temporaryValue5 = temporaryValue7 & 15;
  temporaryValue4 = temporaryValue3[temporaryValue5];
  temporaryValue1 = temporaryValue2 + temporaryValue4;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue4 = localState4;
  temporaryValue6 = temporaryValue4 >>> 24;
  temporaryValue8 = temporaryValue6 & 15;
  temporaryValue3 = temporaryValue2[temporaryValue8];
  temporaryValue2 = temporaryValue1 + temporaryValue3;
  temporaryValue3 = sha256HexDigestDependency;
  temporaryValue5 = localState4;
  temporaryValue4 = temporaryValue5 >>> 20;
  temporaryValue5 = temporaryValue4 & 15;
  temporaryValue1 = temporaryValue3[temporaryValue5];
  temporaryValue3 = temporaryValue2 + temporaryValue1;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue4 = localState4;
  temporaryValue5 = temporaryValue4 >>> 16;
  temporaryValue7 = temporaryValue5 & 15;
  temporaryValue2 = temporaryValue1[temporaryValue7];
  temporaryValue1 = temporaryValue3 + temporaryValue2;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue4 = localState4;
  temporaryValue5 = temporaryValue4 >>> 12;
  temporaryValue4 = temporaryValue5 & 15;
  temporaryValue3 = temporaryValue2[temporaryValue4];
  temporaryValue4 = temporaryValue1 + temporaryValue3;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue5 = localState4;
  temporaryValue3 = temporaryValue5 >>> 8;
  temporaryValue7 = temporaryValue3 & 15;
  temporaryValue2 = temporaryValue1[temporaryValue7];
  temporaryValue6 = temporaryValue4 + temporaryValue2;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue3 = localState4;
  temporaryValue4 = temporaryValue3 >>> 4;
  temporaryValue3 = temporaryValue4 & 15;
  temporaryValue2 = temporaryValue1[temporaryValue3];
  temporaryValue1 = temporaryValue6 + temporaryValue2;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue4 = localState4;
  temporaryValue5 = temporaryValue4 & 15;
  temporaryValue3 = temporaryValue2[temporaryValue5];
  temporaryValue2 = temporaryValue1 + temporaryValue3;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue5 = localState5;
  temporaryValue4 = temporaryValue5 >>> 28;
  temporaryValue5 = temporaryValue4 & 15;
  temporaryValue3 = temporaryValue1[temporaryValue5];
  temporaryValue7 = temporaryValue2 + temporaryValue3;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue2 = localState5;
  temporaryValue4 = temporaryValue2 >>> 24;
  temporaryValue2 = temporaryValue4 & 15;
  temporaryValue3 = temporaryValue1[temporaryValue2];
  temporaryValue1 = temporaryValue7 + temporaryValue3;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue4 = localState5;
  temporaryValue6 = temporaryValue4 >>> 20;
  temporaryValue5 = temporaryValue6 & 15;
  temporaryValue3 = temporaryValue2[temporaryValue5];
  temporaryValue2 = temporaryValue1 + temporaryValue3;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue5 = localState5;
  temporaryValue3 = temporaryValue5 >>> 16;
  temporaryValue5 = temporaryValue3 & 15;
  temporaryValue4 = temporaryValue1[temporaryValue5];
  temporaryValue3 = temporaryValue2 + temporaryValue4;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue6 = localState5;
  temporaryValue5 = temporaryValue6 >>> 12;
  temporaryValue4 = temporaryValue5 & 15;
  temporaryValue2 = temporaryValue1[temporaryValue4];
  temporaryValue1 = temporaryValue3 + temporaryValue2;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue6 = localState5;
  temporaryValue5 = temporaryValue6 >>> 8;
  temporaryValue4 = temporaryValue5 & 15;
  temporaryValue3 = temporaryValue2[temporaryValue4];
  temporaryValue2 = temporaryValue1 + temporaryValue3;
  temporaryValue3 = sha256HexDigestDependency;
  temporaryValue4 = localState5;
  temporaryValue5 = temporaryValue4 >>> 4;
  temporaryValue4 = temporaryValue5 & 15;
  temporaryValue1 = temporaryValue3[temporaryValue4];
  temporaryValue3 = temporaryValue2 + temporaryValue1;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue4 = localState5;
  temporaryValue8 = temporaryValue4 & 15;
  temporaryValue1 = temporaryValue2[temporaryValue8];
  temporaryValue2 = temporaryValue3 + temporaryValue1;
  temporaryValue3 = sha256HexDigestDependency;
  temporaryValue1 = localState6;
  temporaryValue7 = temporaryValue1 >>> 28;
  temporaryValue6 = temporaryValue7 & 15;
  temporaryValue4 = temporaryValue3[temporaryValue6];
  temporaryValue1 = temporaryValue2 + temporaryValue4;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue4 = localState6;
  temporaryValue5 = temporaryValue4 >>> 24;
  temporaryValue6 = temporaryValue5 & 15;
  temporaryValue3 = temporaryValue2[temporaryValue6];
  temporaryValue2 = temporaryValue1 + temporaryValue3;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue4 = localState6;
  temporaryValue5 = temporaryValue4 >>> 20;
  temporaryValue4 = temporaryValue5 & 15;
  temporaryValue3 = temporaryValue1[temporaryValue4];
  temporaryValue1 = temporaryValue2 + temporaryValue3;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue4 = localState6;
  temporaryValue5 = temporaryValue4 >>> 16;
  temporaryValue6 = temporaryValue5 & 15;
  temporaryValue3 = temporaryValue2[temporaryValue6];
  temporaryValue2 = temporaryValue1 + temporaryValue3;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue4 = localState6;
  temporaryValue5 = temporaryValue4 >>> 12;
  temporaryValue4 = temporaryValue5 & 15;
  temporaryValue3 = temporaryValue1[temporaryValue4];
  temporaryValue1 = temporaryValue2 + temporaryValue3;
  temporaryValue4 = sha256HexDigestDependency;
  temporaryValue3 = localState6;
  temporaryValue5 = temporaryValue3 >>> 8;
  temporaryValue3 = temporaryValue5 & 15;
  temporaryValue2 = temporaryValue4[temporaryValue3];
  temporaryValue3 = temporaryValue1 + temporaryValue2;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue7 = localState6;
  temporaryValue5 = temporaryValue7 >>> 4;
  temporaryValue4 = temporaryValue5 & 15;
  temporaryValue2 = temporaryValue1[temporaryValue4];
  temporaryValue5 = temporaryValue3 + temporaryValue2;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue2 = localState6;
  temporaryValue3 = temporaryValue2 & 15;
  temporaryValue7 = temporaryValue1[temporaryValue3];
  temporaryValue1 = temporaryValue5 + temporaryValue7;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue4 = localState7;
  temporaryValue5 = temporaryValue4 >>> 28;
  temporaryValue4 = temporaryValue5 & 15;
  temporaryValue3 = temporaryValue2[temporaryValue4];
  temporaryValue2 = temporaryValue1 + temporaryValue3;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue5 = localState7;
  temporaryValue4 = temporaryValue5 >>> 24;
  temporaryValue5 = temporaryValue4 & 15;
  temporaryValue3 = temporaryValue1[temporaryValue5];
  temporaryValue1 = temporaryValue2 + temporaryValue3;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue4 = localState7;
  temporaryValue7 = temporaryValue4 >>> 20;
  temporaryValue4 = temporaryValue7 & 15;
  temporaryValue3 = temporaryValue2[temporaryValue4];
  temporaryValue2 = temporaryValue1 + temporaryValue3;
  temporaryValue3 = sha256HexDigestDependency;
  temporaryValue4 = localState7;
  temporaryValue5 = temporaryValue4 >>> 16;
  temporaryValue4 = temporaryValue5 & 15;
  temporaryValue1 = temporaryValue3[temporaryValue4];
  temporaryValue3 = temporaryValue2 + temporaryValue1;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue4 = localState7;
  temporaryValue6 = temporaryValue4 >>> 12;
  temporaryValue4 = temporaryValue6 & 15;
  temporaryValue2 = temporaryValue1[temporaryValue4];
  temporaryValue4 = temporaryValue3 + temporaryValue2;
  temporaryValue2 = sha256HexDigestDependency;
  temporaryValue3 = localState7;
  temporaryValue6 = temporaryValue3 >>> 8;
  temporaryValue7 = temporaryValue6 & 15;
  temporaryValue1 = temporaryValue2[temporaryValue7];
  temporaryValue2 = temporaryValue4 + temporaryValue1;
  temporaryValue4 = sha256HexDigestDependency;
  temporaryValue3 = localState7;
  temporaryValue5 = temporaryValue3 >>> 4;
  temporaryValue3 = temporaryValue5 & 15;
  temporaryValue1 = temporaryValue4[temporaryValue3];
  temporaryValue3 = temporaryValue2 + temporaryValue1;
  temporaryValue1 = sha256HexDigestDependency;
  temporaryValue5 = localState7;
  temporaryValue6 = temporaryValue5 & 15;
  temporaryValue2 = temporaryValue1[temporaryValue6];
  temporaryValue7 = temporaryValue3 + temporaryValue2;
  localState9 = temporaryValue7;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.is224;
  temporaryValue1 = !temporaryValue2;
  if (temporaryValue1) {
    temporaryValue2 = localState9;
    temporaryValue3 = sha256HexDigestDependency;
    temporaryValue5 = localState8;
    temporaryValue8 = temporaryValue5 >>> 28;
    temporaryValue4 = temporaryValue8 & 15;
    temporaryValue1 = temporaryValue3[temporaryValue4];
    temporaryValue5 = sha256HexDigestDependency;
    temporaryValue7 = localState8;
    temporaryValue4 = temporaryValue7 >>> 24;
    temporaryValue6 = temporaryValue4 & 15;
    temporaryValue3 = temporaryValue5[temporaryValue6];
    temporaryValue4 = temporaryValue1 + temporaryValue3;
    temporaryValue1 = sha256HexDigestDependency;
    temporaryValue6 = localState8;
    temporaryValue3 = temporaryValue6 >>> 20;
    temporaryValue6 = temporaryValue3 & 15;
    temporaryValue7 = temporaryValue1[temporaryValue6];
    temporaryValue1 = temporaryValue4 + temporaryValue7;
    temporaryValue4 = sha256HexDigestDependency;
    temporaryValue6 = localState8;
    temporaryValue7 = temporaryValue6 >>> 16;
    temporaryValue6 = temporaryValue7 & 15;
    temporaryValue3 = temporaryValue4[temporaryValue6];
    temporaryValue4 = temporaryValue1 + temporaryValue3;
    temporaryValue1 = sha256HexDigestDependency;
    temporaryValue7 = localState8;
    temporaryValue5 = temporaryValue7 >>> 12;
    temporaryValue6 = temporaryValue5 & 15;
    temporaryValue3 = temporaryValue1[temporaryValue6];
    temporaryValue1 = temporaryValue4 + temporaryValue3;
    temporaryValue3 = sha256HexDigestDependency;
    temporaryValue8 = localState8;
    temporaryValue4 = temporaryValue8 >>> 8;
    temporaryValue8 = temporaryValue4 & 15;
    temporaryValue5 = temporaryValue3[temporaryValue8];
    temporaryValue3 = temporaryValue1 + temporaryValue5;
    temporaryValue1 = sha256HexDigestDependency;
    temporaryValue6 = localState8;
    temporaryValue5 = temporaryValue6 >>> 4;
    temporaryValue6 = temporaryValue5 & 15;
    temporaryValue4 = temporaryValue1[temporaryValue6];
    temporaryValue1 = temporaryValue3 + temporaryValue4;
    temporaryValue3 = sha256HexDigestDependency;
    temporaryValue5 = localState8;
    temporaryValue6 = temporaryValue5 & 15;
    temporaryValue4 = temporaryValue3[temporaryValue6];
    temporaryValue3 = temporaryValue1 + temporaryValue4;
    temporaryValue3 = temporaryValue2 + temporaryValue3;
    localState9 = temporaryValue3;
  }
  temporaryValue1 = localState9;
  return temporaryValue1;
}

function sha256ArrayDigest() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8;
  let localState1, localState2, localState3, localState4, localState5, localState6, localState7, localState8;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState9 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  localState7 = undefined;
  localState8 = undefined;
  temporaryValue3 = this;
  temporaryValue2 = temporaryValue3.finalize;
  temporaryValue6 = [];
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue6);
  temporaryValue1 = this;
  temporaryValue4 = temporaryValue1.h0;
  localState1 = temporaryValue4;
  temporaryValue1 = this;
  temporaryValue3 = temporaryValue1.h1;
  localState2 = temporaryValue3;
  temporaryValue1 = this;
  temporaryValue5 = temporaryValue1.h2;
  localState3 = temporaryValue5;
  temporaryValue1 = this;
  temporaryValue3 = temporaryValue1.h3;
  localState4 = temporaryValue3;
  temporaryValue5 = this;
  temporaryValue1 = temporaryValue5.h4;
  localState9 = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.h5;
  localState5 = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.h6;
  localState6 = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.h7;
  localState7 = temporaryValue2;
  temporaryValue1 = new Array(28);
  temporaryValue3 = localState1;
  temporaryValue2 = temporaryValue3 >>> 24;
  temporaryValue3 = temporaryValue2 & 255;
  temporaryValue1[0] = temporaryValue3;
  temporaryValue5 = localState1;
  temporaryValue2 = temporaryValue5 >>> 16;
  temporaryValue5 = temporaryValue2 & 255;
  temporaryValue1[1] = temporaryValue5;
  temporaryValue2 = localState1;
  temporaryValue3 = temporaryValue2 >>> 8;
  temporaryValue2 = temporaryValue3 & 255;
  temporaryValue1[2] = temporaryValue2;
  temporaryValue2 = localState1;
  temporaryValue4 = temporaryValue2 & 255;
  temporaryValue1[3] = temporaryValue4;
  temporaryValue2 = localState2;
  temporaryValue4 = temporaryValue2 >>> 24;
  temporaryValue3 = temporaryValue4 & 255;
  temporaryValue1[4] = temporaryValue3;
  temporaryValue2 = localState2;
  temporaryValue3 = temporaryValue2 >>> 16;
  temporaryValue2 = temporaryValue3 & 255;
  temporaryValue1[5] = temporaryValue2;
  temporaryValue3 = localState2;
  temporaryValue4 = temporaryValue3 >>> 8;
  temporaryValue2 = temporaryValue4 & 255;
  temporaryValue1[6] = temporaryValue2;
  temporaryValue2 = localState2;
  temporaryValue3 = temporaryValue2 & 255;
  temporaryValue1[7] = temporaryValue3;
  temporaryValue2 = localState3;
  temporaryValue3 = temporaryValue2 >>> 24;
  temporaryValue2 = temporaryValue3 & 255;
  temporaryValue1[8] = temporaryValue2;
  temporaryValue2 = localState3;
  temporaryValue3 = temporaryValue2 >>> 16;
  temporaryValue2 = temporaryValue3 & 255;
  temporaryValue1[9] = temporaryValue2;
  temporaryValue2 = localState3;
  temporaryValue4 = temporaryValue2 >>> 8;
  temporaryValue2 = temporaryValue4 & 255;
  temporaryValue1[10] = temporaryValue2;
  temporaryValue2 = localState3;
  temporaryValue4 = temporaryValue2 & 255;
  temporaryValue1[11] = temporaryValue4;
  temporaryValue2 = localState4;
  temporaryValue3 = temporaryValue2 >>> 24;
  temporaryValue1[12] = temporaryValue3 & 255;
  temporaryValue2 = localState4;
  temporaryValue4 = temporaryValue2 >>> 16;
  temporaryValue2 = temporaryValue4 & 255;
  temporaryValue1[13] = temporaryValue2;
  temporaryValue4 = localState4;
  temporaryValue2 = temporaryValue4 >>> 8;
  temporaryValue3 = temporaryValue2 & 255;
  temporaryValue1[14] = temporaryValue3;
  temporaryValue3 = localState4;
  temporaryValue2 = temporaryValue3 & 255;
  temporaryValue1[15] = temporaryValue2;
  temporaryValue5 = localState9;
  temporaryValue2 = temporaryValue5 >>> 24;
  temporaryValue3 = temporaryValue2 & 255;
  temporaryValue1[16] = temporaryValue3;
  temporaryValue2 = localState9;
  temporaryValue5 = temporaryValue2 >>> 16;
  temporaryValue2 = temporaryValue5 & 255;
  temporaryValue1[17] = temporaryValue2;
  temporaryValue3 = localState9;
  temporaryValue2 = temporaryValue3 >>> 8;
  temporaryValue3 = temporaryValue2 & 255;
  temporaryValue1[18] = temporaryValue3;
  temporaryValue2 = localState9;
  temporaryValue4 = temporaryValue2 & 255;
  temporaryValue1[19] = temporaryValue4;
  temporaryValue2 = localState5;
  temporaryValue3 = temporaryValue2 >>> 24;
  temporaryValue5 = temporaryValue3 & 255;
  temporaryValue1[20] = temporaryValue5;
  temporaryValue2 = localState5;
  temporaryValue3 = temporaryValue2 >>> 16;
  temporaryValue2 = temporaryValue3 & 255;
  temporaryValue1[21] = temporaryValue2;
  temporaryValue3 = localState5;
  temporaryValue2 = temporaryValue3 >>> 8;
  temporaryValue3 = temporaryValue2 & 255;
  temporaryValue1[22] = temporaryValue3;
  temporaryValue2 = localState5;
  temporaryValue3 = temporaryValue2 & 255;
  temporaryValue1[23] = temporaryValue3;
  temporaryValue3 = localState6;
  temporaryValue2 = temporaryValue3 >>> 24;
  temporaryValue3 = temporaryValue2 & 255;
  temporaryValue1[24] = temporaryValue3;
  temporaryValue2 = localState6;
  temporaryValue5 = temporaryValue2 >>> 16;
  temporaryValue2 = temporaryValue5 & 255;
  temporaryValue1[25] = temporaryValue2;
  temporaryValue2 = localState6;
  temporaryValue5 = temporaryValue2 >>> 8;
  temporaryValue3 = temporaryValue5 & 255;
  temporaryValue1[26] = temporaryValue3;
  temporaryValue2 = localState6;
  temporaryValue3 = temporaryValue2 & 255;
  temporaryValue1[27] = temporaryValue3;
  localState8 = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.is224;
  temporaryValue1 = !temporaryValue2;
  if (temporaryValue1) {
    temporaryValue5 = localState8;
    temporaryValue1 = temporaryValue5.push;
    temporaryValue3 = new Array(4);
    temporaryValue6 = localState7;
    temporaryValue4 = temporaryValue6 >>> 24;
    temporaryValue6 = temporaryValue4 & 255;
    temporaryValue3[0] = temporaryValue6;
    temporaryValue4 = localState7;
    temporaryValue6 = temporaryValue4 >>> 16;
    temporaryValue4 = temporaryValue6 & 255;
    temporaryValue3[1] = temporaryValue4;
    temporaryValue4 = localState7;
    temporaryValue6 = temporaryValue4 >>> 8;
    temporaryValue4 = temporaryValue6 & 255;
    temporaryValue3[2] = temporaryValue4;
    temporaryValue6 = localState7;
    temporaryValue3[3] = temporaryValue6 & 255;
    temporaryValue2 = Reflect.apply(temporaryValue1, temporaryValue5, temporaryValue3);
  }
  temporaryValue1 = localState8;
  return temporaryValue1;
}

function sha256Digest() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue11;
  let localState1, localState2;

  localState1 = undefined;
  localState2 = undefined;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.finalize;
  temporaryValue4 = [];
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
  temporaryValue3 = ArrayBuffer;
  temporaryValue1 = new Array(1);
  temporaryValue4 = this;
  temporaryValue5 = temporaryValue4.is224;
  if (temporaryValue5) {
    temporaryValue4 = 28;
  } else {
    temporaryValue4 = 32;
  }
  temporaryValue1[0] = temporaryValue4;
  temporaryValue2 = Reflect.construct(temporaryValue3, temporaryValue1);
  localState1 = temporaryValue2;
  temporaryValue2 = globalThis.DataView;
  temporaryValue3 = new Array(1);
  temporaryValue5 = localState1;
  temporaryValue3[0] = temporaryValue5;
  temporaryValue1 = Reflect.construct(temporaryValue2, temporaryValue3);
  localState2 = temporaryValue1;
  temporaryValue3 = localState2;
  temporaryValue1 = temporaryValue3.setUint32;
  temporaryValue4 = new Array(2);
  temporaryValue4[0] = 0;
  temporaryValue5 = this;
  temporaryValue6 = temporaryValue5.h0;
  temporaryValue4[1] = temporaryValue6;
  temporaryValue2 = Reflect.apply(temporaryValue1, temporaryValue3, temporaryValue4);
  temporaryValue2 = localState2;
  temporaryValue3 = new Array(2);
  temporaryValue3[0] = 4;
  temporaryValue4 = this;
  temporaryValue6 = temporaryValue4.h1;
  temporaryValue3[1] = temporaryValue6;
  temporaryValue1 = temporaryValue2.setUint32(...temporaryValue3);
  temporaryValue2 = localState2;
  temporaryValue4 = temporaryValue2.setUint32;
  temporaryValue3 = new Array(2);
  temporaryValue3[0] = 8;
  temporaryValue5 = this;
  temporaryValue6 = temporaryValue5.h2;
  temporaryValue3[1] = temporaryValue6;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue3);
  temporaryValue3 = localState2;
  temporaryValue2 = temporaryValue3.setUint32;
  temporaryValue4 = new Array(2);
  temporaryValue4[0] = 12;
  temporaryValue5 = this;
  temporaryValue6 = temporaryValue5.h3;
  temporaryValue4[1] = temporaryValue6;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
  temporaryValue1 = localState2;
  temporaryValue2 = temporaryValue1.setUint32;
  temporaryValue3 = new Array(2);
  temporaryValue3[0] = 16;
  temporaryValue4 = this.h4;
  temporaryValue3[1] = temporaryValue4;
  temporaryValue11 = Reflect.apply(temporaryValue2, temporaryValue1, temporaryValue3);
  temporaryValue2 = localState2;
  temporaryValue1 = temporaryValue2.setUint32;
  temporaryValue3 = new Array(2);
  temporaryValue3[0] = 20;
  temporaryValue5 = this;
  temporaryValue6 = temporaryValue5.h5;
  temporaryValue3[1] = temporaryValue6;
  temporaryValue4 = Reflect.apply(temporaryValue1, temporaryValue2, temporaryValue3);
  temporaryValue2 = localState2;
  temporaryValue3 = temporaryValue2.setUint32;
  temporaryValue5 = new Array(2);
  temporaryValue5[0] = 24;
  temporaryValue4 = this;
  temporaryValue6 = temporaryValue4.h6;
  temporaryValue5[1] = temporaryValue6;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue5);
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.is224;
  temporaryValue3 = !temporaryValue2;
  if (temporaryValue3) {
    temporaryValue2 = localState2;
    temporaryValue3 = temporaryValue2.setUint32;
    temporaryValue4 = new Array(2);
    temporaryValue4[0] = 28;
    temporaryValue5 = this;
    temporaryValue6 = temporaryValue5.h7;
    temporaryValue4[1] = temporaryValue6;
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
  }
  temporaryValue1 = localState1;
  return temporaryValue1;
}

function sha256ArrayBufferDigest() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9;
  let localState1, sha256InternalStep1;

  localState1 = undefined;
  temporaryValue2 = sha256InternalStep1;
  temporaryValue3 = temporaryValue2.prototype;
  temporaryValue4 = temporaryValue3.finalize;
  temporaryValue2 = temporaryValue4.call;
  temporaryValue3 = new Array(1);
  temporaryValue5 = this;
  temporaryValue3[0] = temporaryValue5;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, temporaryValue3);
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.inner;
  if (temporaryValue2) {
    temporaryValue3 = this;
    temporaryValue3.inner = false;
    temporaryValue5 = this;
    temporaryValue2 = temporaryValue5.array;
    temporaryValue3 = [];
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue5, temporaryValue3);
    localState1 = temporaryValue1;
    temporaryValue2 = sha256InternalStep1;
    temporaryValue3 = temporaryValue2.call;
    temporaryValue4 = new Array(3);
    temporaryValue5 = this;
    temporaryValue4[0] = temporaryValue5;
    temporaryValue5 = this;
    temporaryValue7 = temporaryValue5.is224;
    temporaryValue4[1] = temporaryValue7;
    temporaryValue6 = this;
    temporaryValue8 = temporaryValue6.sharedMemory;
    temporaryValue4[2] = temporaryValue8;
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
    temporaryValue2 = this;
    temporaryValue3 = temporaryValue2.update;
    temporaryValue5 = new Array(1);
    temporaryValue6 = this;
    temporaryValue4 = temporaryValue6.oKeyPad;
    temporaryValue5[0] = temporaryValue4;
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue5);
    temporaryValue2 = this;
    temporaryValue3 = temporaryValue2.update;
    temporaryValue4 = [localState1];
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
    temporaryValue4 = sha256InternalStep1;
    temporaryValue8 = temporaryValue4.prototype;
    temporaryValue1 = temporaryValue8.finalize;
    temporaryValue3 = temporaryValue1.call;
    temporaryValue4 = new Array(1);
    temporaryValue7 = this;
    temporaryValue4[0] = temporaryValue7;
    temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue4);
  }
  return undefined;
}

function sha256InternalStep16() {
  let temporaryValue1;
  let sha256HelperDependency;

  return sha256HelperDependency;
}

// url host origin normalization
function selectInternalEndpoint(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, localState3, localState4, localState5, parseUrlAgainstWindow;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  temporaryValue1 = parameter1;
  temporaryValue2 = temporaryValue1.length;
  temporaryValue3 = temporaryValue2 === 0;
  if (temporaryValue3) {
    temporaryValue1 = undefined;
    return temporaryValue1;
  } else {
    temporaryValue2 = parseUrlAgainstWindow;
    temporaryValue4 = parameter0;
    temporaryValue3 = parameter0;
    temporaryValue5 = temporaryValue3.location;
    temporaryValue3 = temporaryValue5.href;
    temporaryValue1 = temporaryValue2(temporaryValue4, temporaryValue3);
    localState2 = temporaryValue1;
    temporaryValue1 = localState2;
    temporaryValue2 = temporaryValue1.host;
    localState3 = temporaryValue2;
    temporaryValue2 = parameter1;
    temporaryValue3 = temporaryValue2.find;
    temporaryValue4 = new Array(1);
    temporaryValue5 = function (parameter0) { return matchesEndpointHost.apply(this, arguments); };
    temporaryValue4[0] = temporaryValue5;
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
    localState4 = temporaryValue1;
    temporaryValue1 = localState4;
    temporaryValue2 = undefined;
    temporaryValue3 = temporaryValue1 === temporaryValue2;
    if (temporaryValue3) {
      temporaryValue1 = parameter1;
      temporaryValue3 = temporaryValue1[0];
      localState4 = temporaryValue3;
    }
    temporaryValue2 = localState4;
    temporaryValue5 = temporaryValue2.yyw;
    localState1 = temporaryValue5;
    temporaryValue2 = temporaryValue5 !== null;
    if (temporaryValue2) {
      temporaryValue1 = localState1;
      temporaryValue4 = undefined;
      temporaryValue3 = temporaryValue1 !== temporaryValue4;
      temporaryValue2 = temporaryValue3;
    }
    if (temporaryValue2) {
      temporaryValue2 = localState1;
      temporaryValue1 = temporaryValue2;
    } else {
      temporaryValue3 = parameter0;
      temporaryValue2 = temporaryValue3.location;
      temporaryValue4 = temporaryValue2.protocol;
      temporaryValue2 = temporaryValue4 === "http:";
      if (temporaryValue2) {
        temporaryValue5 = "http:";
      } else {
        temporaryValue5 = "https:";
      }
      temporaryValue1 = temporaryValue5;
    }
    localState5 = temporaryValue1;
    temporaryValue5 = "".concat;
    temporaryValue3 = new Array(2);
    temporaryValue4 = localState5;
    temporaryValue3[0] = temporaryValue4;
    temporaryValue3[1] = "//";
    temporaryValue2 = Reflect.apply(temporaryValue5, "", temporaryValue3);
    temporaryValue4 = temporaryValue2.concat;
    temporaryValue3 = [localState4.nbk];
    temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue3);
    return temporaryValue1;
  }
}

function readLocationContext(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, localState2;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue2 = parameter0;
  temporaryValue3 = temporaryValue2.URL;
  temporaryValue5 = parameter1;
  temporaryValue2 = [undefined, undefined];
  temporaryValue2[0] = temporaryValue5;
  temporaryValue4 = parameter0;
  temporaryValue5 = temporaryValue4.location;
  temporaryValue4 = temporaryValue5.href;
  temporaryValue2[1] = temporaryValue4;
  temporaryValue1 = Reflect.construct(temporaryValue3, temporaryValue2);
  localState2 = temporaryValue1;
  temporaryValue2 = localState2;
  temporaryValue5 = temporaryValue2.host;
  temporaryValue1 = {  };
  temporaryValue1.host = temporaryValue5;
  temporaryValue2 = localState2;
  temporaryValue3 = temporaryValue2.pathname;
  temporaryValue1.pathname = temporaryValue3;
  temporaryValue2 = localState2;
  temporaryValue4 = temporaryValue2.protocol;
  temporaryValue1.protocol = temporaryValue4;
  return temporaryValue1;
}

function locationOperationStep1(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, localState2, localState3, localState4, localState5, endpointProtocolPolicy, runtimeConfigurationValidator, runtimeOptionDefaults;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  temporaryValue2 = endpointProtocolPolicy;
  temporaryValue4 = parameter0;
  temporaryValue1 = temporaryValue2(temporaryValue4);
  temporaryValue4 = !temporaryValue1;
  if (temporaryValue4) {
    temporaryValue3 = Error;
    temporaryValue4 = ["Endpoint definition is not valid"];
    temporaryValue2 = Reflect.construct(temporaryValue3, temporaryValue4);
    throw temporaryValue2;
  } else {
    temporaryValue3 = parameter0;
    temporaryValue4 = temporaryValue3.domain;
    localState2 = temporaryValue4;
    temporaryValue3 = parameter0;
    temporaryValue2 = temporaryValue3.path;
    localState3 = temporaryValue2;
    temporaryValue1 = parameter0;
    temporaryValue2 = temporaryValue1.method;
    localState4 = temporaryValue2;
    temporaryValue1 = parameter0;
    temporaryValue2 = temporaryValue1.protocol;
    localState5 = temporaryValue2;
    temporaryValue3 = runtimeConfigurationValidator;
    temporaryValue4 = localState2;
    temporaryValue1 = temporaryValue3(temporaryValue4);
    temporaryValue2 = !temporaryValue1;
    if (!(temporaryValue2)) {
      temporaryValue3 = runtimeConfigurationValidator;
      temporaryValue4 = localState3;
      temporaryValue1 = temporaryValue3(temporaryValue4);
      temporaryValue4 = !temporaryValue1;
      temporaryValue2 = temporaryValue4;
    }
    if (!(temporaryValue2)) {
      temporaryValue3 = localState4;
      temporaryValue1 = runtimeConfigurationValidator(temporaryValue3);
      temporaryValue4 = !temporaryValue1;
      temporaryValue2 = temporaryValue4;
    }
    if (!(temporaryValue2)) {
      temporaryValue1 = runtimeOptionDefaults;
      temporaryValue3 = temporaryValue1(localState5);
      temporaryValue4 = !temporaryValue3;
      temporaryValue2 = temporaryValue4;
    }
    if (temporaryValue2) {
      temporaryValue2 = Error;
      temporaryValue3 = ["Endpoint definition is not valid"];
      temporaryValue1 = Reflect.construct(temporaryValue2, temporaryValue3);
      throw temporaryValue1;
    } else {
      temporaryValue1 = {};
      temporaryValue2 = localState2;
      temporaryValue1.domain = temporaryValue2;
      temporaryValue2 = localState3;
      temporaryValue1.path = temporaryValue2;
      temporaryValue3 = localState4;
      temporaryValue1.method = temporaryValue3;
      temporaryValue2 = localState5;
      temporaryValue1.protocol = temporaryValue2;
      return temporaryValue1;
    }
  }
}

function locationOperationStep2(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8;
  let localState1, localState2, normalizeRemoteConfiguration;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue4 = parameter0;
  temporaryValue2 = temporaryValue4.path;
  temporaryValue4 = temporaryValue2.replace;
  temporaryValue7 = new RegExp("[.?+^$[\\]\\\\(){}|-]", "g");
  temporaryValue6 = [undefined, undefined];
  temporaryValue6[0] = temporaryValue7;
  temporaryValue6[1] = "\\$&";
  temporaryValue5 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue6);
  temporaryValue8 = temporaryValue5.split;
  temporaryValue1 = Reflect.apply(temporaryValue8, temporaryValue5, ["*"]);
  temporaryValue4 = temporaryValue1.join;
  temporaryValue3 = Reflect.apply(temporaryValue4, temporaryValue1, [".*"]);
  localState2 = temporaryValue3;
  temporaryValue3 = parameter0;
  temporaryValue5 = temporaryValue3.method;
  temporaryValue3 = temporaryValue5.toLowerCase;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue5, []);
  temporaryValue1 = {  };
  temporaryValue1.nvf = temporaryValue2;
  temporaryValue8 = parameter0;
  temporaryValue3 = temporaryValue8.domain;
  temporaryValue5 = temporaryValue3.toLowerCase;
  temporaryValue2 = Reflect.apply(temporaryValue5, temporaryValue3, []);
  temporaryValue1.nbk = temporaryValue2;
  temporaryValue5 = RegExp;
  temporaryValue6 = "^".concat;
  temporaryValue8 = localState2;
  temporaryValue7 = [undefined, undefined];
  temporaryValue7[0] = temporaryValue8;
  temporaryValue7[1] = "$";
  temporaryValue4 = Reflect.apply(temporaryValue6, "^", temporaryValue7);
  temporaryValue3 = [undefined];
  temporaryValue3[0] = temporaryValue4;
  temporaryValue2 = Reflect.construct(temporaryValue5, temporaryValue3);
  temporaryValue1.yqa = temporaryValue2;
  temporaryValue3 = normalizeRemoteConfiguration;
  temporaryValue4 = parameter0;
  temporaryValue5 = temporaryValue4.protocol;
  temporaryValue2 = temporaryValue3(temporaryValue5);
  temporaryValue1.yyw = temporaryValue2;
  return temporaryValue1;
}

function locationOperationStep3(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue11;
  let localState1, localState2, localState3, getSdkRuntimeConfiguration, endpointSelectionRules, parseUrlAgainstWindow;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue2 = parameter0;
  temporaryValue1 = temporaryValue2 !== null;
  if (temporaryValue1) {
    temporaryValue3 = parameter0;
    temporaryValue4 = undefined;
    temporaryValue2 = temporaryValue3 !== temporaryValue4;
    temporaryValue1 = temporaryValue2;
  }
  if (temporaryValue1) {
    temporaryValue1 = parameter0;
    temporaryValue3 = temporaryValue1;
  } else {
    temporaryValue2 = getSdkRuntimeConfiguration;
    temporaryValue1 = temporaryValue2();
    temporaryValue2 = temporaryValue1.lxd;
    temporaryValue3 = temporaryValue2;
  }
  localState2 = temporaryValue3;
  temporaryValue1 = temporaryValue3 !== null;
  if (temporaryValue1) {
    temporaryValue3 = localState2;
    temporaryValue2 = undefined;
    temporaryValue4 = temporaryValue3 !== temporaryValue2;
    temporaryValue1 = temporaryValue4;
  }
  if (temporaryValue1) {
    temporaryValue4 = localState2;
    temporaryValue2 = temporaryValue4;
  } else {
    temporaryValue1 = parameter1;
    temporaryValue4 = temporaryValue1.vcn;
    temporaryValue2 = temporaryValue4;
  }
  localState3 = temporaryValue2;
  temporaryValue1 = localState3;
  if (temporaryValue1) {
    temporaryValue5 = "".concat;
    temporaryValue9 = endpointSelectionRules;
    temporaryValue4 = localState3;
    temporaryValue8 = temporaryValue9(temporaryValue4);
    temporaryValue6 = [undefined, undefined];
    temporaryValue6[0] = temporaryValue8;
    temporaryValue6[1] = "//";
    temporaryValue3 = Reflect.apply(temporaryValue5, "", temporaryValue6);
    temporaryValue4 = temporaryValue3.concat;
    temporaryValue6 = parseUrlAgainstWindow;
    temporaryValue8 = parameter1;
    temporaryValue7 = temporaryValue8.qlj;
    temporaryValue9 = temporaryValue6(temporaryValue7, localState3);
    temporaryValue6 = temporaryValue9.host;
    temporaryValue5 = [undefined];
    temporaryValue5[0] = temporaryValue6;
    temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue5);
    temporaryValue2 = temporaryValue1;
  } else {
    temporaryValue7 = undefined;
    temporaryValue2 = temporaryValue7;
  }
  return temporaryValue2;
}

function locationOperationStep4(parameter0) {
  let temporaryValue1 = parameter0;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = function (parameter0, nestedParameter1) { return locationOperationStep5.apply(this, arguments); };
  return temporaryValue1;
}

function locationOperationStep5(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5;
  let locationOperationDependency;

  temporaryValue1 = locationOperationDependency;
  temporaryValue4 = temporaryValue1.some;
  temporaryValue2 = new Array(1);
  temporaryValue5 = function (parameter0) { return locationOperationStep6.apply(this, arguments); };
  temporaryValue2[0] = temporaryValue5;
  temporaryValue3 = Reflect.apply(temporaryValue4, temporaryValue1, temporaryValue2);
  return temporaryValue3;
}

function locationOperationStep6(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let locationOperationDependencyVariant1, locationOperationDependencyVariant2;

  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.nbk;
  temporaryValue1 = locationOperationDependencyVariant1;
  temporaryValue5 = temporaryValue1.host;
  temporaryValue1 = temporaryValue5.toLowerCase;
  temporaryValue3 = [];
  temporaryValue4 = Reflect.apply(temporaryValue1, temporaryValue5, temporaryValue3);
  temporaryValue1 = temporaryValue2 === temporaryValue4;
  if (temporaryValue1) {
    temporaryValue2 = parameter0;
    temporaryValue3 = temporaryValue2.nvf;
    temporaryValue2 = temporaryValue3 === "*";
    if (!(temporaryValue2)) {
      temporaryValue4 = parameter0;
      temporaryValue6 = temporaryValue4.nvf;
      temporaryValue4 = locationOperationDependencyVariant2;
      temporaryValue5 = temporaryValue4.toLowerCase;
      temporaryValue7 = [];
      temporaryValue3 = Reflect.apply(temporaryValue5, temporaryValue4, temporaryValue7);
      temporaryValue7 = temporaryValue6 === temporaryValue3;
      temporaryValue2 = temporaryValue7;
    }
    temporaryValue1 = temporaryValue2;
  }
  if (temporaryValue1) {
    temporaryValue2 = locationOperationDependencyVariant1;
    temporaryValue3 = temporaryValue2.pathname;
    temporaryValue2 = temporaryValue3.search;
    temporaryValue5 = new Array(1);
    temporaryValue6 = parameter0;
    temporaryValue7 = temporaryValue6.yqa;
    temporaryValue5[0] = temporaryValue7;
    temporaryValue4 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue5);
    temporaryValue2 = 0 - 1;
    temporaryValue3 = temporaryValue4 !== temporaryValue2;
    temporaryValue1 = temporaryValue3;
  }
  return temporaryValue1;
}

function locationOperationStep7(parameter0) {
  let temporaryValue1 = parameter0;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = function (parameter0, nestedParameter1) { return locationOperationStep8.apply(this, arguments); };
  return temporaryValue1;
}

function locationOperationStep8(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, locationOperationDependency;

  localState1 = undefined;
  temporaryValue2 = parameter1;
  temporaryValue1 = temporaryValue2.protocol;
  temporaryValue2 = temporaryValue1 !== "http:";
  if (temporaryValue2) {
    temporaryValue1 = parameter1;
    temporaryValue3 = temporaryValue1.protocol;
    temporaryValue4 = temporaryValue3 !== "https:";
    temporaryValue2 = temporaryValue4;
  }
  if (temporaryValue2) {
    return false;
  } else {
    temporaryValue3 = parameter0;
    temporaryValue4 = temporaryValue3.toUpperCase;
    temporaryValue1 = [];
    temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue1);
    localState1 = temporaryValue2;
    temporaryValue3 = locationOperationDependency;
    temporaryValue1 = temporaryValue3.some;
    temporaryValue4 = new Array(1);
    temporaryValue5 = function (parameter0) { return locationOperationStep9.apply(this, arguments); };
    temporaryValue4[0] = temporaryValue5;
    temporaryValue2 = Reflect.apply(temporaryValue1, temporaryValue3, temporaryValue4);
    return temporaryValue2;
  }
}

function locationOperationStep9(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8;
  let locationOperationDependencyVariant1, locationOperationDependencyVariant2, locationOperationDependencyVariant3;

  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.nbk;
  temporaryValue4 = temporaryValue2 === "*";
  if (!(temporaryValue4)) {
    temporaryValue1 = parameter0;
    temporaryValue2 = temporaryValue1.nbk;
    temporaryValue1 = locationOperationDependencyVariant1;
    temporaryValue3 = temporaryValue1.host;
    temporaryValue1 = temporaryValue2 === temporaryValue3;
    temporaryValue4 = temporaryValue1;
  }
  if (temporaryValue4) {
    temporaryValue1 = parameter0;
    temporaryValue2 = temporaryValue1.nvf;
    temporaryValue1 = temporaryValue2 === "*";
    if (!(temporaryValue1)) {
      temporaryValue5 = parameter0;
      temporaryValue3 = temporaryValue5.nvf;
      temporaryValue6 = locationOperationDependencyVariant2;
      temporaryValue2 = temporaryValue3 === temporaryValue6;
      temporaryValue1 = temporaryValue2;
    }
    temporaryValue4 = temporaryValue1;
  }
  if (temporaryValue4) {
    temporaryValue1 = locationOperationDependencyVariant3;
    temporaryValue3 = parameter0;
    temporaryValue5 = temporaryValue3.yqa;
    temporaryValue6 = locationOperationDependencyVariant1;
    temporaryValue3 = temporaryValue6.pathname;
    temporaryValue2 = temporaryValue1(temporaryValue5, temporaryValue3, parameter0.lcn);
    temporaryValue4 = temporaryValue2;
  }
  return temporaryValue4;
}

function locationOperationStep10(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, localState2, localState3;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue1 = parameter1;
  temporaryValue2 = temporaryValue1.action;
  localState2 = temporaryValue2;
  temporaryValue1 = parameter1;
  temporaryValue2 = temporaryValue1.method;
  localState3 = temporaryValue2;
  temporaryValue1 = localState3;
  temporaryValue2 = typeof temporaryValue1;
  temporaryValue1 = temporaryValue2 !== "string";
  if (temporaryValue1) {
    temporaryValue2 = parameter1;
    temporaryValue3 = ["method"];
    temporaryValue1 = temporaryValue2.getAttribute(...temporaryValue3);
    if (!(temporaryValue1)) {
      temporaryValue1 = "GET";
    }
    localState3 = temporaryValue1;
  }
  temporaryValue1 = localState2;
  temporaryValue2 = typeof temporaryValue1;
  temporaryValue1 = temporaryValue2 !== "string";
  if (temporaryValue1) {
    temporaryValue2 = parameter1;
    temporaryValue3 = temporaryValue2.getAttribute;
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, ["action"]);
    if (!(temporaryValue1)) {
      temporaryValue3 = parameter0;
      temporaryValue2 = temporaryValue3.location;
      temporaryValue3 = temporaryValue2.href;
      temporaryValue1 = temporaryValue3;
    }
    localState2 = temporaryValue1;
  }
  temporaryValue1 = {};
  temporaryValue2 = localState2;
  temporaryValue1.action = temporaryValue2;
  temporaryValue2 = localState3;
  temporaryValue1.method = temporaryValue2;
  return temporaryValue1;
}

function locationOperationStep11(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, localState2, localState3, localState4, localState5, localState6, localState7, localState8, localState9, localState10;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  localState7 = undefined;
  localState8 = undefined;
  localState9 = undefined;
  localState10 = undefined;
  temporaryValue2 = this;
  localState2 = temporaryValue2;
  temporaryValue1 = regeneratorRuntime;
  temporaryValue3 = temporaryValue1.wrap;
  temporaryValue4 = new Array(3);
  temporaryValue5 = function (parameter0) { return initializeRemoteConfiguration.apply(this, arguments); };
  temporaryValue4[0] = temporaryValue5;
  temporaryValue5 = localState1;
  temporaryValue4[1] = temporaryValue5;
  temporaryValue4[2] = this;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue4);
  return temporaryValue2;
}

async function initializeRemoteConfiguration() {
  this.yyy.zpw(clientStateEnum.euo);
  const remoteConfigEnabled = getSdkRuntimeConfiguration().ejc.gzv;

  if (remoteConfigurationUrl && getSdkRuntimeConfiguration().ejc.kmr) {
    this.kzp = {
      exd: parseUrlAgainstWindow(this.qlj, remoteConfigurationUrl).host,
      yyw: endpointSelectionRules(remoteConfigurationUrl),
    };
  }

  const ready = timingResultFactory.zcn(this.qlj, this.kcn, remoteConfigurationUrl);
  this.nbx.zcn();

  const entries = endpointConfigurationVersion === "v1"
    ? selectEndpointHostCallbackVariant1(endpointConfigurationEntries)
    : selectEndpointHostCallbackVariant2(endpointConfigurationEntries);

  const onPrimary = selectEndpointHostCallbackVariant3(this.qhj.bind(this));
  const onSecondary = selectEndpointHostCallbackVariant4(this.lxj.bind(this));
  const onTertiary = selectEndpointHostCallbackVariant5(this.lxj.bind(this));
  const onFallback = this.xjh.bind(this);

  selectEndpointHostCallbackVariant6(
    this.qlj,
    entries,
    onPrimary,
    onSecondary,
    onTertiary,
    onFallback,
    this.kcn,
    remoteConfigEnabled,
  );

  const hosts = this.kzp
    ? [this.kzp.exd]
    : toConsumableArray(new Set(endpointConfigurationEntries.map((entry) => selectEndpointHost(entry))).values());

  this.qlj.addEventListener("pageshow", (event) => handlePersistedPageRestore(event));
  await ready;

  this.nhj.zcn(remoteConfigurationUrl);
  this.nhj.xnh({
    logCode: logCodeEnum.RemoteConfig,
    metadata: [`${getLoggerConfiguration.yzv().ljc}`, getSdkRuntimeConfiguration().ljc],
  });
  this.jhj.zcn(hosts);
  await this.rvj;
  this.zgx(endpointConfigurationEntries.map((entry) => compileEndpointHostDescriptor(entry)));
}

// sdk endpoint config
function getRuntimeDefaults() {
  let temporaryValue2;
  let localState1, runtimeDefaults;

  localState1 = currentFunction;
  return runtimeDefaults;
}

function buildRuntimeRelativeUrl(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue9;
  let localState1, getSdkRuntimeConfiguration;

  localState1 = currentFunction;
  temporaryValue3 = "".concat;
  temporaryValue6 = getSdkRuntimeConfiguration;
  temporaryValue4 = temporaryValue6();
  temporaryValue1 = Reflect.apply(temporaryValue3, "", [temporaryValue4.rwq, "/"]);
  temporaryValue3 = temporaryValue1.concat;
  temporaryValue6 = parameter0;
  temporaryValue4 = [undefined];
  temporaryValue4[0] = temporaryValue6;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue4);
  return temporaryValue2;
}

function isNonArrayObject(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue7, temporaryValue8;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = parameter0;
  temporaryValue1 = typeof temporaryValue2;
  temporaryValue2 = temporaryValue1 === "object";
  if (temporaryValue2) {
    temporaryValue3 = parameter0;
    temporaryValue1 = temporaryValue3 !== null;
    temporaryValue2 = temporaryValue1;
  }
  if (temporaryValue2) {
    temporaryValue3 = Array;
    temporaryValue1 = temporaryValue3.isArray(parameter0);
    temporaryValue3 = !temporaryValue1;
    temporaryValue2 = temporaryValue3;
  }
  return temporaryValue2;
}

function isNonEmptyString(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue5;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = parameter0;
  temporaryValue1 = typeof temporaryValue1 === "string";
  if (temporaryValue1) {
    temporaryValue1 = parameter0 !== "";
  }
  return temporaryValue1;
}

function isOptionalHttpProtocol(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue6;
  let localState1, runtimeConfigurationValidator;

  localState1 = currentFunction;
  temporaryValue1 = parameter0;
  temporaryValue2 = typeof temporaryValue1;
  temporaryValue4 = temporaryValue2 === "undefined";
  if (temporaryValue4) {
    return true;
  } else {
    temporaryValue2 = runtimeConfigurationValidator;
    temporaryValue3 = parameter0;
    temporaryValue1 = temporaryValue2(temporaryValue3);
    temporaryValue2 = !temporaryValue1;
    if (temporaryValue2) {
      return false;
    } else {
      temporaryValue2 = new RegExp("^https?:?$", "i");
      temporaryValue3 = temporaryValue2.test;
      temporaryValue4 = [parameter0];
      temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
      return temporaryValue1;
    }
  }
}

function normalizeProtocolSuffix(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, localState2;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue2 = parameter0;
  temporaryValue1 = temporaryValue2 === null;
  if (!(temporaryValue1)) {
    temporaryValue4 = parameter0;
    temporaryValue2 = undefined;
    temporaryValue3 = temporaryValue4 === temporaryValue2;
    temporaryValue1 = temporaryValue3;
  }
  if (temporaryValue1) {
    temporaryValue1 = undefined;
    return temporaryValue1;
  } else {
    temporaryValue2 = parameter0;
    temporaryValue4 = temporaryValue2.toLowerCase;
    temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, []);
    localState2 = temporaryValue1;
    temporaryValue2 = localState2;
    temporaryValue3 = temporaryValue2.slice;
    temporaryValue4 = [0 - 1];
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
    temporaryValue2 = temporaryValue1 !== ":";
    if (temporaryValue2) {
      temporaryValue1 = localState2;
      temporaryValue2 = ":";
      temporaryValue2 = temporaryValue1 + temporaryValue2;
      localState2 = temporaryValue2;
    }
    temporaryValue2 = localState2;
    return temporaryValue2;
  }
}

function validateEndpointPath(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8;
  let localState1, localState2;

  localState1 = currentFunction;
  temporaryValue1 = parameter0;
  temporaryValue3 = typeof temporaryValue1;
  temporaryValue1 = temporaryValue3 !== "string";
  if (temporaryValue1) {
    temporaryValue1 = parameter2;
    temporaryValue2 = temporaryValue1.push;
    temporaryValue3 = new Array(1);
    temporaryValue6 = "Endpoint ".concat;
    temporaryValue7 = new Array(2);
    temporaryValue8 = parameter1;
    temporaryValue7[0] = temporaryValue8;
    temporaryValue7[1] = ": path must be a string";
    temporaryValue5 = Reflect.apply(temporaryValue6, "Endpoint ", temporaryValue7);
    temporaryValue3[0] = temporaryValue5;
    temporaryValue4 = Reflect.apply(temporaryValue2, temporaryValue1, temporaryValue3);
    return undefined;
  } else {
    temporaryValue2 = parameter0;
    temporaryValue4 = temporaryValue2.startsWith;
    temporaryValue3 = ["/"];
    temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue3);
    temporaryValue3 = !temporaryValue1;
    if (temporaryValue3) {
      temporaryValue1 = parameter2;
      temporaryValue3 = temporaryValue1.push;
      temporaryValue4 = new Array(1);
      temporaryValue7 = "Endpoint ".concat;
      temporaryValue6 = new Array(2);
      temporaryValue8 = parameter1;
      temporaryValue6[0] = temporaryValue8;
      temporaryValue6[1] = ": path must start with /";
      temporaryValue5 = Reflect.apply(temporaryValue7, "Endpoint ", temporaryValue6);
      temporaryValue4[0] = temporaryValue5;
      temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue4);
    }
    temporaryValue3 = parameter0;
    temporaryValue2 = temporaryValue3.match;
    temporaryValue5 = new Array(1);
    temporaryValue4 = new RegExp("\\*", "g");
    temporaryValue5[0] = temporaryValue4;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue5);
    if (!(temporaryValue1)) {
      temporaryValue2 = [];
      temporaryValue1 = temporaryValue2;
    }
    temporaryValue2 = temporaryValue1.length;
    temporaryValue1 = temporaryValue2 > 3;
    if (temporaryValue1) {
      temporaryValue1 = parameter2;
      temporaryValue3 = temporaryValue1.push;
      temporaryValue5 = new Array(1);
      temporaryValue7 = "Endpoint ".concat;
      temporaryValue6 = new Array(2);
      temporaryValue8 = parameter1;
      temporaryValue6[0] = temporaryValue8;
      temporaryValue6[1] = ": path must contain at most 3 wildcard characters";
      temporaryValue4 = Reflect.apply(temporaryValue7, "Endpoint ", temporaryValue6);
      temporaryValue5[0] = temporaryValue4;
      temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue5);
    }
    try {
      temporaryValue3 = globalThis.URL;
      temporaryValue4 = new Array(1);
      temporaryValue2 = "http://example.com".concat;
      temporaryValue6 = new Array(1);
      temporaryValue7 = parameter0;
      temporaryValue6[0] = temporaryValue7;
      temporaryValue5 = Reflect.apply(temporaryValue2, "http://example.com", temporaryValue6);
      temporaryValue4[0] = temporaryValue5;
      temporaryValue1 = Reflect.construct(temporaryValue3, temporaryValue4);
      temporaryValue2 = temporaryValue1.search;
      if (temporaryValue2) {
        temporaryValue2 = parameter2;
        temporaryValue4 = temporaryValue2.push;
        temporaryValue3 = new Array(1);
        temporaryValue6 = "Endpoint ".concat;
        temporaryValue8 = new Array(2);
        temporaryValue7 = parameter1;
        temporaryValue8[0] = temporaryValue7;
        temporaryValue8[1] = ": path must not contain query parameters";
        temporaryValue5 = Reflect.apply(temporaryValue6, "Endpoint ", temporaryValue8);
        temporaryValue3[0] = temporaryValue5;
        temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue3);
      }
    } catch (error) {
      localState2 = error;
      temporaryValue2 = parameter2;
      temporaryValue6 = temporaryValue2.push;
      temporaryValue5 = new Array(1);
      temporaryValue8 = "Endpoint ".concat;
      temporaryValue7 = new Array(2);
      temporaryValue4 = parameter1;
      temporaryValue7[0] = temporaryValue4;
      temporaryValue7[1] = ": path is not a valid URL path";
      temporaryValue3 = Reflect.apply(temporaryValue8, "Endpoint ", temporaryValue7);
      temporaryValue5[0] = temporaryValue3;
      temporaryValue1 = Reflect.apply(temporaryValue6, temporaryValue2, temporaryValue5);
    }
    return undefined;
  }
}

function validateEndpointCaseSensitivity(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8;
  let localState1;

  localState1 = currentFunction;
  temporaryValue3 = parameter0;
  temporaryValue1 = undefined;
  temporaryValue2 = temporaryValue3 !== temporaryValue1;
  if (temporaryValue2) {
    temporaryValue1 = parameter0;
    temporaryValue3 = typeof temporaryValue1;
    temporaryValue1 = temporaryValue3 !== "boolean";
    temporaryValue2 = temporaryValue1;
  }
  if (temporaryValue2) {
    temporaryValue3 = parameter2;
    temporaryValue2 = temporaryValue3.push;
    temporaryValue5 = "Endpoint ".concat(parameter1, ": if provided, caseSensitiveMatch must be a boolean");
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, [temporaryValue5]);
  }
  return undefined;
}

function validateEndpointDefinition(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue12;
  let localState1, localState2, localState3, localState4, localState5, localState6, endpointProtocolPolicy, configurationSchema, configurationErrorFactory, configurationNormalizer, configurationMergePolicy;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  temporaryValue2 = endpointProtocolPolicy;
  temporaryValue3 = parameter0;
  temporaryValue1 = temporaryValue2(temporaryValue3);
  temporaryValue2 = !temporaryValue1;
  if (temporaryValue2) {
    temporaryValue2 = parameter2;
    temporaryValue4 = temporaryValue2.push;
    temporaryValue5 = new Array(1);
    temporaryValue3 = "Endpoint ".concat;
    temporaryValue7 = [parameter1, ": definition is not a valid object"];
    temporaryValue6 = Reflect.apply(temporaryValue3, "Endpoint ", temporaryValue7);
    temporaryValue5[0] = temporaryValue6;
    temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue5);
    temporaryValue1 = undefined;
    return temporaryValue1;
  } else {
    temporaryValue1 = parameter0;
    temporaryValue2 = temporaryValue1.domain;
    localState2 = temporaryValue2;
    temporaryValue2 = parameter0;
    temporaryValue1 = temporaryValue2.path;
    localState3 = temporaryValue1;
    temporaryValue1 = parameter0;
    temporaryValue3 = temporaryValue1.method;
    localState4 = temporaryValue3;
    temporaryValue2 = parameter0;
    temporaryValue1 = temporaryValue2.caseSensitiveMatch;
    localState5 = temporaryValue1;
    temporaryValue1 = parameter2;
    temporaryValue2 = temporaryValue1.length;
    localState6 = temporaryValue2;
    temporaryValue4 = configurationSchema;
    temporaryValue2 = localState2;
    temporaryValue3 = parameter1;
    temporaryValue5 = parameter2;
    temporaryValue1 = temporaryValue4(temporaryValue2, temporaryValue3, temporaryValue5);
    temporaryValue2 = configurationErrorFactory;
    temporaryValue3 = localState3;
    temporaryValue4 = parameter1;
    temporaryValue5 = parameter2;
    temporaryValue1 = temporaryValue2(temporaryValue3, temporaryValue4, temporaryValue5);
    temporaryValue3 = configurationNormalizer;
    temporaryValue2 = localState4;
    temporaryValue4 = parameter1;
    temporaryValue5 = parameter2;
    temporaryValue1 = temporaryValue3(temporaryValue2, temporaryValue4, temporaryValue5);
    temporaryValue1 = configurationMergePolicy;
    temporaryValue4 = localState5;
    temporaryValue5 = parameter1;
    temporaryValue7 = parameter2;
    temporaryValue2 = temporaryValue1(temporaryValue4, temporaryValue5, temporaryValue7);
    temporaryValue1 = parameter2;
    temporaryValue2 = temporaryValue1.length;
    temporaryValue3 = localState6;
    temporaryValue4 = temporaryValue2 > temporaryValue3;
    if (temporaryValue4) {
      temporaryValue1 = undefined;
      return temporaryValue1;
    } else {
      temporaryValue1 = objectSpread2;
      temporaryValue5 = objectSpread2;
      temporaryValue4 = {};
      temporaryValue8 = localState2;
      temporaryValue4.domain = temporaryValue8;
      temporaryValue6 = localState3;
      temporaryValue4.path = temporaryValue6;
      temporaryValue6 = localState4;
      temporaryValue7 = undefined;
      temporaryValue8 = temporaryValue6 !== temporaryValue7;
      if (temporaryValue8) {
        temporaryValue6 = {};
        temporaryValue7 = localState4;
        temporaryValue6.method = temporaryValue7;
        temporaryValue8 = temporaryValue6;
      }
      temporaryValue3 = temporaryValue5(temporaryValue4, temporaryValue8);
      temporaryValue4 = localState5;
      temporaryValue6 = undefined;
      temporaryValue7 = temporaryValue4 !== temporaryValue6;
      if (temporaryValue7) {
        temporaryValue4 = {};
        temporaryValue5 = localState5;
        temporaryValue4.caseSensitiveMatch = temporaryValue5;
        temporaryValue7 = temporaryValue4;
      }
      temporaryValue2 = temporaryValue1(temporaryValue3, temporaryValue7);
      return temporaryValue2;
    }
  }
}

function ensureTrailingSlash(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = parameter0;
  temporaryValue3 = temporaryValue2.endsWith;
  temporaryValue4 = ["/"];
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
  if (temporaryValue1) {
    temporaryValue1 = parameter0;
    temporaryValue3 = temporaryValue1;
  } else {
    temporaryValue4 = "".concat;
    temporaryValue2 = [parameter0, "/"];
    temporaryValue1 = Reflect.apply(temporaryValue4, "", temporaryValue2);
    temporaryValue3 = temporaryValue1;
  }
  return temporaryValue3;
}

function applyEndpointDefaults(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, localState2, localState3;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue1 = {};
  temporaryValue2 = parameter0;
  temporaryValue4 = temporaryValue2.domain;
  temporaryValue1.domain = temporaryValue4;
  temporaryValue2 = parameter0;
  temporaryValue4 = temporaryValue2.path;
  temporaryValue1.path = temporaryValue4;
  temporaryValue3 = parameter0;
  temporaryValue2 = temporaryValue3.method;
  localState2 = temporaryValue2;
  temporaryValue3 = temporaryValue2 !== null;
  if (temporaryValue3) {
    temporaryValue4 = localState2;
    temporaryValue5 = undefined;
    temporaryValue2 = temporaryValue4 !== temporaryValue5;
    temporaryValue3 = temporaryValue2;
  }
  if (temporaryValue3) {
    temporaryValue2 = localState2;
    temporaryValue5 = temporaryValue2;
  } else {
    temporaryValue5 = "*";
  }
  temporaryValue1.method = temporaryValue5;
  temporaryValue4 = parameter0;
  temporaryValue2 = temporaryValue4.caseSensitiveMatch;
  localState3 = temporaryValue2;
  temporaryValue4 = temporaryValue2 !== null;
  if (temporaryValue4) {
    temporaryValue2 = localState3;
    temporaryValue5 = undefined;
    temporaryValue3 = temporaryValue2 !== temporaryValue5;
    temporaryValue4 = temporaryValue3;
  }
  if (temporaryValue4) {
    temporaryValue4 = localState3;
    temporaryValue2 = temporaryValue4;
  } else {
    temporaryValue2 = false;
  }
  temporaryValue1.caseSensitiveMatch = temporaryValue2;
  return temporaryValue1;
}

function resolveResourceBasePath(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue6;
  let localState1, localState2, localState3, getSdkRuntimeConfiguration, configurationTelemetry;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue2 = parameter0;
  temporaryValue1 = temporaryValue2 !== null;
  if (temporaryValue1) {
    temporaryValue2 = parameter0;
    temporaryValue3 = undefined;
    temporaryValue1 = temporaryValue2 !== temporaryValue3;
  }
  if (temporaryValue1) {
    temporaryValue1 = parameter0;
    temporaryValue2 = temporaryValue1;
  } else {
    temporaryValue4 = getSdkRuntimeConfiguration;
    temporaryValue3 = temporaryValue4();
    temporaryValue1 = temporaryValue3.lxd;
    temporaryValue2 = temporaryValue1;
  }
  localState2 = temporaryValue2;
  temporaryValue1 = temporaryValue2 !== null;
  if (temporaryValue1) {
    temporaryValue2 = localState2;
    temporaryValue3 = undefined;
    temporaryValue4 = temporaryValue2 !== temporaryValue3;
    temporaryValue1 = temporaryValue4;
  }
  if (temporaryValue1) {
    temporaryValue1 = localState2;
    temporaryValue2 = temporaryValue1;
  } else {
    temporaryValue1 = parameter1;
    temporaryValue3 = temporaryValue1.vcn;
    temporaryValue2 = temporaryValue3;
  }
  localState3 = temporaryValue2;
  temporaryValue2 = localState3;
  temporaryValue3 = !temporaryValue2;
  if (temporaryValue3) {
    return "/";
  } else {
    temporaryValue2 = configurationTelemetry;
    temporaryValue3 = localState3;
    temporaryValue1 = temporaryValue2(temporaryValue3);
    return temporaryValue1;
  }
}

function normalizeEndpointSet(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, localState2, configurationCache, configurationEventFactory;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue1 = {};
  temporaryValue5 = parameter0;
  temporaryValue3 = temporaryValue5.endpoints;
  localState2 = temporaryValue3;
  temporaryValue4 = temporaryValue3 !== null;
  if (temporaryValue4) {
    temporaryValue3 = localState2;
    temporaryValue5 = undefined;
    temporaryValue6 = temporaryValue3 !== temporaryValue5;
    temporaryValue4 = temporaryValue6;
  }
  if (temporaryValue4) {
    temporaryValue4 = localState2;
    temporaryValue3 = temporaryValue4;
  } else {
    temporaryValue4 = [];
    temporaryValue3 = temporaryValue4;
  }
  temporaryValue4 = temporaryValue3.map;
  temporaryValue5 = new Array(1);
  temporaryValue6 = configurationCache;
  temporaryValue5[0] = temporaryValue6;
  temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue5);
  temporaryValue1.endpoints = temporaryValue2;
  temporaryValue4 = configurationEventFactory;
  temporaryValue2 = parameter0;
  temporaryValue5 = temporaryValue2.resourceAddress;
  temporaryValue2 = parameter1;
  temporaryValue3 = temporaryValue4(temporaryValue5, temporaryValue2);
  temporaryValue1.resourceAddress = temporaryValue3;
  return temporaryValue1;
}

function compileEndpointConfiguration(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = {};
  temporaryValue3 = parameter0;
  temporaryValue4 = temporaryValue3.endpoints;
  temporaryValue3 = temporaryValue4.map;
  temporaryValue5 = new Array(1);
  temporaryValue6 = function (parameter0) { return compileEndpointMatcher.apply(this, arguments); };
  temporaryValue5[0] = temporaryValue6;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue4, temporaryValue5);
  temporaryValue1.qjc = temporaryValue2;
  temporaryValue2 = parameter0;
  temporaryValue3 = temporaryValue2.resourceAddress;
  temporaryValue1.lxd = temporaryValue3;
  return temporaryValue1;
}

function compileEndpointMatcher(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue7;

  temporaryValue3 = parameter0;
  temporaryValue4 = temporaryValue3.domain;
  temporaryValue3 = temporaryValue4.toLowerCase;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue4, []);
  temporaryValue1 = {  };
  temporaryValue1.nbk = temporaryValue2;
  temporaryValue3 = parameter0;
  temporaryValue4 = temporaryValue3.path;
  temporaryValue1.yqa = temporaryValue4;
  temporaryValue2 = parameter0;
  temporaryValue3 = temporaryValue2.method;
  temporaryValue1.nvf = temporaryValue3;
  temporaryValue2 = parameter0;
  temporaryValue3 = temporaryValue2.caseSensitiveMatch;
  temporaryValue1.lcn = temporaryValue3;
  return temporaryValue1;
}

function configurationOperation(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue6;
  let localState1, endpointProtocolPolicy;

  localState1 = currentFunction;
  temporaryValue2 = Array;
  temporaryValue4 = temporaryValue2.isArray;
  temporaryValue3 = parameter0;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, [temporaryValue3]);
  if (temporaryValue1) {
    return "v0";
  } else {
    temporaryValue4 = endpointProtocolPolicy;
    temporaryValue3 = parameter0;
    temporaryValue2 = temporaryValue4(temporaryValue3);
    if (temporaryValue2) {
      return "v1";
    } else {
      temporaryValue3 = Error;
      temporaryValue2 = ["Configuration endpoints are not an array"];
      temporaryValue1 = Reflect.construct(temporaryValue3, temporaryValue2);
      throw temporaryValue1;
    }
  }
}

function materializeEndpointRuntimeConfig(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, configurationModeEnum, sdkFeatureFlags, sdkVersionMetadata, normalizeConfiguredContext;

  localState1 = currentFunction;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.xgq;
  temporaryValue1 = configurationModeEnum;
  temporaryValue4 = temporaryValue1.v0;
  temporaryValue1 = temporaryValue2 === temporaryValue4;
  if (temporaryValue1) {
    temporaryValue1 = {};
    temporaryValue4 = parameter0;
    temporaryValue3 = temporaryValue4.uuv;
    temporaryValue4 = temporaryValue3.map;
    temporaryValue6 = [sdkFeatureFlags];
    temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue6);
    temporaryValue1.qjc = temporaryValue2;
    temporaryValue3 = sdkVersionMetadata;
    temporaryValue4 = undefined;
    temporaryValue5 = parameter1;
    temporaryValue2 = temporaryValue3(temporaryValue4, temporaryValue5);
    temporaryValue1.lxd = temporaryValue2;
    return temporaryValue1;
  } else {
    temporaryValue2 = normalizeConfiguredContext;
    temporaryValue5 = buildConfiguredContext;
    temporaryValue4 = parameter0;
    temporaryValue6 = temporaryValue4.uuv;
    temporaryValue4 = parameter1;
    temporaryValue3 = temporaryValue5(temporaryValue6, temporaryValue4);
    temporaryValue1 = temporaryValue2(temporaryValue3);
    return temporaryValue1;
  }
}

function parseDelimitedResourceAddress(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, localState2, localState3, localState4, localState5, localState6, localState7;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  temporaryValue1 = parameter0;
  temporaryValue4 = temporaryValue1.split;
  temporaryValue3 = [":"];
  temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue1, temporaryValue3);
  localState2 = temporaryValue2;
  temporaryValue2 = localState2;
  temporaryValue1 = temporaryValue2[0];
  localState3 = temporaryValue1;
  temporaryValue3 = arrayLikeToArray;
  temporaryValue4 = localState2;
  temporaryValue2 = temporaryValue3(temporaryValue4);
  temporaryValue3 = temporaryValue2.slice;
  temporaryValue4 = [1];
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
  localState4 = temporaryValue1;
  temporaryValue1 = localState3;
  temporaryValue2 = temporaryValue1 === "";
  if (temporaryValue2) {
    temporaryValue2 = undefined;
    temporaryValue1 = temporaryValue2;
  } else {
    temporaryValue4 = localState3;
    temporaryValue1 = temporaryValue4;
  }
  localState5 = temporaryValue1;
  try {
    temporaryValue2 = {};
    temporaryValue1 = localState5;
    temporaryValue2.qeu = temporaryValue1;
    temporaryValue1 = localState4;
    temporaryValue3 = temporaryValue1 === null;
    if (!(temporaryValue3)) {
      temporaryValue4 = localState4;
      temporaryValue1 = undefined;
      temporaryValue5 = temporaryValue4 === temporaryValue1;
      temporaryValue3 = temporaryValue5;
    }
    if (temporaryValue3) {
      temporaryValue4 = undefined;
      temporaryValue1 = temporaryValue4;
    } else {
      temporaryValue3 = localState4;
      temporaryValue4 = temporaryValue3[0];
      temporaryValue1 = temporaryValue4;
    }
    localState6 = temporaryValue1;
    temporaryValue3 = temporaryValue1 !== null;
    if (temporaryValue3) {
      temporaryValue5 = localState6;
      temporaryValue1 = undefined;
      temporaryValue3 = temporaryValue5 !== temporaryValue1;
    }
    if (temporaryValue3) {
      temporaryValue4 = localState6;
      temporaryValue1 = temporaryValue4;
    } else {
      temporaryValue1 = "";
    }
    temporaryValue3 = temporaryValue1 === "";
    if (temporaryValue3) {
      temporaryValue3 = undefined;
      temporaryValue1 = temporaryValue3;
    } else {
      temporaryValue5 = localState4;
      temporaryValue1 = temporaryValue5;
    }
    temporaryValue2.ewq = temporaryValue1;
    return temporaryValue2;
  } catch (error) {
    localState7 = error;
    temporaryValue2 = {};
    temporaryValue1 = localState5;
    temporaryValue2.qeu = temporaryValue1;
    temporaryValue1 = undefined;
    temporaryValue2.ewq = temporaryValue1;
    return temporaryValue2;
  }
  return undefined;
}

function normalizeOptionalResourceKey(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = {};
  temporaryValue2 = parameter0;
  temporaryValue3 = temporaryValue2 === "";
  if (temporaryValue3) {
    temporaryValue2 = undefined;
  } else {
    temporaryValue3 = parameter0;
    temporaryValue2 = temporaryValue3;
  }
  temporaryValue1.kkj = temporaryValue2;
  return temporaryValue1;
}

// Fetch/XHR request matching and interception
function compareStringsWithCasePolicy(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = parameter2;
  if (temporaryValue2) {
    temporaryValue3 = parameter0;
    temporaryValue6 = parameter1;
    temporaryValue2 = temporaryValue3 === temporaryValue6;
    temporaryValue1 = temporaryValue2;
  } else {
    temporaryValue3 = parameter0;
    temporaryValue4 = temporaryValue3.toLowerCase;
    temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue3, []);
    temporaryValue3 = parameter1;
    temporaryValue5 = temporaryValue3.toLowerCase;
    temporaryValue6 = [];
    temporaryValue4 = Reflect.apply(temporaryValue5, temporaryValue3, temporaryValue6);
    temporaryValue6 = temporaryValue2 === temporaryValue4;
    temporaryValue1 = temporaryValue6;
  }
  return temporaryValue1;
}

function handleDomContentLoaded() {
  let temporaryValue1, temporaryValue3;
  let onDocumentReady;

  temporaryValue1 = onDocumentReady();
  return temporaryValue1;
}

function handleWindowLoad() {
  let temporaryValue1, temporaryValue2;
  let onDocumentReady;

  temporaryValue2 = onDocumentReady();
  return temporaryValue2;
}

function createTimingSampleDescriptor(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue8, temporaryValue9;
  let localState1, localState2, createTimingSampleDescriptorDependency;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue1 = createTimingSampleDescriptorDependency;
  temporaryValue2 = temporaryValue1.gxd;
  localState2 = temporaryValue2;
  temporaryValue2 = localState2;
  temporaryValue3 = temporaryValue2.concat;
  temporaryValue4 = new Array(1);
  temporaryValue8 = parameter0;
  temporaryValue5 = temporaryValue8.slice(0, 16);
  temporaryValue4[0] = temporaryValue5;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
  localState2 = temporaryValue1;
  temporaryValue1 = {};
  temporaryValue2 = localState2;
  temporaryValue1.gxd = temporaryValue2;
  temporaryValue2 = parameter1;
  temporaryValue3 = temporaryValue2 !== null;
  if (temporaryValue3) {
    temporaryValue2 = parameter1;
    temporaryValue4 = undefined;
    temporaryValue5 = temporaryValue2 !== temporaryValue4;
    temporaryValue3 = temporaryValue5;
  }
  if (temporaryValue3) {
    temporaryValue3 = parameter1;
    temporaryValue2 = temporaryValue3;
  } else {
    temporaryValue4 = createTimingSampleDescriptorDependency;
    temporaryValue3 = temporaryValue4.xdc;
    temporaryValue2 = temporaryValue3;
  }
  temporaryValue1.xdc = temporaryValue2;
  temporaryValue2 = parameter2;
  temporaryValue1.kzv = temporaryValue2;
  return temporaryValue1;
}

function recordTimingInterval(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, localState3, recordTimingIntervalDependency, localState4, localState5, localState6;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue1 = parameter0;
  temporaryValue2 = parameter1;
  temporaryValue3 = temporaryValue1 - temporaryValue2;
  localState2 = temporaryValue3;
  temporaryValue4 = recordTimingIntervalDependency;
  temporaryValue2 = temporaryValue4.push;
  temporaryValue5 = new Array(1);
  temporaryValue7 = localState2;
  temporaryValue5[0] = temporaryValue7;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, temporaryValue5);
  temporaryValue1 = parameter0;
  localState4 = temporaryValue1;
  temporaryValue1 = parameter1;
  localState5 = temporaryValue1;
  temporaryValue5 = recordTimingIntervalDependency;
  temporaryValue1 = temporaryValue5.length;
  temporaryValue2 = temporaryValue1 === 1;
  if (temporaryValue2) {
    temporaryValue1 = localState2;
    localState6 = temporaryValue1;
  } else {
    temporaryValue3 = recordTimingIntervalDependency;
    temporaryValue1 = temporaryValue3.reduce;
    temporaryValue4 = new Array(2);
    temporaryValue6 = function (parameter0, parameter1) { return accumulateReciprocalTiming.apply(this, arguments); };
    temporaryValue4[0] = temporaryValue6;
    temporaryValue4[1] = 0;
    temporaryValue2 = Reflect.apply(temporaryValue1, temporaryValue3, temporaryValue4);
    localState3 = temporaryValue2;
    temporaryValue3 = Math;
    temporaryValue5 = temporaryValue3.round;
    temporaryValue2 = new Array(1);
    temporaryValue4 = recordTimingIntervalDependency;
    temporaryValue6 = temporaryValue4.length;
    temporaryValue4 = localState3;
    temporaryValue7 = temporaryValue6 / temporaryValue4;
    temporaryValue2[0] = temporaryValue7;
    temporaryValue1 = Reflect.apply(temporaryValue5, temporaryValue3, temporaryValue2);
    localState6 = temporaryValue1;
  }
  return undefined;
}

function accumulateReciprocalTiming(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3;

  temporaryValue1 = parameter0;
  temporaryValue2 = parameter1;
  temporaryValue2 = temporaryValue1 + 1 / temporaryValue2;
  return temporaryValue2;
}

function getTimingAggregate() {
  let temporaryValue1;
  let localState1, capturedDependency;

  localState1 = currentFunction;
  return capturedDependency;
}

function resetTimingAccumulator() {
  let temporaryValue1;
  let localState1, localState2, localState3, localState4, localState5;

  localState1 = currentFunction;
  localState2 = [];
  localState3 = 0;
  localState4 = 0;
  localState5 = 0;
  return undefined;
}

function measureAndResolveTiming(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue9, temporaryValue10;
  let localState1, capturedCallback;

  localState1 = currentFunction;
  temporaryValue2 = Promise;
  temporaryValue3 = temporaryValue2.resolve;
  temporaryValue7 = capturedCallback(parameter0, parameter1, parameter2);
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, [temporaryValue7]);
  return temporaryValue1;
}

function measureTimingSynchronously(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5;
  let localState1, capturedCallback;

  localState1 = currentFunction;
  temporaryValue2 = capturedCallback;
  temporaryValue3 = parameter0;
  temporaryValue1 = temporaryValue2(temporaryValue3, parameter1, parameter2);
  return temporaryValue1;
}

function annotateTimingRecord(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue6;
  let localState1, localState2, measurePerformanceTiming, capturedDependency, annotateTimingRecordDependencyVariant1, annotateTimingRecordDependencyVariant2;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue2 = parameter0;
  temporaryValue1 = measurePerformanceTiming(temporaryValue2, capturedDependency);
  localState2 = temporaryValue1;
  temporaryValue1 = localState2;
  temporaryValue2 = annotateTimingRecordDependencyVariant1;
  temporaryValue1.st = temporaryValue2;
  temporaryValue1 = localState2;
  temporaryValue1.rst = annotateTimingRecordDependencyVariant2;
  temporaryValue2 = localState2;
  return temporaryValue2;
}

function serializeTelemetryTuple(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, capturedDependency;

  localState1 = currentFunction;
  temporaryValue3 = capturedDependency;
  temporaryValue2 = [undefined, undefined];
  temporaryValue2[0] = temporaryValue3;
  temporaryValue3 = JSON;
  temporaryValue4 = temporaryValue3.stringify(parameter0);
  temporaryValue2[1] = temporaryValue4;
  return [temporaryValue2];
}

function serializeTelemetryEnvelope(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8;
  let localState1, localState2, capturedDependency, serializeTelemetryEnvelopeDependency;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue4 = arguments.length;
  temporaryValue2 = temporaryValue4 > 1;
  if (temporaryValue2) {
    temporaryValue1 = arguments[1];
    temporaryValue3 = globalThis.undefined;
    temporaryValue4 = temporaryValue1 !== temporaryValue3;
    temporaryValue2 = temporaryValue4;
  }
  if (temporaryValue2) {
    temporaryValue2 = arguments[1];
    temporaryValue1 = temporaryValue2;
  } else {
    temporaryValue1 = false;
  }
  localState2 = temporaryValue1;
  temporaryValue1 = new Array(1);
  temporaryValue2 = {};
  temporaryValue3 = localState2;
  if (temporaryValue3) {
    temporaryValue3 = capturedDependency;
    temporaryValue5 = temporaryValue3;
  } else {
    temporaryValue5 = serializeTelemetryEnvelopeDependency;
  }
  temporaryValue2.rzv = temporaryValue5;
  temporaryValue4 = JSON;
  temporaryValue5 = parameter0;
  temporaryValue3 = temporaryValue4.stringify(temporaryValue5);
  temporaryValue2.jmr = temporaryValue3;
  temporaryValue1[0] = temporaryValue2;
  return temporaryValue1;
}

function isRequestBodyMethod(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue5;
  let localState1, localState2;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue3 = parameter0;
  temporaryValue5 = [];
  temporaryValue1 = temporaryValue3.toUpperCase(...temporaryValue5);
  localState2 = temporaryValue1;
  temporaryValue1 = localState2;
  temporaryValue5 = temporaryValue1 !== "GET";
  if (temporaryValue5) {
    temporaryValue3 = localState2;
    temporaryValue1 = temporaryValue3 !== "HEAD";
    temporaryValue5 = temporaryValue1;
  }
  return temporaryValue5;
}

function getRequestInterceptionPolicy() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, localState2, localState3, localState4, localState5, getSdkRuntimeConfiguration;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  temporaryValue1 = getSdkRuntimeConfiguration;
  temporaryValue4 = temporaryValue1();
  temporaryValue1 = temporaryValue4.vjc;
  temporaryValue2 = temporaryValue1.qhd;
  localState2 = temporaryValue2;
  temporaryValue1 = localState2;
  temporaryValue4 = temporaryValue1.uoy;
  localState3 = temporaryValue4;
  temporaryValue1 = localState2;
  localState4 = temporaryValue1.zpd;
  temporaryValue1 = localState2;
  temporaryValue4 = temporaryValue1.eqa;
  localState5 = temporaryValue4;
  temporaryValue3 = localState3;
  temporaryValue1 = {  };
  temporaryValue1.uoy = temporaryValue3;
  temporaryValue2 = localState4;
  temporaryValue1.zpd = temporaryValue2;
  temporaryValue3 = localState5;
  temporaryValue1.eqa = temporaryValue3;
  return temporaryValue1;
}

function getRequestInterceptionMode() {
  let temporaryValue1, temporaryValue2, temporaryValue3;
  let localState1, getSdkRuntimeConfiguration;

  localState1 = currentFunction;
  temporaryValue1 = getSdkRuntimeConfiguration;
  temporaryValue2 = temporaryValue1();
  temporaryValue1 = temporaryValue2.vjc;
  return temporaryValue1.kzv;
}

function dispatchPreRequestHookAsync(parameter0, parameter1, parameter2, parameter3) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue9;
  let localState1, localState2, localState3, capturedDependencyVariant1, capturedDependencyVariant2, capturedDependencyVariant3, runtimeContextEvents;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue1 = parameter0;
  temporaryValue2 = !temporaryValue1;
  if (!(temporaryValue2)) {
    temporaryValue1 = capturedDependencyVariant1;
    temporaryValue5 = parameter1;
    temporaryValue3 = temporaryValue1(temporaryValue5);
    temporaryValue1 = !temporaryValue3;
    temporaryValue2 = temporaryValue1;
  }
  if (temporaryValue2) {
    temporaryValue1 = Promise;
    temporaryValue3 = temporaryValue1.resolve;
    temporaryValue4 = new Array(1);
    temporaryValue6 = undefined;
    temporaryValue4[0] = temporaryValue6;
    temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue4);
    return temporaryValue2;
  } else {
    temporaryValue1 = capturedDependencyVariant2;
    temporaryValue2 = temporaryValue1();
    localState2 = temporaryValue2;
    temporaryValue2 = capturedDependencyVariant3;
    temporaryValue1 = temporaryValue2();
    localState3 = temporaryValue1;
    temporaryValue3 = runtimeContextEvents;
    temporaryValue5 = temporaryValue3.uyw;
    temporaryValue4 = localState2;
    temporaryValue7 = [parameter3, undefined, undefined];
    temporaryValue7[1] = temporaryValue4;
    temporaryValue4 = localState3;
    temporaryValue7[2] = temporaryValue4;
    temporaryValue2 = Reflect.apply(temporaryValue5, temporaryValue3, temporaryValue7);
    temporaryValue3 = temporaryValue2.then;
    temporaryValue5 = new Array(1);
    temporaryValue6 = function (parameter0) { return normalizePreRequestHookResult.apply(this, arguments); };
    temporaryValue5[0] = temporaryValue6;
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue5);
    return temporaryValue1;
  }
}

function normalizePreRequestHookResult(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue5, temporaryValue6;
  let runtimeContextEvents;

  temporaryValue2 = runtimeContextEvents;
  temporaryValue1 = temporaryValue2.epd(parameter0);
  return temporaryValue1;
}

function dispatchPreRequestHookSync(parameter0, parameter1, parameter2, parameter3) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue5;
  let localState1, localState2, localState3, localState4, capturedDependencyVariant1, capturedDependencyVariant2, capturedDependencyVariant3, runtimeContextEvents;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue1 = parameter0;
  temporaryValue2 = !temporaryValue1;
  if (!(temporaryValue2)) {
    temporaryValue4 = capturedDependencyVariant1;
    temporaryValue5 = parameter1;
    temporaryValue1 = temporaryValue4(temporaryValue5);
    temporaryValue4 = !temporaryValue1;
    temporaryValue2 = temporaryValue4;
  }
  if (temporaryValue2) {
    temporaryValue1 = undefined;
    return temporaryValue1;
  } else {
    temporaryValue2 = capturedDependencyVariant2;
    temporaryValue1 = temporaryValue2();
    localState2 = temporaryValue1;
    temporaryValue3 = capturedDependencyVariant3;
    temporaryValue2 = temporaryValue3();
    localState3 = temporaryValue2;
    temporaryValue4 = runtimeContextEvents;
    temporaryValue2 = temporaryValue4.zqa;
    temporaryValue3 = new Array(3);
    temporaryValue5 = parameter3;
    temporaryValue3[0] = temporaryValue5;
    temporaryValue5 = localState2;
    temporaryValue3[1] = temporaryValue5;
    temporaryValue5 = localState3;
    temporaryValue3[2] = temporaryValue5;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, temporaryValue3);
    localState4 = temporaryValue1;
    temporaryValue1 = runtimeContextEvents;
    temporaryValue3 = temporaryValue1.epd;
    temporaryValue5 = new Array(1);
    temporaryValue4 = localState4;
    temporaryValue5[0] = temporaryValue4;
    temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue5);
    return temporaryValue2;
  }
}

function mergeRequestHeaders(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, localState3, localState4, localState5;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  temporaryValue1 = arguments.length;
  temporaryValue3 = temporaryValue1 > 2;
  if (temporaryValue3) {
    temporaryValue1 = arguments[2];
    temporaryValue2 = globalThis.undefined;
    temporaryValue4 = temporaryValue1 !== temporaryValue2;
    temporaryValue3 = temporaryValue4;
  }
  if (temporaryValue3) {
    temporaryValue1 = arguments[2];
    temporaryValue2 = temporaryValue1;
  } else {
    temporaryValue1 = [];
    temporaryValue2 = temporaryValue1;
  }
  localState2 = temporaryValue2;
  temporaryValue1 = localState2;
  temporaryValue3 = parameter0;
  temporaryValue4 = temporaryValue3.Headers;
  temporaryValue2 = temporaryValue1 instanceof temporaryValue4;
  if (temporaryValue2) {
    temporaryValue3 = parameter0;
    temporaryValue2 = temporaryValue3.Headers;
    temporaryValue3 = new Array(1);
    temporaryValue4 = localState2;
    temporaryValue3[0] = temporaryValue4;
    temporaryValue1 = Reflect.construct(temporaryValue2, temporaryValue3);
    localState3 = temporaryValue1;
    temporaryValue2 = parameter1;
    temporaryValue3 = temporaryValue2.forEach;
    temporaryValue4 = new Array(1);
    temporaryValue6 = function (parameter0) { return appendHeaderTuple.apply(this, arguments); };
    temporaryValue4[0] = temporaryValue6;
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
    temporaryValue1 = localState3;
    return temporaryValue1;
  } else {
    temporaryValue2 = Array;
    temporaryValue3 = temporaryValue2.isArray;
    temporaryValue5 = new Array(1);
    temporaryValue6 = localState2;
    temporaryValue5[0] = temporaryValue6;
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue5);
    if (temporaryValue1) {
      temporaryValue3 = parameter1;
      temporaryValue2 = temporaryValue3.map;
      temporaryValue4 = new Array(1);
      temporaryValue5 = function (parameter0) { return cloneHeaderTuple.apply(this, arguments); };
      temporaryValue4[0] = temporaryValue5;
      temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
      localState4 = temporaryValue1;
      temporaryValue2 = [];
      temporaryValue3 = temporaryValue2.concat;
      temporaryValue4 = new Array(2);
      temporaryValue6 = toConsumableArray;
      temporaryValue7 = localState2;
      temporaryValue5 = temporaryValue6(temporaryValue7);
      temporaryValue4[0] = temporaryValue5;
      temporaryValue6 = toConsumableArray;
      temporaryValue7 = localState4;
      temporaryValue5 = temporaryValue6(temporaryValue7);
      temporaryValue4[1] = temporaryValue5;
      temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
      return temporaryValue1;
    } else {
      temporaryValue3 = parameter1;
      temporaryValue4 = temporaryValue3.map;
      temporaryValue5 = new Array(1);
      temporaryValue6 = function (parameter0) { return headerTupleToObject.apply(this, arguments); };
      temporaryValue5[0] = temporaryValue6;
      temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue5);
      temporaryValue3 = temporaryValue2.reduce;
      temporaryValue7 = new Array(2);
      temporaryValue4 = function (parameter0, parameter1) { return mergeHeaderObjects.apply(this, arguments); };
      temporaryValue7[0] = temporaryValue4;
      temporaryValue4 = {};
      temporaryValue7[1] = temporaryValue4;
      temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue7);
      localState5 = temporaryValue1;
      temporaryValue1 = objectSpread2;
      temporaryValue4 = objectSpread2;
      temporaryValue5 = {};
      temporaryValue6 = localState2;
      temporaryValue3 = temporaryValue4(temporaryValue5, temporaryValue6);
      temporaryValue4 = localState5;
      temporaryValue2 = temporaryValue1(temporaryValue3, temporaryValue4);
      return temporaryValue2;
    }
  }
}

function appendHeaderTuple(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, localState2, targetHeaders;

  localState1 = undefined;
  localState2 = undefined;
  temporaryValue2 = parameter0;
  temporaryValue4 = temporaryValue2[0];
  localState1 = temporaryValue4;
  temporaryValue2 = parameter0;
  temporaryValue1 = temporaryValue2[1];
  localState2 = temporaryValue1;
  temporaryValue1 = targetHeaders;
  temporaryValue4 = temporaryValue1.append;
  temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue1, [localState1, localState2]);
  return temporaryValue2;
}

function cloneHeaderTuple(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3;
  let localState1, localState2;

  localState1 = undefined;
  localState2 = undefined;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1[0];
  localState1 = temporaryValue2;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1[1];
  localState2 = temporaryValue2;
  temporaryValue1 = localState1;
  temporaryValue3 = [undefined, undefined];
  temporaryValue3[0] = temporaryValue1;
  temporaryValue1 = localState2;
  temporaryValue3[1] = temporaryValue1;
  return temporaryValue3;
}

function headerTupleToObject(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, localState2;

  localState1 = undefined;
  localState2 = undefined;
  temporaryValue3 = parameter0;
  temporaryValue1 = temporaryValue3[0];
  localState1 = temporaryValue1;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1[1];
  localState2 = temporaryValue2;
  temporaryValue3 = defineProperty;
  temporaryValue2 = temporaryValue3({  }, localState1, localState2);
  return temporaryValue2;
}

function mergeHeaderObjects(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue8;

  temporaryValue3 = objectSpread2;
  temporaryValue2 = temporaryValue3({  }, parameter0);
  temporaryValue3 = parameter1;
  temporaryValue1 = objectSpread2(temporaryValue2, temporaryValue3);
  return temporaryValue1;
}

function buildInterceptedRequestInit(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11, temporaryValue12, temporaryValue13, temporaryValue14, temporaryValue16;
  let localState1, localState2, localState3, localState4, localState5, localState6, localState7, localState8, localState9, localState10, localState11, getLoggerConfiguration, runtimeContextEvents, logConfiguration, requestHeaderName, readRequestHeaderValue, loggerState, buildInterceptedRequestInitDependency;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  localState7 = undefined;
  localState8 = undefined;
  localState9 = undefined;
  localState10 = undefined;
  localState11 = undefined;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.window;
  localState2 = temporaryValue2;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.interceptData;
  localState3 = temporaryValue2;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.input;
  localState4 = temporaryValue2;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.init;
  localState5 = temporaryValue2;
  temporaryValue1 = localState5;
  temporaryValue2 = undefined;
  temporaryValue3 = temporaryValue1 === temporaryValue2;
  if (temporaryValue3) {
    temporaryValue3 = {};
    temporaryValue1 = temporaryValue3;
  } else {
    temporaryValue2 = localState5;
    temporaryValue1 = temporaryValue2;
  }
  localState6 = temporaryValue1;
  temporaryValue2 = localState3;
  temporaryValue1 = temporaryValue2 === null;
  if (temporaryValue1) {
    temporaryValue1 = localState6;
    return temporaryValue1;
  } else {
    temporaryValue1 = localState3;
    temporaryValue3 = temporaryValue1.nzv;
    localState7 = temporaryValue3;
    temporaryValue3 = getLoggerConfiguration;
    temporaryValue2 = temporaryValue3.yzv;
    temporaryValue5 = [];
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue5);
    temporaryValue2 = temporaryValue1.ljc;
    localState8 = temporaryValue2;
    temporaryValue2 = localState7;
    if (temporaryValue2) {
      temporaryValue3 = runtimeContextEvents;
      temporaryValue6 = temporaryValue3.kfp;
      temporaryValue4 = new Array(1);
      temporaryValue5 = localState7;
      temporaryValue4[0] = temporaryValue5;
      temporaryValue2 = Reflect.apply(temporaryValue6, temporaryValue3, temporaryValue4);
      temporaryValue1 = temporaryValue2;
    } else {
      temporaryValue2 = [];
      temporaryValue1 = temporaryValue2;
    }
    localState9 = temporaryValue1;
    temporaryValue1 = localState8;
    if (temporaryValue1) {
      temporaryValue1 = new Array(1);
      temporaryValue5 = new Array(2);
      temporaryValue3 = logConfiguration;
      temporaryValue5[0] = temporaryValue3;
      temporaryValue3 = localState8;
      temporaryValue5[1] = temporaryValue3;
      temporaryValue1[0] = temporaryValue5;
      temporaryValue2 = temporaryValue1;
    } else {
      temporaryValue1 = [];
      temporaryValue2 = temporaryValue1;
    }
    localState10 = temporaryValue2;
    temporaryValue2 = new Array(1);
    temporaryValue4 = new Array(2);
    temporaryValue1 = requestHeaderName;
    temporaryValue4[0] = temporaryValue1;
    temporaryValue5 = readRequestHeaderValue;
    temporaryValue1 = temporaryValue5();
    temporaryValue4[1] = temporaryValue1;
    temporaryValue2[0] = temporaryValue4;
    temporaryValue1 = temporaryValue2.concat;
    temporaryValue4 = new Array(3);
    temporaryValue5 = toConsumableArray;
    temporaryValue8 = loggerState;
    temporaryValue9 = localState3;
    temporaryValue6 = temporaryValue8(temporaryValue9);
    temporaryValue7 = temporaryValue5(temporaryValue6);
    temporaryValue4[0] = temporaryValue7;
    temporaryValue7 = toConsumableArray;
    temporaryValue6 = localState9;
    temporaryValue5 = temporaryValue7(temporaryValue6);
    temporaryValue4[1] = temporaryValue5;
    temporaryValue5 = localState10;
    temporaryValue4[2] = temporaryValue5;
    temporaryValue3 = Reflect.apply(temporaryValue1, temporaryValue2, temporaryValue4);
    localState11 = temporaryValue3;
    temporaryValue1 = localState6;
    temporaryValue2 = temporaryValue1.headers;
    if (temporaryValue2) {
      temporaryValue2 = objectSpread2;
      temporaryValue3 = objectSpread2;
      temporaryValue5 = {};
      temporaryValue6 = localState6;
      temporaryValue4 = temporaryValue3(temporaryValue5, temporaryValue6);
      temporaryValue3 = {};
      temporaryValue5 = {};
      temporaryValue7 = buildInterceptedRequestInitDependency;
      temporaryValue9 = localState2;
      temporaryValue8 = localState11;
      temporaryValue10 = localState6;
      temporaryValue12 = temporaryValue10.headers;
      temporaryValue6 = temporaryValue7(temporaryValue9, temporaryValue8, temporaryValue12);
      temporaryValue5.headers = temporaryValue6;
      temporaryValue1 = temporaryValue2(temporaryValue4, temporaryValue3, temporaryValue5);
      return temporaryValue1;
    } else {
      temporaryValue1 = localState4;
      temporaryValue2 = globalThis.Request;
      temporaryValue3 = temporaryValue1 instanceof temporaryValue2;
      if (temporaryValue3) {
        temporaryValue2 = objectSpread2;
        temporaryValue3 = objectSpread2;
        temporaryValue5 = {};
        temporaryValue6 = localState6;
        temporaryValue4 = temporaryValue3(temporaryValue5, temporaryValue6);
        temporaryValue3 = {};
        temporaryValue5 = {};
        temporaryValue7 = [];
        temporaryValue9 = temporaryValue7.concat;
        temporaryValue8 = new Array(2);
        temporaryValue12 = toConsumableArray;
        temporaryValue13 = localState4;
        temporaryValue14 = temporaryValue13.headers;
        temporaryValue11 = temporaryValue14.entries();
        temporaryValue10 = temporaryValue12(temporaryValue11);
        temporaryValue8[0] = temporaryValue10;
        temporaryValue11 = toConsumableArray;
        temporaryValue12 = localState11;
        temporaryValue10 = temporaryValue11(temporaryValue12);
        temporaryValue8[1] = temporaryValue10;
        temporaryValue6 = Reflect.apply(temporaryValue9, temporaryValue7, temporaryValue8);
        temporaryValue5.headers = temporaryValue6;
        temporaryValue1 = temporaryValue2(temporaryValue4, temporaryValue3, temporaryValue5);
        return temporaryValue1;
      } else {
        temporaryValue1 = objectSpread2;
        temporaryValue3 = objectSpread2;
        temporaryValue4 = {};
        temporaryValue6 = localState6;
        temporaryValue5 = temporaryValue3(temporaryValue4, temporaryValue6);
        temporaryValue3 = {};
        temporaryValue6 = {};
        temporaryValue4 = localState11;
        temporaryValue6.headers = temporaryValue4;
        temporaryValue2 = temporaryValue1(temporaryValue5, temporaryValue3, temporaryValue6);
        return temporaryValue2;
      }
    }
  }
}

function resolveRequestMethod(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue6, temporaryValue7;
  let localState1;

  localState1 = currentFunction;
  temporaryValue3 = parameter2;
  temporaryValue2 = temporaryValue3 !== null;
  if (temporaryValue2) {
    temporaryValue1 = parameter2;
    temporaryValue3 = undefined;
    temporaryValue2 = temporaryValue1 !== temporaryValue3;
  }
  if (temporaryValue2) {
    temporaryValue1 = parameter2;
    temporaryValue3 = temporaryValue1.method;
    temporaryValue2 = temporaryValue3;
  }
  if (temporaryValue2) {
    temporaryValue2 = parameter2;
    temporaryValue6 = temporaryValue2.method;
    temporaryValue2 = [];
    temporaryValue1 = temporaryValue6.toLowerCase(...temporaryValue2);
    return temporaryValue1;
  } else {
    temporaryValue1 = parameter1;
    temporaryValue2 = globalThis.Request;
    temporaryValue3 = temporaryValue1 instanceof temporaryValue2;
    if (temporaryValue3) {
      temporaryValue2 = parameter1;
      temporaryValue3 = temporaryValue2.method;
      temporaryValue2 = temporaryValue3.toLowerCase;
      temporaryValue6 = [];
      temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue6);
      return temporaryValue1;
    } else {
      return "get";
    }
  }
}

function readOptionalRequestHeader(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue6;
  let localState1, localState2;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue1 = parameter0;
  temporaryValue4 = temporaryValue1.headers;
  temporaryValue3 = temporaryValue4.get;
  temporaryValue1 = [parameter1];
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue4, temporaryValue1);
  localState2 = temporaryValue2;
  temporaryValue3 = temporaryValue2 !== null;
  if (temporaryValue3) {
    temporaryValue1 = localState2;
    temporaryValue2 = undefined;
    temporaryValue4 = temporaryValue1 !== temporaryValue2;
    temporaryValue3 = temporaryValue4;
  }
  if (temporaryValue3) {
    temporaryValue1 = localState2;
    temporaryValue2 = temporaryValue1;
  } else {
    temporaryValue1 = undefined;
    temporaryValue2 = temporaryValue1;
  }
  return temporaryValue2;
}

function createFetchInterceptor(parameter0, parameter1, parameter2, parameter3, parameter4, parameter5) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue5 = parameter4;
  let temporaryValue6 = parameter5;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = function (parameter0, parameter1) { return interceptFetchRequest.apply(this, arguments); };
  return temporaryValue1;
}

function interceptFetchRequest(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue11;
  let localState1, localState2, parseUrlAgainstWindow, interceptWindow, interceptFetchRequestDependencyVariant1, interceptFetchRequestDependencyVariant2, shouldInterceptRequest, originalFetch, prepareInterceptData;

  localState1 = undefined;
  localState2 = undefined;
  temporaryValue2 = parseUrlAgainstWindow;
  temporaryValue7 = interceptWindow;
  temporaryValue4 = interceptFetchRequestDependencyVariant1;
  temporaryValue5 = interceptWindow;
  temporaryValue6 = parameter0;
  temporaryValue3 = temporaryValue4(temporaryValue5, temporaryValue6);
  temporaryValue1 = temporaryValue2(temporaryValue7, temporaryValue3);
  localState1 = temporaryValue1;
  temporaryValue2 = interceptFetchRequestDependencyVariant2;
  temporaryValue3 = interceptWindow;
  temporaryValue4 = parameter0;
  temporaryValue5 = parameter1;
  temporaryValue1 = temporaryValue2(temporaryValue3, temporaryValue4, temporaryValue5);
  localState2 = temporaryValue1;
  temporaryValue2 = shouldInterceptRequest;
  temporaryValue3 = localState2;
  temporaryValue4 = localState1;
  temporaryValue1 = temporaryValue2(temporaryValue3, temporaryValue4);
  temporaryValue3 = !temporaryValue1;
  if (temporaryValue3) {
    temporaryValue2 = originalFetch;
    temporaryValue3 = parameter0;
    temporaryValue5 = parameter1;
    temporaryValue1 = temporaryValue2(temporaryValue3, temporaryValue5);
    return temporaryValue1;
  } else {
    temporaryValue7 = prepareInterceptData;
    temporaryValue6 = {};
    temporaryValue6.yhd = localState2;
    temporaryValue8 = localState1;
    temporaryValue6.vzv = temporaryValue8;
    temporaryValue5 = temporaryValue7(temporaryValue6);
    temporaryValue7 = temporaryValue5.then;
    temporaryValue6 = new Array(1);
    temporaryValue8 = function (parameter0) { return buildFetchInterceptContext.apply(this, arguments); };
    temporaryValue6[0] = temporaryValue8;
    temporaryValue3 = Reflect.apply(temporaryValue7, temporaryValue5, temporaryValue6);
    temporaryValue5 = temporaryValue3.then;
    temporaryValue9 = new Array(1);
    temporaryValue6 = function (parameter0) { return invokeOriginalFetchAfterIntercept.apply(this, arguments); };
    temporaryValue9[0] = temporaryValue6;
    temporaryValue4 = Reflect.apply(temporaryValue5, temporaryValue3, temporaryValue9);
    temporaryValue3 = temporaryValue4.then;
    temporaryValue6 = new Array(1);
    temporaryValue5 = function (parameter0) { return protectedTokenStateStep4.apply(this, arguments); };
    temporaryValue6[0] = temporaryValue5;
    temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue4, temporaryValue6);
    temporaryValue3 = temporaryValue2.catch;
    temporaryValue4 = new Array(1);
    temporaryValue6 = function (parameter0) { return reportAndRethrowInterceptError.apply(this, arguments); };
    temporaryValue4[0] = temporaryValue6;
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
    return temporaryValue1;
  }
}

function buildFetchInterceptContext(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let buildInterceptedRequestInit, interceptWindow, requestInput, requestInit;

  temporaryValue5 = interceptWindow;
  temporaryValue3 = {  };
  temporaryValue3.window = temporaryValue5;
  temporaryValue4 = parameter0;
  temporaryValue3.interceptData = temporaryValue4;
  temporaryValue5 = requestInput;
  temporaryValue3.input = temporaryValue5;
  temporaryValue4 = requestInit;
  temporaryValue3.init = temporaryValue4;
  temporaryValue1 = buildInterceptedRequestInit(temporaryValue3);
  return temporaryValue1;
}

function invokeOriginalFetchAfterIntercept(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let originalFetch, requestInput;

  temporaryValue4 = originalFetch;
  temporaryValue2 = requestInput;
  temporaryValue3 = temporaryValue4(temporaryValue2, parameter0);
  temporaryValue2 = temporaryValue3.catch;
  temporaryValue6 = new Array(1);
  temporaryValue4 = function (parameter0) { return tagInterceptError.apply(this, arguments); };
  temporaryValue6[0] = temporaryValue4;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue6);
  return temporaryValue1;
}

function tagInterceptError(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3;
  let localState1, normalizeError;

  localState1 = undefined;
  temporaryValue2 = normalizeError;
  temporaryValue1 = temporaryValue2(parameter0);
  localState1 = temporaryValue1;
  temporaryValue2 = localState1;
  temporaryValue2.qfp = true;
  temporaryValue1 = localState1;
  throw temporaryValue1;
}

function reportAndRethrowInterceptError(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, normalizeError, interceptLogger;

  localState1 = undefined;
  temporaryValue2 = parameter0;
  temporaryValue1 = normalizeError(temporaryValue2);
  localState1 = temporaryValue1;
  temporaryValue1 = localState1;
  temporaryValue2 = temporaryValue1.qfp;
  temporaryValue1 = !temporaryValue2;
  if (temporaryValue1) {
    temporaryValue1 = interceptLogger;
    temporaryValue2 = temporaryValue1.xmr;
    temporaryValue3 = Reflect.apply(temporaryValue2, temporaryValue1, [parameter0, 212]);
    temporaryValue1 = undefined;
  }
  temporaryValue1 = localState1;
  temporaryValue2 = delete temporaryValue1.qfp;
  temporaryValue1 = parameter0;
  throw temporaryValue1;
}

function createScheduledPromise(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1;

  localState1 = currentFunction;
  temporaryValue4 = Promise;
  temporaryValue5 = new Array(1);
  temporaryValue1 = function (parameter0) { return schedulePromiseResolution.apply(this, arguments); };
  temporaryValue5[0] = temporaryValue1;
  temporaryValue3 = Reflect.construct(temporaryValue4, temporaryValue5);
  return temporaryValue3;
}

function schedulePromiseResolution(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4;
  let scheduledDelayMilliseconds;

  temporaryValue1 = globalThis.setTimeout;
  temporaryValue2 = temporaryValue1(parameter0, scheduledDelayMilliseconds);
  return undefined;
}

function defineHiddenReadOnlyProperty(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = Object;
  temporaryValue5 = parameter0;
  temporaryValue3 = [undefined, undefined, undefined];
  temporaryValue3[0] = temporaryValue5;
  temporaryValue5 = parameter1;
  temporaryValue3[1] = temporaryValue5;
  temporaryValue3[2] = { configurable: true, enumerable: false, writable: false };
  temporaryValue1 = temporaryValue2.defineProperty(...temporaryValue3);
  return undefined;
}

function deleteObjectProperty(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue5;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = parameter0;
  temporaryValue1 = delete temporaryValue2[parameter1];
  return undefined;
}

function createOptionalLookupMapper(parameter0) {
  let temporaryValue1 = parameter0;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = function (parameter0) { return mapOptionalLookupValue.apply(this, arguments); };
  return temporaryValue1;
}

function mapOptionalLookupValue(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4;
  let useLookupTable, mapOptionalLookupValueDependency;

  temporaryValue1 = useLookupTable;
  if (temporaryValue1) {
    temporaryValue1 = mapOptionalLookupValueDependency;
    temporaryValue2 = temporaryValue1[parameter0];
  } else {
    temporaryValue1 = parameter0;
    temporaryValue2 = temporaryValue1;
  }
  return temporaryValue2;
}

function resolveNamedChild(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue8;
  let namedChildContainer, resolveNamedChildDependency;

  temporaryValue1 = namedChildContainer;
  temporaryValue5 = temporaryValue1.children;
  temporaryValue1 = temporaryValue5.namedItem;
  temporaryValue4 = Reflect.apply(temporaryValue1, temporaryValue5, [resolveNamedChildDependency[parameter0]]);
  return temporaryValue4;
}

function updateInterceptionMetadata(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue7;
  let localState1, capturedCallbackVariant1, capturedCallbackVariant2, capturedDependencyVariant1, updateInterceptionMetadataDependency, capturedDependencyVariant2;

  localState1 = currentFunction;
  temporaryValue2 = capturedCallbackVariant1;
  temporaryValue3 = parameter0;
  temporaryValue5 = parameter2;
  temporaryValue1 = temporaryValue2(temporaryValue3, temporaryValue5, parameter1);
  temporaryValue2 = capturedCallbackVariant2;
  temporaryValue3 = parameter1;
  temporaryValue5 = capturedDependencyVariant1;
  temporaryValue1 = temporaryValue2(temporaryValue3, temporaryValue5);
  temporaryValue1 = updateInterceptionMetadataDependency;
  temporaryValue3 = parameter1;
  temporaryValue2 = temporaryValue1(temporaryValue3, capturedDependencyVariant2);
  return undefined;
}

function processFormActionAsync(parameter0, parameter1, parameter2, parameter3, parameter4) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue5 = parameter4;
  let temporaryValue6, temporaryValue8;
  let localState1, localState2, localState3, localState4, localState5, capturedCallback, parseUrlAgainstWindow, processFormActionAsyncDependency;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  temporaryValue2 = capturedCallback;
  temporaryValue3 = parameter0;
  temporaryValue4 = parameter1;
  temporaryValue1 = temporaryValue2(temporaryValue3, temporaryValue4);
  localState2 = temporaryValue1;
  temporaryValue2 = localState2;
  temporaryValue1 = temporaryValue2.action;
  localState3 = temporaryValue1;
  temporaryValue1 = localState2;
  temporaryValue3 = temporaryValue1.method;
  localState4 = temporaryValue3;
  temporaryValue2 = parseUrlAgainstWindow;
  temporaryValue3 = parameter0;
  temporaryValue4 = localState3;
  temporaryValue1 = temporaryValue2(temporaryValue3, temporaryValue4);
  localState5 = temporaryValue1;
  temporaryValue4 = processFormActionAsyncDependency;
  temporaryValue5 = temporaryValue4(0);
  temporaryValue4 = temporaryValue5.then;
  temporaryValue8 = new Array(1);
  temporaryValue6 = function () { return buildFormInterceptionDescriptor.apply(this, arguments); };
  temporaryValue8[0] = temporaryValue6;
  temporaryValue3 = Reflect.apply(temporaryValue4, temporaryValue5, temporaryValue8);
  temporaryValue4 = temporaryValue3.then;
  temporaryValue5 = new Array(1);
  temporaryValue6 = function (parameter0) { return commitFormInterceptionResult.apply(this, arguments); };
  temporaryValue5[0] = temporaryValue6;
  temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue5);
  temporaryValue3 = temporaryValue2.catch;
  temporaryValue6 = new Array(1);
  temporaryValue8 = function (parameter0) { return reportFormInterceptionError.apply(this, arguments); };
  temporaryValue6[0] = temporaryValue8;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue6);
  return undefined;
}

function buildFormInterceptionDescriptor() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue6;
  let buildFormDescriptor, buildFormInterceptionDescriptorDependencyVariant1, buildFormInterceptionDescriptorDependencyVariant2;

  temporaryValue1 = buildFormDescriptor({ yhd: buildFormInterceptionDescriptorDependencyVariant1, vzv: buildFormInterceptionDescriptorDependencyVariant2 });
  return temporaryValue1;
}

function commitFormInterceptionResult(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue6;
  let capturedDependency, formWindow, formElement, cleanupFormInterception;

  temporaryValue1 = capturedDependency;
  temporaryValue2 = temporaryValue1(formWindow, formElement, parameter0);
  temporaryValue1 = cleanupFormInterception;
  temporaryValue2 = temporaryValue1();
  return undefined;
}

function reportFormInterceptionError(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let formInterceptionLogger, normalizeError;

  temporaryValue4 = formInterceptionLogger;
  temporaryValue6 = normalizeError(parameter0);
  temporaryValue1 = temporaryValue4.xmr(temporaryValue6, 210);
  return undefined;
}

function applyFormActionIfEligible(parameter0, parameter1, parameter2, parameter3) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, localState3, localState4, localState5, localState6, capturedCallbackVariant1, parseUrlAgainstWindow, capturedDependencyVariant1, capturedCallbackVariant2, capturedDependencyVariant2;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  temporaryValue2 = capturedCallbackVariant1;
  temporaryValue3 = parameter0;
  temporaryValue4 = parameter1;
  temporaryValue1 = temporaryValue2(temporaryValue3, temporaryValue4);
  localState2 = temporaryValue1;
  temporaryValue1 = localState2;
  temporaryValue2 = temporaryValue1.action;
  localState3 = temporaryValue2;
  temporaryValue1 = localState2;
  temporaryValue2 = temporaryValue1.method;
  localState4 = temporaryValue2;
  temporaryValue6 = parseUrlAgainstWindow;
  temporaryValue2 = parameter0;
  temporaryValue3 = localState3;
  temporaryValue1 = temporaryValue6(temporaryValue2, temporaryValue3);
  localState5 = temporaryValue1;
  temporaryValue2 = parameter2;
  temporaryValue6 = localState5;
  temporaryValue1 = temporaryValue2(temporaryValue6);
  temporaryValue2 = !temporaryValue1;
  if (temporaryValue2) {
    return false;
  } else {
    temporaryValue3 = parameter3;
    temporaryValue4 = localState4;
    temporaryValue1 = localState5;
    temporaryValue2 = temporaryValue3(temporaryValue4, temporaryValue1);
    localState6 = temporaryValue2;
    temporaryValue4 = capturedDependencyVariant1;
    temporaryValue2 = parameter0;
    temporaryValue3 = parameter1;
    temporaryValue1 = temporaryValue4(temporaryValue2, temporaryValue3, localState6);
    temporaryValue2 = capturedCallbackVariant2;
    temporaryValue3 = parameter1;
    temporaryValue1 = temporaryValue2(temporaryValue3, capturedDependencyVariant2);
    return true;
  }
}

function isFormActionEligible(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5;
  let localState1, localState2, localState3, localState4, localState5, capturedCallback, parseUrlAgainstWindow;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  temporaryValue3 = capturedCallback;
  temporaryValue2 = parameter0;
  temporaryValue4 = parameter1;
  temporaryValue1 = temporaryValue3(temporaryValue2, temporaryValue4);
  localState2 = temporaryValue1;
  temporaryValue1 = localState2;
  temporaryValue4 = temporaryValue1.action;
  localState3 = temporaryValue4;
  temporaryValue1 = localState2;
  temporaryValue2 = temporaryValue1.method;
  localState4 = temporaryValue2;
  temporaryValue2 = parseUrlAgainstWindow;
  temporaryValue4 = parameter0;
  temporaryValue1 = temporaryValue2(temporaryValue4, localState3);
  localState5 = temporaryValue1;
  temporaryValue2 = parameter2;
  temporaryValue3 = localState4;
  temporaryValue4 = localState5;
  temporaryValue1 = temporaryValue2(temporaryValue3, temporaryValue4);
  temporaryValue2 = !temporaryValue1;
  if (temporaryValue2) {
    return false;
  } else {
    return true;
  }
}

function installSubmitInterceptionHandler(parameter0, parameter1, parameter2, parameter3, parameter4, parameter5) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue5 = parameter4;
  let temporaryValue6 = parameter5;
    let localState1;

  localState1 = currentFunction;
  temporaryValue2 = parameter5;
  temporaryValue3 = temporaryValue2.ekj;
  temporaryValue4 = new Array(2);
  temporaryValue5 = function (parameter0) { return handleCapturedSubmitEvent.apply(this, arguments); };
  temporaryValue4[0] = temporaryValue5;
  temporaryValue4[1] = 210;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
  return temporaryValue1;
}

function handleCapturedSubmitEvent(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue7, temporaryValue8;
  let localState1, localState2, localState3, formWindow, capturedCallbackVariant1, formEligibilityPolicy, capturedCallbackVariant2, capturedDependencyVariant1, capturedDependencyVariant2, capturedCallbackVariant3, handleCapturedSubmitEventDependencyVariant1, formMethodPolicy, formActionPolicy, handleCapturedSubmitEventDependencyVariant2, formSubmitOptions, formListenerContext;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue3 = parameter0;
  temporaryValue1 = temporaryValue3.target;
  localState1 = temporaryValue1;
  temporaryValue3 = parameter0;
  temporaryValue1 = temporaryValue3.submitter;
  localState2 = temporaryValue1;
  temporaryValue1 = localState1;
  temporaryValue2 = formWindow;
  temporaryValue3 = temporaryValue2.HTMLFormElement;
  temporaryValue2 = temporaryValue1 instanceof temporaryValue3;
  temporaryValue1 = !temporaryValue2;
  if (temporaryValue1) {
    return true;
  } else {
    temporaryValue2 = capturedCallbackVariant1;
    temporaryValue4 = formWindow;
    temporaryValue3 = localState1;
    temporaryValue5 = formEligibilityPolicy;
    temporaryValue1 = temporaryValue2(temporaryValue4, temporaryValue3, temporaryValue5);
    temporaryValue2 = !temporaryValue1;
    if (temporaryValue2) {
      return true;
    } else {
      temporaryValue2 = capturedCallbackVariant2;
      temporaryValue3 = localState1;
      temporaryValue5 = capturedDependencyVariant1;
      temporaryValue1 = temporaryValue2(temporaryValue3, temporaryValue5);
      if (temporaryValue1) {
        temporaryValue3 = capturedCallbackVariant2;
        temporaryValue4 = capturedDependencyVariant2;
        temporaryValue2 = temporaryValue3(localState1, temporaryValue4);
        temporaryValue3 = !temporaryValue2;
        temporaryValue1 = temporaryValue3;
      }
      if (temporaryValue1) {
        temporaryValue2 = capturedCallbackVariant3;
        temporaryValue5 = localState1;
        temporaryValue4 = capturedDependencyVariant2;
        temporaryValue1 = temporaryValue2(temporaryValue5, temporaryValue4);
        return true;
      } else {
        temporaryValue1 = handleCapturedSubmitEventDependencyVariant1;
        temporaryValue4 = new Array(4);
        temporaryValue5 = formWindow;
        temporaryValue4[0] = temporaryValue5;
        temporaryValue2 = localState1;
        temporaryValue4[1] = temporaryValue2;
        temporaryValue5 = formMethodPolicy;
        temporaryValue4[2] = temporaryValue5;
        temporaryValue2 = formActionPolicy;
        temporaryValue4[3] = temporaryValue2;
        temporaryValue3 = Reflect.apply(temporaryValue1, undefined, temporaryValue4);
        localState3 = temporaryValue3;
        temporaryValue1 = localState3;
        if (temporaryValue1) {
          return true;
        } else {
          temporaryValue2 = handleCapturedSubmitEventDependencyVariant2;
          temporaryValue3 = new Array(5);
          temporaryValue4 = formWindow;
          temporaryValue3[0] = temporaryValue4;
          temporaryValue4 = localState1;
          temporaryValue3[1] = temporaryValue4;
          temporaryValue4 = formSubmitOptions;
          temporaryValue3[2] = temporaryValue4;
          temporaryValue4 = function () { return invokeNativeFormSubmission.apply(this, arguments); };
          temporaryValue3[3] = temporaryValue4;
          temporaryValue4 = formListenerContext;
          temporaryValue3[4] = temporaryValue4;
          temporaryValue1 = Reflect.apply(temporaryValue2, undefined, temporaryValue3);
          temporaryValue3 = parameter0;
          temporaryValue2 = temporaryValue3.stopImmediatePropagation;
          temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, []);
          temporaryValue1 = parameter0;
          temporaryValue3 = temporaryValue1.stopPropagation;
          temporaryValue5 = [];
          temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue5);
          temporaryValue2 = parameter0;
          temporaryValue3 = temporaryValue2.preventDefault;
          temporaryValue4 = [];
          temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
          return false;
        }
      }
    }
  }
}

function invokeNativeFormSubmission() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let invokeNativeFormSubmissionCallback, formWindow, invokeNativeFormSubmissionDependencyVariant1, invokeNativeFormSubmissionDependencyVariant2;

  temporaryValue4 = invokeNativeFormSubmissionCallback(formWindow, invokeNativeFormSubmissionDependencyVariant1, invokeNativeFormSubmissionDependencyVariant2);
  return temporaryValue4;
}

function addSubmitCaptureListener(parameter0, parameter1, parameter2, parameter3, parameter4, parameter5) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue5 = parameter4;
  let temporaryValue6 = parameter5;
  let temporaryValue7, temporaryValue8, temporaryValue11;
  let localState1, addSubmitCaptureListenerDependency;

  localState1 = currentFunction;
  temporaryValue1 = parameter0;
  temporaryValue3 = temporaryValue1.addEventListener;
  temporaryValue6 = addSubmitCaptureListenerDependency;
  temporaryValue8 = parameter0;
  temporaryValue7 = [undefined, undefined, undefined, undefined, undefined, undefined];
  temporaryValue7[0] = temporaryValue8;
  temporaryValue8 = parameter1;
  temporaryValue7[1] = temporaryValue8;
  temporaryValue7[2] = parameter2;
  temporaryValue8 = parameter3;
  temporaryValue7[3] = temporaryValue8;
  temporaryValue8 = parameter4;
  temporaryValue7[4] = temporaryValue8;
  temporaryValue8 = parameter5;
  temporaryValue7[5] = temporaryValue8;
  temporaryValue4 = Reflect.apply(temporaryValue6, undefined, temporaryValue7);
  temporaryValue5 = ["submit", undefined, undefined];
  temporaryValue5[1] = temporaryValue4;
  temporaryValue5[2] = { capture: true };
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue5);
  return undefined;
}

function installFormInterceptionHooks(parameter0, parameter1, parameter2, parameter3, parameter4, parameter5) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue5 = parameter4;
  let temporaryValue6 = parameter5;
    let localState1, processDeferredActionDependencyVariant1, processDeferredActionDependencyVariant2;

  localState1 = currentFunction;
  temporaryValue3 = processDeferredActionDependencyVariant1;
  temporaryValue2 = parameter0;
  temporaryValue4 = [undefined, undefined, undefined, undefined];
  temporaryValue4[0] = temporaryValue2;
  temporaryValue2 = parameter1;
  temporaryValue4[1] = temporaryValue2;
  temporaryValue2 = parameter3;
  temporaryValue4[2] = temporaryValue2;
  temporaryValue2 = parameter5;
  temporaryValue4[3] = temporaryValue2;
  temporaryValue1 = Reflect.apply(temporaryValue3, undefined, temporaryValue4);
  temporaryValue4 = processDeferredActionDependencyVariant2;
  temporaryValue3 = parameter0;
  temporaryValue2 = [undefined, undefined, undefined, undefined, undefined, undefined];
  temporaryValue2[0] = temporaryValue3;
  temporaryValue5 = parameter1;
  temporaryValue2[1] = temporaryValue5;
  temporaryValue3 = parameter2;
  temporaryValue2[2] = temporaryValue3;
  temporaryValue5 = parameter3;
  temporaryValue2[3] = temporaryValue5;
  temporaryValue3 = parameter4;
  temporaryValue2[4] = temporaryValue3;
  temporaryValue3 = parameter5;
  temporaryValue2[5] = temporaryValue3;
  temporaryValue1 = Reflect.apply(temporaryValue4, undefined, temporaryValue2);
  return undefined;
}

function readXhrResponseHeader(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, localState3, localState4, localState5;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  temporaryValue2 = parameter0;
  temporaryValue3 = temporaryValue2.getAllResponseHeaders;
  temporaryValue4 = [];
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
  if (!(temporaryValue1)) {
    temporaryValue1 = "";
  }
  localState3 = temporaryValue1;
  temporaryValue6 = RegExp;
  temporaryValue1 = new Array(2);
  temporaryValue2 = "^".concat;
  temporaryValue5 = [parameter1, ": (.*?)[\r\n]*$"];
  temporaryValue4 = Reflect.apply(temporaryValue2, "^", temporaryValue5);
  temporaryValue1[0] = temporaryValue4;
  temporaryValue1[1] = "m";
  temporaryValue3 = Reflect.construct(temporaryValue6, temporaryValue1);
  localState4 = temporaryValue3;
  temporaryValue2 = localState4;
  temporaryValue4 = temporaryValue2.exec;
  temporaryValue3 = new Array(1);
  temporaryValue6 = localState3;
  temporaryValue3[0] = temporaryValue6;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue3);
  localState2 = temporaryValue1;
  temporaryValue2 = temporaryValue1 === null;
  if (!(temporaryValue2)) {
    temporaryValue1 = localState2;
    temporaryValue5 = undefined;
    temporaryValue3 = temporaryValue1 === temporaryValue5;
    temporaryValue2 = temporaryValue3;
  }
  if (temporaryValue2) {
    temporaryValue1 = undefined;
    temporaryValue3 = temporaryValue1;
  } else {
    temporaryValue1 = localState2;
    temporaryValue2 = temporaryValue1[1];
    temporaryValue3 = temporaryValue2;
  }
  localState5 = temporaryValue3;
  temporaryValue1 = localState5;
  return temporaryValue1;
}

function createTokenStateHandler(parameter0) {
  let temporaryValue1 = parameter0;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = function (parameter0) { return processTokenStateContext.apply(this, arguments); };
  return temporaryValue1;
}

function processTokenStateContext(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, localState2, prepareTokenState;

  localState1 = undefined;
  localState2 = undefined;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.yhd;
  localState1 = temporaryValue2;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.vzv;
  localState2 = temporaryValue2;
  temporaryValue3 = prepareTokenState;
  temporaryValue4 = localState2;
  temporaryValue2 = temporaryValue3(temporaryValue4);
  temporaryValue3 = temporaryValue2.then;
  temporaryValue5 = new Array(1);
  temporaryValue4 = function (parameter0) { return protectedTokenStateStep7.apply(this, arguments); };
  temporaryValue5[0] = temporaryValue4;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue5);
  return temporaryValue1;
}

function attachInterceptData(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let requestInitTemplate;

  temporaryValue3 = objectSpread2;
  temporaryValue6 = requestInitTemplate;
  temporaryValue4 = temporaryValue3({  }, temporaryValue6);
  temporaryValue1 = objectSpread2(temporaryValue4, {  }, { nzv: parameter0 });
  return temporaryValue1;
}

function createProtectedTokenStateHandler(parameter0) {
  let temporaryValue1 = parameter0;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = function (parameter0, nestedParameter1) { return protectedTokenStateStep8.apply(this, arguments); };
  return temporaryValue1;
}

function createOptionalValuePredicate(parameter0) {
  let temporaryValue1 = parameter0;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = function (parameter0) { return testOptionalValue.apply(this, arguments); };
  return temporaryValue1;
}

function testOptionalValue(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue5;
  let optionalValueResolver;

  temporaryValue2 = optionalValueResolver;
  temporaryValue1 = temporaryValue2(parameter0, false);
  temporaryValue2 = temporaryValue1 !== null;
  return temporaryValue2;
}

function invokeFetchInterceptorFactory() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4;
  let invokeFetchInterceptorFactoryDependency, capturedDependencyVariant1, capturedDependencyVariant2, capturedDependencyVariant3, capturedDependencyVariant4, capturedDependencyVariant5;

  temporaryValue4 = capturedDependencyVariant1;
  temporaryValue2 = [undefined, undefined, undefined, undefined, undefined];
  temporaryValue2[0] = temporaryValue4;
  temporaryValue4 = capturedDependencyVariant2;
  temporaryValue2[1] = temporaryValue4;
  temporaryValue4 = capturedDependencyVariant3;
  temporaryValue2[2] = temporaryValue4;
  temporaryValue4 = capturedDependencyVariant4;
  temporaryValue2[3] = temporaryValue4;
  temporaryValue4 = capturedDependencyVariant5;
  temporaryValue2[4] = temporaryValue4;
  temporaryValue3 = Reflect.apply(invokeFetchInterceptorFactoryDependency, undefined, temporaryValue2);
  return temporaryValue3;
}

function invokeXhrInterceptorFactory() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4;
  let invokeXhrInterceptorFactoryDependency, capturedDependencyVariant1, capturedDependencyVariant2, capturedDependencyVariant3, capturedDependencyVariant4, capturedDependencyVariant5, capturedDependencyVariant6;

  temporaryValue4 = capturedDependencyVariant1;
  temporaryValue3 = [undefined, undefined, undefined, undefined, undefined, undefined];
  temporaryValue3[0] = temporaryValue4;
  temporaryValue4 = capturedDependencyVariant2;
  temporaryValue3[1] = temporaryValue4;
  temporaryValue4 = capturedDependencyVariant3;
  temporaryValue3[2] = temporaryValue4;
  temporaryValue4 = capturedDependencyVariant4;
  temporaryValue3[3] = temporaryValue4;
  temporaryValue4 = capturedDependencyVariant5;
  temporaryValue3[4] = temporaryValue4;
  temporaryValue4 = capturedDependencyVariant6;
  temporaryValue3[5] = temporaryValue4;
  temporaryValue1 = Reflect.apply(invokeXhrInterceptorFactoryDependency, undefined, temporaryValue3);
  return temporaryValue1;
}

function invokeOptionalInterceptorFactory() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let invokeOptionalInterceptorFactoryDependencyVariant1, invokeOptionalInterceptorFactoryDependencyVariant2, capturedDependencyVariant1, capturedDependencyVariant2, capturedDependencyVariant3, capturedDependencyVariant4, capturedDependencyVariant5;

  temporaryValue1 = invokeOptionalInterceptorFactoryDependencyVariant1;
  if (temporaryValue1) {
    temporaryValue5 = capturedDependencyVariant2;
    temporaryValue3 = [capturedDependencyVariant1, undefined, undefined, undefined, undefined, undefined];
    temporaryValue3[1] = temporaryValue5;
    temporaryValue7 = capturedDependencyVariant3;
    temporaryValue3[2] = temporaryValue7;
    temporaryValue7 = capturedDependencyVariant4;
    temporaryValue3[3] = temporaryValue7;
    temporaryValue5 = invokeOptionalInterceptorFactoryDependencyVariant3;
    temporaryValue3[4] = temporaryValue5;
    temporaryValue5 = capturedDependencyVariant5;
    temporaryValue3[5] = temporaryValue5;
    temporaryValue2 = Reflect.apply(invokeOptionalInterceptorFactoryDependencyVariant2, undefined, temporaryValue3);
    temporaryValue1 = temporaryValue2;
  }
  return temporaryValue1;
}

// Remote configuration and network orchestration
function defineProtectedTransportErrorClass(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let protectedTransportStep3;

  protectedTransportStep3 = undefined;
  temporaryValue1 = function (parameter0) { return protectedTransportStep3.apply(this, arguments); };
  protectedTransportStep3 = temporaryValue1;
  temporaryValue1 = inherits;
  temporaryValue2 = temporaryValue1(protectedTransportStep3, parameter0);
  temporaryValue1 = createClass(protectedTransportStep3);
  return temporaryValue1;
}

function createDelayPromise(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4;
  let localState1;

  localState1 = currentFunction;
  temporaryValue3 = Promise;
  temporaryValue2 = new Array(1);
  temporaryValue4 = function (parameter0) { return scheduleDelayResolution.apply(this, arguments); };
  temporaryValue2[0] = temporaryValue4;
  temporaryValue1 = Reflect.construct(temporaryValue3, temporaryValue2);
  return temporaryValue1;
}

function scheduleDelayResolution(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4;
  let delayMilliseconds;

  temporaryValue1 = globalThis.setTimeout(parameter0, delayMilliseconds);
  return undefined;
}

function initializeNetworkRequestFactory(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue5;
  let localState1, localState2;

  localState1 = currentFunction;
  temporaryValue1 = localState2;
  if (!temporaryValue1) {
    temporaryValue1 = parameter0;
    localState2 = temporaryValue1;
  }
  return undefined;
}

function createTimeoutRunner() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1;

  localState1 = undefined;
  temporaryValue3 = asyncToGenerator;
  temporaryValue4 = regeneratorRuntime;
  temporaryValue5 = temporaryValue4.mark;
  temporaryValue6 = new Array(1);
  temporaryValue7 = function (nestedParameter0, nestedParameter1, nestedParameter2) { return timeoutRunnerGenerator.apply(this, arguments); };
  temporaryValue6[0] = temporaryValue7;
  temporaryValue2 = Reflect.apply(temporaryValue5, temporaryValue4, temporaryValue6);
  temporaryValue1 = temporaryValue3(temporaryValue2);
  localState1 = temporaryValue1;
  temporaryValue1 = function (nestedParameter0, nestedParameter1, nestedParameter2) { return invokeTimeoutRunner.apply(this, arguments); };
  return temporaryValue1;
}

function timeoutRunnerGenerator(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, localState2, localState3, localState4;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue1 = regeneratorRuntime;
  temporaryValue4 = temporaryValue1.wrap;
  temporaryValue5 = new Array(4);
  temporaryValue3 = function (parameter0) { return runWithTimeout.apply(this, arguments); };
  temporaryValue5[0] = temporaryValue3;
  temporaryValue3 = localState1;
  temporaryValue5[1] = temporaryValue3;
  temporaryValue5[2] = null;
  temporaryValue3 = new Array(4);
  temporaryValue3[0] = 2;
  temporaryValue3[2] = 11;
  temporaryValue3[3] = 14;
  temporaryValue6 = [undefined];
  temporaryValue6[0] = temporaryValue3;
  temporaryValue5[3] = temporaryValue6;
  temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue1, temporaryValue5);
  return temporaryValue2;
}

function installAbortTimeout(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue6;
  let timeoutMilliseconds, localState1;

  temporaryValue3 = globalThis.setTimeout;
  temporaryValue2 = function () { return rejectWithAbortError.apply(this, arguments); };
  temporaryValue1 = temporaryValue3(temporaryValue2, timeoutMilliseconds);
  localState1 = temporaryValue1;
  return undefined;
}

function rejectWithAbortError() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let rejectTimeoutPromise;

  temporaryValue3 = new globalThis.DOMException("The operation was aborted.", "AbortError");
  temporaryValue1 = rejectTimeoutPromise(temporaryValue3);
  return undefined;
}

function invokeTimeoutRunner(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue7;
  let localState1, timeoutRunnerAsync;

  localState1 = currentFunction;
  temporaryValue3 = timeoutRunnerAsync;
  temporaryValue1 = temporaryValue3.apply;
  temporaryValue2 = Reflect.apply(temporaryValue1, temporaryValue3, [this, arguments]);
  return temporaryValue2;
}

function createRetryRunner() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1;

  localState1 = undefined;
  temporaryValue2 = asyncToGenerator;
  temporaryValue5 = regeneratorRuntime;
  temporaryValue6 = temporaryValue5.mark;
  temporaryValue3 = new Array(1);
  temporaryValue7 = function (nestedParameter0, nestedParameter1, nestedParameter2) { return retryRunnerGenerator.apply(this, arguments); };
  temporaryValue3[0] = temporaryValue7;
  temporaryValue4 = Reflect.apply(temporaryValue6, temporaryValue5, temporaryValue3);
  temporaryValue1 = temporaryValue2(temporaryValue4);
  localState1 = temporaryValue1;
  temporaryValue1 = function (nestedParameter0, nestedParameter1, nestedParameter2) { return invokeRetryRunner.apply(this, arguments); };
  return temporaryValue1;
}

function retryRunnerGenerator(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, localState2, localState3, localState4, localState5, localState6, localState7, localState8, localState9, localState10, localState11, localState12, localState13;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  localState7 = undefined;
  localState8 = undefined;
  localState9 = undefined;
  localState10 = undefined;
  localState11 = undefined;
  localState12 = undefined;
  localState13 = undefined;
  temporaryValue2 = regeneratorRuntime;
  temporaryValue6 = temporaryValue2.wrap;
  temporaryValue4 = new Array(4);
  temporaryValue5 = function (parameter0) { return retryAsyncOperation.apply(this, arguments); };
  temporaryValue4[0] = temporaryValue5;
  temporaryValue3 = localState1;
  temporaryValue4[1] = temporaryValue3;
  temporaryValue4[2] = null;
  temporaryValue3 = [4, 10];
  temporaryValue5 = [undefined];
  temporaryValue5[0] = temporaryValue3;
  temporaryValue4[3] = temporaryValue5;
  temporaryValue1 = Reflect.apply(temporaryValue6, temporaryValue2, temporaryValue4);
  return temporaryValue1;
}

function createProtectedRequestThunk() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1;

  localState1 = undefined;
  temporaryValue1 = asyncToGenerator;
  temporaryValue3 = regeneratorRuntime;
  temporaryValue5 = temporaryValue3.mark;
  temporaryValue7 = new Array(1);
  temporaryValue6 = function (nestedParameter0) { return protectedRequestGenerator.apply(this, arguments); };
  temporaryValue7[0] = temporaryValue6;
  temporaryValue4 = Reflect.apply(temporaryValue5, temporaryValue3, temporaryValue7);
  temporaryValue2 = temporaryValue1(temporaryValue4);
  localState1 = temporaryValue2;
  temporaryValue1 = function (nestedParameter0) { return invokeProtectedRequestThunk.apply(this, arguments); };
  return temporaryValue1;
}

function protectedRequestGenerator(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, localState2;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue2 = regeneratorRuntime;
  temporaryValue5 = temporaryValue2.wrap;
  temporaryValue3 = new Array(2);
  temporaryValue4 = function (parameter0) { return protectedTransportStep4.apply(this, arguments); };
  temporaryValue3[0] = temporaryValue4;
  temporaryValue4 = localState1;
  temporaryValue3[1] = temporaryValue4;
  temporaryValue1 = Reflect.apply(temporaryValue5, temporaryValue2, temporaryValue3);
  return temporaryValue1;
}

function invokeProtectedRequestThunk(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, protectedRequestAsync;

  localState1 = currentFunction;
  temporaryValue3 = protectedRequestAsync;
  temporaryValue1 = temporaryValue3.apply(this, arguments);
  return temporaryValue1;
}

function invokeRetryRunner(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5;
  let localState1, retryRunnerAsync;

  localState1 = currentFunction;
  temporaryValue3 = retryRunnerAsync;
  temporaryValue2 = temporaryValue3.apply;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, [this, arguments]);
  return temporaryValue1;
}

function protectedLogTransportGenerator(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1;

  localState1 = currentFunction;
  temporaryValue3 = regeneratorRuntime;
  temporaryValue4 = temporaryValue3.wrap;
  temporaryValue1 = new Array(2);
  temporaryValue5 = function (parameter0) { return protectedTransportStep5.apply(this, arguments); };
  temporaryValue1[0] = temporaryValue5;
  temporaryValue5 = localState1;
  temporaryValue1[1] = temporaryValue5;
  temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue1);
  return temporaryValue2;
}

function invokeProtectedLogTransport(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let protectedLogTransportAsync;

  temporaryValue3 = protectedLogTransportAsync;
  temporaryValue1 = temporaryValue3.apply(this, arguments);
  return temporaryValue1;
}

function requestRemoteConfiguration(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11, temporaryValue12, temporaryValue13, temporaryValue14, temporaryValue16;
  let localState1, sendHttpRequest, runtimeEnvironment, requestHeaderName, readRequestHeaderValue, logConfiguration;

  localState1 = currentFunction;
  temporaryValue2 = sendHttpRequest;
  temporaryValue3 = "".concat;
  temporaryValue7 = new Array(1);
  temporaryValue6 = parameter0;
  temporaryValue7[0] = temporaryValue6;
  temporaryValue5 = Reflect.apply(temporaryValue3, "", temporaryValue7);
  temporaryValue3 = temporaryValue5.concat;
  temporaryValue6 = new Array(1);
  temporaryValue7 = runtimeEnvironment;
  temporaryValue9 = temporaryValue7.yxd;
  temporaryValue6[0] = temporaryValue9;
  temporaryValue4 = Reflect.apply(temporaryValue3, temporaryValue5, temporaryValue6);
  temporaryValue3 = function (parameter0) { return parseRemoteConfigurationResponse.apply(this, arguments); };
  temporaryValue5 = {};
  temporaryValue6 = {};
  temporaryValue14 = readRequestHeaderValue();
  temporaryValue9 = defineProperty({  }, requestHeaderName, temporaryValue14);
  temporaryValue7 = defineProperty(temporaryValue9, logConfiguration, "01");
  temporaryValue6.headers = temporaryValue7;
  temporaryValue5.xwq = temporaryValue6;
  temporaryValue5.vqa = 1;
  temporaryValue5.lmr = 4000;
  temporaryValue1 = temporaryValue2(temporaryValue4, temporaryValue3, temporaryValue5);
  return temporaryValue1;
}

function parseRemoteConfigurationResponse(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, localState2, logConfiguration, loggerFactory;

  localState1 = undefined;
  localState2 = undefined;
  temporaryValue3 = parameter0;
  temporaryValue2 = temporaryValue3.headers;
  temporaryValue3 = temporaryValue2.get;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, [logConfiguration]);
  localState1 = temporaryValue1;
  temporaryValue2 = parameter0;
  temporaryValue3 = temporaryValue2.headers;
  temporaryValue4 = temporaryValue3.get;
  temporaryValue5 = new Array(1);
  temporaryValue2 = loggerFactory;
  temporaryValue5[0] = temporaryValue2;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue5);
  localState2 = temporaryValue1;
  temporaryValue3 = localState1;
  temporaryValue1 = temporaryValue3 === null;
  if (!(temporaryValue1)) {
    temporaryValue2 = localState2;
    temporaryValue3 = temporaryValue2 === null;
    temporaryValue1 = temporaryValue3;
  }
  if (temporaryValue1) {
    temporaryValue1 = Error;
    temporaryValue5 = ["/mfc response was missing one or more headers"];
    temporaryValue2 = Reflect.construct(temporaryValue1, temporaryValue5);
    throw temporaryValue2;
  } else {
    temporaryValue1 = {};
    temporaryValue2 = localState1;
    temporaryValue1.ljc = temporaryValue2;
    temporaryValue3 = localState2;
    temporaryValue1.ydc = temporaryValue3;
    return temporaryValue1;
  }
}

function startRemoteConfigurationLoad(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8;
  let localState1;

  localState1 = currentFunction;
  temporaryValue4 = asyncToGenerator;
  temporaryValue6 = regeneratorRuntime;
  temporaryValue3 = temporaryValue6.mark;
  temporaryValue7 = new Array(1);
  temporaryValue8 = function () { return remoteConfigurationLoaderGenerator.apply(this, arguments); };
  temporaryValue7[0] = temporaryValue8;
  temporaryValue5 = Reflect.apply(temporaryValue3, temporaryValue6, temporaryValue7);
  temporaryValue2 = temporaryValue4(temporaryValue5);
  temporaryValue3 = [];
  temporaryValue1 = Reflect.apply(temporaryValue2, undefined, temporaryValue3);
  return temporaryValue1;
}

function remoteConfigurationLoaderGenerator() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue6;
  let localState1, localState2, localState3, localState4;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue3 = regeneratorRuntime;
  temporaryValue2 = temporaryValue3.wrap;
  temporaryValue4 = new Array(2);
  temporaryValue6 = function (nestedParameter0) { return loadRemoteConfiguration.apply(this, arguments); };
  temporaryValue4[0] = temporaryValue6;
  temporaryValue6 = localState1;
  temporaryValue4[1] = temporaryValue6;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
  return temporaryValue1;
}

function applyRemoteConfigurationResponse(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8;
  let localState1, localState2, localState3, localState4, performanceClock, getLoggerConfiguration, timingValidator, timerApi, localState5, wrapRemoteContextError;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue2 = parameter1;
  temporaryValue1 = temporaryValue2.ydc;
  localState2 = temporaryValue1;
  temporaryValue1 = parameter1;
  temporaryValue2 = temporaryValue1.ljc;
  localState3 = temporaryValue2;
  temporaryValue1 = localState2;
  temporaryValue2 = !temporaryValue1;
  if (!(temporaryValue2)) {
    temporaryValue1 = localState3;
    temporaryValue3 = !temporaryValue1;
    temporaryValue2 = temporaryValue3;
  }
  if (temporaryValue2) {
    return undefined;
  } else {
    try {
      temporaryValue2 = performanceClock;
      temporaryValue3 = localState2;
      temporaryValue1 = temporaryValue2(temporaryValue3);
      localState4 = temporaryValue1;
      temporaryValue4 = getLoggerConfiguration;
      temporaryValue2 = temporaryValue4.nuv;
      temporaryValue5 = new Array(2);
      temporaryValue3 = localState3;
      temporaryValue5[0] = temporaryValue3;
      temporaryValue6 = localState4;
      temporaryValue5[1] = temporaryValue6;
      temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, temporaryValue5);
      temporaryValue3 = timingValidator;
      temporaryValue1 = globalThis.window;
      temporaryValue4 = localState3;
      temporaryValue6 = timerApi;
      temporaryValue7 = localState4;
      temporaryValue5 = temporaryValue6(temporaryValue7);
      temporaryValue2 = temporaryValue3(temporaryValue1, temporaryValue4, temporaryValue5);
    } catch (error) {
      localState5 = error;
      temporaryValue1 = parameter0;
      temporaryValue3 = temporaryValue1.xmr;
      temporaryValue4 = new Array(2);
      temporaryValue7 = wrapRemoteContextError;
      temporaryValue5 = temporaryValue7(localState5);
      temporaryValue4[0] = temporaryValue5;
      temporaryValue4[1] = 213;
      temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue4);
      temporaryValue1 = undefined;
    }
    return undefined;
  }
}

function internalLogConfigToFrontend(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = {  };
  temporaryValue2.frontend = { logLevel: parameter0.jqa };
  temporaryValue1 = { vfp: temporaryValue2 };
  temporaryValue1.qaw = {  };
  return temporaryValue1;
}

function frontendLogConfigToInternal(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue6;
  let localState1;

  localState1 = currentFunction;
  temporaryValue6 = parameter0.vfp;
  temporaryValue6 = temporaryValue6.frontend.logLevel;
  temporaryValue1 = { ejc: {  } };
  temporaryValue1.jqa = temporaryValue6;
  return temporaryValue1;
}

function createRuntimeContextRefreshTask() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1;

  localState1 = undefined;
  temporaryValue2 = asyncToGenerator;
  temporaryValue6 = regeneratorRuntime;
  temporaryValue3 = temporaryValue6.mark;
  temporaryValue7 = new Array(1);
  temporaryValue5 = function (nestedParameter0, nestedParameter1) { return runtimeContextRefreshGenerator.apply(this, arguments); };
  temporaryValue7[0] = temporaryValue5;
  temporaryValue4 = Reflect.apply(temporaryValue3, temporaryValue6, temporaryValue7);
  temporaryValue1 = temporaryValue2(temporaryValue4);
  localState1 = temporaryValue1;
  temporaryValue1 = function (nestedParameter0, nestedParameter1) { return invokeRuntimeContextRefreshTask.apply(this, arguments); };
  return temporaryValue1;
}

function runtimeContextRefreshGenerator(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1;

  localState1 = currentFunction;
  temporaryValue3 = regeneratorRuntime;
  temporaryValue1 = temporaryValue3.wrap;
  temporaryValue6 = new Array(2);
  temporaryValue4 = function (parameter0) { return executePromisePipeline.apply(this, arguments); };
  temporaryValue6[0] = temporaryValue4;
  temporaryValue6[1] = localState1;
  temporaryValue2 = Reflect.apply(temporaryValue1, temporaryValue3, temporaryValue6);
  return temporaryValue2;
}

function normalizeRuntimeContextResponse(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue5;
  let localState1, localState2, performanceClock;

  localState1 = undefined;
  localState2 = undefined;
  temporaryValue1 = parameter0;
  temporaryValue3 = temporaryValue1.ljc;
  localState1 = temporaryValue3;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.ydc;
  localState2 = temporaryValue2;
  temporaryValue1 = localState1;
  temporaryValue2 = {  };
  temporaryValue2.ljc = temporaryValue1;
  temporaryValue1 = performanceClock;
  temporaryValue3 = temporaryValue1(localState2);
  temporaryValue2.nwq = temporaryValue3;
  return temporaryValue2;
}

function reportRuntimeContextRefreshError(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let runtimeContextLogger, wrapRemoteContextError;

  temporaryValue2 = runtimeContextLogger;
  temporaryValue5 = wrapRemoteContextError(parameter0);
  temporaryValue1 = temporaryValue2.xmr(temporaryValue5, 201);
  temporaryValue2 = undefined;
  temporaryValue1 = undefined;
  return temporaryValue1;
}

function invokeRuntimeContextRefreshTask(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue6;
  let localState1, runtimeContextRefreshAsync;

  localState1 = currentFunction;
  temporaryValue2 = runtimeContextRefreshAsync;
  temporaryValue1 = temporaryValue2.apply(this, arguments);
  return temporaryValue1;
}

// Cookie and web-storage access
function removeStorageEntry(storageKey) {
  let temporaryValue1 = storageKey;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11;
  let localState1, localState2, localState3, localState4;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue2 = storageKey;
  temporaryValue1 = temporaryValue2.window;
  localState1 = temporaryValue1;
  temporaryValue3 = storageKey;
  temporaryValue4 = temporaryValue3.rcn;
  localState2 = temporaryValue4;
  temporaryValue1 = storageKey;
  temporaryValue2 = temporaryValue1.jcn;
  localState3 = temporaryValue2;
  temporaryValue1 = localState3;
  temporaryValue2 = undefined;
  temporaryValue4 = temporaryValue1 === temporaryValue2;
  if (temporaryValue4) {
    temporaryValue1 = "";
  } else {
    temporaryValue3 = localState3;
    temporaryValue1 = temporaryValue3;
  }
  localState4 = temporaryValue1;
  temporaryValue4 = localState1;
  temporaryValue2 = temporaryValue4.localStorage;
  temporaryValue3 = temporaryValue2.removeItem;
  temporaryValue5 = "".concat(localState2);
  temporaryValue11 = localState4;
  temporaryValue7 = [undefined];
  temporaryValue7[0] = temporaryValue11;
  temporaryValue4 = temporaryValue5.concat(...temporaryValue7);
  temporaryValue6 = [undefined];
  temporaryValue6[0] = temporaryValue4;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue6);
  return undefined;
}

function writeStorageEntry(storageKey) {
  let temporaryValue1 = storageKey;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11, temporaryValue12;
  let localState1, localState2, localState3, localState4, localState5, localState6, xorStringWithRepeatingKey, localState7;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  temporaryValue1 = storageKey;
  temporaryValue2 = temporaryValue1.window;
  localState1 = temporaryValue2;
  temporaryValue1 = storageKey;
  temporaryValue2 = temporaryValue1.nwq;
  localState2 = temporaryValue2;
  temporaryValue1 = storageKey;
  temporaryValue2 = temporaryValue1.nhd;
  localState3 = temporaryValue2;
  temporaryValue2 = storageKey;
  temporaryValue3 = temporaryValue2.rcn;
  localState4 = temporaryValue3;
  temporaryValue1 = storageKey;
  temporaryValue2 = temporaryValue1.jcn;
  localState5 = temporaryValue2;
  temporaryValue3 = localState5;
  temporaryValue1 = undefined;
  temporaryValue2 = temporaryValue3 === temporaryValue1;
  if (temporaryValue2) {
    temporaryValue3 = "";
  } else {
    temporaryValue1 = localState5;
    temporaryValue3 = temporaryValue1;
  }
  localState6 = temporaryValue3;
  try {
    temporaryValue2 = localState1;
    temporaryValue3 = temporaryValue2.localStorage;
    temporaryValue2 = temporaryValue3.setItem;
    temporaryValue9 = "".concat;
    temporaryValue8 = localState4;
    temporaryValue7 = [undefined];
    temporaryValue7[0] = temporaryValue8;
    temporaryValue5 = Reflect.apply(temporaryValue9, "", temporaryValue7);
    temporaryValue7 = temporaryValue5.concat;
    temporaryValue11 = localState6;
    temporaryValue8 = [undefined];
    temporaryValue8[0] = temporaryValue11;
    temporaryValue4 = Reflect.apply(temporaryValue7, temporaryValue5, temporaryValue8);
    temporaryValue6 = [undefined, undefined];
    temporaryValue6[0] = temporaryValue4;
    temporaryValue5 = xorStringWithRepeatingKey;
    temporaryValue8 = JSON;
    temporaryValue9 = temporaryValue8.stringify;
    temporaryValue11 = localState2;
    temporaryValue12 = [undefined];
    temporaryValue12[0] = temporaryValue11;
    temporaryValue7 = Reflect.apply(temporaryValue9, temporaryValue8, temporaryValue12);
    temporaryValue4 = temporaryValue5(temporaryValue7, localState3);
    temporaryValue6[1] = temporaryValue4;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue6);
  } catch (error) {
    localState7 = error;
  }
  return undefined;
}

function readLocalStorageState(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11;
  let localState1, localState2, localState3, localState4, localState5, localState6, xorStringWithRepeatingKey, localState7;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  temporaryValue3 = parameter0;
  temporaryValue1 = temporaryValue3.window;
  localState1 = temporaryValue1;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.rcn;
  localState2 = temporaryValue2;
  temporaryValue2 = parameter0;
  temporaryValue1 = temporaryValue2.jcn;
  localState3 = temporaryValue1;
  temporaryValue2 = localState3;
  temporaryValue4 = undefined;
  temporaryValue3 = temporaryValue2 === temporaryValue4;
  if (temporaryValue3) {
    temporaryValue4 = "";
  } else {
    temporaryValue1 = localState3;
    temporaryValue4 = temporaryValue1;
  }
  localState4 = temporaryValue4;
  temporaryValue1 = parameter0;
  temporaryValue3 = temporaryValue1.nhd;
  localState5 = temporaryValue3;
  temporaryValue1 = localState1;
  temporaryValue4 = temporaryValue1.localStorage;
  temporaryValue1 = temporaryValue4.getItem;
  temporaryValue7 = new Array(1);
  temporaryValue6 = "".concat;
  temporaryValue8 = [localState2];
  temporaryValue5 = Reflect.apply(temporaryValue6, "", temporaryValue8);
  temporaryValue6 = temporaryValue5.concat;
  temporaryValue10 = [localState4];
  temporaryValue2 = Reflect.apply(temporaryValue6, temporaryValue5, temporaryValue10);
  temporaryValue7[0] = temporaryValue2;
  temporaryValue3 = Reflect.apply(temporaryValue1, temporaryValue4, temporaryValue7);
  localState6 = temporaryValue3;
  try {
    temporaryValue2 = localState6;
    if (temporaryValue2) {
      temporaryValue4 = JSON;
      temporaryValue5 = temporaryValue4.parse;
      temporaryValue3 = new Array(1);
      temporaryValue7 = xorStringWithRepeatingKey;
      temporaryValue8 = localState6;
      temporaryValue10 = localState5;
      temporaryValue6 = temporaryValue7(temporaryValue8, temporaryValue10);
      temporaryValue3[0] = temporaryValue6;
      temporaryValue2 = Reflect.apply(temporaryValue5, temporaryValue4, temporaryValue3);
      temporaryValue1 = temporaryValue2;
    } else {
      temporaryValue2 = undefined;
      temporaryValue1 = temporaryValue2;
    }
    return temporaryValue1;
  } catch (error) {
    localState7 = error;
    temporaryValue5 = undefined;
    return temporaryValue5;
  }
  return undefined;
}

function storageOperationStep1(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11, temporaryValue12, temporaryValue13;
  let localState1, localState2, localState3, getSdkRuntimeConfiguration, writeStorageEntry, timingSchema;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue1 = getSdkRuntimeConfiguration;
  temporaryValue3 = temporaryValue1();
  localState2 = temporaryValue3;
  temporaryValue2 = localState2;
  temporaryValue1 = temporaryValue2.xjc;
  localState3 = temporaryValue1;
  temporaryValue1 = parameter1;
  if (temporaryValue1) {
    temporaryValue3 = parameter2;
    temporaryValue1 = temporaryValue3;
  }
  if (temporaryValue1) {
    temporaryValue2 = parameter0;
    temporaryValue3 = temporaryValue2.localStorage;
    temporaryValue1 = temporaryValue3;
  }
  if (temporaryValue1) {
    temporaryValue3 = writeStorageEntry;
    temporaryValue7 = objectSpread2;
    temporaryValue8 = localState3;
    temporaryValue11 = temporaryValue8.uqa;
    temporaryValue5 = temporaryValue7({  }, temporaryValue11);
    temporaryValue8 = parameter0;
    temporaryValue9 = {  };
    temporaryValue9.window = temporaryValue8;
    temporaryValue11 = Date;
    temporaryValue12 = temporaryValue11.now;
    temporaryValue10 = Reflect.apply(temporaryValue12, temporaryValue11, []);
    temporaryValue11 = localState3;
    temporaryValue12 = temporaryValue11.zgq;
    temporaryValue13 = temporaryValue12 * 1000;
    temporaryValue11 = temporaryValue10 + temporaryValue13;
    temporaryValue8 = [undefined, undefined, undefined, undefined];
    temporaryValue8[0] = temporaryValue11;
    temporaryValue10 = parameter1;
    temporaryValue8[1] = temporaryValue10;
    temporaryValue10 = parameter2;
    temporaryValue13 = temporaryValue10.qaw;
    temporaryValue8[2] = temporaryValue13;
    temporaryValue10 = parameter2;
    temporaryValue11 = temporaryValue10.vfp;
    temporaryValue8[3] = temporaryValue11;
    temporaryValue9.nwq = temporaryValue8;
    temporaryValue8 = timingSchema;
    temporaryValue9.jcn = temporaryValue8;
    temporaryValue4 = objectSpread2(temporaryValue5, {  }, temporaryValue9);
    temporaryValue2 = temporaryValue3(temporaryValue4);
    temporaryValue1 = temporaryValue2;
  }
  return temporaryValue1;
}

function storageOperationStep2(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11, temporaryValue12;
  let localState1, localState2, localState3, getSdkRuntimeConfiguration, validateTimingTuple, readLocalStorageState, timingSchema;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue2 = getSdkRuntimeConfiguration;
  temporaryValue1 = temporaryValue2();
  localState2 = temporaryValue1;
  temporaryValue1 = localState2;
  temporaryValue2 = temporaryValue1.xjc;
  localState3 = temporaryValue2;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.localStorage;
  if (temporaryValue2) {
    temporaryValue8 = objectSpread2;
    temporaryValue9 = localState3.uqa;
    temporaryValue10 = temporaryValue8({  }, temporaryValue9);
    temporaryValue11 = parameter0;
    temporaryValue9 = {  };
    temporaryValue9.window = temporaryValue11;
    temporaryValue11 = timingSchema;
    temporaryValue9.jcn = temporaryValue11;
    temporaryValue5 = objectSpread2(temporaryValue10, {  }, temporaryValue9);
    temporaryValue3 = readLocalStorageState(temporaryValue5);
    temporaryValue1 = validateTimingTuple(temporaryValue3);
    temporaryValue2 = temporaryValue1;
  }
  return temporaryValue2;
}

function storageOperationStep3(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10;
  let localState1, localState2, localState3, getSdkRuntimeConfiguration, removeStorageEntry, timingSchema;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue1 = getSdkRuntimeConfiguration;
  temporaryValue3 = temporaryValue1();
  localState2 = temporaryValue3;
  temporaryValue1 = localState2;
  temporaryValue4 = temporaryValue1.xjc;
  localState3 = temporaryValue4;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.localStorage;
  if (temporaryValue2) {
    temporaryValue4 = removeStorageEntry;
    temporaryValue7 = objectSpread2;
    temporaryValue9 = localState3;
    temporaryValue6 = temporaryValue7({  }, temporaryValue9.uqa);
    temporaryValue9 = parameter0;
    temporaryValue8 = {  };
    temporaryValue8.window = temporaryValue9;
    temporaryValue9 = timingSchema;
    temporaryValue8.jcn = temporaryValue9;
    temporaryValue1 = objectSpread2(temporaryValue6, {  }, temporaryValue8);
    temporaryValue3 = temporaryValue4(temporaryValue1);
    temporaryValue2 = temporaryValue3;
  }
  return temporaryValue2;
}

// Performance and timing measurements
function validateTimingTuple(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue8;
  let localState1, localState2, localState3, localState4, localState5, localState6, localState7;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  localState7 = undefined;
  temporaryValue3 = Array;
  temporaryValue2 = temporaryValue3.isArray;
  temporaryValue5 = new Array(1);
  temporaryValue4 = parameter0;
  temporaryValue5[0] = temporaryValue4;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue5);
  temporaryValue2 = !temporaryValue1;
  if (temporaryValue2) {
    temporaryValue2 = {};
    temporaryValue2.ywq = "invalid";
    return temporaryValue2;
  } else {
    temporaryValue1 = parameter0;
    temporaryValue2 = temporaryValue1[0];
    localState1 = temporaryValue2;
    temporaryValue1 = parameter0;
    temporaryValue2 = temporaryValue1[1];
    localState2 = temporaryValue2;
    temporaryValue1 = parameter0;
    temporaryValue4 = temporaryValue1[2];
    localState3 = temporaryValue4;
    temporaryValue2 = parameter0;
    temporaryValue1 = temporaryValue2[3];
    localState4 = temporaryValue1;
    temporaryValue1 = localState4;
    temporaryValue2 = typeof temporaryValue1;
    temporaryValue1 = temporaryValue2 === "object";
    if (temporaryValue1) {
      temporaryValue2 = localState3;
      temporaryValue5 = typeof temporaryValue2;
      temporaryValue2 = temporaryValue5 === "object";
      temporaryValue1 = temporaryValue2;
    }
    if (temporaryValue1) {
      temporaryValue4 = Array;
      temporaryValue5 = temporaryValue4.isArray;
      temporaryValue3 = new Array(1);
      temporaryValue6 = localState3;
      temporaryValue3[0] = temporaryValue6;
      temporaryValue2 = Reflect.apply(temporaryValue5, temporaryValue4, temporaryValue3);
      temporaryValue3 = !temporaryValue2;
      temporaryValue1 = temporaryValue3;
    }
    if (temporaryValue1) {
      temporaryValue3 = Array;
      temporaryValue4 = temporaryValue3.isArray;
      temporaryValue5 = new Array(1);
      temporaryValue6 = localState4;
      temporaryValue5[0] = temporaryValue6;
      temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue5);
      temporaryValue4 = !temporaryValue2;
      temporaryValue1 = temporaryValue4;
    }
    localState5 = temporaryValue1;
    temporaryValue1 = localState2;
    temporaryValue2 = typeof temporaryValue1;
    temporaryValue1 = temporaryValue2 === "string";
    localState6 = temporaryValue1;
    temporaryValue3 = globalThis.Number;
    temporaryValue1 = temporaryValue3.isInteger;
    temporaryValue4 = [localState1];
    temporaryValue2 = Reflect.apply(temporaryValue1, temporaryValue3, temporaryValue4);
    localState7 = temporaryValue2;
    temporaryValue2 = localState5;
    temporaryValue3 = !temporaryValue2;
    if (!(temporaryValue3)) {
      temporaryValue1 = localState6;
      temporaryValue5 = !temporaryValue1;
      temporaryValue3 = temporaryValue5;
    }
    if (!(temporaryValue3)) {
      temporaryValue4 = localState7;
      temporaryValue5 = !temporaryValue4;
      temporaryValue3 = temporaryValue5;
    }
    if (temporaryValue3) {
      temporaryValue1 = {};
      temporaryValue1.ywq = "invalid";
      return temporaryValue1;
    } else {
      temporaryValue1 = {};
      temporaryValue2 = localState1;
      temporaryValue3 = Date;
      temporaryValue6 = temporaryValue3.now;
      temporaryValue5 = [];
      temporaryValue4 = Reflect.apply(temporaryValue6, temporaryValue3, temporaryValue5);
      temporaryValue3 = temporaryValue2 > temporaryValue4;
      if (temporaryValue3) {
        temporaryValue2 = "valid";
      } else {
        temporaryValue2 = "expired";
      }
      temporaryValue1.ywq = temporaryValue2;
      temporaryValue2 = {};
      temporaryValue5 = localState4;
      temporaryValue2.vfp = temporaryValue5;
      temporaryValue5 = localState3;
      temporaryValue2.qaw = temporaryValue5;
      temporaryValue1.nwq = temporaryValue2;
      temporaryValue2 = localState2;
      temporaryValue1.ljc = temporaryValue2;
      return temporaryValue1;
    }
  }
}

function measurePerformanceTiming(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue8;
  let localState1, localState2, localState3, localState4, localState5, localState6, localState7, generateRandomHexId, solveHashThresholdChallenge;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  localState7 = undefined;
  temporaryValue2 = Date;
  temporaryValue3 = temporaryValue2.now;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, []);
  localState1 = temporaryValue1;
  temporaryValue4 = globalThis.performance;
  temporaryValue3 = temporaryValue4.now;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue4, []);
  localState2 = temporaryValue2;
  temporaryValue1 = localState1;
  temporaryValue3 = parameter1;
  temporaryValue2 = temporaryValue1 - temporaryValue3;
  localState3 = temporaryValue2;
  temporaryValue1 = generateRandomHexId;
  temporaryValue2 = temporaryValue1();
  localState4 = temporaryValue2;
  temporaryValue3 = solveHashThresholdChallenge;
  temporaryValue2 = parameter0;
  temporaryValue5 = localState3;
  temporaryValue4 = localState4;
  temporaryValue1 = temporaryValue3(temporaryValue2, temporaryValue5, temporaryValue4);
  localState5 = temporaryValue1;
  temporaryValue1 = globalThis.performance;
  temporaryValue4 = temporaryValue1.now;
  temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue1, []);
  localState6 = temporaryValue2;
  temporaryValue3 = Math;
  temporaryValue5 = temporaryValue3.round;
  temporaryValue6 = localState6;
  temporaryValue4 = localState2;
  temporaryValue4 = (temporaryValue6 - temporaryValue4) * 1000;
  temporaryValue2 = [undefined];
  temporaryValue2[0] = temporaryValue4;
  temporaryValue1 = Reflect.apply(temporaryValue5, temporaryValue3, temporaryValue2);
  temporaryValue2 = temporaryValue1 / 1000;
  localState7 = temporaryValue2;
  temporaryValue2 = localState3;
  temporaryValue1 = {  };
  temporaryValue1.workTime = temporaryValue2;
  temporaryValue3 = localState4;
  temporaryValue1.id = temporaryValue3;
  temporaryValue3 = localState5;
  temporaryValue2 = temporaryValue3.rvf;
  temporaryValue1.answers = temporaryValue2;
  temporaryValue2 = localState7;
  temporaryValue1.duration = temporaryValue2;
  temporaryValue2 = parameter1;
  temporaryValue1.d = temporaryValue2;
  temporaryValue1.st = 0;
  temporaryValue1.rst = 0;
  return temporaryValue1;
}

// Error normalization and reporting
function wrapRemoteContextError(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue9;
  let localState1, localState2, normalizeErrorValue;

  localState1 = undefined;
  localState2 = undefined;
  temporaryValue4 = normalizeErrorValue;
  temporaryValue2 = parameter0;
  temporaryValue1 = temporaryValue4(temporaryValue2);
  localState1 = temporaryValue1;
  temporaryValue2 = "RC: ".concat(localState1.message);
  temporaryValue1 = [undefined];
  temporaryValue1[0] = temporaryValue2;
  temporaryValue3 = Reflect.construct(Error, temporaryValue1);
  localState2 = temporaryValue3;
  temporaryValue2 = localState2;
  temporaryValue1 = localState1;
  temporaryValue4 = temporaryValue1.name;
  temporaryValue2.name = temporaryValue4;
  temporaryValue1 = localState2;
  temporaryValue3 = localState1;
  temporaryValue2 = temporaryValue3.stack;
  temporaryValue1.stack = temporaryValue2;
  temporaryValue2 = localState2;
  return temporaryValue2;
}

function invokeWithSdkErrorReporting() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue7;
  let localState1, localState2, localState3, localState4, localState5, invokeWithSdkErrorReportingDependencyVariant1, localState6, normalizeError, invokeWithSdkErrorReportingDependencyVariant2, invokeWithSdkErrorReportingDependencyVariant3;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  try {
    temporaryValue2 = arguments.length;
    localState2 = temporaryValue2;
    temporaryValue1 = Array;
    temporaryValue4 = new Array(1);
    temporaryValue5 = localState2;
    temporaryValue4[0] = temporaryValue5;
    temporaryValue2 = Reflect.construct(temporaryValue1, temporaryValue4);
    localState3 = temporaryValue2;
    localState4 = 0;
    temporaryValue1 = localState4;
    temporaryValue2 = localState2;
    temporaryValue3 = temporaryValue1 < temporaryValue2;
    while (temporaryValue3) {
      temporaryValue2 = localState3;
      temporaryValue1 = localState4;
      temporaryValue4 = localState4;
      temporaryValue3 = arguments[temporaryValue4];
      temporaryValue2[temporaryValue1] = temporaryValue3;
      temporaryValue1 = localState4;
      temporaryValue3 = temporaryValue1;
      temporaryValue1 = temporaryValue1 + 1;
      localState4 = temporaryValue1;
      continue;
    }
    temporaryValue3 = invokeWithSdkErrorReportingDependencyVariant1;
    temporaryValue2 = temporaryValue3.apply;
    temporaryValue4 = new Array(2);
    temporaryValue5 = this;
    temporaryValue4[0] = temporaryValue5;
    temporaryValue5 = localState3;
    temporaryValue4[1] = temporaryValue5;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
    return temporaryValue1;
  } catch (error) {
    localState6 = error;
    temporaryValue2 = normalizeError;
    temporaryValue3 = localState6;
    temporaryValue1 = temporaryValue2(temporaryValue3);
    localState5 = temporaryValue1;
    temporaryValue1 = localState5;
    temporaryValue4 = temporaryValue1.kdc;
    temporaryValue1 = !temporaryValue4;
    if (temporaryValue1) {
      temporaryValue1 = invokeWithSdkErrorReportingDependencyVariant2;
      temporaryValue3 = temporaryValue1.xmr;
      temporaryValue5 = localState5;
      temporaryValue4 = invokeWithSdkErrorReportingDependencyVariant3;
      temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, [temporaryValue5, temporaryValue4]);
      temporaryValue1 = undefined;
    }
    temporaryValue1 = localState5;
    temporaryValue1.kdc = true;
    temporaryValue1 = localState5;
    throw temporaryValue1;
  }
  return undefined;
}

function dispatchErrorReportPixel() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue9;
  let errorPixelConstructor, errorReportEndpoint, encodedErrorPayload, onErrorPixelDispatched;

  temporaryValue1 = errorPixelConstructor;
  temporaryValue2 = new temporaryValue1();
  temporaryValue1 = "".concat;
  temporaryValue7 = errorReportEndpoint;
  temporaryValue6 = [undefined, undefined];
  temporaryValue6[0] = temporaryValue7;
  temporaryValue6[1] = "?e=";
  temporaryValue3 = Reflect.apply(temporaryValue1, "", temporaryValue6);
  temporaryValue1 = temporaryValue3.concat;
  temporaryValue7 = encodedErrorPayload;
  temporaryValue6 = globalThis.encodeURIComponent(temporaryValue7);
  temporaryValue4 = [undefined];
  temporaryValue4[0] = temporaryValue6;
  temporaryValue5 = Reflect.apply(temporaryValue1, temporaryValue3, temporaryValue4);
  temporaryValue2.src = temporaryValue5;
  temporaryValue2 = onErrorPixelDispatched;
  temporaryValue1 = temporaryValue2();
  return undefined;
}

function noopErrorReporterHook() {
  let localState1;

  localState1 = currentFunction;
  return undefined;
}

function identityCallback(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2;
  let localState1;

  localState1 = currentFunction;
  return parameter0;
}

function invokeThunk(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue4;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = parameter0();
  return temporaryValue1;
}

function resolvePromiseImmediately() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = Promise;
  temporaryValue1 = temporaryValue2.resolve();
  return temporaryValue1;
}

function createConfiguredDiagnosticError(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, getSdkRuntimeConfiguration, SdkDiagnosticErrorClass, unknownDiagnosticError;

  localState1 = currentFunction;
  temporaryValue2 = getSdkRuntimeConfiguration;
  temporaryValue1 = temporaryValue2();
  temporaryValue2 = temporaryValue1.jdc;
  if (temporaryValue2) {
    temporaryValue2 = SdkDiagnosticErrorClass;
    temporaryValue5 = new temporaryValue2(parameter0);
    temporaryValue1 = temporaryValue5;
  } else {
    temporaryValue2 = unknownDiagnosticError;
    temporaryValue1 = temporaryValue2;
  }
  return temporaryValue1;
}

function initializeSharedDiagnosticState() {
  let temporaryValue1, temporaryValue2, temporaryValue3;
  let localState1, localState2;

  localState1 = currentFunction;
  temporaryValue2 = undefined;
  temporaryValue1 = {  };
  temporaryValue1.ljc = temporaryValue2;
  temporaryValue1.nwq = { ejc: {  }, jqa: 40 };
  localState2 = temporaryValue1;
  return undefined;
}

function replaceSharedDiagnosticState(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4;
  let localState1, localState2;

  localState1 = currentFunction;
  localState2 = { ljc: parameter0, nwq: parameter1 };
  return undefined;
}

function getSharedDiagnosticState() {
  let temporaryValue1;
  let localState1, sharedRuntimeState;

  localState1 = currentFunction;
  return sharedRuntimeState;
}

function initializeSdkDiagnosticError(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, initializeSdkDiagnosticError;

  localState1 = undefined;
  temporaryValue1 = classCallCheck;
  temporaryValue4 = this;
  temporaryValue3 = initializeSdkDiagnosticError;
  temporaryValue2 = temporaryValue1(temporaryValue4, temporaryValue3);
  temporaryValue1 = callSuper;
  temporaryValue4 = this;
  temporaryValue3 = initializeSdkDiagnosticError;
  temporaryValue2 = temporaryValue1(temporaryValue4, temporaryValue3, [parameter0]);
  localState1 = temporaryValue2;
  temporaryValue1 = localState1;
  temporaryValue2 = parameter1;
  temporaryValue1.metadata = temporaryValue2;
  temporaryValue2 = localState1;
  temporaryValue1 = parameter2;
  temporaryValue2.timings = temporaryValue1;
  temporaryValue1 = localState1;
  temporaryValue2 = undefined;
  temporaryValue1.stack = temporaryValue2;
  temporaryValue1 = localState1;
  return temporaryValue1;
}

function getIteratorSymbolTag() {
  return "Symbol(Symbol.iterator)";
}

function invokeGuardedCallback(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4;
  let capturedCallback, invokeGuardedCallbackDependencyVariant1, invokeGuardedCallbackDependencyVariant2, invokeGuardedCallbackDependencyVariant3, localState1;

  temporaryValue2 = capturedCallback;
  temporaryValue4 = parameter0;
  temporaryValue3 = invokeGuardedCallbackDependencyVariant1;
  temporaryValue1 = temporaryValue2(temporaryValue4, temporaryValue3);
  try {
    temporaryValue2 = invokeGuardedCallbackDependencyVariant2;
    temporaryValue3 = invokeGuardedCallbackDependencyVariant3;
    temporaryValue1 = temporaryValue2(temporaryValue3);
    return temporaryValue1;
  } catch (error) {
    localState1 = error;
  }
  return undefined;
}

function reportUnhandledSdkError(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let guardedTaskLogger;

  temporaryValue3 = guardedTaskLogger;
  temporaryValue1 = temporaryValue3.xmr;
  temporaryValue6 = parameter0;
  temporaryValue4 = [undefined, undefined];
  temporaryValue4[0] = temporaryValue6;
  temporaryValue4[1] = 211;
  temporaryValue2 = Reflect.apply(temporaryValue1, temporaryValue3, temporaryValue4);
  temporaryValue3 = undefined;
  temporaryValue2 = globalThis.console;
  temporaryValue3 = temporaryValue2.error;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, ["KPSDK Error: ", parameter0]);
  return undefined;
}

function createGuardedSdkTask(parameter0, parameter1, parameter2, parameter3, parameter4, parameter5) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue5 = parameter4;
  let temporaryValue6 = parameter5;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = function (parameter0) { return runGuardedSdkTask.apply(this, arguments); };
  return temporaryValue1;
}

function runSdkInitializersSafely(parameter0, parameter1, parameter2, parameter3, parameter4, parameter5, errorReporter, argument8) {
  const initializers = [invokeFetchInterceptorFactory, invokeXhrInterceptorFactory, invokeOptionalInterceptorFactory];
  for (const initialize of initializers) {
    try {
      initialize();
    } catch (error) {
      const normalizedError = normalizeError(error);
      console.error(
        "SDK error",
        `\n  name: ${normalizedError.name}`,
        `\n  message: ${normalizedError.message}`,
        `\n  stack: ${normalizedError.stack}`,
      );
      errorReporter.xmr(normalizedError, 201);
    }
  }
}

// Cross-window and iframe coordination
function computeFrameVisibilityMask(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4;
  let remoteFrameDefinitionMap, visibilityApi;

  temporaryValue1 = remoteFrameDefinitionMap;
  temporaryValue3 = temporaryValue1.zjc;
  temporaryValue1 = parameter0;
  temporaryValue1 = temporaryValue3[temporaryValue1].vxd;
  temporaryValue2 = visibilityApi;
  temporaryValue3 = temporaryValue2.nxd;
  temporaryValue2 = temporaryValue1 & temporaryValue3;
  return temporaryValue2;
}

function copyIndexedFrameMetadata(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue5, temporaryValue6;
  let remoteFrameMetadataTable;

  temporaryValue1 = parameter0;
  temporaryValue2 = parameter1;
  temporaryValue3 = remoteFrameMetadataTable[parameter2];
  temporaryValue1[temporaryValue2] = temporaryValue3;
  temporaryValue1 = parameter0;
  return temporaryValue1;
}

function invokeRemoteContextAsync(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue7;
  let remoteContextAsync;

  temporaryValue3 = remoteContextAsync;
  temporaryValue2 = temporaryValue3.apply(this, arguments);
  return temporaryValue2;
}

function remoteContextGenerator(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, localState2, localState3, localState4;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue2 = regeneratorRuntime;
  temporaryValue4 = temporaryValue2.wrap;
  temporaryValue3 = new Array(3);
  temporaryValue5 = function (parameter0) { return getOrCreateRemoteContext.apply(this, arguments); };
  temporaryValue3[0] = temporaryValue5;
  temporaryValue5 = localState1;
  temporaryValue3[1] = temporaryValue5;
  temporaryValue5 = this;
  temporaryValue3[2] = temporaryValue5;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue3);
  return temporaryValue1;
}

function markRemoteFrameState(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue7;
  let remoteFrameState, visibilityApi, remoteFrameManager, remoteFrameIdentifier;

  temporaryValue2 = parameter0;
  if (!(temporaryValue2)) {
    temporaryValue1 = remoteFrameState;
    temporaryValue3 = temporaryValue1.vxd;
    temporaryValue1 = visibilityApi;
    temporaryValue4 = temporaryValue1.rfp;
    temporaryValue5 = temporaryValue3 & temporaryValue4;
    temporaryValue2 = temporaryValue5;
  }
  if (temporaryValue2) {
    return undefined;
  } else {
    temporaryValue2 = remoteFrameState;
    temporaryValue3 = temporaryValue2.vxd;
    temporaryValue1 = visibilityApi.rfp;
    temporaryValue1 = temporaryValue3 | temporaryValue1;
    temporaryValue2.vxd = temporaryValue1;
    temporaryValue1 = remoteFrameManager;
    temporaryValue4 = temporaryValue1.zxd;
    temporaryValue3 = new Array(1);
    temporaryValue5 = remoteFrameIdentifier;
    temporaryValue3[0] = temporaryValue5;
    temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue1, temporaryValue3);
    return undefined;
  }
}

function buildRemoteFrameTimingMetadata() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let performanceTimeline, performanceMarkName, remoteFrameDescriptor;

  temporaryValue2 = performanceTimeline;
  temporaryValue4 = temporaryValue2.uhd;
  temporaryValue3 = temporaryValue4.vmr;
  temporaryValue5 = Reflect.apply(temporaryValue3, temporaryValue4, [performanceMarkName]);
  temporaryValue3 = remoteFrameDescriptor;
  temporaryValue2 = temporaryValue3.qeu;
  temporaryValue1 = { lbk: temporaryValue5 };
  temporaryValue1.qeu = temporaryValue2;
  return temporaryValue1;
}

// Runtime context registry and publication
function mapObjectValues(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = Object;
  temporaryValue4 = temporaryValue2.keys;
  temporaryValue6 = parameter0;
  temporaryValue5 = [undefined];
  temporaryValue5[0] = temporaryValue6;
  temporaryValue3 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue5);
  temporaryValue2 = temporaryValue3.reduce;
  temporaryValue6 = new Array(2);
  temporaryValue7 = function (parameter0, nestedParameter1) { return mapObjectValue.apply(this, arguments); };
  temporaryValue6[0] = temporaryValue7;
  temporaryValue4 = {};
  temporaryValue6[1] = temporaryValue4;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue6);
  return temporaryValue1;
}

function mapObjectValue(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let mapObjectValueCallback, sourceObject;

  temporaryValue1 = parameter0;
  temporaryValue2 = parameter1;
  temporaryValue3 = mapObjectValueCallback(sourceObject[parameter1]);
  temporaryValue1[temporaryValue2] = temporaryValue3;
  temporaryValue2 = parameter0;
  return temporaryValue2;
}

function mapObjectValuesVariant(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1;

  localState1 = currentFunction;
  temporaryValue3 = Object;
  temporaryValue4 = temporaryValue3.keys;
  temporaryValue5 = [parameter0];
  temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue5);
  temporaryValue3 = temporaryValue2.reduce;
  temporaryValue5 = new Array(2);
  temporaryValue4 = function (parameter0, nestedParameter1) { return mapObjectValueVariant.apply(this, arguments); };
  temporaryValue5[0] = temporaryValue4;
  temporaryValue4 = {};
  temporaryValue5[1] = temporaryValue4;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue5);
  return temporaryValue1;
}

function mapObjectValueVariant(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let mapObjectValueVariantCallback, sourceObjectVariant;

  temporaryValue2 = parameter0;
  temporaryValue4 = sourceObjectVariant;
  temporaryValue1 = mapObjectValueVariantCallback(temporaryValue4[parameter1]);
  temporaryValue2[parameter1] = temporaryValue1;
  temporaryValue4 = parameter0;
  return temporaryValue4;
}

function isDefined(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue4;

  temporaryValue1 = undefined;
  return parameter0 !== temporaryValue1;
}

function persistRuntimeContext(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8;
  let localState1, writeStorageEntry, persistRuntimeContextCallback;

  localState1 = currentFunction;
  temporaryValue1 = writeStorageEntry;
  temporaryValue3 = parameter0;
  temporaryValue7 = {  };
  temporaryValue7.window = temporaryValue3;
  temporaryValue3 = persistRuntimeContextCallback(parameter1);
  temporaryValue7.nwq = temporaryValue3;
  temporaryValue3 = parameter2;
  temporaryValue7.nhd = temporaryValue3.nhd;
  temporaryValue3 = parameter2.rcn;
  temporaryValue7.rcn = temporaryValue3;
  temporaryValue2 = temporaryValue1(temporaryValue7);
  return undefined;
}

function hasRuntimeContext(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3;
  let runtimeContextRegistry;

  temporaryValue1 = runtimeContextRegistry;
  temporaryValue2 = temporaryValue1.zwc;
  temporaryValue3 = parameter0;
  temporaryValue1 = temporaryValue2[temporaryValue3];
  temporaryValue2 = undefined;
  temporaryValue3 = temporaryValue1 !== temporaryValue2;
  return temporaryValue3;
}

function isNotRegistrySentinel(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4;
  let runtimeContextSentinel;

  return parameter0 !== runtimeContextSentinel;
}

function clearRuntimeContextSystemTimes(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10;
  let runtimeContextRegistry;

  temporaryValue1 = runtimeContextRegistry;
  temporaryValue2 = temporaryValue1.zwc;
  temporaryValue1 = parameter0;
  temporaryValue3 = temporaryValue2[temporaryValue1];
  if (temporaryValue3) {
    temporaryValue1 = runtimeContextRegistry;
    temporaryValue3 = temporaryValue1.zwc;
    temporaryValue1 = parameter0;
    temporaryValue2 = objectSpread2;
    temporaryValue7 = objectSpread2;
    temporaryValue6 = runtimeContextRegistry;
    temporaryValue9 = temporaryValue6.zwc;
    temporaryValue6 = temporaryValue9[parameter0];
    temporaryValue5 = temporaryValue7({  }, temporaryValue6);
    temporaryValue7 = undefined;
    temporaryValue9 = {  };
    temporaryValue9.systemTimes = temporaryValue7;
    temporaryValue4 = temporaryValue2(temporaryValue5, {  }, temporaryValue9);
    temporaryValue3[temporaryValue1] = temporaryValue4;
  }
  return undefined;
}

// Classes/Bufferedlifecyclelogger
function scheduleFlush(request) {
  const state = this.vwq;
  if (state == logBufferStateEnum.zsj) {
    this.ujc(request);
  } else if (state == logBufferStateEnum.efp) {
    this.ztc(request);
  } else if (state != logBufferStateEnum.kbk) {
    throw new Error(`Received a log request in unexpected state ${state}`);
  }
}

function scheduleFlush2(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue11;
  let localState1, logBufferStateEnum;

  localState1 = currentFunction;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.ztc;
  temporaryValue4 = new Array(1);
  temporaryValue5 = parameter0;
  temporaryValue4[0] = temporaryValue5;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
  temporaryValue2 = this;
  temporaryValue4 = temporaryValue2.ykj;
  temporaryValue2 = temporaryValue4.length;
  temporaryValue1 = temporaryValue2 === 1;
  if (temporaryValue1) {
    temporaryValue1 = this;
    temporaryValue4 = logBufferStateEnum;
    temporaryValue2 = temporaryValue4.efp;
    temporaryValue1.vwq = temporaryValue2;
    temporaryValue3 = this;
    temporaryValue1 = globalThis.window;
    temporaryValue4 = temporaryValue1.setTimeout;
    temporaryValue8 = this;
    temporaryValue7 = temporaryValue8.eoy;
    temporaryValue8 = temporaryValue7.bind;
    temporaryValue5 = Reflect.apply(temporaryValue8, temporaryValue7, [this]);
    temporaryValue6 = [undefined, undefined];
    temporaryValue6[0] = temporaryValue5;
    temporaryValue7 = this;
    temporaryValue5 = temporaryValue7.rbk;
    temporaryValue6[1] = temporaryValue5;
    temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue1, temporaryValue6);
    temporaryValue3.qgq = temporaryValue2;
  }
  return undefined;
}

function flush() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, localState2, localState3, logBufferStateEnum;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue2 = arguments.length;
  temporaryValue1 = temporaryValue2 > 0;
  if (temporaryValue1) {
    temporaryValue6 = arguments[0];
    temporaryValue2 = globalThis.undefined;
    temporaryValue3 = temporaryValue6 !== temporaryValue2;
    temporaryValue1 = temporaryValue3;
  }
  if (temporaryValue1) {
    temporaryValue1 = arguments[0];
    temporaryValue3 = temporaryValue1;
  } else {
    temporaryValue3 = false;
  }
  localState2 = temporaryValue3;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.vwq;
  temporaryValue1 = logBufferStateEnum;
  temporaryValue3 = temporaryValue1.kbk;
  temporaryValue1 = temporaryValue2 === temporaryValue3;
  localState3 = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue5 = temporaryValue1.ykj;
  temporaryValue1 = temporaryValue5.length;
  temporaryValue5 = temporaryValue1 > 0;
  if (temporaryValue5) {
    temporaryValue3 = this;
    temporaryValue2 = temporaryValue3.nrc;
    temporaryValue6 = new Array(2);
    temporaryValue5 = this;
    temporaryValue4 = temporaryValue5.ykj;
    temporaryValue6[0] = temporaryValue4;
    temporaryValue4 = localState3;
    temporaryValue6[1] = temporaryValue4;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue6);
  }
  temporaryValue1 = this;
  temporaryValue3 = [];
  temporaryValue1.ykj = temporaryValue3;
  temporaryValue1 = localState3;
  temporaryValue4 = !temporaryValue1;
  if (temporaryValue4) {
    temporaryValue1 = this;
    temporaryValue3 = logBufferStateEnum;
    temporaryValue2 = temporaryValue3.zsj;
    temporaryValue1.vwq = temporaryValue2;
  }
  temporaryValue1 = localState2;
  if (temporaryValue1) {
    temporaryValue3 = this;
    temporaryValue4 = temporaryValue3.qgq;
    temporaryValue1 = temporaryValue4;
  }
  if (temporaryValue1) {
    temporaryValue2 = globalThis.clearTimeout;
    temporaryValue1 = this;
    temporaryValue5 = temporaryValue1.qgq;
    temporaryValue3 = temporaryValue2(temporaryValue5);
  }
  temporaryValue1 = this;
  temporaryValue1.qgq = null;
  return undefined;
}

function normalizeAndBuffer(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue9, temporaryValue10;
  let localState1, localState2, logBufferStateEnum;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue1 = this;
  temporaryValue3 = temporaryValue1.jgq;
  temporaryValue5 = new Array(1);
  temporaryValue4 = parameter0;
  temporaryValue5[0] = temporaryValue4;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue5);
  localState2 = temporaryValue2;
  temporaryValue1 = localState2;
  temporaryValue2 = !temporaryValue1;
  if (temporaryValue2) {
    return undefined;
  } else {
    temporaryValue2 = this;
    temporaryValue3 = temporaryValue2.ykj;
    temporaryValue4 = temporaryValue3.push;
    temporaryValue5 = new Array(1);
    temporaryValue2 = localState2;
    temporaryValue5[0] = temporaryValue2;
    temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue5);
    temporaryValue1 = this;
    temporaryValue2 = temporaryValue1.ykj;
    temporaryValue1 = temporaryValue2.length;
    temporaryValue2 = this;
    temporaryValue3 = temporaryValue2.gvf;
    temporaryValue2 = temporaryValue1 === temporaryValue3;
    if (temporaryValue2) {
      temporaryValue2 = this;
      temporaryValue4 = temporaryValue2.eoy;
      temporaryValue3 = this;
      temporaryValue3 = logBufferStateEnum;
      temporaryValue3 = temporaryValue3.vwq === temporaryValue3.efp;
      temporaryValue6 = [undefined];
      temporaryValue6[0] = temporaryValue3;
      temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue6);
    }
    return undefined;
  }
}

function flushOnPageHide() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4;
  let localState1, logBufferStateEnum;

  localState1 = currentFunction;
  temporaryValue2 = logBufferStateEnum;
  temporaryValue3 = temporaryValue2.kbk;
  this.vwq = temporaryValue3;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.eoy;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, [true]);
  return undefined;
}

// Classes/Deferredreadysignal
function scheduleTimeout(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, localState2;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue1 = this;
  localState2 = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue3 = this;
  temporaryValue4 = temporaryValue3.qlj;
  temporaryValue3 = temporaryValue4.setTimeout;
  temporaryValue6 = new Array(2);
  temporaryValue5 = function () { return handleReadyTimeout.apply(this, arguments); };
  temporaryValue6[0] = temporaryValue5;
  temporaryValue5 = parameter0;
  temporaryValue6[1] = temporaryValue5;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue4, temporaryValue6);
  temporaryValue1.ehd = temporaryValue2;
  return undefined;
}

function resolve(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1;

  localState1 = currentFunction;
  temporaryValue3 = this;
  temporaryValue2 = temporaryValue3.qlj;
  temporaryValue3 = temporaryValue2.clearTimeout;
  temporaryValue6 = this.ehd;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, [temporaryValue6]);
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.xrc;
  temporaryValue3 = undefined;
  temporaryValue5 = temporaryValue2 !== temporaryValue3;
  if (temporaryValue5) {
    temporaryValue3 = this;
    temporaryValue2 = temporaryValue3.xrc;
    temporaryValue6 = [parameter0];
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue6);
  }
  temporaryValue1 = this;
  temporaryValue1.ubk = true;
  return undefined;
}

// Classes/Kpsdkclient
function isReady() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue5;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = this;
  temporaryValue5 = temporaryValue1.kdj;
  temporaryValue1 = temporaryValue5.ejh;
  temporaryValue2 = Reflect.apply(temporaryValue1, temporaryValue5, []);
  return temporaryValue2;
}

function configure() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, invokeSdkConfigureTask;

  localState1 = undefined;
  invokeSdkConfigureTask = undefined;
  temporaryValue1 = function (nestedParameter0) { return invokeSdkConfigureTask.apply(this, arguments); };
  invokeSdkConfigureTask = temporaryValue1;
  temporaryValue2 = asyncToGenerator;
  temporaryValue7 = regeneratorRuntime;
  temporaryValue5 = temporaryValue7.mark;
  temporaryValue4 = new Array(1);
  temporaryValue6 = function (nestedParameter0) { return configureSdkGenerator.apply(this, arguments); };
  temporaryValue4[0] = temporaryValue6;
  temporaryValue3 = Reflect.apply(temporaryValue5, temporaryValue7, temporaryValue4);
  temporaryValue1 = temporaryValue2(temporaryValue3);
  localState1 = temporaryValue1;
  temporaryValue1 = invokeSdkConfigureTask;
  return temporaryValue1;
}

function invokeSdkConfigureTask(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let configureSdkAsync;

  temporaryValue3 = configureSdkAsync;
  temporaryValue1 = temporaryValue3.apply(this, arguments);
  return temporaryValue1;
}

function configureSdkGenerator(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, localState2, localState3, localState4, localState5, localState6, localState7, localState8, localState9;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  localState7 = undefined;
  localState8 = undefined;
  localState9 = undefined;
  temporaryValue2 = regeneratorRuntime;
  temporaryValue4 = temporaryValue2.wrap;
  temporaryValue3 = new Array(3);
  temporaryValue5 = function (parameter0) { return configureSdk.apply(this, arguments); };
  temporaryValue3[0] = temporaryValue5;
  temporaryValue5 = localState1;
  temporaryValue3[1] = temporaryValue5;
  temporaryValue3[2] = this;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue3);
  return temporaryValue1;
}

function applyEndpointConfiguration(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11, temporaryValue12;
  let localState1, localState2, selectInternalEndpoint;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue4 = parameter0;
  if (temporaryValue4) {
    temporaryValue1 = this;
    temporaryValue2 = temporaryValue1.kzp;
    temporaryValue1 = !temporaryValue2;
    temporaryValue4 = temporaryValue1;
  }
  if (temporaryValue4) {
    temporaryValue2 = this;
    temporaryValue3 = temporaryValue2.kcn;
    temporaryValue5 = temporaryValue3.zcn;
    temporaryValue2 = new Array(1);
    temporaryValue4 = selectInternalEndpoint;
    temporaryValue7 = this;
    temporaryValue8 = temporaryValue7.qlj;
    temporaryValue7 = this;
    temporaryValue10 = temporaryValue7.zcg;
    temporaryValue6 = temporaryValue4(temporaryValue8, temporaryValue10);
    temporaryValue2[0] = temporaryValue6;
    temporaryValue1 = Reflect.apply(temporaryValue5, temporaryValue3, temporaryValue2);
    temporaryValue2 = this;
    temporaryValue3 = temporaryValue2.kcn;
    temporaryValue2 = temporaryValue3.xmr;
    temporaryValue4 = new Array(1);
    temporaryValue6 = new Array(1);
    temporaryValue8 = "internalEndpointDomain is '".concat;
    temporaryValue5 = [this.kzp, "'"];
    temporaryValue10 = Reflect.apply(temporaryValue8, "internalEndpointDomain is '", temporaryValue5);
    temporaryValue6[0] = temporaryValue10;
    temporaryValue7 = Reflect.construct(Error, temporaryValue6);
    temporaryValue4[0] = temporaryValue7;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
    temporaryValue3 = undefined;
  } else {
    temporaryValue2 = this;
    temporaryValue3 = temporaryValue2.kcn;
    temporaryValue2 = temporaryValue3.zcn;
    temporaryValue6 = new Array(1);
    temporaryValue4 = this;
    temporaryValue5 = temporaryValue4.kzp;
    localState2 = temporaryValue5;
    temporaryValue4 = temporaryValue5 !== null;
    if (temporaryValue4) {
      temporaryValue8 = localState2;
      temporaryValue7 = undefined;
      temporaryValue5 = temporaryValue8 !== temporaryValue7;
      temporaryValue4 = temporaryValue5;
    }
    if (temporaryValue4) {
      temporaryValue7 = localState2;
      temporaryValue5 = temporaryValue7;
    } else {
      temporaryValue4 = this;
      temporaryValue7 = temporaryValue4.rkz;
      temporaryValue5 = temporaryValue7;
    }
    temporaryValue6[0] = temporaryValue5;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue6);
  }
  return undefined;
}

// Classes/Observableclientstate
function getState() {
  let temporaryValue1, temporaryValue2;
  let localState1;

  localState1 = currentFunction;
  return this.vwq;
}

function isOneOf() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue9;
  let localState1, localState2, localState3, localState4;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue1 = arguments.length;
  localState2 = temporaryValue1;
  temporaryValue2 = Array;
  temporaryValue4 = new Array(1);
  temporaryValue3 = localState2;
  temporaryValue4[0] = temporaryValue3;
  temporaryValue1 = Reflect.construct(temporaryValue2, temporaryValue4);
  localState3 = temporaryValue1;
  localState4 = 0;
  temporaryValue1 = localState4;
  temporaryValue2 = localState2;
  temporaryValue3 = temporaryValue1 < temporaryValue2;
  while (temporaryValue3) {
    temporaryValue1 = localState3;
    temporaryValue2 = localState4;
    temporaryValue4 = localState4;
    temporaryValue3 = arguments[temporaryValue4];
    temporaryValue1[temporaryValue2] = temporaryValue3;
    temporaryValue1 = localState4;
    temporaryValue5 = temporaryValue1;
    temporaryValue1 = temporaryValue1 + 1;
    localState4 = temporaryValue1;
    continue;
  }
  temporaryValue3 = localState3;
  temporaryValue2 = temporaryValue3.includes;
  temporaryValue4 = [this.vwq];
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
  return temporaryValue1;
}

function waitFor(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4;
  let localState1, localState2;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue1 = this;
  localState2 = temporaryValue1;
  temporaryValue2 = this;
  temporaryValue1 = temporaryValue2.vwq;
  temporaryValue2 = parameter0;
  temporaryValue3 = temporaryValue1 === temporaryValue2;
  if (temporaryValue3) {
    temporaryValue1 = Promise;
    temporaryValue3 = temporaryValue1.resolve;
    temporaryValue4 = [];
    temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue4);
    return temporaryValue2;
  } else {
    temporaryValue2 = Promise;
    temporaryValue3 = new Array(1);
    temporaryValue4 = function (parameter0) { return enqueueClientStateWaiter.apply(this, arguments); };
    temporaryValue3[0] = temporaryValue4;
    temporaryValue1 = Reflect.construct(temporaryValue2, temporaryValue3);
    return temporaryValue1;
  }
}

function enqueueClientStateWaiter(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue6;
  let observableClientState, clientStateKey;

  temporaryValue2 = observableClientState;
  temporaryValue1 = temporaryValue2.ywc;
  temporaryValue3 = clientStateKey;
  temporaryValue2 = temporaryValue1[temporaryValue3];
  temporaryValue1 = !temporaryValue2;
  if (temporaryValue1) {
    temporaryValue1 = observableClientState;
    temporaryValue2 = temporaryValue1.ywc;
    temporaryValue1 = clientStateKey;
    temporaryValue3 = [];
    temporaryValue2[temporaryValue1] = temporaryValue3;
  }
  temporaryValue1 = observableClientState;
  temporaryValue3 = temporaryValue1.ywc;
  temporaryValue4 = clientStateKey;
  temporaryValue1 = temporaryValue3[temporaryValue4];
  temporaryValue3 = temporaryValue1.push;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, [parameter0]);
  return undefined;
}

function transition(nextState) {
  const allowed = this.qaf[this.vwq];
  if (!allowed.includes(nextState)) {
    this.nhj.ukj({
      logCode: logCodeEnum.InvalidStateTransition,
      metadata: [this.vwq, nextState],
    });
    return;
  }

  this.vwq = nextState;
  const queuedCallbacks = this.ywc[nextState];
  if (queuedCallbacks) {
    delete this.ywc[nextState];
    queuedCallbacks.forEach((callback) => invokeQueuedStateCallback(callback));
  }

  if (nextState === clientStateEnum.zvj && !this.vfm) {
    this.eqh(capturedStatePendingReady_279.Pending);
  } else if (nextState === clientStateEnum.kjh && !this.vfm) {
    this.eqh(capturedStatePendingReady_279.Ready);
    this.vfm = true;
  }
}

function invokeQueuedStateCallback(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2;

  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1();
  return temporaryValue2;
}

function dispatchEvent(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue9;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.qlj;
  temporaryValue4 = temporaryValue3.document;
  temporaryValue2 = temporaryValue4.dispatchEvent;
  temporaryValue6 = this;
  temporaryValue6 = parameter0;
  temporaryValue7 = createClientStateEvent(temporaryValue6.qlj, temporaryValue6);
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, [temporaryValue7]);
  return undefined;
}

// Classes/Performancetimeline
function start(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = parameter1;
  temporaryValue2 = undefined;
  temporaryValue3 = temporaryValue1 === temporaryValue2;
  if (temporaryValue3) {
    return undefined;
  } else {
    temporaryValue1 = this;
    temporaryValue2 = temporaryValue1.gcn;
    temporaryValue1 = parameter0;
    temporaryValue3 = {};
    temporaryValue4 = parameter1;
    temporaryValue3.ewq = temporaryValue4;
    temporaryValue6 = parameter1;
    temporaryValue8 = temporaryValue6[0];
    temporaryValue5 = {  };
    temporaryValue5.kkj = temporaryValue8;
    temporaryValue7 = globalThis.performance;
    temporaryValue8 = temporaryValue7.now;
    temporaryValue6 = Reflect.apply(temporaryValue8, temporaryValue7, []);
    temporaryValue5.jkj = temporaryValue6;
    temporaryValue3.lbk = [temporaryValue5];
    temporaryValue2[temporaryValue1] = temporaryValue3;
    return undefined;
  }
}

function record(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, localState3, localState4, localState5, localState6, localState7, localState8;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  localState7 = undefined;
  localState8 = undefined;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.gcn;
  temporaryValue4 = parameter0;
  temporaryValue1 = temporaryValue2[temporaryValue4];
  localState3 = temporaryValue1;
  temporaryValue1 = parameter1;
  temporaryValue3 = undefined;
  temporaryValue2 = temporaryValue1 === temporaryValue3;
  if (!(temporaryValue2)) {
    temporaryValue1 = localState3;
    temporaryValue3 = undefined;
    temporaryValue4 = temporaryValue1 === temporaryValue3;
    temporaryValue2 = temporaryValue4;
  }
  if (temporaryValue2) {
    return undefined;
  } else {
    temporaryValue2 = localState3;
    temporaryValue3 = temporaryValue2.ewq;
    temporaryValue2 = temporaryValue3.indexOf;
    temporaryValue4 = new Array(1);
    temporaryValue5 = parameter1;
    temporaryValue4[0] = temporaryValue5;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
    localState4 = temporaryValue1;
    temporaryValue2 = localState3;
    temporaryValue1 = temporaryValue2.lbk;
    temporaryValue5 = localState4;
    temporaryValue2 = temporaryValue1[temporaryValue5];
    localState2 = temporaryValue2;
    temporaryValue1 = temporaryValue2 !== null;
    if (temporaryValue1) {
      temporaryValue2 = localState2;
      temporaryValue3 = undefined;
      temporaryValue7 = temporaryValue2 !== temporaryValue3;
      temporaryValue1 = temporaryValue7;
    }
    if (temporaryValue1) {
      temporaryValue1 = localState2;
      temporaryValue3 = temporaryValue1;
    } else {
      temporaryValue1 = {};
      temporaryValue3 = temporaryValue1;
    }
    localState5 = temporaryValue3;
    temporaryValue1 = localState5;
    temporaryValue3 = temporaryValue1.jkj;
    localState6 = temporaryValue3;
    temporaryValue1 = localState6;
    temporaryValue2 = undefined;
    temporaryValue4 = temporaryValue1 === temporaryValue2;
    if (temporaryValue4) {
      return undefined;
    } else {
      temporaryValue2 = localState3;
      temporaryValue1 = temporaryValue2.lbk;
      temporaryValue2 = localState4;
      temporaryValue3 = {};
      temporaryValue4 = parameter1;
      temporaryValue3.kkj = temporaryValue4;
      temporaryValue5 = localState6;
      temporaryValue3.jkj = temporaryValue5;
      temporaryValue6 = globalThis.performance;
      temporaryValue5 = temporaryValue6.now;
      temporaryValue7 = [];
      temporaryValue4 = Reflect.apply(temporaryValue5, temporaryValue6, temporaryValue7);
      temporaryValue3.ygq = temporaryValue4;
      temporaryValue1[temporaryValue2] = temporaryValue3;
      temporaryValue4 = localState4;
      temporaryValue1 = temporaryValue4 + 1;
      localState7 = temporaryValue1;
      temporaryValue2 = localState3;
      temporaryValue1 = temporaryValue2.ewq;
      temporaryValue2 = localState7;
      temporaryValue3 = temporaryValue1[temporaryValue2];
      localState8 = temporaryValue3;
      temporaryValue1 = localState8;
      temporaryValue2 = undefined;
      temporaryValue3 = temporaryValue1 === temporaryValue2;
      if (temporaryValue3) {
        return undefined;
      } else {
        temporaryValue3 = localState3;
        temporaryValue1 = temporaryValue3.lbk;
        temporaryValue2 = localState7;
        temporaryValue3 = {};
        temporaryValue4 = localState8;
        temporaryValue3.kkj = temporaryValue4;
        temporaryValue5 = globalThis.performance;
        temporaryValue6 = temporaryValue5.now;
        temporaryValue7 = [];
        temporaryValue4 = Reflect.apply(temporaryValue6, temporaryValue5, temporaryValue7);
        temporaryValue3.jkj = temporaryValue4;
        temporaryValue1[temporaryValue2] = temporaryValue3;
        return undefined;
      }
    }
  }
}

function getEntries(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, localState2;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.gcn;
  temporaryValue4 = parameter0;
  temporaryValue1 = temporaryValue3[temporaryValue4];
  localState2 = temporaryValue1;
  temporaryValue1 = localState2;
  temporaryValue3 = undefined;
  temporaryValue2 = temporaryValue1 === temporaryValue3;
  if (temporaryValue2) {
    temporaryValue1 = undefined;
    return temporaryValue1;
  } else {
    temporaryValue2 = localState2;
    temporaryValue3 = temporaryValue2.lbk;
    temporaryValue2 = temporaryValue3.map;
    temporaryValue4 = new Array(1);
    temporaryValue5 = function (parameter0) { return formatPerformanceMeasurement.apply(this, arguments); };
    temporaryValue4[0] = temporaryValue5;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
    return temporaryValue1;
  }
}

// Classes/Remoteframecontextmanager
function initialize2() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9;
  let localState1, localState2, localState3;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue1 = this;
  localState2 = temporaryValue1;
  temporaryValue3 = this;
  temporaryValue2 = temporaryValue3.kcn;
  temporaryValue3 = temporaryValue2.ekj;
  temporaryValue4 = new Array(2);
  temporaryValue6 = this;
  temporaryValue8 = temporaryValue6.kxd;
  temporaryValue6 = temporaryValue8.bind;
  temporaryValue5 = Reflect.apply(temporaryValue6, temporaryValue8, [this]);
  temporaryValue4[0] = temporaryValue5;
  temporaryValue4[1] = 202;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
  localState3 = temporaryValue1;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.kcn;
  temporaryValue2 = temporaryValue3.gkj;
  temporaryValue4 = new Array(2);
  temporaryValue5 = function () { return finalizeRemoteFrameInitialization.apply(this, arguments); };
  temporaryValue4[0] = temporaryValue5;
  temporaryValue4[1] = 201;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
  return undefined;
}

function markReady() {
  let temporaryValue1;
  let localState1;

  localState1 = currentFunction;
  this.ebk = true;
  return undefined;
}

function configureFrames(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue8, temporaryValue9;
  let localState1, localState2, localState3, localState4, localState5, localState6, localState7;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  localState7 = undefined;
  temporaryValue2 = this;
  localState2 = temporaryValue2;
  temporaryValue1 = this;
  temporaryValue3 = this;
  temporaryValue4 = temporaryValue3.jbk;
  temporaryValue5 = new Array(2);
  temporaryValue8 = parameter0;
  temporaryValue5[0] = temporaryValue8;
  temporaryValue8 = parameter1;
  temporaryValue5[1] = temporaryValue8;
  temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue5);
  temporaryValue1.zjc = temporaryValue2;
  localState3 = 0;
  temporaryValue3 = Object;
  temporaryValue2 = temporaryValue3.keys;
  temporaryValue4 = new Array(1);
  temporaryValue5 = this;
  temporaryValue6 = temporaryValue5.zjc;
  temporaryValue4[0] = temporaryValue6;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
  localState4 = temporaryValue1;
  temporaryValue1 = localState3;
  temporaryValue2 = localState4;
  temporaryValue3 = temporaryValue2.length;
  temporaryValue4 = temporaryValue1 < temporaryValue3;
  while (temporaryValue4) {
    temporaryValue2 = localState4;
    temporaryValue1 = localState3;
    temporaryValue3 = temporaryValue2[temporaryValue1];
    localState5 = temporaryValue3;
    temporaryValue2 = this;
    temporaryValue3 = temporaryValue2.nqa;
    temporaryValue4 = new Array(2);
    temporaryValue5 = localState5;
    temporaryValue4[0] = temporaryValue5;
    temporaryValue5 = this;
    temporaryValue8 = temporaryValue5.zjc;
    temporaryValue5 = temporaryValue8[localState5];
    temporaryValue4[1] = temporaryValue5;
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
    temporaryValue1 = localState3;
    temporaryValue2 = temporaryValue1;
    temporaryValue1 = temporaryValue1 + 1;
    localState3 = temporaryValue1;
    continue;
  }
  temporaryValue2 = Object;
  temporaryValue3 = temporaryValue2.keys;
  temporaryValue4 = new Array(1);
  temporaryValue5 = this;
  temporaryValue6 = temporaryValue5.zjc;
  temporaryValue4[0] = temporaryValue6;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
  localState6 = temporaryValue1;
  temporaryValue3 = localState6;
  temporaryValue4 = temporaryValue3.map;
  temporaryValue5 = new Array(1);
  temporaryValue1 = function (parameter0) { return requestRemoteFrameConfiguration.apply(this, arguments); };
  temporaryValue5[0] = temporaryValue1;
  temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue5);
  localState7 = temporaryValue2;
  temporaryValue2 = Promise;
  temporaryValue4 = temporaryValue2.all;
  temporaryValue5 = new Array(1);
  temporaryValue6 = localState7;
  temporaryValue5[0] = temporaryValue6;
  temporaryValue3 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue5);
  temporaryValue2 = temporaryValue3.then;
  temporaryValue5 = new Array(1);
  temporaryValue4 = function (parameter0) { return commitRemoteFrameConfiguration.apply(this, arguments); };
  temporaryValue5[0] = temporaryValue4;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue5);
  return temporaryValue1;
}

function reportTimeouts() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11, temporaryValue12;
  let localState1, localState2, localState3, localState4, localState5, RemoteFrameTimeoutError;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState2 = 0;
  temporaryValue2 = Object;
  temporaryValue3 = temporaryValue2.keys;
  temporaryValue4 = new Array(1);
  temporaryValue5 = this;
  temporaryValue6 = temporaryValue5.zjc;
  temporaryValue4[0] = temporaryValue6;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
  localState3 = temporaryValue1;
  temporaryValue1 = localState2;
  temporaryValue2 = localState3;
  temporaryValue3 = temporaryValue2.length;
  temporaryValue2 = temporaryValue1 < temporaryValue3;
  while (temporaryValue2) {
    temporaryValue3 = localState3;
    temporaryValue1 = localState2;
    temporaryValue4 = temporaryValue3[temporaryValue1];
    localState4 = temporaryValue4;
    temporaryValue3 = this;
    temporaryValue2 = temporaryValue3.zjc;
    temporaryValue3 = localState4;
    temporaryValue1 = temporaryValue2[temporaryValue3];
    localState5 = temporaryValue1;
    temporaryValue2 = localState5;
    temporaryValue3 = temporaryValue2.yvf;
    temporaryValue2 = temporaryValue3.ubk;
    temporaryValue3 = !temporaryValue2;
    if (temporaryValue3) {
      temporaryValue2 = localState5;
      temporaryValue3 = temporaryValue2.zvf;
      temporaryValue2 = temporaryValue3.euv;
      temporaryValue4 = [];
      temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
      temporaryValue2 = this;
      temporaryValue5 = temporaryValue2.kcn;
      temporaryValue2 = temporaryValue5.xmr;
      temporaryValue3 = new Array(2);
      temporaryValue8 = localState5;
      temporaryValue6 = temporaryValue8.zvf;
      temporaryValue9 = temporaryValue6.qeu;
      temporaryValue10 = ["Appended iframe didn't respond with configuration within 20 seconds.", undefined, undefined];
      temporaryValue10[1] = temporaryValue9;
      temporaryValue9 = this;
      temporaryValue8 = temporaryValue9.uhd;
      temporaryValue9 = temporaryValue8.vmr;
      temporaryValue6 = Reflect.apply(temporaryValue9, temporaryValue8, [localState4]);
      temporaryValue10[2] = temporaryValue6;
      temporaryValue4 = Reflect.construct(RemoteFrameTimeoutError, temporaryValue10);
      temporaryValue3[0] = temporaryValue4;
      temporaryValue3[1] = 203;
      temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue5, temporaryValue3);
      temporaryValue2 = undefined;
    }
    temporaryValue1 = localState2;
    temporaryValue3 = temporaryValue1;
    temporaryValue1 = temporaryValue1 + 1;
    localState2 = temporaryValue1;
    continue;
  }
  return undefined;
}

function loadContext() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue8;
  let localState1, invokeRemoteContextAsync;

  localState1 = undefined;
  invokeRemoteContextAsync = undefined;
  temporaryValue1 = function (nestedParameter0, nestedParameter1) { return invokeRemoteContextAsync.apply(this, arguments); };
  invokeRemoteContextAsync = temporaryValue1;
  temporaryValue2 = asyncToGenerator;
  temporaryValue4 = regeneratorRuntime;
  temporaryValue6 = temporaryValue4.mark;
  temporaryValue5 = new Array(1);
  temporaryValue8 = function (nestedParameter0, nestedParameter1) { return remoteContextGenerator.apply(this, arguments); };
  temporaryValue5[0] = temporaryValue8;
  temporaryValue3 = Reflect.apply(temporaryValue6, temporaryValue4, temporaryValue5);
  temporaryValue1 = temporaryValue2(temporaryValue3);
  localState1 = temporaryValue1;
  temporaryValue2 = invokeRemoteContextAsync;
  return temporaryValue2;
}

function attachFrame(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, localState2;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue1 = this;
  localState2 = temporaryValue1;
  temporaryValue2 = this;
  temporaryValue5 = temporaryValue2.kcn;
  temporaryValue2 = temporaryValue5.gkj;
  temporaryValue4 = new Array(2);
  temporaryValue3 = function () { return cookieOperationStep4.apply(this, arguments); };
  temporaryValue4[0] = temporaryValue3;
  temporaryValue4[1] = 201;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue5, temporaryValue4);
  return undefined;
}

function removeFrame(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, localState3;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue2 = this;
  temporaryValue1 = temporaryValue2.zjc;
  temporaryValue2 = temporaryValue1[parameter0];
  localState2 = temporaryValue2;
  temporaryValue1 = localState2;
  temporaryValue3 = !temporaryValue1;
  if (temporaryValue3) {
    return undefined;
  } else {
    temporaryValue2 = localState2;
    temporaryValue5 = temporaryValue2.zvf;
    temporaryValue2 = temporaryValue5.euv;
    temporaryValue3 = [];
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue5, temporaryValue3);
    temporaryValue2 = localState2;
    temporaryValue3 = temporaryValue2.zvf;
    temporaryValue2 = temporaryValue3.gqa;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, [undefined, true]);
    localState3 = temporaryValue1;
    temporaryValue1 = this;
    temporaryValue2 = temporaryValue1.zjc;
    temporaryValue5 = parameter0;
    temporaryValue1 = temporaryValue2[temporaryValue5];
    temporaryValue2 = localState3;
    temporaryValue1.zvf = temporaryValue2;
    temporaryValue2 = localState3;
    temporaryValue3 = temporaryValue2.kjc;
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, []);
    return undefined;
  }
}

function validateMessage(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue6;
  let localState1, localState2, localState3;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue1 = this;
  localState2 = temporaryValue1;
  temporaryValue2 = {};
  localState3 = temporaryValue2;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.kcn;
  temporaryValue4 = temporaryValue3.gkj;
  temporaryValue2 = new Array(1);
  temporaryValue6 = function () { return integrityCheckStep2.apply(this, arguments); };
  temporaryValue2[0] = temporaryValue6;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue2);
  temporaryValue1 = localState3;
  return temporaryValue1;
}

function buildContext(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue7;
  let localState1, localState2, localState3, createCookieBackedProbe, remoteFrameRegistry, visibilityApi;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue1 = this;
  localState2 = temporaryValue1;
  temporaryValue1 = createCookieBackedProbe;
  temporaryValue2 = new Array(5);
  temporaryValue5 = this;
  temporaryValue3 = temporaryValue5.qlj;
  temporaryValue2[0] = temporaryValue3;
  temporaryValue3 = parameter0;
  temporaryValue2[1] = temporaryValue3;
  temporaryValue3 = function () { return buildRemoteFrameTimingMetadata.apply(this, arguments); };
  temporaryValue2[2] = temporaryValue3;
  temporaryValue3 = parameter1;
  temporaryValue2[3] = temporaryValue3;
  temporaryValue3 = this;
  temporaryValue4 = temporaryValue3.kcn;
  temporaryValue2[4] = temporaryValue4;
  temporaryValue7 = Reflect.apply(temporaryValue1, undefined, temporaryValue2);
  localState3 = temporaryValue7;
  temporaryValue2 = {};
  temporaryValue1 = localState3;
  temporaryValue2.zvf = temporaryValue1;
  temporaryValue1 = remoteFrameRegistry;
  temporaryValue5 = this;
  temporaryValue7 = temporaryValue5.qlj;
  temporaryValue4 = [undefined];
  temporaryValue4[0] = temporaryValue7;
  temporaryValue3 = Reflect.construct(temporaryValue1, temporaryValue4);
  temporaryValue2.yvf = temporaryValue3;
  temporaryValue3 = remoteFrameRegistry;
  temporaryValue5 = this;
  temporaryValue7 = temporaryValue5.qlj;
  temporaryValue4 = [undefined];
  temporaryValue4[0] = temporaryValue7;
  temporaryValue1 = Reflect.construct(temporaryValue3, temporaryValue4);
  temporaryValue2.uwq = temporaryValue1;
  temporaryValue1 = visibilityApi;
  temporaryValue5 = temporaryValue1.gmr;
  temporaryValue2.vxd = temporaryValue5;
  return temporaryValue2;
}

function postMessage(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue9;
  let localState1;

  localState1 = currentFunction;
  temporaryValue3 = parameter1;
  temporaryValue1 = temporaryValue3.zvf;
  temporaryValue2 = parameter2;
  temporaryValue3 = temporaryValue2.qeu;
  temporaryValue1.qeu = temporaryValue3;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.uhd;
  temporaryValue1 = temporaryValue3.rlj(parameter0, parameter2.ewq);
  return undefined;
}

function resolveOrigin(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = this;
  temporaryValue4 = temporaryValue2.uhd;
  temporaryValue2 = temporaryValue4.njc;
  temporaryValue3 = parameter0;
  temporaryValue5 = [undefined, undefined];
  temporaryValue5[0] = temporaryValue3;
  temporaryValue3 = parameter1;
  temporaryValue5[1] = temporaryValue3.kkj;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, temporaryValue5);
  return undefined;
}

//protected stub
function collectNavigatorIdentity(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function collectSignals(event) {
  const message = event.data;
  const originHost = parseUrlAgainstWindow(this.qlj, event.origin).host;
  const remote = this.zjc[originHost];
  const expectedWindow = remote?.zvf?.zvf?.contentWindow;
  const sourceAccepted = this.ebk || expectedWindow === event.source;
  if (!remote || !sourceAccepted) return;

  const decoded = dispatchKpsdkMarkerMessage(message);
  if (decoded === undefined) return;

  remote.uwq.kgq(true);
  switch (decoded.rxd) {
    case "markerConfig":
      this.gfp(originHost, remote, decoded.nwq);
      break;
    case "marker":
      this.rqa(originHost, decoded.nwq);
      break;
    default:
      this.jlj(originHost, remote, decoded.nwq);
  }
}

//protected stub
function collectSignals2(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function initializeProtectedState(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

function allReady() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8;
  let localState1, localState2;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue3 = this;
  localState2 = temporaryValue3;
  temporaryValue1 = Object;
  temporaryValue3 = temporaryValue1.keys;
  temporaryValue5 = new Array(1);
  temporaryValue6 = this;
  temporaryValue4 = temporaryValue6.zwc;
  temporaryValue5[0] = temporaryValue4;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue5);
  temporaryValue1 = temporaryValue2.length;
  temporaryValue3 = temporaryValue1 > 0;
  if (temporaryValue3) {
    temporaryValue4 = Object;
    temporaryValue5 = temporaryValue4.keys;
    temporaryValue6 = [this.zwc];
    temporaryValue1 = Reflect.apply(temporaryValue5, temporaryValue4, temporaryValue6);
    temporaryValue5 = temporaryValue1.every;
    temporaryValue6 = new Array(1);
    temporaryValue4 = function (nestedParameter0) { return hasRuntimeContext.apply(this, arguments); };
    temporaryValue6[0] = temporaryValue4;
    temporaryValue2 = Reflect.apply(temporaryValue5, temporaryValue1, temporaryValue6);
    temporaryValue3 = temporaryValue2;
  }
  return temporaryValue3;
}

function get(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = this;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue2.zwc[temporaryValue1];
  return temporaryValue2;
}

//protected stub
function setProtectedState(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

function publish() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue10;
  let localState1, publishRuntimeContextSnapshot;

  localState1 = currentFunction;
  temporaryValue3 = this;
  temporaryValue3 = this.egx;
  temporaryValue1 = publishRuntimeContextSnapshot(temporaryValue3.qlj, this.zwc, temporaryValue3);
  return undefined;
}

function validate() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue8;
  let localState1, localState2, localState3, validateRuntimeContextSnapshot;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue4 = Object;
  temporaryValue2 = temporaryValue4.keys;
  temporaryValue5 = this;
  temporaryValue6 = temporaryValue5.zwc;
  temporaryValue3 = [undefined];
  temporaryValue3[0] = temporaryValue6;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, temporaryValue3);
  localState2 = temporaryValue1;
  temporaryValue1 = validateRuntimeContextSnapshot;
  temporaryValue3 = localState2;
  temporaryValue4 = this;
  temporaryValue5 = temporaryValue4.qlj;
  temporaryValue6 = this;
  temporaryValue2 = temporaryValue1(temporaryValue3, temporaryValue5, temporaryValue6.egx);
  localState3 = temporaryValue2;
  temporaryValue1 = localState3;
  temporaryValue2 = !temporaryValue1;
  if (temporaryValue2) {
    temporaryValue2 = this;
    temporaryValue1 = {};
    temporaryValue2.zwc = temporaryValue1;
  }
  return undefined;
}

function installVisibilityHook() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, localState2;

  localState1 = currentFunction;
  localState2 = undefined;
  localState2 = this;
  temporaryValue3 = this;
  temporaryValue2 = temporaryValue3.qlj;
  temporaryValue3 = temporaryValue2.document;
  temporaryValue4 = temporaryValue3.addEventListener;
  temporaryValue2 = new Array(2);
  temporaryValue2[0] = "visibilitychange";
  temporaryValue5 = function () { return visibilityOperationStep2.apply(this, arguments); };
  temporaryValue2[1] = temporaryValue5;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue2);
  return undefined;
}

function scheduleTimer(parameter0, parameter1, parameter2, parameter3) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue5;
  let localState1, localState2, localState3, localState4, decodeOptionalConfigurationValue;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue1 = parameter1;
  temporaryValue2 = !temporaryValue1;
  if (!(temporaryValue2)) {
    temporaryValue1 = parameter2;
    temporaryValue3 = !temporaryValue1;
    temporaryValue2 = temporaryValue3;
  }
  if (temporaryValue2) {
    temporaryValue1 = undefined;
    return temporaryValue1;
  } else {
    temporaryValue1 = decodeOptionalConfigurationValue;
    temporaryValue3 = {};
    temporaryValue5 = parameter1;
    temporaryValue3.egq = temporaryValue5;
    temporaryValue4 = parameter2;
    temporaryValue3.kpd = temporaryValue4;
    temporaryValue2 = temporaryValue1(temporaryValue3);
    localState2 = temporaryValue2;
    temporaryValue3 = globalThis.Number;
    temporaryValue4 = localState2;
    temporaryValue1 = temporaryValue3(temporaryValue4);
    temporaryValue2 = temporaryValue1 * 1000;
    localState3 = temporaryValue2;
    temporaryValue3 = globalThis.Number;
    temporaryValue2 = temporaryValue3.isInteger;
    temporaryValue4 = new Array(1);
    temporaryValue5 = localState3;
    temporaryValue4[0] = temporaryValue5;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
    if (temporaryValue1) {
      temporaryValue2 = globalThis.clearTimeout;
      temporaryValue3 = this;
      temporaryValue4 = temporaryValue3.uxj;
      temporaryValue5 = parameter0;
      temporaryValue3 = temporaryValue4[temporaryValue5];
      temporaryValue1 = temporaryValue2(temporaryValue3);
      temporaryValue3 = globalThis.setTimeout;
      temporaryValue2 = parameter3;
      temporaryValue5 = localState3;
      temporaryValue1 = temporaryValue3(temporaryValue2, temporaryValue5);
      localState4 = temporaryValue1;
      temporaryValue2 = this;
      temporaryValue1 = temporaryValue2.uxj;
      temporaryValue2 = parameter0;
      temporaryValue3 = localState4;
      temporaryValue1[temporaryValue2] = temporaryValue3;
      temporaryValue1 = localState3;
      return temporaryValue1;
    } else {
      temporaryValue1 = undefined;
      return temporaryValue1;
    }
  }
}

function update(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue9;
  let localState1, localState2, localState3, localState4, localState5, localState6, runtimeContextEvents;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  temporaryValue1 = this;
  localState2 = temporaryValue1;
  temporaryValue2 = parameter0;
  temporaryValue1 = temporaryValue2.exd;
  localState3 = temporaryValue1;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.rxj;
  localState4 = temporaryValue2;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.gdj;
  localState5 = temporaryValue2;
  temporaryValue1 = parameter0;
  temporaryValue3 = temporaryValue1.jnb;
  localState6 = temporaryValue3;
  temporaryValue2 = localState4;
  temporaryValue1 = undefined;
  temporaryValue4 = temporaryValue2 === temporaryValue1;
  if (!(temporaryValue4)) {
    temporaryValue1 = localState5;
    temporaryValue2 = undefined;
    temporaryValue3 = temporaryValue1 === temporaryValue2;
    temporaryValue4 = temporaryValue3;
  }
  if (temporaryValue4) {
    return undefined;
  } else {
    temporaryValue4 = localState6;
    if (temporaryValue4) {
      temporaryValue4 = Object;
      temporaryValue5 = new Array(1);
      temporaryValue7 = this;
      temporaryValue5[0] = temporaryValue7.zwc;
      temporaryValue3 = temporaryValue4.keys(...temporaryValue5);
      temporaryValue4 = temporaryValue3.filter;
      temporaryValue5 = new Array(1);
      temporaryValue7 = function (parameter0) { return isNotRegistrySentinel.apply(this, arguments); };
      temporaryValue5[0] = temporaryValue7;
      temporaryValue2 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue5);
      temporaryValue4 = temporaryValue2.forEach;
      temporaryValue3 = new Array(1);
      temporaryValue5 = function (parameter0) { return clearRuntimeContextSystemTimes.apply(this, arguments); };
      temporaryValue3[0] = temporaryValue5;
      temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue3);
      temporaryValue2 = runtimeContextEvents;
      temporaryValue3 = temporaryValue2.xfp;
      temporaryValue4 = [];
      temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
    }
    temporaryValue3 = runtimeContextEvents;
    temporaryValue2 = temporaryValue3.qbk;
    temporaryValue4 = new Array(2);
    temporaryValue5 = localState5;
    temporaryValue4[0] = temporaryValue5;
    temporaryValue5 = localState4;
    temporaryValue4[1] = temporaryValue5;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
    return undefined;
  }
}

// Classes/Sdkerrorreporter
function setEndpointPrefix() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4;
  let localState1, localState2;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue2 = arguments.length;
  temporaryValue1 = temporaryValue2 > 0;
  if (temporaryValue1) {
    temporaryValue3 = globalThis.undefined;
    temporaryValue2 = arguments[0] !== temporaryValue3;
    temporaryValue1 = temporaryValue2;
  }
  if (temporaryValue1) {
    temporaryValue1 = arguments[0];
    temporaryValue2 = temporaryValue1;
  } else {
    temporaryValue2 = "";
  }
  localState2 = temporaryValue2;
  temporaryValue2 = this;
  temporaryValue3 = localState2;
  temporaryValue2.lrc = temporaryValue3;
  return undefined;
}

function bindCallback(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4;
  let localState1, localState2, localState3, localState4;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue1 = arguments.length;
  temporaryValue2 = temporaryValue1 > 1;
  if (temporaryValue2) {
    temporaryValue1 = arguments[1];
    temporaryValue2 = temporaryValue1 !== globalThis.undefined;
  }
  if (temporaryValue2) {
    temporaryValue2 = arguments[1];
    temporaryValue1 = temporaryValue2;
  } else {
    temporaryValue1 = 200;
  }
  localState2 = temporaryValue1;
  temporaryValue1 = this;
  localState3 = temporaryValue1;
  temporaryValue2 = function () { return invokeWithSdkErrorReporting.apply(this, arguments); };
  localState4 = temporaryValue2;
  temporaryValue1 = localState4;
  return temporaryValue1;
}

function executeWithReporting(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, localState3, localState4, normalizeError;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue1 = arguments.length;
  temporaryValue2 = temporaryValue1 > 1;
  if (temporaryValue2) {
    temporaryValue3 = arguments[1];
    temporaryValue1 = globalThis.undefined;
    temporaryValue5 = temporaryValue3 !== temporaryValue1;
    temporaryValue2 = temporaryValue5;
  }
  if (temporaryValue2) {
    temporaryValue4 = arguments[1];
    temporaryValue1 = temporaryValue4;
  } else {
    temporaryValue1 = 200;
  }
  localState2 = temporaryValue1;
  try {
    temporaryValue1 = parameter0;
    temporaryValue2 = temporaryValue1();
    return temporaryValue2;
  } catch (error) {
    localState4 = error;
    temporaryValue3 = normalizeError;
    temporaryValue1 = temporaryValue3(localState4);
    localState3 = temporaryValue1;
    temporaryValue1 = localState3;
    temporaryValue2 = temporaryValue1.kdc;
    temporaryValue1 = !temporaryValue2;
    if (temporaryValue1) {
      temporaryValue2 = this;
      temporaryValue3 = temporaryValue2.xmr;
      temporaryValue4 = new Array(2);
      temporaryValue5 = localState3;
      temporaryValue4[0] = temporaryValue5;
      temporaryValue4[1] = localState2;
      temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
      temporaryValue2 = undefined;
    }
    temporaryValue1 = localState3;
    temporaryValue1.kdc = true;
    temporaryValue1 = localState3;
    throw temporaryValue1;
  }
  return undefined;
}

function report(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue8;
  let localState1, localState2, localState3, localState4, localState5, localState6, localState7, localState8, errorReportPathSuffix;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  localState7 = undefined;
  localState8 = undefined;
  temporaryValue1 = this;
  localState2 = temporaryValue1;
  temporaryValue1 = arguments.length;
  temporaryValue2 = temporaryValue1 > 1;
  if (temporaryValue2) {
    temporaryValue1 = arguments[1];
    temporaryValue4 = globalThis.undefined;
    temporaryValue3 = temporaryValue1 !== temporaryValue4;
    temporaryValue2 = temporaryValue3;
  }
  if (temporaryValue2) {
    temporaryValue2 = arguments[1];
    temporaryValue1 = temporaryValue2;
  } else {
    temporaryValue1 = 200;
  }
  localState3 = temporaryValue1;
  temporaryValue3 = parameter0;
  temporaryValue1 = "metadata" in temporaryValue3;
  localState4 = temporaryValue1;
  temporaryValue1 = {};
  temporaryValue2 = localState4;
  if (temporaryValue2) {
    temporaryValue2 = parameter0;
    temporaryValue4 = temporaryValue2.metadata;
    temporaryValue3 = temporaryValue4;
  } else {
    temporaryValue4 = undefined;
    temporaryValue3 = temporaryValue4;
  }
  temporaryValue1.metadata = temporaryValue3;
  temporaryValue2 = localState4;
  if (temporaryValue2) {
    temporaryValue2 = parameter0;
    temporaryValue3 = temporaryValue2.timings;
    temporaryValue4 = temporaryValue3;
  } else {
    temporaryValue2 = undefined;
    temporaryValue4 = temporaryValue2;
  }
  temporaryValue1.timings = temporaryValue4;
  temporaryValue2 = parameter0;
  temporaryValue3 = temporaryValue2.stack;
  temporaryValue1.stack = temporaryValue3;
  temporaryValue2 = parameter0;
  temporaryValue3 = temporaryValue2.message;
  temporaryValue1.message = temporaryValue3;
  temporaryValue3 = parameter0;
  temporaryValue1.name = temporaryValue3.name;
  temporaryValue3 = {};
  temporaryValue2 = this;
  temporaryValue4 = temporaryValue2.qlj;
  temporaryValue2 = temporaryValue4.location;
  temporaryValue4 = temporaryValue2.host;
  temporaryValue3.host = temporaryValue4;
  temporaryValue1.window = temporaryValue3;
  temporaryValue2 = localState3;
  temporaryValue1.code = temporaryValue2;
  localState5 = temporaryValue1;
  temporaryValue1 = "".concat;
  temporaryValue4 = this;
  temporaryValue5 = temporaryValue4.lrc;
  temporaryValue6 = [undefined];
  temporaryValue6[0] = temporaryValue5;
  temporaryValue2 = Reflect.apply(temporaryValue1, "", temporaryValue6);
  temporaryValue1 = temporaryValue2.concat;
  temporaryValue4 = new Array(1);
  temporaryValue5 = errorReportPathSuffix;
  temporaryValue4[0] = temporaryValue5;
  temporaryValue3 = Reflect.apply(temporaryValue1, temporaryValue2, temporaryValue4);
  localState6 = temporaryValue3;
  temporaryValue2 = this;
  temporaryValue4 = temporaryValue2.rkj;
  temporaryValue3 = localState5;
  temporaryValue6 = [undefined];
  temporaryValue6[0] = temporaryValue3;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue6);
  localState7 = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue3 = temporaryValue1.qlj;
  temporaryValue1 = temporaryValue3.Image;
  localState8 = temporaryValue1;
  temporaryValue2 = Promise;
  temporaryValue3 = new Array(1);
  temporaryValue4 = function (parameter0) { return protectedTransportStep1.apply(this, arguments); };
  temporaryValue3[0] = temporaryValue4;
  temporaryValue1 = Reflect.construct(temporaryValue2, temporaryValue3);
  return temporaryValue1;
}

function encodePayload(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, localState2, localState3, xorStringWithRepeatingKey;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue2 = JSON;
  temporaryValue3 = temporaryValue2.stringify;
  temporaryValue4 = parameter0;
  temporaryValue6 = [undefined];
  temporaryValue6[0] = temporaryValue4;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue6);
  localState2 = temporaryValue1;
  temporaryValue3 = xorStringWithRepeatingKey;
  temporaryValue2 = localState2;
  temporaryValue1 = temporaryValue3(temporaryValue2);
  localState3 = temporaryValue1;
  temporaryValue3 = this;
  temporaryValue2 = temporaryValue3.qlj;
  temporaryValue3 = temporaryValue2.btoa;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, [localState3]);
  return temporaryValue1;
}

// Classes/Sdklogger
function normalizeRecord(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10;
  let localState1, localState2, getLoggerConfiguration, logSequenceState;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue2 = getLoggerConfiguration;
  temporaryValue3 = temporaryValue2.yzv;
  temporaryValue5 = [];
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue5);
  temporaryValue2 = temporaryValue1.nwq;
  temporaryValue3 = temporaryValue2.jqa;
  localState2 = temporaryValue3;
  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.logLevel;
  temporaryValue1 = localState2;
  temporaryValue3 = temporaryValue2 < temporaryValue1;
  if (temporaryValue3) {
    return null;
  } else {
    temporaryValue2 = objectSpread2;
    temporaryValue4 = objectSpread2;
    temporaryValue5 = {};
    temporaryValue6 = parameter0;
    temporaryValue3 = temporaryValue4(temporaryValue5, temporaryValue6);
    temporaryValue5 = logSequenceState;
    temporaryValue7 = parameter0;
    temporaryValue8 = temporaryValue7.logLevel;
    temporaryValue5 = this.vhd;
    temporaryValue7 = temporaryValue5;
    temporaryValue5 = temporaryValue5 + 1;
    temporaryValue8 = this;
    temporaryValue8.vhd = temporaryValue5;
    temporaryValue6 = { logLevel: temporaryValue5[temporaryValue8] };
    temporaryValue6.seqNum = temporaryValue7;
    temporaryValue1 = temporaryValue2(temporaryValue3, {  }, temporaryValue6);
    return temporaryValue1;
  }
}

function initialize() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11;
  let localState1, localState2, localState3, localState4, localState5, maxLogBatchSize;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  temporaryValue2 = this;
  localState2 = temporaryValue2;
  temporaryValue1 = arguments.length;
  temporaryValue2 = temporaryValue1 > 0;
  if (temporaryValue2) {
    temporaryValue5 = arguments[0];
    temporaryValue1 = globalThis.undefined;
    temporaryValue3 = temporaryValue5 !== temporaryValue1;
    temporaryValue2 = temporaryValue3;
  }
  if (temporaryValue2) {
    temporaryValue2 = arguments[0];
    temporaryValue1 = temporaryValue2;
  } else {
    temporaryValue1 = "";
  }
  localState3 = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue2 = localState3;
  temporaryValue1.lrc = temporaryValue2;
  temporaryValue3 = this;
  temporaryValue4 = temporaryValue3.yjc;
  temporaryValue3 = temporaryValue4.map;
  temporaryValue5 = new Array(1);
  temporaryValue6 = function (nestedParameter0) { return normalizeBufferedRecord.apply(this, arguments); };
  temporaryValue5[0] = temporaryValue6;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue4, temporaryValue5);
  temporaryValue3 = temporaryValue2.filter;
  temporaryValue6 = new Array(1);
  temporaryValue7 = function (nestedParameter0) { return removeEmptyLogRecord.apply(this, arguments); };
  temporaryValue6[0] = temporaryValue7;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue6);
  localState4 = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue1.nmr = true;
  localState5 = 0;
  temporaryValue1 = localState5;
  temporaryValue2 = localState4;
  temporaryValue4 = temporaryValue2.length;
  temporaryValue2 = temporaryValue1 < temporaryValue4;
  while (temporaryValue2) {
    temporaryValue3 = this;
    temporaryValue2 = temporaryValue3.jpd;
    temporaryValue4 = new Array(2);
    temporaryValue6 = localState4;
    temporaryValue7 = temporaryValue6.slice;
    temporaryValue9 = localState5;
    temporaryValue8 = [undefined, undefined];
    temporaryValue8[0] = temporaryValue9;
    temporaryValue9 = maxLogBatchSize;
    temporaryValue8[1] = localState5 + temporaryValue9;
    temporaryValue5 = Reflect.apply(temporaryValue7, temporaryValue6, temporaryValue8);
    temporaryValue4[0] = temporaryValue5;
    temporaryValue4[1] = false;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
    temporaryValue1 = localState5;
    temporaryValue2 = maxLogBatchSize;
    temporaryValue2 = temporaryValue1 + temporaryValue2;
    localState5 = temporaryValue2;
    continue;
  }
  temporaryValue3 = this;
  temporaryValue1 = [];
  temporaryValue3.yjc = temporaryValue1;
  return undefined;
}

function verbose(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue6, temporaryValue8;
  let localState1, logLevelEnum;

  localState1 = currentFunction;
  temporaryValue1 = this;
  temporaryValue6 = logLevelEnum;
  temporaryValue6 = parameter0;
  temporaryValue4 = [temporaryValue6.VERBOSE, undefined];
  temporaryValue4[1] = temporaryValue6;
  temporaryValue2 = temporaryValue1.lhd(...temporaryValue4);
  return undefined;
}

function info(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, logLevelEnum;

  localState1 = currentFunction;
  temporaryValue1 = this;
  temporaryValue4 = logLevelEnum;
  temporaryValue4 = parameter0;
  temporaryValue6 = [temporaryValue4.INFO, undefined];
  temporaryValue6[1] = temporaryValue4;
  temporaryValue2 = temporaryValue1.lhd(...temporaryValue6);
  return undefined;
}

function warning(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, logLevelEnum;

  localState1 = currentFunction;
  temporaryValue1 = this;
  temporaryValue5 = logLevelEnum;
  temporaryValue5 = parameter0;
  temporaryValue4 = [temporaryValue5.WARNING, undefined];
  temporaryValue4[1] = temporaryValue5;
  temporaryValue3 = temporaryValue1.lhd(...temporaryValue4);
  return undefined;
}

function error(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, logLevelEnum;

  localState1 = currentFunction;
  temporaryValue1 = this;
  temporaryValue6 = logLevelEnum.ERROR;
  temporaryValue2 = [undefined, undefined];
  temporaryValue2[0] = temporaryValue6;
  temporaryValue6 = parameter0;
  temporaryValue2[1] = temporaryValue6;
  temporaryValue3 = temporaryValue1.lhd(...temporaryValue2);
  return undefined;
}

function critical(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, logLevelEnum;

  localState1 = currentFunction;
  temporaryValue1 = this;
  temporaryValue5 = logLevelEnum;
  temporaryValue5 = parameter0;
  temporaryValue2 = [temporaryValue5.CRITICAL, undefined];
  temporaryValue2[1] = temporaryValue5;
  temporaryValue3 = temporaryValue1.lhd(...temporaryValue2);
  return undefined;
}

function postBatch(records, sendOnUnload) {
  if (!this.nmr) throw new Error("Cannot send log message before initialisation");

  const endpoint = `${this.lrc}${logEndpointPath}`;
  if (sendOnUnload) {
    const unloadRecord = this.rhd(this.ktc(
      logLevelEnum.VERBOSE,
      { logCode: logCodeEnum.BatchSendOnUnload },
    ));
    if (unloadRecord) records.push(unloadRecord);
  }

  const serialized = JSON.stringify(records);
  const key = getSdkRuntimeConfiguration().xjc.uqa.nhd;
  const encodedBatch = xorStringWithRepeatingKey(serialized, key);

  if (sendOnUnload) this.gpd(endpoint, encodedBatch, records.length);
  else this.rpd(endpoint, encodedBatch);
}

function postBatch2(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11, temporaryValue14, temporaryValue15;
  let localState1, localState2, sendHttpRequest, requestHeaderName, readRequestHeaderValue;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue1 = this;
  localState2 = temporaryValue1;
  temporaryValue3 = sendHttpRequest;
  temporaryValue6 = parameter0;
  temporaryValue5 = function () { return createLogRequestId.apply(this, arguments); };
  temporaryValue4 = Reflect.apply(temporaryValue5, undefined, []);
  temporaryValue5 = {};
  temporaryValue9 = defineProperty;
  temporaryValue15 = readRequestHeaderValue();
  temporaryValue8 = temporaryValue9({ "Content-Type": "application/json" }, requestHeaderName, temporaryValue15);
  temporaryValue9 = parameter1;
  temporaryValue7 = { method: "POST", headers: temporaryValue8 };
  temporaryValue7.body = temporaryValue9;
  temporaryValue5.xwq = temporaryValue7;
  temporaryValue2 = temporaryValue3(temporaryValue6, temporaryValue4, temporaryValue5);
  temporaryValue4 = temporaryValue2.catch;
  temporaryValue5 = new Array(1);
  temporaryValue3 = function (parameter0) { return handleLogTransportFailure.apply(this, arguments); };
  temporaryValue5[0] = temporaryValue3;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue5);
  return undefined;
}

//protected stub
function sendBeaconBatch(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

function createRecord(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = objectSpread2;
  temporaryValue3 = objectSpread2;
  temporaryValue6 = {};
  temporaryValue5 = parameter0;
  temporaryValue6.logLevel = temporaryValue5;
  temporaryValue5 = parameter1;
  temporaryValue4 = temporaryValue3(temporaryValue6, temporaryValue5);
  temporaryValue3 = {};
  temporaryValue5 = {};
  temporaryValue6 = parameter2;
  temporaryValue7 = temporaryValue6 !== null;
  if (temporaryValue7) {
    temporaryValue10 = parameter2;
    temporaryValue6 = undefined;
    temporaryValue8 = temporaryValue10 !== temporaryValue6;
    temporaryValue7 = temporaryValue8;
  }
  if (temporaryValue7) {
    temporaryValue6 = parameter2;
    temporaryValue8 = temporaryValue6;
  } else {
    temporaryValue7 = Date;
    temporaryValue10 = [];
    temporaryValue6 = temporaryValue7.now(...temporaryValue10);
    temporaryValue8 = temporaryValue6;
  }
  temporaryValue5.timestamp = temporaryValue8;
  temporaryValue7 = {};
  temporaryValue6 = this;
  temporaryValue8 = temporaryValue6.qlj;
  temporaryValue6 = temporaryValue8.location;
  temporaryValue8 = temporaryValue6.host;
  temporaryValue7.host = temporaryValue8;
  temporaryValue5.window = temporaryValue7;
  temporaryValue1 = temporaryValue2(temporaryValue4, temporaryValue3, temporaryValue5);
  return temporaryValue1;
}

function emit(record) {
  const length = this.yjc.length;
  if (length < logTransportState) {
    this.yjc.push(record);
    return;
  }
  if (length === logTransportState) {
    this.yjc.push(this.ktc(
      logLevelEnum.WARNING,
      { logCode: logCodeEnum.StartBufferTruncated, metadata: [logTransportState, 1] },
      record.timestamp,
    ));
    return;
  }
  this.yjc[length - 1].metadata[1] += 1;
}

function emit2(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, localState3, normalizeError;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue4 = this;
  temporaryValue2 = temporaryValue4.ktc;
  temporaryValue3 = new Array(2);
  temporaryValue5 = parameter0;
  temporaryValue3[0] = temporaryValue5;
  temporaryValue5 = parameter1;
  temporaryValue3[1] = temporaryValue5;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, temporaryValue3);
  localState2 = temporaryValue1;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.nmr;
  temporaryValue1 = !temporaryValue2;
  if (temporaryValue1) {
    temporaryValue3 = this;
    temporaryValue2 = temporaryValue3.jfp;
    temporaryValue4 = new Array(1);
    temporaryValue6 = localState2;
    temporaryValue4[0] = temporaryValue6;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
  } else {
    try {
      temporaryValue1 = this;
      temporaryValue4 = temporaryValue1.gbk;
      temporaryValue1 = temporaryValue4.xbk;
      temporaryValue3 = new Array(1);
      temporaryValue5 = localState2;
      temporaryValue3[0] = temporaryValue5;
      temporaryValue2 = Reflect.apply(temporaryValue1, temporaryValue4, temporaryValue3);
    } catch (error) {
      localState3 = error;
      temporaryValue3 = this;
      temporaryValue4 = temporaryValue3.kcn;
      temporaryValue2 = temporaryValue4.xmr;
      temporaryValue3 = new Array(2);
      temporaryValue6 = localState3;
      temporaryValue5 = normalizeError(temporaryValue6);
      temporaryValue3[0] = temporaryValue5;
      temporaryValue3[1] = 204;
      temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, temporaryValue3);
      temporaryValue5 = undefined;
    }

  }
  return undefined;
}

// Classes/Sdkruntimecontroller
function load() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue8;
  let localState1, invokeRuntimeControllerLoader;

  localState1 = undefined;
  invokeRuntimeControllerLoader = undefined;
  temporaryValue1 = function (nestedParameter0, nestedParameter1, nestedParameter2) { return invokeRuntimeControllerLoader.apply(this, arguments); };
  invokeRuntimeControllerLoader = temporaryValue1;
  temporaryValue2 = asyncToGenerator;
  temporaryValue3 = regeneratorRuntime;
  temporaryValue5 = temporaryValue3.mark;
  temporaryValue6 = new Array(1);
  temporaryValue8 = function (nestedParameter0, nestedParameter1, nestedParameter2) { return locationOperationStep11.apply(this, arguments); };
  temporaryValue6[0] = temporaryValue8;
  temporaryValue4 = Reflect.apply(temporaryValue5, temporaryValue3, temporaryValue6);
  temporaryValue1 = temporaryValue2(temporaryValue4);
  localState1 = temporaryValue1;
  temporaryValue1 = invokeRuntimeControllerLoader;
  return temporaryValue1;
}

function invokeRuntimeControllerLoader(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue6;
  let runtimeControllerLoaderAsync;

  temporaryValue2 = runtimeControllerLoaderAsync;
  temporaryValue1 = temporaryValue2.apply(this, arguments);
  return temporaryValue1;
}

function selectEndpointHost(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue3;

  temporaryValue1 = parameter0;
  return temporaryValue1.nbk;
}

function handlePersistedPageRestore(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let runtimeController, clientStateEnum, protectedStateEntries;

  temporaryValue1 = parameter0;
  temporaryValue2 = temporaryValue1.persisted;
  temporaryValue3 = !temporaryValue2;
  if (temporaryValue3) {
    return undefined;
  } else {
    temporaryValue2 = runtimeController;
    temporaryValue4 = temporaryValue2.nbx;
    temporaryValue2 = temporaryValue4.gwq;
    temporaryValue3 = [];
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, temporaryValue3);
    temporaryValue3 = runtimeController;
    temporaryValue4 = temporaryValue3.jhj;
    temporaryValue3 = temporaryValue4.uvj;
    temporaryValue2 = [];
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue4, temporaryValue2);
    temporaryValue2 = runtimeController;
    temporaryValue3 = temporaryValue2.jhj;
    temporaryValue2 = temporaryValue3.nwc;
    temporaryValue5 = [];
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue5);
    if (temporaryValue1) {
      return undefined;
    } else {
      temporaryValue2 = runtimeController;
      temporaryValue4 = temporaryValue2.yyy;
      temporaryValue2 = temporaryValue4.ljh;
      temporaryValue1 = [];
      temporaryValue3 = Reflect.apply(temporaryValue2, temporaryValue4, temporaryValue1);
      temporaryValue1 = clientStateEnum;
      temporaryValue5 = temporaryValue1.kjh;
      temporaryValue1 = temporaryValue3 === temporaryValue5;
      if (temporaryValue1) {
        temporaryValue2 = protectedStateEntries;
        temporaryValue3 = temporaryValue2.forEach;
        temporaryValue5 = new Array(1);
        temporaryValue4 = function (parameter0) { return restoreProtectedStateEntry.apply(this, arguments); };
        temporaryValue5[0] = temporaryValue4;
        temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue5);
      }
      return undefined;
    }
  }
}

function restoreProtectedStateEntry(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue6;
  let runtimeController;

  temporaryValue2 = runtimeController;
  temporaryValue1 = temporaryValue2.uqh(parameter0);
  return temporaryValue1;
}

function compileEndpointHostDescriptor(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let endpointSelectionRules;

  temporaryValue1 = parameter0;
  temporaryValue4 = temporaryValue1.nbk;
  temporaryValue2 = {  };
  temporaryValue2.exd = temporaryValue4;
  temporaryValue1 = endpointSelectionRules;
  temporaryValue4 = parameter0;
  temporaryValue3 = temporaryValue1(temporaryValue4.nbk);
  temporaryValue2.yyw = temporaryValue3;
  return temporaryValue2;
}

function isStarted() {
  let temporaryValue1, temporaryValue2;
  let localState1;

  localState1 = currentFunction;
  return this.gxj;
}

function configureContext(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue9;
  let localState1;

  localState1 = currentFunction;
  temporaryValue4 = this;
  temporaryValue1 = temporaryValue4.jhj;
  temporaryValue3 = temporaryValue1.vpw;
  temporaryValue5 = parameter0;
  temporaryValue4 = [undefined, undefined, undefined];
  temporaryValue4[0] = temporaryValue5;
  temporaryValue5 = parameter1;
  temporaryValue4[1] = temporaryValue5;
  temporaryValue4[2] = parameter2;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue4);
  return temporaryValue2;
}

//protected stub
function getProtectedState(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

function resolveEndpointContext(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue6, temporaryValue7;
  let localState1, localState2, createDefaultEndpointContext;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.gzp;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, [parameter0]);
  localState2 = temporaryValue1;
  temporaryValue3 = temporaryValue1 !== null;
  if (temporaryValue3) {
    temporaryValue1 = localState2;
    temporaryValue2 = undefined;
    temporaryValue3 = temporaryValue1 !== temporaryValue2;
  }
  if (temporaryValue3) {
    temporaryValue2 = localState2;
    temporaryValue1 = temporaryValue2;
  } else {
    temporaryValue3 = createDefaultEndpointContext;
    temporaryValue2 = temporaryValue3();
    temporaryValue1 = temporaryValue2;
  }
  return temporaryValue1;
}

function resolveHost(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = this;
  temporaryValue2 = temporaryValue1.kzp;
  if (temporaryValue2) {
    temporaryValue2 = this;
    temporaryValue3 = temporaryValue2.kzp;
    temporaryValue1 = temporaryValue3.exd;
  } else {
    temporaryValue2 = parameter0;
    temporaryValue3 = temporaryValue2.host;
    temporaryValue1 = temporaryValue3;
  }
  return temporaryValue1;
}

function waitForOperational(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, clientStateEnum;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue1 = this;
  localState2 = temporaryValue1;
  temporaryValue3 = this;
  temporaryValue4 = temporaryValue3.yyy;
  temporaryValue3 = temporaryValue4.uob;
  temporaryValue6 = clientStateEnum;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue4, [temporaryValue6.kjh]);
  temporaryValue4 = temporaryValue2.then;
  temporaryValue3 = new Array(1);
  temporaryValue6 = function () { return resolveConfiguredEndpointContext.apply(this, arguments); };
  temporaryValue3[0] = temporaryValue6;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue3);
  return temporaryValue1;
}

function resolveConfiguredEndpointContext() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9;
  let runtimeController, endpointHost;

  temporaryValue2 = runtimeController;
  temporaryValue6 = runtimeController;
  temporaryValue4 = temporaryValue6.jdj(endpointHost);
  temporaryValue1 = temporaryValue2.rwc(temporaryValue4);
  return temporaryValue1;
}

function normalizeInput(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10;
  let localState1, localState2, clientStateEnum;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue1 = arguments.length;
  temporaryValue3 = temporaryValue1 > 1;
  if (temporaryValue3) {
    temporaryValue1 = arguments[1];
    temporaryValue4 = globalThis.undefined;
    temporaryValue2 = temporaryValue1 !== temporaryValue4;
    temporaryValue3 = temporaryValue2;
  }
  if (temporaryValue3) {
    temporaryValue2 = arguments[1];
    temporaryValue1 = temporaryValue2;
  } else {
    temporaryValue1 = true;
  }
  localState2 = temporaryValue1;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.yyy;
  temporaryValue4 = temporaryValue3.ljh;
  temporaryValue5 = [];
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue5);
  temporaryValue2 = clientStateEnum;
  temporaryValue5 = temporaryValue2.zvj;
  temporaryValue2 = temporaryValue1 === temporaryValue5;
  if (temporaryValue2) {
    temporaryValue3 = this;
    temporaryValue2 = temporaryValue3.gzp;
    temporaryValue4 = new Array(1);
    temporaryValue6 = this;
    temporaryValue7 = temporaryValue6.jdj;
    temporaryValue8 = new Array(1);
    temporaryValue9 = parameter0;
    temporaryValue8[0] = temporaryValue9;
    temporaryValue5 = Reflect.apply(temporaryValue7, temporaryValue6, temporaryValue8);
    temporaryValue4[0] = temporaryValue5;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
    return temporaryValue1;
  } else {
    temporaryValue1 = localState2;
    if (temporaryValue1) {
      temporaryValue3 = this;
      temporaryValue4 = temporaryValue3.rwc;
      temporaryValue5 = new Array(1);
      temporaryValue7 = this;
      temporaryValue9 = temporaryValue7.jdj;
      temporaryValue8 = new Array(1);
      temporaryValue10 = parameter0;
      temporaryValue8[0] = temporaryValue10;
      temporaryValue6 = Reflect.apply(temporaryValue9, temporaryValue7, temporaryValue8);
      temporaryValue5[0] = temporaryValue6;
      temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue5);
      temporaryValue2 = temporaryValue1;
    } else {
      temporaryValue1 = this;
      temporaryValue5 = temporaryValue1.gzp;
      temporaryValue6 = new Array(1);
      temporaryValue8 = this;
      temporaryValue4 = temporaryValue8.jdj;
      temporaryValue9 = new Array(1);
      temporaryValue10 = parameter0;
      temporaryValue9[0] = temporaryValue10;
      temporaryValue7 = Reflect.apply(temporaryValue4, temporaryValue8, temporaryValue9);
      temporaryValue6[0] = temporaryValue7;
      temporaryValue3 = Reflect.apply(temporaryValue5, temporaryValue1, temporaryValue6);
      temporaryValue2 = temporaryValue3;
    }
    return temporaryValue2;
  }
}

function submit(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, localState3, localState4, clientStateEnum;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue1 = this;
  localState2 = temporaryValue1;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.yyy;
  temporaryValue2 = temporaryValue3.xdj;
  temporaryValue4 = new Array(2);
  temporaryValue5 = clientStateEnum;
  temporaryValue6 = temporaryValue5.kjh;
  temporaryValue4[0] = temporaryValue6;
  temporaryValue5 = clientStateEnum;
  temporaryValue6 = temporaryValue5.jcg;
  temporaryValue4[1] = temporaryValue6;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
  temporaryValue3 = !temporaryValue1;
  if (temporaryValue3) {
    return undefined;
  } else {
    temporaryValue2 = this;
    temporaryValue6 = temporaryValue2.jdj;
    temporaryValue1 = [parameter0];
    temporaryValue3 = Reflect.apply(temporaryValue6, temporaryValue2, temporaryValue1);
    localState3 = temporaryValue3;
    temporaryValue1 = function () { return applyProtectedStateUpdate.apply(this, arguments); };
    localState4 = temporaryValue1;
    temporaryValue1 = this;
    temporaryValue5 = temporaryValue1.kmz;
    temporaryValue3 = new Array(3);
    temporaryValue4 = localState3;
    temporaryValue3[0] = temporaryValue4;
    temporaryValue4 = parameter1;
    temporaryValue3[1] = temporaryValue4;
    temporaryValue4 = localState4;
    temporaryValue3[2] = temporaryValue4;
    temporaryValue2 = Reflect.apply(temporaryValue5, temporaryValue1, temporaryValue3);
    return undefined;
  }
}

function applyProtectedStateUpdate() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, runtimeController, protectedStateValue;

  localState1 = currentFunction;
  temporaryValue2 = runtimeController;
  temporaryValue1 = temporaryValue2.uqh(protectedStateValue);
  return undefined;
}

//protected stub
function setProtectedStateA(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

function commitProtectedStateAndReady(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let runtimeController, protectedStateKey;

  temporaryValue2 = parameter0;
  if (temporaryValue2) {
    temporaryValue3 = runtimeController;
    temporaryValue1 = temporaryValue3.kmz;
    temporaryValue4 = new Array(3);
    temporaryValue6 = protectedStateKey;
    temporaryValue4[0] = temporaryValue6;
    temporaryValue4[1] = parameter0;
    temporaryValue6 = function () { return finalizeProtectedStateUpdate.apply(this, arguments); };
    temporaryValue4[2] = temporaryValue6;
    temporaryValue2 = Reflect.apply(temporaryValue1, temporaryValue3, temporaryValue4);
  }
  temporaryValue2 = runtimeController;
  temporaryValue3 = temporaryValue2.nfm;
  temporaryValue4 = [];
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
  return undefined;
}

function finalizeProtectedStateUpdate() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let runtimeController, protectedStateKey;

  temporaryValue3 = runtimeController;
  temporaryValue1 = temporaryValue3.uqh(protectedStateKey);
  return temporaryValue1;
}

//protected stub
function setProtectedStateB(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

function enterLoading() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, clientStateEnum;

  localState1 = currentFunction;
  temporaryValue2 = this;
  temporaryValue4 = temporaryValue2.yyy;
  temporaryValue2 = temporaryValue4.zpw;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, [clientStateEnum.gqh]);
  return undefined;
}

function enterReady() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, clientStateEnum;

  localState1 = currentFunction;
  temporaryValue2 = this;
  temporaryValue4 = temporaryValue2.yyy;
  temporaryValue2 = temporaryValue4.zpw;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, [clientStateEnum.kjh]);
  this.gxj = true;
  return undefined;
}

function handleConfiguration(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, clientStateEnum, runtimeModeEnum;

  localState1 = currentFunction;
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.yyy;
  temporaryValue2 = temporaryValue3.zpw;
  temporaryValue4 = new Array(1);
  temporaryValue5 = clientStateEnum;
  temporaryValue6 = temporaryValue5.zvj;
  temporaryValue4[0] = temporaryValue6;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
  temporaryValue2 = this;
  temporaryValue3 = temporaryValue2.jhj;
  temporaryValue2 = temporaryValue3.nwc;
  temporaryValue4 = [];
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
  if (temporaryValue1) {
    temporaryValue1 = this;
    temporaryValue3 = temporaryValue1.yxj;
    temporaryValue5 = new Array(1);
    temporaryValue4 = runtimeModeEnum;
    temporaryValue6 = temporaryValue4.xzv;
    temporaryValue5[0] = temporaryValue6;
    temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue5);
  } else {
    temporaryValue3 = this;
    temporaryValue2 = temporaryValue3.qlx;
    temporaryValue4 = new Array(1);
    temporaryValue5 = parameter0;
    temporaryValue4[0] = temporaryValue5;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
    temporaryValue2 = undefined;
  }
  return undefined;
}

function createStartupTask() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue7, temporaryValue8;
  let localState1, invokeRuntimeStartupTask;

  localState1 = undefined;
  invokeRuntimeStartupTask = undefined;
  temporaryValue1 = function (nestedParameter0) { return invokeRuntimeStartupTask.apply(this, arguments); };
  invokeRuntimeStartupTask = temporaryValue1;
  temporaryValue2 = asyncToGenerator;
  temporaryValue4 = regeneratorRuntime;
  temporaryValue5 = temporaryValue4.mark;
  temporaryValue7 = new Array(1);
  temporaryValue8 = function (nestedParameter0) { return protectedStartupGenerator.apply(this, arguments); };
  temporaryValue7[0] = temporaryValue8;
  temporaryValue3 = Reflect.apply(temporaryValue5, temporaryValue4, temporaryValue7);
  temporaryValue1 = temporaryValue2(temporaryValue3);
  localState1 = temporaryValue1;
  temporaryValue2 = invokeRuntimeStartupTask;
  return temporaryValue2;
}

function invokeRuntimeStartupTask(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let runtimeStartupAsync;

  temporaryValue5 = runtimeStartupAsync;
  temporaryValue1 = temporaryValue5.apply(this, arguments);
  return temporaryValue1;
}

function protectedStartupGenerator(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue10;
  let localState1, localState2, localState3, localState4;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue1 = this;
  localState2 = temporaryValue1;
  temporaryValue2 = regeneratorRuntime;
  temporaryValue5 = temporaryValue2.wrap;
  temporaryValue4 = new Array(3);
  temporaryValue10 = function (parameter0) { return protectedTokenStateStep12.apply(this, arguments); };
  temporaryValue4[0] = temporaryValue10;
  temporaryValue4[1] = localState1;
  temporaryValue4[2] = this;
  temporaryValue1 = Reflect.apply(temporaryValue5, temporaryValue2, temporaryValue4);
  return temporaryValue1;
}

function applyRuntimeOverrideRecord(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let localState1, localState2, runtimeController, runtimeOverrideKey;

  localState1 = undefined;
  localState2 = undefined;
  temporaryValue1 = parameter0;
  temporaryValue4 = temporaryValue1.ywq;
  localState1 = temporaryValue4;
  temporaryValue2 = parameter0;
  temporaryValue3 = temporaryValue2.qnh;
  localState2 = temporaryValue3;
  temporaryValue2 = runtimeController;
  temporaryValue4 = temporaryValue2.lrv;
  temporaryValue5 = runtimeOverrideKey;
  temporaryValue3 = [undefined, undefined, undefined];
  temporaryValue3[0] = temporaryValue5;
  temporaryValue5 = localState1;
  temporaryValue3[1] = temporaryValue5;
  temporaryValue5 = localState2;
  temporaryValue3[2] = temporaryValue5;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue3);
  return temporaryValue1;
}

function applyOverrides(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, localState3, localState4, localState5, localState6, runtimeModeEnum;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  temporaryValue4 = this;
  localState2 = temporaryValue4;
  temporaryValue1 = parameter0;
  temporaryValue3 = temporaryValue1.ubk;
  if (temporaryValue3) {
    return undefined;
  }
  localState3 = false;
  temporaryValue1 = parameter1;
  temporaryValue2 = runtimeModeEnum;
  temporaryValue3 = temporaryValue2.qmr;
  temporaryValue4 = temporaryValue1 !== temporaryValue3;
  if (temporaryValue4) {
    temporaryValue1 = function () { return probeProtectedRuntimeContext.apply(this, arguments); };
    localState4 = temporaryValue1;
    localState5 = 0;
    temporaryValue4 = Object;
    temporaryValue1 = temporaryValue4.keys;
    temporaryValue3 = new Array(1);
    temporaryValue6 = parameter2;
    temporaryValue3[0] = temporaryValue6;
    temporaryValue2 = Reflect.apply(temporaryValue1, temporaryValue4, temporaryValue3);
    localState6 = temporaryValue2;
    temporaryValue1 = localState5;
    temporaryValue4 = localState6;
    temporaryValue2 = temporaryValue4.length;
    temporaryValue3 = temporaryValue1 < temporaryValue2;
    while (temporaryValue3) {
      temporaryValue1 = localState4;
      temporaryValue3 = temporaryValue1();
      temporaryValue1 = localState5;
      temporaryValue2 = temporaryValue1;
      temporaryValue1 = temporaryValue1 + 1;
      localState5 = temporaryValue1;
      continue;
    }
  }
  temporaryValue2 = parameter0;
  temporaryValue3 = temporaryValue2.kgq;
  temporaryValue4 = new Array(1);
  temporaryValue5 = localState3;
  if (temporaryValue5) {
    temporaryValue6 = runtimeModeEnum;
    temporaryValue5 = temporaryValue6.yuv;
    temporaryValue7 = temporaryValue5;
  } else {
    temporaryValue5 = parameter1;
    temporaryValue7 = temporaryValue5;
  }
  temporaryValue4[0] = temporaryValue7;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
  return undefined;
}

function probeProtectedRuntimeContext() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue8;
  let localState1, localState2, localState3, runtimeContextSource, runtimeContextSelector, runtimeController, runtimeContextByKey, probeProtectedRuntimeContextDependency, localState4;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue1 = runtimeContextSource;
  temporaryValue2 = runtimeContextSelector;
  temporaryValue3 = temporaryValue1[temporaryValue2];
  localState2 = temporaryValue3;
  temporaryValue1 = runtimeController;
  temporaryValue3 = temporaryValue1.kmz;
  temporaryValue4 = new Array(3);
  temporaryValue6 = localState2;
  temporaryValue4[0] = temporaryValue6;
  temporaryValue5 = runtimeContextByKey;
  temporaryValue6 = temporaryValue5[localState2];
  temporaryValue4[1] = temporaryValue6;
  temporaryValue5 = function () { return finalizeProtectedRuntimeProbe.apply(this, arguments); };
  temporaryValue4[2] = temporaryValue5;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue4);
  localState3 = temporaryValue2;
  temporaryValue1 = localState3;
  temporaryValue2 = undefined;
  temporaryValue3 = temporaryValue1 !== temporaryValue2;
  if (temporaryValue3) {
    temporaryValue1 = localState3;
    temporaryValue2 = temporaryValue1.lbx;
    temporaryValue1 = probeProtectedRuntimeContextDependency;
    temporaryValue4 = temporaryValue1 * "<double high=1072483532 low=-858993459>";
    temporaryValue1 = temporaryValue2 < temporaryValue4;
    temporaryValue3 = temporaryValue1;
  }
  if (temporaryValue3) {
    localState4 = true;
  }
  return undefined;
}

function finalizeProtectedRuntimeProbe() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5;
  let runtimeController, finalizeProtectedRuntimeProbeDependency;

  temporaryValue2 = runtimeController;
  temporaryValue1 = temporaryValue2.uqh(finalizeProtectedRuntimeProbeDependency);
  return temporaryValue1;
}

// protection challenge stub
function protectedChallengeRoutine(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

// protected implemented stub
function solveHashThresholdChallenge(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

// protected implemented stub
function protectedTokenStateStep2(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

// protected implemented stub
function protectedTokenStateStep7(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

// protected implemented stub
function protectedTokenStateStep8(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

// protected implemented stub
function protectedTokenStateStep9(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function protectedTokenStateStep1(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function protectedTokenStateStep3(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function protectedTokenStateStep4(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function protectedTokenStateStep5(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function protectedTokenStateStep10(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function protectedTokenStateStep11(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function protectedTokenStateStep12(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}


//protected stub
function initializeSdkErrorReporter(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function protectedTransportStep1(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function protectedTransportStep2(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function protectedTransportStep3(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function protectedTransportStep4(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function protectedTransportStep5(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function captureOriginalFetch(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function protectedTransportStep6(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function inspectXmlHttpRequest(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//protected stub
function protectedTokenStateStep6(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

//cookies
function createCookieBackedProbe(parameter0, parameter1, parameter2, parameter3, parameter4, parameter5, argument7) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue5 = parameter4;
  let temporaryValue6 = parameter5;
  let temporaryValue7 = argument7;
    let localState1, localState2, localState3, localState4, probeIframeEnvironment, remoteFrameRegistry;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue5 = probeIframeEnvironment;
  temporaryValue2 = new Array(4);
  temporaryValue3 = parameter0;
  temporaryValue2[0] = temporaryValue3;
  temporaryValue3 = parameter1;
  temporaryValue2[1] = temporaryValue3;
  temporaryValue3 = parameter3;
  temporaryValue2[2] = temporaryValue3;
  temporaryValue3 = parameter5;
  temporaryValue2[3] = temporaryValue3;
  temporaryValue1 = Reflect.apply(temporaryValue5, undefined, temporaryValue2);
  localState1 = temporaryValue1;
  temporaryValue2 = function () { return removeProbeElement.apply(this, arguments); };
  localState2 = temporaryValue2;
  temporaryValue1 = argument7;
  temporaryValue2 = temporaryValue1 !== null;
  if (temporaryValue2) {
    temporaryValue1 = argument7;
    temporaryValue3 = undefined;
    temporaryValue6 = temporaryValue1 !== temporaryValue3;
    temporaryValue2 = temporaryValue6;
  }
  if (temporaryValue2) {
    temporaryValue4 = argument7;
    temporaryValue1 = temporaryValue4;
  } else {
    temporaryValue3 = remoteFrameRegistry;
    temporaryValue4 = new Array(1);
    temporaryValue5 = parameter0;
    temporaryValue4[0] = temporaryValue5;
    temporaryValue2 = Reflect.construct(temporaryValue3, temporaryValue4);
    temporaryValue1 = temporaryValue2;
  }
  localState3 = temporaryValue1;
  temporaryValue1 = argument7;
  temporaryValue3 = !temporaryValue1;
  if (temporaryValue3) {
    temporaryValue2 = localState3;
    temporaryValue4 = temporaryValue2.vpd;
    temporaryValue2 = temporaryValue4.then;
    temporaryValue3 = new Array(1);
    temporaryValue5 = function (parameter0) { return readProbeResult.apply(this, arguments); };
    temporaryValue3[0] = temporaryValue5;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, temporaryValue3);
    temporaryValue3 = undefined;
  }
  temporaryValue1 = function () { return appendProbeElement.apply(this, arguments); };
  localState4 = temporaryValue1;
  temporaryValue1 = {};
  temporaryValue2 = localState3;
  temporaryValue1.uvf = temporaryValue2;
  temporaryValue5 = localState1;
  temporaryValue1.zvf = temporaryValue5;
  temporaryValue2 = localState2;
  temporaryValue1.euv = temporaryValue2;
  temporaryValue2 = localState4;
  temporaryValue1.kjc = temporaryValue2;
  temporaryValue2 = function (parameter0, parameter1) { return createConfiguredProbe.apply(this, arguments); };
  temporaryValue1.gqa = temporaryValue2;
  return temporaryValue1;
}

function appendProbeElement() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue6;
  let localState1, capturedDependencyVariant1, capturedDependencyVariant2;

  localState1 = currentFunction;
  temporaryValue2 = capturedDependencyVariant1;
  temporaryValue3 = temporaryValue2.document;
  temporaryValue6 = temporaryValue3.body;
  temporaryValue2 = temporaryValue6.appendChild;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue6, [capturedDependencyVariant2]);
  return undefined;
}

function readCookieState(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, runtimeContextFactory;

  localState1 = undefined;
  temporaryValue1 = runtimeContextFactory;
  temporaryValue3 = parameter0;
  temporaryValue2 = temporaryValue1[temporaryValue3];
  localState1 = temporaryValue2;
  temporaryValue2 = globalThis.window;
  temporaryValue3 = temporaryValue2.document;
  temporaryValue2 = temporaryValue3.cookie;
  temporaryValue3 = temporaryValue2.includes;
  temporaryValue4 = localState1;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, [temporaryValue4]);
  if (temporaryValue1) {
    temporaryValue1 = globalThis.window;
    temporaryValue3 = temporaryValue1.document;
    temporaryValue2 = "".concat;
    temporaryValue4 = [localState1, "=; max-age=0; path=/;"];
    temporaryValue1 = Reflect.apply(temporaryValue2, "", temporaryValue4);
    temporaryValue3.cookie = temporaryValue1;
    return true;
  } else {
    return false;
  }
}

function cookieOperationStep1(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, localState3, runtimeConfigurationValidator, localState4;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  temporaryValue1 = parameter0;
  temporaryValue2 = undefined;
  temporaryValue4 = temporaryValue1 === temporaryValue2;
  if (!(temporaryValue4)) {
    temporaryValue1 = parameter0;
    temporaryValue3 = temporaryValue1 === null;
    temporaryValue4 = temporaryValue3;
  }
  if (temporaryValue4) {
    temporaryValue1 = undefined;
    return temporaryValue1;
  } else {
    temporaryValue3 = runtimeConfigurationValidator;
    temporaryValue1 = parameter0;
    temporaryValue2 = temporaryValue3(temporaryValue1);
    temporaryValue5 = !temporaryValue2;
    if (temporaryValue5) {
      temporaryValue2 = parameter1;
      temporaryValue3 = temporaryValue2.push;
      temporaryValue4 = ["resourceAddress must be a valid, absolute URL"];
      temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
      temporaryValue1 = undefined;
      return temporaryValue1;
    } else {
      localState2 = true;
      try {
        temporaryValue1 = globalThis.URL;
        temporaryValue2 = new Array(1);
        temporaryValue4 = parameter0;
        temporaryValue2[0] = temporaryValue4;
        temporaryValue3 = Reflect.construct(temporaryValue1, temporaryValue2);
        localState3 = temporaryValue3;
      } catch (error) {
        localState4 = error;
        temporaryValue2 = parameter1;
        temporaryValue3 = temporaryValue2.push;
        temporaryValue5 = ["resourceAddress must be a valid, absolute URL"];
        temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue5);
        localState2 = false;
      }
      temporaryValue3 = localState3;
      if (temporaryValue3) {
        temporaryValue4 = ["http:", "https:"];
        temporaryValue5 = temporaryValue4.includes;
        temporaryValue2 = [localState3.protocol];
        temporaryValue1 = Reflect.apply(temporaryValue5, temporaryValue4, temporaryValue2);
        temporaryValue2 = !temporaryValue1;
        temporaryValue3 = temporaryValue2;
      }
      if (temporaryValue3) {
        temporaryValue2 = parameter1;
        temporaryValue5 = temporaryValue2.push;
        temporaryValue4 = ["resourceAddress only supports http and https protocols"];
        temporaryValue1 = Reflect.apply(temporaryValue5, temporaryValue2, temporaryValue4);
        localState2 = false;
      }
      temporaryValue2 = parameter0;
      temporaryValue4 = temporaryValue2.endsWith;
      temporaryValue3 = ["/"];
      temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue3);
      temporaryValue2 = !temporaryValue1;
      if (temporaryValue2) {
        temporaryValue2 = parameter1;
        temporaryValue3 = temporaryValue2.push;
        temporaryValue4 = ["resourceAddress must end with a trailing /"];
        temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
        localState2 = false;
      }
      temporaryValue1 = localState2;
      if (temporaryValue1) {
        temporaryValue3 = parameter0;
        temporaryValue2 = temporaryValue3;
      } else {
        temporaryValue1 = undefined;
        temporaryValue2 = temporaryValue1;
      }
      return temporaryValue2;
    }
  }
}

function cookieOperationStep2(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = parameter0;
  temporaryValue2 = typeof temporaryValue1;
  temporaryValue1 = temporaryValue2 !== "string";
  if (!(temporaryValue1)) {
    temporaryValue2 = parameter0;
    temporaryValue3 = temporaryValue2 === "";
    temporaryValue1 = temporaryValue3;
  }
  if (temporaryValue1) {
    temporaryValue3 = parameter2;
    temporaryValue4 = temporaryValue3.push;
    temporaryValue2 = new Array(1);
    temporaryValue6 = "Endpoint ".concat;
    temporaryValue7 = new Array(2);
    temporaryValue8 = parameter1;
    temporaryValue7[0] = temporaryValue8;
    temporaryValue7[1] = ": domain must be a non-empty string";
    temporaryValue5 = Reflect.apply(temporaryValue6, "Endpoint ", temporaryValue7);
    temporaryValue2[0] = temporaryValue5;
    temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue2);
    return undefined;
  } else {
    temporaryValue2 = parameter0;
    temporaryValue3 = temporaryValue2 !== "*";
    if (temporaryValue3) {
      temporaryValue2 = parameter0;
      temporaryValue4 = temporaryValue2.includes;
      temporaryValue5 = ["*"];
      temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue5);
      temporaryValue3 = temporaryValue1;
    }
    if (temporaryValue3) {
      temporaryValue2 = parameter2;
      temporaryValue3 = temporaryValue2.push;
      temporaryValue4 = new Array(1);
      temporaryValue6 = "Endpoint ".concat;
      temporaryValue7 = new Array(2);
      temporaryValue8 = parameter1;
      temporaryValue7[0] = temporaryValue8;
      temporaryValue7[1] = ": domain must not contain wildcards unless it is exactly *";
      temporaryValue5 = Reflect.apply(temporaryValue6, "Endpoint ", temporaryValue7);
      temporaryValue4[0] = temporaryValue5;
      temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
      return undefined;
    } else {
      temporaryValue3 = parameter0;
      temporaryValue5 = temporaryValue3.includes;
      temporaryValue2 = ["://"];
      temporaryValue1 = Reflect.apply(temporaryValue5, temporaryValue3, temporaryValue2);
      if (temporaryValue1) {
        temporaryValue2 = parameter2;
        temporaryValue3 = temporaryValue2.push;
        temporaryValue5 = new Array(1);
        temporaryValue6 = "Endpoint ".concat;
        temporaryValue7 = new Array(2);
        temporaryValue8 = parameter1;
        temporaryValue7[0] = temporaryValue8;
        temporaryValue7[1] = ": domain must not include a protocol";
        temporaryValue4 = Reflect.apply(temporaryValue6, "Endpoint ", temporaryValue7);
        temporaryValue5[0] = temporaryValue4;
        temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue5);
      }
      return undefined;
    }
  }
}

function cookieOperationStep3(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue11;
  let localState1, runtimePolicy;

  localState1 = currentFunction;
  temporaryValue1 = parameter0;
  temporaryValue2 = undefined;
  temporaryValue3 = temporaryValue1 === temporaryValue2;
  if (temporaryValue3) {
    return undefined;
  } else {
    temporaryValue2 = parameter0;
    temporaryValue1 = typeof temporaryValue2;
    temporaryValue3 = temporaryValue1 !== "string";
    if (temporaryValue3) {
      temporaryValue2 = parameter2;
      temporaryValue4 = temporaryValue2.push;
      temporaryValue3 = new Array(1);
      temporaryValue6 = "Endpoint ".concat;
      temporaryValue7 = [parameter1, ": if provided, method must be a string"];
      temporaryValue5 = Reflect.apply(temporaryValue6, "Endpoint ", temporaryValue7);
      temporaryValue3[0] = temporaryValue5;
      temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue3);
      return undefined;
    } else {
      temporaryValue1 = parameter0;
      temporaryValue3 = temporaryValue1 !== "*";
      if (temporaryValue3) {
        temporaryValue2 = runtimePolicy;
        temporaryValue4 = temporaryValue2.includes;
        temporaryValue6 = new Array(1);
        temporaryValue7 = parameter0;
        temporaryValue6[0] = temporaryValue7;
        temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue6);
        temporaryValue2 = !temporaryValue1;
        temporaryValue3 = temporaryValue2;
      }
      if (temporaryValue3) {
        temporaryValue1 = parameter2;
        temporaryValue3 = temporaryValue1.push;
        temporaryValue4 = new Array(1);
        temporaryValue7 = "Endpoint ".concat;
        temporaryValue6 = parameter1;
        temporaryValue5 = Reflect.apply(temporaryValue7, "Endpoint ", [temporaryValue6, ": method must be a valid HTTP method or *"]);
        temporaryValue4[0] = temporaryValue5;
        temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue4);
      }
      return undefined;
    }
  }
}

function cookieOperationStep4() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue8;
  let remoteFrameState, documentLifecycleApi, remoteFrameManager;

  temporaryValue2 = remoteFrameState;
  temporaryValue4 = temporaryValue2.uwq;
  temporaryValue2 = temporaryValue4.vpd;
  temporaryValue5 = temporaryValue2.then;
  temporaryValue4 = new Array(1);
  temporaryValue3 = function (nestedParameter0) { return markRemoteFrameState.apply(this, arguments); };
  temporaryValue4[0] = temporaryValue3;
  temporaryValue1 = Reflect.apply(temporaryValue5, temporaryValue2, temporaryValue4);
  temporaryValue2 = undefined;
  temporaryValue2 = remoteFrameState;
  temporaryValue3 = temporaryValue2.uwq;
  temporaryValue2 = temporaryValue3.zbk;
  temporaryValue4 = new Array(2);
  temporaryValue5 = documentLifecycleApi;
  temporaryValue4[0] = temporaryValue5;
  temporaryValue4[1] = false;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue3, temporaryValue4);
  temporaryValue4 = remoteFrameManager;
  temporaryValue3 = temporaryValue4.qlj;
  temporaryValue4 = temporaryValue3.document;
  temporaryValue6 = temporaryValue4.body;
  temporaryValue2 = temporaryValue6.appendChild;
  temporaryValue5 = remoteFrameState.zvf;
  temporaryValue4 = temporaryValue5.zvf;
  temporaryValue3 = [undefined];
  temporaryValue3[0] = temporaryValue4;
  temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue6, temporaryValue3);
  return undefined;
}

//dom
function removeProbeElement() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, capturedDependency;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue1 = capturedDependency;
  temporaryValue3 = temporaryValue1.parentNode;
  localState2 = temporaryValue3;
  temporaryValue2 = temporaryValue3 === null;
  if (!(temporaryValue2)) {
    temporaryValue1 = localState2;
    temporaryValue3 = undefined;
    temporaryValue2 = temporaryValue1 === temporaryValue3;
  }
  if (temporaryValue2) {
    temporaryValue3 = undefined;
    temporaryValue1 = temporaryValue3;
  } else {
    temporaryValue2 = localState2;
    temporaryValue3 = temporaryValue2.removeChild(capturedDependency);
    temporaryValue1 = temporaryValue3;
  }
  return temporaryValue1;
}

function readProbeResult(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8;
  let localState1, localState2, localState3, localState4, readProbeResultDependency, capturedDependencyVariant1, capturedDependencyVariant2, RemoteFrameTimeoutError;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue5 = readProbeResultDependency;
  temporaryValue1 = temporaryValue5();
  temporaryValue2 = capturedDependencyVariant1;
  temporaryValue3 = !temporaryValue2;
  if (!(temporaryValue3)) {
    temporaryValue2 = parameter0;
    temporaryValue1 = temporaryValue2 !== "timeout";
    temporaryValue3 = temporaryValue1;
  }
  if (temporaryValue3) {
    return undefined;
  } else {
    temporaryValue2 = capturedDependencyVariant2;
    temporaryValue1 = temporaryValue2();
    localState1 = temporaryValue1;
    temporaryValue2 = temporaryValue1 !== null;
    if (temporaryValue2) {
      temporaryValue3 = localState1;
      temporaryValue1 = undefined;
      temporaryValue4 = temporaryValue3 !== temporaryValue1;
      temporaryValue2 = temporaryValue4;
    }
    if (temporaryValue2) {
      temporaryValue4 = localState1;
      temporaryValue3 = temporaryValue4;
    } else {
      temporaryValue1 = {};
      temporaryValue3 = temporaryValue1;
    }
    localState2 = temporaryValue3;
    temporaryValue2 = localState2;
    temporaryValue1 = temporaryValue2.qeu;
    localState3 = temporaryValue1;
    temporaryValue1 = localState2;
    temporaryValue2 = temporaryValue1.lbk;
    localState4 = temporaryValue2;
    temporaryValue3 = capturedDependencyVariant1;
    temporaryValue1 = temporaryValue3.xmr;
    temporaryValue5 = RemoteFrameTimeoutError;
    temporaryValue6 = localState3;
    temporaryValue8 = ["Appended iframe didn't respond with configuration within 20 seconds.", undefined, undefined];
    temporaryValue8[1] = temporaryValue6;
    temporaryValue6 = localState4;
    temporaryValue8[2] = temporaryValue6;
    temporaryValue4 = Reflect.construct(temporaryValue5, temporaryValue8);
    temporaryValue2 = Reflect.apply(temporaryValue1, temporaryValue3, [temporaryValue4, 203]);
    temporaryValue1 = undefined;
    return undefined;
  }
}

function domProbe(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, domProbeDependency;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue1 = parameter1;
  temporaryValue2 = temporaryValue1.requestSubmit;
  temporaryValue4 = typeof temporaryValue2;
  temporaryValue1 = temporaryValue4 === "function";
  if (temporaryValue1) {
    temporaryValue2 = parameter2;
    if (temporaryValue2) {
      temporaryValue2 = parameter1;
      temporaryValue3 = temporaryValue2.requestSubmit;
      temporaryValue4 = new Array(1);
      temporaryValue5 = parameter2;
      temporaryValue4[0] = temporaryValue5;
      temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
      return undefined;
    } else {
      temporaryValue3 = parameter1;
      temporaryValue1 = temporaryValue3.requestSubmit;
      temporaryValue6 = [];
      temporaryValue2 = Reflect.apply(temporaryValue1, temporaryValue3, temporaryValue6);
      return undefined;
    }
  } else {
    temporaryValue1 = parameter2;
    if (temporaryValue1) {
      temporaryValue2 = parameter2;
      temporaryValue3 = temporaryValue2.type;
      temporaryValue2 = temporaryValue3 === "submit";
      temporaryValue1 = temporaryValue2;
    }
    if (temporaryValue1) {
      temporaryValue2 = parameter2;
      temporaryValue3 = temporaryValue2.click;
      temporaryValue4 = [];
      temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
      return undefined;
    } else {
      temporaryValue1 = domProbeDependency;
      temporaryValue2 = parameter0;
      temporaryValue4 = temporaryValue1(temporaryValue2, "submit");
      localState2 = temporaryValue4;
      temporaryValue2 = parameter1;
      temporaryValue4 = temporaryValue2.appendChild;
      temporaryValue3 = new Array(1);
      temporaryValue5 = localState2;
      temporaryValue3[0] = temporaryValue5;
      temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue3);
      temporaryValue1 = localState2;
      temporaryValue6 = temporaryValue1.click;
      temporaryValue4 = [];
      temporaryValue2 = Reflect.apply(temporaryValue6, temporaryValue1, temporaryValue4);
      temporaryValue2 = parameter1;
      temporaryValue5 = temporaryValue2.removeChild;
      temporaryValue3 = localState2;
      temporaryValue7 = [undefined];
      temporaryValue7[0] = temporaryValue3;
      temporaryValue1 = Reflect.apply(temporaryValue5, temporaryValue2, temporaryValue7);
      return undefined;
    }
  }
}

//encoding
function appendXorEncodedCharacter(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11, temporaryValue12, temporaryValue14;
  let appendXorEncodedCharacterDependencyVariant1, appendXorEncodedCharacterDependencyVariant2;

  temporaryValue1 = parameter0;
  temporaryValue3 = globalThis.String;
  temporaryValue8 = parameter1;
  temporaryValue7 = temporaryValue8.charCodeAt;
  temporaryValue6 = Reflect.apply(temporaryValue7, temporaryValue8, [0]);
  temporaryValue7 = appendXorEncodedCharacterDependencyVariant1;
  temporaryValue9 = temporaryValue7.charCodeAt;
  temporaryValue8 = Reflect.apply(temporaryValue9, temporaryValue7, [parameter2 % appendXorEncodedCharacterDependencyVariant2]);
  temporaryValue12 = temporaryValue6 ^ temporaryValue8;
  temporaryValue4 = [undefined];
  temporaryValue4[0] = temporaryValue12;
  temporaryValue2 = temporaryValue3.fromCharCode(...temporaryValue4);
  temporaryValue3 = temporaryValue1 + temporaryValue2;
  return temporaryValue3;
}

function decodeEncodedBlob(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue9;
  let localState1, localState2, localState3, localState4, localState5, localState6, localState7, localState8;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  localState6 = undefined;
  localState7 = undefined;
  localState8 = undefined;
  temporaryValue1 = parameter0;
  temporaryValue3 = temporaryValue1.zwq;
  localState1 = temporaryValue3;
  temporaryValue1 = parameter0;
  temporaryValue3 = temporaryValue1.egq;
  localState2 = temporaryValue3;
  temporaryValue2 = globalThis.atob;
  temporaryValue3 = localState1;
  temporaryValue6 = temporaryValue3.replace;
  temporaryValue7 = new Array(2);
  temporaryValue5 = new RegExp("[_-]", "g");
  temporaryValue7[0] = temporaryValue5;
  temporaryValue5 = function (parameter0) { return decodeBase64UrlCharacter.apply(this, arguments); };
  temporaryValue7[1] = temporaryValue5;
  temporaryValue4 = Reflect.apply(temporaryValue6, temporaryValue3, temporaryValue7);
  temporaryValue1 = temporaryValue2(temporaryValue4);
  localState3 = temporaryValue1;
  temporaryValue1 = localState2;
  temporaryValue3 = temporaryValue1.slice;
  temporaryValue4 = [0, 36];
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue4);
  localState4 = temporaryValue2;
  temporaryValue1 = localState4;
  temporaryValue2 = temporaryValue1.length;
  localState5 = temporaryValue2;
  localState6 = "";
  localState7 = 0;
  temporaryValue1 = localState7;
  temporaryValue2 = localState3;
  temporaryValue3 = temporaryValue2.length;
  temporaryValue2 = temporaryValue1 < temporaryValue3;
  while (temporaryValue2) {
    temporaryValue2 = localState3;
    temporaryValue3 = temporaryValue2.charCodeAt;
    temporaryValue4 = new Array(1);
    temporaryValue5 = localState7;
    temporaryValue4[0] = temporaryValue5;
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
    temporaryValue2 = localState4;
    temporaryValue4 = temporaryValue2.charCodeAt;
    temporaryValue5 = new Array(1);
    temporaryValue6 = localState7;
    temporaryValue7 = localState5;
    temporaryValue5[0] = temporaryValue6 % temporaryValue7;
    temporaryValue3 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue5);
    temporaryValue7 = temporaryValue1 ^ temporaryValue3;
    localState8 = temporaryValue7;
    temporaryValue1 = localState6;
    temporaryValue3 = globalThis.String;
    temporaryValue5 = temporaryValue3.fromCharCode;
    temporaryValue4 = new Array(1);
    temporaryValue6 = localState8;
    temporaryValue4[0] = temporaryValue6;
    temporaryValue2 = Reflect.apply(temporaryValue5, temporaryValue3, temporaryValue4);
    temporaryValue2 = temporaryValue1 + temporaryValue2;
    localState6 = temporaryValue2;
    temporaryValue1 = localState7;
    temporaryValue2 = 1;
    temporaryValue2 = temporaryValue1 + temporaryValue2;
    localState7 = temporaryValue2;
    continue;
  }
  temporaryValue1 = localState6;
  return temporaryValue1;
}

function encodingOperation(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2, dateClock;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue2 = JSON;
  temporaryValue4 = temporaryValue2.parse;
  temporaryValue5 = globalThis.atob(parameter0);
  temporaryValue3 = [undefined];
  temporaryValue3[0] = temporaryValue5;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue2, temporaryValue3);
  localState2 = temporaryValue1;
  temporaryValue3 = dateClock;
  temporaryValue4 = localState2;
  temporaryValue5 = temporaryValue4.dynamicConfig;
  temporaryValue2 = {  };
  temporaryValue2.vfp = temporaryValue5;
  temporaryValue4 = localState2;
  temporaryValue5 = temporaryValue4.featureFlags;
  temporaryValue2.qaw = temporaryValue5;
  temporaryValue1 = temporaryValue3(temporaryValue2);
  return temporaryValue1;
}

//event handlers
function createWindowCustomEvent(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue8, temporaryValue9, temporaryValue11;
  let localState1, createWindowCustomEventDependency;

  localState1 = currentFunction;
  temporaryValue2 = parameter0;
  temporaryValue3 = temporaryValue2.CustomEvent;
  temporaryValue4 = parameter1;
  temporaryValue2 = [undefined, undefined];
  temporaryValue2[0] = temporaryValue4;
  temporaryValue6 = objectSpread2({  }, createWindowCustomEventDependency);
  temporaryValue9 = parameter2;
  temporaryValue4 = objectSpread2(temporaryValue6, temporaryValue9);
  temporaryValue2[1] = temporaryValue4;
  temporaryValue1 = Reflect.construct(temporaryValue3, temporaryValue2);
  return temporaryValue1;
}

// Lifecycle
function documentLifecycleOperation(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4;
  let localState1;

  localState1 = currentFunction;
  temporaryValue2 = Promise;
  temporaryValue3 = new Array(1);
  temporaryValue4 = function (parameter0) { return runWhenDocumentReady.apply(this, arguments); };
  temporaryValue3[0] = temporaryValue4;
  temporaryValue1 = Reflect.construct(temporaryValue2, temporaryValue3);
  return temporaryValue1;
}

function runWhenDocumentReady(parameter0) {
  let temporaryValue1 = parameter0;
  let temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let runWhenDocumentReadyDependency;

  temporaryValue2 = runWhenDocumentReadyDependency;
  temporaryValue4 = temporaryValue2.document;
  temporaryValue1 = temporaryValue4.readyState;
  temporaryValue2 = temporaryValue1 !== "loading";
  if (temporaryValue2) {
    temporaryValue2 = parameter0;
    temporaryValue1 = temporaryValue2();
  }
  temporaryValue2 = runWhenDocumentReadyDependency;
  temporaryValue3 = temporaryValue2.document;
  temporaryValue5 = temporaryValue3.addEventListener;
  temporaryValue4 = new Array(2);
  temporaryValue4[0] = "DOMContentLoaded";
  temporaryValue2 = function () { return handleDomContentLoaded.apply(this, arguments); };
  temporaryValue4[1] = temporaryValue2;
  temporaryValue1 = Reflect.apply(temporaryValue5, temporaryValue3, temporaryValue4);
  temporaryValue1 = runWhenDocumentReadyDependency;
  temporaryValue3 = temporaryValue1.addEventListener;
  temporaryValue4 = new Array(2);
  temporaryValue4[0] = "load";
  temporaryValue6 = function () { return handleWindowLoad.apply(this, arguments); };
  temporaryValue4[1] = temporaryValue6;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue4);
  return undefined;
}

function installDocumentLifecycleHook(parameter0, parameter1, wrapSend = true) {
  capturedStateApply_2438.apply(this, arguments);
  const normalized = parseUrlAgainstWindow(installDocumentLifecycleHookDependencyVariant1, parameter1);
  if (!installDocumentLifecycleHookCallback(parameter0, normalized)) return;

  this.addEventListener("readystatechange", protectedTokenStateStep6);
  const wrapperFactory = wrapSend ? installDocumentLifecycleHookDependencyVariant2 : installDocumentLifecycleHookDependencyVariant3;
  const wrapperMode = wrapSend ? installDocumentLifecycleHookDependencyVariant4 : installDocumentLifecycleHookDependencyVariant5;
  this.send = wrapperFactory(
    wrapperMode,
    this,
    this.send.bind(this),
    parameter0,
    normalized,
    installDocumentLifecycleHookDependencyVariant6,
  );
}

//navigator
function collectUserAgentContext(context, parameter1, parameter2) {
  let temporaryValue1 = context;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5;
  let localState1, localState2, readCookieState;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue2 = readCookieState;
  temporaryValue1 = temporaryValue2("session");
  if (temporaryValue1) {
    temporaryValue1 = {};
    temporaryValue1.xlj = false;
    return temporaryValue1;
  } else {
    temporaryValue1 = parameter1;
    temporaryValue3 = !temporaryValue1;
    if (!(temporaryValue3)) {
      temporaryValue1 = parameter1;
      temporaryValue2 = typeof temporaryValue1;
      temporaryValue5 = temporaryValue2 !== "object";
      temporaryValue3 = temporaryValue5;
    }
    if (temporaryValue3) {
      temporaryValue3 = {};
      temporaryValue3.xlj = false;
      return temporaryValue3;
    } else {
      temporaryValue4 = context;
      temporaryValue2 = temporaryValue4.every;
      temporaryValue3 = new Array(1);
      temporaryValue5 = function (context) { return protectedTokenStateStep11.apply(this, arguments); };
      temporaryValue3[0] = temporaryValue5;
      temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, temporaryValue3);
      localState2 = temporaryValue1;
      temporaryValue1 = localState2;
      if (temporaryValue1) {
        temporaryValue1 = {};
        temporaryValue1.xlj = true;
        temporaryValue3 = parameter1;
        temporaryValue1.nwq = temporaryValue3;
        temporaryValue2 = temporaryValue1;
      } else {
        temporaryValue1 = {};
        temporaryValue1.xlj = false;
        temporaryValue2 = temporaryValue1;
      }
      return temporaryValue2;
    }
  }
}

function collectNavigatorIdentityVariant1(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8;
  let localState1, localState2, localState3, localState4, localState5, readLocalStorageState, collectNavigatorIdentityDependencyVariant1, collectNavigatorIdentityDependencyVariant2, removeStorageEntry;

  localState1 = currentFunction;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  localState5 = undefined;
  temporaryValue2 = readLocalStorageState;
  temporaryValue6 = {};
  temporaryValue5 = parameter1;
  temporaryValue6.window = temporaryValue5;
  temporaryValue4 = parameter2;
  temporaryValue5 = temporaryValue4.nhd;
  temporaryValue6.nhd = temporaryValue5;
  temporaryValue3 = parameter2;
  temporaryValue4 = temporaryValue3.rcn;
  temporaryValue6.rcn = temporaryValue4;
  temporaryValue1 = temporaryValue2(temporaryValue6);
  localState2 = temporaryValue1;
  temporaryValue2 = collectNavigatorIdentityDependencyVariant1;
  temporaryValue4 = parameter0;
  temporaryValue3 = localState2;
  temporaryValue5 = undefined;
  temporaryValue6 = temporaryValue3 === temporaryValue5;
  if (temporaryValue6) {
    temporaryValue6 = undefined;
    temporaryValue5 = temporaryValue6;
  } else {
    temporaryValue3 = collectNavigatorIdentityDependencyVariant2;
    temporaryValue7 = localState2;
    temporaryValue8 = temporaryValue3(temporaryValue7);
    temporaryValue5 = temporaryValue8;
  }
  temporaryValue3 = parameter1;
  temporaryValue6 = temporaryValue3.navigator;
  temporaryValue7 = temporaryValue6.userAgent;
  temporaryValue1 = temporaryValue2(temporaryValue4, temporaryValue5, temporaryValue7);
  localState3 = temporaryValue1;
  temporaryValue1 = localState3;
  temporaryValue2 = temporaryValue1.xlj;
  localState4 = temporaryValue2;
  temporaryValue1 = localState3;
  temporaryValue2 = temporaryValue1.nwq;
  localState5 = temporaryValue2;
  temporaryValue2 = localState4;
  temporaryValue1 = !temporaryValue2;
  if (temporaryValue1) {
    temporaryValue1 = removeStorageEntry;
    temporaryValue3 = {};
    temporaryValue4 = parameter1;
    temporaryValue3.window = temporaryValue4;
    temporaryValue4 = parameter2;
    temporaryValue5 = temporaryValue4.rcn;
    temporaryValue3.rcn = temporaryValue5;
    temporaryValue2 = temporaryValue1(temporaryValue3);
    temporaryValue1 = undefined;
    return temporaryValue1;
  } else {
    temporaryValue1 = localState5;
    return temporaryValue1;
  }
}

//runtime helpers
function createLazyCommonJsLoader(parameter0, parameter1) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let localState1;

  localState1 = currentFunction;
  temporaryValue1 = function () { return evaluateLazyCommonJsModule.apply(this, arguments); };
  return temporaryValue1;
}

function evaluateLazyCommonJsModule() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6;
  let localState1, evaluateLazyCommonJsModuleDependency;

  temporaryValue1 = localState1;
  if (!(temporaryValue1)) {
    temporaryValue3 = evaluateLazyCommonJsModuleDependency;
    temporaryValue6 = {  };
    temporaryValue6.exports = {  };
    localState1 = temporaryValue6;
    temporaryValue4 = localState1;
    temporaryValue2 = temporaryValue3(temporaryValue6.exports, temporaryValue4);
    temporaryValue1 = temporaryValue2;
  }
  temporaryValue1 = localState1;
  temporaryValue3 = temporaryValue1.exports;
  return temporaryValue3;
}

function defineEnumerableModuleBinding() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9;
  let localState1, localState2, copyEnumerableModuleBindingsDependencyVariant1, objectPrototype, copyEnumerableModuleBindingsDependencyVariant2, copyEnumerableModuleBindingsDependencyVariant3, objectDefineProperty, objectGetOwnPropertyDescriptor, capturedDependency, localState3;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue4 = copyEnumerableModuleBindingsDependencyVariant1;
  temporaryValue1 = temporaryValue4.value;
  localState2 = temporaryValue1;
  temporaryValue3 = objectPrototype;
  temporaryValue4 = temporaryValue3.call;
  temporaryValue2 = new Array(2);
  temporaryValue6 = copyEnumerableModuleBindingsDependencyVariant2;
  temporaryValue2[0] = temporaryValue6;
  temporaryValue5 = localState2;
  temporaryValue2[1] = temporaryValue5;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue2);
  temporaryValue2 = !temporaryValue1;
  if (temporaryValue2) {
    temporaryValue1 = localState2;
    temporaryValue4 = copyEnumerableModuleBindingsDependencyVariant3;
    temporaryValue3 = temporaryValue1 !== temporaryValue4;
    temporaryValue2 = temporaryValue3;
  }
  if (temporaryValue2) {
    temporaryValue5 = objectDefineProperty;
    temporaryValue3 = copyEnumerableModuleBindingsDependencyVariant2;
    temporaryValue2 = localState2;
    temporaryValue6 = {};
    temporaryValue7 = function () { return readEnumerableModuleBinding.apply(this, arguments); };
    temporaryValue6.get = temporaryValue7;
    temporaryValue7 = objectGetOwnPropertyDescriptor;
    temporaryValue8 = localState2;
    temporaryValue4 = temporaryValue7(capturedDependency, temporaryValue8);
    localState3 = temporaryValue4;
    temporaryValue7 = !temporaryValue4;
    if (!(temporaryValue7)) {
      temporaryValue4 = localState3;
      temporaryValue8 = temporaryValue4.enumerable;
      temporaryValue7 = temporaryValue8;
    }
    temporaryValue6.enumerable = temporaryValue7;
    temporaryValue1 = temporaryValue5(temporaryValue3, temporaryValue2, temporaryValue6);
  }
  return undefined;
}

function readEnumerableModuleBinding() {
  let temporaryValue1, temporaryValue2, temporaryValue3;
  let localState1, capturedDependency, readEnumerableModuleBindingDependency;

  localState1 = currentFunction;
  return capturedDependency[readEnumerableModuleBindingDependency];
}

function interopRequireWildcard(parameter0, parameter1, parameter2) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4, temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8;
  let localState1, objectDefinePropertyVariant1, hasOwnProperty, capturedDependency, objectDefinePropertyVariant2;

  localState1 = currentFunction;
  temporaryValue2 = parameter0;
  temporaryValue1 = temporaryValue2 != null;
  if (temporaryValue1) {
    temporaryValue2 = objectDefinePropertyVariant1;
    temporaryValue4 = hasOwnProperty;
    temporaryValue5 = parameter0;
    temporaryValue6 = temporaryValue4(temporaryValue5);
    temporaryValue1 = temporaryValue2(temporaryValue6);
    temporaryValue3 = temporaryValue1;
  } else {
    temporaryValue2 = {};
    temporaryValue3 = temporaryValue2;
  }
  parameter2 = temporaryValue3;
  temporaryValue2 = capturedDependency;
  temporaryValue3 = parameter1;
  if (!(temporaryValue3)) {
    temporaryValue4 = parameter0;
    temporaryValue5 = !temporaryValue4;
    temporaryValue3 = temporaryValue5;
  }
  if (!(temporaryValue3)) {
    temporaryValue5 = parameter0;
    temporaryValue4 = temporaryValue5.__esModule;
    temporaryValue5 = !temporaryValue4;
    temporaryValue3 = temporaryValue5;
  }
  if (temporaryValue3) {
    temporaryValue6 = objectDefinePropertyVariant2;
    temporaryValue4 = parameter2;
    temporaryValue3 = temporaryValue6(temporaryValue4, "default", { value: parameter0, enumerable: true });
    temporaryValue5 = temporaryValue3;
  } else {
    temporaryValue3 = parameter2;
    temporaryValue5 = temporaryValue3;
  }
  temporaryValue3 = parameter0;
  temporaryValue1 = temporaryValue2(temporaryValue5, temporaryValue3);
  return temporaryValue1;
}

function noopModuleInitializerA() {
  return undefined;
}

function noopModuleInitializerB() {
  return undefined;
}

// Visibility
function probeIframeEnvironment(parameter0, parameter1, parameter2, parameter3) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue5, temporaryValue6, temporaryValue7, temporaryValue8, temporaryValue9, temporaryValue10, temporaryValue11, temporaryValue12;
  let localState1, localState2, localState3, localState4, requestHeaderName, readRequestHeaderValue, fetchTransport, runtimeEnvironment;

  localState1 = undefined;
  localState2 = undefined;
  localState3 = undefined;
  localState4 = undefined;
  temporaryValue3 = parameter0;
  temporaryValue4 = temporaryValue3.document;
  temporaryValue3 = temporaryValue4.createElement;
  temporaryValue2 = ["iframe"];
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue4, temporaryValue2);
  localState1 = temporaryValue1;
  temporaryValue2 = parameter2;
  temporaryValue3 = temporaryValue2 !== null;
  if (temporaryValue3) {
    temporaryValue1 = parameter2;
    temporaryValue4 = undefined;
    temporaryValue2 = temporaryValue1 !== temporaryValue4;
    temporaryValue3 = temporaryValue2;
  }
  if (temporaryValue3) {
    temporaryValue2 = parameter2;
    temporaryValue4 = temporaryValue2;
  } else {
    temporaryValue1 = parameter0;
    temporaryValue2 = temporaryValue1.location;
    temporaryValue1 = temporaryValue2.protocol;
    temporaryValue2 = temporaryValue1 === "http:";
    if (temporaryValue2) {
      temporaryValue1 = "http:";
    } else {
      temporaryValue1 = "https:";
    }
    temporaryValue4 = temporaryValue1;
  }
  localState2 = temporaryValue4;
  temporaryValue4 = "?".concat;
  temporaryValue5 = new Array(2);
  temporaryValue2 = requestHeaderName;
  temporaryValue5[0] = temporaryValue2;
  temporaryValue5[1] = "=";
  temporaryValue3 = Reflect.apply(temporaryValue4, "?", temporaryValue5);
  temporaryValue4 = temporaryValue3.concat;
  temporaryValue2 = new Array(1);
  temporaryValue6 = readRequestHeaderValue;
  temporaryValue5 = temporaryValue6();
  temporaryValue2[0] = temporaryValue5;
  temporaryValue1 = Reflect.apply(temporaryValue4, temporaryValue3, temporaryValue2);
  localState3 = temporaryValue1;
  temporaryValue1 = parameter3;
  if (temporaryValue1) {
    temporaryValue2 = "&".concat;
    temporaryValue6 = new Array(2);
    temporaryValue5 = fetchTransport;
    temporaryValue6[0] = temporaryValue5;
    temporaryValue6[1] = "=";
    temporaryValue4 = Reflect.apply(temporaryValue2, "&", temporaryValue6);
    temporaryValue2 = temporaryValue4.concat;
    temporaryValue6 = new Array(1);
    temporaryValue5 = parameter3;
    temporaryValue6[0] = temporaryValue5;
    temporaryValue1 = Reflect.apply(temporaryValue2, temporaryValue4, temporaryValue6);
    temporaryValue3 = temporaryValue1;
  } else {
    temporaryValue3 = "";
  }
  localState4 = temporaryValue3;
  temporaryValue4 = localState1;
  temporaryValue3 = temporaryValue4.setAttribute;
  temporaryValue1 = new Array(2);
  temporaryValue1[0] = "src";
  temporaryValue9 = "".concat;
  temporaryValue12 = localState2;
  temporaryValue8 = [undefined, undefined];
  temporaryValue8[0] = temporaryValue12;
  temporaryValue8[1] = "//";
  temporaryValue7 = Reflect.apply(temporaryValue9, "", temporaryValue8);
  temporaryValue8 = temporaryValue7.concat;
  temporaryValue9 = parameter1;
  temporaryValue12 = [undefined];
  temporaryValue12[0] = temporaryValue9;
  temporaryValue11 = Reflect.apply(temporaryValue8, temporaryValue7, temporaryValue12);
  temporaryValue7 = temporaryValue11.concat;
  temporaryValue9 = runtimeEnvironment;
  temporaryValue12 = temporaryValue9.ypd;
  temporaryValue8 = [undefined];
  temporaryValue8[0] = temporaryValue12;
  temporaryValue6 = Reflect.apply(temporaryValue7, temporaryValue11, temporaryValue8);
  temporaryValue7 = temporaryValue6.concat;
  temporaryValue12 = localState3;
  temporaryValue8 = [undefined];
  temporaryValue8[0] = temporaryValue12;
  temporaryValue10 = Reflect.apply(temporaryValue7, temporaryValue6, temporaryValue8);
  temporaryValue6 = temporaryValue10.concat;
  temporaryValue8 = localState4;
  temporaryValue7 = [undefined];
  temporaryValue7[0] = temporaryValue8;
  temporaryValue5 = Reflect.apply(temporaryValue6, temporaryValue10, temporaryValue7);
  temporaryValue1[1] = temporaryValue5;
  temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue4, temporaryValue1);
  temporaryValue1 = localState1;
  temporaryValue2 = temporaryValue1.style;
  temporaryValue2.width = "0";
  temporaryValue1 = localState1;
  temporaryValue2 = temporaryValue1.style;
  temporaryValue2.height = "0";
  temporaryValue2 = localState1;
  temporaryValue1 = temporaryValue2.style;
  temporaryValue1.border = "0";
  temporaryValue1 = localState1;
  temporaryValue2 = temporaryValue1.style;
  temporaryValue2.position = "absolute";
  temporaryValue1 = localState1;
  temporaryValue2 = temporaryValue1.style;
  temporaryValue2.top = "0";
  temporaryValue1 = localState1;
  temporaryValue2 = temporaryValue1.style;
  temporaryValue2.left = "0";
  temporaryValue2 = localState1;
  temporaryValue1 = temporaryValue2.style;
  temporaryValue1.visibility = "hidden";
  temporaryValue5 = localState1;
  temporaryValue3 = temporaryValue5.setAttribute;
  temporaryValue2 = ["aria-hidden", "true"];
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue5, temporaryValue2);
  temporaryValue1 = localState1;
  return temporaryValue1;
}

function initializeBufferedLifecycleLogger(parameter0, parameter1, parameter2, parameter3) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, initializeBufferedLifecycleLogger, logBufferStateEnum;

  localState1 = undefined;
  temporaryValue1 = this;
  localState1 = temporaryValue1;
  temporaryValue2 = classCallCheck;
  temporaryValue4 = this;
  temporaryValue3 = initializeBufferedLifecycleLogger;
  temporaryValue1 = temporaryValue2(temporaryValue4, temporaryValue3);
  temporaryValue2 = this;
  temporaryValue3 = parameter0;
  temporaryValue2.gvf = temporaryValue3;
  temporaryValue2 = this;
  temporaryValue3 = parameter1;
  temporaryValue2.rbk = temporaryValue3;
  temporaryValue1 = this;
  temporaryValue2 = parameter2;
  temporaryValue1.jgq = temporaryValue2;
  temporaryValue2 = this;
  temporaryValue4 = parameter3;
  temporaryValue2.nrc = temporaryValue4;
  temporaryValue1 = this;
  temporaryValue3 = [];
  temporaryValue1.ykj = temporaryValue3;
  temporaryValue1 = this;
  temporaryValue2 = logBufferStateEnum;
  temporaryValue3 = temporaryValue2.zsj;
  temporaryValue1.vwq = temporaryValue3;
  temporaryValue3 = this;
  temporaryValue3.qgq = null;
  temporaryValue3 = globalThis.window;
  temporaryValue2 = temporaryValue3.document;
  temporaryValue3 = temporaryValue2.addEventListener;
  temporaryValue5 = new Array(2);
  temporaryValue5[0] = "visibilitychange";
  temporaryValue6 = function () { return handleVisibilityHidden.apply(this, arguments); };
  temporaryValue5[1] = temporaryValue6;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue5);
  temporaryValue2 = globalThis.window;
  temporaryValue3 = temporaryValue2.addEventListener;
  temporaryValue5 = new Array(2);
  temporaryValue5[0] = "pagehide";
  temporaryValue7 = function () { return handlePageHide.apply(this, arguments); };
  temporaryValue5[1] = temporaryValue7;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue5);
  return undefined;
}

function handleVisibilityHidden() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4;
  let capturedDependency;

  temporaryValue1 = globalThis.window;
  temporaryValue2 = temporaryValue1.document;
  temporaryValue1 = temporaryValue2.visibilityState;
  temporaryValue3 = temporaryValue1 === "hidden";
  if (temporaryValue3) {
    temporaryValue2 = capturedDependency;
    temporaryValue3 = temporaryValue2.lnh;
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, []);
  }
  return undefined;
}

function visibilityOperationStep1(parameter0, parameter1, parameter2, parameter3) {
  let temporaryValue1 = parameter0;
  let temporaryValue2 = parameter1;
  let temporaryValue3 = parameter2;
  let temporaryValue4 = parameter3;
  let temporaryValue5, temporaryValue6, temporaryValue7;
  let localState1, localState2;

  localState1 = currentFunction;
  localState2 = undefined;
  temporaryValue3 = parameter0;
  temporaryValue5 = temporaryValue3.document;
  temporaryValue3 = temporaryValue5.createElement;
  temporaryValue2 = ["input"];
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue5, temporaryValue2);
  localState2 = temporaryValue1;
  temporaryValue2 = localState2;
  temporaryValue3 = temporaryValue2.setAttribute;
  temporaryValue4 = new Array(2);
  temporaryValue4[0] = "type";
  temporaryValue5 = parameter1;
  temporaryValue4[1] = temporaryValue5;
  temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
  temporaryValue3 = localState2;
  temporaryValue1 = temporaryValue3.setAttribute;
  temporaryValue4 = ["hidden", "true"];
  temporaryValue2 = Reflect.apply(temporaryValue1, temporaryValue3, temporaryValue4);
  temporaryValue1 = parameter2;
  temporaryValue3 = typeof temporaryValue1;
  temporaryValue1 = temporaryValue3 === "string";
  if (temporaryValue1) {
    temporaryValue2 = localState2;
    temporaryValue3 = temporaryValue2.setAttribute;
    temporaryValue4 = ["name", parameter2];
    temporaryValue1 = Reflect.apply(temporaryValue3, temporaryValue2, temporaryValue4);
  }
  temporaryValue2 = parameter3;
  temporaryValue4 = typeof temporaryValue2;
  temporaryValue1 = temporaryValue4 === "string";
  if (temporaryValue1) {
    temporaryValue1 = localState2;
    temporaryValue3 = temporaryValue1.setAttribute;
    temporaryValue4 = ["value", parameter3];
    temporaryValue2 = Reflect.apply(temporaryValue3, temporaryValue1, temporaryValue4);
  }
  temporaryValue1 = localState2;
  return temporaryValue1;
}

function visibilityOperationStep2() {
  let temporaryValue1, temporaryValue2, temporaryValue3, temporaryValue4;
  let visibilityOperationDependency;

  temporaryValue1 = visibilityOperationDependency;
  temporaryValue3 = temporaryValue1.qlj;
  temporaryValue1 = temporaryValue3.document;
  temporaryValue1 = temporaryValue1.visibilityState === "hidden";
  if (temporaryValue1) {
    temporaryValue1 = visibilityOperationDependency;
    temporaryValue3 = [];
    temporaryValue2 = temporaryValue1.xmz(...temporaryValue3);
  }
  return undefined;
}

function mainClientBootstrap(...args) {
  throw new Error("Protected challenge/token transformation omitted.");
}

const ReconstructedKpsdk = Object.freeze({
  KpsdkClient,
  SdkRuntimeController,
  ObservableClientState,
  RuntimeContextRegistry,
  RemoteFrameContextManager,
  SdkLogger,
  BufferedLifecycleLogger,
  SdkErrorReporter,
  PerformanceTimeline,
  DeferredReadySignal,
  SdkDiagnosticError,
});