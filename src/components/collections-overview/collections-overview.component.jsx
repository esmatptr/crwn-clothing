import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { selectShopCollection } from '../../redux/shop/shop.selectors';

// Commponents
import CollectionPreview from '../../components/preview-collection/preview-collection.component';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview' >
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div >
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollection
});

export default connect(mapStateToProps)(CollectionsOverview);