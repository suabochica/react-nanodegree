import { createElement, useEffect, useState } from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll.js";

const ImageChangeOnScroll = () => {
  const [currentHashiraId, setCurrentHashiraId] = useState(0);
  const [mouseEventCounter, setMouseEventCounter] = useState(0);

  useEffect(() => {
    window.document.title = `HashiraId: ${currentHashiraId}`;
    console.log(`useEffect: setting title to ${currentHashiraId}`);
  }, [currentHashiraId]);

  return createElement(
    "div",
    null,
    createElement(
      "span",
      { className: "counter-badge" },
      `mouseEventCounter: ${mouseEventCounter}`,
    ),
    createElement(
      "div",
      { className: "cards" },
      ["01", "02", "03", "04", "05", "06", "07", "08", "09"].map((hashiraId) =>
        createElement(
          "figure",
          {
            className: "media-card",
            key: hashiraId,
            onMouseOver: () => {
              setCurrentHashiraId(hashiraId);
              setMouseEventCounter(mouseEventCounter + 1);

              console.log(`onMouseOver: ${hashiraId}`);
            },
          },
          createElement(ImageToggleOnScroll, {
            primaryImage: `/static/bw/hashira-${hashiraId}.webp`,
            secondaryImage: `/static/color/hashira-${hashiraId}.webp`,
            alt: `Hashira ${hashiraId}`,
          }),
          createElement(
            "figcaption",
            { className: "media-caption" },
            `Hashira ${hashiraId}`,
          ),
        ),
      ),
    ),
  );
};

export default ImageChangeOnScroll;
