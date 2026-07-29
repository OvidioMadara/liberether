import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { ArrowRight, Check, X, ChevronDown } from "lucide-react";

import { liberetherAssets } from "@/assets/liberether";
import logo from "@/assets/av-logo.png";
import AnimatedTextCycle from "@/components/AnimatedTextCycle";

import avatarJoao from "@/assets/casos/joao.png";
import avatarChica from "@/assets/casos/chica.png";
import avatarLucas from "@/assets/casos/lucas.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mentoria Autonomia Global — LiberEther" },
      {
        name: "description",
        content:
          "Acompanhamento individual de 90 dias para receber, proteger e movimentar seu dinheiro em dólares digitais com autocustódia e conversão via Pix.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Mentoria Autonomia Global — LiberEther" },
      {
        property: "og:description",
        content:
          "Acompanhamento individual de 90 dias para receber, proteger e movimentar seu dinheiro em dólares digitais com autocustódia e conversão via Pix.",
      },
    ],
  }),
  component: Landing,
});

/* ---------- shared ---------- */

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-page px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

function Section({
  children,
  id,
  alt = false,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  alt?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`${alt ? "section-light" : ""} py-12 md:py-16 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ember">
      {children}
    </p>
  );
}

function Title({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`display text-[30px] leading-[1.1] md:text-[44px] ${className}`}
    >
      {children}
    </h2>
  );
}

const WHATSAPP_NUMBER = "554896237167";
const WHATSAPP_MESSAGE =
  "Olá! Quero agendar meu diagnóstico da Mentoria Autonomia Global.";

function whatsappHref() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

function CTA({
  children,
  section,
}: {
  children: React.ReactNode;
  section: string;
}) {
  const base =
    "group inline-flex items-center gap-3 rounded-full px-7 py-4 text-[15px] font-medium transition-all duration-300 hover:-translate-y-[1px]";
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      data-section={section}
      className={`${base} bg-primary text-primary-foreground hover:shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--color-ember)_55%,transparent)]`}
    >
      <span>{children}</span>
      <ArrowRight className="size-4 text-primary-foreground transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}

/* ---------- header ---------- */

function TopMark() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <Container className="flex items-center justify-center pt-6 sm:pt-8">
        <a
          href="#top"
          className="inline-flex items-center justify-center leading-none"
          aria-label="LiberEther"
        >
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden sm:h-12 sm:w-12 md:h-[52px] md:w-[52px]">
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              width={512}
              height={512}
              className="block h-[170%] w-[170%] max-w-none object-contain"
            />
          </span>
          <span className="-ml-1 font-display leading-none tracking-[-0.01em] text-foreground text-[34px] sm:-ml-1.5 sm:text-[42px] md:-ml-2 md:text-[52px]">
            LiberEther
          </span>
        </a>
      </Container>
    </header>
  );
}

/* ---------- shared visuals ---------- */

const sectionHeroImageClass =
  "h-auto w-full max-w-[640px] object-contain md:max-h-[500px] md:max-w-full lg:max-h-[560px]";

/* ---------- 01. hero ---------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip pt-40 pb-10 md:pt-52 md:pb-24 lg:pb-28">
      <Container>
        <div className="grid items-center gap-14 md:grid-cols-[0.92fr_1.08fr] md:gap-10 lg:gap-12">
          <div className="relative z-10 md:max-w-[33rem]">
            <h1 className="display display-tight text-[38px] leading-[1.04] md:text-[62px]">
              Receba, proteja e movimente seu dinheiro em{" "}
              <AnimatedTextCycle
                words={[
                  "dólares digitais",
                  "autocustódia",
                  "uma moeda forte",
                  "qualquer lugar",
                ]}
                intervals={[6000, 4000, 4000, 4000]}
                className="text-ember"
              />
              .
            </h1>

            <p className="mt-7 max-w-content-sm text-[17px] leading-relaxed text-muted-foreground md:text-[19px]">
              Reduza taxas de conversão, burocracias e dependência de
              intermediários com uma estrutura financeira global adaptada à sua
              rotina.
            </p>

            <p className="mt-4 max-w-content-sm text-[15px] leading-relaxed text-muted-foreground">
              A Mentoria Autonomia Global LiberEther é um acompanhamento
              individual de 90 dias para você aprender a utilizar dólares
              digitais, carteiras próprias e conversões via Pix com mais
              segurança e controle.
            </p>

            <div className="mt-9">
              <CTA section="hero">Agende seu diagnóstico com nosso time</CTA>
            </div>

            <p className="mt-5 text-[13px] italic text-muted-foreground">
              Atendimento individual com tela compartilhada. Vagas limitadas
              pela agenda.
            </p>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <img
              src={liberetherAssets.hero.liberwalletPhone}
              alt={liberetherAssets.hero.liberwalletPhoneAlt}
              width={1600}
              height={1600}
              className={sectionHeroImageClass}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- 02. custo da estrutura tradicional ---------- */

const perdas = [
  "Cotações desfavoráveis",
  "Tarifas de envio e recebimento",
  "Prazos de vários dias úteis",
  "Burocracias bancárias",
  "Bloqueios e limitações de plataformas",
];

const tradicional = [
  "Diversos intermediários",
  "Conversões com margens elevadas",
  "Liquidação demorada",
  "Saldo sob regras de terceiros",
];

const autonoma = [
  "Menos intermediários",
  "Taxas de rede reduzidas",
  "Saldo disponível com mais rapidez",
  "Controle direto por meio da autocustódia",
];

function Custo() {
  return (
    <Section id="custo" alt>
      <div className="max-w-content">
        <Eyebrow>O custo invisível</Eyebrow>
        <Title>Quanto a estrutura tradicional custa para você?</Title>
        <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
          Ao receber do exterior, pagar fornecedores ou proteger o caixa da
          empresa, parte do dinheiro pode ser perdida em:
        </p>
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {perdas.map((p) => (
          <li
            key={p}
            className="flex items-start gap-3 rounded-2xl bg-surface-raised px-5 py-4 text-[15px]"
          >
            <X className="mt-0.5 size-4 shrink-0 text-ember" />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <div className="mt-16">
        <h3 className="display text-[24px] md:text-[30px]">
          Uma estrutura mais direta
        </h3>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-hairline bg-surface-raised p-7">
            <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Modelo tradicional
            </p>
            <ul className="mt-5 space-y-3">
              {tradicional.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                  <X className="mt-1 size-4 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-ember/25 bg-surface-raised p-7">
            <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-ember">
              Estrutura autônoma
            </p>
            <ul className="mt-5 space-y-3">
              {autonoma.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px]">
                  <Check className="mt-1 size-4 shrink-0 text-ember" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <CTA section="custo">Descubra quanto você pode estar perdendo</CTA>
        </div>
      </div>
    </Section>
  );
}

/* ---------- 03. diagnóstico ---------- */

const diagnostico = [
  "Como você recebe e movimenta seu dinheiro",
  "Quanto perde atualmente com taxas e conversões",
  "Quais redes e dólares digitais fazem sentido para seu caso",
  "Como proteger suas credenciais e chaves",
  "Como integrar sua estrutura digital ao Pix",
];

function Diagnostico() {
  return (
    <Section id="diagnostico">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <Eyebrow>Ponto de partida</Eyebrow>
          <Title>Uma estrutura criada para a sua realidade</Title>
          <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
            Antes da implementação, realizamos um diagnóstico para entender:
          </p>
          <ul className="mt-6 space-y-3">
            {diagnostico.map((d) => (
              <li key={d} className="flex items-start gap-3 text-[15px]">
                <Check className="mt-1 size-4 shrink-0 text-ember" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <CTA section="diagnostico">Agende seu diagnóstico</CTA>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <img
            src={liberetherAssets.hero.globeCryptoNetwork}
            alt={liberetherAssets.hero.globeCryptoNetworkAlt}
            loading="lazy"
            width={1600}
            height={1600}
            className={sectionHeroImageClass}
          />
        </div>
      </div>
    </Section>
  );
}

/* ---------- 04. aplicações práticas ---------- */

const casos = [
  {
    nome: "João",
    area: "Moda · Importação",
    paragrafos: [
      "João é estudante de medicina e participa da gestão do negócio de roupas da família. Antes da mentoria, os pagamentos a fornecedores internacionais, especialmente da China, ainda dependiam de processos pouco estruturados.",
      "Durante a mentoria, organizamos uma estratégia adequada à realidade da empresa. João passou a utilizar USDC para pagar fornecedores no exterior e a alocar parte das reservas do caixa em stablecoins com estratégias de rendimento.",
      "Cada rota de pagamento, limite de exposição e rotina de gestão foi definida de acordo com o perfil da família, o fluxo da empresa e as necessidades da operação — sem soluções genéricas ou decisões no improviso.",
    ],
    img: avatarJoao,
  },
  {
    nome: 'Virgínia "Chica"',
    area: "Agente de turismo · Argentina no RJ",
    paragrafos: [
      "Virgínia é argentina, vive no Rio de Janeiro e atua com turismo para clientes brasileiros e internacionais. Sua operação precisava conciliar diferentes formas de recebimento, além de organizar corretamente os fluxos ligados à Argentina e ao CNPJ brasileiro.",
      "Durante a mentoria, estruturamos uma operação para receber pagamentos internacionais via Bitwage, realizar cobranças locais por QR Code Pix e separar com clareza os recursos de cada atividade.",
      "As reservas passaram a ser organizadas no Piggy Bank da LiberWallet, enquanto os valores destinados às despesas e liquidações do dia a dia podem ser utilizados por meio do cartão Ether.fi ou da Yodl.",
      "Cada rota foi definida de acordo com a origem, a finalidade e o enquadramento de cada recurso, trazendo mais organização, rastreabilidade e controle para a operação.",
    ],
    img: avatarChica,
  },
  {
    nome: "Lucas Oliveira",
    area: "Tatuador profissional",
    paragrafos: [
      "Lucas buscava uma forma de receber em dólar digital sem depender exclusivamente de bancos tradicionais, além de organizar melhor o pagamento de fornecedores e a compra de materiais.",
      "Durante a mentoria, estruturamos rotas para converter recebimentos via Pix em stablecoins de forma automática, utilizar um cartão de débito cripto nas despesas do dia a dia e alocar parte das reservas em ativos digitais estáveis com estratégias de rendimento.",
      "Todo o processo foi desenvolvido com orientação sobre volatilidade, autocustódia, segurança e riscos operacionais — respeitando a rotina, os objetivos e o perfil de Lucas.",
    ],
    img: avatarLucas,
  },
];

function Aplicacoes() {
  return (
    <Section id="aplicacoes" alt>
      <div className="max-w-content">
        <Eyebrow>Na prática</Eyebrow>
        <Title>Aplicações práticas</Title>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {casos.map((c) => (
          <article
            key={c.nome}
            className="rounded-3xl border border-hairline bg-surface-raised p-7"
          >
            <img
              src={c.img}
              alt={c.nome}
              loading="lazy"
              width={200}
              height={200}
              className="size-14 rounded-full object-cover"
            />
            <h3 className="mt-5 display text-[21px]">{c.nome}</h3>
            <p className="mt-1 text-[13px] uppercase tracking-[0.16em] text-ember">
              {c.area}
            </p>
            <div className="mt-4 space-y-3">
              {c.paragrafos.map((paragrafo, index) => (
                <p
                  key={index}
                  className="text-[15px] leading-relaxed text-muted-foreground"
                >
                  {paragrafo}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <CTA section="aplicacoes">Fale com nosso time</CTA>
      </div>
    </Section>
  );
}

/* ---------- 05. método ---------- */

const pilares = [
  {
    n: "1",
    titulo: "Acesso",
    texto:
      "Configure rotas eficientes para receber dólares digitais e converter valores para Pix.",
    img: liberetherAssets.icons.download,
    alt: liberetherAssets.icons.downloadAlt,
    imgClass: "max-h-[114px] w-auto scale-[1.625]",
  },
  {
    n: "2",
    titulo: "Autocustódia",
    texto:
      "Aprenda a utilizar carteiras privadas, backups e cofres eletrônicos com segurança.",
    img: liberetherAssets.security.keyEthereum,
    alt: liberetherAssets.security.keyEthereumAlt,
    imgClass: "rotate-90 max-h-[156px] w-auto scale-[1.43]",
  },
  {
    n: "3",
    titulo: "Alocação",
    texto:
      "Organize sua liquidez e compreenda os riscos dos dólares digitais e do ecossistema DeFi.",
    img: liberetherAssets.ui.walletDashboard,
    alt: liberetherAssets.ui.walletDashboardAlt,
    imgClass: "max-h-[172px] w-full",
  },
  {
    n: "4",
    titulo: "Autonomia",
    texto:
      "Utilize sua estrutura no dia a dia para receber, guardar, converter e movimentar recursos.",
    img: liberetherAssets.ui.dashboardGlobe,
    alt: liberetherAssets.ui.dashboardGlobeAlt,
    imgClass: "max-h-[190px] w-full",
  },
];

function Metodo() {
  return (
    <Section id="metodo">
      <div className="max-w-content">
        <Eyebrow>Método</Eyebrow>
        <Title>O Método LiberEther</Title>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pilares.map((p) => (
          <article
            key={p.titulo}
            className="flex h-full flex-col rounded-3xl border border-hairline bg-surface-raised p-7"
          >
            <div className="flex h-[187px] w-full items-center justify-center md:h-52">
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className={`object-contain ${p.imgClass}`}
              />
            </div>
            <p className="mt-6 font-mono text-[12px] text-ember">0{p.n}</p>
            <h3 className="mt-2 display text-[24px]">{p.titulo}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              {p.texto}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <CTA section="metodo">Conheça o método na prática</CTA>
      </div>
    </Section>
  );
}

/* ---------- 06. como funciona ---------- */

const formato = [
  { label: "Duração", valor: "90 dias" },
  { label: "Encontros", valor: "12 sessões individuais ao vivo" },
  { label: "Formato", valor: "Videochamada com tela compartilhada" },
  {
    label: "Segurança",
    valor: "Testes com valores simbólicos antes de movimentações maiores",
  },
  { label: "Suporte", valor: "Canal direto para dúvidas durante o programa" },
];

const etapas = [
  { titulo: "Diagnóstico", texto: "Mapeamento do caixa, taxas e necessidades." },
  {
    titulo: "Infraestrutura",
    texto: "Configuração de redes, dólares digitais e canais de recebimento.",
  },
  {
    titulo: "Segurança",
    texto: "Criação de carteiras, backups e protocolos de proteção.",
  },
  {
    titulo: "Aplicação",
    texto:
      "Conversões, pagamentos, liquidez e uso das ferramentas LiberEther.",
  },
];

function ComoFunciona() {
  return (
    <Section id="mentoria" alt>
      <div className="max-w-content">
        <Eyebrow>Formato</Eyebrow>
        <Title>Como funciona a mentoria</Title>
        <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
          Não é um curso gravado. É um acompanhamento individual de
          implementação.
        </p>
      </div>

      <dl className="mt-10 divide-y divide-hairline overflow-hidden rounded-3xl border border-hairline bg-surface-raised">
        {formato.map((f) => (
          <div key={f.label} className="grid gap-1 px-7 py-5 sm:grid-cols-[200px_1fr] sm:items-baseline">
            <dt className="text-[13px] uppercase tracking-[0.16em] text-ember">
              {f.label}
            </dt>
            <dd className="text-[15px]">{f.valor}</dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-16 display text-[24px] md:text-[30px]">
        Etapas da implementação
      </h3>

      <ol className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {etapas.map((e, i) => (
          <li
            key={e.titulo}
            className="rounded-3xl border border-hairline bg-surface-raised p-7"
          >
            <span className="font-mono text-[12px] text-ember">
              0{i + 1}
            </span>
            <h4 className="mt-2 display text-[21px]">{e.titulo}</h4>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              {e.texto}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <CTA section="como-funciona">Agende uma conversa com nosso time</CTA>
      </div>
    </Section>
  );
}

/* ---------- 07 / 08. para quem é ---------- */

const paraQuem = [
  "Freelancers e prestadores de serviços internacionais",
  "Empresários e infoprodutores",
  "Importadores e gestores de compras",
  "Profissionais liberais",
  "Pessoas que desejam proteger reservas em dólar digital",
  "Quem busca mais controle sobre o próprio dinheiro",
];

const naoE = [
  "Procura trade ou enriquecimento rápido",
  "Deseja entregar a gestão do dinheiro para terceiros",
  "Não pretende seguir protocolos básicos de segurança",
];

function ParaQuem() {
  return (
    <Section id="para-quem">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-ember/25 bg-surface-raised p-8 md:p-10">
          <Eyebrow>Para quem é</Eyebrow>
          <h3 className="display text-[26px] md:text-[32px]">
            A mentoria foi desenvolvida para:
          </h3>
          <ul className="mt-6 space-y-3">
            {paraQuem.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px]">
                <Check className="mt-1 size-4 shrink-0 text-ember" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-hairline bg-surface-raised p-8 md:p-10">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Para quem não é
          </p>
          <h3 className="display text-[26px] md:text-[32px]">
            A mentoria não é indicada para quem:
          </h3>
          <ul className="mt-6 space-y-3">
            {naoE.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-[15px] text-muted-foreground"
              >
                <X className="mt-1 size-4 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-[15px] leading-relaxed text-muted-foreground">
            Nosso objetivo é ensinar você a compreender, organizar e utilizar
            sua própria estrutura com responsabilidade.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <CTA section="para-quem">Descubra se a mentoria é para você</CTA>
      </div>
    </Section>
  );
}

/* ---------- 09. o que está incluído ---------- */

const incluido = [
  "12 encontros individuais ao vivo",
  "Diagnóstico personalizado",
  "Mapeamento de taxas e custos",
  "Configuração assistida de autocustódia",
  "Manual operacional personalizado",
  "Checklist de segurança digital",
  "Suporte direto durante 90 dias",
  "12 meses de acesso à plataforma educacional LiberEther",
];

function Incluido() {
  return (
    <Section id="incluido" alt>
      <div className="grid gap-14 md:grid-cols-[1fr_0.85fr] md:items-center">
        <div>
          <Eyebrow>Entregas</Eyebrow>
          <Title>O que está incluído</Title>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {incluido.map((i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-2xl bg-surface-raised px-5 py-4 text-[15px]"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-ember" />
                <span>{i}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-3xl border border-ember/25 bg-surface-raised p-7">
            <p className="text-[13px] uppercase tracking-[0.16em] text-ember">
              Benefício adicional
            </p>
            <p className="mt-3 text-[15px] leading-relaxed">
              Participantes recebem <strong>50% de desconto em consultorias
              estratégicas adicionais</strong> contratadas nos 12 meses
              seguintes.
            </p>
          </div>

          <div className="mt-10">
            <CTA section="incluido">Quero conhecer todos os benefícios</CTA>
          </div>
        </div>

        <img
          src={liberetherAssets.hero.glassSafeCrypto}
          alt={liberetherAssets.hero.glassSafeCryptoAlt}
          loading="lazy"
          className="mx-auto w-full max-w-[420px] object-contain"
        />
      </div>
    </Section>
  );
}

/* ---------- 10. implementação assistida ---------- */

const validacoes = [
  "Endereços de recebimento",
  "Transferências",
  "Backups",
  "Chaves de recuperação",
  "Conversões",
  "Protocolos de segurança",
];

function Implementacao() {
  return (
    <Section id="implementacao">
      <div className="grid gap-14 md:grid-cols-[0.8fr_1fr] md:items-center">
        <img
          src={liberetherAssets.security.shieldCheckRed}
          alt={liberetherAssets.security.shieldCheckRedAlt}
          loading="lazy"
          className="mx-auto w-full max-w-[360px] object-contain"
        />

        <div>
          <Eyebrow>Segurança</Eyebrow>
          <Title>Implementação assistida</Title>
          <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
            Antes de movimentar valores relevantes, você realizará testes com
            pequenos valores. Durante o processo, validamos:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {validacoes.map((v) => (
              <li key={v} className="flex items-start gap-3 text-[15px]">
                <Check className="mt-1 size-4 shrink-0 text-ember" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            Você aprende cada etapa antes de utilizar a estrutura de forma
            independente.
          </p>
          <div className="mt-9">
            <CTA section="implementacao">Fale com um especialista</CTA>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- 11. FAQ ---------- */

const faqs = [
  {
    q: "Preciso conhecer criptomoedas?",
    a: "Não. O acompanhamento começa a partir do seu nível atual e todas as etapas são apresentadas de forma prática.",
  },
  {
    q: "Preciso deixar de usar bancos?",
    a: "Não. Bancos e Pix continuam sendo utilizados para pagamentos, impostos e despesas em reais. A estrutura digital funciona como uma alternativa complementar.",
  },
  {
    q: "Qual é a diferença entre corretora e autocustódia?",
    a: "Em uma corretora, a empresa controla o acesso ao saldo. Na autocustódia, você controla diretamente as chaves da carteira e assume a responsabilidade pela segurança dos recursos.",
  },
];

function FAQ() {
  return (
    <Section id="faq" alt>
      <div className="mx-auto max-w-content">
        <Eyebrow>Dúvidas</Eyebrow>
        <Title>Perguntas frequentes</Title>

        <div className="mt-10 divide-y divide-hairline overflow-hidden rounded-3xl border border-hairline bg-surface-raised">
          {faqs.map((f) => (
            <details key={f.q} className="group px-7 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[16px] font-medium">
                {f.q}
                <ChevronDown className="size-4 shrink-0 text-ember transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10">
          <CTA section="faq">Ainda tenho dúvidas — falar com nosso time</CTA>
        </div>
      </div>
    </Section>
  );
}

/* ---------- 12. CTA final ---------- */

const recebe = [
  "Diagnóstico individual",
  "12 encontros de implementação",
  "Configuração assistida de carteiras",
  "Protocolos de segurança",
  "Manual operacional personalizado",
  "Acesso à plataforma LiberEther",
  "Suporte durante todo o programa",
];

function FinalCTA() {
  return (
    <section id="contato" className="py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-content text-center">
          <Title className="mx-auto max-w-[16ch] text-[45px] md:text-[66px]">
            Construa sua <span className="text-ember">estrutura financeira global</span>
          </Title>
          <p className="mx-auto mt-6 max-w-content-sm text-[16px] leading-relaxed text-muted-foreground">
            Em 90 dias, você terá acompanhamento para organizar uma estrutura de
            recebimento, proteção e movimentação de dólares digitais.
          </p>

          <ul className="mx-auto mt-10 grid max-w-content gap-3 text-left sm:grid-cols-2">
            {recebe.map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 rounded-2xl bg-surface px-5 py-4 text-[15px]"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-ember" />
                <span>{r}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <CTA section="cta-final">Agende seu diagnóstico com nosso time</CTA>
          </div>

          <p className="mt-6 text-[13px] italic text-muted-foreground">
            Antes da contratação, realizamos uma conversa para verificar se a
            mentoria é adequada ao seu momento e às suas necessidades.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ---------- footer ---------- */

function Footer() {
  return (
    <footer className="section-light hairline-t py-10 md:py-12">
      <Container>
        <div className="mx-auto max-w-content">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Aviso importante
          </p>
          <div className="mt-5 space-y-4 text-[14px] leading-relaxed text-muted-foreground">
            <p>
              A Mentoria Autonomia Global LiberEther é um serviço educacional e
              de orientação sobre processos tecnológicos.
            </p>
            <p>
              Não realizamos gestão de patrimônio ou intermediação financeira —
              ensinamos você a tomar as decisões sobre seu dinheiro.
            </p>
            <p>
              O uso de moedas digitais e redes blockchain envolve riscos
              operacionais. Durante a mentoria, você aprenderá práticas para
              compreender e reduzir esses riscos.
            </p>
            <p>
              A segurança das credenciais, carteiras e chaves de recuperação
              permanece sob responsabilidade do participante.
            </p>
          </div>

          <div className="mt-9">
            <CTA section="footer">Fale com nosso time</CTA>
          </div>

          <p className="mt-12 text-[13px] text-muted-foreground">
            © {new Date().getFullYear()} LiberEther. Todos os direitos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}

/* ---------- page ---------- */

function Landing() {
  return (
    <main className="relative overflow-x-clip bg-canvas">
      <TopMark />
      <Hero />
      <Custo />
      <Diagnostico />
      <Aplicacoes />
      <Metodo />
      <ComoFunciona />
      <ParaQuem />
      <Incluido />
      <Implementacao />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
