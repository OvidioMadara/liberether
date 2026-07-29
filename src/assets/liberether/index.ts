import liberwalletPhone from "./hero/liberwallet-phone.png";
import glassSafeCrypto from "./hero/glass-safe-crypto.png";
import globeCryptoNetwork from "./hero/globe-crypto-network.png";

import ethereumRed from "./coins/ethereum-red.png";
import usdtCoin from "./coins/usdt-coin.png";
import usdcCoin from "./coins/usdc-coin.png";
import cryptoTrio from "./coins/crypto-trio.png";

import shieldPadlockSilver from "./security/shield-padlock-silver.png";
import shieldGlobe from "./security/shield-globe.png";
import shieldCheckWhite from "./security/shield-check-white.png";
import shieldCheckRed from "./security/shield-check-red.png";
import keyEthereum from "./security/key-ethereum.png";

import dashboardGlobe from "./ui/dashboard-globe.png";
import walletDashboard from "./ui/wallet-dashboard.png";
import transactionCard from "./ui/transaction-card.png";

import networkPlexus from "./decorative/network-plexus.png";
import waveLines from "./decorative/wave-lines.png";
import ethOrbitRings from "./decorative/eth-orbit-rings.png";
import ethTimelineDivider from "./decorative/eth-timeline-divider.png";
import hudElements from "./decorative/hud-elements.png";

import uploadIcon from "./icons/upload.png";
import downloadIcon from "./icons/download.png";
import hierarchyIcon from "./icons/hierarchy.png";
import refreshIcon from "./icons/refresh.png";

export type LiberetherAssetCategory =
  | "hero"
  | "coins"
  | "security"
  | "ui"
  | "decorative"
  | "icons";

export type LiberetherAssetMeta = {
  id: string;
  src: string;
  categoria: LiberetherAssetCategory;
  usoSugerido: string;
  alt: string;
  origem: string;
};

const hero = {
  liberwalletPhone: liberwalletPhone,
  liberwalletPhoneAlt:
    "Smartphone LiberWallet com cadernos e badge Ethereum — ecossistema LiberEther",
  glassSafeCrypto: glassSafeCrypto,
  glassSafeCryptoAlt:
    "Cofre de vidro com moedas digitais Ethereum, USDT e USDC",
  globeCryptoNetwork: globeCryptoNetwork,
  globeCryptoNetworkAlt:
    "Globo terrestre com orbitas de rede e tokens crypto — recebimento global",
} as const;

const coins = {
  ethereumRed: ethereumRed,
  ethereumRedAlt: "Logo Ethereum 3D vermelho",
  usdtCoin: usdtCoin,
  usdtCoinAlt: "Moeda Tether USDT",
  usdcCoin: usdcCoin,
  usdcCoinAlt: "Moeda USD Coin USDC",
  cryptoTrio: cryptoTrio,
  cryptoTrioAlt: "Ethereum, USDT e USDC — ativos digitais do ecossistema",
} as const;

const security = {
  shieldPadlockSilver: shieldPadlockSilver,
  shieldPadlockSilverAlt: "Escudo prateado com cadeado — segurança operacional",
  shieldGlobe: shieldGlobe,
  shieldGlobeAlt: "Escudo com globo — autonomia global e proteção de patrimônio",
  shieldCheckWhite: shieldCheckWhite,
  shieldCheckWhiteAlt: "Escudo branco com check — validação e conformidade",
  shieldCheckRed: shieldCheckRed,
  shieldCheckRedAlt: "Escudo vermelho com check — proteção verificada",
  keyEthereum: keyEthereum,
  keyEthereumAlt: "Chave com logo Ethereum — autocustódia e controle de chaves",
} as const;

const ui = {
  dashboardGlobe: dashboardGlobe,
  dashboardGlobeAlt: "Dashboard com globo e gráfico — visão operacional global",
  walletDashboard: walletDashboard,
  walletDashboardAlt:
    "Painel de carteira com ETH, USDT, USDC e indicador de segurança",
  transactionCard: transactionCard,
  transactionCardAlt: "Card de transação com logo Ethereum e status confirmado",
} as const;

