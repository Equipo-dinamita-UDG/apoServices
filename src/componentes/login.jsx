import '../styles/login.css'

export default function Login(props) {

    return (
        <div className="login">
            <div className="    row">
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card pt-5">
                        <div className="card-header text-center">
          
                       <h3>🚀 Iniciar</h3> 
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">

                               <div className="input-group-prepend">
                               <span className="input-group-text" id="basic-addon2">
                                ✉️
                                </span>
                               </div>
 
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="correo"
                                    aria-label="username"
                                    aria-describedby="basic-addon2"
                                />
                            </div>

                            <div className="input-group mb-2.5">
                                <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon2">
                                🔐
                                </span>
                                </div>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="contraseña"
                                    aria-label="clave"
                                    aria-describedby="basic-addon2"
                                />
                            </div>
             

                        </div>
                        <button className='btn btn-info btn-lg align-self-center' >Ingresar</button>


                    <div className="card-footer text-center mt-3">
                        <span>¿Olvidó su contraseña?</span> <a href="http://">Recuperar</a>
                    </div>
                    </div>
                </div>

            </div>


        </div>
    )
}   