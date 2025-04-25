"use client";
import dynamic from "next/dynamic";

export const Editor = dynamic(() => import("../components/Editor"), {
  ssr: false,
});

import React from "react";

function NoteXEditor() {
  return <Editor />;
}

export default NoteXEditor;
