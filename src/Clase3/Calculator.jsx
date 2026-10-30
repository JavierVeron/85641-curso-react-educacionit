import { useState } from "react"
import CurrencyField from "./CurrencyField";

const Calculator = () => {
    const [valor, setValor] = useState(0);
    const [divisa, setDivisa] = useState("ARS");
    const CAMBIO = 1500;

    const handleUSDChange = (val) => {
        setDivisa("USD");
        setValor(val);
    }

    const handleARSChange = (val) => {
        setDivisa("ARS");
        setValor(val);
    }

    const USDValue = divisa == "ARS" ? valor / CAMBIO : valor;
    const ARSValue = divisa == "USD" ? valor * CAMBIO : valor;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-4">
                    <h1 className="fw-bold">Calculator</h1>
                    <CurrencyField divisa={"USD"} valor={USDValue} onChange={handleUSDChange} />
                    <CurrencyField divisa={"ARS"} valor={ARSValue} onChange={handleARSChange} />
                </div>
            </div>
        </div>
    )
}

export default Calculator