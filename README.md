# Frontend - e-commerce

<p style="text-align: center;">Resolvi desenvolver o <span style="background: #469446; padding: 4px; color: white; border-radius: 2px;">frontend</span> de um e-commerce usando tecnologias modernas com a 
finalidade de exibir as minhas hard skills.</p>

### Tecnologias
- ReactJS
- TypeScript
- Styled-Components

### Imagens
<div style="width: 300px">
  <img src="" alt="" />
  <img src="" alt="" />
  <img src="" alt="" />
  <img src="" alt="" />
<div>

### Como testar ?
1º Clone o repositorio:
```bash 
$ git clone https://github.com/yabaernesto/frontendEcommerce.git
```

2º Instale as dependencias do projeto:
```bash 
$ npm install
```

3º Execute:
```bash 
$ npm run dev
```

#### Server Port:

Caso deseja mudar a porta onde o projeto e executado, va ate o arquivo <span style="color: white; background: #4646ac; padding: 3px;">vite.config.ts</span>, e mude o numero da <span style="color: white; background: #4646ac; padding: 3px;">port:</span> 3000

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
```
