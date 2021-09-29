import { device } from '@styles/theme/breakpoints'
import styled from 'styled-components'

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fonts.sm};
  font-weight: 400;
  letter-spacing: -0.03em;

  color: ${({ theme }) => theme.colors.gray[900]};

  @media ${device.xs} {
    font-size: ${({ theme }) => theme.fonts.md};
  }
`
