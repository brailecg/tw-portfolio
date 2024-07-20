import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeBlogFields {
  title?: EntryFields.Symbol;
  slug?: EntryFields.Symbol;
  date?: EntryFields.Date;
  summary?: EntryFields.RichText;
  content?: EntryFields.RichText;
  dedicatedImage?: Asset;
}
export interface TypeBlogSys {
  id: string;
}

export type BlogEntry = {
  sys: TypeBlogSys;
  fields: TypeBlogFields;
  contentTypeId: string;
};
export type TypeBlog = Entry<BlogEntry>;
