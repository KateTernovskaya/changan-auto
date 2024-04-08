import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Container = styled.div`
  max-width: 1326px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media ${theme.media.medium} {
    max-width: 882px;
  }

  @media ${theme.media.tablet} {
    max-width: 710px;
  }
`