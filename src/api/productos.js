const product = [
    {
        nombre:"BLUSA RELAXED FIT DE POPELINA DE ALGODÓN",
        description:" Blusa de sensación suave y transpirable. adornado con una raya distintiva para un acabado distintivo.",    
        precio: "$10.000",
        boton:"comprar",
        imagen:"https://images.hugoboss.com/is/image/boss/hbeu50469935_450_350?$large$=&fit=crop,1&align=1,1&wid=768&qlt=80&fmt=webp",
        id:0,
        categoria:"Urbana",
    },
    {
        nombre:"MINIFALDA ACOLCHADA CREMALLERA FRONTAL",
        description:"Minifalda con cremallera frontal, bolsillos de parche y ribete con logo.",    
        precio: "$22.300",
        boton:"comprar",
        imagen:"https://images.hugoboss.com/is/image/boss/hbeu50486469_621_350?$large$=&fit=crop,1&align=1,1&wid=768&qlt=80&fmt=webp",
        id:1,
        categoria:"urbana",
    },

    {
        nombre:"SUDADERA CON CAPUCHA DE CORTE RELAJADO",
        description:"Una sudadera corta con capucha, de corte holgado en algodón mercerizado supersuave con cinta.",    
        precio: "$25.300",
        boton:"comprar",
        imagen:"https://images.hugoboss.com/is/image/boss/hbeu50489128_001_100?$large$=&fit=crop,1&align=1,1&wid=768&qlt=80&fmt=webp",
        id:2,
        categoria:"deportivo",
    },

    {
        nombre:"CALZAS WORKOUT READY",
        description:"Dale algo de variedad a tus rutinas. Con estas licras Reebok de corte alto para mujer disfrutarás de mayor cobertura.",    
        precio: "$12.300",
        boton:"comprar",
        imagen:"https://reebokarg.vtexassets.com/arquivos/ids/162295-1200-1200?v=638005292831500000&width=1200&height=1200&aspect=true",
        id:3,
        categoria:"deportivo",
    },

    {
        nombre:"CALZAS WORKOUT READY",
        description:"Dale algo de variedad a tus rutinas. Con estas licras Reebok de corte alto para mujer disfrutarás de mayor cobertura.",    
        precio: "$12.300",
        boton:"comprar",
        imagen:"https://reebokarg.vtexassets.com/arquivos/ids/162295-1200-1200?v=638005292831500000&width=1200&height=1200&aspect=true",
        id:3,
        categoria:"deportivo",
    },

    {
        nombre:"CALZAS WORKOUT READY",
        description:"Dale algo de variedad a tus rutinas. Con estas licras Reebok de corte alto para mujer disfrutarás de mayor cobertura.",    
        precio: "$12.300",
        boton:"comprar",
        imagen:"https://reebokarg.vtexassets.com/arquivos/ids/162295-1200-1200?v=638005292831500000&width=1200&height=1200&aspect=true",
        id:3,
        categoria:"deportivo",
    },
    




];

export const getProduct = () =>
    new Promise ((res, rej) => {
        setTimeout(() => {
            res(product);
        },3000);
    });