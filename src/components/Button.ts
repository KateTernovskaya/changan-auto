import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

type StyledBtnPropsType = {
    primary?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  font-size: 14px;
  padding: 6px 20px;
  text-align: center;
  border-radius: 12px;
  background-color: transparent;
  color: ${theme.colors.cardFont};
  font-weight: 500;
  line-height: 171%;
  cursor: pointer;

  &:hover {
    transition: ${theme.animation.transition};
    background-color: ${theme.colors.hoverLink};
  }

  ${props => props.primary && css<StyledBtnPropsType>`
      background-color: ${theme.colors.primaryBtn};

    &:hover {
      background-color: ${theme.colors.hoverBtn};
    }
  `}
  


`