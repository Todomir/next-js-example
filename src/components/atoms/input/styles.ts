import { device } from '@styles/theme/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  color: ${({ theme }) => theme.colors.gray[900]};

  & > label {
    font-size: ${({ theme }) => theme.fonts.xs};
    font-weight: 600;

    @media ${device.sm} {
      font-size: ${({ theme }) => theme.fonts.sm};
    }
  }

  & > select {
    font-size: ${({ theme }) => theme.fonts.sm};

    background-color: ${({ theme }) => theme.colors.gray[100]};

    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    border-radius: 5px;

    padding: 0.75rem;

    transition: border-color 0.15s ease-in-out, border 0.15s ease-in-out;

    &:focus {
      outline: none;
      border: 2px solid ${({ theme }) => theme.colors.gray[900]};
    }
  }
`
