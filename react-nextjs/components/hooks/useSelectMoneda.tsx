// hooks/useSelectMoneda.tsx
import {MonedasInterface} from "../../interfaces/moneda";
import {useState} from "react";
import {JSXElement} from "@babel/types";

export default function (label: string, opciones: MonedasInterface[]) {
    // devolvemos un select del arreglo de monedas (html - jsx element), la parte renderizada
    // valor de esa moneda
    const [moneda, setMoneda] = useState('');
    //funcion para renderizar la moneda
    const generarJSXElementMonedas: () => JSX.Element[] = () => {
        return opciones.map( //se recorre el arreglo de los tipos de monedas que existen
            (moneda) => //por cada moneda del errglo se produce una opcion
                ( // Iteracion (KEY ES REQUERIDO) siempre//Se cpntruye la opcion del select
                    <option key={moneda.id} id={moneda.id} value={moneda.id}>
                        {moneda.nombre}
                    </option>
                )
        );
    };
    const UseSelectMonedas = (
        <>
            <label className="form-label" htmlFor={label}> {label} </label>
            <select className="form-select"
                    name={label}
                    id={label}
                    value={moneda}
                    onChange={e => { //En el evento de cambio se setea el valor de la moneda
                        e.preventDefault(); // prevenir error
                        setMoneda(e.target.value)//si selecciona una opcion se setea el valor de la moneda.
                    }}
            >
                <option value="">Seleccione opción</option> // si la opcion esta vacia nos pide seleccionar opcion
                {generarJSXElementMonedas()} nos permite generar las opciones
            </select>
        </>
    )
    return [moneda, UseSelectMonedas];   //enviamos el valor de la moneda y el renderisado
}