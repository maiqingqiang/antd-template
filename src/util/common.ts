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

/**
 * 懒加载组件
 * @param path
 */
export const lazyElement = (path: string) => () => import(path);

/**
 * 是否外链
 * @param path
 * @return boolean
 */
export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path);

/**
 * 逐级分割 path
 * @param url
 * @return string[]
 */
export const splitPath = (url: string) => {
    const splited = url.split('/').filter(i => i);
    return splited.map((item, index) => `/${splited.slice(0, index + 1).join('/')}`);
};

/**
 * 延迟
 * @param ms
 */
export const delay = (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));
