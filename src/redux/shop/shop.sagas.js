import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';

import shopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();

        // we need to use call function as we can in order to yields it, first param is function, and athen all the params
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);

        // use put to dispatch actions
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (err) {
        yield put(fetchCollectionsFailure(err));
    }

    // dispatch(fetchCollectionsStart());

    // collectionRef.get().then(snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap));
    // }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionSaga() {
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionsAsync
    );
}


// Export
export default function* shopSagas() {
    yield all([
        call(fetchCollectionSaga)
    ])
}