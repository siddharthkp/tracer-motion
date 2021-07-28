'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var framerMotion = require('framer-motion');
var leva = require('leva');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// because we can't call the hook conditionally (rule of hooks)
// so we initialise all TargetProperties
// uncomment this line to chase the types:
// import { Target } from 'framer-motion';

var useMotionValues = function useMotionValues(initial) {
  var motionValues = {
    // TransformProperties
    x: framerMotion.useMotionValue(initial.x),
    y: framerMotion.useMotionValue(initial.y),
    z: framerMotion.useMotionValue(initial.z),
    translateX: framerMotion.useMotionValue(initial.translateX),
    translateY: framerMotion.useMotionValue(initial.translateY),
    translateZ: framerMotion.useMotionValue(initial.translateZ),
    rotate: framerMotion.useMotionValue(initial.rotate),
    rotateX: framerMotion.useMotionValue(initial.rotateX),
    rotateY: framerMotion.useMotionValue(initial.rotateY),
    rotateZ: framerMotion.useMotionValue(initial.rotateZ),
    scale: framerMotion.useMotionValue(initial.scale),
    scaleX: framerMotion.useMotionValue(initial.scaleX),
    scaleY: framerMotion.useMotionValue(initial.scaleY),
    scaleZ: framerMotion.useMotionValue(initial.scaleZ),
    skew: framerMotion.useMotionValue(initial.skew),
    skewX: framerMotion.useMotionValue(initial.skewX),
    skewY: framerMotion.useMotionValue(initial.skewY),
    originX: framerMotion.useMotionValue(initial.originX),
    originY: framerMotion.useMotionValue(initial.originY),
    originZ: framerMotion.useMotionValue(initial.originZ),
    perspective: framerMotion.useMotionValue(initial.perspective),
    transformPerspective: framerMotion.useMotionValue(initial.transformPerspective),
    // CustomStyles
    size: framerMotion.useMotionValue(initial.size),
    radius: framerMotion.useMotionValue(initial.radius),
    shadow: framerMotion.useMotionValue(initial.shadow),
    image: framerMotion.useMotionValue(initial.image),
    // SVGPathProperties
    pathLength: framerMotion.useMotionValue(initial.pathLength),
    pathOffset: framerMotion.useMotionValue(initial.pathOffset),
    pathSpacing: framerMotion.useMotionValue(initial.pathSpacing),
    // StandardLonghandProperties
    alignContent: framerMotion.useMotionValue(initial.alignContent),
    alignItems: framerMotion.useMotionValue(initial.alignItems),
    alignSelf: framerMotion.useMotionValue(initial.alignSelf),
    alignTracks: framerMotion.useMotionValue(initial.alignTracks),
    animationDelay: framerMotion.useMotionValue(initial.animationDelay),
    animationDirection: framerMotion.useMotionValue(initial.animationDirection),
    animationDuration: framerMotion.useMotionValue(initial.animationDuration),
    animationFillMode: framerMotion.useMotionValue(initial.animationFillMode),
    animationIterationCount: framerMotion.useMotionValue(initial.animationIterationCount),
    animationName: framerMotion.useMotionValue(initial.animationName),
    animationPlayState: framerMotion.useMotionValue(initial.animationPlayState),
    animationTimingFunction: framerMotion.useMotionValue(initial.animationTimingFunction),
    appearance: framerMotion.useMotionValue(initial.appearance),
    aspectRatio: framerMotion.useMotionValue(initial.aspectRatio),
    backdropFilter: framerMotion.useMotionValue(initial.backdropFilter),
    backfaceVisibility: framerMotion.useMotionValue(initial.backfaceVisibility),
    backgroundAttachment: framerMotion.useMotionValue(initial.backgroundAttachment),
    backgroundBlendMode: framerMotion.useMotionValue(initial.backgroundBlendMode),
    backgroundClip: framerMotion.useMotionValue(initial.backgroundClip),
    backgroundColor: framerMotion.useMotionValue(initial.backgroundColor),
    backgroundImage: framerMotion.useMotionValue(initial.backgroundImage),
    backgroundOrigin: framerMotion.useMotionValue(initial.backgroundOrigin),
    backgroundPosition: framerMotion.useMotionValue(initial.backgroundPosition),
    backgroundPositionX: framerMotion.useMotionValue(initial.backgroundPositionX),
    backgroundPositionY: framerMotion.useMotionValue(initial.backgroundPositionY),
    backgroundRepeat: framerMotion.useMotionValue(initial.backgroundRepeat),
    backgroundSize: framerMotion.useMotionValue(initial.backgroundSize),
    blockOverflow: framerMotion.useMotionValue(initial.blockOverflow),
    blockSize: framerMotion.useMotionValue(initial.blockSize),
    borderBlockColor: framerMotion.useMotionValue(initial.borderBlockColor),
    borderBlockEndColor: framerMotion.useMotionValue(initial.borderBlockEndColor),
    borderBlockEndStyle: framerMotion.useMotionValue(initial.borderBlockEndStyle),
    borderBlockEndWidth: framerMotion.useMotionValue(initial.borderBlockEndWidth),
    borderBlockStartColor: framerMotion.useMotionValue(initial.borderBlockStartColor),
    borderBlockStartStyle: framerMotion.useMotionValue(initial.borderBlockStartStyle),
    borderBlockStartWidth: framerMotion.useMotionValue(initial.borderBlockStartWidth),
    borderBlockStyle: framerMotion.useMotionValue(initial.borderBlockStyle),
    borderBlockWidth: framerMotion.useMotionValue(initial.borderBlockWidth),
    borderBottomColor: framerMotion.useMotionValue(initial.borderBottomColor),
    borderBottomLeftRadius: framerMotion.useMotionValue(initial.borderBottomLeftRadius),
    borderBottomRightRadius: framerMotion.useMotionValue(initial.borderBottomRightRadius),
    borderBottomStyle: framerMotion.useMotionValue(initial.borderBottomStyle),
    borderBottomWidth: framerMotion.useMotionValue(initial.borderBottomWidth),
    borderCollapse: framerMotion.useMotionValue(initial.borderCollapse),
    borderEndEndRadius: framerMotion.useMotionValue(initial.borderEndEndRadius),
    borderEndStartRadius: framerMotion.useMotionValue(initial.borderEndStartRadius),
    borderImageOutset: framerMotion.useMotionValue(initial.borderImageOutset),
    borderImageRepeat: framerMotion.useMotionValue(initial.borderImageRepeat),
    borderImageSlice: framerMotion.useMotionValue(initial.borderImageSlice),
    borderImageSource: framerMotion.useMotionValue(initial.borderImageSource),
    borderImageWidth: framerMotion.useMotionValue(initial.borderImageWidth),
    borderInlineColor: framerMotion.useMotionValue(initial.borderInlineColor),
    borderInlineEndColor: framerMotion.useMotionValue(initial.borderInlineEndColor),
    borderInlineEndStyle: framerMotion.useMotionValue(initial.borderInlineEndStyle),
    borderInlineEndWidth: framerMotion.useMotionValue(initial.borderInlineEndWidth),
    borderInlineStartColor: framerMotion.useMotionValue(initial.borderInlineStartColor),
    borderInlineStartStyle: framerMotion.useMotionValue(initial.borderInlineStartStyle),
    borderInlineStartWidth: framerMotion.useMotionValue(initial.borderInlineStartWidth),
    borderInlineStyle: framerMotion.useMotionValue(initial.borderInlineStyle),
    borderInlineWidth: framerMotion.useMotionValue(initial.borderInlineWidth),
    borderLeftColor: framerMotion.useMotionValue(initial.borderLeftColor),
    borderLeftStyle: framerMotion.useMotionValue(initial.borderLeftStyle),
    borderLeftWidth: framerMotion.useMotionValue(initial.borderLeftWidth),
    borderRightColor: framerMotion.useMotionValue(initial.borderRightColor),
    borderRightStyle: framerMotion.useMotionValue(initial.borderRightStyle),
    borderRightWidth: framerMotion.useMotionValue(initial.borderRightWidth),
    borderSpacing: framerMotion.useMotionValue(initial.borderSpacing),
    borderStartEndRadius: framerMotion.useMotionValue(initial.borderStartEndRadius),
    borderStartStartRadius: framerMotion.useMotionValue(initial.borderStartStartRadius),
    borderTopColor: framerMotion.useMotionValue(initial.borderTopColor),
    borderTopLeftRadius: framerMotion.useMotionValue(initial.borderTopLeftRadius),
    borderTopRightRadius: framerMotion.useMotionValue(initial.borderTopRightRadius),
    borderTopStyle: framerMotion.useMotionValue(initial.borderTopStyle),
    borderTopWidth: framerMotion.useMotionValue(initial.borderTopWidth),
    bottom: framerMotion.useMotionValue(initial.bottom),
    boxDecorationBreak: framerMotion.useMotionValue(initial.boxDecorationBreak),
    boxShadow: framerMotion.useMotionValue(initial.boxShadow),
    boxSizing: framerMotion.useMotionValue(initial.boxSizing),
    breakAfter: framerMotion.useMotionValue(initial.breakAfter),
    breakBefore: framerMotion.useMotionValue(initial.breakBefore),
    breakInside: framerMotion.useMotionValue(initial.breakInside),
    captionSide: framerMotion.useMotionValue(initial.captionSide),
    caretColor: framerMotion.useMotionValue(initial.caretColor),
    clear: framerMotion.useMotionValue(initial.clear),
    clipPath: framerMotion.useMotionValue(initial.clipPath),
    color: framerMotion.useMotionValue(initial.color),
    colorAdjust: framerMotion.useMotionValue(initial.colorAdjust),
    columnCount: framerMotion.useMotionValue(initial.columnCount),
    columnFill: framerMotion.useMotionValue(initial.columnFill),
    columnGap: framerMotion.useMotionValue(initial.columnGap),
    columnRuleColor: framerMotion.useMotionValue(initial.columnRuleColor),
    columnRuleStyle: framerMotion.useMotionValue(initial.columnRuleStyle),
    columnRuleWidth: framerMotion.useMotionValue(initial.columnRuleWidth),
    columnSpan: framerMotion.useMotionValue(initial.columnSpan),
    columnWidth: framerMotion.useMotionValue(initial.columnWidth),
    contain: framerMotion.useMotionValue(initial.contain),
    content: framerMotion.useMotionValue(initial.content),
    contentVisibility: framerMotion.useMotionValue(initial.contentVisibility),
    counterIncrement: framerMotion.useMotionValue(initial.counterIncrement),
    counterReset: framerMotion.useMotionValue(initial.counterReset),
    counterSet: framerMotion.useMotionValue(initial.counterSet),
    cursor: framerMotion.useMotionValue(initial.cursor),
    direction: framerMotion.useMotionValue(initial.direction),
    display: framerMotion.useMotionValue(initial.display),
    emptyCells: framerMotion.useMotionValue(initial.emptyCells),
    filter: framerMotion.useMotionValue(initial.filter),
    flexBasis: framerMotion.useMotionValue(initial.flexBasis),
    flexDirection: framerMotion.useMotionValue(initial.flexDirection),
    flexGrow: framerMotion.useMotionValue(initial.flexGrow),
    flexShrink: framerMotion.useMotionValue(initial.flexShrink),
    flexWrap: framerMotion.useMotionValue(initial.flexWrap),
    "float": framerMotion.useMotionValue(initial["float"]),
    fontFamily: framerMotion.useMotionValue(initial.fontFamily),
    fontFeatureSettings: framerMotion.useMotionValue(initial.fontFeatureSettings),
    fontKerning: framerMotion.useMotionValue(initial.fontKerning),
    fontLanguageOverride: framerMotion.useMotionValue(initial.fontLanguageOverride),
    fontOpticalSizing: framerMotion.useMotionValue(initial.fontOpticalSizing),
    fontSize: framerMotion.useMotionValue(initial.fontSize),
    fontSizeAdjust: framerMotion.useMotionValue(initial.fontSizeAdjust),
    fontSmooth: framerMotion.useMotionValue(initial.fontSmooth),
    fontStretch: framerMotion.useMotionValue(initial.fontStretch),
    fontStyle: framerMotion.useMotionValue(initial.fontStyle),
    fontSynthesis: framerMotion.useMotionValue(initial.fontSynthesis),
    fontVariant: framerMotion.useMotionValue(initial.fontVariant),
    fontVariantCaps: framerMotion.useMotionValue(initial.fontVariantCaps),
    fontVariantEastAsian: framerMotion.useMotionValue(initial.fontVariantEastAsian),
    fontVariantLigatures: framerMotion.useMotionValue(initial.fontVariantLigatures),
    fontVariantNumeric: framerMotion.useMotionValue(initial.fontVariantNumeric),
    fontVariantPosition: framerMotion.useMotionValue(initial.fontVariantPosition),
    fontVariationSettings: framerMotion.useMotionValue(initial.fontVariationSettings),
    fontWeight: framerMotion.useMotionValue(initial.fontWeight),
    forcedColorAdjust: framerMotion.useMotionValue(initial.forcedColorAdjust),
    gridAutoColumns: framerMotion.useMotionValue(initial.gridAutoColumns),
    gridAutoFlow: framerMotion.useMotionValue(initial.gridAutoFlow),
    gridAutoRows: framerMotion.useMotionValue(initial.gridAutoRows),
    gridColumnEnd: framerMotion.useMotionValue(initial.gridColumnEnd),
    gridColumnStart: framerMotion.useMotionValue(initial.gridColumnStart),
    gridRowEnd: framerMotion.useMotionValue(initial.gridRowEnd),
    gridRowStart: framerMotion.useMotionValue(initial.gridRowStart),
    gridTemplateAreas: framerMotion.useMotionValue(initial.gridTemplateAreas),
    gridTemplateColumns: framerMotion.useMotionValue(initial.gridTemplateColumns),
    gridTemplateRows: framerMotion.useMotionValue(initial.gridTemplateRows),
    hangingPunctuation: framerMotion.useMotionValue(initial.hangingPunctuation),
    height: framerMotion.useMotionValue(initial.height),
    hyphens: framerMotion.useMotionValue(initial.hyphens),
    imageOrientation: framerMotion.useMotionValue(initial.imageOrientation),
    imageRendering: framerMotion.useMotionValue(initial.imageRendering),
    imageResolution: framerMotion.useMotionValue(initial.imageResolution),
    initialLetter: framerMotion.useMotionValue(initial.initialLetter),
    inlineSize: framerMotion.useMotionValue(initial.inlineSize),
    inset: framerMotion.useMotionValue(initial.inset),
    insetBlock: framerMotion.useMotionValue(initial.insetBlock),
    insetBlockEnd: framerMotion.useMotionValue(initial.insetBlockEnd),
    insetBlockStart: framerMotion.useMotionValue(initial.insetBlockStart),
    insetInline: framerMotion.useMotionValue(initial.insetInline),
    insetInlineEnd: framerMotion.useMotionValue(initial.insetInlineEnd),
    insetInlineStart: framerMotion.useMotionValue(initial.insetInlineStart),
    isolation: framerMotion.useMotionValue(initial.isolation),
    justifyContent: framerMotion.useMotionValue(initial.justifyContent),
    justifyItems: framerMotion.useMotionValue(initial.justifyItems),
    justifySelf: framerMotion.useMotionValue(initial.justifySelf),
    justifyTracks: framerMotion.useMotionValue(initial.justifyTracks),
    left: framerMotion.useMotionValue(initial.left),
    letterSpacing: framerMotion.useMotionValue(initial.letterSpacing),
    lineBreak: framerMotion.useMotionValue(initial.lineBreak),
    lineHeight: framerMotion.useMotionValue(initial.lineHeight),
    lineHeightStep: framerMotion.useMotionValue(initial.lineHeightStep),
    listStyleImage: framerMotion.useMotionValue(initial.listStyleImage),
    listStylePosition: framerMotion.useMotionValue(initial.listStylePosition),
    listStyleType: framerMotion.useMotionValue(initial.listStyleType),
    marginBlock: framerMotion.useMotionValue(initial.marginBlock),
    marginBlockEnd: framerMotion.useMotionValue(initial.marginBlockEnd),
    marginBlockStart: framerMotion.useMotionValue(initial.marginBlockStart),
    marginBottom: framerMotion.useMotionValue(initial.marginBottom),
    marginInline: framerMotion.useMotionValue(initial.marginInline),
    marginInlineEnd: framerMotion.useMotionValue(initial.marginInlineEnd),
    marginInlineStart: framerMotion.useMotionValue(initial.marginInlineStart),
    marginLeft: framerMotion.useMotionValue(initial.marginLeft),
    marginRight: framerMotion.useMotionValue(initial.marginRight),
    marginTop: framerMotion.useMotionValue(initial.marginTop),
    maskBorderMode: framerMotion.useMotionValue(initial.maskBorderMode),
    maskBorderOutset: framerMotion.useMotionValue(initial.maskBorderOutset),
    maskBorderRepeat: framerMotion.useMotionValue(initial.maskBorderRepeat),
    maskBorderSlice: framerMotion.useMotionValue(initial.maskBorderSlice),
    maskBorderSource: framerMotion.useMotionValue(initial.maskBorderSource),
    maskBorderWidth: framerMotion.useMotionValue(initial.maskBorderWidth),
    maskClip: framerMotion.useMotionValue(initial.maskClip),
    maskComposite: framerMotion.useMotionValue(initial.maskComposite),
    maskImage: framerMotion.useMotionValue(initial.maskImage),
    maskMode: framerMotion.useMotionValue(initial.maskMode),
    maskOrigin: framerMotion.useMotionValue(initial.maskOrigin),
    maskPosition: framerMotion.useMotionValue(initial.maskPosition),
    maskRepeat: framerMotion.useMotionValue(initial.maskRepeat),
    maskSize: framerMotion.useMotionValue(initial.maskSize),
    maskType: framerMotion.useMotionValue(initial.maskType),
    mathStyle: framerMotion.useMotionValue(initial.mathStyle),
    maxBlockSize: framerMotion.useMotionValue(initial.maxBlockSize),
    maxHeight: framerMotion.useMotionValue(initial.maxHeight),
    maxInlineSize: framerMotion.useMotionValue(initial.maxInlineSize),
    maxLines: framerMotion.useMotionValue(initial.maxLines),
    maxWidth: framerMotion.useMotionValue(initial.maxWidth),
    minBlockSize: framerMotion.useMotionValue(initial.minBlockSize),
    minHeight: framerMotion.useMotionValue(initial.minHeight),
    minInlineSize: framerMotion.useMotionValue(initial.minInlineSize),
    minWidth: framerMotion.useMotionValue(initial.minWidth),
    mixBlendMode: framerMotion.useMotionValue(initial.mixBlendMode),
    motionDistance: framerMotion.useMotionValue(initial.motionDistance),
    motionPath: framerMotion.useMotionValue(initial.motionPath),
    motionRotation: framerMotion.useMotionValue(initial.motionRotation),
    objectFit: framerMotion.useMotionValue(initial.objectFit),
    objectPosition: framerMotion.useMotionValue(initial.objectPosition),
    offsetAnchor: framerMotion.useMotionValue(initial.offsetAnchor),
    offsetDistance: framerMotion.useMotionValue(initial.offsetDistance),
    offsetPath: framerMotion.useMotionValue(initial.offsetPath),
    offsetRotate: framerMotion.useMotionValue(initial.offsetRotate),
    offsetRotation: framerMotion.useMotionValue(initial.offsetRotation),
    opacity: framerMotion.useMotionValue(initial.opacity),
    order: framerMotion.useMotionValue(initial.order),
    orphans: framerMotion.useMotionValue(initial.orphans),
    outlineColor: framerMotion.useMotionValue(initial.outlineColor),
    outlineOffset: framerMotion.useMotionValue(initial.outlineOffset),
    outlineStyle: framerMotion.useMotionValue(initial.outlineStyle),
    outlineWidth: framerMotion.useMotionValue(initial.outlineWidth),
    overflowAnchor: framerMotion.useMotionValue(initial.overflowAnchor),
    overflowBlock: framerMotion.useMotionValue(initial.overflowBlock),
    overflowClipBox: framerMotion.useMotionValue(initial.overflowClipBox),
    overflowInline: framerMotion.useMotionValue(initial.overflowInline),
    overflowWrap: framerMotion.useMotionValue(initial.overflowWrap),
    overflowX: framerMotion.useMotionValue(initial.overflowX),
    overflowY: framerMotion.useMotionValue(initial.overflowY),
    overscrollBehavior: framerMotion.useMotionValue(initial.overscrollBehavior),
    overscrollBehaviorBlock: framerMotion.useMotionValue(initial.overscrollBehaviorBlock),
    overscrollBehaviorInline: framerMotion.useMotionValue(initial.overscrollBehaviorInline),
    overscrollBehaviorX: framerMotion.useMotionValue(initial.overscrollBehaviorX),
    overscrollBehaviorY: framerMotion.useMotionValue(initial.overscrollBehaviorY),
    paddingBlock: framerMotion.useMotionValue(initial.paddingBlock),
    paddingBlockEnd: framerMotion.useMotionValue(initial.paddingBlockEnd),
    paddingBlockStart: framerMotion.useMotionValue(initial.paddingBlockStart),
    paddingBottom: framerMotion.useMotionValue(initial.paddingBottom),
    paddingInline: framerMotion.useMotionValue(initial.paddingInline),
    paddingInlineEnd: framerMotion.useMotionValue(initial.paddingInlineEnd),
    paddingInlineStart: framerMotion.useMotionValue(initial.paddingInlineStart),
    paddingLeft: framerMotion.useMotionValue(initial.paddingLeft),
    paddingRight: framerMotion.useMotionValue(initial.paddingRight),
    paddingTop: framerMotion.useMotionValue(initial.paddingTop),
    pageBreakAfter: framerMotion.useMotionValue(initial.pageBreakAfter),
    pageBreakBefore: framerMotion.useMotionValue(initial.pageBreakBefore),
    pageBreakInside: framerMotion.useMotionValue(initial.pageBreakInside),
    paintOrder: framerMotion.useMotionValue(initial.paintOrder),
    // perspective: useMotionValue(initial.perspective),
    perspectiveOrigin: framerMotion.useMotionValue(initial.perspectiveOrigin),
    placeContent: framerMotion.useMotionValue(initial.placeContent),
    pointerEvents: framerMotion.useMotionValue(initial.pointerEvents),
    position: framerMotion.useMotionValue(initial.position),
    quotes: framerMotion.useMotionValue(initial.quotes),
    resize: framerMotion.useMotionValue(initial.resize),
    right: framerMotion.useMotionValue(initial.right),
    // rotate: useMotionValue(initial.rotate),
    rowGap: framerMotion.useMotionValue(initial.rowGap),
    rubyAlign: framerMotion.useMotionValue(initial.rubyAlign),
    rubyMerge: framerMotion.useMotionValue(initial.rubyMerge),
    rubyPosition: framerMotion.useMotionValue(initial.rubyPosition),
    // scale: useMotionValue(initial.scale),
    scrollBehavior: framerMotion.useMotionValue(initial.scrollBehavior),
    scrollMargin: framerMotion.useMotionValue(initial.scrollMargin),
    scrollMarginBlock: framerMotion.useMotionValue(initial.scrollMarginBlock),
    scrollMarginBlockEnd: framerMotion.useMotionValue(initial.scrollMarginBlockEnd),
    scrollMarginBlockStart: framerMotion.useMotionValue(initial.scrollMarginBlockStart),
    scrollMarginBottom: framerMotion.useMotionValue(initial.scrollMarginBottom),
    scrollMarginInline: framerMotion.useMotionValue(initial.scrollMarginInline),
    scrollMarginInlineEnd: framerMotion.useMotionValue(initial.scrollMarginInlineEnd),
    scrollMarginInlineStart: framerMotion.useMotionValue(initial.scrollMarginInlineStart),
    scrollMarginLeft: framerMotion.useMotionValue(initial.scrollMarginLeft),
    scrollMarginRight: framerMotion.useMotionValue(initial.scrollMarginRight),
    scrollMarginTop: framerMotion.useMotionValue(initial.scrollMarginTop),
    scrollPadding: framerMotion.useMotionValue(initial.scrollPadding),
    scrollPaddingBlock: framerMotion.useMotionValue(initial.scrollPaddingBlock),
    scrollPaddingBlockEnd: framerMotion.useMotionValue(initial.scrollPaddingBlockEnd),
    scrollPaddingBlockStart: framerMotion.useMotionValue(initial.scrollPaddingBlockStart),
    scrollPaddingBottom: framerMotion.useMotionValue(initial.scrollPaddingBottom),
    scrollPaddingInline: framerMotion.useMotionValue(initial.scrollPaddingInline),
    scrollPaddingInlineEnd: framerMotion.useMotionValue(initial.scrollPaddingInlineEnd),
    scrollPaddingInlineStart: framerMotion.useMotionValue(initial.scrollPaddingInlineStart),
    scrollPaddingLeft: framerMotion.useMotionValue(initial.scrollPaddingLeft),
    scrollPaddingRight: framerMotion.useMotionValue(initial.scrollPaddingRight),
    scrollPaddingTop: framerMotion.useMotionValue(initial.scrollPaddingTop),
    scrollSnapAlign: framerMotion.useMotionValue(initial.scrollSnapAlign),
    scrollSnapMargin: framerMotion.useMotionValue(initial.scrollSnapMargin),
    scrollSnapMarginBottom: framerMotion.useMotionValue(initial.scrollSnapMarginBottom),
    scrollSnapMarginLeft: framerMotion.useMotionValue(initial.scrollSnapMarginLeft),
    scrollSnapMarginRight: framerMotion.useMotionValue(initial.scrollSnapMarginRight),
    scrollSnapMarginTop: framerMotion.useMotionValue(initial.scrollSnapMarginTop),
    scrollSnapStop: framerMotion.useMotionValue(initial.scrollSnapStop),
    scrollSnapType: framerMotion.useMotionValue(initial.scrollSnapType),
    scrollbarColor: framerMotion.useMotionValue(initial.scrollbarColor),
    scrollbarGutter: framerMotion.useMotionValue(initial.scrollbarGutter),
    scrollbarWidth: framerMotion.useMotionValue(initial.scrollbarWidth),
    shapeImageThreshold: framerMotion.useMotionValue(initial.shapeImageThreshold),
    shapeMargin: framerMotion.useMotionValue(initial.shapeMargin),
    shapeOutside: framerMotion.useMotionValue(initial.shapeOutside),
    tabSize: framerMotion.useMotionValue(initial.tabSize),
    tableLayout: framerMotion.useMotionValue(initial.tableLayout),
    textAlign: framerMotion.useMotionValue(initial.textAlign),
    textAlignLast: framerMotion.useMotionValue(initial.textAlignLast),
    textCombineUpright: framerMotion.useMotionValue(initial.textCombineUpright),
    textDecorationColor: framerMotion.useMotionValue(initial.textDecorationColor),
    textDecorationLine: framerMotion.useMotionValue(initial.textDecorationLine),
    textDecorationSkip: framerMotion.useMotionValue(initial.textDecorationSkip),
    textDecorationSkipInk: framerMotion.useMotionValue(initial.textDecorationSkipInk),
    textDecorationStyle: framerMotion.useMotionValue(initial.textDecorationStyle),
    textDecorationThickness: framerMotion.useMotionValue(initial.textDecorationThickness),
    textDecorationWidth: framerMotion.useMotionValue(initial.textDecorationWidth),
    textEmphasisColor: framerMotion.useMotionValue(initial.textEmphasisColor),
    textEmphasisPosition: framerMotion.useMotionValue(initial.textEmphasisPosition),
    textEmphasisStyle: framerMotion.useMotionValue(initial.textEmphasisStyle),
    textIndent: framerMotion.useMotionValue(initial.textIndent),
    textJustify: framerMotion.useMotionValue(initial.textJustify),
    textOrientation: framerMotion.useMotionValue(initial.textOrientation),
    textOverflow: framerMotion.useMotionValue(initial.textOverflow),
    textRendering: framerMotion.useMotionValue(initial.textRendering),
    textShadow: framerMotion.useMotionValue(initial.textShadow),
    textSizeAdjust: framerMotion.useMotionValue(initial.textSizeAdjust),
    textTransform: framerMotion.useMotionValue(initial.textTransform),
    textUnderlineOffset: framerMotion.useMotionValue(initial.textUnderlineOffset),
    textUnderlinePosition: framerMotion.useMotionValue(initial.textUnderlinePosition),
    top: framerMotion.useMotionValue(initial.top),
    touchAction: framerMotion.useMotionValue(initial.touchAction),
    transform: framerMotion.useMotionValue(initial.transform),
    transformOrigin: framerMotion.useMotionValue(initial.transformOrigin),
    transformStyle: framerMotion.useMotionValue(initial.transformStyle),
    transitionDelay: framerMotion.useMotionValue(initial.transitionDelay),
    transitionDuration: framerMotion.useMotionValue(initial.transitionDuration),
    transitionProperty: framerMotion.useMotionValue(initial.transitionProperty),
    transitionTimingFunction: framerMotion.useMotionValue(initial.transitionTimingFunction),
    translate: framerMotion.useMotionValue(initial.translate),
    unicodeBidi: framerMotion.useMotionValue(initial.unicodeBidi),
    userSelect: framerMotion.useMotionValue(initial.userSelect),
    verticalAlign: framerMotion.useMotionValue(initial.verticalAlign),
    visibility: framerMotion.useMotionValue(initial.visibility),
    whiteSpace: framerMotion.useMotionValue(initial.whiteSpace),
    widows: framerMotion.useMotionValue(initial.widows),
    width: framerMotion.useMotionValue(initial.width),
    willChange: framerMotion.useMotionValue(initial.willChange),
    wordBreak: framerMotion.useMotionValue(initial.wordBreak),
    wordSpacing: framerMotion.useMotionValue(initial.wordSpacing),
    wordWrap: framerMotion.useMotionValue(initial.wordWrap),
    writingMode: framerMotion.useMotionValue(initial.writingMode),
    zIndex: framerMotion.useMotionValue(initial.zIndex),
    zoom: framerMotion.useMotionValue(initial.zoom),
    // StandardShorthandProperties
    all: framerMotion.useMotionValue(initial.all),
    animation: framerMotion.useMotionValue(initial.animation),
    background: framerMotion.useMotionValue(initial.background),
    border: framerMotion.useMotionValue(initial.border),
    borderBlock: framerMotion.useMotionValue(initial.borderBlock),
    borderBlockEnd: framerMotion.useMotionValue(initial.borderBlockEnd),
    borderBlockStart: framerMotion.useMotionValue(initial.borderBlockStart),
    borderBottom: framerMotion.useMotionValue(initial.borderBottom),
    borderColor: framerMotion.useMotionValue(initial.borderColor),
    borderImage: framerMotion.useMotionValue(initial.borderImage),
    borderInline: framerMotion.useMotionValue(initial.borderInline),
    borderInlineEnd: framerMotion.useMotionValue(initial.borderInlineEnd),
    borderInlineStart: framerMotion.useMotionValue(initial.borderInlineStart),
    borderLeft: framerMotion.useMotionValue(initial.borderLeft),
    borderRadius: framerMotion.useMotionValue(initial.borderRadius),
    borderRight: framerMotion.useMotionValue(initial.borderRight),
    borderStyle: framerMotion.useMotionValue(initial.borderStyle),
    borderTop: framerMotion.useMotionValue(initial.borderTop),
    borderWidth: framerMotion.useMotionValue(initial.borderWidth),
    columnRule: framerMotion.useMotionValue(initial.columnRule),
    columns: framerMotion.useMotionValue(initial.columns),
    flex: framerMotion.useMotionValue(initial.flex),
    flexFlow: framerMotion.useMotionValue(initial.flexFlow),
    font: framerMotion.useMotionValue(initial.font),
    gap: framerMotion.useMotionValue(initial.gap),
    grid: framerMotion.useMotionValue(initial.grid),
    gridArea: framerMotion.useMotionValue(initial.gridArea),
    gridColumn: framerMotion.useMotionValue(initial.gridColumn),
    gridRow: framerMotion.useMotionValue(initial.gridRow),
    gridTemplate: framerMotion.useMotionValue(initial.gridTemplate),
    lineClamp: framerMotion.useMotionValue(initial.lineClamp),
    listStyle: framerMotion.useMotionValue(initial.listStyle),
    margin: framerMotion.useMotionValue(initial.margin),
    mask: framerMotion.useMotionValue(initial.mask),
    maskBorder: framerMotion.useMotionValue(initial.maskBorder),
    motion: framerMotion.useMotionValue(initial.motion),
    offset: framerMotion.useMotionValue(initial.offset),
    outline: framerMotion.useMotionValue(initial.outline),
    overflow: framerMotion.useMotionValue(initial.overflow),
    padding: framerMotion.useMotionValue(initial.padding),
    placeItems: framerMotion.useMotionValue(initial.placeItems),
    placeSelf: framerMotion.useMotionValue(initial.placeSelf),
    textDecoration: framerMotion.useMotionValue(initial.textDecoration),
    textEmphasis: framerMotion.useMotionValue(initial.textEmphasis),
    transition: framerMotion.useMotionValue(initial.transition),
    // VendorLonghandProperties
    MozAnimationDelay: framerMotion.useMotionValue(initial.MozAnimationDelay),
    MozAnimationDirection: framerMotion.useMotionValue(initial.MozAnimationDirection),
    MozAnimationDuration: framerMotion.useMotionValue(initial.MozAnimationDuration),
    MozAnimationFillMode: framerMotion.useMotionValue(initial.MozAnimationFillMode),
    MozAnimationIterationCount: framerMotion.useMotionValue(initial.MozAnimationIterationCount),
    MozAnimationName: framerMotion.useMotionValue(initial.MozAnimationName),
    MozAnimationPlayState: framerMotion.useMotionValue(initial.MozAnimationPlayState),
    MozAnimationTimingFunction: framerMotion.useMotionValue(initial.MozAnimationTimingFunction),
    MozAppearance: framerMotion.useMotionValue(initial.MozAppearance),
    MozBackfaceVisibility: framerMotion.useMotionValue(initial.MozBackfaceVisibility),
    MozBorderBottomColors: framerMotion.useMotionValue(initial.MozBorderBottomColors),
    MozBorderEndColor: framerMotion.useMotionValue(initial.MozBorderEndColor),
    MozBorderEndStyle: framerMotion.useMotionValue(initial.MozBorderEndStyle),
    MozBorderEndWidth: framerMotion.useMotionValue(initial.MozBorderEndWidth),
    MozBorderLeftColors: framerMotion.useMotionValue(initial.MozBorderLeftColors),
    MozBorderRightColors: framerMotion.useMotionValue(initial.MozBorderRightColors),
    MozBorderStartColor: framerMotion.useMotionValue(initial.MozBorderStartColor),
    MozBorderStartStyle: framerMotion.useMotionValue(initial.MozBorderStartStyle),
    MozBorderTopColors: framerMotion.useMotionValue(initial.MozBorderTopColors),
    MozBoxSizing: framerMotion.useMotionValue(initial.MozBoxSizing),
    MozColumnCount: framerMotion.useMotionValue(initial.MozColumnCount),
    MozColumnFill: framerMotion.useMotionValue(initial.MozColumnFill),
    MozColumnGap: framerMotion.useMotionValue(initial.MozColumnGap),
    MozColumnRuleColor: framerMotion.useMotionValue(initial.MozColumnRuleColor),
    MozColumnRuleStyle: framerMotion.useMotionValue(initial.MozColumnRuleStyle),
    MozColumnRuleWidth: framerMotion.useMotionValue(initial.MozColumnRuleWidth),
    MozColumnWidth: framerMotion.useMotionValue(initial.MozColumnWidth),
    MozContextProperties: framerMotion.useMotionValue(initial.MozContextProperties),
    MozFontFeatureSettings: framerMotion.useMotionValue(initial.MozFontFeatureSettings),
    MozFontLanguageOverride: framerMotion.useMotionValue(initial.MozFontLanguageOverride),
    MozHyphens: framerMotion.useMotionValue(initial.MozHyphens),
    MozImageRegion: framerMotion.useMotionValue(initial.MozImageRegion),
    MozMarginEnd: framerMotion.useMotionValue(initial.MozMarginEnd),
    MozMarginStart: framerMotion.useMotionValue(initial.MozMarginStart),
    MozOrient: framerMotion.useMotionValue(initial.MozOrient),
    MozOsxFontSmoothing: framerMotion.useMotionValue(initial.MozOsxFontSmoothing),
    MozPaddingEnd: framerMotion.useMotionValue(initial.MozPaddingEnd),
    MozPaddingStart: framerMotion.useMotionValue(initial.MozPaddingStart),
    MozPerspective: framerMotion.useMotionValue(initial.MozPerspective),
    MozPerspectiveOrigin: framerMotion.useMotionValue(initial.MozPerspectiveOrigin),
    MozStackSizing: framerMotion.useMotionValue(initial.MozStackSizing),
    MozTabSize: framerMotion.useMotionValue(initial.MozTabSize),
    MozTextBlink: framerMotion.useMotionValue(initial.MozTextBlink),
    MozTextSizeAdjust: framerMotion.useMotionValue(initial.MozTextSizeAdjust),
    MozTransformOrigin: framerMotion.useMotionValue(initial.MozTransformOrigin),
    MozTransformStyle: framerMotion.useMotionValue(initial.MozTransformStyle),
    MozTransitionDelay: framerMotion.useMotionValue(initial.MozTransitionDelay),
    MozTransitionDuration: framerMotion.useMotionValue(initial.MozTransitionDuration),
    MozTransitionProperty: framerMotion.useMotionValue(initial.MozTransitionProperty),
    MozTransitionTimingFunction: framerMotion.useMotionValue(initial.MozTransitionTimingFunction),
    MozUserFocus: framerMotion.useMotionValue(initial.MozUserFocus),
    MozUserModify: framerMotion.useMotionValue(initial.MozUserModify),
    MozUserSelect: framerMotion.useMotionValue(initial.MozUserSelect),
    MozWindowDragging: framerMotion.useMotionValue(initial.MozWindowDragging),
    MozWindowShadow: framerMotion.useMotionValue(initial.MozWindowShadow),
    msAccelerator: framerMotion.useMotionValue(initial.msAccelerator),
    msAlignSelf: framerMotion.useMotionValue(initial.msAlignSelf),
    msBlockProgression: framerMotion.useMotionValue(initial.msBlockProgression),
    msContentZoomChaining: framerMotion.useMotionValue(initial.msContentZoomChaining),
    msContentZoomLimitMax: framerMotion.useMotionValue(initial.msContentZoomLimitMax),
    msContentZoomLimitMin: framerMotion.useMotionValue(initial.msContentZoomLimitMin),
    msContentZoomSnapPoints: framerMotion.useMotionValue(initial.msContentZoomSnapPoints),
    msContentZoomSnapType: framerMotion.useMotionValue(initial.msContentZoomSnapType),
    msContentZooming: framerMotion.useMotionValue(initial.msContentZooming),
    msFilter: framerMotion.useMotionValue(initial.msFilter),
    msFlexDirection: framerMotion.useMotionValue(initial.msFlexDirection),
    msFlexPositive: framerMotion.useMotionValue(initial.msFlexPositive),
    msFlowFrom: framerMotion.useMotionValue(initial.msFlowFrom),
    msFlowInto: framerMotion.useMotionValue(initial.msFlowInto),
    msGridColumns: framerMotion.useMotionValue(initial.msGridColumns),
    msGridRows: framerMotion.useMotionValue(initial.msGridRows),
    msHighContrastAdjust: framerMotion.useMotionValue(initial.msHighContrastAdjust),
    msHyphenateLimitChars: framerMotion.useMotionValue(initial.msHyphenateLimitChars),
    msHyphenateLimitLines: framerMotion.useMotionValue(initial.msHyphenateLimitLines),
    msHyphenateLimitZone: framerMotion.useMotionValue(initial.msHyphenateLimitZone),
    msHyphens: framerMotion.useMotionValue(initial.msHyphens),
    msImeAlign: framerMotion.useMotionValue(initial.msImeAlign),
    msJustifySelf: framerMotion.useMotionValue(initial.msJustifySelf),
    msLineBreak: framerMotion.useMotionValue(initial.msLineBreak),
    msOrder: framerMotion.useMotionValue(initial.msOrder),
    msOverflowStyle: framerMotion.useMotionValue(initial.msOverflowStyle),
    msOverflowX: framerMotion.useMotionValue(initial.msOverflowX),
    msOverflowY: framerMotion.useMotionValue(initial.msOverflowY),
    msScrollChaining: framerMotion.useMotionValue(initial.msScrollChaining),
    msScrollLimitXMax: framerMotion.useMotionValue(initial.msScrollLimitXMax),
    msScrollLimitXMin: framerMotion.useMotionValue(initial.msScrollLimitXMin),
    msScrollLimitYMax: framerMotion.useMotionValue(initial.msScrollLimitYMax),
    msScrollLimitYMin: framerMotion.useMotionValue(initial.msScrollLimitYMin),
    msScrollRails: framerMotion.useMotionValue(initial.msScrollRails),
    msScrollSnapPointsX: framerMotion.useMotionValue(initial.msScrollSnapPointsX),
    msScrollSnapPointsY: framerMotion.useMotionValue(initial.msScrollSnapPointsY),
    msScrollSnapType: framerMotion.useMotionValue(initial.msScrollSnapType),
    msScrollTranslation: framerMotion.useMotionValue(initial.msScrollTranslation),
    msScrollbar3dlightColor: framerMotion.useMotionValue(initial.msScrollbar3dlightColor),
    msScrollbarArrowColor: framerMotion.useMotionValue(initial.msScrollbarArrowColor),
    msScrollbarBaseColor: framerMotion.useMotionValue(initial.msScrollbarBaseColor),
    msScrollbarDarkshadowColor: framerMotion.useMotionValue(initial.msScrollbarDarkshadowColor),
    msScrollbarFaceColor: framerMotion.useMotionValue(initial.msScrollbarFaceColor),
    msScrollbarHighlightColor: framerMotion.useMotionValue(initial.msScrollbarHighlightColor),
    msScrollbarShadowColor: framerMotion.useMotionValue(initial.msScrollbarShadowColor),
    msTextAutospace: framerMotion.useMotionValue(initial.msTextAutospace),
    msTextCombineHorizontal: framerMotion.useMotionValue(initial.msTextCombineHorizontal),
    msTextOverflow: framerMotion.useMotionValue(initial.msTextOverflow),
    msTouchAction: framerMotion.useMotionValue(initial.msTouchAction),
    msTouchSelect: framerMotion.useMotionValue(initial.msTouchSelect),
    msTransform: framerMotion.useMotionValue(initial.msTransform),
    msTransformOrigin: framerMotion.useMotionValue(initial.msTransformOrigin),
    msTransitionDelay: framerMotion.useMotionValue(initial.msTransitionDelay),
    msTransitionDuration: framerMotion.useMotionValue(initial.msTransitionDuration),
    msTransitionProperty: framerMotion.useMotionValue(initial.msTransitionProperty),
    msTransitionTimingFunction: framerMotion.useMotionValue(initial.msTransitionTimingFunction),
    msUserSelect: framerMotion.useMotionValue(initial.msUserSelect),
    msWordBreak: framerMotion.useMotionValue(initial.msWordBreak),
    msWrapFlow: framerMotion.useMotionValue(initial.msWrapFlow),
    msWrapMargin: framerMotion.useMotionValue(initial.msWrapMargin),
    msWrapThrough: framerMotion.useMotionValue(initial.msWrapThrough),
    msWritingMode: framerMotion.useMotionValue(initial.msWritingMode),
    WebkitAlignContent: framerMotion.useMotionValue(initial.WebkitAlignContent),
    WebkitAlignItems: framerMotion.useMotionValue(initial.WebkitAlignItems),
    WebkitAlignSelf: framerMotion.useMotionValue(initial.WebkitAlignSelf),
    WebkitAnimationDelay: framerMotion.useMotionValue(initial.WebkitAnimationDelay),
    WebkitAnimationDirection: framerMotion.useMotionValue(initial.WebkitAnimationDirection),
    WebkitAnimationDuration: framerMotion.useMotionValue(initial.WebkitAnimationDuration),
    WebkitAnimationFillMode: framerMotion.useMotionValue(initial.WebkitAnimationFillMode),
    WebkitAnimationIterationCount: framerMotion.useMotionValue(initial.WebkitAnimationIterationCount),
    WebkitAnimationName: framerMotion.useMotionValue(initial.WebkitAnimationName),
    WebkitAnimationPlayState: framerMotion.useMotionValue(initial.WebkitAnimationPlayState),
    WebkitAnimationTimingFunction: framerMotion.useMotionValue(initial.WebkitAnimationTimingFunction),
    WebkitAppearance: framerMotion.useMotionValue(initial.WebkitAppearance),
    WebkitBackdropFilter: framerMotion.useMotionValue(initial.WebkitBackdropFilter),
    WebkitBackfaceVisibility: framerMotion.useMotionValue(initial.WebkitBackfaceVisibility),
    WebkitBackgroundClip: framerMotion.useMotionValue(initial.WebkitBackgroundClip),
    WebkitBackgroundOrigin: framerMotion.useMotionValue(initial.WebkitBackgroundOrigin),
    WebkitBackgroundSize: framerMotion.useMotionValue(initial.WebkitBackgroundSize),
    WebkitBorderBeforeColor: framerMotion.useMotionValue(initial.WebkitBorderBeforeColor),
    WebkitBorderBeforeStyle: framerMotion.useMotionValue(initial.WebkitBorderBeforeStyle),
    WebkitBorderBeforeWidth: framerMotion.useMotionValue(initial.WebkitBorderBeforeWidth),
    WebkitBorderBottomLeftRadius: framerMotion.useMotionValue(initial.WebkitBorderBottomLeftRadius),
    WebkitBorderBottomRightRadius: framerMotion.useMotionValue(initial.WebkitBorderBottomRightRadius),
    WebkitBorderImageSlice: framerMotion.useMotionValue(initial.WebkitBorderImageSlice),
    WebkitBorderTopLeftRadius: framerMotion.useMotionValue(initial.WebkitBorderTopLeftRadius),
    WebkitBorderTopRightRadius: framerMotion.useMotionValue(initial.WebkitBorderTopRightRadius),
    WebkitBoxDecorationBreak: framerMotion.useMotionValue(initial.WebkitBoxDecorationBreak),
    WebkitBoxReflect: framerMotion.useMotionValue(initial.WebkitBoxReflect),
    WebkitBoxShadow: framerMotion.useMotionValue(initial.WebkitBoxShadow),
    WebkitBoxSizing: framerMotion.useMotionValue(initial.WebkitBoxSizing),
    WebkitClipPath: framerMotion.useMotionValue(initial.WebkitClipPath),
    WebkitColumnCount: framerMotion.useMotionValue(initial.WebkitColumnCount),
    WebkitColumnFill: framerMotion.useMotionValue(initial.WebkitColumnFill),
    WebkitColumnGap: framerMotion.useMotionValue(initial.WebkitColumnGap),
    WebkitColumnRuleColor: framerMotion.useMotionValue(initial.WebkitColumnRuleColor),
    WebkitColumnRuleStyle: framerMotion.useMotionValue(initial.WebkitColumnRuleStyle),
    WebkitColumnRuleWidth: framerMotion.useMotionValue(initial.WebkitColumnRuleWidth),
    WebkitColumnSpan: framerMotion.useMotionValue(initial.WebkitColumnSpan),
    WebkitColumnWidth: framerMotion.useMotionValue(initial.WebkitColumnWidth),
    WebkitFilter: framerMotion.useMotionValue(initial.WebkitFilter),
    WebkitFlexBasis: framerMotion.useMotionValue(initial.WebkitFlexBasis),
    WebkitFlexDirection: framerMotion.useMotionValue(initial.WebkitFlexDirection),
    WebkitFlexGrow: framerMotion.useMotionValue(initial.WebkitFlexGrow),
    WebkitFlexShrink: framerMotion.useMotionValue(initial.WebkitFlexShrink),
    WebkitFlexWrap: framerMotion.useMotionValue(initial.WebkitFlexWrap),
    WebkitFontFeatureSettings: framerMotion.useMotionValue(initial.WebkitFontFeatureSettings),
    WebkitFontKerning: framerMotion.useMotionValue(initial.WebkitFontKerning),
    WebkitFontSmoothing: framerMotion.useMotionValue(initial.WebkitFontSmoothing),
    WebkitFontVariantLigatures: framerMotion.useMotionValue(initial.WebkitFontVariantLigatures),
    WebkitHyphens: framerMotion.useMotionValue(initial.WebkitHyphens),
    WebkitJustifyContent: framerMotion.useMotionValue(initial.WebkitJustifyContent),
    WebkitLineBreak: framerMotion.useMotionValue(initial.WebkitLineBreak),
    WebkitLineClamp: framerMotion.useMotionValue(initial.WebkitLineClamp),
    WebkitMarginEnd: framerMotion.useMotionValue(initial.WebkitMarginEnd),
    WebkitMarginStart: framerMotion.useMotionValue(initial.WebkitMarginStart),
    WebkitMaskAttachment: framerMotion.useMotionValue(initial.WebkitMaskAttachment),
    WebkitMaskBoxImageOutset: framerMotion.useMotionValue(initial.WebkitMaskBoxImageOutset),
    WebkitMaskBoxImageRepeat: framerMotion.useMotionValue(initial.WebkitMaskBoxImageRepeat),
    WebkitMaskBoxImageSlice: framerMotion.useMotionValue(initial.WebkitMaskBoxImageSlice),
    WebkitMaskBoxImageSource: framerMotion.useMotionValue(initial.WebkitMaskBoxImageSource),
    WebkitMaskBoxImageWidth: framerMotion.useMotionValue(initial.WebkitMaskBoxImageWidth),
    WebkitMaskClip: framerMotion.useMotionValue(initial.WebkitMaskClip),
    WebkitMaskComposite: framerMotion.useMotionValue(initial.WebkitMaskComposite),
    WebkitMaskImage: framerMotion.useMotionValue(initial.WebkitMaskImage),
    WebkitMaskOrigin: framerMotion.useMotionValue(initial.WebkitMaskOrigin),
    WebkitMaskPosition: framerMotion.useMotionValue(initial.WebkitMaskPosition),
    WebkitMaskPositionX: framerMotion.useMotionValue(initial.WebkitMaskPositionX),
    WebkitMaskPositionY: framerMotion.useMotionValue(initial.WebkitMaskPositionY),
    WebkitMaskRepeat: framerMotion.useMotionValue(initial.WebkitMaskRepeat),
    WebkitMaskRepeatX: framerMotion.useMotionValue(initial.WebkitMaskRepeatX),
    WebkitMaskRepeatY: framerMotion.useMotionValue(initial.WebkitMaskRepeatY),
    WebkitMaskSize: framerMotion.useMotionValue(initial.WebkitMaskSize),
    WebkitMaxInlineSize: framerMotion.useMotionValue(initial.WebkitMaxInlineSize),
    WebkitOrder: framerMotion.useMotionValue(initial.WebkitOrder),
    WebkitOverflowScrolling: framerMotion.useMotionValue(initial.WebkitOverflowScrolling),
    WebkitPaddingEnd: framerMotion.useMotionValue(initial.WebkitPaddingEnd),
    WebkitPaddingStart: framerMotion.useMotionValue(initial.WebkitPaddingStart),
    WebkitPerspective: framerMotion.useMotionValue(initial.WebkitPerspective),
    WebkitPerspectiveOrigin: framerMotion.useMotionValue(initial.WebkitPerspectiveOrigin),
    WebkitPrintColorAdjust: framerMotion.useMotionValue(initial.WebkitPrintColorAdjust),
    WebkitRubyPosition: framerMotion.useMotionValue(initial.WebkitRubyPosition),
    WebkitScrollSnapType: framerMotion.useMotionValue(initial.WebkitScrollSnapType),
    WebkitShapeMargin: framerMotion.useMotionValue(initial.WebkitShapeMargin),
    WebkitTapHighlightColor: framerMotion.useMotionValue(initial.WebkitTapHighlightColor),
    WebkitTextCombine: framerMotion.useMotionValue(initial.WebkitTextCombine),
    WebkitTextDecorationColor: framerMotion.useMotionValue(initial.WebkitTextDecorationColor),
    WebkitTextDecorationLine: framerMotion.useMotionValue(initial.WebkitTextDecorationLine),
    WebkitTextDecorationSkip: framerMotion.useMotionValue(initial.WebkitTextDecorationSkip),
    WebkitTextDecorationStyle: framerMotion.useMotionValue(initial.WebkitTextDecorationStyle),
    WebkitTextEmphasisColor: framerMotion.useMotionValue(initial.WebkitTextEmphasisColor),
    WebkitTextEmphasisPosition: framerMotion.useMotionValue(initial.WebkitTextEmphasisPosition),
    WebkitTextEmphasisStyle: framerMotion.useMotionValue(initial.WebkitTextEmphasisStyle),
    WebkitTextFillColor: framerMotion.useMotionValue(initial.WebkitTextFillColor),
    WebkitTextOrientation: framerMotion.useMotionValue(initial.WebkitTextOrientation),
    WebkitTextSizeAdjust: framerMotion.useMotionValue(initial.WebkitTextSizeAdjust),
    WebkitTextStrokeColor: framerMotion.useMotionValue(initial.WebkitTextStrokeColor),
    WebkitTextStrokeWidth: framerMotion.useMotionValue(initial.WebkitTextStrokeWidth),
    WebkitTextUnderlinePosition: framerMotion.useMotionValue(initial.WebkitTextUnderlinePosition),
    WebkitTouchCallout: framerMotion.useMotionValue(initial.WebkitTouchCallout),
    WebkitTransform: framerMotion.useMotionValue(initial.WebkitTransform),
    WebkitTransformOrigin: framerMotion.useMotionValue(initial.WebkitTransformOrigin),
    WebkitTransformStyle: framerMotion.useMotionValue(initial.WebkitTransformStyle),
    WebkitTransitionDelay: framerMotion.useMotionValue(initial.WebkitTransitionDelay),
    WebkitTransitionDuration: framerMotion.useMotionValue(initial.WebkitTransitionDuration),
    WebkitTransitionProperty: framerMotion.useMotionValue(initial.WebkitTransitionProperty),
    WebkitTransitionTimingFunction: framerMotion.useMotionValue(initial.WebkitTransitionTimingFunction),
    WebkitUserModify: framerMotion.useMotionValue(initial.WebkitUserModify),
    WebkitUserSelect: framerMotion.useMotionValue(initial.WebkitUserSelect),
    WebkitWritingMode: framerMotion.useMotionValue(initial.WebkitWritingMode),
    // VendorShorthandProperties
    MozAnimation: framerMotion.useMotionValue(initial.MozAnimation),
    MozBorderImage: framerMotion.useMotionValue(initial.MozBorderImage),
    MozColumnRule: framerMotion.useMotionValue(initial.MozColumnRule),
    MozColumns: framerMotion.useMotionValue(initial.MozColumns),
    MozTransition: framerMotion.useMotionValue(initial.MozTransition),
    msContentZoomLimit: framerMotion.useMotionValue(initial.msContentZoomLimit),
    msContentZoomSnap: framerMotion.useMotionValue(initial.msContentZoomSnap),
    msFlex: framerMotion.useMotionValue(initial.msFlex),
    msScrollLimit: framerMotion.useMotionValue(initial.msScrollLimit),
    msScrollSnapX: framerMotion.useMotionValue(initial.msScrollSnapX),
    msScrollSnapY: framerMotion.useMotionValue(initial.msScrollSnapY),
    msTransition: framerMotion.useMotionValue(initial.msTransition),
    WebkitAnimation: framerMotion.useMotionValue(initial.WebkitAnimation),
    WebkitBorderBefore: framerMotion.useMotionValue(initial.WebkitBorderBefore),
    WebkitBorderImage: framerMotion.useMotionValue(initial.WebkitBorderImage),
    WebkitBorderRadius: framerMotion.useMotionValue(initial.WebkitBorderRadius),
    WebkitColumnRule: framerMotion.useMotionValue(initial.WebkitColumnRule),
    WebkitColumns: framerMotion.useMotionValue(initial.WebkitColumns),
    WebkitFlex: framerMotion.useMotionValue(initial.WebkitFlex),
    WebkitFlexFlow: framerMotion.useMotionValue(initial.WebkitFlexFlow),
    WebkitMask: framerMotion.useMotionValue(initial.WebkitMask),
    WebkitMaskBoxImage: framerMotion.useMotionValue(initial.WebkitMaskBoxImage),
    WebkitTextEmphasis: framerMotion.useMotionValue(initial.WebkitTextEmphasis),
    WebkitTextStroke: framerMotion.useMotionValue(initial.WebkitTextStroke),
    WebkitTransition: framerMotion.useMotionValue(initial.WebkitTransition),
    // ObsoleteProperties
    azimuth: framerMotion.useMotionValue(initial.azimuth),
    boxAlign: framerMotion.useMotionValue(initial.boxAlign),
    boxDirection: framerMotion.useMotionValue(initial.boxDirection),
    boxFlex: framerMotion.useMotionValue(initial.boxFlex),
    boxFlexGroup: framerMotion.useMotionValue(initial.boxFlexGroup),
    boxLines: framerMotion.useMotionValue(initial.boxLines),
    boxOrdinalGroup: framerMotion.useMotionValue(initial.boxOrdinalGroup),
    boxOrient: framerMotion.useMotionValue(initial.boxOrient),
    boxPack: framerMotion.useMotionValue(initial.boxPack),
    clip: framerMotion.useMotionValue(initial.clip),
    fontVariantAlternates: framerMotion.useMotionValue(initial.fontVariantAlternates),
    gridColumnGap: framerMotion.useMotionValue(initial.gridColumnGap),
    gridGap: framerMotion.useMotionValue(initial.gridGap),
    gridRowGap: framerMotion.useMotionValue(initial.gridRowGap),
    imeMode: framerMotion.useMotionValue(initial.imeMode),
    offsetBlock: framerMotion.useMotionValue(initial.offsetBlock),
    offsetBlockEnd: framerMotion.useMotionValue(initial.offsetBlockEnd),
    offsetBlockStart: framerMotion.useMotionValue(initial.offsetBlockStart),
    offsetInline: framerMotion.useMotionValue(initial.offsetInline),
    offsetInlineEnd: framerMotion.useMotionValue(initial.offsetInlineEnd),
    offsetInlineStart: framerMotion.useMotionValue(initial.offsetInlineStart),
    scrollSnapCoordinate: framerMotion.useMotionValue(initial.scrollSnapCoordinate),
    scrollSnapDestination: framerMotion.useMotionValue(initial.scrollSnapDestination),
    scrollSnapPointsX: framerMotion.useMotionValue(initial.scrollSnapPointsX),
    scrollSnapPointsY: framerMotion.useMotionValue(initial.scrollSnapPointsY),
    scrollSnapTypeX: framerMotion.useMotionValue(initial.scrollSnapTypeX),
    scrollSnapTypeY: framerMotion.useMotionValue(initial.scrollSnapTypeY),
    scrollbarTrackColor: framerMotion.useMotionValue(initial.scrollbarTrackColor),
    textCombineHorizontal: framerMotion.useMotionValue(initial.textCombineHorizontal),
    KhtmlBoxAlign: framerMotion.useMotionValue(initial.KhtmlBoxAlign),
    KhtmlBoxDirection: framerMotion.useMotionValue(initial.KhtmlBoxDirection),
    KhtmlBoxFlex: framerMotion.useMotionValue(initial.KhtmlBoxFlex),
    KhtmlBoxFlexGroup: framerMotion.useMotionValue(initial.KhtmlBoxFlexGroup),
    KhtmlBoxLines: framerMotion.useMotionValue(initial.KhtmlBoxLines),
    KhtmlBoxOrdinalGroup: framerMotion.useMotionValue(initial.KhtmlBoxOrdinalGroup),
    KhtmlBoxOrient: framerMotion.useMotionValue(initial.KhtmlBoxOrient),
    KhtmlBoxPack: framerMotion.useMotionValue(initial.KhtmlBoxPack),
    KhtmlLineBreak: framerMotion.useMotionValue(initial.KhtmlLineBreak),
    KhtmlOpacity: framerMotion.useMotionValue(initial.KhtmlOpacity),
    KhtmlUserSelect: framerMotion.useMotionValue(initial.KhtmlUserSelect),
    MozBackgroundClip: framerMotion.useMotionValue(initial.MozBackgroundClip),
    MozBackgroundInlinePolicy: framerMotion.useMotionValue(initial.MozBackgroundInlinePolicy),
    MozBackgroundOrigin: framerMotion.useMotionValue(initial.MozBackgroundOrigin),
    MozBackgroundSize: framerMotion.useMotionValue(initial.MozBackgroundSize),
    MozBinding: framerMotion.useMotionValue(initial.MozBinding),
    MozBorderRadius: framerMotion.useMotionValue(initial.MozBorderRadius),
    MozBorderRadiusBottomleft: framerMotion.useMotionValue(initial.MozBorderRadiusBottomleft),
    MozBorderRadiusBottomright: framerMotion.useMotionValue(initial.MozBorderRadiusBottomright),
    MozBorderRadiusTopleft: framerMotion.useMotionValue(initial.MozBorderRadiusTopleft),
    MozBorderRadiusTopright: framerMotion.useMotionValue(initial.MozBorderRadiusTopright),
    MozBoxAlign: framerMotion.useMotionValue(initial.MozBoxAlign),
    MozBoxDirection: framerMotion.useMotionValue(initial.MozBoxDirection),
    MozBoxFlex: framerMotion.useMotionValue(initial.MozBoxFlex),
    MozBoxOrdinalGroup: framerMotion.useMotionValue(initial.MozBoxOrdinalGroup),
    MozBoxOrient: framerMotion.useMotionValue(initial.MozBoxOrient),
    MozBoxPack: framerMotion.useMotionValue(initial.MozBoxPack),
    MozBoxShadow: framerMotion.useMotionValue(initial.MozBoxShadow),
    MozFloatEdge: framerMotion.useMotionValue(initial.MozFloatEdge),
    MozForceBrokenImageIcon: framerMotion.useMotionValue(initial.MozForceBrokenImageIcon),
    MozOpacity: framerMotion.useMotionValue(initial.MozOpacity),
    MozOutline: framerMotion.useMotionValue(initial.MozOutline),
    MozOutlineColor: framerMotion.useMotionValue(initial.MozOutlineColor),
    MozOutlineRadius: framerMotion.useMotionValue(initial.MozOutlineRadius),
    MozOutlineRadiusBottomleft: framerMotion.useMotionValue(initial.MozOutlineRadiusBottomleft),
    MozOutlineRadiusBottomright: framerMotion.useMotionValue(initial.MozOutlineRadiusBottomright),
    MozOutlineRadiusTopleft: framerMotion.useMotionValue(initial.MozOutlineRadiusTopleft),
    MozOutlineRadiusTopright: framerMotion.useMotionValue(initial.MozOutlineRadiusTopright),
    MozOutlineStyle: framerMotion.useMotionValue(initial.MozOutlineStyle),
    MozOutlineWidth: framerMotion.useMotionValue(initial.MozOutlineWidth),
    MozTextAlignLast: framerMotion.useMotionValue(initial.MozTextAlignLast),
    MozTextDecorationColor: framerMotion.useMotionValue(initial.MozTextDecorationColor),
    MozTextDecorationLine: framerMotion.useMotionValue(initial.MozTextDecorationLine),
    MozTextDecorationStyle: framerMotion.useMotionValue(initial.MozTextDecorationStyle),
    MozUserInput: framerMotion.useMotionValue(initial.MozUserInput),
    msImeMode: framerMotion.useMotionValue(initial.msImeMode),
    msScrollbarTrackColor: framerMotion.useMotionValue(initial.msScrollbarTrackColor),
    OAnimation: framerMotion.useMotionValue(initial.OAnimation),
    OAnimationDelay: framerMotion.useMotionValue(initial.OAnimationDelay),
    OAnimationDirection: framerMotion.useMotionValue(initial.OAnimationDirection),
    OAnimationDuration: framerMotion.useMotionValue(initial.OAnimationDuration),
    OAnimationFillMode: framerMotion.useMotionValue(initial.OAnimationFillMode),
    OAnimationIterationCount: framerMotion.useMotionValue(initial.OAnimationIterationCount),
    OAnimationName: framerMotion.useMotionValue(initial.OAnimationName),
    OAnimationPlayState: framerMotion.useMotionValue(initial.OAnimationPlayState),
    OAnimationTimingFunction: framerMotion.useMotionValue(initial.OAnimationTimingFunction),
    OBackgroundSize: framerMotion.useMotionValue(initial.OBackgroundSize),
    OBorderImage: framerMotion.useMotionValue(initial.OBorderImage),
    OObjectFit: framerMotion.useMotionValue(initial.OObjectFit),
    OObjectPosition: framerMotion.useMotionValue(initial.OObjectPosition),
    OTabSize: framerMotion.useMotionValue(initial.OTabSize),
    OTextOverflow: framerMotion.useMotionValue(initial.OTextOverflow),
    OTransform: framerMotion.useMotionValue(initial.OTransform),
    OTransformOrigin: framerMotion.useMotionValue(initial.OTransformOrigin),
    OTransition: framerMotion.useMotionValue(initial.OTransition),
    OTransitionDelay: framerMotion.useMotionValue(initial.OTransitionDelay),
    OTransitionDuration: framerMotion.useMotionValue(initial.OTransitionDuration),
    OTransitionProperty: framerMotion.useMotionValue(initial.OTransitionProperty),
    OTransitionTimingFunction: framerMotion.useMotionValue(initial.OTransitionTimingFunction),
    WebkitBoxAlign: framerMotion.useMotionValue(initial.WebkitBoxAlign),
    WebkitBoxDirection: framerMotion.useMotionValue(initial.WebkitBoxDirection),
    WebkitBoxFlex: framerMotion.useMotionValue(initial.WebkitBoxFlex),
    WebkitBoxFlexGroup: framerMotion.useMotionValue(initial.WebkitBoxFlexGroup),
    WebkitBoxLines: framerMotion.useMotionValue(initial.WebkitBoxLines),
    WebkitBoxOrdinalGroup: framerMotion.useMotionValue(initial.WebkitBoxOrdinalGroup),
    WebkitBoxOrient: framerMotion.useMotionValue(initial.WebkitBoxOrient),
    WebkitBoxPack: framerMotion.useMotionValue(initial.WebkitBoxPack),
    WebkitScrollSnapPointsX: framerMotion.useMotionValue(initial.WebkitScrollSnapPointsX),
    WebkitScrollSnapPointsY: framerMotion.useMotionValue(initial.WebkitScrollSnapPointsY),
    // SvgProperties
    alignmentBaseline: framerMotion.useMotionValue(initial.alignmentBaseline),
    baselineShift: framerMotion.useMotionValue(initial.baselineShift),
    // clip: useMotionValue(initial.clip),
    // clipPath: useMotionValue(initial.clipPath),
    clipRule: framerMotion.useMotionValue(initial.clipRule),
    // color: useMotionValue(initial.color),
    colorInterpolation: framerMotion.useMotionValue(initial.colorInterpolation),
    colorRendering: framerMotion.useMotionValue(initial.colorRendering),
    // cursor: useMotionValue(initial.cursor),
    // direction: useMotionValue(initial.direction),
    // display: useMotionValue(initial.display),
    dominantBaseline: framerMotion.useMotionValue(initial.dominantBaseline),
    fill: framerMotion.useMotionValue(initial.fill),
    fillOpacity: framerMotion.useMotionValue(initial.fillOpacity),
    fillRule: framerMotion.useMotionValue(initial.fillRule),
    // filter: useMotionValue(initial.filter),
    floodColor: framerMotion.useMotionValue(initial.floodColor),
    floodOpacity: framerMotion.useMotionValue(initial.floodOpacity),
    // font: useMotionValue(initial.font),
    // fontFamily: useMotionValue(initial.fontFamily),
    // fontSize: useMotionValue(initial.fontSize),
    // fontSizeAdjust: useMotionValue(initial.fontSizeAdjust),
    // fontStretch: useMotionValue(initial.fontStretch),
    // fontStyle: useMotionValue(initial.fontStyle),
    // fontVariant: useMotionValue(initial.fontVariant),
    // fontWeight: useMotionValue(initial.fontWeight),
    glyphOrientationVertical: framerMotion.useMotionValue(initial.glyphOrientationVertical),
    // imageRendering: useMotionValue(initial.imageRendering),
    // letterSpacing: useMotionValue(initial.letterSpacing),
    lightingColor: framerMotion.useMotionValue(initial.lightingColor),
    // lineHeight: useMotionValue(initial.lineHeight),
    marker: framerMotion.useMotionValue(initial.marker),
    markerEnd: framerMotion.useMotionValue(initial.markerEnd),
    markerMid: framerMotion.useMotionValue(initial.markerMid),
    markerStart: framerMotion.useMotionValue(initial.markerStart),
    // mask: useMotionValue(initial.mask),
    // opacity: useMotionValue(initial.opacity),
    // overflow: useMotionValue(initial.overflow),
    // paintOrder: useMotionValue(initial.paintOrder),
    // pointerEvents: useMotionValue(initial.pointerEvents),
    shapeRendering: framerMotion.useMotionValue(initial.shapeRendering),
    stopColor: framerMotion.useMotionValue(initial.stopColor),
    stopOpacity: framerMotion.useMotionValue(initial.stopOpacity),
    stroke: framerMotion.useMotionValue(initial.stroke),
    strokeDasharray: framerMotion.useMotionValue(initial.strokeDasharray),
    strokeDashoffset: framerMotion.useMotionValue(initial.strokeDashoffset),
    strokeLinecap: framerMotion.useMotionValue(initial.strokeLinecap),
    strokeLinejoin: framerMotion.useMotionValue(initial.strokeLinejoin),
    strokeMiterlimit: framerMotion.useMotionValue(initial.strokeMiterlimit),
    strokeOpacity: framerMotion.useMotionValue(initial.strokeOpacity),
    strokeWidth: framerMotion.useMotionValue(initial.strokeWidth),
    textAnchor: framerMotion.useMotionValue(initial.textAnchor),
    // textDecoration: useMotionValue(initial.textDecoration),
    // textRendering: useMotionValue(initial.textRendering),
    // unicodeBidi: useMotionValue(initial.unicodeBidi),
    vectorEffect: framerMotion.useMotionValue(initial.vectorEffect) // visibility: useMotionValue(initial.visibility),
    // whiteSpace: useMotionValue(initial.whiteSpace),
    // wordSpacing: useMotionValue(initial.wordSpacing),
    // writingMode: useMotionValue(initial.writingMode),

  };
  return motionValues;
};

