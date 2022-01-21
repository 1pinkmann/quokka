
import Goto from './../Icons/Goto';

export default function Statistics() {

    return (
        <ul className="stats">
            <li className="stats__section">
                <div className="stats__row">
                    <h3 className="stats__title stats__title--main">Statistics</h3>
                    <button className="stats__goto">
                        <Goto className="stats__goto-icon" />
                    </button>
                </div>
                <time className="stats__text stats__text--date">Monday, January 17</time>
            </li>
            <li className="stats__section">
                <div className="stats__progress">
                    <h4 className="stats__title stats__title--small">Raised</h4>
                    <div className="stats__progress-bar">
                        <span className="stats__progress-track" style={{ width: "50%" }}></span>
                    </div>
                    <div className="stats__progress-row">
                        <span className="stats__progress-text">$78.500</span>
                        <span className="stats__progress-text">$109.000</span>
                    </div>
                </div>
                <div className="stats__progress">
                    <h4 className="stats__title stats__title--small">Tokens Distributed</h4>
                    <div className="stats__progress-bar">
                        <span className="stats__progress-track" style={{ width: 0 }}></span>
                    </div>
                    <div className="stats__progress-row">
                        <span className="stats__progress-text">0%</span>
                        <span className="stats__progress-text">100%</span>
                    </div>
                </div>
            </li>
            <li className="stats__section">
                <ul className="stats__list">
                    <li className="stats__item">
                        <span className="stats__text">Minimum investment</span>
                        <span className="stats__text stats__text--value">$100</span>
                    </li>
                    <li className="stats__item">
                        <span className="stats__text">Minimum investment</span>
                        <span className="stats__text stats__text--value">$10.000</span>
                    </li>
                    <li className="stats__item">
                        <span className="stats__text">Time remaining</span>
                        <span className="stats__text stats__text--value">3 days, 12 hours, 32 min</span>
                    </li>
                </ul>
            </li>
            <li className="stats__section">
                <ul className="stats__list">
                    <li className="stats__item">
                        <span className="stats__text">Amount invested</span>
                        <span className="stats__text stats__text--value">$800</span>
                    </li>
                    <li className="stats__item">
                        <span className="stats__text">Tokens to claim</span>
                        <span className="stats__text stats__text--value">132</span>
                    </li>
                    <li className="stats__item">
                        <span className="stats__text">Tokens paid out</span>
                        <span className="stats__text stats__text--value">0</span>
                    </li>
                </ul>
            </li>
        </ul>
    );
}
