/**
 * describe: 标签列表
 *
 */
import React from 'react';
import styles from './index.css';
import { Icon, Button } from 'antd';
import Ellipis from '../../component/Ellipis';

interface ITagProps {
  tags: any[];
  label?: string;
  onchange?: (value: any) => void;
  hasFold?: boolean; // 是否需要折叠
  checked?: boolean; // 是否需要选中
  hasTitle?: boolean; // 是否需要标题
}

class ITagState {
  showFold: boolean = false;
  isFold: boolean = false;
  checkedTag: any;
}

export default class TagList extends React.Component<ITagProps, ITagState> {
  public state: ITagState = {
    showFold: false,
    isFold: false,
    checkedTag: this.props.tags[0],
  };
  public handleOpenFold = () => {
    this.setState({ isFold: false });
  };

  public handleCloseFold = () => {
    this.setState({ isFold: true });
  };

  public node = React.createRef();

  public componentDidMount() {
    if (this.props.hasFold) {
      // 获取元素实际高度
      const { scrollHeight }= this.node.current;
      if (scrollHeight > 41) {
        this.setState({ showFold: true });
      }
    }
  }

  handleClick = (tag: any) => {
    if (this.props.onchange) {
      this.props.onchange(tag);
    }
    this.setState({
      checkedTag: tag,
    });
  };

  render() {
    const { tags, label, checked, hasTitle } = this.props;
    const { showFold, isFold, checkedTag } = this.state;
    const labelTitle = label || '标签';
    const checkedTagStyle = {
      background: '#1890ff',
      color: '#fff',
    };
    const foldStyle = {
      height: 41,
      overflow: 'hidden',
    };

    const unFlodStyle = {
      height: '100%',
    };

    const fold = showFold && isFold;

    return (
      <div className={styles.tagListWrap}>
        {hasTitle ? <div className={styles.title}>{labelTitle}:</div> : ''}
        <div ref={this.node} className={styles.tagBox} style={fold ? foldStyle : unFlodStyle}>
          {/* tslint:disable-next-line: jsx-no-multiline-js */}
          {tags.map((tag,index)=> (
            <div
              key={`${tag}-${index}`}
              className={styles.tag}
              onClick={() => this.handleClick(tag)}
              style={tag === checkedTag && checked ? checkedTagStyle : {}}
            >
              <Ellipis value={tag} maxWidth={80} />
            </div>
          ))}
        </div>

        {showFold && (
          <div>
            {/* tslint:disable-next-line: jsx-no-multiline-js */}
            {isFold ? (
              <Button size="small" onClick={this.handleOpenFold}>
                展开
                <Icon type="down"></Icon>
              </Button>
            ) : (
              <Button size="small" onClick={this.handleCloseFold}>
                收起
                <Icon type="up"></Icon>
              </Button>
            )}
          </div>
        )}
      </div>
    );
  }
}

// 增加全部字段
