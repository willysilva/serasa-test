import { styled, theme } from "centaurus-styles";

export const DisplayHeading = styled("h1", {
  fontSize: theme.fontSizes.display,
  fontFamily: theme.fontFamilies.default,
  fontWeight: theme.fontWeights.bold,
  lineHeight: theme.lineHeights.display,
  textAlign: "center",
  "@bp1": {
    fontSize: theme.fontSizes.headingLarger,
    lineHeight: theme.lineHeights.headingLarger,
  },
});

export const HeadingLarger = styled("h2", {
  fontSize: theme.fontSizes.headingLarger,
  fontFamily: theme.fontFamilies.default,
  fontWeight: theme.fontWeights.bold,
  lineHeight: theme.lineHeights.headingLarger,
  textAlign: "center",
  "@bp1": {
    fontSize: theme.fontSizes.headingMedium,
    lineHeight: theme.lineHeights.headingMedium,
  },
});

export const HeadingMedium = styled("h3", {
  fontSize: theme.fontSizes.headingMedium,
  fontFamily: theme.fontFamilies.default,
  fontWeight: theme.fontWeights.bold,
  lineHeight: theme.lineHeights.headingMedium,
  textAlign: "center",
  "@bp1": {
    fontSize: theme.fontSizes.headingMedium,
    lineHeight: theme.lineHeights.headingMedium,
  },
});

export const HeadingSmall = styled("h4", {
  fontSize: theme.fontSizes.headingSmall,
  fontFamily: theme.fontFamilies.default,
  fontWeight: theme.fontWeights.bold,
  lineHeight: theme.lineHeights.headingSmall,
  textAlign: "center",
  "@bp1": {
    fontSize: theme.fontSizes.headingExtraSmall,
    lineHeight: theme.lineHeights.headingExtraSmall,
  },
});

export const HeadingExtraSmall = styled("h5", {
  fontSize: theme.fontSizes.headingExtraSmall,
  fontFamily: theme.fontFamilies.default,
  fontWeight: theme.fontWeights.bold,
  lineHeight: theme.lineHeights.headingExtraSmall,
  textAlign: "center",
  "@bp1": {
    fontSize: "18px",
    lineHeight: "22px",
  },
});

export const SubHeading = styled("h6", {
  fontSize: theme.fontSizes.subHeading,
  fontFamily: theme.fontFamilies.default,
  fontWeight: theme.fontWeights.bold,
  textAlign: "center",
});

export const BodyMedium = styled("span", {
  fontSize: theme.fontSizes.bodyMedium,
  fontFamily: theme.fontFamilies.default,
  textAlign: "center",
  variants: {
    weight: {
      bold: {
        fontWeight: theme.fontWeights.bold,
      },
      regular: {
        fontWeight: theme.fontWeights.regular,
      },
    },
  },
});
