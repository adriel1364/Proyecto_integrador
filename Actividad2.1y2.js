// Declaración del objeto "persona"
const persona = {
    nombre: "Lucía",
    edad: 28,
    profesion: "Diseñadora"
};

// Usando desestructuración para extraer las propiedades
const { nombre, edad, profesion } = persona;

// Mostrar el mensaje en consola
console.log(`${nombre} tiene ${edad} años y trabaja como ${profesion}.`);

// 2. Agregar la nueva propiedad "ciudad" al objeto
persona.ciudad = "Rosario";
console.log(persona);