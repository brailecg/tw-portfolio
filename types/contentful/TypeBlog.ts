import type { Entry, EntryFields } from "contentful";

export interface TypeBlogFields {
  title?: EntryFields.Symbol;
  slug?: EntryFields.Symbol;
  date?: EntryFields.Date;
  content?: EntryFields.RichText;
  summary?: EntryFields.RichText;
}
export type BlogEntry = {
  fields: TypeBlogFields;
  contentTypeId: string;
};
export type TypeBlog = Entry<BlogEntry>;
