import { useState } from "react"
import { useNavigate } from "react-router-dom"


const login = () =>{
    const navigate = useNavigate()
    const [login,setLogin] = useState(true)
    function handleSubmit(e){
        e.preventDefault();
        localStorage.setItem("login",login)
        navigate("/")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <input type="submit" />
        </form>
    )
}

export default login