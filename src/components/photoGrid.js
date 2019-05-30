import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  padding: 2em 0;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }

  img {
    place-self: center;
  }
`

export function PhotoGrid({ children }) {
  return <Container>{children}</Container>
}
