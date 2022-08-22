import React from 'react';
import Loader from './Loader';

const Message = ({user}) => {
    function toDateTime(secs) {
        var t = new Date(Date.UTC(1970, 0, 1));
        t.setUTCSeconds(secs);
        return t;
    }
    return (
        <div className='msBlock'>
            {user.mes[user.mes.length-1].createdAt ? user.mes.map(m => <div className='msWrapper'><img style={{float: m.hasOwnProperty('uid') ? 'right' : 'left', 
                marginTop: '10px'}} src={m.photoURL} alt="" /><div className='messages' 
            style={{
                float: m.hasOwnProperty('uid') ? 'right' : 'left',
                backgroundColor: m.hasOwnProperty('uid') ? 'rgb(211, 211, 211)' : 'rgb(80, 80, 182)',
                color: m.hasOwnProperty('uid') ? 'black' :'rgb(255, 255, 255)',
                }}>{m.text}
                <div style={{fontSize: '12px', color: 'rgb(150, 150, 150)'}}>{toDateTime(m.createdAt.seconds).toLocaleTimeString()}</div></div></div>) : <Loader/>}
        </div>
    );
};

export default Message;