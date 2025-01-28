async function APIKEY(){
    
    fetch('file.json')
    .then(response =>{
        if(!response.ok){
            throw new Error("Error al cargar el archivo.")
        }
        return response.json();
    })
    .then(data =>{
        console.log(data.key);
        return data.key;
    })
}

async function convertirMoneda(params){
    key = APIKEY();

    const response = await fetch(`http://data.fixer.io/api/convert
        ? access_key = ${key}
        & from = ${params.moneda}
        & to = ${params.convertirA}
        & amount = ${params.cantidad} `);

        console.log(response);
}

async function traerMonedas(){
key = await APIKEY();
const url = `https://data.fixer.io/api/symbols?access_key=474f74208bf75a8cf5113c626bf4cda6`;
const options = {
	method: 'GET'
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	//console.log(result);
    return result.symbols
} catch (error) {
	console.error(error);
}
}


async function cargarMonedas(){
    const resultado = await traerMonedas();
    const selectMoneda = document.getElementById("moneda");
    const convertirA= document.getElementById("convertirA");
Object.entries(resultado).forEach(([codigo,nombre]) =>{
    const optionElementMoneda = document.createElement('option');
        optionElementMoneda.value = codigo; 
        optionElementMoneda.text = nombre;
        selectMoneda.appendChild(optionElementMoneda);

      
        const optionElementConvertirA = document.createElement('option');
        optionElementConvertirA.value = codigo; 
        optionElementConvertirA.text = nombre;
        convertirA.appendChild(optionElementConvertirA);
})
}

cargarMonedas();