var _excluded = ["initial", "style", "onAnimationComplete", "onAnimationStart"];
var target = {};
var handler = {
  get: function get(target, prop) {
    return function (props) {
      return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
        props: props,
        type: prop
      });
    };
  }
};
var tracer = new Proxy(target, handler);

var Wrapper = function Wrapper(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var MotionComponent = framerMotion.motion[type];

  var _props$initial = props.initial,
      initial = _props$initial === void 0 ? {} : _props$initial,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      onAnimationComplete = props.onAnimationComplete,
      onAnimationStart = props.onAnimationStart,
      rest = _objectWithoutProperties(props, _excluded);

  var _useTracer = useTracer(initial),
      _useTracer2 = _slicedToArray(_useTracer, 3),
      animatedStyles = _useTracer2[0],
      Frames = _useTracer2[1],
      ref = _useTracer2[2];

  var _React$useState = React__default['default'].useState({
    top: null,
    left: null
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      startPosition = _React$useState2[0],
      setStartPosition = _React$useState2[1];

  var combinedOnAnimationStart = function combinedOnAnimationStart() {
    setStartPosition({
      top: ref.current.getBoundingClientRect().top,
      left: ref.current.getBoundingClientRect().left
    });
    if (typeof onAnimationStart === 'function') onAnimationStart.apply(void 0, arguments);
  };

  var _React$useState3 = React__default['default'].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      animationComplete = _React$useState4[0],
      setAnimationComplete = _React$useState4[1];

  var combinedOnAnimationComplete = function combinedOnAnimationComplete() {
    setAnimationComplete(true);
    if (typeof onAnimationComplete === 'function') onAnimationComplete.apply(void 0, arguments);
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(MotionComponent, _extends({
    ref: ref,
    initial: initial,
    style: _objectSpread2(_objectSpread2({}, style), animatedStyles),
    onAnimationStart: combinedOnAnimationStart,
    onAnimationComplete: combinedOnAnimationComplete
  }, rest)), animationComplete && /*#__PURE__*/React__default['default'].createElement(framerMotion.motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    }
  }, /*#__PURE__*/React__default['default'].createElement(Frames, {
    startPosition: startPosition
  })));
};

