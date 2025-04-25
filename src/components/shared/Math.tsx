"use client";

import { createReactBlockSpec } from "@blocknote/react";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";

// The Math block.
export const MathExpression = createReactBlockSpec(
  {
    type: "mathExpression",
    propSchema: {
      type: {
        default: "equ",
      },
    },
    content: "inline",
  },
  {
    render: (props) => {
      const firstContentItem = props.block.content?.[0];

      // Safe type check to ensure it's a text block
      const blockText =
        firstContentItem && "text" in firstContentItem
          ? firstContentItem.text
          : "";

      return (
        <>
          <div className="flex flex-col gap-1">
            <div
              ref={props.contentRef}
              className="w-full border border-orange-500 p-2 rounded-sm"
              onInput={(e) => {
                props.block.content = [
                  {
                    type: "text",
                    text: e.currentTarget.textContent || "",
                    styles: {},
                  },
                ];
              }}
            />
            <TeX
              as={"span"}
              errorColor={"#cc0000"}
              settings={{
                macros: {
                  "*": "\\cdot",
                  "\\laplacian": "\\nabla^2",
                },
              }}
            >
              {String.raw`${blockText}`.replace(/\n/g, "\\\\")}
            </TeX>
          </div>
        </>
      );
    },
  }
);
