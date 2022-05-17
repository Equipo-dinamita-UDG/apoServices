import React, {useRef,useState} from 'react';
// Con el use ref se pueden acceder a los datos que el usuario ingresa 
import '../styles/login.css';

const URL_LOGIN = "http://localhost:8888/ws-login/login.php";

const enviarData =  async (url, data)=> {

const respuesta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }  
        });

        // console.log(respuesta);
        const json = await  respuesta.json()
        // console.log(json);


        return json;

}


export default function Login(props) {

const [error, setError] = useState(null);
const [espera, setEspera] = useState(false);

    const refUsuario = useRef(null);
    const refClave = useRef(null);

    const handleLogin= async()=>{
        setEspera(true);
        const data ={
            "usuario" : refUsuario.current.value,
            "clave" :  refClave.current.value

        };
            console.log(data);

            const respuestaJson = await enviarData(URL_LOGIN,data);
            console.log("respuesta desde el evento",respuestaJson);


            props.acceder(respuestaJson.conectado)
            setError(respuestaJson.error)
            setEspera(false);
    }


    return (
        <div className="login">
            <div className="row">
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
                                    ref={refUsuario}
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
                                    ref={refClave}
                                />
                            </div>


                        </div>

                        {
                            error &&
                            <div className="alert alert-danger text-center">
                                {error}
                            </div>
                        }


                        <button 
                        onClick={handleLogin}
                        disabled = {espera}
                        className='btn btn-info btn-lg align-self-center'>Ingresar</button>


                        <div className="card-footer text-center mt-3">
                            <span>¿Olvidó su contraseña?</span> <a href="http://">Recuperar</a>
                        </div>
                        <div className="card-footer text-center mt-1" >
                            <span>¿No tiene una cuenta? Registrarse</span> <a href="/formularioregistro.jsx">Registrarse</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}   