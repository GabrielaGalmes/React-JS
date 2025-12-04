import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext/useAuthContext"
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
    const [userFor, setUserForm] = useState({name: "", password: "", })
    const { user, login } = useAuthContext();
    const navigate = useNavigate()

    if(user){
        return <Navigate to="/admin/alta-productos" replace />;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({ ...userFor, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const success = login( userFor.name, userFor.password );
        if(success){
            navigate("/admin/alta-productos");

        } else {
            alert("Credenciales incorrectas")
            setUserForm({ name: "", password: "" });
        }

    };

    return (
        <form onSubmit={ handleSubmit }>
            <h2>Iniciar sesion</h2>
            <div>
                <label htmlFor="name">Usuario</label>
                <input 
                    id="name"
                    type="text" 
                    name="name" 
                    value={userFor.name} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input 
                    id="password"
                    type="password" 
                    name="password" 
                    value={userFor.password} 
                    onChange={handleChange} 
                />
            </div>
            <button type="submit">Iniciar sesion</button>
        </form>
    );

};