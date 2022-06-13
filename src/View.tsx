import { FC } from "react";
import { Weather } from "./weather";
import { Imagen } from "./utils/imagen";
import { convertirGrados } from "./utils/convertirGrados";


type Props = {
    clima: Weather
}

export const View: FC<Props> = ({ clima }) => {
    return (
        <div className="card_container">
            <img style={{ width: "100%", height: "80%", borderRadius: "45px" }} src={Imagen(clima.name)} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h2 style={{ textAlign: "justify", fontWeight: "bold" }}>{clima.name}</h2>
            </div>
            <div style={{ paddingLeft: "20px", paddingBottom: "30px" }}>
                <p>Temperatura: {convertirGrados(clima.main.temp)}</p>
                <p>Humedad: {clima.main.humidity} %</p>
                <p>Temperatura Maxima: {convertirGrados(clima.main.temp_max)}</p>
                <p>Temperatura Minima: {convertirGrados(clima.main.temp_min)}</p>
            </div>
        </div>
    )
}