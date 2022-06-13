export const convertirGrados = (valor: number): string => {
    let celsius = valor -273.1;
    return `${celsius.toFixed(2)} °C`;
}