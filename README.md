# Cruz & Farias — Site V2 com foto e logotipos oficiais

## Entrega principal

- `index.html`: página principal.
- `styles.css`: identidade visual e responsividade.
- `script.js`: menu, conversão, efeitos e experiências dinâmicas.
- `assets/gustavo-farias.webp`: fotografia profissional otimizada.
- `assets/logos/`: logotipos normalizados em uma mesma proporção visual.
- `cruz-farias-site-completo.html`: versão autônoma em um único arquivo, com imagens, CSS e JavaScript incorporados.

## Ajustes realizados

- Fotografia real de Gustavo Farias na seção de liderança.
- Logotipo completo da Cruz & Farias no cabeçalho e rodapé.
- Logotipos reais de Grupo MNGT, Área Incrível, Mais Armazém, Centro Logístico Rio Claro, Vilaurbe e Saffi na área de experiências.
- Logotipos da Cruz & Farias e LeverPro na seção de parceria.
- Mensagem explícita: **Somos parceiros da LeverPro**.
- Imagens recortadas, reenquadradas, ampliadas com reamostragem de alta qualidade e posicionadas em cartões padronizados.
- Responsividade validada no código para desktop, notebook, tablet e celular.
- Navegação por teclado mantida na área de experiências.
- Nova imagem de compartilhamento social com fotografia de Gustavo.

## Publicação

Envie todo o conteúdo desta pasta para a raiz do projeto na Vercel.

O arquivo `index.html` deve permanecer na raiz. Preserve a pasta `assets` e seus nomes.

## Configurações rápidas

No início de `script.js`:

```javascript
const CONFIG = {
  diagnosticBase: "https://diagnostico-pi-one.vercel.app/",
  whatsappNumber: "5516991940396"
};
```

Altere apenas esses valores quando o endereço do diagnóstico ou o telefone mudar.

## Transparência

As marcas da seção de experiências representam ambientes profissionais em que Gustavo Farias participou ou liderou iniciativas. A página não afirma que todas foram clientes diretas da Cruz & Farias.

## Logo na aba do navegador (favicon)

O pacote já inclui `favicon.ico`, PNGs em múltiplos tamanhos, `apple-touch-icon.png` e `site.webmanifest`.
Após publicar, o navegador pode manter o ícone antigo em cache. Faça uma atualização forçada (`Ctrl + F5`) ou teste em janela anônima. Em alguns celulares, o ícone ao lado da URL é o botão de informações/controles do Chrome; a logo aparece na aba, nos favoritos e no atalho da tela inicial.
