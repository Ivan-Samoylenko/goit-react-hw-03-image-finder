import styled from 'styled-components';

export const Backdrop = styled.div`
  padding: 10px;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.backdrop};

  ${p => p.theme.mediaQueries.tablet} {
    padding: 60px;
  }

  ${p => p.theme.mediaQueries.desktop} {
    padding: 100px;
  }
`;

export const ModalCloseBtn = styled.button`
  width: 50px;
  height: 50px;
  border: ${p => p.theme.borders.transparent};

  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${p => p.theme.colors.gray};
  background-color: transparent;

  opacity: 0.9;
  transition: color ${p => p.theme.transition};

  :hover,
  :focus {
    color: ${p => p.theme.colors.white};
  }

  & svg {
    fill: currentColor;
  }

  :active {
    color: ${p => p.theme.colors.yellow};
  }
`;

export const ModalSheet = styled.div`
  background-color: ${p => p.theme.colors.white};
`;
