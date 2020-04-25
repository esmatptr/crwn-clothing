import React from 'react';

// Components
import CollectionITem from '../collection-item/collection-item.component'

import './preview-collection.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>
            {title.toUpperCase()}
        </h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps }) => (
                    <CollectionITem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;