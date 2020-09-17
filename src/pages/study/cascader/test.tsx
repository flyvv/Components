import * as React from 'react';
import * as _ from 'lodash';
import CascadeTags from './CascadeTags';
import CascadeLabels from './CascadeLabels';
import CascadeGroups from './CascadeGroups';
import Container from './Container';
import './index.css';

const { useState, useEffect } = React;

// 通过比较changeList/listAll/target的差异 返回新的target
const pathList = (getValue: any, getLabelStr: any) => (changeList:any, listAll:any, target:any) => {
  const listSet = new Set(changeList.map(getValue));
  const delList = listAll.filter((item:any) => !listSet.has(getValue(item)));
  const delListSet = new Set(delList.map(getValue));
  const newTarget = target.filter((item:any) => !delListSet.has(getValue(item)));
  const newTargetSet = new Set(newTarget.map(getValue));
  const addList = changeList
    .filter((item:any) => !newTargetSet.has(getValue(item)))
    .map((data:any)=> ({
      label: getLabelStr(data),
      value: data.id,
    }));
  return newTarget.concat(addList);
};

/** 通过第一个数的type判断一组数是标签还是分组 */

const isLabel = (list: any) => {
   
 // _.get(_.first(list), 'isLeaf') === 1
    return list[0].isleaf === 1
};

interface Label {
    parentId: string
  label: string;
  value: number;
  children?: Label[];
}

/**
 * 级联选择框
 */
function Cascader(props: {
  onChange?: (ids: any[]) => void;
  fetch?: (groupId: number) => Promise<any>;
  firstList: Label[];
  value?: number[];
}) {

    
  const {
    // 改变已选择的标签
    onChange ,
    fetch,
    // 根的子节点
    firstList,
  } = props;
  // 已选择的标签
  const value = props.value || [];
  // 数据缓存
  const [cacheData, setCacheData] = useState({});
  // 级联选择列表
  const [groupList, setGroupList] = useState([]);
  // 可选标签列表
  const [labels, setLabels] = useState([]);
  // 级联选择选中的节点ID: 1-2-3
  const [selectIds, setSelectIds] = useState([]);

  // 获取当前选中的groups
  const getSelectGroups = () => selectIds.map((id, idx) => groupList[idx].find((item:any) => item.id === id));

  // 获取级联文本
  const getLabelStr =( data:any) =>
    getSelectGroups()
      .map(item => item.name)
      .concat(data.name)
      .join('/');

  // 获取children
  const getChildren = async (groupId = 0) => {
    // 缓存级联选择列表数据
    if (cacheData[groupId]) {
      return cacheData[groupId];
    }
    const children = await fetch(groupId);
    setCacheData({
      ...cacheData,
      [groupId]: children,
    });
    return children;
  };

  // 初始化cascadeList
  useEffect(() => { 
    if (isLabel(firstList)) {
      setLabels(firstList);
    } else {
      setGroupList([firstList]);
    }
  }, []);

  // 标签树
  const getCascadeGroupsProps = () => ({
    // 点击分组
    async onItemClick(idx: any, id: any) { 
      setSelectIds(selectIds.slice(0, idx).concat(id));
      const list = await getChildren(id);
      
      if (isLabel(list)) {
        setLabels(list);
      } else {
        const newGroupList = groupList.slice(0, idx + 1);
        if (list.length) newGroupList.push(list);
        setGroupList(newGroupList);
        setLabels([]);
      }
    },
    groupList,
    selectIds,
  });

  // 标签名称
  const getCascadeLabelsProps = () => {
    const getValue = (item: any )=> item.id;
    const patch = pathList(getValue, getLabelStr);
    const labelsSet = new Set(labels.map(getValue));
    return {
      onChange(ids: any) {
        const idSet = new Set(ids);
        const selectLabels = labels.filter(item => idSet.has(getValue(item)));
        onChange(patch(selectLabels, labels, value));
      },
      options: labels,
      checkedList: value.map(getValue).filter(val => labelsSet.has(val)),
    };
  };
  // 已选标签
  const getCascadeTagsProps = () => ({
    checkList: value,
    onChange,
  });

  return (
    <div className="lfc-cascader-wrap">
      <Container title="标签树">
        <CascadeGroups {...getCascadeGroupsProps()} />
      </Container>
      <Container title="标签名称">
        <CascadeLabels {...getCascadeLabelsProps()} />
      </Container>
      <Container title="已选标签" className="lfc-cascader-container-tags">
        <CascadeTags {...getCascadeTagsProps()} />
      </Container>
    </div>
  );
}

export default Cascader;
