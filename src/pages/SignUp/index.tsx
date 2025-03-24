import { ButtonSubmit, FormContainer, TextContainer } from "./styles";

export function SignUp() {
    return (
        <FormContainer>
            <TextContainer>Nome:</TextContainer>
            <input type="text" />

            <TextContainer>E-mail:</TextContainer>
            <input type="email" />

            <TextContainer>Senha:</TextContainer>
            <input type="password" />

            <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
        </FormContainer>
    )
}