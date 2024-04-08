import styled from "styled-components";
import {theme} from "../styles/Theme";

type LinkPropsType = {
    href?: string
}

export const Link = styled.a<LinkPropsType>`

  a:hover{
    border-bottom: 1px solid ${theme.colors.primaryBtn};
  }
`