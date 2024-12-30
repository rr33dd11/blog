export const toSearchParams = <T>(obj: T): URLSearchParams => {
    const params = new URLSearchParams();
    
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    Object.entries(obj).forEach(([key, value]) => {
        if (value !== undefined && value !== null && String(value) !== "") {
            if (Array.isArray(value) && value.length > 0) {
                value.forEach(el => {
                    params.append(key, String(el));
                })
            }
            else {
                params.append(key, String(value));
            }
        }
    });

    return params;
}