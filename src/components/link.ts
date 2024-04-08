import styled from "styled-components";
import {theme} from "../styles/theme";

type LinkPropsType = {
    href?: string
}

export const Link = styled.a<LinkPropsType>`
  font-size: 13px;

  &:hover {
    border-bottom: 1px solid ${theme.colors.font};
  }
`