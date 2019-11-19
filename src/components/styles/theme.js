// import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  font-size: 2rem;
  color: white;
  background-color: ${props => props.liberal ? 'blue' : 'red'};
`

const Li = styled.li`
  list-style: none;
  color: lightgrey !important;
`

const Ul = styled.ul`
  background-color: yellow;
  ${Li} {
    font-weight: bold;
    color: grey;
  }
`

export { Header, Li, Ul }