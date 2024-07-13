import type { Entry, EntryFields } from "contentful";

export interface TypeBlogFields {
  title?: EntryFields.Symbol;
  slug?: EntryFields.Symbol;
  date?: EntryFields.Date;
  content?: EntryFields.RichText;
  summary?: EntryFields.RichText;
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
