import React from 'react';
import ImageList from '../../../component/ImageList/index'
import data from './data.ts'

export default function() {
  return (
    <div>
        <ImageList data={data.data} />
    </div>
  );

}

