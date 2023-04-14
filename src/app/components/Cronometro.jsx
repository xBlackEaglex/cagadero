"use client";

import React, { useState, useEffect } from "react";
import style from '../../styles/Cronometro.module.css'

const Cronometro = () => {
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);
    const [pausado, setPausado] = useState(true);
    const [tiempoGuardado, setTiempoGuardado] = useState("");
    const [inicio, setInicio] = useState(true);

    const consola = () => {
        console.log('fuera del handle es ', pausado);
    }


    useEffect(() => {
        let intervalo;

        // Función para actualizar el cronómetro
        const actualizarCronometro = () => {
            if (!pausado) {
                setSegundos((segundos) => segundos + 1);

                if (segundos === 59) {
                    setSegundos(0);
                    setMinutos((minutos) => minutos + 1);
                }

                if (minutos === 59) {
                    setMinutos(0);
                    setHoras((horas) => horas + 1);
                }
            }
        };

        // Iniciar el cronómetro
        intervalo = setInterval(actualizarCronometro, 1000);

        // Limpiar el intervalo cuando el componente se desmonta
        return () => {
            clearInterval(intervalo);
        };
    }, [segundos, minutos, horas, pausado]);

    // Función para manejar el botón de pausa
    const handlePausa = () => {
        console.log('inicio ',pausado);
        setInicio(false);
        setPausado(!pausado);
        console.log('después del cambio ',pausado);
        if (pausado) {
            setTiempoGuardado("");
            console.log('if true');
        } else {
            setTiempoGuardado(
                `${horas < 10 ? "0" + horas : horas}:${minutos < 10 ? "0" + minutos : minutos}:${
                    segundos < 10 ? "0" + segundos : segundos
                }`
            );
            console.log('if false');
        }
        console.log('después del if ',pausado);
    };

    // Función para manejar el botón de Reiniciar
    const handleParar = () => {
            setHoras(0);
            setMinutos(0);
            setSegundos(0);
            setPausado(true);
            setInicio(true);
    }    

    return (
        <div className={style.container}>
            <h1>Cronómetro</h1>
            <p>
                {horas < 10 ? "0" + horas : horas}:{minutos < 10 ? "0" + minutos : minutos}:
                {segundos < 10 ? "0" + segundos : segundos}
            </p>
            {inicio ? <button onClick={handlePausa}>Inicio</button> : <button onClick={handlePausa}>{pausado ? "Reanudar" : "Pausar"}</button>}
            {pausado && !inicio ? <button onClick={handleParar}>Reiniciar</button> : null}
            {tiempoGuardado && <p>Tiempo guardado: {tiempoGuardado}</p>}
            {consola()}
        </div>
    );
};

export default Cronometro;