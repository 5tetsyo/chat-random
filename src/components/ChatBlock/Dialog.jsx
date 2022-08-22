import React from 'react';
import classes from './chat.module.css'
import Loader from './Loader';

const Dialog = ({set, user}) => {
    const icon = user.mes ? user.mes.find(el => el.displayName === user.name) : 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
    function toDateTime(secs) {
        var t = new Date(Date.UTC(1970, 0, 1));
        t.setUTCSeconds(secs);
        return t;
    }
    return (
        <div className={classes.dialog} onClick={set}>
            {user.mes ? 
            <div>
                <img src={icon ? icon.photoURL : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" />
                <div>{user.name}</div>
                <div style={{fontSize: '12px', color: 'rgb(150, 150, 150)', display: 'inline'}}>{}</div>
                <div style={{marginLeft: '45%', fontSize: '12px', color: 'rgb(150, 150, 150)'}}>{}</div>
            </div> : 
            <Loader/>
            }
        </div>
    );
};

export default Dialog;