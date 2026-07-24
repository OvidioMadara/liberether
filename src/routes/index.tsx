import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Sparkles,
  X,
  ShieldCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Layers,
  Users,
  Calendar,
  Headphones,
  FileText,
  BookOpen,
  Compass,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

import AnimatedTextCycle from "@/components/AnimatedTextCycle";

import logo from "@/assets/av-logo.png";
import hero from "@/assets/av-hero.jpg";
import heroBg from "@/assets/av-flatlay.jpg";
import creator from "@/assets/av-creator.jpg";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";
import a4 from "@/assets/avatar-4.jpg";
import a5 from "@/assets/avatar-5.jpg";

import step1 from "@/assets/av-step-1.jpg";
import step2 from "@/assets/av-step-2.jpg";
import step3 from "@/assets/av-step-3.jpg";
import step4 from "@/assets/av-step-4.jpg";
import step5 from "@/assets/av-step-5.jpg";

import bonus01 from "@/assets/av-bonus-1.png";
import bonus02 from "@/assets/av-bonus-2.png";
import bonus03 from "@/assets/av-bonus-3.png";

import kit from "@/assets/av-kit.png";
import flatlay from "@/assets/av-flatlay.jpg";

import floatCoin from "@/assets/av-float-camera.png";
import floatWallet from "@/assets/av-float-lens.png";
import floatKey from "@/assets/av-float-mic.png";
import floatShield from "@/assets/av-float-clapper.png";
import floatStack from "@/assets/av-float-reel.png";

import shameStill from "@/assets/av-shame.jpg";

import mod01 from "@/assets/av-step-1.jpg";
import mod02 from "@/assets/av-step-2.jpg";
import mod03 from "@/assets/av-step-3.jpg";
import mod04 from "@/assets/av-step-4.jpg";
import mod05 from "@/assets/av-step-5.jpg";
import mod06 from "@/assets/av-flatlay.jpg";

