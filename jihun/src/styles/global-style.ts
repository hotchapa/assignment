import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  :root {

  /* Colors */
  --dark01: #010101;
  --dark02: #202020;
  --dark10: rgba(1, 1, 1, 0.1);
  --dark30: rgba(1, 1, 1, 0.3);
  --dark50: rgba(1, 1, 1, 0.5);
  --dark70: rgba(1, 1, 1, 0.7);
  --white: #ffffff;
  --white30: rgba(255, 255, 255, 0.3);
  --white50: rgba(255, 255, 255, 0.5);
  --white70: rgba(255, 255, 255, 0.7);
  --white90: rgba(255, 255, 255, 0.9);
  --gray01: #4a4a4a;
  --gray02: #6c6c6c;
  --gray03: #d9d9d9;
  --gray04: #EAEAEA;
  --gray05: #6C6C6C;
  --gray06: #cfcfcf;
  --red: #F33434;
  --maingradient: linear-gradient(100deg, #3fd5de, #2deea8);
  --reversegradient: linear-gradient(100deg, #2deea8, #3fd5de);
  --transgradient: linear-gradient(100deg, rgba(45, 238, 168, 0.5), rgba(63, 213, 222, 0.5));
  --decogradient01: linear-gradient(152.33deg, #cc85f5 6.96%, #ff7171 88.63%);
  --decogradient02: linear-gradient(152.33deg, #d46fff 6.96%, #ecff21 88.63%);
  --redgradient: linear-gradient(90deg, rgba(255,37,37,1) 0%, rgba(255,97,45,1) 35%, rgba(250,0,60,1) 100%);

    }
  
  
`;