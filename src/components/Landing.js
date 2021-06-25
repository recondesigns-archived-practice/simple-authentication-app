import React from 'react'
import styled from 'styled-components'
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

const PrimaryButton = styled.button`
    margin-bottom: 12px;
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

const SecondaryButton = styled.button`
    width: 280px;
    height: 40px;
    border: 1px solid #414141;
    color: #414141;
    font-size: 24px;
    font-weight: bold;
    border-radius: 4px;
    text-transform: uppercase;
    background: #FFFFFF;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
`

export default function LandingPage() {
    let history = useHistory()

    function handleLoginButton() {
        history.push('/login')
    }

    function handleSignupButton() {
        history.push('/signup')
    }

    return (
        <Container>
            <Title>{'Landing Page'}</Title>
            <Subtitle>{'Please log in or sign up.'}</Subtitle>
            <PrimaryButton onClick={() => handleLoginButton()}>{'Log in'}</PrimaryButton>
            <SecondaryButton onClick={() => handleSignupButton()}>{'Sign up'}</SecondaryButton>
        </Container>
    )
}
