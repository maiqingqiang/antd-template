import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {message} from 'antd';
import {MessageType} from 'antd/lib/message';

export interface HttpRequestConfig extends AxiosRequestConfig {
    loading?: boolean
    showToast?: boolean
}

export interface HttpOptions {
    maxAge?: number
    timeout?: number
    withCredentials?: boolean
}

let loading: MessageType;

/**
 * 网络请求 Http Class
 * @author John Mai
 */
class Http {
    private static instance: Http;
    options: HttpOptions = {
        maxAge: 0,
    };

    constructor(options?: HttpOptions) {
        this.options = {
            ...this.options,
            ...options
        };

        /**
         * 设置默认请求超时 环境变量 REACT_APP_HTTP_TIMEOUT
         */
        const timeout = this.options.timeout || process.env.REACT_APP_HTTP_TIMEOUT || undefined;
        if (timeout) axios.defaults.timeout = Number(timeout);

        axios.defaults.withCredentials = this.options.withCredentials !== undefined ? this.options.withCredentials : true;

        /**
         * 请求拦截器
         */
        axios.interceptors.request.use((config: HttpRequestConfig) => {
            if (config.loading) {
                loading = message.loading('正在获取……', 0);
            }

            return config;
        }, error => {
            loading!();
            return Promise.reject(error);
        });

        /**
         * 响应拦截器
         */
        axios.interceptors.response.use(response => {
            loading!();

            const config: HttpRequestConfig = response.config;
            if (config.showToast) {
                message.error(1);
            }
            return response;
        }, error => {
            loading!();
            if (error.response) {
                if (error.config.showToast) {
                    message.error(this.validateStatus(error.response));
                }
            } else {
                if (error.message.includes('timeout')) {
                    message.error('请求超时！请检查网络是否正常');
                } else {
                    message.error('请求失败，请检查网络是否已连接');
                }
            }

            return Promise.reject(error);
        });
    }

    /**
     * 单例
     * @param options
     */
    public static init(options?: HttpOptions) {
        if (!this.instance) {
            this.instance = new Http(options);
        }

        return this.instance;
    }

    /**
     * GET Http
     * @param url
     * @param params
     * @param config
     */
    public static get(url: string, params?: any, config?: {}) {
        return axios.get(url, {
            params: params,
            ...config
        });
    }

    /**
     * PUT Http
     * @param url
     * @param data
     * @param config
     */
    public static put(url: string, data?: any, config?: HttpRequestConfig) {
        return axios.put(url, data, config);
    }

    /**
     * PATCH Http
     * @param url
     * @param data
     * @param config
     */
    public static patch(url: string, data?: any, config?: HttpRequestConfig) {
        return axios.patch(url, data, config);
    }

    /**
     * OPTIONS Http
     * @param url
     * @param config
     */
    public static options(url: string, config?: HttpRequestConfig) {
        return axios.options(url, config);
    }

    /**
     * DELETE Http
     * @param url
     * @param params
     * @param config
     */
    public static delete(url: string, params: any, config: {}) {
        return axios.delete(url, {
            params: params,
            ...config
        });
    }

    /**
     * 验证状态码
     * @param response
     */
    public validateStatus(response: AxiosResponse) {
        let message = '';
        switch (response.status) {
            case 400:
                message = '请求错误(400)';
                break;
            case 401:
                message = '未授权，请重新登录(401)';
                break;
            case 403:
                message = '拒绝访问(403)';
                break;
            case 404:
                message = '请求出错(404)';
                break;
            case 408:
                message = '请求超时(408)';
                break;
            case 500:
                message = '服务器错误(500)';
                break;
            case 501:
                message = '服务未实现(501)';
                break;
            case 502:
                message = '网络错误(502)';
                break;
            case 503:
                message = '服务不可用(503)';
                break;
            case 504:
                message = '网络超时(504)';
                break;
            case 505:
                message = 'HTTP版本不受支持(505)';
                break;
            default:
                message = `连接出错(${response.status})!${response.data && response.data.message ? response.data.message : response.statusText}`;
        }
        return message;
    }
}

export default Http;
export {axios};
