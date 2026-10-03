export interface MiniSuccessStoryData {
  business: string;
  location: string;
  industry: string;
  metric: string;
  metricLabel: string;
  quote: string;
  author: string;
  role: string;
  timeframe: string;
}

/**
 * Short success stories per industry.
 *
 * Truth rule: this record is empty on purpose. The invented stories (names, quotes, figures) that
 * used to be here were removed. Add an entry only for a real client result that the client has
 * approved in writing. Pages render nothing when there is no entry for their industry.
 */
export const miniSuccessStories: Record<string, MiniSuccessStoryData[]> = {};
