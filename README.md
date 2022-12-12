O intuito desse projeto é avaliar os 3 tipos de modelos de renderização mais comuns, e compará-los em relação as métricas difundidas pelo Web Vitals.

A execução dos testes de performance é realizada com a ferramenta lighthouse.

Para tal basta executar os seguintes comandos:

https://fziliotti.github.io/web-performance-teste/teste-1.html

```sh

lighthouse https://fziliotti.github.io/web-performance-teste/teste-1.html  --output json --output html --output-path ./lighthouse-reports1
lighthouse https://fziliotti.github.io/web-performance-teste/teste-2.html  --output json --output html --output-path ./lighthouse-reports2
lighthouse https://fziliotti.github.io/web-performance-teste/teste-3.html  --output json --output html --output-path ./lighthouse-reports3
lighthouse https://fziliotti.github.io/web-performance-teste/teste-4.html  --output json --output html --output-path ./lighthouse-reports4
lighthouse https://fziliotti.github.io/web-performance-teste/teste-5.html  --output json --output html --output-path ./lighthouse-reports5

```
