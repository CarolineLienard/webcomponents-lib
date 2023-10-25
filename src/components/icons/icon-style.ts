import { css, CSSResult } from "lit";

export const iconStyle: CSSResult = css`
  :host {
    display: flex;
    align-item: center;
    justify-content: center;
  }

  svg {
    fill: currentColor;
  }

  .small {
    width: 20px;
    height: 20px;
  }

  .medium {
    width: 32px;
    height: 32px;
  }

  .xlarge {
    width: 48px;
    height: 48px;
  }
`;
