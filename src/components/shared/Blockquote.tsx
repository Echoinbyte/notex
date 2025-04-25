import { createReactBlockSpec } from "@blocknote/react";
import "@/styles/BlockquoteStyles.css";
// The Blockquote block.
export const Blockquote = createReactBlockSpec(
  {
    type: "blockquote",
    propSchema: {},
    content: "inline",
  },
  {
    render: (props) => {
      return (
        <blockquote className="editor-blockquote">
          <div ref={props.contentRef} className="editor-blockquote-content" />
        </blockquote>
      );
    },
  },
);
