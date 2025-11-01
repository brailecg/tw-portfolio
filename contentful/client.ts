import { createClient, EntryCollection } from "contentful";
import {
  BlogEntry,
  ExperienceEntry,
  ProjectEntry,
  TechStackEntry,
} from "@/types/contentful";

const client = createClient({
  space: process.env.SPACE_ID as string,
  accessToken: process.env.ACCESS_TOKEN as string,
});
export const getBlogEntries = async (): Promise<BlogEntry[]> => {
  try {
    const entries: EntryCollection<BlogEntry> =
      await client.getEntries<BlogEntry>({
        content_type: "blog",
      });

    return entries.items as unknown as BlogEntry[];
  } catch (error) {
    console.error("Error retrieving blog entries:", error);
    return [];
  }
};

export const getExperiences = async (): Promise<ExperienceEntry[]> => {
  try {
    const entries: EntryCollection<ExperienceEntry> =
      await client.getEntries<ExperienceEntry>({
        content_type: "experiences",
      });

    return entries.items as unknown as ExperienceEntry[];
  } catch (error) {
    console.error("Error retrieving experience entries:", error);
    return [];
  }
};
export const getProjects = async (): Promise<ProjectEntry[]> => {
  try {
    const entries: EntryCollection<ProjectEntry> =
      await client.getEntries<ProjectEntry>({
        content_type: "projects",
      });

    return entries.items as unknown as ProjectEntry[];
  } catch (error) {
    console.error("Error retrieving project entries:", error);
    return [];
  }
};

export const getTechStack = async (): Promise<TechStackEntry[]> => {
  try {
    const entries: EntryCollection<TechStackEntry> =
      await client.getEntries<TechStackEntry>({
        content_type: "techStack",
      });

    return entries.items as unknown as TechStackEntry[];
  } catch (error) {
    console.error("Error retrieving tech stack entries:", error);
    return [];
  }
};
