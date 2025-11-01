import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeTechStackFields {
  techStackName: EntryFields.Symbol;
  techStackImage: Asset;
  techStackType: EntryFields.Symbol;
}

export interface TypeTechStackSys {
  id: string;
}
export type TechStackEntry = {
  sys: TypeTechStackSys;
  fields: TypeTechStackFields;
  contentTypeId: string;
};

export type TypeTechStack = Entry<TechStackEntry>;
