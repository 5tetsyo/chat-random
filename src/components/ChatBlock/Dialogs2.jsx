import React from 'react';

const Dialogs2 = ({dialogs, set}) => {
    const icon = dialogs[0].mes ? dialogs[0].mes.find(el => el.displayName === dialogs[0].name) : 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
    return (
        <div>
            {dialogs.map(dialog => {
                return (
                    <div onClick={() => {set(dialog)}}>
                        <div>
                        <img src={icon ? icon.photoURL : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" />
                        <div>{dialog.name}</div>
                        <div style={{fontSize: '12px', color: 'rgb(150, 150, 150)', display: 'inline'}}>{dialog.mes[dialog.mes.length - 1].text}</div>
                        <div style={{marginLeft: '45%', fontSize: '12px', color: 'rgb(150, 150, 150)'}}>{}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Dialogs2;