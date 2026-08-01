# Análise estratégica do primeiro site — Cruz & Farias

## Diagnóstico do código recebido

O material enviado possui uma boa base de conteúdo, mas mistura estrutura, vários blocos extensos de CSS, correções responsivas sobrepostas e JavaScript em um único arquivo. Além disso, ainda depende de `styles.css` e `script.js` externos, que não estavam incluídos no material analisado.

### Pontos fortes
- Proposta de valor orientada a retrabalho, sistemas, processos e dados.
- Método Conecta já estruturado.
- Jornada comercial em três níveis: Entender, Transformar e Sustentar.
- Transparência ao diferenciar experiência profissional de contratação da consultoria.
- Conteúdo técnico consistente para construção e logística.
- Uso de dados estruturados, meta description e canonical.

### Problemas prioritários encontrados
1. **Posicionamento ainda amplo:** “processos, sistemas e dados” não cria uma categoria própria. A nova versão usa “Operação Conectada”.
2. **Hero correto, mas pouco memorável:** a nova versão adota “Do sistema instalado à operação funcionando”.
3. **Excesso de CSS corretivo:** havia diversos blocos de media queries e overrides resolvendo os mesmos componentes em camadas diferentes.
4. **Dependências incompletas:** o HTML chamava `styles.css` e `script.js`, mas também continha grandes blocos inline.
5. **Seção de empresas pesada:** muitos estilos, cálculos de altura e dependência de logos locais. A nova versão mantém a interatividade, mas usa uma estrutura mais simples e resistente.
6. **Links fragmentados:** diagnóstico e portfólio ainda usam endereços Vercel. A recomendação é migrar para subdomínios ou rotas do domínio oficial.
7. **Marca pessoal pouco integrada:** a nova versão conecta Gustavo Farias, Cruz & Farias, Método Conecta e Operação Conectada.
8. **Parceria LeverPro ausente:** a nova versão destaca “Parceiro LeverPro” no hero e cria uma seção dedicada.
9. **Conversão espalhada:** a nova versão centraliza URLs e UTMs no JavaScript para facilitar manutenção.
10. **SEO social incompleto:** foram adicionadas tags Open Graph, Twitter Card e um JSON-LD em grafo com empresa, fundador e website.
11. **Responsividade difícil de manter:** a nova estrutura usa grids fluidos e breakpoints claros para desktop, notebook, tablet e celular.
12. **Performance:** a nova versão elimina fontes externas obrigatórias, reduz CSS duplicado e usa somente um arquivo JS sem biblioteca.

## Melhorias aplicadas
- Categoria: **Operação Conectada**.
- Promessa: **Do sistema instalado à operação funcionando.**
- Badge e seção completa: **Parceiro LeverPro**.
- Hierarquia visual mais executiva.
- Provas quantitativas da trajetória profissional.
- Quatro pilares mais objetivos.
- Método Conecta reorganizado.
- Serviços com CTA próprio.
- Experiências interativas acessíveis por teclado.
- Transparência profissional preservada.
- SEO técnico e social revisado.
- Menu móvel, foco visível, skip link e reduced motion.
- Layout sem rolagem horizontal de 320 px a telas amplas.
- Links de diagnóstico e WhatsApp controlados por configuração única.

## Próximas ações recomendadas
1. Substituir a ilustração provisória de Gustavo por uma fotografia profissional em WebP.
2. Mapear `diagnostico.cruzfarias.com.br` para o diagnóstico atual.
3. Criar `cruzfarias.com.br/gustavo` em vez de manter portfólio separado no Vercel.
4. Confirmar autorização de exibição de todas as marcas citadas.
5. Adicionar depoimentos reais e autorizados.
6. Criar páginas individuais para ERP na construção, WMS/logística, PMO de sistemas e cases.
7. Configurar Analytics, Search Console e eventos de conversão.
8. Publicar uma página específica explicando a parceria Cruz & Farias + LeverPro.
