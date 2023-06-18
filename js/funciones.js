function mostrarCuotas(){
    console.log(" Esta promo tiene:")
    for(let i =1; i <=3; i++){
        console.log(i + " cuotas sin interes")
    }
}

//
function mostrarPrecio(codigo){
    switch (codigo) {
        case "1":
            console.log("El precio de la promo 1 es de 1500$")
            break;
        case "2":
            console.log("El precio de la promo 2 es de 2700$")
            break;
        case "3":
            console.log("El precio de la promo 3 es de 4000$")
            break;
        case "4":
            console.log("El precio de la promo 4 es de 5000$")
            break;
        case "5":
            console.log("El precio de la promo 5 es de 5500$")
            break;
    
        default:
            console.error("Opcion no valida")
            break;
    }
}

function consultarPollo(){
    let respuesta = confirm("¿Queres saber el precio de alguna promo?")
    if(respuesta===true){
        let codigo = prompt ("Que promo te intereso?")
        
        if(codigo === "1"|| codigo === "2"|| codigo === "3"|| codigo === "4"|| codigo === "5"){
            mostrarPrecio(codigo)
            mostrarCuotas()
        } else{
            console.error("Opcion no valida")
        }
    
    } else{
        console.error("No hay problema, si cambias de opinion apreta f5")
    }
}