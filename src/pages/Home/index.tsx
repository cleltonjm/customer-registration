import { NavLink } from 'react-router-dom'
import { TextContainer } from './styles'

export function Home() {
    return (
        <TextContainer>
            Ainda não possui conta?
            <NavLink to="sign-up">Cadastre-se.</NavLink>
        </TextContainer>
    )
}