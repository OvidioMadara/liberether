## Objetivo

Trocar as imagens geradas por IA que ainda estão na landing pelos novos elementos 3D oficiais enviados, sem mexer em copy, tipografia, cabeçalho/logo ou estrutura de seções.

## Mapeamento de substituição

| Novo asset | Onde entra | Substitui |
|---|---|---|
| `16.png` cofre de vidro com ETH/USDT/USDC | Seção "Anatomia"/Kit | `le-coins-trio.png` e `av-kit.png` |
| `17.png` globo com moedas orbitando | Seção do criador / autonomia global | `av-creator.jpg` |
| `15.png` chave vermelha com ETH | Ícone de autocustódia (pilares) | ícone atual do pilar |
| `14.png` card UI com moedas + cadeado | Bônus 1 | `av-bonus-1.png` |
| `13.png` card UI com globo e gráfico | Bônus 2 | `av-bonus-2.png` |
| `18.png` notificação ETH aprovada | Bônus 3 | `av-bonus-3.png` |
| `12.png` divisor linear com ETH | Divisor entre seções | `le-divider-network.png` |
| `11.png` órbitas concêntricas com ETH | Fundo sutil da seção de oferta/garantia | `av-flatlay.jpg` como bg |
| `19.png` / `20.png` setas up/download | Ícones de "enviar/receber" na seção de dor ou passos | ícones genéricos atuais |

## Cuidados

- Os PNGs têm fundo transparente (o xadrez escuro é só o preview), então funcionam sobre o fundo branco. Elementos com brilho vermelho neon (`11.png`, `12.png`) serão usados em blocos com fundo escuro ou cinza para não sumirem no branco — se ficarem fracos, entram em um bloco `#0B0B0C` de baixa altura.
- Nada de elemento decorativo por trás de textos ou de outros ícones, mantendo a regra clean já definida.
- Assets antigos que ficarem sem uso permanecem no repositório (sem remoção destrutiva).

## Técnico

- Registrar cada upload via `lovable-assets create` a partir de `/mnt/user-uploads/`, gerando ponteiros `.asset.json` em `src/assets/` com nomes semânticos (`le-vault.png`, `le-globe.png`, `le-key.png`, `le-card-wallet.png`, `le-card-global.png`, `le-notify.png`, `le-divider-eth.png`, `le-orbit.png`, `le-arrow-up.png`, `le-arrow-down.png`).
- Atualizar os imports em `src/routes/index.tsx` para os novos ponteiros e ajustar tamanhos/paddings pontuais para manter o ritmo visual.
- Rodar build para validar.
