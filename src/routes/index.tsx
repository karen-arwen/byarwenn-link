import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Instagram,
  Youtube,
  Music2,
  Twitch,
  Heart,
  Sparkles as SparklesIcon,
  Star,
  ChevronRight,
  MessageCircle,
  ArrowDown,
  Briefcase,
  Languages,
} from "lucide-react";
import hero from "@/assets/arwen-hero.png";
import anime from "@/assets/arwen-anime.png";
import illuMoon from "@/assets/illu-moon.png";
import illuCat from "@/assets/illu-cat.png";
import illuBooks from "@/assets/illu-books.png";
import illuController from "@/assets/illu-controller.png";
import illuLipstick from "@/assets/illu-lipstick.png";
import illuMusic from "@/assets/illu-music.png";
import illuHeart from "@/assets/illu-heart.png";
import illuPortfolio from "@/assets/illu-portfolio.png";
import { Sparkles, PixelHeart } from "@/components/arwen/Sparkles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arwen — Geek Creator" },
      {
        name: "description",
        content:
          "Arwen — criadora de conteúdo geek e lifestyle. Games, livros, maquiagem, doramas e momentos roxinhos.",
      },
      { property: "og:title", content: "Arwen — Geek Creator" },
      { property: "og:description", content: "Entra no meu cantinho roxinho ✨" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ArwenPage,
});

type Lang = "pt" | "en";

const t = {
  pt: {
    tag: "online & cozy",
    role: "Geek Creator",
    intro: (
      <>
        Criadora de conteúdo geek e lifestyle{" "}
        <SparklesIcon className="inline h-3.5 w-3.5 text-[var(--lilac)]" />
        <br />
        compartilhando{" "}
        <span className="text-[var(--lilac)]">games, livros, maquiagem, doramas</span> e momentos do dia a dia.
      </>
    ),
    sectionAbout: "✦ me conheça melhor ✦",
    sectionLoves: "✦ outras coisas que eu amo ✦",
    universe: "meu universo",
    cozyTag: "cozy mode on",
    quote: '"vivendo entre joguinhos, livros & noites roxinhas" 💜',
    ctaTitle: (
      <>
        vamos criar algo<br />incrível juntos? ✨
      </>
    ),
    ctaButton: "me chama!",
    findMe: "me encontre por aí",
    footer: "© 2026 Arwen — feito com ♡",
    links: [
      { label: "Me assista na Twitch", sub: "lives de games e conversa" },
      { label: "Inscreva-se no YouTube", sub: "vídeos toda semana" },
      { label: "Instagram", sub: "me acompanhe no dia a dia" },
      { label: "TikTok", sub: "conteúdos curtos e divertidos" },
      { label: "Portfólio & Mídia Kit", sub: "trabalhos, marcas e parcerias" },
      { label: "Parcerias & Contato", sub: "vamos trabalhar juntas!" },
    ],
    about: [
      {
        title: "Quem sou eu",
        lines: ["20 anos", "ENFP", "Lufana 🏅"],
        extra: "sonhadora, intensa e movida por ideias e emoção 💜",
      },
      {
        title: "Apaixonada por",
        lines: [
          "músicas que viram trilha da vida",
          "livros que viram mundos",
          "maquiagem como expressão",
          "e muito kdrama!",
        ],
      },
      {
        title: "Jogos favoritos",
        lines: [
          "Hogwarts Legacy",
          "Luigi's Mansion",
          "Mobile Legends",
          "Neverness to Everness",
        ],
      },
      {
        title: "Leituras",
        lines: ["Ficção", "Fantasia", "Romance", "Manhwas"],
      },
    ],
    loves: [
      "maquiagem & skincare",
      "música sempre conectada",
      "livros & doramas",
      "games & mil ideias",
      "noites roxinhas & conversas boas",
      "projetos malucos",
    ],
  },
  en: {
    tag: "online & cozy",
    role: "Geek Creator",
    intro: (
      <>
        Geek & lifestyle content creator{" "}
        <SparklesIcon className="inline h-3.5 w-3.5 text-[var(--lilac)]" />
        <br />
        sharing{" "}
        <span className="text-[var(--lilac)]">games, books, makeup, kdramas</span> and tiny everyday moments.
      </>
    ),
    sectionAbout: "✦ get to know me ✦",
    sectionLoves: "✦ other things i love ✦",
    universe: "my universe",
    cozyTag: "cozy mode on",
    quote: '"living between games, books & purple nights" 💜',
    ctaTitle: (
      <>
        let's create something<br />amazing together? ✨
      </>
    ),
    ctaButton: "say hi!",
    findMe: "find me around",
    footer: "© 2026 Arwen — made with ♡",
    links: [
      { label: "Watch me on Twitch", sub: "game streams & chill talks" },
      { label: "Subscribe on YouTube", sub: "new videos every week" },
      { label: "Instagram", sub: "follow my daily life" },
      { label: "TikTok", sub: "short & fun content" },
      { label: "Portfolio & Media Kit", sub: "work, brands & partnerships" },
      { label: "Partnerships & Contact", sub: "let's work together!" },
    ],
    about: [
      {
        title: "Who i am",
        lines: ["20 years old", "ENFP", "Hufflepuff 🏅"],
        extra: "dreamer, intense and driven by ideas and emotion 💜",
      },
      {
        title: "In love with",
        lines: [
          "songs that become life's soundtrack",
          "books that turn into worlds",
          "makeup as expression",
          "and lots of kdrama!",
        ],
      },
      {
        title: "Favorite games",
        lines: [
          "Hogwarts Legacy",
          "Luigi's Mansion",
          "Mobile Legends",
          "Neverness to Everness",
        ],
      },
      {
        title: "Reading",
        lines: ["Fiction", "Fantasy", "Romance", "Manhwas"],
      },
    ],
    loves: [
      "makeup & skincare",
      "always with music on",
      "books & kdramas",
      "games & a thousand ideas",
      "purple nights & good talks",
      "wild little projects",
    ],
  },
} as const;

