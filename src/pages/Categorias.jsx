import { UserLayout } from "../components/UserLayout"
import {UseParams} from "react-router-dom";
import { useEffect } from "react";
import { getProduct } from "../api/productos";

export const Categorias = () =>{
    const {categoriasId} = UseParams ();
    console.log(categoriasId);
    useEffect (()=>{
    getProduct(categoriasId)
        .then(data =>console.log(data))
    },[categoriasId])
    return <UserLayout> No veo nada</UserLayout>;
};