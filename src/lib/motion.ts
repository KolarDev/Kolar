/** Shared easing curves, typed as literals so they satisfy framer-motion's Easing type
 *  even when built up outside of a JSX prop position (which loses contextual narrowing). */
export const easeEditorial = [0.16, 1, 0.3, 1] as const
export const easeInOut = 'easeInOut' as const
