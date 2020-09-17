import React from 'react';
import { Table } from 'antd';

class IState {}
interface IProps {
  data: any[];
  columns: any[];
  onChange?: (selectedRowKeys: any, selectedRows: any) => void;
  tableOptions?: any;
}
export default class ExpandTable extends React.Component<IProps> {
  public render() {
    const { data, columns, tableOptions } = this.props;
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.props.onChange(selectedRowKeys, selectedRows);
      },
    };

    return (
      <React.Fragment>
        <Table
          dataSource={data}
          columns={columns}
        //   pagination={false} 
          // 渲染额外行
          expandedRowRender={record => <p>{record.description}</p>}
          // 去掉表格加号图标
          
          expandIconAsCell={false}
          expandIconColumnIndex={-1}
          // 行点击展示额外行
          expandRowByClick
          rowSelection={rowSelection}
          // tableOptions={...tableOptions}
        />
      </React.Fragment>
    );
  }
}
