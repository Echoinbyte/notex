"use client";

import { createReactBlockSpec } from "@blocknote/react";

// The Iframe block
export const IframeBlock = createReactBlockSpec(
  {
    type: "iframe",
    propSchema: {
      type: {
        default: "frame", // Default iframe source
      },
    },
    content: "inline",
  },
  {
    render: (props) => {
      console.log("IframeBlock", props);

      const firstContentItem = props.block.content?.[0];

      const blockSrc =
        firstContentItem &&
        firstContentItem.type === "text" &&
        "text" in firstContentItem
          ? firstContentItem.text
          : firstContentItem &&
              firstContentItem.type === "link" &&
              "href" in firstContentItem
            ? firstContentItem.href
            : "";

      return (
        <>
          <div className="w-full flex flex-col gap-2">
            <div
              ref={props.contentRef}
              className="w-full border border-orange-500 p-2 rounded-sm"
            />
            <div
              className="relative w-full overflow-hidden"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                src={
                  blockSrc.replace("youtu.be/", "www.youtube.com/embed/")
                  // .split("?")[0]
                }
                className="absolute top-0 left-0 w-full h-full border rounded"
                sandbox="allow-scripts allow-same-origin"
                title="YouTube video player"
                style={{ border: "none" }} // Use style prop to set border to none
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </>
      );
    },
  },
);
