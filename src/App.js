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
                                    Today is all about you, girl
                                </h3>
                                <button className="button" onClick={() => setStep(1.5)}>
                                    Продолжить...
                                </button>
                            </div>
                        )}
                        {step === 1.5 && (
                            <div>
                                <div style={{ margin: "100px 0 25px" }}>
                                    <p>
                                        Сейчас узнаем, с кем мы имеем дело<br />
                                        Как зовут твоих котиков?
                                    </p>
                                </div>

                                <input
                                    placeholder="Введи ответ сюда"
                                    type="text"
                                    onChange={(e) => setPassphrase(e.target.value)}
                                />
                                <button
                                    className="button"
                                    disabled={(passPhrase !== "Йоша и Муся") && (passPhrase !== "Муся и Йоша")}
                                    onClick={() => setStep(2)}
                                    style={{ opacity: (passPhrase !== "Йоша и Муся") && (passPhrase !== "Муся и Йоша") ? 0.5 : 1 }}
                                >
                                    Продолжить
                                </button>
                                <center
                                    style={{
                                        fontSize: "12px",
                                        marginTop: "10px",
                                        color: "#3d3d3d",
                                    }}
                                >
                                    С большой буквы и через союз "и"
                                </center>
                                <center
                                    style={{
                                        fontSize: "12px",
                                        marginTop: "10px",
                                        color: "#3d3d3d",
                                    }}
                                >
                                    <b>Подсказка:</b> 2 кошки, каждая по 4 буквы
                                </center>
                            </div>
                        )}
                        { step === 2 && (
                            <div>
                                <div style={{ margin: "100px 0 25px" }}>
                                    <p>
                                        Как зовут котика, у которого сегодня день рождения?
                                    </p>
                                </div>

                                <input
                                    placeholder="Введи ответ сюда"
                                    type="text"
                                    onChange={(e) => setPassphrase(e.target.value)}
                                />
                                <button
                                    className="button"
                                    disabled={(passPhrase !== "Солнце") && (passPhrase !== "Ника")}
                                    onClick={() => setStep(3)}
                                    style={{ opacity: (passPhrase !== "Солнце") && (passPhrase !== "Ника") ? 0.5 : 1 }}
                                >
                                    Продолжить
                                </button>
                                <center
                                    style={{
                                        fontSize: "12px",
                                        marginTop: "10px",
                                        color: "#3d3d3d",
                                    }}
                                >
                                    С БОЛЬШОЙ БУКВЫ ЛЮБИМКУ УГУ??
                                </center>
                                <center
                                    style={{
                                        fontSize: "12px",
                                        marginTop: "10px",
                                        color: "#3d3d3d",
                                    }}
                                >
                                    <b>Подсказка:</b> Еще правильным ответом будет звезда, что светит нам днем
                                </center>
                            </div>
                        )}
                        { step === 3 && (
                            <div>
                                <div style={{ margin: "100px 0 25px" }}>
                                    <p>
                                        И последнее, как ты называла меня, когда мы только начали встречаться?
                                    </p>
                                </div>

                                <input
                                    placeholder="Введи ответ сюда"
                                    type="text"
                                    onChange={(e) => setPassphrase(e.target.value)}
                                />
                                <button
                                    className="button"
                                    disabled={passPhrase !== ("Дединсайд")}
                                    onClick={() => setStep(4)}
                                    style={{ opacity: passPhrase !== "Дединсайд" ? 0.5 : 1 }}
                                >
                                    Продолжить
                                </button>
                                <center
                                    style={{
                                        fontSize: "12px",
                                        marginTop: "10px",
                                        color: "#3d3d3d",
                                    }}
                                >
                                    Без пробелов и с большой буквы
                                </center>
                                <center
                                    style={{
                                        fontSize: "12px",
                                        marginTop: "10px",
                                        color: "#3d3d3d",
                                    }}
                                >
                                    <b>Подсказка:</b> IS THAT TOKIO GHOUL REFERENCE???
                                    и еще нефорыыыы
                                </center>
                            </div>
                        )}
                        {step === 4 && (
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
                                        Happy Birthday, Gummybear
                                    </h2>
                                    <span>
                    I pray Allah keeps coming through for you like
                    you always showup for your loved ones...
                  </span>
                                    <br /><br />
                                    <span>
                                        Ну а если серьезно, то от всего сердца желаю провести вместе все лучшие и не очень
                                        моменты, ведь они буду всегда приятными, ведь рядом будешь ты. Ты прямо сейчас являешься лучше версией себя и никакая тревога не изменит этого.
                                        С празднком, любимая, и до скорейшей нашей встречи. Все лучшее - впереди, хихи.
                                    </span>
                                    <p class>Вечно твой, любимая</p>
                                    <div>
                                        <button
                                            onClick={() => setStep(1)}
                                            style={{ marginTop: "20px" }}
                                        >
                                            Вернуться
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                )}
            </div>
            <div></div>
        </div>
    );
}
