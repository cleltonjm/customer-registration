import { HeaderContainer } from "./styles";
import { ToggleLeft } from 'phosphor-react'

export function Header() {
    return (
        <HeaderContainer>
            <nav>
                <a href="">
                    <ToggleLeft size={24} />
                </a>
            </nav>
        </HeaderContainer>
    )
}