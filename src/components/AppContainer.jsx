import { useEffect, useState } from "react";
import Item from "./Item";
import { getProduct} from "../api/productos";
const AppContainer = () => {

  //toda logica de peticion
    const [productos, setProductos]= useState([]);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        getProduct()
            .then((items)=> { setProductos (items); setLoading(false)})
            .catch((e) => console.log(e ));

    }, []);




    return(     
    
    <div className='products row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1'>
    {loading ? <span className="cargando">Cargando...</span> : null }        
    {productos.map ((productos) => {

    return( 
    <Item
    key={productos.id} 
    imagen={productos.imagen}    
    nombre={productos.nombre}
    description={productos.description}
    categoria={productos.categoria}    
    precio={productos.precio}
    boton={productos.boton}
        
    />
    
    );

    })}
    {

    }

    
</div>

    );
};
    
    
    
    
    

    

export default AppContainer;