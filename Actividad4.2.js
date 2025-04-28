// Presentacion.jsx
import React from 'react';

// Componente que muestra la presentación de una persona
const Presentacion = ({ nombre, edad, profesion }) => {
    return (
        <p>
            Hola, mi nombre es {nombre}, tengo {edad} años y soy {profesion}.
        </p>
    );
};

export default Presentacion;
