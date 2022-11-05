import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  margin-right: auto;
  margin-left: auto;
  border: ${p => p.theme.borders.transparent};
  padding: ${p => p.theme.space[1]} ${p => p.theme.space[2]};

  display: block;

  font-size: ${p => p.theme.fontSizes.btn};

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};

  border-radius: ${p => p.theme.radii.main};

  transition: background-color ${p => p.theme.transition},
    color ${p => p.theme.transition};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.darkBlue};
  }

  :active {
    color: ${p => p.theme.colors.yellow};
  }
`;
