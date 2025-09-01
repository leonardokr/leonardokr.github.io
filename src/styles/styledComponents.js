import styled from 'styled-components';
import { fontSizes } from './constants';
import { baseButton, iconLink, techList } from './commonStyles';

// Componentes base reutilizáveis
export const StyledButton = styled.button`
  ${baseButton};
  padding: 0.75rem 1rem;
  font-size: ${fontSizes.smish};
`;

export const StyledBigButton = styled.button`
  ${baseButton};
  padding: 1.25rem 1.75rem;
  font-size: ${fontSizes.sm};
`;

export const StyledIconLink = styled.a`
  ${iconLink};
`;

export const StyledTechList = styled.ul`
  ${techList};
`;

export const StyledSectionContainer = styled.section`
  margin: 0 auto;
  padding: 150px 0;
  max-width: 1000px;
`;

export const StyledProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  position: relative;
`;

export const StyledFlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledFlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
