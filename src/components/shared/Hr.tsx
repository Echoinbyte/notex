"use client";

import { createReactBlockSpec } from "@blocknote/react";
import "@/styles/HrStyles.css";

export const HorizontalRule = createReactBlockSpec(
  {
    type: "hr",
    propSchema: {
      type: {
        default: "horizontal-rule",
      },
    },
    content: "none",
  },
  {
    render: () => {
      return <div className="section-divider" />;
    },
  }
);
