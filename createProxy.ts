export const createProxy = <S extends Record<any, any>, C extends (...args: any[]) => any>(state: S, callBack: C) => {
    return new Proxy(state, {
        get(_, property: string) {
            const value = state[property];
            if (value instanceof Array) {
                return callBack(...value);
            }
            return callBack(value);
        },
    }) as { readonly [K in keyof typeof state]: ReturnType<typeof callBack> }
}