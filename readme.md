# DESAFIO DIGITAL COLLEGE - NETFLIX LOGIN

O desafio proposto era reproduzir a página de login do site da [Netflix](https://www.netflix.com/br/login). 

## Sumário

- [Projeto](#projeto)
  - [Link do projeto](#Link-do-projeto)
- [Meu Processo](#meu-processo)
  - [Built with](#built-with)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [O desenvolvimento](#o-desenvolvimento)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Projeto

### Link do projeto 

Aperte aqui para ver o Design Original da [Netflix Login](https://www.netflix.com/br/login)
Aperte aqui para ver o [Meu Resultado](https://sarahprado.github.io/projeto-netflix-desafiodigitalcollege/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JS - Projeto sob testes em JS


### O que eu aprendi
Foi a primeira vez que reproduzi a estilização de um site real por conta própria, ou seja, sem CTRL+C CTRL+V de projetos onlines, talvez para o restante que falta em JS eu utilize recursos externos. rs.

Logo, aprendi a usar o display:grid com elementos reais (Sem a abstração que tanto usamos para aprender), desenvolvendo um Header;Main e Footer.

### O desenvolvimento

Para começar me questionei sobre o posicionamento da logo no header do site, pensei em por um display:grid; para poder separar o site em 3 partes (HEADER;MAIN;FOOTER).
Após ajustar o posicionamento da logo, do card e do footer, encontrei o dilema de colocar sombra na imagem de background, em que colocando o código abaixo não resolvia o problema.

```css
body{
  .
  .
  background-color:  rgb(0, 0, 0, .5);
  .
  .

}
```
Mesmo pesquisando, eu ainda queria continuar usando o display:grid, então lembrei que se eu colocasse um background-color em cada divisão do grid funcionava, então coloquei background em Header;Main;Footer. E funcionou! 

Após ajustar o fundo, detalhei o footer, porém não consegui deixar responsivo igual ao do site original. Ainda pesquisando para entender como é feito no Site e como adequar para o meu código!

Logo, falta ajustar a parte de JS do Site, gostaria que o Saiba Mais funcionasse e os inputs também.

Por fim, é isso!

## Author

- GitHub - [@SarahPrado](https://github.com/SarahPrado)



