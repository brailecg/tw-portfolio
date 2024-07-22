import type { Asset, Entry, EntryFields } from "contentful";

export type LinkObject = {
  linkName: string;
  appLink: string;
  githubLink: string;
}[];

export interface TypeProjectsFields {
  name: EntryFields.Symbol;
  description: EntryFields.Text;
  image?: Asset;
  linksObject?: LinkObject;
  techStack: string[];
}

export interface TypeProjectSys {
  id: string;
}

export type ProjectEntry = {
  sys: TypeProjectSys;
  fields: TypeProjectsFields;
  contentTypeId: string;
};
export type TypeProjects = Entry<ProjectEntry>;
