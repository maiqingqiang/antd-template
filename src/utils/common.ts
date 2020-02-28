/**
 * 公共函数集
 * @author John Mai
 */


/**
 * 获取 env 环境变量
 * @param key               变量名称
 * @param defaultValue      默认值
 */
export const getEnv = (key: string, defaultValue: any) => {
    return process.env[key] || defaultValue;
};

/**
 * 判断是否开发环境
 */
export const isEnvDevelopment = process.env.NODE_ENV === 'development';

/**
 * 判断是否生产环境
 */
export const isEnvProduction = process.env.NODE_ENV === 'production';
