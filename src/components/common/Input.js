import NumberFormat from "react-number-format";
import USD from './../../Icons/USD';

export default function Input({ value, setValue, buttonTitle, onClick }) {

    function handleInputChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className="input-wrapper">
            <div className="input-wrapper__row">
                <USD className="input-wrapper__icon" />
                <NumberFormat className="input input-wrapper__input" value={value} onChange={handleInputChange} placeholder="Enter value" thousandSeparator={true} allowLeadingZeros={false} allowNegative={false} />
            </div>
            <button className="input-wrapper__button" onClick={onClick}>MAX</button>
        </div>
    );
}
