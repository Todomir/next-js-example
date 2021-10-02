import { Heading, Text } from '@components/atoms'
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