const decorative = {
  networkPlexus: networkPlexus,
  networkPlexusAlt: "Rede de conexões vermelhas — fundo decorativo blockchain",
  waveLines: waveLines,
  waveLinesAlt: "Linhas onduladas vermelhas — elemento decorativo de fluxo",
  ethOrbitRings: ethOrbitRings,
  ethOrbitRingsAlt: "Ethereum com anéis orbitais — rede e infraestrutura",
  ethTimelineDivider: ethTimelineDivider,
  ethTimelineDividerAlt: "Divisor de timeline com Ethereum central",
  hudElements: hudElements,
  hudElementsAlt: "Sprite sheet de elementos HUD vermelhos para interface",
} as const;

const icons = {
  upload: uploadIcon,
  uploadAlt: "Ícone de upload",
  download: downloadIcon,
  downloadAlt: "Ícone de download",
  hierarchy: hierarchyIcon,
  hierarchyAlt: "Ícone de hierarquia e fluxo operacional",
  refresh: refreshIcon,
  refreshAlt: "Ícone de sincronização e atualização",
} as const;

/** Catálogo tipado de assets visuais LiberEther (24 PNGs). Origem: pasta "elementos visuais". Nota: 02.png não existia na pasta original. */
export const liberetherAssets = {
  hero,
  coins,
  security,
  ui,
  decorative,
  icons,
} as const;

