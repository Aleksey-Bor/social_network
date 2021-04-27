import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    Alex
                </div>
                <div className={style.dialog}>
                    Nastya
                </div>
                <div className={style.dialog}>
                    Marsya
                </div>
                <div className={style.dialog}>
                    Bill
                </div>
                <div className={style.dialog}>
                    Steve
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi!</div>
                <div className={style.message}>How do you like programming?</div>
                <div className={style.message}>I love learning React with the IT-KamaSutra.</div>
            </div>
        </div>
    );
}

export default Dialogs;