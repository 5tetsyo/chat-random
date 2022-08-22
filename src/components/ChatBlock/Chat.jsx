import React, { useContext, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../..';
import classes from './chat.module.css'
import Dialog from './Dialog'
import Loader from './Loader'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import firebase from 'firebase/compat/app'
import Message from './Message';
import { getMessage } from '../API/getMessage';
import { useMessage } from '../API/useMessage';
import { staticUsers } from '../API/staticUsers';
import { useDialogs } from '../API/useDialogs';
import { useFilter } from '../API/useFilter';
import Dialogs2 from './Dialogs2';

const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const ref = useRef(null)
    const [user] = useAuthState(auth)
    const sendTo = useMessage()
    const [inValue, setInValue] = useState('');
    const [chatName, setChatName] = useState('')
    const [dialog, setDialog] = useState(null)
    const messages = useDialogs()
    const filtered = useFilter(messages, chatName)
    const sendAndGet = async() => {
        if (inValue.length > 0) {
            const joke = await getMessage();
            const statUser = staticUsers.filter(u => u.name === dialog)
            sendTo(inValue, dialog, user);
            sendTo(joke.value, dialog, statUser, 'https://cdn-icons-png.flaticon.com/512/149/149071.png');
        }
        setInValue('')
    }
    const executeScroll = () => {
        setTimeout(() => {
            ref.current.scrollTo(0, ref.current.scrollHeight)
        }, 1000)
        setTimeout(() => {
            ref.current.scrollTo(0, ref.current.scrollHeight)
        }, 11*1000)
    }
    const getChat = () => {
        for (let el of messages) {
            if (el.name === dialog) {
                return el
            }
        }
    }
    return (
        <div className={classes.chatBlock}>
            <div className={classes.friendsBlock}>
                <div className={classes.userIcon}>
                    <img src={user.photoURL} alt="" />
                    <button onClick={() => {auth.signOut()}}>Log out</button>
                    <input type="text" placeholder='Search or start a new chat.' value={chatName} onChange={(e) => {setChatName(e.target.value)}}/>
                </div>
                <div style={{marginLeft: '30px', marginTop: '30px', fontSize: '22px', color: 'rgb(56, 207, 207)'}}>Chats</div>
                <div className={classes.dialogsBlock}>
                    {filtered.map(u => <Dialog set={() => {setDialog(u.name)}} user={u}/>)}
                </div>
            </div>
            <div className={classes.messageBlock}>
                {getChat() ?      <div className={classes.messageHeader}>
                    <img src={getChat().mes.find(el => !el.hasOwnProperty('uid')).photoURL}/>
                    <div>{getChat().mes.find(el => !el.hasOwnProperty('uid')).displayName}</div>
                </div>
                : <div></div>
                }
                <div ref={ref} style={{width: '100%', height: '80vh', border: '1 px solid', overflowY: 'auto', overflowX: 'hidden'}}>
                    {dialog ? <Message user={getChat()}/> : <div style={{position:'relative', top: '40%', left: '40%', fontSize: '30px', fontWeight: '500'}}>Open chat to start.</div>}
                </div>
                <div className={classes.inputBlock}>
                        <input type="text" value={inValue} placeholder='Type and send your message.' onChange={(e) => {setInValue(e.target.value)}}/>
                        <button onClick={() => {sendAndGet(); executeScroll()}}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chat;