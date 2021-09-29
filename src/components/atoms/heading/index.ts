import { device } from '@styles/theme/breakpoints'
import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fonts.md};
  font-weight: 900;
  letter-spacing: -0.03em;

  color: ${({ theme }) => theme.colors.blue[400]};

  margin-block-end: 1rem;

  @media ${device.xs} {
    font-size: ${({ theme }) => theme.fonts.xl};
    margin-block-end: 2.5rem;
  }

  @media ${device.xl} {
    font-size: ${({ theme }) => theme.fonts['3xl']};
  }
`
