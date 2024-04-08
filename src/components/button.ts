import styled, {css} from "styled-components";
import {theme} from "../styles/theme";

type StyledBtnPropsType = {
    primary?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: 1px solid white;
  font-size: 14px;
  padding: 8px 12px;
  max-width: 140px;
  text-align: center;
  border-radius: 12px;
  background-color: transparent;
  color: ${theme.colors.cardFont};
  font-weight: 500;
  line-height: 171%;
  cursor: pointer;
  z-index: 3;

  &:hover {
    transition: ${theme.animation.transition};
    background-color: ${theme.colors.hoverLink};
  }

  ${props => props.primary && css<StyledBtnPropsType>`
    background-color: ${theme.colors.primaryBtn};
    padding: 8px 42px;
    border: none;
    max-width: 200px;

    &:hover {
      border: none;
      background-color: ${theme.colors.hoverBtn};
    }
  `}



`