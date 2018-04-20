import React from 'react';


export const RightArrow = () => (
  <svg width="7" height="9" xmlns="http://www.w3.org/2000/svg">
    <path d="M.23.167C.078.278 0 .41 0 .563v7.874c0 .153.077.285.23.396A.911.911 0 0 0 .779 9a.91.91 0 0 0 .547-.167l5.444-3.937C6.923 4.784 7 4.652 7 4.5c0-.152-.077-.284-.23-.396L1.324.167A.91.91 0 0 0 .778 0 .911.911 0 0 0 .23.167z" fill="#CBCBCB" fillRule="evenodd"/>
  </svg>
);

export const Locked = () => (
  <svg width="12" height="16" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 7V4a4 4 0 1 1 8 0v3h1.5c.276 0 .5.222.5.51v7.98c0 .282-.229.51-.5.51H.5a.501.501 0 0 1-.5-.51V7.51C0 7.228.229 7 .5 7H2zm4.7 4.827a1.5 1.5 0 1 0-1.4 0v1.683c0 .275.226.49.505.49h.39c.286 0 .505-.22.505-.49v-1.683zM3.125 7h5.75V4c0-1.519-1.287-2.75-2.875-2.75S3.125 2.481 3.125 4v3z" fill="#9B9B9B" />
  </svg>
);

export const CheckboxEmpty= () => (
  <svg width="21" height="21" xmlns="http://www.w3.org/2000/svg">
    <path d="M.5.5h20v20H.5z" stroke="#E2E2E2" fill="none" fillRule="evenodd" />
  </svg>
);

export const CheckboxFilled = () => (
  <svg width="21" height="21" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
        <path id="a" d="M0 0h21v21H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
        <use fill="#9DE1B6" xlinkHref="#a" />
        <path stroke="#FFF" strokeWidth="4" d="M2 2h17v17H2z" />
        <path stroke="#E2E2E2" d="M.5.5h20v20H.5z" />
    </g>
  </svg>
);
