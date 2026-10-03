import type { StatisticBoxData } from "@/components/blog/StatisticBox";

/**
 * Statistics for the blog.
 *
 * Truth rule: no figure is kept here without a primary source that has been opened and checked.
 * The earlier sets (general local search, Google Business Profile, reviews, mobile and 22
 * industries) cited agencies, associations and studies by name only, or linked to pages that do
 * not contain the figures, so all of them were removed. To add a figure, put it in a set with the
 * exact value as printed in the source, the source name, the URL of the page that prints it and
 * the year. StatisticBox renders nothing for a set without stats.
 */

const NO_VERIFIED_STATISTICS: StatisticBoxData = { stats: [], source: "" };

export const generalLocalSeoStats: StatisticBoxData = NO_VERIFIED_STATISTICS;
export const googleBusinessStats: StatisticBoxData = NO_VERIFIED_STATISTICS;
export const reviewStats: StatisticBoxData = NO_VERIFIED_STATISTICS;
export const mobileSearchStats: StatisticBoxData = NO_VERIFIED_STATISTICS;

/** Industry statistics, keyed by industry. Empty on purpose, see above. */
export const industryStats: Record<string, StatisticBoxData[]> = {};
