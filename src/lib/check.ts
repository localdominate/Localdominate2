/**
 * "Get a free check" is the primary action of every V4 page (owner decision, 2026-10-02).
 * It always leads to the form on /start-a-project. "Book a 15-min call" (src/lib/booking.ts)
 * stays as the second action.
 */
export const CHECK_PATH = "/start-a-project";
export const CHECK_LABEL = "Get a free check";
export const CHECK_LABEL_SHORT = "Free check";

/** On the German page the navigation's primary action leads to the German form on that page. */
export const CHECK_DE = { prefix: "/de", path: "/de#check", label: "Kostenlosen Check anfordern", short: "Check" } as const;
/** Reply time promised for the free check (owner decision, 2026-10-02). Change it here only. */
export const CHECK_REPLY_TIME = "two working days";

/**
 * On the creators landing page the primary action is "Get my page", an anchor to the request form
 * on that page (owner's instruction of 2026-10-02). The navigation follows it there.
 */
export const CHECK_CREATORS = { prefix: "/creators", anchor: "get-yours", label: "Get my page", short: "Get my page" } as const;
