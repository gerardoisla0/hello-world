/* Componente para estudiar los tipos de datos en typeScript*/

interface User {
    id: number,
    name: string,
    age?: number,
    lastName: string
}

export const TypesComponent = () => {

    let firstName: string | number = "Gerardo";
    let age: number = 30;
    let isDead : boolean = true;
    const power: string[] = ['Java', 'react', '1'];
    
    /* LOGICA DE FECHA DE CUMPLEAÑOS */
    age = 80;

    const suma = (a: number, b: number) : number => {
        return a + b;   
    }

    let sumaEdades: number = suma(age, 18);


    const user: User = {
        id: 1,
        name: firstName,
        age: age,
        lastName: 'Gonzalez'
    }

    const greet = (name?: string) : string => {
        return `Hola ${name ?? 'Invitado'}`;
    }

    return (
        <div style={{backgroundColor: 'blue', height: '40vh', color: 'white'}}>
            Componente creado con Typescript
                {
                    (!isDead) ?
                    <p>Mi nombre es {firstName} mi edad {age}</p>
                    :
                    <p>Esto muerto</p>
                }
                <p> Mis super poderes: {power.join(', ')}</p>
                <p> Suma de edad {sumaEdades}</p>
                <p> Clase : {user.name}</p>
                <p> Saludo: {greet()}</p>

        </div>
    );
}