import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../imagens/logo/logo colorido.png'
import carrinho from '../imagens/icones/shopping-cart.png'

// position: fixed; - para fixar no topo
const ContainerHeader = styled.div`
width: 100%;
height: 15vh;
display: flex;
justify-content: space-around;
align-items: center;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
opacity: 1;

`
const ContainerLojista = styled.div`
`

const ContainerCliente = styled.div`
display:flex;
align-items:center;
justify-content:center;
text-align:center;
`

const ImagemLogo = styled.img`
height: 90px;
`

const Logo = styled.div`
`
const ButtonLojista = styled.button`
text-transform: uppercase;
border: 3px solid #E44E6D;
border-radius: 7px;
opacity: 1;
width: 180px;
height: 40px;
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 16px/25px Poppins;
letter-spacing: var(--unnamed-character-spacing-0);
text-align: center;
font: normal normal normal 16px/25px Poppins;
letter-spacing: 0px;
color: #0AAA14;
opacity: 1;
background-color: white;
color: #E44E6D;
&:hover{
  background-color: #E44E6D;
  color: white;
  transition: 150ms;
}
`

const ButtonCliente = styled.button`
text-transform: uppercase;
border: 0;
border-radius: 7px;
opacity: 1;
width: 180px;
height: 40px;
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 16px/25px Poppins;
letter-spacing: var(--unnamed-character-spacing-0);
text-align: center;
font: normal normal normal 16px/25px Poppins;
letter-spacing: 0px;
color: #0AAA14;
opacity: 1;
background-color: white;
color: #E44E6D;
&:hover{
text-decoration: underline;
  transition: 150ms;
}
`
const Carrinho = styled.button`
width: 50px;
height: 45px;
background-color: white;
border: 0;
`
const CarrinhoImg = styled.img`
height:30px;
`

class Header extends Component {
    render() {
        return (
            <ContainerHeader>
                <ContainerLojista><ButtonLojista>Área do Logista</ButtonLojista></ContainerLojista>
                <Logo><ImagemLogo src={logo}></ImagemLogo></Logo>
                <ContainerCliente><ButtonCliente>Área do Cliente</ButtonCliente><Carrinho><CarrinhoImg src={carrinho}></CarrinhoImg></Carrinho></ContainerCliente>
            </ContainerHeader>
        )
    }
}

export default Header