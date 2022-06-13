import{ Link } from "react-router-dom"

function Goto(){
    return(
      <div>
        <nav  className="nav" >
        <Link to='/' className="btn homebtn " >
        <span>Home</span>
        </Link>
        </nav>
      </div>
    )
}
export default Goto;