import React from 'react';
import Input from './common/Input';

export default function Invest() {
    return (
        <div className="main__background invest">
            <h1 className="invest__title">Invest</h1>
            <Input />
            <div className="invest__buttons">
                <button className="invest__button button">Approve BUSD</button>
                <button className="invest__button button button--blue">Deposit BUSD</button>
            </div>
        </div>
    );
}
