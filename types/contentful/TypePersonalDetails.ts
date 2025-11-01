import type { Entry, EntryFields } from "contentful";

export interface TypePersonalDetailsFields {
  homeTitle?: EntryFields.Symbol;
  homeIntro?: EntryFields.Text;
  aboutTitle?: EntryFields.Symbol;
  aboutIntro?: EntryFields.Text;
  experienceTitle?: EntryFields.Symbol;
  experienceIntro?: EntryFields.Text;
  projectsTitle?: EntryFields.Symbol;
  projectsIntro?: EntryFields.Text;
  blogsTitle?: EntryFields.Symbol;
  blogsIntro?: EntryFields.Text;
}
export interface TypeProjectSys {
  id: string;
}

export type PersonalDetailsEntry = {
  sys: TypeProjectSys;
  fields: TypePersonalDetailsFields;
  contentTypeId: string;
};

export type TypePersonalDetails = Entry<PersonalDetailsEntry>;
