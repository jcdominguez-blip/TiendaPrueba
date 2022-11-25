
    import logo from "../logo.svg";
    import '../App.css';
    import "bootstrap/dist/css/bootstrap.min.css";
    import Item from '../components/Item';
    import AppContainer from "../components/AppContainer";
    import Carrusel from '../components/Carrusel';
    import { UserLayout } from '../components/UserLayout';
    


export const Home = () => {
    return( 
    <UserLayout>
    {/*Carrusel boop--------*/}
    <Carrusel/>
    {/*fin Carrusel boop--------*/}

    {/*Cards boop--------*/}
    <AppContainer/>  
    {/* Fin Cards boop--------*/}
    </UserLayout>

    );

};
