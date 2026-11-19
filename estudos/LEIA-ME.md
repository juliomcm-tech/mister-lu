# Mister Lu · estudos (NFL)

## Dados
`games.csv` do nflverse (github.com/nflverse/nflverse-data, release «schedules»): 7.548 jogos de 1999 a 2026, com as **linhas de fecho** das casas (handicap, total e vencedor), descanso de cada equipa e o número do jogo na ESPN.

## Modelo (`model.py`)
- Pontos esperados por equipa: média + casa/2 + ataque − defesa do adversário (± descanso).
- Depois de cada jogo, ataque/defesa mexem 9% do erro (goleadas só contam até 21 pts). Entre épocas fica 70%.
- Vantagem de casa aprendida sozinha (era ~3 pts, agora ~1 pt). Folga +1 pt, quinta-feira depois de domingo −0,6.
- Margem final: normal (desvio 12) × pesos dos números-chave aprendidos (3: ×2,6 · 7: ×1,7 · 10: ×1,2 · 14: ×1,4 · empate: ×0,13).

## Teste às cegas
Afinado em 2009-18, escolhido em 2019-21, testado sem ver o futuro em 2022-26 (1.285 jogos).

| | log-loss vencedor | acerto |
|---|---|---|
| Lu sozinho | 0,633 | 64,7% |
| Linha de fecho da casa | 0,608 | 67,7% |
| Mistura 90% casa + 10% Lu | 0,612 | — |

- Handicap contra a linha de fecho: ~49-51% (sem vantagem). Total: ~50%.
- Linhas alternativas a partir da linha da casa (ex.: favorito a cobrir linha−7 / linha+7): previsto 72% → real 75%, 28% → 27%; erro de 1-3 pontos nas linhas muito afastadas.

## Conclusão honesta
A linha principal da NFL é muito eficiente: o Lu sozinho não a bate. A app usa a linha da casa (peso aprendido, começa em 90%) e o modelo de margens com números-chave para pôr preço nas linhas alternativas e comparar com as odds da Betano.
