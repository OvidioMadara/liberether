
## Objetivo
Aplicar os elementos enviados na landing de forma harmônica e minimalista. Regras invioláveis:
- Nenhum elemento decorativo atrás de textos, ícones ou imagens.
- Nenhum elemento "solto" flutuando sobre o conteúdo.
- Cada elemento entra em um slot próprio, com respiro (padding) ao redor.
- Uso máximo de 1 elemento decorativo por seção. Seções alternadas ficam limpas.

## Curadoria (o que entra e o que fica de fora)

Entram (8 elementos, cada um com um papel único):
- `01.png` — celular sobre cadernos com pingente ETH vermelho → hero principal (substitui `av-hero.jpg`).
- `8.png` — trio USDT + ETH + USDC → figura da seção "Acesso / moeda forte" (substitui a foto atual).
- `03.png` (ruby ETH) — marca âncora minúscula (~24px) ao lado de eyebrows/kickers de 2 seções, funcionando como bullet gráfico.
- `22.png` — pequeno escudo vermelho com check → ícone da seção de Garantia (substitui `av-guarantee.jpg`, sem fundo).
- `23.png` — setas circulares → ícone do pilar "Acesso" no método.
- `9.png`  — figura de hierarquia → ícone do pilar "Alocação" no método.
- `7_corrigido.png` — escudo prata+vermelho com globo → ícone do pilar "Autonomia" no método.
- `10.png` — rede de nós vermelha → divisor horizontal fino (altura fixa 96–120px) posicionado ENTRE duas seções, com fundo próprio, nunca sobre conteúdo.

Ficam de fora (para não poluir):
- `2.png`, `4.png`, `21.png` — duplicam o que `8.png` já entrega.
- `6.png` — escudo preto/prata, destoa da paleta clara.
- `5.png` — ondas vermelhas: sobra visual; guardamos como fallback caso o divisor `10.png` não caia bem.
- `24.png` — marcadores/dividers: redundantes com o kicker atual em texto.

## Onde cada elemento entra (mapa por seção)

```
[ HERO ]            → 01.png à direita (imagem própria, coluna dedicada, sem texto sobreposto)
[ Dor / Copy ]      → limpa (sem decor)
[ Acesso ]          → 8.png (trio de moedas) como figura da seção, coluna própria
[ divisor ]         → 10.png em faixa horizontal 100px, section-light, isolada
[ Método (4 pilares) ]
   • Acesso        → 23.png (setas circulares) como ícone do card
   • Autocustódia  → mantém ícone lucide atual (já é vermelho, coerente)
   • Alocação      → 9.png (hierarquia) como ícone do card
   • Autonomia     → 7_corrigido.png (escudo globo) como ícone do card
[ Cronograma ]      → limpa
[ Oferta / Kit ]    → 03.png como bullet ao lado do eyebrow "OFERTA"
[ Garantia ]        → 22.png (escudo check) grande, centralizado, substitui `av-guarantee.jpg`
[ FAQ ]             → limpa
[ CTA final ]       → 03.png como bullet ao lado do eyebrow
```

## Regras de aplicação (para garantir clean)

- Todos os PNGs entram como `<img>` com dimensão fixa e coluna/grid próprios — nunca via `absolute` sobre texto.
- Distância mínima de 48px entre qualquer elemento decorativo e qualquer título/parágrafo/imagem vizinha.
- Ícones dos pilares: quadrado 64×64px, `object-contain`, dentro do card, substituindo os ícones lucide atuais (mesmo espaço, sem reflow).
- Divisor `10.png`: seção dedicada `py-0 h-[100px]` com `background: var(--surface)` e `object-cover object-center`; sem texto na mesma seção.
- Nenhum `position: absolute` novo. Nenhum `z-index` acima do conteúdo. Nenhum overlay.
- Remoção total dos "floats" antigos (`floatCoin`, `floatWallet`, `floatKey`, `floatShield`, `floatStack`) que hoje ainda existem no import — eles foram justamente o padrão que atrapalhava.

## Arquivos afetados

- `src/routes/index.tsx` — trocar imports, substituir sources das seções listadas, remover imports/uso dos floats antigos, adicionar a seção divisora com `10.png`.
- `src/assets/` — adicionar os 8 novos PNGs (copiados dos uploads com nomes semânticos: `hero-phone.png`, `coins-trio.png`, `mark-ruby.png`, `shield-check.png`, `icon-swap.png`, `icon-flow.png`, `icon-globe.png`, `divider-network.png`).

## Fora do escopo

- Nenhuma alteração de copy, tipografia, cores do tema, header/logo, ou layout de grid.
- Nenhum novo componente; apenas troca de sources e uma seção divisora simples.

Ao aprovar, aplico as trocas e removo os floats antigos.
