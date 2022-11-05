import styled from 'styled-components';

export const Wraper = styled.div`
  min-height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.blue};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;

  background-color: ${p => p.theme.colors.gray};
`;

export const SearchBtn = styled.button`
  width: 30px;
  height: 30px;
  border: ${p => p.theme.borders.transparent};
  padding: ${p => p.theme.space[0]};

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${p => p.theme.colors.blue};
  background-color: transparent;

  box-shadow: ${p => p.theme.shadows.main};

  transition: box-shadow ${p => p.theme.transition},
    color ${p => p.theme.transition};

  cursor: pointer;

  :active {
    color: ${p => p.theme.colors.darkBlue};

    box-shadow: ${p => p.theme.shadows.active};
  }

  & svg {
    stroke: currentColor;
    stroke-width: 1px;

    transition: transform ${p => p.theme.transition};
  }

  :hover svg,
  :focus svg {
    transform: scale(1.1) rotate(10deg);
  }

  :active svg {
    transform: scale(0.9) rotate(10deg);
  }
`;

export const SearchField = styled.input`
  height: 22px;
  border: ${p => p.theme.borders.transparent};
  padding: ${p => p.theme.space[1]} ${p => p.theme.space[2]};

  background-color: transparent;

  box-shadow: ${p => p.theme.shadows.main};

  transition: box-shadow ${p => p.theme.transition};

  outline: none;

  :focus-within {
    box-shadow: ${p => p.theme.shadows.active};
  }
`;
