import { createElement } from "react";
import ImageToggleOnMouseOver from "./ImageToggleOnMouseOver.js";

const ImageChangeOnMouseOver = () => {
  return createElement(
    "div",
    { className: "cards" },
    ["01", "02", "03", "04", "05"].map((hashiraId) =>
      createElement(
        "figure",
        { className: "media-card", key: hashiraId },
        createElement(ImageToggleOnMouseOver, {
          primaryImg: `/static/bw/hashira-${hashiraId}.webp`,
          secondaryImg: `/static/color/hashira-${hashiraId}.webp`,
          alt: `Hashira ${hashiraId}`,
        }),
        createElement(
          "figcaption",
          { className: "media-caption" },
          `Hashira ${hashiraId}`,
        ),
      ),
    ),
  );
};

export default ImageChangeOnMouseOver;
