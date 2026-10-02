/**
 * "Get a free check" is the primary action of every V4 page (owner decision, 2026-10-02).
 * It always leads to the form on /start-a-project. "Book a 15-min call" (src/lib/booking.ts)
 * stays as the second action.
 */
export const CHECK_PATH = "/start-a-project";
export const CHECK_LABEL = "Get a free check";
/** Reply time promised for the free check (owner decision, 2026-10-02). Change it here only. */
export const CHECK_REPLY_TIME = "two working days";
