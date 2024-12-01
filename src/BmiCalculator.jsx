import React, { useState } from 'react';

function BmiCalculator() {
    const [weight, setWeight] = useState(""); // Initialize as empty string
    const [height, setHeight] = useState(""); // Initialize as empty string
    const [bmi, setBmi] = useState("");
    const [msg, setMsg] = useState("");

    const calcBmi = (e) => {
        e.preventDefault();

        // Ensure weight and height are numbers and not empty
        if (!weight || !height || Number(weight) <= 0 || Number(height) <= 0) {
            setMsg("Please enter valid weight and height values.");
            setBmi(""); // Clear BMI
        } else {
            // Calculate BMI
            let formula = (Number(weight) / (Number(height) * Number(height))) * 703;
            setBmi(formula.toFixed(1));

            // Determine BMI category
            if (formula < 18.5) {
                setMsg("You are underweight.");
            } else if (formula >= 18.5 && formula < 24.9) {
                setMsg("You have a healthy weight.");
            } else {
                setMsg("You are overweight.");
            }
        }
    };

    const reload = () => {
        setWeight(""); // Reset weight
        setHeight(""); // Reset height
        setBmi("");    // Reset BMI
        setMsg("");    // Reset message
    };

    return (
        <>
            <div className="app">
                <div className="container">
                    <h2>React JS - BMI Calculator</h2>

                    <form onSubmit={calcBmi}>
                        <div>
                            <label>Enter Weight (lbs):</label>
                            <input
                                className="bmi-input"
                                type="number"
                                placeholder="Enter weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Enter Height (in):</label>
                            <input
                                className="bmi-input"
                                type="number"
                                placeholder="Enter height"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>

                        <div>
                            <button type="submit" className="btn">Submit</button>
                            <button type="button" className="btn btn-reload" onClick={reload}>
                                Reload
                            </button>
                        </div>
                    </form>

                    <div>
                        <h3>Your BMI is: {bmi}</h3>
                        <p className="p-msg">{msg}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BmiCalculator;
