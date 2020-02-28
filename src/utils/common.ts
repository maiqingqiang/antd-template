export const getEnv = (key: string, defaultValue: any) => {
    return process.env[key] || defaultValue;
};

export const isEnvDevelopment = process.env.NODE_ENV === 'development';
export const isEnvProduction = process.env.NODE_ENV === 'production';
