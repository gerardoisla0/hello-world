/* Componente para estudiar los tipos de datos en typeScript*/

export function TypesJsComponent(){

    /* logica del componente */

    let firstName = "Julio";
    let age = 30;
    let isDead = false;
    const power = ['Java', 'react', 1, false];


    /* LOGICA DE FECHA DE CUMPLEAÑOS */
    age = "45";

    /* Suma de mi edad + edad de amigo */
    function suma(a,b){
        return a + b;
    }

    /* API 
    const user = axios.get();
    */
    const user = {
        id: 1,
        age: age
    }

    function greet(name = "Invitado"){
        return `Hola ${name}`;
    }

    return (
        <div style={{backgroundColor: 'yellow', height: '40vh', color: 'black'}}>
            Componente creado con Javascript
            <p>Mi nombre es {firstName} mi edad {age}</p>
            {
                    (!isDead) ?
                    <p>Mi nombre es {firstName} mi edad {age}</p>
                    :
                    <p>Esto muerto</p>
                }
                <p> Mis super poderes: {power.join(', ')}</p>
                <p> Suma de edad {suma(age, 18)}</p>
                <p> Clase : {user.age}</p>
                <p> Saludo : {greet(user.name)}</p>
        </div>
    );
}