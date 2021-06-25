import React, { useState } from 'react'
import styled from 'styled-components'
import { auth } from '../base'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
    box-sizing: border-box;
    padding: 40px 0px 40px 0px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 2px solid lightcoral;
`

const Title = styled.h1`
    margin-bottom: 4px;
    width: 280px;
    // border: 1px dashed green;
`

const Subtitle = styled.p`
    margin-bottom: 40px;
    width: 280px;
    // border: 1px dashed green;
`

const Input = styled.input`
    margin-bottom: 12px;
    padding: 0px 8px 0px 8px;
    box-sizing: border-box;
    width: 280px;
    height: 40px;
    font-size: 20px;
    border-radius: 4px;
    border: 1px solid #414141;
`

const PrimaryButton = styled.button`
    margin-top: 8px;
    width: 280px;
    height: 40px;
    border: none;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: bold;
    border-radius: 4px;
    text-transform: uppercase;
    background: #414141;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`

const HomeLink = styled.p`
    margin-top: 40px;
    width: 100%;
    color: dodgerblue;
    text-align: center;
    cursor: pointer;
    // border: 1px dashed green;

    &:hover {
        color: #002D62;
    }
`

export default function SingupPage() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    let history = useHistory()

    function handleEmailChange(e) {
        const { value } = e.target
        setEmail(value)
    }

    function handlePassChange(e) {
        const { value } = e.target
        setPass(value)
    }

    function handleSignupButton() {
        auth.createUserWithEmailAndPassword(email, pass)
            .then(() => console.log(`New account has been created for ${email}.`))
            .catch((error) => console.log(error))

        history.push('/dashboard')
    }

    function handleHomeLink() {
        history.push('/')
    }

    return (
        <Container>
            <Title>{'Signup Page'}</Title>
            <Subtitle>{'Please signup with email & password.'}</Subtitle>

            <Input 
                type={'email'} 
                placeholder={'Enter email'} 
                onChange={(e) => handleEmailChange(e)}
            />

            <Input 
                type={'password'} 
                placeholder={'Enter password'} 
                onChange={(e) => handlePassChange(e)}
            />
            <PrimaryButton onClick={() => handleSignupButton()}>{'Sign up'}</PrimaryButton>
            <HomeLink onClick={() => handleHomeLink()}>{'Back to Home'}</HomeLink>   
        </Container>
    )
}
