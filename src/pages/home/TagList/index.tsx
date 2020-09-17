import React from 'react';
import TagList from '../../../component/tagList/index';
import Title from '../../../component/Title/index';
import {Table} from 'antd'

const data = [
  '我是tagaaaa',
  '我是tagbbbb',
  '我是tagccsxdhgjghhmhtdyhdrfgdfcc',
  '我是tagdddd',
  '我是tagefghghfeee',
  '我是tagfjghjrfhyfryhffff',
  '我是taggggg',
  '我是taghhhh',
  '我是taghgjjghjghjgyyyy',
  '我是tageeee',
  '我是tagiuuu',
  '我是tagbcbc',
  '我是tagdbdf',
  '我是tagdfbf',
  '我是tagfbdf',
  '我是tagbdbf',
  '我是tagdfbdf',
];

const data1 = [
  '我是tagaaaa',
  '我是tagbbbb',
  '我是tagcccc',
  '我是tagdddd',
  '我是tagecdfvgbhujmk,kjnhgfredrfgyhujeee',
  '我是tagffff',
  '我是taggggg',
  '我是taghtgybhnjmkmjnhbgvfhhh',
  '我是tagyyyy',
  '我是tageeee',
];

const dataSource = [
  {
    key: '1',
    params: 'tags',
    desc: '标签数据',
    type: 'any[]',
    mustIn: '是',
    defaultVal: '-',
  },
  {
    key: '2',
    params: 'label',
    desc: '标题',
    type: 'string',
    mustIn: '否',
    defaultVal: '-',
  },
  {
    key: '3',
    params: 'hasFold',
    desc: '是否需要折叠',
    type: 'boolean',
    mustIn: '否',
    defaultVal: '-',
  },
  {
    key: '4',
    params: 'checked',
    desc: '是否需要选中',
    mustIn: '否',
    type: 'boolean',
    defaultVal: '-',
  },
  {
    key: '5',
    params: 'hasTitle',
    desc: '是否需要标题',
    mustIn: '否',
    type: 'boolean',
    defaultVal: '-',
  },
];

const columns = [
  {
    title: '参数',
    dataIndex: 'params',
    key: 'params',
  },
  {
    title: '说明',
    dataIndex: 'desc',
    key: 'des',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '是否必传',
    dataIndex: 'mustIn',
    key: 'mustIn',
  },
  {
    title: '默认值',
    dataIndex: 'defaultVal',
    key: 'defaultVal',
  },
];

export default function() {
  return (
    <div style={{ padding: 16 }}>
      <Title text={'标签'} />
      <div style={{margin: '0 0 10px 16px'}}>多个标签的展示，定制化标题，支持展开收起，支持单选，文本过长，toolTip展示全部。</div>
      <Title text={'无标题标签列表'} />
      <TagList tags={data1} />
      <Title text={'有默认标题标签列表'} />
      <div style={{ width: '80%' }}>
        <TagList tags={data1} hasFold={true} hasTitle={true} />
      </div>

      <Title text={'能折叠且支持单选标签列表'} />
      <div style={{ width: '80%' }}>
        <TagList
          checked={true}
          tags={data}
          label={'组件标签'}
          hasFold={true}
          hasTitle={true}
          onchange={v => {
            console.log(v);
          }}
        />
      </div>
      <Title text={'TagList API'} />
      <Table dataSource={dataSource} columns={columns} pagination={false} style={{margin:' 0 0 0 16px' }} />
    </div>
  );
}
