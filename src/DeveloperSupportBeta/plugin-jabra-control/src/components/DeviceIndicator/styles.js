import styled, { css } from "styled-components";

import { ReactComponent as UnstyledLogo } from "../../assets/logo.svg";

export const Base = styled.div`
  padding: 6px;
  display: flex;
  align-items: center;
`;

export const Logo = styled(UnstyledLogo)`
  height: 16px;

  ${({ invalid }) =>
    invalid &&
    css`
      filter: saturate(0%);
    `}
`;
