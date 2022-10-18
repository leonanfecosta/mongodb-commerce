# Projeto MongoDB Commerce 🌱

A partir do banco de dados commerce, que contém dados do cardápio do McDonald's, como ingredientes, valores nutricionais e dados fictícios de vendas, foram realizados os desafios abaixo.

* Projeto desenvolvido com MongoDB e Docker
<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="50" width="62" alt="mongodb logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" height="50" width="62" alt="docker logo"  />
</div>

### Desafios
> Os desafios estão presentes no diretório `challenges`

| Desafio | Descrição |
|---|---|
| `1` | Query para retorna a quantidade de documentos inseridos na coleção produtos |
| `2` | Query para ordenar a coleção produtos pela quantidade de lanches vendidos em ordem crescente |
| `3` | Query para mostrar o lanche mais vendido |
| `4` | Query todos os lanches com mais de 50 e menos de 100 vendas |
| `5` | Query que filtra os produtos que tem 36 curtidas ou 85 vendas no total |
| `6` | Query que retorna os produtos com mais de 10 e menos de 100 curtidas |
| `7` | Query que retorna os produtos com número de vendas diferente de 50 e que não tenha o campo `tags` |
| `8` | Query para deletar os lanches com menos de 50 curtidas |
| `9` | Query para retornar todos os lanches com menos de 500 calorias |
| `10` | Query para filtrar os lanches com mais de 30% e menos de 40% de proteínas |
| `11` | Query para filtrar os lanches que não tenham os nomes: Big Mac e McChicken  |
| `12` | Query para adicionar ketchup aos ingredientes para todos os sanduíches menos o McChicken |
| `13` | Query para incluir o campo criadoPor em todos os documentos, com valor Ronald McDonald |
| `14` | Query que retorne os lanches que possuem picles como ingredientes e mostre apenas os 3 primeiros itens no campo valoresNutricionais |
| `15` | Query para adicionar o campo avaliacao em todos os documentos |
| `16` | Query para adicionar o campo ultimaModificacao com a data atual apenas para o Big Mac |
| `17` | Query para criação de uma nova coleção chamada resumoProdutos com a quantidade total de produtos |
| `18` | Query para incluir bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo |
| `19` | Query para remover o ingrediente Cebola de todos os sanduíches |
| `20` | Query para remover o primeiro ingrediente do sanduíche Quarteirão com Queijo |
| `21` | Query para remover o último ingrediente do sanduíche Cheddar McMelt |
| `22` | Query para criar o campo vendasPorDia em todos os sanduíches  |
| `23` | Query para adicionar os valores `combo` e `tasty` no array tags de todos os sanduíches em ordem alfabética |
| `24` | Query para ordernar todos os documentos os valores do array valoresNutricionais pelo campo percentual de forma decrescente |
| `25` | Query para adicionar o valor muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40 |
| `26` | Query para adicionar  o valor contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40|
| `27` | Query que conta quantos produtos contém Mc no nome, sem considerar letras maiúsculas ou minúsculas |
| `28` | Query que conta quantos produtos têm 4 ingredientes |
| `29` | Query para renomear o campo descricao para descricaoSite em todos os documentos |
| `30` | Query para remover o campo curtidas do item Big Mac|
| `31` | Query para retornar o nome dos sanduíches em que o número de curtidas é maior que o número de sanduíches vendidos|
| `32` | Query para retornar o nome e a quantidade de vendas (vendidos) dos sanduíches em que o número de vendas é múltiplo de 5|