var useTracer = function useTracer(initial) {
  var motionValues = useMotionValues(initial); // clean up keys that don't exist

  Object.keys(motionValues).forEach(function (key) {
    if (typeof initial[key] === 'undefined') delete motionValues[key];
  });
  var initialState = {};
  Object.keys(motionValues).forEach(function (key) {
    initialState[key] = [];
  });

  var _React$useState5 = React__default['default'].useState(initialState),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      values = _React$useState6[0],
      setValues = _React$useState6[1];

  React__default['default'].useEffect(function () {
    var unsubcribeFns = Object.keys(motionValues).map(function (key) {
      return motionValues[key].onChange(function (v) {
        setValues(function (values) {
          return _objectSpread2(_objectSpread2({}, values), {}, _defineProperty({}, key, [].concat(_toConsumableArray(values[key]), [v])));
        });
      });
    });
    return function () {
      unsubcribeFns.forEach(function (fn) {
        fn();
      });
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var style = motionValues;

  var FramesComponent = function FramesComponent(_ref2) {
    var startPosition = _ref2.startPosition;
    return /*#__PURE__*/React__default['default'].createElement(Frames, {
      values: values,
      startPosition: startPosition
    });
  };

  var ref = React__default['default'].useRef(null);
  return [style, FramesComponent, ref];
};

var Frames = function Frames(_ref3) {
  var values = _ref3.values,
      startPosition = _ref3.startPosition;
  var length = Math.max.apply(Math, _toConsumableArray(Object.values(values).map(function (arr) {
    return arr.length;
  })));
  var lastValues = {};
  Object.keys(values).forEach(function (key) {
    var valuesForKey = values[key];
    lastValues[key] = valuesForKey[valuesForKey.length - 1];
  });

  var _useControls = leva.useControls({
    'frame #': {
      value: 0,
      min: 0,
      max: length - 1,
      step: 1
    }
  }),
      frame = _useControls['frame #'];

  var frames = [];

  var _loop = function _loop(index) {
    var style = {};
    Object.keys(values).forEach(function (key) {
      style[key] = values[key][index] || lastValues[key];
    });
    frames.push( /*#__PURE__*/React__default['default'].createElement(framerMotion.motion.div, {
      key: index,
      className: "box",
      style: _objectSpread2(_objectSpread2(_objectSpread2({
        position: 'absolute'
      }, startPosition), style), {}, {
        opacity: index === frame ? style.opacity : 0.05,
        boxShadow: index === frame ? 'inset 0 0 0 2px blue' : style.boxShadow,
        zIndex: index === frame ? 99999999 : style.zIndex
      })
    }));
  };

  for (var index = 0; index < length; index++) {
    _loop(index);
  }

  var frameMotionValues = {};
  Object.keys(values).forEach(function (key) {
    frameMotionValues[key] = values[key][frame] || lastValues[key];
  });
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0
    }
  }, frames, " ", /*#__PURE__*/React__default['default'].createElement(leva.Leva, {
    titleBar: {
      filter: false
    }
  }));
};

exports.tracer = tracer;
