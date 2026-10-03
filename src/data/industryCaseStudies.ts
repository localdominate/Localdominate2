import type { CaseStudyData } from "@/components/blog/CaseStudyCard";

/**
 * Case studies per industry or article key.
 *
 * Truth rule: this record is empty on purpose. The 40+ case studies that used to be here (business
 * names, quotes, before and after figures) were invented and have been removed. Add an entry only
 * for a real client result that the client has approved in writing. Components that read this
 * record render nothing when it has no entry for their key.
 */
export const industryCaseStudies: Record<string, CaseStudyData[]> = {};
