import "./styles.css";
import { useState, useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function App() {
    const [step, setStep] = useState(1);
    const [passPhrase, setPassphrase] = useState();
    const [valid, setValid] = useState(false);

    const date = new Date();

    useEffect(() => {
        setValid(true);
    }, [date]);

    return (
        <div>
            <div className="App">
                {!valid && <h1>Kindly refresh at midnight</h1>}
                {valid && (
                    <div>
                        {step === 1 && (
                            <div>
                                <h3 style={{ margin: "100px 0 20px" }}>
                                    Today is all about you, GB
                                </h3>
                                <button className="button" onClick={() => setStep(1.5)}>
                                    Proceed...
                                </button>
                            </div>
                        )}
                        {step === 1.5 && (
                            <div>
                                <div style={{ margin: "100px 0 25px" }}>
                                    <p>
                                        What do you call me when I call you <b>Bear</b>
                                    </p>
                                </div>

                                <input
                                    placeholder="Enter answer here"
                                    type="password"
                                    onChange={(e) => setPassphrase(e.target.value)}
                                />
                                <button
                                    className="button"
                                    disabled={passPhrase !== "Worm"}
                                    onClick={() => setStep(2)}
                                    style={{ opacity: passPhrase !== "Worm" ? 0.5 : 1 }}
                                >
                                    Submit
                                </button>
                                <center
                                    style={{
                                        fontSize: "12px",
                                        marginTop: "10px",
                                        color: "#3d3d3d",
                                    }}
                                >
                                    The answer should be case sensitive
                                </center>
                                <center
                                    style={{
                                        fontSize: "12px",
                                        marginTop: "10px",
                                        color: "#3d3d3d",
                                    }}
                                >
                                    <b>Hint:</b> 4 letters and all in uppercase
                                </center>
                            </div>
                        )}
                        {step === 2 && (
                            <div>
                                <Confetti
                                    width={window.innerWidth}
                                    height={window.innerHeight}
                                    tweenDuration={5000}
                                />
                                <div
                                    style={{
                                        maxWidth: "350px",
                                        padding: "20px",
                                        margin: "0 auto",
                                        border: "2px solid #ff7700",
                                        marginTop: "20px",
                                        backgroundColor: "#fff",
                                    }}
                                >
                                    <h2 style={{ fontSize: "20px" }}>
                                        Happy Birthday, Gummy Bear
                                    </h2>
                                    <span>
                    From the deepest part of my heart, I'm wishing you the best
                    years ahead. I pray Allah keeps coming through for you like
                    you always showup for your family and loved ones...
                  </span>
                                    <p class>Many happy returns, baby</p>
                                    <div>
                                        <button
                                            onClick={() => setStep(1)}
                                            style={{ marginTop: "20px" }}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <p style={{ color: "#333" }}>
                                Welcome to another chapter of greatness
                            </p>
                        )}
                    </div>
                )}
            </div>
            <div></div>
        </div>
    );
}
