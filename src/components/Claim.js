import React from 'react';

export default function Claim({ ...props }) {
    return (
        <div className="claim" {...props}>
            <h1 className="claim__title title">Claim</h1>
            <p className="claim__text">132 Tokens Ready to Claim</p>
            <button className="button button--blue claim__button">Claim</button>
        </div>
    );
}
