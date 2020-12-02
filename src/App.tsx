import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import './App.css';

function App() {
    const [minValue, setMinValue] = useState<number>(8);
    const [maxValue, setMaxValue] = useState<number>(10);
    const [currentValue, setCurrentValue] = useState<number>(0);
    const [isValuePositive, setIsValuePositive] = useState<boolean>(true);

    const setMinMaxValue = () => {
        setCurrentValue(minValue)
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {

        if (+e.currentTarget.value < 0) {
            setIsValuePositive(false);
            setMinValue(-1);
        }


        if (+e.currentTarget.value >= 0) {
            setIsValuePositive(true)
            setMinValue(+e.currentTarget.value);
        }

    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }
    const onChangeCurrentValue = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(+e.currentTarget.value)
    }
    const resetCurrentValue = () => {
        setCurrentValue(0);
    }
    const incCurrentValue = () => {

        if (currentValue >= maxValue) {
            setCurrentValue(maxValue)
        } else {
            setCurrentValue(currentValue + 1);
        }
    }

    return (
        <div className="App">
            <div>
                <div>
                    minValue
                    <input type="number" value={minValue} max={maxValue - 1} onChange={onChangeMinValue}/>
                </div>
                <div>
                    maxValue
                    <input type="number" value={maxValue} min={minValue + 1} onChange={onChangeMaxValue}/>
                </div>
                <input type="button" name={'SetValue'} value={'Set value'} onClick={() => {
                    setMinMaxValue()
                }}/>
            </div>
            <div>
                currentValue
                {isValuePositive ? <input type="number" min={minValue} max={maxValue} value={currentValue}
                                          onChange={onChangeCurrentValue}/>
                    : <div>ERROR</div>

                }
                <input type="button" name={'resetCurrentValue'} value={'Reset current value'} onClick={() => {
                    resetCurrentValue()
                }}/>
                <input type="button" name={'IncCurrentValue'} value={'Inc'} onClick={() => {
                    incCurrentValue()
                }}/>
            </div>
        </div>
    );
}

export default App;
