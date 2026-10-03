export interface IndustryBenchmark {
  industry: string;
  slug: string;
  avgReviews: number;
  topPerformerReviews: number;
  avgRating: number;
  avgCitations: number;
  topPerformerCitations: number;
  avgBacklinks: number;
  topPerformerBacklinks: number;
  avgGbpPhotos: number;
  avgGbpPosts: string;
  avgDomainAuthority: number;
}

export interface IndustryBenchmarkGroupData {
  currentIndustry: string;
  rows: IndustryBenchmark[];
}

/**
 * Industry benchmarks (reviews, citations, backlinks per industry).
 *
 * Truth rule: this record is empty on purpose. The earlier figures had no source and were removed.
 * Add a group only when every row comes from a named study that has been opened and checked, and
 * note its URL next to the data. IndustryBenchmarkTable renders nothing without rows.
 */
export const industryBenchmarkData: Record<string, IndustryBenchmarkGroupData> = {};
