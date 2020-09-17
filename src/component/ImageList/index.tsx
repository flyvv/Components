/*
 * @author flyvv
 * @describe 图片List 利用react-window 封装 支持滚动
 *
 **/

import React from 'react';
import styles from './index.css';
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

interface IProps {
  data: any[];
  onchange: (values: any) => void;
  hasCheckedAll: boolean; // 是否需要全选
}
class IState {
  checkedList: any;
  indeterminate: boolean;
  checkAll: boolean;
  id: string = '';
}
const plainOptions = ['1', '2', '3','4'];
const defaultCheckedList = ['1', '2', '3'];
export default class ImageList extends React.Component<IProps, IState> {
  // public state = new IState();
  public state: IState = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  onCheckAllChange = e => {
    const { checkedList, indeterminate, checkAll } = this.state;
    // console.log(e, 'eeeeeeee');
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  onChange = (checkedList) => {
    console.log(checkedList, 'checkedList');
    
    // const { checkedList,indeterminate ,checkAll} = this.state;
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length == plainOptions.length,
    });
    // 1111,e, e.target.value,
    // console.log(checkedValues);
  };

  render() {
    const { data } = this.props;
    const imgListLength = data.length || 0;
    // console.log(this.state.imgId, 'ghjkjhghjkjhg');
    return (
      <div
        style={{
          padding: '8px',
          boxShadow: '0 0 5px #ddd ',
          minHeight: '600px',
          margin: '16px',
        }}
      >
        <div style={{ margin: ' 10px 0' }}>图片总数：{imgListLength}</div>
        <div style={{ borderBottom: '1px solid #E9E9E9', paddingBottom: '8px' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            checked={this.state.checkAll}
            onChange={this.onCheckAllChange}
          >
            全选
          </Checkbox>
        </div>
        <div className={styles.box}>
          <CheckboxGroup
          options={plainOptions}
          value={this.state.checkedList}
          onChange={this.onChange}
          ></CheckboxGroup>
          {/* {data.map(v => (
            <div className={styles.imgBox}>
              <span>
                <CheckboxGroup
                onChange={this.onChange}>
                <Checkbox
                  value={v.pageNum}
                  // defaultChecked={60}
                  // onChange={this.onChange}
                ></Checkbox>
                </CheckboxGroup>
              </span>
              <img src={v.middleURL} alt="" />
              <div>{v.pageNum}</div>
            </div>
          ))} */}
        </div>
      </div>
    );
  }
}
