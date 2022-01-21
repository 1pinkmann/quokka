import Header from './components/Header';
import NotificationProvider from './contexts/NotificationProvider';
import Select from './components/common/Select';

import netflixIcon from "./images/icons/netflix.svg";

const selectItems = [
    { title: "Netflix Inc.", id: 0, selected: true },
    { title: "Netflix Inc. 2", id: 1, selected: false },
    { title: "Netflix Inc.", id: 2, selected: false },
    { title: "Netflix Inc.", id: 3, selected: false },
];

export default function App() {

    return (
        <NotificationProvider>
            <Header />
            <main className="main container">
                <div className="main__top">
                    <div className="main__column main__column--1 main__column--top">
                        <Select className="select--main" list={selectItems} />
                    </div>
                    <div className="main__column main__column--2 main__column--top">
                        <div className="main__wrapper main__wrapper--top">
                            <div className="main__selected">
                                <img src={netflixIcon} className="main__selected-icon" alt="netflix" />
                                <p className="main__selected-text">Netflix Inc.</p>
                            </div>
                            <div className="main__status">
                                <h6 className="main__status-title">Status</h6>
                                <p className="main__status-text">Accepting Investments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </NotificationProvider>
    );
}