import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Mail,
  Instagram,
  Youtube,
  Music2,
  Gamepad2,
  Twitch,
  Heart,
  BookOpen,
  Sparkles as SparklesIcon,
  Coffee,
  Star,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import hero from "@/assets/arwen-hero.png";
import anime from "@/assets/arwen-anime.png";
import { Sparkles, PixelHeart } from "@/components/arwen/Sparkles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arwen — Geek Creator" },
      {
        name: "description",
        content:
          "Arwen — criadora de conteúdo geek e lifestyle. Games, livros, setup, coleções e momentos do dia a dia.",
      },
      { property: "og:title", content: "Arwen — Geek Creator" },
      {
        property: "og:description",
        content: "Entra no meu cantinho roxinho ✨",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ArwenPage,
});

const links = [
  {
    icon: Heart,
    label: "Apoie no Ko-fi",
    sub: "ajude a criadora a continuar criando",
    href: "#",
  },
  {
    icon: Twitch,
    label: "Me assista na Twitch",
    sub: "lives de games e conversa",
    href: "#",
  },
  {
    icon: Youtube,
    label: "Inscreva-se no YouTube",
    sub: "vídeos toda semana",
    href: "#",
  },
  {
    icon: Instagram,
    label: "Instagram",
    sub: "me acompanhe no dia a dia",
    href: "https://instagram.com/by.arwenn",
  },
  {
    icon: Music2,
    label: "TikTok",
    sub: "conteúdos curtos e divertidos",
    href: "https://tiktok.com/@by.arwenn",
  },
  {
    icon: Mail,
    label: "Parcerias & Contato",
    sub: "vamos trabalhar juntas!",
    href: "mailto:by.arwenn.contato@gmail.com",
  },
];

const about = [
  { icon: Heart, title: "23 anos", lines: ["Escorpiana", "INTJ-T", "música, café & dias chuvosos"] },
  { icon: Gamepad2, title: "Games favoritos", lines: ["The Sims 4", "Life is Strange", "Genshin Impact", "Stardew Valley"] },
  { icon: BookOpen, title: "Leituras", lines: ["Ficção", "Fantasia", "Romance", "Mangás"] },
  { icon: SparklesIcon, title: "Não vivo sem", lines: ["Criatividade", "Organização", "Café gelado", "Meu cantinho 💜"] },
];

const socials = [
  { icon: Twitch, href: "#", label: "Twitch" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/by.arwenn", label: "Instagram" },
  { icon: Music2, href: "#", label: "TikTok" },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Mail, href: "mailto:by.arwenn.contato@gmail.com", label: "Email" },
];

function ArwenPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <Sparkles count={70} />

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-[var(--lavender)]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[var(--glow)]/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[var(--lavender)]/15 blur-3xl" />

      <section className="relative mx-auto flex w-full max-w-md flex-col items-center px-5 pb-20 pt-10">
        {/* ===== HERO ===== */}
        <div className="relative w-full">
          {/* Moon top-left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute -left-2 top-4 select-none text-5xl animate-float"
            style={{ filter: "drop-shadow(0 0 12px var(--glow))" }}
            aria-hidden
          >
            🌙
          </motion.div>
          {/* Pixel heart top-right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute -right-1 top-6 animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <PixelHeart className="scale-150" />
          </motion.div>

          {/* Oval portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto mt-6 w-[78%]"
          >
            {/* outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[var(--glow)]/50 via-[var(--lavender)]/40 to-transparent blur-2xl animate-pulse-glow" />
            {/* decorative outer ring */}
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-[50%] ring-2 ring-[var(--lilac)]/60"
              style={{
                boxShadow:
                  "0 0 0 6px oklch(0.18 0.08 305 / 0.8), 0 0 0 8px oklch(0.83 0.13 320 / 0.4), 0 0 60px oklch(0.72 0.25 325 / 0.5)",
              }}
            >
              <img
                src={hero}
                alt="Arwen no seu setup geek roxinho"
                className="h-full w-full object-cover"
              />
              {/* twinkles on frame */}
              <SparklesIcon className="absolute right-3 top-6 h-4 w-4 text-[var(--lilac)] animate-twinkle" />
              <Star className="absolute left-4 top-10 h-3 w-3 fill-[var(--lilac)] text-[var(--lilac)] animate-twinkle" style={{ animationDelay: "1s" }} />
              <Star className="absolute right-6 bottom-12 h-3 w-3 fill-[var(--glow)] text-[var(--glow)] animate-twinkle" style={{ animationDelay: "2s" }} />
            </div>
            {/* heart gem under portrait */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 -bottom-5 -translate-x-1/2"
            >
              <div className="relative grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[var(--lilac)] to-[var(--glow)] rotate-45 shadow-[0_0_30px_var(--glow)]">
                <Heart className="h-4 w-4 -rotate-45 fill-white text-white" />
              </div>
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-12 text-center"
          >
            <h1 className="font-display text-7xl italic leading-none tracking-tight">
              <span className="text-gradient drop-shadow-[0_0_30px_oklch(0.72_0.25_325_/_0.6)]">
                Arwen
              </span>
            </h1>
            <p className="font-script -mt-1 text-4xl text-[var(--lilac)]">
              Geek Creator
            </p>
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-5 max-w-sm text-center text-sm leading-relaxed text-[var(--muted-foreground)]"
          >
            Criadora de conteúdo geek e lifestyle{" "}
            <SparklesIcon className="inline h-3.5 w-3.5 text-[var(--lilac)]" />
            <br />
            compartilhando <span className="text-[var(--lilac)]">games, livros, setup, make,
            coleções</span> e momentos do dia a dia.
          </motion.p>
        </div>

        {/* ===== LINKS ===== */}
        <div className="mt-10 flex w-full flex-col gap-3.5">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
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
              {/* shimmer */}
              <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />

              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--lavender)]/60 to-[var(--glow)]/40 ring-1 ring-[var(--lilac)]/40 shadow-[0_0_20px_oklch(0.72_0.25_325/0.4)]">
                <l.icon className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <div className="text-[15px] font-semibold leading-tight">{l.label}</div>
                <div className="truncate text-[11px] text-[var(--muted-foreground)]">
                  {l.sub}
                </div>
              </div>
              <Heart className="h-4 w-4 text-[var(--lilac)]/50 transition-all group-hover:scale-125 group-hover:fill-[var(--glow)] group-hover:text-[var(--glow)]" />
              <ChevronRight className="h-4 w-4 text-[var(--lilac)]/60 transition-transform group-hover:translate-x-1" />
            </motion.a>
          ))}
        </div>

        {/* ===== ABOUT ===== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass relative mt-12 w-full rounded-3xl p-5 ring-1 ring-[var(--lilac)]/25"
        >
          {/* corner sparkles */}
          <SparklesIcon className="absolute -left-2 -top-2 h-4 w-4 text-[var(--lilac)] animate-twinkle" />
          <SparklesIcon className="absolute -right-2 -top-2 h-4 w-4 text-[var(--glow)] animate-twinkle" style={{ animationDelay: "1s" }} />

          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--lilac)]/60" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--lilac)]">
              ✦ me conheça melhor ✦
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--lilac)]/60" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {about.map((a) => (
              <div key={a.title} className="text-center">
                <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--lavender)]/40 to-[var(--glow)]/25 ring-1 ring-[var(--lilac)]/40">
                  <a.icon className="h-4.5 w-4.5 text-[var(--lilac)]" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--lilac)]">
                  {a.title}
                </div>
                <div className="mt-1.5 space-y-0.5 text-[12px] leading-snug text-[var(--muted-foreground)]">
                  {a.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
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
            <span className="font-script text-2xl text-[var(--lilac)]">
              meu universo
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--lilac)]/60" />
          </div>

          <div className="relative overflow-hidden rounded-3xl ring-1 ring-[var(--lilac)]/40 glow-lilac">
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-[var(--glow)]/40 to-[var(--lavender)]/40 blur-2xl" />
            <img
              src={anime}
              alt="Arwen versão anime no quarto geek"
              className="h-auto w-full object-cover"
            />
            {/* bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--deep)] to-transparent" />
            {/* tag */}
            <div className="glass absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[var(--lilac)] ring-1 ring-[var(--lilac)]/40">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--glow)] animate-pulse" />
              cozy mode on
            </div>
            <Heart className="absolute right-4 top-4 h-5 w-5 fill-[var(--glow)] text-[var(--glow)] animate-twinkle drop-shadow-[0_0_10px_var(--glow)]" />
          </div>
          <p className="mt-3 text-center text-xs italic text-[var(--muted-foreground)]">
            "vivendo entre joguinhos, livros & noites roxinhas" 💜
          </p>
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
              me encontre por aí
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
            © 2026 Arwen — feito com ♡
          </p>
        </motion.div>
      </section>
    </main>
  );
}
