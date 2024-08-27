import { useState, useEffect } from "react";
import styles from './CalculoIMC.module.css';

const CalculoIMC = () => {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [imc, setImc] = useState("");
    const [classificacao, setClassificacao] = useState("");
    const [erro, setErro] = useState("");

    useEffect(() => {
        const alturaNum = parseFloat(altura);
        const pesoNum = parseFloat(peso);

        if (!isNaN(alturaNum) && alturaNum > 0 && !isNaN(pesoNum) && pesoNum > 0) {
            const calculoIMC = pesoNum / (alturaNum * alturaNum);
            setImc(calculoIMC.toFixed(2));
            setErro("");

            if (calculoIMC < 18.5) {
                setClassificacao("Abaixo do peso");
            } else if (calculoIMC >= 18.5 && calculoIMC < 24.9) {
                setClassificacao("Peso normal");
            } else if (calculoIMC >= 25 && calculoIMC < 29.9) {
                setClassificacao("Sobrepeso");
            } else {
                setClassificacao("Obesidade");
            }
        } else {
            setImc("");
            setClassificacao("");
            setErro("Insira um valor maior que 0 nos campos altura e peso.");
        }
    }, [altura, peso]);

    return (
        <>
        <form>
            <input type="number" placeholder='Insira a sua Altura' onChange={(e) => setAltura(e.target.value)} />
            <input type="number" placeholder='Insira o seu Peso' onChange={(e) => setPeso(e.target.value)} />
        </form>
        <p><b>IMC:</b> {imc}</p>
        <p><b>Classificação:</b> {classificacao} </p>
        {erro && <p className={styles.erro}>{erro}</p>}
        </>
    );
}

export default CalculoIMC;
