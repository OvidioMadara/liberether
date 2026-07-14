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
  Clapperboard,
  Film,
  Users,
  MessageCircle,
  Headphones,
  Calendar,
  FileText,
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

import floatCamera from "@/assets/av-float-camera.png";
import floatLens from "@/assets/av-float-lens.png";
import floatMic from "@/assets/av-float-mic.png";
import floatClapper from "@/assets/av-float-clapper.png";
import floatReel from "@/assets/av-float-reel.png";

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
      { title: "Método Pauta Premium — Cobre mais por audiovisual" },
      {
        name: "description",
        content:
          "Estrutura de 5 etapas para profissionais de audiovisual cobrarem de 3 a 10x mais por projeto. O cliente decide o preço na primeira conversa, não na proposta.",
      },
      { property: "og:title", content: "Método Pauta Premium" },
      {
        property: "og:description",
        content:
          "Quem cobra barato em audiovisual filma de graça. Aprenda a vender o projeto antes de apertar o REC.",
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
        <img
          src={logo}
          alt="Método Pauta Premium"
          width={1024}
          height={1024}
          className="h-12 w-auto md:h-14"
        />
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
              "radial-gradient(ellipse at center, oklch(0.78 0.12 205 / 0.35), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 grain opacity-50" />
      </div>

      <FloatingFood
        containerRef={heroRef}
        items={[
          { src: floatLens, alt: "", className: "left-[3%] top-[18%] w-[110px] md:w-[150px]", depth: 0.6, rotate: -8 },
          { src: floatClapper, alt: "", className: "right-[4%] top-[12%] w-[120px] md:w-[160px]", depth: 0.45, rotate: 14, delay: 0.1 },
          { src: floatMic, alt: "", className: "left-[8%] bottom-[14%] w-[90px] md:w-[120px]", depth: 0.7, rotate: 12, delay: 0.15 },
          { src: floatCamera, alt: "", className: "right-[6%] bottom-[20%] w-[120px] md:w-[160px]", depth: 0.55, rotate: -10, delay: 0.05 },
          { src: floatReel, alt: "", className: "hidden md:block left-[12%] top-[55%] w-[110px]", depth: 0.35, rotate: -6, delay: 0.2 },
        ]}
      />

      <Container className="relative z-10">
        <div className="fade-up mx-auto max-w-[900px] text-center">
          <h1 className="display display-tight text-balance text-[34px] sm:text-[48px] md:text-[64px]">
            Quem domina a{" "}
            <AnimatedTextCycle
              words={["pauta", "proposta", "negociação", "narrativa", "recorrência"]}
              interval={2600}
              className="text-ember"
            />{" "}
            cobra caro em audiovisual.
          </h1>

          <p className="mx-auto mt-7 max-w-[680px] text-pretty text-[16px] leading-relaxed text-muted-foreground md:text-[17.5px]">
            O mercado audiovisual brasileiro cresceu 38% nos últimos três anos,
            o preço médio de diária caiu pela metade, e quem aprendeu a vender o
            projeto antes de apertar o REC fatura por mês o que o concorrente
            fatura por semestre.
          </p>

          <ul className="mx-auto mt-10 grid max-w-[960px] gap-3 text-left sm:grid-cols-3">
            {[
              "Cada orçamento mandado em três linhas no WhatsApp é uma chance de perder R$ 25 mil sem entrar na sala.",
              "Concorrente que filma de celular fecha o trabalho que era seu porque domina venda, não captação.",
              "Diretor de fotografia premiado fatura menos que social media iniciante por não saber precificar autoria.",
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
              alt="Set de filmagem cinematográfico com câmera profissional"
              width={1600}
              height={1024}
              className="size-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <div className="flex items-center gap-3 rounded-full bg-background/90 px-5 py-3 text-[13px] font-medium text-foreground shadow-xl ring-1 ring-ember/40 backdrop-blur">
                <span className="grid size-7 place-items-center rounded-full bg-ember text-primary-foreground">▶</span>
                Insira sua VSL aqui
              </div>
            </div>
          </div>
        </div>

        <div className="fade-up mt-12 flex flex-col items-center gap-6">
          <PrimaryCTA>Quero ver o método completo de precificação</PrimaryCTA>
          <div className="flex items-center gap-6 text-[12.5px] text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-3.5 text-ember" />
              15 dias de garantia incondicional
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
              Profissionais aplicando em todo o Brasil
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
          { src: floatLens, alt: "", className: "left-[2%] top-[14%] w-[120px] md:w-[160px]", depth: 0.55, rotate: -14 },
          { src: floatMic, alt: "", className: "right-[3%] top-[10%] w-[90px] md:w-[130px]", depth: 0.4, rotate: 12, delay: 0.1 },
          { src: floatCamera, alt: "", className: "right-[6%] bottom-[12%] w-[120px] md:w-[160px]", depth: 0.65, rotate: -8, delay: 0.15 },
          { src: floatClapper, alt: "", className: "left-[5%] bottom-[16%] w-[120px] md:w-[160px]", depth: 0.5, rotate: 18, delay: 0.2 },
          { src: floatReel, alt: "", className: "hidden md:block left-[18%] top-[58%] w-[100px]", depth: 0.3, rotate: -22, delay: 0.25 },
        ]}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="display display-tight text-balance text-[36px] md:text-[56px]">
            5 etapas. 4 a 10 semanas. De 3 a 12x mais por projeto.
          </h2>
          <p className="mx-auto mt-5 max-w-[600px] text-[16px] leading-relaxed text-muted-foreground md:text-[17px]">
            O cliente decide o preço do seu projeto na primeira conversa, não na
            proposta. Quando você manda orçamento, a decisão já foi tomada. O
            método inverte a ordem da conversa, não o seu equipamento.
          </p>
        </div>

        {/* central kit with halo */}
        <div className="relative mx-auto mt-16 flex max-w-[640px] items-center justify-center">
          <div
            className="absolute inset-10 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.78 0.12 205 / 0.4), transparent 70%)",
            }}
          />
          <motion.img
            src={kit}
            alt="Os componentes do Método Pauta Premium"
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
            ["32 aulas", "5 módulos em vídeo"],
            ["14 horas", "de conteúdo total"],
            ["38", "templates editáveis"],
            ["6 meses", "de comunidade ao vivo"],
          ].map(([n, l]) => (
            <div
              key={l}
              className="rounded-2xl bg-surface-raised/90 px-5 py-4 text-center shadow-float backdrop-blur-sm"
            >
              <div className="display text-[22px] md:text-[26px]">{n}</div>
              <div className="mt-1 text-[12px] uppercase tracking-wider text-muted-foreground">
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
    ["+38%", "crescimento do mercado audiovisual em 3 anos"],
    ["3x a 12x", "aumento de tíquete documentado entre alunos"],
    ["400+", "reuniões reais que validaram o roteiro"],
    ["5", "etapas em sequência, do posicionamento à renovação"],
  ];
  return (
    <section className="section-light py-12 md:py-16 bg-surface">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="display text-[28px] text-foreground md:text-[34px]">{n}</div>
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

/* ---------- etapas carrossel ---------- */

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
              "radial-gradient(ellipse at center, oklch(0.78 0.12 205 / 0.3), transparent 60%)",
          }}
        />
      </div>
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="display display-tight text-balance text-[36px] md:text-[54px]">
            Toca pra conhecer as 5 etapas do método.
          </h2>
          <p className="mx-auto mt-5 max-w-[600px] text-[15.5px] leading-relaxed text-muted-foreground md:text-[17px]">
            Cada etapa cobre uma frente da venda: posicionamento, diagnóstico,
            proposta, negociação e recorrência. Nenhuma depende de você trocar de
            câmera.
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
            <h2 className="display text-[34px] md:text-[52px]">
              Por que filmar 14 horas por dia te mantém pobre.
            </h2>
            <motion.img
              src={shameStill}
              alt="Equipamento audiovisual caro parado — câmera, ótica e drone sem retorno"
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
              Você compra câmera de R$ 40 mil, ótica de R$ 20 mil, drone de R$ 8
              mil, equipamento de áudio que passa de R$ 15 mil, e seu maior
              cliente é o noivo que pede pra você cobrir o pacote do tio que já
              topou fazer por R$ 1.800.
            </p>
            <p>
              Você passa três dias montando orçamento detalhado, grava vídeo de
              explicação, manda proposta com mood board, e o cliente responde
              "vou pensar com calma" antes de sumir no read.
            </p>
            <p>
              O amigo da família liga pra "tirar uma dúvida rápida" sobre o vídeo
              dos 15 anos da filha. Vinte minutos depois, a "dúvida rápida" virou
              três meses de pós-produção a troco de duas pizzas.
            </p>
            <p className="text-foreground">
              A razão não é técnica. É estrutural. O mercado foi treinado a
              precificar pela hora, pelo equipamento e pelo dia de set. Esse é o
              modelo de um operador de câmera, não de um diretor.{" "}
              <strong>Operador vende mão de obra. Diretor vende decisão.</strong>{" "}
              E ninguém paga R$ 30 mil por mão de obra que o concorrente da
              próxima rua faz por R$ 3 mil.
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
    name: "Lucas Mendes",
    role: "Videomaker de casamento, Curitiba",
    avatar: a1,
    before: "Cobrava R$ 2.500 por evento e fechava em média seis casamentos por mês.",
    after:
      "Em 4 meses aplicando o briefing, passou a cobrar R$ 18 mil por projeto e fechou três a mais que no ano anterior.",
  },
  {
    name: "Renata Vianna",
    role: "Diretora de vídeo corporativo, SP",
    avatar: a2,
    before: "Três clientes por mês com tíquete médio de R$ 4 mil.",
    after:
      "Agenda fechada com quatro contratos recorrentes de R$ 22 mil cada. Bateu R$ 80 mil/mês em 5 meses e meio.",
  },
  {
    name: "Diego Albuquerque",
    role: "Diretor de fotografia, Salvador",
    avatar: a3,
    before: "Cobrava R$ 1.800 a diária e trabalhava 18 dias por mês para fechar o mês.",
    after:
      "Subiu a diária para R$ 7.500 em 7 meses e fechou primeiro contrato anual com agência por R$ 240 mil.",
  },
];

