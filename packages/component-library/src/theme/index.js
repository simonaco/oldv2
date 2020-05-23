import colors from "./colors";
import breakpoints from "./breakpoints";
import fontFamilies from "./font-families";

export default {
  textStyles: {
    artifika: {
      tag: "h1",
      fontSize: [12, 12, 13, 13, 13, 14],
      fontWeight: 700,
      lineHeight: ["32px", "32px", "36px", "36px", "56px", "56px"],
      fontFamily: fontFamilies.heading,
      color: colors.blues[2]
    },
    bodyCopy: {
      tag: "p",
      fontSize: [3, 3, 4, 4, 5, 5],
      fontFamily: fontFamilies.body,
      lineHeight: ["20px", "20px", "22px", "22px", "24px", "24px"]
    },
    code: {
      tag: "span",
      px: "4px",
      py: "2px",
      lineHeight: "22px",
      color: colors.maroonFlush,
      bg: colors.softPeach,
      borderRadius: 4,
      fontFamily: fontFamilies.code
    },
    underline: {
      textDecoration: "underline"
    }
  },
  fontSizes: [12, 13, 14, 15, 16, 18, 20, 21, 22, 24, 26, 28, 32, 36, 52],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  breakpoints: Object.values(breakpoints),
  colors: {
    ...colors
  }
};
