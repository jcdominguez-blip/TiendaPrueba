const Item =({nombre,description,precio,boton,imagen,categoria}) => {

    return (
<div className="col">
    <div className="card">
    <img src={imagen}className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{description}</p>
        <b className="card-text">{categoria}</b>
        <h2>{precio}</h2>
        <a className="btn btn btn-dark" href="#" role="button">{boton}</a>
    </div>
    </div>  
</div>
    )
}

export default Item