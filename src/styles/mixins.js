// @flow
import {Dimensions, Platform, NativeModules} from 'react-native';

const {width, height} = Dimensions.get('window');
export const [WINDOW_WIDTH, WINDOW_HEIGHT] =
  width < height ? [width, height] : [height, width];

// this is the scale Grace has used in her design (iPhone X)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

//UX, minimum guideline for thumb
const minimumClickableSize = 40;

// we can calculate this once if our app is only support portrait mode
const curDeviceWidthRatio = WINDOW_WIDTH / guidelineBaseWidth;
const curDeviceHeightRatio = WINDOW_HEIGHT / guidelineBaseHeight;
const curDeviceRatio = (curDeviceWidthRatio + curDeviceHeightRatio) / 2;

export const scaleSize = (size: number) => curDeviceRatio * size;
export const scaleWidth = (size: number) => curDeviceWidthRatio * size;
export const scaleHeight = (size: number) => curDeviceHeightRatio * size;
export const scaleFont = (size: number) => Math.round(size * curDeviceRatio);
export const scaleFontByHeight = (size: number) =>
  Math.round(size * curDeviceHeightRatio);
export const scaleSizeBorder = (size: number, minVal?: number) =>
  Math.max(scaleSize(size), minVal ? minVal : 1);
export const scaleHeightBorder = (size: number, minVal?: number) =>
  Math.max(scaleHeight(size), minVal ? minVal : 1);
export const scaleWidthBorder = (size: number, minVal?: number) =>
  Math.max(scaleWidth(size), minVal ? minVal : 1);

// sets a minimum value
export const scaleUxSize = (size: number) =>
  Math.max(scaleSize(size), minimumClickableSize);
export const scaleUxHeight = (size: number) =>
  Math.max(scaleHeight(size), minimumClickableSize);
export const scaleUxWidth = (size: number) =>
  Math.max(scaleWidth(size), minimumClickableSize);

// android text label/ input fix needs to review and modify
export const scaleFontWithLineHeight = (size: number) => {
  const fontSize = scaleFont(size);
  return {
    fontSize,
    lineHeight: fontSize * SIZER.center,
  };
};
const SIZER = {
  down: 1.5, //ion, matCommunity
  center: 1.375, //material, fontAwesome
}; //increase will go down
export const scaleIconFontSize = (
  size: number,
  go?: string = 'center',
  by?: number,
) => {
  const fontSize = scaleFont(size);
  return {
    size: fontSize,
    style: {
      lineHeight: fontSize * (by ? by : SIZER[go]),
    },
  };
};

//can't find the exact logic here yet :()
// export const scaleUxLineHeight = (size: number, fontSize: number) => {
// 	return size - (size - fontSize) / 4;
// };

// TODO: better keep these values in an object rather calculate each render

// if (Platform.OS === 'ios') {
// 	return Math.round(PixelRatio.roundToNearestPixel(newSize));
// } else {
// 	return size * PixelRatio.getFontScale();
// }

function dimensions(
  top: number,
  right: number = top,
  bottom: number = top,
  left: number = right,
  property,
) {
  let styles = {};
  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;
  return styles;
}
export function margin(
  top: number,
  right: number,
  bottom: number,
  left: number,
) {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(
  top: number,
  right: number,
  bottom: number,
  left: number,
) {
  return dimensions(top, right, bottom, left, 'padding');
}

type Offset = {
  height: number,
  width: number,
};
export function boxShadow(
  color: string,
  offset: Offset = {height: 2, width: 2},
  radius: number = 8,
  opacity: number = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}

// const deviceLocale =
//   Platform.OS === 'ios'
//     ? NativeModules.SettingsManager.settings.AppleLocale ||
//       NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
//     : NativeModules.I18nManager.localeIdentifier;

// export default deviceLocale;