export const liberetherAssetCatalog: LiberetherAssetMeta[] = [
  {
    id: "hero.liberwalletPhone",
    src: liberwalletPhone,
    categoria: "hero",
    usoSugerido: "Hero, VSL, produto LiberWallet",
    alt: hero.liberwalletPhoneAlt,
    origem: "01.png",
  },
  {
    id: "hero.glassSafeCrypto",
    src: glassSafeCrypto,
    categoria: "hero",
    usoSugerido: "Hero, método, autocustódia",
    alt: hero.glassSafeCryptoAlt,
    origem: "2.png",
  },
  {
    id: "hero.globeCryptoNetwork",
    src: globeCryptoNetwork,
    categoria: "hero",
    usoSugerido: "Hero, autonomia global, recebimento internacional",
    alt: hero.globeCryptoNetworkAlt,
    origem: "17.png",
  },
  {
    id: "coins.ethereumRed",
    src: ethereumRed,
    categoria: "coins",
    usoSugerido: "Parallax, ícones flutuantes, destaque ETH",
    alt: coins.ethereumRedAlt,
    origem: "legado (ex-2.png, moeda ETH)",
  },
  {
    id: "coins.usdtCoin",
    src: usdtCoin,
    categoria: "coins",
    usoSugerido: "Ilustração de stablecoins, comparativos",
    alt: coins.usdtCoinAlt,
    origem: "03.png",
  },
  {
    id: "coins.usdcCoin",
    src: usdcCoin,
    categoria: "coins",
    usoSugerido: "Parallax, foco USDC, hero flutuante",
    alt: coins.usdcCoinAlt,
    origem: "4.png",
  },
  {
    id: "coins.cryptoTrio",
    src: cryptoTrio,
    categoria: "coins",
    usoSugerido: "Comparativo de ativos, parallax, alocação",
    alt: coins.cryptoTrioAlt,
    origem: "5.png",
  },
  {
    id: "security.shieldPadlockSilver",
    src: shieldPadlockSilver,
    categoria: "security",
    usoSugerido: "Garantia, validação, parallax de segurança",
    alt: security.shieldPadlockSilverAlt,
    origem: "6.png",
  },
  {
    id: "security.shieldGlobe",
    src: shieldGlobe,
    categoria: "security",
    usoSugerido: "Autonomia global, proteção patrimonial",
    alt: security.shieldGlobeAlt,
    origem: "7 corrigido.png",
  },
  {
    id: "security.shieldCheckWhite",
    src: shieldCheckWhite,
    categoria: "security",
    usoSugerido: "Garantia, validação monitorada",
    alt: security.shieldCheckWhiteAlt,
    origem: "8.png",
  },
  {
    id: "security.shieldCheckRed",
    src: shieldCheckRed,
    categoria: "security",
    usoSugerido: "Garantia, CTA de confiança",
    alt: security.shieldCheckRedAlt,
    origem: "22.png",
  },
  {
    id: "security.keyEthereum",
    src: keyEthereum,
    categoria: "security",
    usoSugerido: "Pilar autocustódia, parallax, cronograma",
    alt: security.keyEthereumAlt,
    origem: "15.png",
  },
  {
    id: "ui.dashboardGlobe",
    src: dashboardGlobe,
    categoria: "ui",
    usoSugerido: "Entregáveis, bônus, diagnóstico operacional",
    alt: ui.dashboardGlobeAlt,
    origem: "13.png",
  },
  {
    id: "ui.walletDashboard",
    src: walletDashboard,
    categoria: "ui",
    usoSugerido: "Método, pilares, seção dor, comparativo",
    alt: ui.walletDashboardAlt,
    origem: "14.png",
  },
  {
    id: "ui.transactionCard",
    src: transactionCard,
    categoria: "ui",
    usoSugerido: "Prova social, fluxo de recebimento, bônus",
    alt: ui.transactionCardAlt,
    origem: "18.png",
  },
  {
    id: "decorative.networkPlexus",
    src: networkPlexus,
    categoria: "decorative",
    usoSugerido: "Fundo decorativo de seções tech",
    alt: decorative.networkPlexusAlt,
    origem: "9.png",
  },
  {
    id: "decorative.waveLines",
    src: waveLines,
    categoria: "decorative",
    usoSugerido: "Divisor de seção, fundo decorativo",
    alt: decorative.waveLinesAlt,
    origem: "10.png",
  },
  {
    id: "decorative.ethOrbitRings",
    src: ethOrbitRings,
    categoria: "decorative",
    usoSugerido: "Fundo hero, destaque blockchain",
    alt: decorative.ethOrbitRingsAlt,
    origem: "11.png",
  },
  {
    id: "decorative.ethTimelineDivider",
    src: ethTimelineDivider,
    categoria: "decorative",
    usoSugerido: "Cronograma, linha do tempo dos 12 encontros",
    alt: decorative.ethTimelineDividerAlt,
    origem: "12.png",
  },
  {
    id: "decorative.hudElements",
    src: hudElements,
    categoria: "decorative",
    usoSugerido: "Detalhes HUD, bullets, indicadores visuais",
    alt: decorative.hudElementsAlt,
    origem: "24.png",
  },
  {
    id: "icons.upload",
    src: uploadIcon,
    categoria: "icons",
    usoSugerido: "CTA de envio, upload de documentos",
    alt: icons.uploadAlt,
    origem: "19.png",
  },
  {
    id: "icons.download",
    src: downloadIcon,
    categoria: "icons",
    usoSugerido: "Download de manual, materiais",
    alt: icons.downloadAlt,
    origem: "20.png",
  },
  {
    id: "icons.hierarchy",
    src: hierarchyIcon,
    categoria: "icons",
    usoSugerido: "Fluxo operacional, estrutura do método",
    alt: icons.hierarchyAlt,
    origem: "21.png",
  },
  {
    id: "icons.refresh",
    src: refreshIcon,
    categoria: "icons",
    usoSugerido: "Sincronização, atualização de saldo",
    alt: icons.refreshAlt,
    origem: "23.png",
  },
];

export type LiberetherAssets = typeof liberetherAssets;

/** Busca asset por ID do catálogo (ex.: "security.shieldCheckRed"). */
export function getLiberetherAsset(id: string): LiberetherAssetMeta | undefined {
  return liberetherAssetCatalog.find((asset) => asset.id === id);
}

/** Busca asset pelo nome original na pasta "elementos visuais" (ex.: "22.png", "7 corrigido.png"). */
export function getLiberetherAssetByOrigem(origem: string): LiberetherAssetMeta | undefined {
  const normalized = origem.endsWith(".png") ? origem : `${origem}.png`;
  return liberetherAssetCatalog.find((asset) => asset.origem === normalized);
}

/** Lista assets de uma categoria. */
export function getLiberetherAssetsByCategory(
  categoria: LiberetherAssetCategory,
): LiberetherAssetMeta[] {
  return liberetherAssetCatalog.filter((asset) => asset.categoria === categoria);
}
