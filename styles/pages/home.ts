import { Button, Heading, Text } from '@components/atoms'
import styled from 'styled-components'

export const Section = styled.section`
  margin-inline: auto;
  width: 100%;

  ${Heading} {
    max-width: 20ch;
  }
  ${Text} {
    max-width: 30ch;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  max-width: 26.5rem;
`
export const Footer = styled.footer`
  margin-top: 2rem;

  ${Button} {
    width: 100%;
  }
`
