import * as React from 'react';
import classnames from 'classnames';

export default function CascadeGroups(props) {
  const { groupList, selectIds, onItemClick } = props;

  const createTreeData = (list = [], idx) => ({
    key: `treeData_${idx}`,
    dataList: list,
  });
  return (
    <div className="lfc-cascader-groups">
      {groupList.map(createTreeData).map(({ key, dataList }, idx) => (
        <div key={key} className="lfc-cascader-groups-list">
          {dataList.map(item => {
            const isSelected = item.id === selectIds[idx];
            return (
              <div
                key={item.value}
                className={classnames('lfc-cascader-groups-list-item', {
                  'lfc-cascader-groups-list-item_selected': isSelected,
                })}
                onClick={() => onItemClick(idx, item.id)}
              >
                <span className="lfc-cascader-groups-list-item-label">{item.name}</span>
                <span className="lfc-cascader-groups-list-item-gt">{'>'}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
