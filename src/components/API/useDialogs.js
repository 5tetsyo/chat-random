import { useContext } from 'react';
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { Context } from '../..';

export const useDialogs = () => {
    const {auth, firestore} = useContext(Context)
    const [messageForChuck] = useCollectionData(firestore.collection('messageForChuck').orderBy('createdAt'));
    const [messageForAlice] = useCollectionData(firestore.collection('messageForAlice').orderBy('createdAt'));
    const [messageForPrice] = useCollectionData(firestore.collection('messageForPrice').orderBy('createdAt'));
    const [messageForAdam] = useCollectionData(firestore.collection('messageForAdam').orderBy('createdAt'));
    const [messageForViktoria] = useCollectionData(firestore.collection('messageForViktoria').orderBy('createdAt'))
    return [
        {mes: messageForChuck, name: 'Chuck'}, 
        {mes: messageForAlice, name: 'Alice'}, 
        {mes: messageForPrice, name: 'Price'}, 
        {mes: messageForAdam, name: 'Adam'}, 
        {mes: messageForViktoria, name: 'Viktoria'}
    ]
}