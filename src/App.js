import Header from './components/Header';
import NotificationProvider from './contexts/NotificationProvider';
import Select from './components/common/Select';

import netflixIcon from "./images/icons/netflix.svg";
import Statistics from './components/Statistics';
import Invest from './components/Invest';
import Claim from './components/Claim';
import ConnectPopup from './components/ConnectPopup';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';

const selectItems = [
    { title: "Netflix Inc.", id: 0, selected: true },
    { title: "Netflix Inc. 2", id: 1, selected: false },
    { title: "Netflix Inc.", id: 2, selected: false },
    { title: "Netflix Inc.", id: 3, selected: false },
];

export default function App() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [mobileScreen, setMobileScreen] = useState(false);
    const [sections, setSections] = useState([true, false, false]);

    useEffect(() => {
        function handleMobileScreen() {
            setMobileScreen(window.innerWidth < 990);
        }

        handleMobileScreen();

        window.addEventListener('resize', handleMobileScreen);

        return () => {
            window.removeEventListener('resize', handleMobileScreen);
        }
    }, []);

    return (
        <NotificationProvider>
            <Header popupVisible={popupVisible} setPopupVisible={setPopupVisible} />
            <main className="main container">
                <div className="main__top">
                    <div className="main__column main__column--1 main__column--top">
                        <Select className="select--main" list={selectItems} />
                    </div>
                    <div className="main__column main__column--2 main__column--top">
                        <div className="main__background main__background--top">
                            <img src={netflixIcon} className="main__selected-icon" alt="netflix" />
                            <p className="main__selected-text">Netflix Inc.</p>
                            <div className="main__status">
                                <h6 className="main__status-title">Status</h6>
                                <p className="main__status-text">Accepting Investments</p>
                            </div>
                        </div>
                    </div>
                </div>

                {mobileScreen ?
                    <div className="main__wrapper">
                        <Statistics style={{ display: sections[0] ? "block" : "none" }} />
                        <Invest style={{ display: sections[1] ? "block" : "none" }} />
                        <Claim style={{ display: sections[2] ? "block" : "none" }} />
                    </div>
                    :
                    <div className="main__wrapper">
                        <div className="main__column main__column--1">
                            <Statistics />
                        </div>
                        <div className="main__column main__column--2">
                            <Invest />
                            <Claim />
                        </div>
                    </div>
                }
            </main>
            {mobileScreen && <Footer sections={sections} setSections={setSections} />}
            <ConnectPopup popupVisible={popupVisible} setPopupVisible={setPopupVisible} />
        </NotificationProvider>
    );
}