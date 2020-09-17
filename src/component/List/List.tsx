import React from 'react';
import Item from './item';

class IListProps {}
class IState {
  list: any[] = [
    '1.恰同学少年，风华正茂。',
    '2.夜来风雨声，花落知多少。',
    '3.但愿人长久，千里共婵娟。',
    '4.明月几时有？把酒问青天。',
    '5.曾经沧海难为水，除却巫山不是云。',
    '6.人生若只如初见，何事秋风悲画扇。',
    '7.寂寞空庭春欲晚，梨花满地不开门。',
    '8.故人西辞黄鹤楼，烟花三月下扬州。',
  ];
}
class List extends React.Component<IListProps, IState> {
  public state = new IState();
  handleDeleteList = (text: any) => {
    const { list } = this.state;
    const index = list.findIndex(v => v === text);
    // const newList = list.splice(index, 1);
    // console.log(list, newList);

    list.splice(index, 1);
    this.setState({
      list,
    });
  };

  render() {
    return (
      <div>
        {this.state.list.map((item, index) => (
          <Item text={item} handleDeleteList={this.handleDeleteList} />
        ))}
      </div>
    );
  }
}
export default List;
