// Arquivo de configuracao de tipagem do styled-componentes
import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

// passando o defaultTheme no ThemeType
type ThemeType = typeof defaultTheme;

// declarando que o modulo do styled-componente extende de ThemeType para tipar o que ele contem
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
