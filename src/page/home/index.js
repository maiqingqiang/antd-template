import React, {useEffect} from "react";
import {useDispatch, useSelector} from "~/store";
import {useInRouterContext, useLocationPending} from 'react-router-dom';
import {Table} from "antd";

export default (props) => {

    const app = useSelector(state => state.app);
    const dispatch = useDispatch();

    const routerContext = useInRouterContext();
    const pending = useLocationPending();
    console.log(9988, pending);
    console.log(99, routerContext);

    const onclick = () => {
        console.log(app);
        dispatch.app.setLoadingAsync().then(res => {
            console.log(res);
            console.log(111);
        });
    };

    useEffect(() => {
        console.log(props);
    }, []);

    const dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },{
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },{
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },{
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },{
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },{
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },{
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },{
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },{
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },{
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },{
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },{
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },{
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },{
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: '住址2',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: '住址2',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return <Table scroll={{x: 1300}} dataSource={dataSource} columns={columns}/>;
};
