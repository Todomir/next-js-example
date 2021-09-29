import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --ff-raleway: 'Raleway', 'Frutiger Linotype', Univers, Calibri,
    'Gill Sans', 'Gill Sans MT', 'Myriad Pro', Myriad, 'DejaVu Sans Condensed',
    'Liberation Sans', 'Nimbus Sans L', Tahoma, Geneva, 'Helvetica Neue',
    Helvetica, Arial, sans-serif;
  }
  
  html, body, select, input, textarea, button {
    font-family: var(--ff-raleway);
  }

  body {
    line-height: 1.5;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
`
