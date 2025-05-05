export const adapter = <T>(objects: T[]): T[] => {
    return objects.map((object: T) => ({...object}))
}