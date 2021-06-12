import React from 'react';
import { TouchableOpacityProps, TouchableNativeFeedbackProps, ViewStyle, StyleProp, TextStyle, ImageProps, ImageURISource, ImageSourcePropType } from 'react-native';
import { IconObject, IconProps } from '../icons/Icon';
import { RneFunctionComponent } from '../helpers';
export declare type TileProps = TouchableOpacityProps & TouchableNativeFeedbackProps & {
    title?: string;
    icon?: IconObject & IconProps;
    caption?: React.ReactNode;
    imageSrc?: ImageSourcePropType | string | number;
    activeOpacity?: number;
    containerStyle?: StyleProp<ViewStyle>;
    imageContainerStyle?: StyleProp<ViewStyle>;
    iconContainerStyle?: StyleProp<ViewStyle>;
    overlayContainerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    captionStyle?: StyleProp<TextStyle>;
    width?: number;
    height?: number;
    featured?: boolean;
    contentContainerStyle?: StyleProp<ViewStyle>;
    titleNumberOfLines?: number;
    imageProps?: Partial<ImageProps>;
    ImageComponent?: typeof React.Component;
};
declare const Tile: RneFunctionComponent<TileProps>;
export { Tile };
declare const _default: React.FunctionComponent<Pick<TouchableOpacityProps & TouchableNativeFeedbackProps & {
    title?: string;
    icon?: IconObject & import("react-native-vector-icons/Icon").IconButtonProps & {
        type?: string;
        Component?: typeof React.Component;
        reverse?: boolean;
        raised?: boolean;
        containerStyle?: StyleProp<ViewStyle>;
        iconProps?: import("react-native-vector-icons/Icon").IconProps;
        reverseColor?: string;
        disabled?: boolean;
        disabledStyle?: StyleProp<ViewStyle>;
        solid?: boolean;
        brand?: boolean;
    };
    caption?: React.ReactNode;
    imageSrc?: string | number | ImageURISource | ImageURISource[];
    activeOpacity?: number;
    containerStyle?: StyleProp<ViewStyle>;
    imageContainerStyle?: StyleProp<ViewStyle>;
    iconContainerStyle?: StyleProp<ViewStyle>;
    overlayContainerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    captionStyle?: StyleProp<TextStyle>;
    width?: number;
    height?: number;
    featured?: boolean;
    contentContainerStyle?: StyleProp<ViewStyle>;
    titleNumberOfLines?: number;
    imageProps?: Partial<ImageProps>;
    ImageComponent?: typeof React.Component;
} & Partial<import("../config").ThemeProps<TileProps>>, "style" | "onLayout" | "testID" | "width" | "height" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "onPress" | "onLongPress" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "containerStyle" | "caption" | "title" | "ImageComponent" | "icon" | "titleStyle" | "overlayContainerStyle" | "imageProps" | "contentContainerStyle" | "iconContainerStyle" | "imageSrc" | "imageContainerStyle" | "captionStyle" | "featured" | "titleNumberOfLines">> | React.ForwardRefExoticComponent<TouchableOpacityProps & TouchableNativeFeedbackProps & {
    title?: string;
    icon?: IconObject & import("react-native-vector-icons/Icon").IconButtonProps & {
        type?: string;
        Component?: typeof React.Component;
        reverse?: boolean;
        raised?: boolean;
        containerStyle?: StyleProp<ViewStyle>;
        iconProps?: import("react-native-vector-icons/Icon").IconProps;
        reverseColor?: string;
        disabled?: boolean;
        disabledStyle?: StyleProp<ViewStyle>;
        solid?: boolean;
        brand?: boolean;
    };
    caption?: React.ReactNode;
    imageSrc?: string | number | ImageURISource | ImageURISource[];
    activeOpacity?: number;
    containerStyle?: StyleProp<ViewStyle>;
    imageContainerStyle?: StyleProp<ViewStyle>;
    iconContainerStyle?: StyleProp<ViewStyle>;
    overlayContainerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    captionStyle?: StyleProp<TextStyle>;
    width?: number;
    height?: number;
    featured?: boolean;
    contentContainerStyle?: StyleProp<ViewStyle>;
    titleNumberOfLines?: number;
    imageProps?: Partial<ImageProps>;
    ImageComponent?: typeof React.Component;
} & Partial<import("../config").ThemeProps<TileProps>>>;
export default _default;
