import { ButtonSubmit, FormContainer, SignUpContainer } from "./styles";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const userDataValidation = zod.object({
    name: zod.string().min(3, 'Digite seu nome'),
    email: zod.string().min(6, 'Informe seu mail'),
    password: zod.string().min(6, 'Digite uma senha de no mínimo 6 dígitos.')
})

interface userDataSignUp {
    name: string
    email: string
    password: string
}

export function SignUp() {
    const { register, handleSubmit, watch } = useForm({
        resolver: zodResolver(userDataValidation),
    })
    
    function createUser(data: userDataSignUp) {
        console.log(data)
    }

    const name = watch('name')
    const isSubmitDisabled = !name

    return (
        <SignUpContainer>
            <FormContainer>
                <form onSubmit={handleSubmit(createUser)} action="">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" {...register('name')} />

                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" {...register('email')} />

                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" {...register('password')} />

                    <ButtonSubmit type="submit" disabled={isSubmitDisabled}>Cadastrar</ButtonSubmit>
                </form>     
            </FormContainer>   
        </SignUpContainer>
    )
}