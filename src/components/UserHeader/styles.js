import styled from 'styled-components'

export const HeaderContainer = styled.div`
  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? 'none' : 'block')};
  }
`

export const Header = styled.div`
  display: flex;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

export const Image = styled.img`
  width: 200px;
  margin-right: 1rem;
  border-radius: 2px;
`
