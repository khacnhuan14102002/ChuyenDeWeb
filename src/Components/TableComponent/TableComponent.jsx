import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';

const TableComponent = (props) => {
  const {selectionType= 'checkbox'} = props;

    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Nhuan',
            age: 18,
            address: 'Tien Giang',
        },
        {
            key: '2',
            name: 'Thuan',
            age: 18,
            address: 'Ca Mau',
        },
        {
            key: '3',
            name: 'Thi',
            age: 18,
            address: 'Tien Giang',
        },
        {
            key: '4',
            name: 'Tuyet',
            age: 18,
            address: 'An Giang',
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            name: record.name,
        }),
    };

    return (
        <div>

            <Divider />

            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};

export default TableComponent;
