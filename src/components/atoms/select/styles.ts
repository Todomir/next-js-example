import { device } from '@styles/theme/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fonts.xs};
  color: ${({ theme }) => theme.colors.gray[900]};
  font-weight: 600;

  @media ${device.sm} {
    font-size: ${({ theme }) => theme.fonts.sm};
  }
`

export const Select = styled.select`
  padding: 0.75rem;

  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 0.25rem;

  background-color: ${({ theme }) => theme.colors.gray[100]};

  transition: border 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.gray[900]};
  }
`
