import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux

// Commponents
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = () => (
    <div className='shop-page' >
        <CollectionsOverview />
    </div >
)

const mapStateToProps = createStructuredSelector({
    
});

export default connect(mapStateToProps)(ShopPage);