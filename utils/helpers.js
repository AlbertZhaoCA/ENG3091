import React from "react";

export function htmlToRF(htmlNode) {
  const ReactFC = () => htmlNode;
  return ReactFC;
}

export function htmlsToRF(htmlNodes) {
  return htmlNodes.map((htmlNode, index) => {
    const ReactFC = () => (
      <React.Fragment key={index}>{htmlNode}</React.Fragment>
    );
    return ReactFC;
  });
}
