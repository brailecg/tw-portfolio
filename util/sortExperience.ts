import { ExperienceEntry } from "@/types/contentful/TypeExperiences";

export const sortExperiences = (experienceList: ExperienceEntry[]) => {
  return experienceList.sort((a, b) => {
    if (
      ((a?.fields?.order as unknown as number) >
        b?.fields?.order) as unknown as number
    ) {
      return -1;
    }
    if (
      ((a?.fields?.order as unknown as number) <
        b?.fields?.order) as unknown as number
    ) {
      return 1;
    }
    return 0;
  });
};
