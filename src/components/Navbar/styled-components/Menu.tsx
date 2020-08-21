import styled from "styled-components";
import { Menu } from "semantic-ui-react";
export default styled(Menu)`
  display: flex !important;
  flex-direction: column !important;
  width: ${(props) => props.theme.navWidth}px;
  height: 100%;
  background-color: ${(props) => props.theme.colours.main} !important;
`;
