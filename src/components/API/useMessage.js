import { useContext } from "react"
import { Context } from "../.."
import firebase from 'firebase/compat/app'

export const useMessage = () => {
    const {auth, firestore} = useContext(Context);
    const sendTo = function(message, userName, user, photo) {
        if (user.hasOwnProperty('email')) {
            firestore.collection(`messageFor${userName}`).add({
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                text: message,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        } else {
            setTimeout(() => {
                (photo);
                firestore.collection(`messageFor${userName}`).add({
                    displayName: userName,
                    photoURL: photo || 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
                    text: message,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                })
            }, 10000)
        }
    }
    return sendTo
}