export const mergeObject = (
    object1: Record<string, unknown>,
    object2: Record<string, unknown>
): Record<string, unknown> => ({ ...object1, ...object2 });