import garantiaImg from "@/assets/av-guarantee.jpg";
import avatarA from "@/assets/avatar-a.jpg";
import avatarB from "@/assets/avatar-b.jpg";
import avatarC from "@/assets/avatar-c.jpg";
import avatarD from "@/assets/avatar-d.jpg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { StaggerCardapios } from "@/components/StaggerCardapios";
import { Card } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mentoria Autonomia Global — LiberEther" },
      {
        name: "description",
        content:
          "90 dias de acompanhamento individual para receber em dólares digitais (USDC), eliminar taxas bancárias e assumir a custódia do seu caixa.",
      },
      { property: "og:title", content: "Mentoria Autonomia Global — LiberEther" },
      {
        property: "og:description",
        content:
          "90 dias de acompanhamento individual para receber em dólares digitais (USDC), eliminar taxas bancárias e assumir a custódia do seu caixa.",
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
    <div className={`mx-auto w-full max-w-[1240px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

function PrimaryCTA({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#oferta"
      className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-[15px] font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--color-ember)_55%,transparent)]"
    >
      <span>{children}</span>
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}

/* ---------- top mark ---------- */

function TopMark() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <Container className="flex items-center justify-center pt-8">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="LiberEther"
            width={512}
            height={512}
            className="h-6 w-auto"
          />
          <span className="font-display text-[20px] tracking-[-0.01em] text-foreground md:text-[22px]">
            LiberEther
          </span>
        </div>
      </Container>
    </header>
  );
}

/* ---------- floating parallax ---------- */

type FloatItem = {
  src: string;
  alt: string;
  className: string;
  depth?: number;
  rotate?: number;
  delay?: number;
};

function FloatingFood({
  items,
  containerRef,
}: {
  items: FloatItem[];
  containerRef: React.RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      {items.map((it, i) => (
        <ParallaxFood key={i} item={it} progress={scrollYProgress} />
      ))}
    </div>
  );
}

function ParallaxFood({
  item,
  progress,
}: {
  item: FloatItem;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const depth = item.depth ?? 0.4;
  const travel = 140 * depth;
  const y = useTransform(progress, [0, 1], [-travel, travel]);
  const rotate = useTransform(progress, [0, 1], [
    (item.rotate ?? 0) - 12 * depth,
    (item.rotate ?? 0) + 12 * depth,
  ]);

  return (
    <motion.img
      src={item.src}
      alt={item.alt}
      loading="lazy"
      style={{ y, rotate }}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.9,
        delay: item.delay ?? 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`absolute select-none drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)] ${item.className}`}
    />
  );
}

/* ---------- hero ---------- */

function Hero() {
  const heroRef = React.useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.74 0.14 275 / 0.4), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 grain opacity-50" />
      </div>

      <FloatingFood
        containerRef={heroRef}
        items={[
          { src: floatWallet, alt: "", className: "left-[3%] top-[18%] w-[110px] md:w-[150px]", depth: 0.6, rotate: -8 },
          { src: floatShield, alt: "", className: "right-[4%] top-[12%] w-[120px] md:w-[160px]", depth: 0.45, rotate: 14, delay: 0.1 },
          { src: floatKey, alt: "", className: "left-[8%] bottom-[14%] w-[90px] md:w-[120px]", depth: 0.7, rotate: 12, delay: 0.15 },
          { src: floatCoin, alt: "", className: "right-[6%] bottom-[20%] w-[120px] md:w-[160px]", depth: 0.55, rotate: -10, delay: 0.05 },
          { src: floatStack, alt: "", className: "hidden md:block left-[12%] top-[55%] w-[110px]", depth: 0.35, rotate: -6, delay: 0.2 },
        ]}
      />

      <Container className="relative z-10">
        <div className="fade-up mx-auto max-w-[920px] text-center">
          <h1 className="display display-tight text-balance text-[36px] sm:text-[52px] md:text-[68px]">
            Elimine as taxas invisíveis de conversão e receba em{" "}
            <AnimatedTextCycle
              words={["dólares digitais", "USDC", "moeda forte", "minutos", "autonomia"]}
              interval={2600}
              className="italic text-ember"
            />{" "}
            com saldo disponível em minutos.
          </h1>

          <p className="mx-auto mt-7 max-w-[760px] text-pretty text-[16px] leading-relaxed text-muted-foreground md:text-[17.5px]">
            Se você fatura alto — prestando serviços para o exterior ou operando
            seu negócio no Brasil — sabe quanto perde com taxas abusivas e
            burocracia bancária. A Mentoria de Autonomia Global LiberEther é um
            acompanhamento individual de 90 dias para implementar o uso de
            dólares digitais (USDC) e carteiras de custódia própria. Você
            elimina intermediários, reduz custos de transação para centavos e
            assume o controle total do seu faturamento em moeda forte.
          </p>

          <ul className="mx-auto mt-10 grid max-w-[980px] gap-3 text-left sm:grid-cols-3">
            {[
              "Receba em USDC direto na sua carteira, sem SWIFT nem 2 a 5 dias úteis de espera.",
              "Elimine 3% a 6% de perda em cotações abusivas e tarifas bancárias empilhadas.",
              "Custódia própria, sem risco de bloqueio de saldo por bancos, fintechs ou corretoras.",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 px-2 text-[13.5px] leading-snug text-foreground/85"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-ember" strokeWidth={2.25} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* VSL slot */}
        <div className="fade-up mt-14 md:mt-20">
          <div className="relative mx-auto aspect-video max-w-[820px] overflow-hidden rounded-3xl bg-black shadow-float">
            <img
              src={hero}
              alt="Workspace com carteira física Trezor, laptop e dólares digitais"
              width={1600}
              height={1024}
              className="size-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <div className="flex items-center gap-3 rounded-full bg-background/90 px-5 py-3 text-[13px] font-medium text-foreground shadow-xl ring-1 ring-ember/40 backdrop-blur">
                <span className="grid size-7 place-items-center rounded-full bg-ember text-primary-foreground">▶</span>
                Insira sua apresentação aqui
              </div>
            </div>
          </div>
        </div>

        <div className="fade-up mt-12 flex flex-col items-center gap-6">
          <PrimaryCTA>Quero agendar um diagnóstico individual</PrimaryCTA>
          <div className="flex items-center gap-6 text-[12.5px] text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-3.5 text-ember" />
              Atendimento individual · tela compartilhada
            </span>

            <span className="inline-flex items-center gap-2.5">
              <div className="flex -space-x-2">
                {[avatarA, avatarB, avatarC, avatarD].map((src, i) => (
                  <Avatar key={i} className="h-6 w-6 ring-2 ring-background">
                    <AvatarImage src={src} alt="" className="object-cover" />
                    <AvatarFallback />
                  </Avatar>
                ))}
              </div>
              Vagas limitadas pela agenda
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- anatomia do método ---------- */

function AnatomiaMarmita() {
  const sectionRef = React.useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden py-28 md:py-40"
      style={{
        backgroundImage: `linear-gradient(180deg, color-mix(in oklab, var(--color-background) 92%, transparent) 0%, color-mix(in oklab, var(--color-background) 70%, transparent) 60%, var(--color-background) 100%), url(${flatlay})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />

      <FloatingFood
        containerRef={sectionRef}
        items={[
          { src: floatWallet, alt: "", className: "left-[2%] top-[14%] w-[120px] md:w-[160px]", depth: 0.55, rotate: -14 },
          { src: floatKey, alt: "", className: "right-[3%] top-[10%] w-[90px] md:w-[130px]", depth: 0.4, rotate: 12, delay: 0.1 },
          { src: floatCoin, alt: "", className: "right-[6%] bottom-[12%] w-[120px] md:w-[160px]", depth: 0.65, rotate: -8, delay: 0.15 },
          { src: floatShield, alt: "", className: "left-[5%] bottom-[16%] w-[120px] md:w-[160px]", depth: 0.5, rotate: 18, delay: 0.2 },
          { src: floatStack, alt: "", className: "hidden md:block left-[18%] top-[58%] w-[100px]", depth: 0.3, rotate: -22, delay: 0.25 },
        ]}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="display display-tight text-balance text-[38px] md:text-[60px]">
            Engenharia financeira ajustada à realidade do seu faturamento.
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[16px] leading-relaxed text-muted-foreground md:text-[17px]">
            O fluxo de quem exporta serviços de tecnologia é diferente de quem
            paga fornecedores no exterior ou protege reservas líquidas no
            Brasil. Antes de qualquer implementação, mapeamos suas taxas,
            escolhemos redes ágeis (Arbitrum, Base, Polygon), definimos os
            ativos em USDC e configuramos pontes diretas para o Pix.
          </p>
        </div>

        {/* central kit with halo */}
        <div className="relative mx-auto mt-16 flex max-w-[640px] items-center justify-center">
          <div
            className="absolute inset-10 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.74 0.14 275 / 0.45), transparent 70%)",
            }}
          />
          <motion.img
            src={kit}
            alt="Ecossistema LiberEther — Trezor, LiberWallet, notebook"
            width={1024}
            height={1024}
            loading="lazy"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[520px] drop-shadow-[0_60px_60px_rgba(0,0,0,0.55)]"
          />
        </div>

        {/* phase chips */}
        <div className="relative mx-auto mt-12 grid max-w-[820px] grid-cols-2 gap-3 md:grid-cols-4">
          {[
            ["90 dias", "de acompanhamento"],
            ["12 encontros", "individuais ao vivo"],
            ["Testes com $1–$5", "antes de operar valores reais"],
            ["12 meses", "de plataforma LiberEther"],
          ].map(([n, l]) => (
            <div
              key={l}
              className="rounded-2xl bg-surface-raised/90 px-5 py-4 text-center shadow-float backdrop-blur-sm"
            >
              <div className="display text-[26px] md:text-[30px]">{n}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- stats strip ---------- */

function StatsStrip() {
  const stats = [
    ["3% a 6%", "de perda evitada em cotações e taxas bancárias"],
    ["Minutos", "para saldo disponível em USDC na sua carteira"],
    ["12 encontros", "individuais ao vivo por videochamada"],
    ["1 ano", "de plataforma educacional LiberEther incluída"],
  ];
  return (
    <section className="section-light py-12 md:py-16 bg-surface">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="display text-[30px] text-foreground md:text-[36px]">{n}</div>
              <div className="mt-1 text-[12.5px] leading-tight text-foreground/70">
                {l}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- pilares carrossel ---------- */

function Cardapios() {
  return (
    <section
      id="etapas"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-0 h-[520px] w-[1000px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.74 0.14 275 / 0.3), transparent 60%)",
          }}
        />
      </div>
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="display display-tight text-balance text-[38px] md:text-[58px]">
            O Método — os 4 pilares da autonomia financeira.
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-[15.5px] leading-relaxed text-muted-foreground md:text-[17px]">
            Acesso, Autocustódia, Alocação e Autonomia — precedidos por um
            diagnóstico individual do seu caixa e das taxas que você perde hoje.
          </p>
        </div>

        <div className="mt-16">
          <StaggerCardapios />
        </div>
      </Container>
    </section>
  );
}

/* ---------- dor ---------- */

function Dor() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-80px", "80px"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);
  const textY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  return (
    <section
      ref={sectionRef}
      className="section-light relative overflow-hidden py-28 md:py-36"
    >
      <Container>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="display text-[36px] md:text-[54px]">
              O custo real de depender da rota bancária tradicional.
            </h2>
            <motion.img
              src={shameStill}
              alt="Comparativo entre rota bancária tradicional e estrutura autônoma em USDC"
              loading="lazy"
              width={1024}
              height={1024}
              style={{ y: imageY, scale: imageScale, willChange: "transform" }}
              className="mt-10 w-full max-w-[460px] select-none rounded-3xl object-cover md:mt-14"
              draggable={false}
            />
          </div>

          <motion.div
            style={{ y: textY, willChange: "transform" }}
            className="space-y-6 text-[16.5px] leading-[1.75] text-foreground/80 md:col-span-7 md:text-[17px]"
          >
            <p>
              Se você exporta serviços, paga fornecedores ou quer proteger o
              caixa gerado pelo seu negócio no Brasil, a dependência de bancos
              e plataformas tradicionais consome de{" "}
              <strong className="text-foreground">3% a 8% do seu faturamento bruto</strong>.
            </p>
            <p>
              <strong className="text-foreground">Diferença abusiva na cotação do dólar (3% a 6%):</strong>{" "}
              bancos e aplicativos cobram uma margem pesada em cima do dólar
              oficial. Somam-se tarifas de intermediação, SWIFT e taxas fixas de
              recepção e envio a cada movimentação.
            </p>
            <p>
              <strong className="text-foreground">Capital travado por 2 a 5 dias úteis</strong>{" "}
              aguardando aprovações manuais, envio de contratos de câmbio e
              burocracia desnecessária — enquanto o seu caixa poderia estar
              girando.
            </p>
            <p>
              <strong className="text-foreground">Risco de custódia e bloqueios:</strong>{" "}
              seu saldo fica sob as regras de plataformas que podem travar
              saques, mudar taxas sem aviso prévio ou exigir documentações
              complexas na última hora.
            </p>
            <p className="text-foreground">
              A rota LiberEther troca isso por{" "}
              <strong>
                taxas de rede residuais (centavos de dólar), saldo disponível em
                minutos e controle exclusivo do seu USDC.
              </strong>
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- prova social ---------- */

const proofs = [
  {
    name: "João Vitor Sales",
    role: "Importação e custos operacionais",
    avatar: a1,
    before: "Perdia margem relevante em cotações bancárias desfavoráveis e prazos longos para pagar fornecedores de vestuário na Ásia.",
    after:
      "Passou a pagar fornecedores diretamente em USDC: liberação imediata de pedidos, fim dos intermediários e queda drástica no custo de conversão.",
  },
  {
    name: "Virgínia \"Tica\"",
    role: "Serviços internacionais",
    avatar: a2,
    before: "Atendendo clientes estrangeiros no Brasil, perdia parte do faturamento com taxas de cartão e prazos longos de aplicativos de remessa.",
    after:
      "Recebe direto em dólares digitais com custódia própria — saldo na hora e conversão para Pix apenas dos valores necessários no dia a dia.",
  },
  {
    name: "Lucão Tatu",
    role: "Estúdio · preservação patrimonial",
    avatar: a3,
    before: "Precisava receber em moeda forte e proteger reservas operacionais sem ficar exposto à inflação ou a riscos bancários.",
    after:
      "Recebimentos em USDC, custos de intermediação perto de zero e reserva líquida em dólar guardada em cofre eletrônico (hardware wallet) sob controle exclusivo.",
  },
];

function ProvaSocial() {
  return (
    <section className="section-light relative bg-background py-28 md:py-36">
      <Container>
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="display text-[36px] md:text-[54px]">
            Casos práticos: o resultado na rotina de quem já implementou.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3">
          {proofs.map((p, i) => (
            <article
              key={p.name}
              className="group relative flex flex-col rounded-3xl bg-surface-raised/70 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-surface-raised hover:ring-ember/40"
              style={{ transform: `rotate(${(i - 1) * 0.4}deg)` }}
            >
              <div className="flex items-center gap-4">
                <img
                  src={p.avatar}
                  alt={p.name}
                  loading="lazy"
                  width={56}
                  height={56}
                  className="size-14 rounded-full object-cover"
                />
                <div>
                  <div className="text-[15px] font-medium">{p.name}</div>
                  <div className="text-[12.5px] text-muted-foreground">{p.role}</div>
                </div>
              </div>

              <div className="mt-7 space-y-4 text-[14.5px] leading-relaxed">
                <div>
                  <div className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground/80 uppercase">
                    Antes
                  </div>
                  <p className="mt-1.5 text-foreground/80">{p.before}</p>
                </div>
                <div className="pt-4">
                  <div className="font-mono text-[11px] tracking-[0.18em] text-ember uppercase">
                    Depois
                  </div>
                  <p className="mt-1.5 text-foreground">{p.after}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[640px] text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/60">
          Casos reais de aplicação da metodologia LiberEther
        </p>
      </Container>
    </section>
  );
}

/* ---------- CTA intermediário ---------- */

function CTAMid() {
  return (
    <section className="relative isolate overflow-hidden py-32 md:py-44">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-black/75"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 grain opacity-40" />

      <Container>
        <div className="mx-auto max-w-[880px] text-center">
          <h2 className="display text-[36px] text-white md:text-[54px]">
            O primeiro passo é entender como a sua estrutura financeira funciona hoje.
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
            Antes de recomendar qualquer ferramenta, precisamos conhecer sua
            rotina, seus objetivos e os problemas que deseja resolver.
          </p>
          <div className="mt-10 flex justify-center">
            <PrimaryCTA>Quero solicitar um diagnóstico</PrimaryCTA>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- método ---------- */

const pillars = [
  {
    n: "01",
    title: "Acesso",
    image: step2,
    desc:
      "Construção dos caminhos para entrada e saída de recursos: recebimentos nacionais e internacionais, conversão para stablecoins, Pix como etapa de entrada e organização do fluxo até sua carteira.",
  },
  {
    n: "02",
    title: "Autocustódia",
    image: step3,
    desc:
      "Estrutura segura de controle dos próprios ativos: carteiras, proteção de senhas, frases de recuperação, cópias de segurança, Trezor e procedimentos de emergência.",
  },
  {
    n: "03",
    title: "Alocação",
    image: step4,
    desc:
      "Educação prática sobre stablecoins, liquidez, riscos de protocolo e contrato inteligente, origem dos rendimentos e critérios para comparar estratégias no ecossistema Ethereum.",
  },
  {
    n: "04",
    title: "Autonomia",
    image: step5,
    desc:
      "Integração das ferramentas à sua vida financeira: LiberWallet, LiberPass, movimentação de stablecoins, cartões internacionais e um plano financeiro pessoal em Web3.",
  },
  {
    n: "05",
    title: "Continuidade",
    image: step1,
    desc:
      "Revisão da estrutura, organização das próximas etapas e entrega do guia operacional. Acompanhamento estendido pela plataforma LiberEther durante 12 meses.",
  },
];

function Metodo() {
  const [api, setApi] = useState<CarouselApi>();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
      setCurrent(api.selectedScrollSnap());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
    };
  }, [api]);

  return (
    <section id="metodo" className="section-light relative bg-background py-28 md:py-36">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[760px]">
            <h2 className="display text-[36px] md:text-[54px]">
              A Estrutura Financeira 4A — como a mentoria se organiza.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
              A partir do seu diagnóstico, os quatro pilares são adaptados ao seu
              caso: fotógrafo que recebe do exterior, médico com rotina intensa,
              tatuador com fluxo em dinheiro, empresário ou profissional de
              tecnologia. Cada pilar resolve uma parte da mesma pergunta:{" "}
              <strong className="text-foreground">
                como fazer o seu dinheiro trabalhar por você com mais autonomia?
              </strong>
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="Pilar anterior"
              onClick={() => api?.scrollPrev()}
              disabled={!canPrev}
              className="grid size-11 place-items-center rounded-full text-foreground/80 transition hover:bg-foreground/[0.04] hover:text-foreground disabled:opacity-30"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Próximo pilar"
              onClick={() => api?.scrollNext()}
              disabled={!canNext}
              className="grid size-11 place-items-center rounded-full text-foreground/80 transition hover:bg-foreground/[0.04] hover:text-foreground disabled:opacity-30"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-14">
          <Carousel setApi={setApi} opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-4 md:-ml-6">
              {pillars.map((p) => (
                <CarouselItem
                  key={p.n}
                  className="basis-[88%] pl-4 sm:basis-[60%] md:basis-[44%] md:pl-6 lg:basis-[36%]"
                >
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-surface-raised/60">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        width={1024}
                        height={1280}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />
                      <div className="absolute top-5 left-5 font-mono text-[12px] tracking-[0.18em] text-ember">
                        PILAR {p.n}
                      </div>
                      <div className="absolute inset-x-5 bottom-5">
                        <h3 className="display text-[30px] leading-tight text-white md:text-[36px]">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-[14px] leading-relaxed text-white/85">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-8 flex items-center justify-center gap-2">
            {pillars.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir para pilar ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  current === i ? "w-8 bg-ember" : "w-4 bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-20 grid gap-10 overflow-hidden rounded-3xl bg-surface p-8 md:grid-cols-2 md:items-center md:gap-12 md:p-12">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
              O princípio
            </div>
            <h3 className="display mt-4 text-[28px] text-foreground md:text-[38px]">
              A autocustódia devolve o controle. E também a responsabilidade.
            </h3>
            <p className="mt-5 text-[15.5px] leading-relaxed text-foreground/75">
              A LiberEther não ficará com o seu dinheiro. A proposta é ensinar
              autocustódia: as carteiras, senhas e frases de recuperação
              permanecem sob o seu controle. A mentoria apresenta possibilidades,
              riscos e ferramentas — as decisões financeiras continuam sendo
              tomadas por você, agora com mais conhecimento e menos improviso.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl bg-card p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Modelo tradicional
              </div>
              <div className="display mt-2 text-[30px] text-muted-foreground">Custódia terceirizada</div>
              <p className="mt-2 text-[13.5px] text-muted-foreground">
                Bancos, corretoras e intermediários guardando seus ativos por você.
              </p>
            </div>
            <div className="rounded-2xl bg-ember/10 p-6 ring-1 ring-ember/30">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
                Modelo Web3
              </div>
              <div className="display mt-2 text-[30px] text-foreground">Você no controle</div>
              <p className="mt-2 text-[13.5px] text-foreground/75">
                Sua carteira, suas chaves, sua estrutura — com plano de segurança documentado.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- pra quem é ---------- */

function ParaQuem() {
  const yes = [
    "Empreendedores, autônomos e prestadores de serviço que querem mais autonomia financeira",
    "Profissionais que recebem — ou desejam receber — em outras moedas, do Brasil ou do exterior",
    "Pessoas que querem aprender a utilizar dólares digitais e reduzir a dependência de bancos",
    "Quem já possui criptoativos mas não tem uma estrutura organizada, com autocustódia e segurança",
    "Quem quer entender autocustódia antes de movimentar valores maiores com mais confiança",
  ];
  const no = [
    "Quem procura garantia de lucro ou promessa de enriquecimento rápido",
    "Quem espera receber sinais de compra e venda ou gestão terceirizada de patrimônio",
    "Quem não quer assumir responsabilidade pelas próprias credenciais e chaves",
    "Quem busca apenas uma indicação rápida de qual ativo comprar",
  ];

  return (
    <section className="section-light py-28 md:py-36">
      <Container>
        <h2 className="display mx-auto max-w-[860px] text-center text-[36px] md:text-[54px]">
          Antes de continuar, veja se a mentoria faz sentido para você.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-ember/10 via-surface/60 to-surface/30 p-8 md:p-10">
            <div className="font-mono text-[11px] tracking-[0.2em] text-ember uppercase">É pra você se</div>
            <ul className="mt-6 space-y-4">
              {yes.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-[15.5px] leading-relaxed text-foreground/90"
                >
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-ember/15 ring-1 ring-ember/30">
                    <Check className="size-3.5 text-ember" strokeWidth={2.25} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-muted/40 via-surface/40 to-surface/20 p-8 md:p-10">
            <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              Não é pra você se
            </div>
            <ul className="mt-6 space-y-4">
              {no.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-[15.5px] leading-relaxed text-muted-foreground"
                >
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-muted-foreground/10 ring-1 ring-muted-foreground/20">
                    <X className="size-3.5 text-muted-foreground" strokeWidth={2.25} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- entregáveis ---------- */

const modules = [
  { t: "1. Diagnóstico Financeiro", s: "Análise da sua rotina, moedas, plataformas e riscos atuais", v: "Encontro 1", img: mod01 },
  { t: "2. Acesso e Recebimentos", s: "Canais de entrada, conversão em stablecoins e fluxo internacional", v: "Encontros 3–4", img: mod02 },
  { t: "3. Autocustódia e Segurança", s: "Carteiras, senhas, frases de recuperação, Trezor e emergências", v: "Encontros 5–7", img: mod03 },
  { t: "4. Stablecoins e DeFi", s: "Dólares digitais, protocolos, rendimentos e riscos reais", v: "Encontros 8–9", img: mod04 },
  { t: "5. Ecossistema LiberEther", s: "LiberWallet, LiberPass e cartões internacionais", v: "Encontros 10–11", img: mod05 },
  { t: "Plano de Continuidade", s: "Guia operacional personalizado e próximos 90 dias", v: "Encontro 12", img: mod06 },
];

function Entregaveis() {
  return (
    <section className="relative isolate overflow-hidden py-28 md:py-40 bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[720px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.74 0.14 275 / 0.45), transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="display text-[36px] text-foreground md:text-[58px]">
            Os 12 encontros — três meses de acompanhamento individual.
          </h2>
          <p className="mt-5 text-[15px] text-foreground/75 md:text-[16px]">
            Uma organização possível dos encontros, sempre adaptada às suas
            prioridades no diagnóstico.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-[1180px] auto-rows-[minmax(180px,auto)] gap-5 md:grid-cols-3">
          {modules.map((m, i) => {
            const featured = i === 0;
            return (
              <Card
                key={m.t}
                className={`group relative overflow-hidden border-0 bg-surface ring-0 transition-all duration-300 hover:-translate-y-0.5 ${
                  featured ? "md:col-span-2 md:row-span-2 min-h-[420px]" : "min-h-[240px]"
                }`}
              >
                <img
                  src={m.img}
                  alt=""
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-100 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/60 via-35% to-transparent"
                />
                <div className="relative flex h-full flex-col p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[12px] tracking-[0.18em] text-ember">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[12.5px] text-foreground/70">
                      {m.v}
                    </span>
                  </div>
                  <div className="mt-auto flex flex-col gap-2 pt-10">
                    <h3
                      className={`font-medium leading-tight text-foreground  ${
                        featured ? "display text-[32px] md:text-[42px]" : "text-[18px]"
                      }`}
                    >
                      {m.t}
                    </h3>
                    <p
                      className={`text-foreground/75  ${
                        featured ? "text-[15px]" : "text-[13.5px]"
                      }`}
                    >
                      {m.s}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mx-auto mt-14 max-w-[820px] text-center">
          <a
            href="#oferta"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-[15px] font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--color-ember)_55%,transparent)]"
          >
            <span>Ver a oferta completa</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <div className="mt-6 font-mono text-[12.5px] text-foreground/80">
            A sequência dos encontros pode ser alterada conforme suas prioridades.
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- bônus ---------- */

function Bonus() {
  const bonuses = [
    {
      n: "01",
      title: "1 ano de plataforma LiberEther",
      desc: "12 meses de acesso à plataforma educacional com aulas e conteúdos sobre Web3, stablecoins, segurança digital, autocustódia, Ethereum e finanças descentralizadas.",
      v: "12 meses de acesso",
      img: bonus01,
    },
    {
      n: "02",
      title: "50% de desconto em serviços",
      desc: "Durante os 12 meses após a mentoria, 50% off na contratação de serviços elegíveis: horas adicionais, novas aulas, revisões da estrutura e orientações complementares.",
      v: "Válido por 12 meses",
      img: bonus02,
    },
    {
      n: "03",
      title: "Plano de Continuidade",
      desc: "Ao final da mentoria você recebe um plano com as prioridades para os próximos 90 dias: revisões de segurança, ajustes na operação, temas para aprofundar e frequência de revisão.",
      v: "Entregue no encontro 12",
      img: bonus03,
    },
  ];

  return (
    <section className="section-light py-28 md:py-36">
      <Container>
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="display text-[36px] md:text-[54px]">
            A aprendizagem continua depois dos três meses de acompanhamento.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {bonuses.map((b) => (
            <article
              key={b.n}
              className="flex flex-col overflow-hidden rounded-3xl bg-card"
            >
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-surface-raised">
                <img
                  src={b.img}
                  alt={b.title}
                  className="h-full w-full object-contain p-4"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="font-mono text-[11px] tracking-[0.22em] text-ember">
                  BÔNUS {b.n}
                </div>
                <h3 className="display mt-5 text-[26px] leading-tight">{b.title}</h3>
                <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-muted-foreground">
                  {b.desc}
                </p>
                <div className="mt-6 pt-4 font-mono text-[13px] text-foreground">
                  {b.v}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- depoimentos longos ---------- */

const longTestimonials = [
  {
    name: "Mariana C.",
    role: "Tatuadora, atende clientes internacionais",
    image: a1,
    text: "Recebia por PayPal, convertia em corretora e transferia para o banco perdendo em cada etapa. Depois do diagnóstico, estruturamos um fluxo direto em stablecoins com uma carteira própria. Agora recebo, guardo e movimento sem depender de três plataformas.",
  },
  {
    name: "André V.",
    role: "Médico, valores maiores em custódia",
    image: a2,
    text: "Tinha ativos parados em corretora sem nunca ter mexido em uma carteira. Configuramos a Trezor no encontro 7, organizamos frases de recuperação e um backup físico. Pela primeira vez sinto que o dinheiro é realmente meu — e sei o que fazer se algo acontecer comigo.",
  },
  {
    name: "Camila R.",
    role: "Consultora, projetos no exterior",
    image: a3,
    text: "Era um caos: banco daqui, banco de fora, corretora, aplicativo de conversão. No pilar de Acesso, mapeamos cada etapa e cortamos três intermediários. Meu custo por recebimento caiu drasticamente e ficou muito mais simples de operar semana a semana.",
  },
  {
    name: "Pedro H.",
    role: "Desenvolvedor, freelas internacionais",
    image: a4,
    text: "Já tinha lido bastante sobre DeFi mas nunca tinha coragem de mover valores maiores. Entender liquidez, riscos de contrato e de onde vem o rendimento mudou totalmente a forma como eu tomo decisão. Não é sobre acreditar em número — é sobre entender o mecanismo.",
  },
  {
    name: "Juliana T.",
    role: "Empresária, fluxo em múltiplas moedas",
    image: a5,
    text: "O que mais me marcou foi a etapa de Autonomia. A LiberWallet e o cartão internacional fecharam o ciclo: recebimento, custódia, alocação e uso no dia a dia sem depender de conta bancária tradicional para cada movimento.",
  },
  {
    name: "Rafael S.",
    role: "Fotógrafo, clientes no exterior",
    image: a1,
    text: "O diagnóstico já valeu por metade da mentoria. Ver, em uma planilha, quanto eu estava perdendo em custos e conversões durante um ano foi um choque. A partir dali cada encontro resolveu um pedaço concreto do problema.",
  },
];

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof longTestimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-8 rounded-3xl bg-surface-raised/70 shadow-lg shadow-black/5 max-w-xs w-full"
                key={i}
              >
                <p className="text-[14.5px] leading-relaxed text-foreground/85">{text}</p>
                <div className="flex items-center gap-3 mt-6">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-[14px]">{name}</div>
                    <div className="leading-5 text-[12.5px] text-muted-foreground tracking-tight">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const firstColumn = longTestimonials.slice(0, 2);
const secondColumn = longTestimonials.slice(2, 4);
const thirdColumn = longTestimonials.slice(4, 6);

function Depoimentos() {
  return (
    <section className="section-light py-28 md:py-36">
      <Container>
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="display text-[36px] md:text-[54px]">
            Profissionais construindo autonomia — cada um a partir do seu próprio caso.
          </h2>
        </div>

        <div className="mt-16 flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] max-h-[720px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </div>

        <p className="mx-auto mt-10 max-w-[640px] text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/60">
          Depoimentos ilustrativos · substituir por casos reais
        </p>
      </Container>
    </section>
  );
}

/* ---------- criador ---------- */

function Criador() {
  return (
    <section className="section-light relative overflow-hidden bg-background py-28 md:py-36">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={creator}
                alt="Mentor LiberEther"
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="text-[18px] font-medium text-white">LiberEther</div>
                <div className="mt-1 text-[12.5px] text-white/70">
                  Educação, autocustódia e ferramentas Web3
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <h2 className="display text-[36px] md:text-[54px]">
              Educação e tecnologia para tornar a Web3 mais acessível.
            </h2>

            <div className="mt-8 space-y-5 text-[16px] leading-[1.75] text-muted-foreground md:text-[16.5px]">
              <p>
                A LiberEther é um ecossistema educacional e tecnológico voltado
                à utilização prática da Web3. O trabalho integra educação
                financeira, autocustódia, stablecoins, Ethereum, finanças
                descentralizadas, segurança digital e ferramentas de gestão
                financeira em um mesmo acompanhamento.
              </p>
              <p>
                A proposta não é apenas apresentar novas tecnologias. É ajudar
                pessoas a compreenderem essas ferramentas e utilizá-las de
                maneira mais segura, clara e responsável — dentro do seu próprio
                contexto profissional e financeiro.
              </p>
              <p>
                Dentro do ecossistema, o cliente também conhece e utiliza
                ferramentas como{" "}
                <strong className="text-foreground">LiberWallet</strong>,{" "}
                <strong className="text-foreground">LiberPass</strong>,
                plataforma educacional, aulas, mentorias e conteúdos
                especializados.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                ["4 pilares", "Estrutura Financeira 4A"],
                ["12 encontros", "individuais e semanais"],
                ["1 ano", "de plataforma incluída"],
              ].map(([n, l]) => (
                <div key={l} className="p-1">
                  <div className="display text-[28px] md:text-[34px]">{n}</div>
                  <div className="mt-1 text-[12px] leading-tight text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- suporte ---------- */

function Suporte() {
  const items = [
    {
      icon: Users,
      title: "Acompanhamento individual",
      desc: "Cada encontro começa com uma revisão do que foi implementado na semana anterior. Dificuldades são discutidas antes de avançar para a próxima etapa.",
    },
    {
      icon: Calendar,
      title: "12 encontros semanais",
      desc: "Uma hora por semana durante três meses, agendados conforme sua disponibilidade e adaptados às suas prioridades definidas no diagnóstico.",
    },
    {
      icon: FileText,
      title: "Revisão de configurações",
      desc: "Compartilhamento de tela durante os encontros para revisar carteiras, fluxos de recebimento, configurações da Trezor e rotinas de segurança.",
    },
    {
      icon: Headphones,
      title: "Suporte entre encontros",
      desc: "Dúvidas pontuais tratadas entre os encontros. Questões que exigem análise aprofundada são conduzidas nos encontros agendados.",
    },
    {
      icon: BookOpen,
      title: "Plataforma por 12 meses",
      desc: "Depois dos três meses, você continua com acesso à plataforma da LiberEther pelo período total de um ano para revisar conceitos e aprofundar temas.",
    },
    {
      icon: Sparkles,
      title: "Guia operacional pessoal",
      desc: "Documento com o fluxo, ferramentas, rotinas de segurança e decisões desenvolvidas ao longo da mentoria — entregue no último encontro.",
    },
  ];

  return (
    <section className="section-light relative py-28 md:py-36">
      <Container>
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="display text-balance text-[38px] md:text-[58px]">
            Como você é acompanhado durante e depois da mentoria.
          </h2>
          <p className="mx-auto mt-7 max-w-[660px] text-[16.5px] leading-relaxed text-muted-foreground">
            Você não recebe apenas informações e precisa descobrir sozinho como
            aplicá-las. O acompanhamento é ativo do primeiro ao último encontro
            — e continua na plataforma pelos 12 meses seguintes.
          </p>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex size-14 items-center justify-center text-ember">
                <Icon className="size-9" strokeWidth={1.4} />
              </div>
              <h3 className="display mt-6 text-[24px] md:text-[28px]">{title}</h3>
              <p className="mt-3 max-w-[320px] text-[14.5px] leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- garantia / compromisso ---------- */

function Garantia() {
  return (
    <section className="section-light py-28 md:py-32">
      <Container>
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 p-4 md:grid-cols-[auto_1fr] md:gap-16 md:p-8">
          <img
            src={garantiaImg}
            alt="Compromisso contratual de entrega LiberEther"
            loading="lazy"
            width={1024}
            height={1024}
            className="h-80 w-80 rounded-3xl object-cover md:h-[520px] md:w-[520px]"
          />

          <div>
            <h2 className="display text-[30px] md:text-[44px]">
              Nós garantimos aquilo que depende diretamente do nosso trabalho.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-muted-foreground md:text-[16.5px]">
              A LiberEther assume contratualmente o compromisso de entregar os
              12 encontros individuais, o acompanhamento no período contratado,
              o diagnóstico inicial, a personalização do conteúdo, a orientação
              para criação de uma carteira de autocustódia, o desenvolvimento
              de um plano de segurança, o acesso à plataforma pelo período
              informado e o guia operacional personalizado.
            </p>
            <p className="mt-5 text-[14.5px] leading-relaxed text-muted-foreground/85">
              A mentoria não oferece garantia de lucro, valorização de ativos,
              renda fixa, rentabilidade mínima, eliminação de riscos, aprovação
              em plataformas financeiras ou funcionamento permanente de
              serviços de terceiros. Criptomoedas, stablecoins e protocolos
              DeFi possuem riscos, apresentados durante a mentoria para que
              você tome decisões com mais conhecimento. As regras de
              cancelamento, remarcação e responsabilidades estão descritas em
              contrato.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- oferta ---------- */

function Oferta() {
  const stack = [
    ["Diagnóstico individual (Encontro 1)", "Incluído"],
    ["12 encontros semanais de 1 hora", "3 meses"],
    ["Estrutura de recebimento e conversão", "Personalizada"],
    ["Configuração de autocustódia e Trezor", "Acompanhada"],
    ["Educação sobre stablecoins e DeFi", "Incluída"],
    ["Integração com LiberWallet e LiberPass", "Incluída"],
    ["Guia operacional personalizado", "Encontro 12"],
    ["Bônus 1 — Plataforma LiberEther", "12 meses"],
    ["Bônus 2 — 50% off em serviços", "12 meses"],
    ["Bônus 3 — Plano de Continuidade", "Entregue ao final"],
  ];
  return (
    <section
      id="oferta"
      className="section-light relative overflow-hidden bg-background py-28 md:py-36"
    >
      <Container>
        <div className="mx-auto max-w-[820px] text-center">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            A oferta
          </div>
          <h2 className="display display-tight mt-5 text-[38px] md:text-[58px]">
            O que entra na Mentoria Autonomia Global.
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-[760px]">
          <ul className="divide-y divide-foreground/10">
            {stack.map(([t, v]) => (
              <li
                key={t}
                className="flex items-baseline justify-between gap-6 py-5"
              >
                <span className="text-[15px] text-foreground md:text-[16px]">{t}</span>
                <span className="font-mono text-[12.5px] text-muted-foreground">{v}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-baseline justify-between gap-6 py-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>Valor regular</span>
            <span className="tabular-nums line-through">R$ 3.000</span>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[820px] text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Condição comercial atual
          </div>
          <div className="display display-tight mt-3 text-[72px] leading-none md:text-[104px]">
            R$ 2.500
          </div>
          <div className="mt-3 text-[14px] text-muted-foreground">
            Economia de R$ 500 sobre o valor regular · condições de parcelamento
            apresentadas na conversa de diagnóstico
          </div>

          <div className="mt-10 flex justify-center">
            <PrimaryCTA>Quero solicitar uma conversa de diagnóstico</PrimaryCTA>
          </div>

          <div className="mt-5 text-[12.5px] text-muted-foreground">
            Antes da contratação, entendemos sua necessidade e avaliamos se a
            mentoria é o formato adequado para o seu objetivo.
          </div>
          <div className="mt-8 text-[12px] text-muted-foreground/70">
            As vagas dependem da disponibilidade de agenda para os 12 encontros
            individuais. O valor poderá ser atualizado conforme a evolução da oferta.
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- FAQ ---------- */

const faqs = [
  {
    q: "Preciso entender de criptomoedas antes de começar?",
    a: "Não. Os conceitos necessários são explicados durante os encontros. É recomendável ter familiaridade básica com aplicativos e tecnologia.",
  },
  {
    q: "A mentoria vai me ensinar a receber pagamentos em dólar?",
    a: "A mentoria apresenta e ajuda a estruturar os canais compatíveis com sua atividade, sua localização e as plataformas disponíveis. Nenhum canal específico pode ser garantido permanentemente, pois serviços de terceiros podem alterar regras e condições.",
  },
  {
    q: "Vou conseguir deixar de usar bancos?",
    a: "Você aprende a criar alternativas para receber, armazenar, converter e utilizar dinheiro. Isso pode reduzir a dependência de bancos, mas algumas operações ainda poderão utilizar instituições financeiras ou pontes entre moedas tradicionais e ativos digitais.",
  },
  {
    q: "A mentoria garante renda passiva?",
    a: "Não. Você aprende como funcionam diferentes possibilidades de rendimento, de onde vêm as receitas e quais riscos estão envolvidos. Não existe garantia de retorno ou rentabilidade.",
  },
  {
    q: "A LiberEther ficará com meu dinheiro?",
    a: "Não. A proposta é ensinar autocustódia. As carteiras, senhas e frases de recuperação permanecem sob o seu controle. A LiberEther não solicitará sua frase de recuperação.",
  },
  {
    q: "Preciso comprar uma Trezor?",
    a: "Não obrigatoriamente. A necessidade é avaliada conforme o volume armazenado, a frequência de utilização e o perfil de risco. Caso seja recomendada, a compra do dispositivo não está incluída no valor da mentoria.",
  },
  {
    q: "Qual é a diferença entre a mentoria e a plataforma de vídeos?",
    a: "A plataforma reúne conteúdos educacionais que podem ser acessados durante um ano. A mentoria é individual e personalizada: os encontros são organizados para resolver suas necessidades específicas e acompanhar a implementação.",
  },
  {
    q: "Quanto tempo preciso dedicar?",
    a: "Um encontro de uma hora por semana. Também é necessário reservar algum tempo para realizar configurações, estudar conteúdos e aplicar as orientações definidas em cada encontro.",
  },
  {
    q: "Posso contratar horas adicionais depois da mentoria?",
    a: "Sim, conforme disponibilidade. Durante os 12 meses posteriores à mentoria, você tem 50% de desconto em serviços adicionais elegíveis da LiberEther.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-light py-28 md:py-36">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="display text-[34px] md:text-[46px]">
              Perguntas frequentes, respondidas com clareza.
            </h2>
          </div>

          <div className="md:col-span-8">
            <ul className="">
              {faqs.map((f, i) => {
                const active = open === i;
                return (
                  <li key={f.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(active ? null : i)}
                      className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-ember"
                    >
                      <span className="text-[16.5px] font-medium md:text-[18px]">{f.q}</span>
                      <ChevronDown
                        className={`mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                          active ? "rotate-180 text-ember" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ${
                        active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0">
                        <p className="pb-7 pr-10 text-[15.5px] leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- linha do tempo (12 encontros) ---------- */

function LinhaDoTempo() {
  const steps = [
    {
      tag: "Encontros 1 e 2",
      title: "Diagnóstico e Fundamentos de Web3",
      desc: "Mapeamento da sua rotina financeira, objetivos e riscos atuais, seguido dos conceitos necessários para utilizar blockchain, Ethereum, stablecoins e carteiras.",
      bullets: ["Mapa da sua operação atual", "Prioridades para os 3 meses", "Fundamentos aplicados de Web3"],
      duracao: "2 encontros · 2 horas",
      img: step1,
    },
    {
      tag: "Encontros 3 e 4",
      title: "Canais de Entrada e Recebimentos Internacionais",
      desc: "Formas disponíveis para converter reais ou outras moedas em ativos digitais e construção de um fluxo para receber pagamentos de clientes ou empresas do exterior.",
      bullets: ["Fluxo de recebimento", "Conversão em stablecoins", "Redução de custos e etapas"],
      duracao: "2 encontros · 2 horas",
      img: step2,
    },
    {
      tag: "Encontros 5, 6 e 7",
      title: "Autocustódia, Segurança e Trezor",
      desc: "Configuração da carteira, endereços e redes; organização de senhas, frases de recuperação, backups e procedimentos de emergência; orientação sobre carteira física quando adequada.",
      bullets: ["Carteira própria configurada", "Plano de segurança documentado", "Trezor orientada quando fizer sentido"],
      duracao: "3 encontros · 3 horas",
      img: step3,
    },
    {
      tag: "Encontros 8 e 9",
      title: "Stablecoins e Rendimento em DeFi",
      desc: "Análise dos principais dólares digitais, funcionamento, utilidades e riscos. Explicação sobre protocolos, liquidez, origem de rendimentos e avaliação de riscos.",
      bullets: ["Diferenças entre stablecoins", "Riscos de protocolo e contrato", "Critérios reais de decisão"],
      duracao: "2 encontros · 2 horas",
      img: step4,
    },
    {
      tag: "Encontros 10, 11 e 12",
      title: "Utilização no Cotidiano, LiberEther e Plano de Continuidade",
      desc: "Transferências, pagamentos, cartões internacionais e integração com a rotina financeira. Uso da LiberWallet e LiberPass. Revisão da estrutura e entrega do guia operacional.",
      bullets: ["Rotina financeira integrada", "Ecossistema LiberEther em uso", "Guia operacional personalizado"],
      duracao: "3 encontros · 3 horas",
      img: step5,
    },
  ];

  return (
    <section className="section-light py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[860px]">
          <h2 className="display text-[36px] leading-[1.05] md:text-[54px]">
            Os 12 encontros, mês a mês.
          </h2>
          <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-muted-foreground md:text-[16px]">
            Uma sequência possível, sempre adaptada às suas prioridades no
            diagnóstico. Do primeiro encontro à entrega do guia operacional.
          </p>
        </div>

        <ol className="mx-auto mt-16 max-w-[1080px]">
          {steps.map((s, i) => (
            <motion.li
              key={s.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 items-center gap-8 py-12 md:grid-cols-[1.05fr_1fr] md:gap-14"
            >
              <div className="flex gap-5 md:gap-6">
                <div className="shrink-0">
                  <span className="grid size-12 place-items-center rounded-full bg-ember text-primary-foreground shadow-[0_8px_20px_-8px_color-mix(in_oklab,var(--ember)_60%,transparent)]">
                    <span className="font-mono text-[14px] font-semibold tracking-[0.04em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
                    {s.tag}
                  </div>
                  <h3 className="display mt-2 text-[26px] leading-[1.1] md:text-[34px]">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[460px] text-[14.5px] leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-[14px] text-foreground/85"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-ember" strokeWidth={2.75} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-semibold uppercase tracking-[0.18em] text-ember">
                      <Layers className="size-3.5" strokeWidth={2.5} />
                      {s.duracao}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full max-h-[340px] w-full rounded-[28px] object-cover shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)]"
                />
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ---------- momento editorial ---------- */

function FridgeVideo() {
  return (
    <section className="section-light relative isolate overflow-hidden bg-background">
      <img
        src={flatlay}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/70 via-background/40 to-background/80" />
      <div className="relative z-[2] mx-auto flex min-h-[70vh] max-w-[1200px] flex-col items-center justify-center px-6 py-32 text-center md:min-h-[80vh] md:py-44">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-ember">Próximo capítulo</p>
        <h2 className="display mt-6 max-w-[22ch] text-balance text-4xl text-foreground md:text-6xl lg:text-7xl">
          Assuma o controle do que já é seu.
        </h2>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-light relative overflow-hidden bg-background py-28 md:py-36">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-45"
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, oklch(0.74 0.14 275 / 0.35), transparent 60%)",
        }}
      />
      <Container className="relative z-10">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="display display-tight text-[42px] md:text-[72px]">
            12 encontros. 3 meses. Uma estrutura financeira sua.
          </h2>
          <p className="mx-auto mt-7 max-w-[600px] text-[16px] text-muted-foreground md:text-[17px]">
            R$ 2.500 na condição comercial atual · compromisso contratual de
            entrega · plataforma LiberEther incluída por 12 meses.
          </p>
          <div className="mt-10 flex justify-center">
            <PrimaryCTA>Quero solicitar uma conversa de diagnóstico</PrimaryCTA>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12">
      <Container className="flex flex-col items-center justify-between gap-4 text-[12.5px] text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="LiberEther"
            width={1024}
            height={1024}
            loading="lazy"
            className="h-8 w-auto"
          />
          <span className="font-display text-[16px] text-foreground/90">LiberEther</span>
        </div>
        <div>© 2026 LiberEther · Todos os direitos reservados</div>
        <div>Termos de uso · Política de privacidade</div>
      </Container>
    </footer>
  );
}

/* ---------- page ---------- */

function Landing() {
  useEffect(() => {
    const onScroll = () => {
      document.documentElement.style.setProperty(
        "--scroll",
        `${Math.min(window.scrollY, 600)}px`,
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative bg-background text-foreground">
      <TopMark />
      <Hero />
      <AnatomiaMarmita />
      <StatsStrip />
      <Cardapios />
      <Dor />
      <ProvaSocial />
      <CTAMid />
      <Metodo />
      <LinhaDoTempo />
      <ParaQuem />
      <Entregaveis />
      <Bonus />
      <Depoimentos />
      <FridgeVideo />
      <Criador />
      <Suporte />
      <Garantia />
      <Oferta />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