const linkMeta = [
  { icon: Twitch, href: "https://twitch.tv/byarwenn" },
  { icon: Youtube, href: "#" },
  { icon: Instagram, href: "https://instagram.com/by.arwenn" },
  { icon: Music2, href: "https://tiktok.com/@by.arwenn" },
  { icon: Briefcase, href: "#" },
  { icon: Mail, href: "mailto:by.arwenn.contato@gmail.com" },
];

const aboutIllus = [illuHeart, illuMusic, illuController, illuBooks];
const lovesIllus = [illuLipstick, illuMusic, illuBooks, illuController, illuMoon, illuHeart];

const socials = [
  { icon: Twitch, href: "https://twitch.tv/byarwenn", label: "Twitch" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/by.arwenn", label: "Instagram" },
  { icon: Music2, href: "https://tiktok.com/@by.arwenn", label: "TikTok" },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Mail, href: "mailto:by.arwenn.contato@gmail.com", label: "Email" },
];

function ArwenPage() {
  const [lang, setLang] = useState<Lang>("pt");
  const c = t[lang];

  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <Sparkles count={70} />

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-[var(--lavender)]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[var(--glow)]/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[var(--lavender)]/15 blur-3xl" />

      {/* Language toggle */}
      <div className="fixed right-4 top-4 z-50">
        <motion.button
          onClick={() => setLang((p) => (p === "pt" ? "en" : "pt"))}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle language"
          className="glass-strong flex items-center gap-2 rounded-full px-3 py-2 ring-1 ring-[var(--lilac)]/40 shadow-[0_0_25px_oklch(0.72_0.25_325/0.35)] backdrop-blur-xl"
        >
          <Languages className="h-3.5 w-3.5 text-[var(--lilac)]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--lilac)]">
            {lang === "pt" ? "PT" : "EN"}
          </span>
          <span className="text-[10px] text-[var(--muted-foreground)]">/</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
            {lang === "pt" ? "EN" : "PT"}
          </span>
        </motion.button>
      </div>

      <section className="relative mx-auto flex w-full max-w-md flex-col items-center px-5 pb-20 pt-10">
        {/* ===== HERO (cinematic) ===== */}
        <div className="relative w-full">
          {/* cinematic background halos */}
          <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--glow)_0%,transparent_60%)] opacity-40 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-32 -z-10 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--lavender)_0%,transparent_55%)] opacity-50 blur-2xl animate-pulse-glow" />
          {/* diagonal light beam */}
          <div
            className="pointer-events-none absolute -left-10 top-0 -z-10 h-[40rem] w-40 rotate-[20deg] opacity-30 blur-3xl"
            style={{
              background:
                "linear-gradient(180deg, transparent, var(--glow) 40%, transparent)",
            }}
          />

          <motion.img
            src={illuMoon}
            alt=""
            aria-hidden
            initial={{ opacity: 0, x: -20, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.9 }}
            className="pointer-events-none absolute -left-3 top-2 h-20 w-20 select-none animate-float"
            style={{ filter: "drop-shadow(0 0 14px var(--glow))" }}
          />
          <motion.img
            src={illuHeart}
            alt=""
            aria-hidden
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="pointer-events-none absolute -right-3 top-4 h-16 w-16 select-none animate-float"
            style={{ animationDelay: "1.5s", filter: "drop-shadow(0 0 12px var(--glow))" }}
          />

          {/* Portrait — cinematic frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mx-auto mt-4 w-[86%]"
          >
            {/* outer dramatic glow */}
            <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-[var(--glow)]/70 via-[var(--lavender)]/40 to-transparent blur-[60px] animate-pulse-glow" />
            <div className="absolute -inset-6 rounded-[3rem] bg-[var(--lilac)]/20 blur-2xl" />

            {/* rotating conic border */}
            <div
              className="relative rounded-[2.5rem] p-[3px]"
              style={{
                background:
                  "conic-gradient(from 140deg at 50% 50%, var(--lilac), var(--glow), var(--lavender), var(--lilac))",
                boxShadow:
                  "0 0 0 8px oklch(0.16 0.08 305 / 0.85), 0 35px 80px -15px oklch(0.5 0.3 305 / 0.7), 0 0 120px oklch(0.72 0.25 325 / 0.35)",
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.3rem] bg-[var(--ink)]">
                <img
                  src={hero}
                  alt="Arwen"
                  className="h-full w-full object-cover scale-105"
                />
                {/* cinematic vignette */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0.12_0.08_305_/_0.7)_100%)]" />
                {/* color grade overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--deep)]/50 via-transparent to-[var(--glow)]/15 mix-blend-overlay" />
                {/* bottom fade */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--deep)]/80 via-[var(--deep)]/20 to-transparent" />
                {/* film light streak */}
                <div className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
                {/* corner twinkles */}
                <SparklesIcon className="absolute right-3 top-4 h-4 w-4 text-white/80 animate-twinkle drop-shadow-[0_0_8px_var(--glow)]" />
                <Star
                  className="absolute left-4 top-8 h-3 w-3 fill-[var(--lilac)] text-[var(--lilac)] animate-twinkle"
                  style={{ animationDelay: "1s" }}
                />
                <Star
                  className="absolute right-6 bottom-10 h-3 w-3 fill-[var(--glow)] text-[var(--glow)] animate-twinkle"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </div>

            {/* tag chip */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2"
            >
              <div className="glass-strong flex items-center gap-2 rounded-full px-4 py-2 ring-1 ring-[var(--lilac)]/50 shadow-[0_0_25px_oklch(0.72_0.25_325/0.5)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--glow)] animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--lilac)]">
                  {c.tag}
                </span>
                <Heart className="h-3 w-3 fill-[var(--glow)] text-[var(--glow)]" />
              </div>
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-14 text-center"
          >
            <h1 className="font-display text-7xl italic leading-none tracking-tight">
              <span className="text-gradient drop-shadow-[0_0_30px_oklch(0.72_0.25_325_/_0.6)]">
                Arwen
              </span>
            </h1>
            <p className="font-script -mt-1 text-4xl text-[var(--lilac)]">{c.role}</p>
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-5 max-w-sm text-center text-sm leading-relaxed text-[var(--muted-foreground)]"
          >
            {c.intro}
          </motion.p>
        </div>

        {/* ===== LINKS ===== */}
        <div className="mt-10 flex w-full flex-col gap-3.5">
          {c.links.map((l, i) => {
            const meta = linkMeta[i];
            const Icon = meta.icon;
            return (
              <motion.a
                key={l.label}
                href={meta.href}
                target={meta.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass group relative flex items-center gap-3 overflow-hidden rounded-full px-3 py-3 pr-4 ring-1 ring-[var(--lilac)]/30 transition-all hover:ring-lilac hover:glow-lilac"
                style={{
                  boxShadow:
                    "inset 0 0 20px oklch(0.72 0.25 325 / 0.06), 0 0 20px oklch(0.72 0.25 325 / 0.15)",
                }}
              >
                <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--lavender)]/60 to-[var(--glow)]/40 ring-1 ring-[var(--lilac)]/40 shadow-[0_0_20px_oklch(0.72_0.25_325/0.4)]">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <div className="text-[15px] font-semibold leading-tight">{l.label}</div>
                  <div className="truncate text-[11px] text-[var(--muted-foreground)]">{l.sub}</div>
                </div>
                <Heart className="h-4 w-4 text-[var(--lilac)]/50 transition-all group-hover:scale-125 group-hover:fill-[var(--glow)] group-hover:text-[var(--glow)]" />
                <ChevronRight className="h-4 w-4 text-[var(--lilac)]/60 transition-transform group-hover:translate-x-1" />
              </motion.a>
            );
          })}
        </div>

        {/* ===== ME CONHEÇA MELHOR ===== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass relative mt-14 w-full rounded-[2rem] p-5 ring-1 ring-[var(--lilac)]/25"
        >
          <SparklesIcon className="absolute -left-2 -top-2 h-4 w-4 text-[var(--lilac)] animate-twinkle" />
          <SparklesIcon className="absolute -right-2 -top-2 h-4 w-4 text-[var(--glow)] animate-twinkle" style={{ animationDelay: "1s" }} />

          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--lilac)]/60" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--lilac)] text-center">
              {c.sectionAbout}
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--lilac)]/60" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {c.about.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="glass relative flex flex-col items-center gap-2 rounded-2xl p-4 text-center ring-1 ring-[var(--lilac)]/25 transition-all hover:ring-lilac"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[var(--glow)]/20 blur-2xl" />
                  <img
                    src={aboutIllus[i]}
                    alt=""
                    aria-hidden
                    width={64}
                    height={64}
                    loading="lazy"
                    className="relative h-16 w-16 object-contain animate-float"
                    style={{
                      animationDelay: `${i * 0.4}s`,
                      filter: "drop-shadow(0 0 10px var(--glow))",
                    }}
                  />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--lilac)]">
                  ✦ {a.title} ✦
                </div>
                <div className="space-y-0.5 text-[13px] leading-snug text-foreground/90">
                  {a.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
                {"extra" in a && a.extra && (
                  <>
                    <div className="my-1 h-px w-12 bg-[var(--lilac)]/30" />
                    <p className="text-[11px] leading-snug text-[var(--muted-foreground)]">
                      {a.extra}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== OUTRAS COISAS QUE EU AMO ===== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass relative mt-12 w-full rounded-[2rem] p-5 ring-1 ring-[var(--lilac)]/25"
        >
          <SparklesIcon className="absolute -left-2 -top-2 h-4 w-4 text-[var(--lilac)] animate-twinkle" />
          <SparklesIcon className="absolute -right-2 -top-2 h-4 w-4 text-[var(--glow)] animate-twinkle" style={{ animationDelay: "1s" }} />
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--lilac)]/60" />
            <span className="text-[10px] uppercase tracking-[0.32em] text-[var(--lilac)] text-center">
              {c.sectionLoves}
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--lilac)]/60" />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {c.loves.map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -3, rotate: -1 }}
                className="glass relative flex flex-col items-center gap-2 rounded-2xl p-3 text-center ring-1 ring-[var(--lilac)]/25 transition-all hover:ring-lilac"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[var(--glow)]/20 blur-xl" />
                  <img
                    src={lovesIllus[i]}
                    alt=""
                    aria-hidden
                    width={56}
                    height={56}
                    loading="lazy"
                    className="relative h-14 w-14 object-contain"
                    style={{ filter: "drop-shadow(0 0 8px var(--glow))" }}
                  />
                </div>
                <p className="text-[11px] leading-snug text-foreground/90">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== ANIME BANNER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-12 w-full"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--lilac)]/60" />
            <span className="font-script text-2xl text-[var(--lilac)]">{c.universe}</span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--lilac)]/60" />
          </div>

          <div className="relative overflow-hidden rounded-3xl ring-1 ring-[var(--lilac)]/40 glow-lilac">
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-[var(--glow)]/40 to-[var(--lavender)]/40 blur-2xl" />
            <img src={anime} alt="Arwen anime" className="h-auto w-full object-cover" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--deep)] to-transparent" />
            <div className="glass absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[var(--lilac)] ring-1 ring-[var(--lilac)]/40">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--glow)] animate-pulse" />
              {c.cozyTag}
            </div>
            <img
              src={illuCat}
              alt=""
              aria-hidden
              width={64}
              height={64}
              loading="lazy"
              className="absolute right-3 top-3 h-14 w-14 animate-float"
              style={{ filter: "drop-shadow(0 0 10px var(--glow))" }}
            />
          </div>
          <p className="mt-3 text-center text-xs italic text-[var(--muted-foreground)]">
            {c.quote}
          </p>
        </motion.div>

        {/* ===== CTA card ===== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-14 w-full"
        >
          <img
            src={illuCat}
            alt=""
            aria-hidden
            width={64}
            height={64}
            loading="lazy"
            className="pointer-events-none absolute -left-3 -top-10 h-16 w-16 animate-float"
            style={{ filter: "drop-shadow(0 0 10px var(--glow))" }}
          />
          <img
            src={illuHeart}
            alt=""
            aria-hidden
            width={64}
            height={64}
            loading="lazy"
            className="pointer-events-none absolute -right-3 -top-10 h-16 w-16 animate-float"
            style={{ animationDelay: "1.5s", filter: "drop-shadow(0 0 10px var(--glow))" }}
          />
          <div className="glass relative flex flex-col items-center gap-3 rounded-[2rem] px-6 py-7 text-center ring-1 ring-[var(--lilac)]/35 glow-lilac">
            <SparklesIcon className="absolute left-4 top-4 h-3.5 w-3.5 text-[var(--lilac)] animate-twinkle" />
            <SparklesIcon className="absolute right-4 top-4 h-3.5 w-3.5 text-[var(--glow)] animate-twinkle" style={{ animationDelay: "1.2s" }} />
            <p className="font-script text-3xl leading-tight text-[var(--lilac)]">
              {c.ctaTitle}
            </p>
            <motion.a
              href="mailto:by.arwenn.contato@gmail.com"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-1 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--lavender)] to-[var(--glow)] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_oklch(0.72_0.25_325/0.6)] ring-1 ring-white/20"
            >
              {c.ctaButton} <ArrowDown className="h-4 w-4" />
            </motion.a>
            <p className="mt-1 text-[11px] text-[var(--muted-foreground)]">
              by.arwenn.contato@gmail.com 💜
            </p>
          </div>
        </motion.div>

        {/* ===== SOCIAL ICONS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex w-full flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--lilac)]/60" />
            <PixelHeart />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--lilac)]">
              {c.findMe}
            </span>
            <PixelHeart />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--lilac)]/60" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="glass grid h-11 w-11 place-items-center rounded-full ring-1 ring-[var(--lilac)]/30 transition-all hover:ring-lilac hover:glow-lilac"
              >
                <s.icon className="h-5 w-5 text-[var(--lilac)]" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ===== FOOTER ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-2 text-center"
        >
          <PixelHeart />
          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--lilac)]/70">
            {c.footer}
          </p>
        </motion.div>
      </section>
    </main>
  );
}
