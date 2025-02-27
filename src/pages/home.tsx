import { Link } from "react-router"

const HomePage = ()=>{
    return(
        <>
            <p>its my home page</p>
            <a href="/about">
                click here to go About page
            </a>
<br/>
            <Link to="/about">
                click here to go About page
            </Link>
        </>
    )
}

export default HomePage