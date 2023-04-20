"use client";

import { useState } from "react";
import Contador from "./Contador";

const Creador = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    const numbers = Array.from(Array(counter).keys());

    return (
        <div>
            <button onClick={handleClick}>Agregar número</button>
            {numbers.map((number, index) => (
                <Contador key={index} number={number + 1} />
            ))}
        </div>
    );
};

export default Creador;
