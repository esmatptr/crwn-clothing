import React from 'react';
import { Route } from 'react-router-dom';

// Redux

// Commponents
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
    <div className='shop-page' >
        {/* This is the default one */}
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div >
)


export default ShopPage;