function ProvaSocial() {
  return (
    <section className="section-light relative bg-background py-28 md:py-36">
      <Container>
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="display text-[34px] md:text-[54px]">
            O que três profissionais mudaram em menos de seis meses.
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
                  <div className="text-[11px] tracking-[0.18em] text-muted-foreground/80 uppercase">
                    Antes
                  </div>
                  <p className="mt-1.5 text-foreground/80">{p.before}</p>
                </div>
                <div className="pt-4">
                  <div className="text-[11px] tracking-[0.18em] text-ember uppercase">
                    Depois
                  </div>
                  <p className="mt-1.5 text-foreground">{p.after}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[640px] text-center text-[12px] uppercase tracking-[0.18em] text-muted-foreground/60">
          Depoimentos ilustrativos · substituir por casos reais
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
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="display text-[34px] text-white md:text-[52px]">
            Se cada projeto deste ano serviu pra cobrir conta, não pra construir
            patrimônio, a estrutura abaixo foi feita pra você.
          </h2>
          <div className="mt-10 flex justify-center">
            <PrimaryCTA>Quero ver o método de precificação na íntegra</PrimaryCTA>
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
    title: "Posicionamento de Diretor",
    image: step1,
    desc:
      "Como sair da categoria fornecedor de captação e entrar na de consultor de narrativa. Inclui reformulação de bio, portfólio, primeira mensagem e abordagem inicial.",
  },
  {
    n: "02",
    title: "Briefing de Diagnóstico",
    image: step2,
    desc:
      "Estrutura de doze perguntas que substituem o briefing de cliente. Em vez de perguntar quantos dias de filmagem, o cliente passa a explicar o problema dele.",
  },
  {
    n: "03",
    title: "Apresentação Cinematográfica",
    image: step3,
    desc:
      "Como transformar um orçamento de planilha em uma proposta narrativa que faz o cliente ler até o fim e responder no mesmo dia. Templates incluídos.",
  },
  {
    n: "04",
    title: "Negociação que Filtra",
    image: step4,
    desc:
      "Roteiro de objeção testado em mais de 400 reuniões. O que falar quando o cliente diz está caro, vou comparar ou vou pensar. Fecha em até três contatos.",
  },
  {
    n: "05",
    title: "Pauta Renovável",
    image: step5,
    desc:
      "Como transformar cliente único em recorrente sem cair na armadilha do desconto por fidelidade. Inclui contrato anual, gatilhos de renovação e pós-produção que cria o próximo projeto.",
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
          <div className="max-w-[720px]">
            <h2 className="display text-[34px] md:text-[52px]">
              O Método Pauta Premium inverte tudo o que você aprendeu sobre
              precificar audiovisual.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
              A escola de cinema te ensinou a fazer um plano-sequência bonito.
              Não te ensinou que o cliente decide o preço dentro dos primeiros
              doze minutos de conversa. Se a conversa for sobre câmera e hora de
              edição, o preço será de operador. Se for sobre o problema que o
              vídeo precisa resolver, o preço será de diretor.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="Etapa anterior"
              onClick={() => api?.scrollPrev()}
              disabled={!canPrev}
              className="grid size-11 place-items-center rounded-full text-foreground/80 transition hover:bg-foreground/[0.04] hover:text-foreground disabled:opacity-30"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Próxima etapa"
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
                        ETAPA {p.n}
                      </div>
                      <div className="absolute inset-x-5 bottom-5">
                        <h3 className="display text-[26px] leading-tight text-white md:text-[30px]">
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
                aria-label={`Ir para etapa ${i + 1}`}
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
              O mecanismo
            </div>
            <h3 className="display mt-4 text-[26px] text-foreground md:text-[34px]">
              Antes, o cliente pergunta sua diária. Depois, ele explica o
              problema dele por vinte minutos.
            </h3>
            <p className="mt-5 text-[15.5px] leading-relaxed text-foreground/75">
              Antes do método, a reunião começa com "qual seu valor de diária".
              Você cita números, o cliente pede desconto e fecha por R$ 3.500.
              Depois do método, você pergunta "qual o resultado que esse vídeo
              precisa gerar nos próximos noventa dias". O cliente fala vinte
              minutos, percebe sozinho que o problema é maior, e fecha por R$ 28
              mil. O custo do equipamento é o mesmo. Só a estrutura da conversa
              mudou.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl bg-card p-6">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Conversa de operador
              </div>
              <div className="display mt-2 text-[28px] text-muted-foreground">R$ 3.500</div>
              <p className="mt-2 text-[13.5px] text-muted-foreground">
                Preço comparado com o concorrente da próxima rua.
              </p>
            </div>
            <div className="rounded-2xl bg-ember/10 p-6 ring-1 ring-ember/30">
              <div className="text-[11px] uppercase tracking-[0.18em] text-ember">
                Conversa de diretor
              </div>
              <div className="display mt-2 text-[28px] text-foreground">R$ 28.000</div>
              <p className="mt-2 text-[13.5px] text-foreground/75">
                Preço comparado com o custo de não ter o vídeo certo.
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
    "Videomaker, cinegrafista, diretor, editor ou produtor com pelo menos um ano de mercado e portfólio formado",
    "Fatura entre R$ 5 mil e R$ 40 mil por mês e quer subir para R$ 50 mil a R$ 150 mil sem dobrar a carga",
    "Entrega trabalho bom tecnicamente, mas perde projeto por preço ou por orçamento mal apresentado",
    "Estúdio pequeno (1 a 4 pessoas) querendo sair do modelo tabela por hora para valor por projeto",
    "Já se cansou de filmar casamento, evento e treinamento no mesmo domingo",
  ];
  const no = [
    "Nunca filmou um trabalho pago e ainda está construindo portfólio inicial",
    "Quer cobrar mais sem mudar a forma como conversa com o cliente",
    "Quer manter a base que paga R$ 800 e ao mesmo tempo cobrar R$ 30 mil de cliente novo",
    "Espera resultado de R$ 50 mil por mês na primeira semana",
  ];

  return (
    <section className="section-light py-28 md:py-36">
      <Container>
        <h2 className="display mx-auto max-w-[820px] text-center text-[34px] md:text-[52px]">
          Antes de continuar, vale checar se você está no perfil certo.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-ember/10 via-surface/60 to-surface/30 p-8 md:p-10">
            <div className="text-[12px] tracking-[0.2em] text-ember uppercase">É pra você se</div>
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
            <div className="text-[12px] tracking-[0.2em] text-muted-foreground uppercase">
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
  { t: "Módulo 1. Posicionamento de Diretor", s: "6 aulas (2h20) — bio, portfólio e abordagem", v: "R$ 297", img: mod01 },
  { t: "Módulo 2. Briefing de Diagnóstico", s: "8 aulas (3h40) — as 12 perguntas-chave", v: "R$ 397", img: mod02 },
  { t: "Módulo 3. Apresentação Cinematográfica", s: "7 aulas (2h50) — 11 templates editáveis", v: "R$ 497", img: mod03 },
  { t: "Módulo 4. Negociação que Filtra", s: "5 aulas (2h10) — banco de respostas a objeção", v: "R$ 297", img: mod04 },
  { t: "Módulo 5. Pauta Renovável", s: "6 aulas (2h40) — contrato anual e renovação", v: "R$ 297", img: mod05 },
  { t: "Comunidade Pauta Premium", s: "6 meses — plantão semanal ao vivo", v: "R$ 1.182", img: mod06 },
];

function Entregaveis() {
  return (
    <section className="relative isolate overflow-hidden py-28 md:py-40 bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[720px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.78 0.12 205 / 0.45), transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="display text-[34px] text-foreground md:text-[56px]">
            O que entra quando você se inscreve hoje.
          </h2>
          <p className="mt-5 text-[15px] text-foreground/75 md:text-[16px]">
            Cinco módulos, biblioteca de templates e comunidade. Acesso liberado
            no minuto da inscrição.
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
                      className={`font-semibold leading-tight text-foreground  ${
                        featured ? "display text-[28px] md:text-[36px]" : "text-[18px]"
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
            <span>Ver oferta completa</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <div className="mt-6 font-mono text-[12.5px] text-foreground/80">
            Inclui ainda a Biblioteca de 38 Templates Premium (R$ 297)
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
      title: "Tabela Pauta 2026",
      desc: "Precificação de referência por categoria (institucional, comercial, casamento, evento, documentário, reels, branded content), com faixa mínima, média e premium. Resolve a objeção não sei quanto cobrar.",
      v: "R$ 297",
      img: bonus01,
    },
    {
      n: "02",
      title: "Roteiro 47",
      desc: "Script completo de reunião de venda de 47 minutos, validado em mais de 400 negociações. Abertura, perguntas, ponto de virada, ancoragem de preço e fechamento. Resolve a objeção trava na hora de falar de dinheiro.",
      v: "R$ 397",
      img: bonus02,
    },
    {
      n: "03",
      title: "Kit Contratos Blindados",
      desc: "Três contratos revisados por advogado (PJ, PF e anual recorrente), NDA, termo de cessão de imagem, briefing assinado e cronograma de aprovação. Resolve a objeção cliente sempre pede alteração extra.",
      v: "R$ 297",
      img: bonus03,
    },
  ];

  return (
    <section className="section-light py-28 md:py-36">
      <Container>
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="display text-[34px] md:text-[52px]">
            Três bônus que resolvem três objeções de quem trabalha com
            audiovisual.
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
                <h3 className="display mt-5 text-[24px] leading-tight">{b.title}</h3>
                <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-muted-foreground">
                  {b.desc}
                </p>
                <div className="mt-6 pt-4 font-mono text-[13px] text-foreground">
                  Valor de mercado: {b.v}
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
    name: "Mariana Costa",
    role: "Videomaker de casamento, BH",
    image: a1,
    text: "Cobrava R$ 3.200 por casamento, fechava sete eventos por mês trabalhando todos os fins de semana. Apliquei o Briefing de Diagnóstico nas primeiras três reuniões, parei de mandar tabela de pacote. Passei a cobrar R$ 19 mil por casamento, reduzi para três eventos por mês e estou com agenda fechada até abril de 2027.",
  },
  {
    name: "André Vasconcelos",
    role: "Diretor de vídeo corporativo, Brasília",
    image: a2,
    text: "Atendia três a cinco clientes mensais com tíquete médio de R$ 4.500, editando até meia-noite quase todo dia. Subi a primeira proposta de R$ 6 mil para R$ 28 mil seguindo o Módulo 3. Hoje são três contratos anuais de R$ 22 mil mensais cada, R$ 84 mil por mês estabilizado e fim de semana livre.",
  },
  {
    name: "Camila Rocha",
    role: "Produtora audiovisual, Recife",
    image: a3,
    text: "Cobrava R$ 5 mil para coordenar projeto institucional inteiro, trabalhando 13 horas por dia. Apliquei o roteiro do Bônus 2 numa reunião com farmacêutica grande. Mudei três perguntas, mudei o preço. Fechei contrato de R$ 47 mil para três peças em quatro semanas, depois renovei o mesmo cliente por R$ 92 mil.",
  },
  {
    name: "Pedro Henrique Lima",
    role: "Diretor de fotografia, Porto Alegre",
    image: a4,
    text: "Cobrava R$ 1.800 a diária de DOP, fazia 18 diárias por mês e fechava no vermelho. Apliquei Posicionamento de Diretor, reformulei portfólio e parei de aceitar diária abaixo de R$ 4 mil. Subi a diária para R$ 7.500 em cinco meses e fechei primeiro contrato anual com agência por R$ 240 mil.",
  },
  {
    name: "Juliana Tavares",
    role: "Diretora criativa de branded content, Floripa",
    image: a5,
    text: "Cobrava pacote mensal de R$ 3.500 por marca, atendia cinco marcas com agenda esgotada. Criei um serviço de narrativa estendida usando a Apresentação Cinematográfica e ofereci como upgrade. As três marcas migraram em dois meses para R$ 12 mil mensais. Faturamento saltou de R$ 17.500 para R$ 41 mil atendendo menos marcas.",
  },
  {
    name: "Camila Rocha",
    role: "Produtora audiovisual, Recife",
    image: a1,
    text: "Fui pra reunião com farmacêutica grande achando que ia fechar R$ 8 mil de um institucional. Usei só as três primeiras perguntas do Briefing de Diagnóstico e saí com contrato de R$ 47 mil para três peças. Demorou quatro semanas pra acreditar que tinha sido o mesmo cliente.",
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
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="display text-[34px] md:text-[52px]">
            O que cinco profissionais fizeram quando trocaram orçamento por
            proposta.
          </h2>
        </div>

        <div className="mt-16 flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] max-h-[720px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </div>

        <p className="mx-auto mt-10 max-w-[640px] text-center text-[12px] uppercase tracking-[0.18em] text-muted-foreground/60">
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
                alt="Criador do Método Pauta Premium em set de filmagem"
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="text-[18px] font-medium text-white">Diretor há 14 anos</div>
                <div className="mt-1 text-[12.5px] text-white/70">
                  Maior projeto entregue: R$ 380 mil em um único contrato
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <h2 className="display text-[34px] md:text-[52px]">
              Quem está por trás do método e por que decidiu ensinar.
            </h2>

            <div className="mt-8 space-y-5 text-[16px] leading-[1.75] text-muted-foreground md:text-[16.5px]">
              <p>
                Dirige projetos audiovisuais há 14 anos, com direção de fotografia
                e direção criativa para marcas reconhecidas e maior projeto
                entregue em um único contrato comercial de R$ 380 mil.
              </p>
              <p>
                Em 2018, fechou o ano com R$ 47 mil de dívida em equipamento,
                trabalhando 16 horas por dia em casamentos de R$ 1.500. Entrou
                numa reunião para fechar um institucional de R$ 6 mil e saiu com
                proposta de R$ 38 mil aceita no mesmo dia. Não tinha mudado
                equipamento, portfólio nem equipe. Tinha mudado{" "}
                <strong className="text-foreground">a primeira pergunta da conversa</strong>.
              </p>
              <p>
                Sistematizou o que aprendeu em cinco etapas e testou no próprio
                estúdio: o faturamento passou de R$ 23 mil para R$ 94 mil mensais
                em sete meses. Em 2024, virou treinamento formal.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                ["14 anos", "dirigindo projetos audiovisuais"],
                ["R$ 380 mil", "maior projeto em um contrato"],
                ["3x a 12x", "aumento de tíquete documentado"],
              ].map(([n, l]) => (
                <div key={l} className="p-1">
                  <div className="display text-[26px] md:text-[32px]">{n}</div>
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
      title: "Comunidade fechada",
      desc: "Discord com canais por etapa do método (posicionamento, briefing, proposta, negociação, pauta) e canal de oportunidades comerciais entre membros.",
    },
    {
      icon: Calendar,
      title: "Plantão semanal ao vivo",
      desc: "Toda quarta às 19h, uma hora de tira-dúvidas conduzida pelo criador e por dois mentores formados pela metodologia.",
    },
    {
      icon: FileText,
      title: "Revisão de proposta",
      desc: "Você manda uma proposta real enviada nos últimos 30 dias e a equipe devolve análise por escrito em até cinco dias úteis.",
    },
    {
      icon: Headphones,
      title: "Resposta em 24h",
      desc: "Dúvidas no canal de suporte respondidas em até 24 horas em dia útil, durante todo o período de acompanhamento.",
    },
    {
      icon: Clapperboard,
      title: "Acesso por 6 meses",
      desc: "Acompanhamento ativo durante seis meses a partir da inscrição, com renovação opcional por R$ 197 mensais depois.",
    },
    {
      icon: Sparkles,
      title: "Mentores formados",
      desc: "Além do criador, mentores que aplicaram a metodologia no próprio negócio acompanham os plantões e as revisões.",
    },
  ];

  return (
    <section className="section-light relative py-28 md:py-36">
      <Container>
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="display text-balance text-[36px] md:text-[56px]">
            Como você é acompanhado depois que entra.
          </h2>
          <p className="mx-auto mt-7 max-w-[640px] text-[16.5px] leading-relaxed text-muted-foreground">
            Comunidade, plantão ao vivo e revisão de proposta real durante seis
            meses de acompanhamento ativo.
          </p>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex size-14 items-center justify-center text-ember">
                <Icon className="size-9" strokeWidth={1.4} />
              </div>
              <h3 className="display mt-6 text-[22px] md:text-[24px]">{title}</h3>
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

/* ---------- garantia ---------- */

function Garantia() {
  return (
    <section className="section-light py-28 md:py-32">
      <Container>
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 p-4 md:grid-cols-[auto_1fr] md:gap-16 md:p-8">
          <img
            src={garantiaImg}
            alt="Garantia incondicional de 15 dias"
            loading="lazy"
            width={1024}
            height={1024}
            className="h-80 w-80 rounded-3xl object-cover md:h-[520px] md:w-[520px]"
          />

          <div>
            <h2 className="display text-[28px] md:text-[40px]">
              Garantia incondicional de 15 dias. O risco fica do nosso lado.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-muted-foreground md:text-[16.5px]">
              Você se inscreve, acessa imediatamente os cinco módulos, baixa a
              biblioteca de templates, entra na comunidade e participa do
              primeiro plantão. Se em qualquer momento dentro dos quinze primeiros
              dias decidir que o método não é para você, basta mandar um email
              para o suporte com a frase "quero o reembolso" e devolvemos 100% do
              valor em até cinco dias úteis. Sem questionário, sem prova, sem
              ligação de retenção.
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
    ["Módulo 1. Posicionamento de Diretor", "R$ 297"],
    ["Módulo 2. Briefing de Diagnóstico", "R$ 397"],
    ["Módulo 3. Apresentação Cinematográfica", "R$ 497"],
    ["Módulo 4. Negociação que Filtra", "R$ 297"],
    ["Módulo 5. Pauta Renovável", "R$ 297"],
    ["Biblioteca de Templates Premium", "R$ 297"],
    ["Comunidade Pauta Premium (6 meses)", "R$ 1.182"],
    ["Bônus 1. Tabela Pauta 2026", "R$ 297"],
    ["Bônus 2. Roteiro 47", "R$ 397"],
    ["Bônus 3. Kit Contratos Blindados", "R$ 297"],
  ];
  return (
    <section
      id="oferta"
      className="section-light relative overflow-hidden bg-background py-28 md:py-36"
    >
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            A oferta
          </div>
          <h2 className="display display-tight mt-5 text-[36px] md:text-[56px]">
            O que entra na inscrição de hoje e por quanto.
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
                <span className="text-[13px] tabular-nums text-muted-foreground">{v}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-baseline justify-between gap-6 py-5 text-[13px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>Valor total dos componentes</span>
            <span className="tabular-nums line-through">R$ 4.255</span>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[760px] text-center">
          <div className="text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
            Hoje você paga
          </div>
          <div className="display display-tight mt-3 text-[64px] leading-none md:text-[96px]">
            R$ 1.997
          </div>
          <div className="mt-3 text-[14px] text-muted-foreground">
            à vista ou 12× de R$ 197 no cartão · acesso liberado em minutos
          </div>

          <div className="mt-10 flex justify-center">
            <PrimaryCTA>Quero garantir minha vaga no Método Pauta Premium</PrimaryCTA>
          </div>

          <div className="mt-5 text-[12.5px] text-muted-foreground">
            Garantia incondicional de 15 dias · sem formulário, sem ligação
          </div>
          <div className="mt-8 text-[12px] text-muted-foreground/70">
            Ao continuar, você concorda com os termos de uso e a política de
            privacidade.
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- FAQ ---------- */

const faqs = [
  {
    q: "Quanto tempo demora para eu ver retorno?",
    a: "A primeira aplicação do Briefing de Diagnóstico costuma acontecer entre a segunda e a quinta semana, dependendo do volume de reuniões que você já tem. Existem casos documentados de fechamento de primeiro projeto premium em até trinta dias, e casos que levaram dez semanas. O fator que mais influencia é a quantidade de reuniões por semana, não o tempo de mercado.",
  },
  {
    q: "E se eu não tiver tempo agora? Filmo quase todo fim de semana.",
    a: "O método tem 14 horas totais entre os cinco módulos, em aulas curtas (média de 18 minutos cada). A maioria consome um módulo por semana, em deslocamento ou pós-filmagem. Os templates funcionam independentemente: se assistir só o Módulo 3 e baixar a Biblioteca, já consegue mandar a próxima proposta diferente.",
  },
  {
    q: "R$ 1.997 está caro pra mim agora. Tem como parcelar?",
    a: "Sim, em 12 vezes de R$ 197 no cartão. Se um único projeto fechado com o método cobrir o valor anual do treinamento, ele se paga. O cálculo médio dos alunos é que o primeiro projeto premium paga o método de quatro a dez vezes. Se isso não acontecer nos primeiros quinze dias, a garantia cobre 100% do valor.",
  },
  {
    q: "Funciona pra quem só faz casamento? E corporativo? E reels?",
    a: "Funciona, e a Tabela Pauta 2026 traz faixas de preço específicas por categoria. A estrutura central do Briefing de Diagnóstico é a mesma; o que muda são as perguntas e os templates. O Módulo 2 inclui exemplos aplicados em sete nichos: casamento, corporativo, branded content, documentário, evento, reels e comercial.",
  },
  {
    q: "Qual a diferença para outros cursos de precificação?",
    a: "A maioria ensina fórmula de cálculo (custo, margem, imposto). O Método Pauta Premium não trabalha cálculo, trabalha conversa. A premissa é que o cliente decide o preço dentro da reunião, não na proposta. Os cinco módulos ensinam como conduzir essa conversa, não como somar custos.",
  },
  {
    q: "Não tenho portfólio gigante. Funciona pra quem está começando?",
    a: "O método foi pensado para quem já tem pelo menos um ano de mercado e portfólio formado, mesmo que pequeno. Quem começou semana passada não é o público ideal porque ainda precisa resolver a parte técnica antes da comercial. Quem tem de um a cinco anos de mercado é o perfil mais frequente entre os alunos.",
  },
  {
    q: "E se o cliente não topar pagar o preço que vou cobrar?",
    a: "Vai acontecer, e a premissa do método é que você precisa filtrar cliente. Cobrar R$ 28 mil de quem pagaria R$ 3 mil não funciona. O método ensina a identificar, nas primeiras três perguntas, se o cliente está no perfil do projeto e como redirecionar ou recusar quem não está. O resultado é menos reunião, mais fechamento e cliente melhor.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-light py-28 md:py-36">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="display text-[32px] md:text-[44px]">
              As objeções mais comuns, respondidas direto.
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

/* ---------- linha do tempo (as 5 etapas) ---------- */

function LinhaDoTempo() {
  const steps = [
    {
      tag: "Etapa 1",
      title: "Posicionamento de Diretor",
      desc: "Você sai da categoria fornecedor de captação e entra na de consultor de narrativa. Bio, portfólio, primeira mensagem e abordagem inicial reformulados.",
      bullets: ["Nova bio e portfólio", "Primeira mensagem que filtra", "Abordagem de consultor"],
      duracao: "Módulo 1 — 6 aulas",
      img: step1,
    },
    {
      tag: "Etapas 2 e 3",
      title: "Briefing e Proposta",
      desc: "As doze perguntas que fazem o cliente explicar o problema e a proposta narrativa que ele lê até o fim. Quem faz a pergunta certa controla o preço.",
      bullets: ["12 perguntas de diagnóstico", "Proposta narrativa", "11 templates editáveis"],
      duracao: "Módulos 2 e 3 — 15 aulas",
      img: step3,
    },
    {
      tag: "Etapa 4",
      title: "Negociação que Filtra",
      desc: "Roteiro de objeção testado em mais de 400 reuniões. A resposta certa para está caro, vou pensar e vou comparar. Fecha em até três contatos.",
      bullets: ["Banco de respostas", "Ancoragem de preço", "Fechamento em 3 contatos"],
      duracao: "Módulo 4 — 5 aulas",
      img: step4,
    },
    {
      tag: "Etapa 5",
      title: "Pauta Renovável",
      desc: "Transforma cliente único em recorrente. Contrato anual, gatilhos de renovação e pós-produção que cria o próximo projeto sem desconto por fidelidade.",
      bullets: ["Contrato anual", "Gatilhos de renovação", "Pós que gera o próximo projeto"],
      duracao: "Módulo 5 — 6 aulas",
      img: step5,
    },
  ];

  return (
    <section className="section-light py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[820px]">
          <h2 className="display text-[34px] leading-[1.05] md:text-[52px]">
            Como o método se desenrola, etapa por etapa.
          </h2>
          <p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-muted-foreground md:text-[16px]">
            Do posicionamento à recorrência. Mensurável e replicável.
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
                  <h3 className="display mt-2 text-[24px] leading-[1.1] md:text-[30px]">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[440px] text-[14.5px] leading-relaxed text-muted-foreground">
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
                    <span className="inline-flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-ember">
                      <Film className="size-3.5" strokeWidth={2.5} />
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

/* ---------- momento cinematográfico ---------- */

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
        <p className="text-xs uppercase tracking-[0.32em] text-ember">Próximo projeto</p>
        <h2 className="display mt-6 max-w-[20ch] text-balance text-4xl text-foreground md:text-6xl lg:text-7xl">
          Aperte o REC sabendo que o projeto já está vendido.
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
            "radial-gradient(ellipse at 50% 100%, oklch(0.78 0.12 205 / 0.35), transparent 60%)",
        }}
      />
      <Container className="relative z-10">
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="display display-tight text-[40px] md:text-[68px]">
            5 etapas. De 3 a 12x mais por projeto.
          </h2>
          <p className="mx-auto mt-7 max-w-[560px] text-[16px] text-muted-foreground md:text-[17px]">
            R$ 1.997 à vista ou 12× de R$ 197. Garantia incondicional de 15 dias.
            Acesso liberado em minutos.
          </p>
          <div className="mt-10 flex justify-center">
            <PrimaryCTA>Quero garantir minha vaga agora</PrimaryCTA>
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
        <img
          src={logo}
          alt="Método Pauta Premium"
          width={1024}
          height={1024}
          loading="lazy"
          className="h-9 w-auto"
        />
        <div>© 2026, Todos os direitos reservados</div>
        <div>Termos de uso, Política de privacidade</div>
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
