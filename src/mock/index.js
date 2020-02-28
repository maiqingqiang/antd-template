import MockServer from 'mockjs';

const prefix = '/api';

const user = {
    username: 'admin',
    name: '管理员',
    permissions: []
};

// 获取用户信息
MockServer.mock(`${prefix}/user`, 'get', {
    code: 200,
    message: '获取成功',
    data: user
});

// 登录
MockServer.mock(`${prefix}/login`, 'post', {
    code: 200,
    message: '登录成功',
    data: user
});

/**
 * 请求的响应时间范围：暂时设置为 200ms 到 2000ms 之间
 */
MockServer.setup({
    timeout: '200-2000'
});
