# Modelo básico de Next.js 13

Este modelo básico inclui algumas alterações pessoais em relação ao projeto padrão de **Next.js**, dentre elas:

<ul>
  <li>Novo esquema de pastas;</li>
  <li>Com arquivos pré-configurados;</li>
  <li>Configurado para Typescript;</li>
  <li>Eslint e Prettier configurados;</li>
  <li>Toda a configuração foi feita usando Yarn;</li>
  <li>Versão atualizada para Next.js 13.</li>
</ul>

## Esquema de Pastas

<br/><b>SRC:</b> esta pasta inclui todas as partes do projeto, organizados por:

<ul>
  <li>App: as páginas do projeto;</li>
  <li>Components: arquivos de componentes;</li>
  <li>Data: arquivos de dados em formato JSON;</li>
  <li>Functions: funções para a parte lógica;</li>
  <li>Models: classes utilizadas como modelos;</li>
  <li>Styles: todos os estilos em SASS.</li>
</ul>

<br /><b>PUBLIC:</b> contem tudo aquilo que será de acesso público:

<ul>
  <li>Icons: ícones a serem utilizados;</li>
  <li>Images: todas as imagens;</li>
  <li>Vectors: todos os vetores.</li>
</ul>

> Lembrando que estas pastas podem ser alteradas a vontade de acordo com a necessidade do projeto, este é só um modelo.

<br/>

## Linhas do SASS/SCSS

Por padrão este projeto utiliza o pré-processador SAAS, mas para que as variáveis funcionem corretamente nos estilos dos componentes é importante que carregue a linha `@import "vendor/_defaults"`

> AVISO: O uso do SASS/SCSS torna incompatível com o novo recurso Turbopack do Next.js 13, caso queira usar o recurso, utilize CSS convencional.

### Breakpoints

Para definir um breakpoint carregue o comando:

```
@include breakpoint('TAMANHO'){
    // Código
  }
```

Onde:

<ul>
  <li>**small-only** = < 600px</li>
  <li>**small-up** = > 600px</li>
  <li>**medium-only** = < 900px</li>
  <li>**medium-up** = > 900px</li>
  <li>**large-only** = < 1200px</li>
  <li>**large-up** = > 1200px</li>
</ul>

### Z-Index

Existem variáveis com z-index pré-definidos, para isso utilize, sem aspas, o padrão: `z-index: z-index(VALOR)`, onde:

<ul>
  <li>**above** = 500</li>
  <li>**modal** = 400</li>
  <li>**overlay** = 300</li>
  <li>**dropdown** = 200</li>
  <li>**default** = 1</li>
  <li>**below** = -1</li>
</ul>

### Caminhos Absolutos (Absolute Paths)

Para facilitar a importação de módulos, componentes e arquivos, o caminho é totalmente absoluto. Ao importar um arquivo dentro de `./src/...` utilize apenas `@/...`. Isso facilita principalmente quando há pastas aninhadas.

### Cores Globais

Também tem as variáveis de cores globais (root), onde utiliza-se `color: --color-esquema-nome`, onde a personalização deve ser feita em `@import "vendor/_colors"` que já vem com alguns modelos pré-carregados.

### Converter pixels para rem

O ideal é que utilize sempre REM no lugar de PIXELS para a maior parte do código, então utilize `rem(valor em px)`, pois o próprio SCSS fará a conversão. Por exemplo `rem(12)` que seria 12px será convertido para `1.33rem`.

### Outras variáveis

A pasta `@import "vendor/_variables"` conta com outras variáveis de medida e padrões.

<br/>

<br/>

---

Última alteração em **28 de maio de 2023**.
