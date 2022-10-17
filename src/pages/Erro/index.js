import { Link } from 'react-router-dom'
import './erro.css'

const Filme = () => {
    return (
        <div className='not-found'>
            <h1>Essa página não existe :(</h1> <br/>
            <Link to='/' >Página inicial</Link>
        </div>
    )
}

export default Filme