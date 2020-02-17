export const getEnv = (key: string, defaultValue: any) => {
    return process.env[key] || defaultValue;
};
