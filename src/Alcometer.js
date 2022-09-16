import React, { useState } from 'react';

function Alcometer() {
    const [weight, setWeight] = useState(0);
    const [bottles, setBottles] = useState(0);
    const [time, setTime] = useState(0);
    const [gender, setGender] = useState("male");
    const [result, setResult] = useState(0);

    const calculateResult = (e) => {
        e.preventDefault();
        let litres = bottles * 0.33;
        let grams = litres * 36;
        let burning = weight / 10;
        let gramsLeft = grams - (burning * time);

        if (gender === "male") {
            setResult(gramsLeft / (weight * 0.7));
        }
        else {
            setResult(gramsLeft / (weight * 0.6));
        }
    }

    return (
        <div>
            <h3>Alcometer</h3>
            <form>
                <div>
                    <div>
                        <label>Weight</label>
                        <input name="weight" type="number" step="1" onChange={e => setWeight(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Bottles</label>
                        <input name="Bottles" type="number" onChange={e => setBottles(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Time</label>
                        <input name="Time" type="number" onChange={e => setTime(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Gender</label>
                        <input type="radio" name='Gender' value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>male</label>
                        <input type="radio" name='Gender' value="Female" onChange={e => setGender(e.target.value)} /><label>Female</label>
                    </div>
                    <output>{result.toFixed(2)}</output>
                </div>
                <button onClick={e => calculateResult(e)}>Calculate</button>
            </form>

        </div>
    );

}
export default Alcometer;