import type { Entry, EntryFields } from "contentful";

export interface TypeExperiencesFields {
  company: EntryFields.Symbol;
  employmentDateRange: EntryFields.Symbol;
  positionTitle: EntryFields.Symbol;
  techStack?: EntryFields.Symbol[];
  summary: EntryFields.Text;
  details: EntryFields.RichText;
  order: EntryFields.Number;
}

export interface TypeExpSys {
  id: string;
}

export type ExperienceEntry = {
  sys: TypeExpSys;
  fields: TypeExperiencesFields;
  contentTypeId: string;
};
export type TypeExperiences = Entry<ExperienceEntry>;
