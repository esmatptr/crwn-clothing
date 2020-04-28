import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// Redux
import { updateCollections } from '../../redux/shop/shop.actions';

// Commponents
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

class ShopPage extends React.Component {

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            console.log(snapshot);
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            console.log({ collectionsMap })
            this.props.updateCollections(collectionsMap);
        })
    }
    render() {
        const { match } = this.props;
        return (
            <div className='shop-page' >
                {/* This is the default one */}
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div >
        )
    }
}

const mapDispatchTopProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchTopProps)(ShopPage);