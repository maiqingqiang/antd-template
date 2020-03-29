import React from "react";

export interface MateOptions {
    title: string;              // 页面标题
    permission?: string[];       // 权限
    role?: string[];             // 角色
    icon?: React.ReactElement;               // 菜单显示的图标
    breadcrumb?: boolean;        // 是否显示面包屑
    auth?: boolean;              // 检验是否登录
}

export interface Options {
    path: string                                // 路由地址
    mate: MateOptions,
    element?: React.ReactElement,        // 显示的布局或者组件
    hidden?: boolean,                            // 是否显示在侧边栏菜单
    module?: boolean,                            // 是否显示在顶部模块菜单
    redirect?: string,                           // 重定向地址
    alway?: boolean,                             // 如果 children 只有一个,是否直接显示为顶级
    subRoutes?: Options[]                         // 子路由
}
