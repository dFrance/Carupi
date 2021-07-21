import { Button } from '@material-ui/core'
import { Navbar } from './styles'
import logoImg from '../../Assets/logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <Navbar>
            <nav>
                <Link to='/'>
                <img src={logoImg} alt="logo da empresa"/>
                </Link>
                <section>
                    <Button>Login</Button>
                    <Button>Criar conta</Button>
                </section>
            </nav>
        </Navbar>
    )
}