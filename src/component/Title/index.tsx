/**
 * describe: 通用标题
 */

import * as React from 'react';

interface IProps {
  level?: number; // 标题级别 默认2级标题
  text: string; // 标题内容 
}

export default class Title extends React.Component<IProps> {
  getTitleFont = () => {
    const { level } = this.props;
    switch (level) {
      case 1:
        return {
          fontWeight: 600,
          fontSize: 25,
        };
      case 2:
        return {
          fontWeight: 500,
          fontSize: 20,
        };
      case 3:
        return {
          fontWeight: 400,
          fontSize: 18,
        };
      default:
        return {
          fontWeight: 500,
          fontSize: 20,
        };
    }
  };

  render() {
    const fontStyle = this.getTitleFont();
    return (
      <div style={{ ...fontStyle, paddingBottom: 16, color: 'rgba(0, 0, 0, 0.85)' }}>
        {this.props.text}
      </div>
    );
  }
}

// 