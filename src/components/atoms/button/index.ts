import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.blue[400]};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;

  font-weight: 700;

  border: none;
  border-radius: 0.5rem;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[300]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.blue[500]};
  }

  &:focus {
    box-shadow: 0 0 1px 3px rgba(100, 144, 255, 0.55),
      0 1px 1px rgba(0, 0, 0, 0.15);
  }
`
