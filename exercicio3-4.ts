let n: number = 10;

let fParImpar = function(numero:number):void
{
    if (numero % 2 == 0)
    {
        console.log("Par.");
    }
    else
    {
        console.log("Ímpar.");
    }
}

console.log(`${fParImpar(n)}`)

