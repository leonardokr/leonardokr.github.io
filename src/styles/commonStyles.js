import { css } from 'styled-components';
import theme from './theme';
const { colors, fontSizes, fonts } = theme;

export const baseBox = css`
  box-shadow: 0 10px 30px -15px ${colors.shadowNavy};
  transition: ${theme.transition};

  &:hover,
  &:focus {
    box-shadow: 0 20px 30px -15px ${colors.shadowNavy};
  }
`;

export const baseButton = css`
  color: ${colors.accent};
  background-color: transparent;
  border: 1px solid ${colors.accent};
  border-radius: ${theme.borderRadius};
  font-family: ${fonts.SFMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.transparent_accent};
  }

  &:after {
    display: none !important;
  }
`;

export const projectCard = css`
  ${baseBox};
  background-color: ${colors.lightNavy};
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};

  &:hover {
    transform: translateY(-5px);
  }
`;

export const iconLink = css`
  padding: 10px;

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const techList = css`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;

  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xs};
    color: ${colors.accent};
    line-height: 1.75;
    margin-right: 15px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
