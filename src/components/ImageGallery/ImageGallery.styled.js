import styled from 'styled-components';

export const List = styled.ul`
  padding: ${p => p.theme.space[3]};

  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[3]};

  ${p => p.theme.mediaQueries.desktop} {
    padding: ${p => p.theme.space[3]} ${p => p.theme.space[0]};
  }
`;
