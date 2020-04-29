import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

// Redux
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

// Commponents
// import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverViewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

// const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStart } = this.props
        fetchCollectionsStart()


        // Old code before redux thunk
        // const collectionRef = firestore.collection('collections');

        // // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-f85f2/databases/(default)/documents/collections')
        // //     .then(response => response.json())
        // //     .then(collections => console.log({collections}))

        // // collectionRef.onSnapshot(async snapshot => {
        // collectionRef.get().then(snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     this.props.updateCollections(collectionsMap);
        //     this.setState({ loading: false });
        // })
    }
    render() {
        const { match, isCollectionsFetching, isCollectionsoaded } = this.props;
        return (
            <div className='shop-page' >
                {/* This is the default one */}
                {/* <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />} /> */}
                <Route exact path={`${match.path}`} component={CollectionsOverViewContainer} />
                
                {/* <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsoaded} {...props} />} /> */}
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
                
            </div >
        )
    }
}

// const mapStateToProps = createStructuredSelector({
//     isCollectionsFetching: selectIsCollectionFetching,
//     isCollectionsoaded: selectIsCollectionsLoaded
// })

const mapDispatchTopProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchTopProps)(ShopPage);