import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES, Document } from "@contentful/rich-text-types";
import React from "react";

export const renderRichText = (document: Document) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
      [MARKS.CODE]: (text: React.ReactNode) => <p>{text}</p>,
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
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <ul>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
        <ol className="list-decimal list-inside">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => {
        const transformedChildren = documentToReactComponents(node, {
          renderMark: options.renderMark,
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) =>
              children,
            [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) =>
              children,
          },
        });
        return <li>{transformedChildren}</li>;
      },

      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
        const { uri } = node.data;
        return (
          <a href={uri} className=" text-teal-500 underline">
            {children}
          </a>
        );
      },
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
