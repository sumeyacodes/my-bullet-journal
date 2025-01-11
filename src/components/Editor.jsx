"use client";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteSchema, defaultBlockSpecs } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
 
// Our <Editor> component we can reuse later
export default function Editor() {
  // removes unecessary block spec options
  const { audio, image, video, table, file, numberedListItem, codeBlock, heading, emojiPicker, ...remainingBlockSpecs } = defaultBlockSpecs;
 
  const schema = BlockNoteSchema.create({
    blockSpecs: {
      // remainingBlockSpecs contains all the other blocks
      ...remainingBlockSpecs,
    },
});
const editor = useCreateBlockNote({
    schema,
  });
  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}