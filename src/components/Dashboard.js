import React, { useContext } from 'react'
import styled from 'styled-components'
import { auth } from '../base'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth'

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

const Wrapper = styled.div`
    width: 280px;
    height: auto;
    // border: 1px solid orange;
`

const Name = styled.p`
    margin-bottom: 8px;
    width: 100%;
    font-weight: bold;
    // border: 1px dashed green;
`

const Email = styled.p`
    margin-bottom: 4px;
    width: 100%;
    font-weight: lighter;
    // border: 1px dashed green;
`

const Other = styled.p`
    width: 100%;
    font-weight: lighter;
    // border: 1px dashed green;
`

const HomeLink = styled.p`
    margin-top: 20px;
    width: 100%;
    color: dodgerblue;
    text-align: center;
    cursor: pointer;
    // border: 1px dashed green;

    &:hover {
        color: #002D62;
    }
`

const DestructiveButton = styled.button`
    margin-top: 40px;
    width: 280px;
    height: 40px;
    border: none;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: bold;
    border-radius: 4px;
    text-transform: uppercase;
    background: #EB6E1F;
    cursor: pointer;

    &:hover {
        background: #F4911E;
    }
`

export default function DashboardPage() {
    const [currentUser] = useContext(AuthContext)
    let history = useHistory()

    function handleLogOutButton() {
        auth.signOut()
            .then(() => console.log(`Account for ${currentUser.email} has been logged out.`))
            .catch((error) => console.log(error))

        history.push('/')
    }

    function handleHomeLink() {
        history.push('/')
    }

    return (
        <Container>
            <Title>{'Dashboard Page'}</Title>
            <Subtitle>{'View user info below.'}</Subtitle>
            <Wrapper>
                <Name>{'Current user details'}</Name>  
                <Email>{currentUser ? `${currentUser.email}` : 'No email available.'}</Email>  
                <Other>{currentUser ? `${currentUser.id}` : 'No ID available.'}</Other> 
                <DestructiveButton onClick={() => handleLogOutButton()}>{'Log out'}</DestructiveButton> 
                <HomeLink onClick={() => handleHomeLink()}>{'Back to Home'}</HomeLink>  
            </Wrapper>
        </Container>
    )
}
