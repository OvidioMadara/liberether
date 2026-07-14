import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clapperboard, Target } from "lucide-react";
import { cn } from "@/lib/utils";

import s1 from "@/assets/av-step-1.jpg";
import s2 from "@/assets/av-step-2.jpg";
import s3 from "@/assets/av-step-3.jpg";
import s4 from "@/assets/av-step-4.jpg";
import s5 from "@/assets/av-step-5.jpg";

type Etapa = {
  tempId: number;
  nome: string;
  descricao: string;
  etapa: string;
  foco: string;
  img: string;
};

const etapas: Etapa[] = [
  {
    tempId: 0,
    nome: "Posicionamento de Diretor",
    descricao: "Sai da categoria fornecedor de captação e entra na de consultor de narrativa. Bio, portfólio e primeira mensagem reformulados.",
    etapa: "Etapa 1",
    foco: "Posicionamento",
    img: s1,
  },
  {
    tempId: 1,
    nome: "Briefing de Diagnóstico",
    descricao: "Doze perguntas que fazem o cliente explicar o problema. Quem faz a pergunta certa controla o preço da reunião.",
    etapa: "Etapa 2",
    foco: "Diagnóstico",
    img: s2,
  },
  {
    tempId: 2,
    nome: "Apresentação Cinematográfica",
    descricao: "Transforma orçamento de planilha em proposta narrativa que o cliente lê até o fim e responde no mesmo dia.",
    etapa: "Etapa 3",
    foco: "Proposta",
    img: s3,
  },
  {
    tempId: 3,
    nome: "Negociação que Filtra",
    descricao: "Roteiro de objeção testado em mais de 400 reuniões. A resposta certa para tá caro, vou pensar e vou comparar.",
    etapa: "Etapa 4",
    foco: "Fechamento",
    img: s4,
  },
  {
    tempId: 4,
    nome: "Pauta Renovável",
    descricao: "Transforma cliente único em recorrente. Contrato anual, gatilhos de renovação e pós que cria o próximo projeto.",
    etapa: "Etapa 5",
    foco: "Recorrência",
    img: s5,
  },
];

interface CardProps {
  position: number;
  etapa: Etapa;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const EtapaCard: React.FC<CardProps> = ({
  position,
  etapa,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-card text-card-foreground shadow-float ring-2 ring-ember"
          : "z-0 bg-card text-card-foreground hover:ring-ember/40",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.55) * position}px)
          translateY(${isCenter ? -40 : position % 2 ? 18 : -18}px)
          rotate(${isCenter ? 0 : position % 2 ? 3 : -3}deg)
          scale(${isCenter ? 1 : 0.92})
        `,
        boxShadow: isCenter
          ? "0 30px 80px -20px color-mix(in oklab, var(--color-ember) 45%, transparent)"
          : "0 10px 30px -10px rgba(0,0,0,0.15)",
      }}
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={etapa.img}
          alt={etapa.nome}
          loading="lazy"
          width={768}
          height={768}
          className="h-3/5 w-full object-cover"
        />
        <div className="flex h-2/5 flex-col justify-between p-5">
          <div>
            <h3 className="display text-[18px] leading-tight md:text-[20px]">
              {etapa.nome}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-[12.5px] leading-snug text-muted-foreground">
              {etapa.descricao}
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11.5px] font-medium text-foreground/80">
            <span className="inline-flex items-center gap-1.5">
              <Clapperboard className="size-3.5 text-ember" />
              {etapa.etapa}
            </span>
            
            <span className="inline-flex items-center gap-1.5">
              <Target className="size-3.5 text-ember" />
              {etapa.foco}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const StaggerCardapios: React.FC = () => {
  const [cardSize, setCardSize] = useState(340);
  const [list, setList] = useState<Etapa[]>(etapas);

  const handleMove = (steps: number) => {
    const newList = [...list];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 360 : 260);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: cardSize + 120 }}
    >
      {list.map((etapa, index) => {
        const position =
          list.length % 2
            ? index - (list.length + 1) / 2
            : index - list.length / 2;
        return (
          <EtapaCard
            key={etapa.tempId}
            position={position}
            etapa={etapa}
            handleMove={handleMove}
            cardSize={cardSize}
          />
        );
      })}

      <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        <button
          onClick={() => handleMove(-1)}
          aria-label="Etapa anterior"
          className="flex size-12 items-center justify-center rounded-full bg-surface-raised shadow-float transition-colors hover:bg-ember hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={() => handleMove(1)}
          aria-label="Próxima etapa"
          className="flex size-12 items-center justify-center rounded-full bg-surface-raised shadow-float transition-colors hover:bg-ember hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
};
