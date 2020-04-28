import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

// Commponents
import CollectionPreview from '../../components/preview-collection/preview-collection.component';

const CollectionsOverview = ({ collections }) => {
    console.log('collections', collections)
    return (
        <div className='collections-overview' >
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div >
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);