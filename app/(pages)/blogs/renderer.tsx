import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, Document } from "@contentful/rich-text-types";
import React from "react";

export const renderRichText = (document: Document) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p>{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
        <h1>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
        <h2>{children}</h2>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any, children: React.ReactNode) => (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      ),
      [BLOCKS.HR]: () => <hr />,

      // Add more block types as needed
    },
    renderText: (text: string) => {
      return text
        .split("\n")
        .reduce(
          (children: React.ReactNode[], textSegment: string, index: number) => {
            return [...children, index > 0 && <br key={index} />, textSegment];
          },
          []
        );
    },
  };

  return documentToReactComponents(document, options);
};
