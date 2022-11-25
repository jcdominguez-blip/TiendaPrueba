const Carrusel =()=>{
    return  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
        
        <img src={"https://img.freepik.com/foto-gratis/moda-chica-hipster-gafas-fondo-blanco-aislado_1258-112000.jpg?w=1800&t=st=1669384107~exp=1669384707~hmac=d5969bf73fb5e2aaea1187af4351dfb02679c40ce0890bfcc1fd731b815b8699"} className="d-block w-100  " alt=""/>
        
        </div>
        <div className="carousel-item">
        <img src={"https://images.pexels.com/photos/3775603/pexels-photo-3775603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="d-block w-100 " alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={"https://images.pexels.com/photos/864939/pexels-photo-864939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="d-block w-100 " alt="..."/>
        </div>
    </div>
    <p className='h2_img'><a className='descuento'>50%</a> Cyber monday en productos seleccionados</p>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    
    </div>

}

export default Carrusel;