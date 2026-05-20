import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Mail,
  Instagram,
  Youtube,
  Music2,
  Gamepad2,
  Camera,
  Sparkles as SparklesIcon,
  Heart,
  BookOpen,
  Coffee,
  Moon,
} from "lucide-react";
import hero from "@/assets/arwen-hero.png";
import { Sparkles, PixelHeart } from "@/components/arwen/Sparkles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arwen — Links" },
      {
        name: "description",
        content:
          "Arwen — geek, gamer & lifestyle creator. Um cantinho cozy com todos os meus links.",
      },
      { property: "og:title", content: "Arwen — Links" },
      { property: "og:description", content: "Entra no meu universo roxinho ✨" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ArwenPage,
});

const links = [
  {
    icon: Instagram,
    label: "Instagram",
    sub: "@by.arwenn",
    href: "https://instagram.com/by.arwenn",
  },
  {
    icon: Music2,
    label: "TikTok",
    sub: "vídeos curtinhos & rotina",
    href: "https://tiktok.com/@by.arwenn",
  },
  {
    icon: Youtube,
    label: "YouTube",
    sub: "vlogs cozy & reviews",
    href: "#",
  },
  {
    icon: Gamepad2,
    label: "Twitch",
    sub: "lives de joguinhos",
    href: "#",
  },
  {
    icon: Camera,
    label: "UGC & parcerias",
    sub: "veja meu portfólio",
    href: "#",
  },
  {
    icon: Mail,
    label: "Contato comercial",
    sub: "by.arwenn.contato@gmail.com",
    href: "mailto:by.arwenn.contato@gmail.com",
  },
];

const vibes = [
  { icon: Gamepad2, label: "gaming" },
  { icon: BookOpen, label: "books" },
  { icon: Coffee, label: "coffee" },
  { icon: Moon, label: "cozy nights" },
];

function ArwenPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <Sparkles count={55} />

      {/* Decorative blurred blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-[var(--lavender)]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 rounded-full bg-[var(--glow)]/25 blur-3xl" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-5 pb-16 pt-12">
        {/* Hero portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--glow)]/45 via-[var(--lavender)]/35 to-transparent blur-2xl" />
          <div className="glass-strong relative overflow-hidden rounded-[2rem] ring-1 ring-[var(--lilac)]/40 animate-pulse-glow">
            <div className="relative aspect-[4/5] w-full">
              <img
                src={hero}
                alt="Arwen no seu setup geek roxinho"
                className="h-full w-full object-cover"
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep)] via-[var(--deep)]/40 to-transparent" />

              {/* Floating badge top-left */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass absolute left-3 top-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[var(--lilac)] ring-1 ring-[var(--lilac)]/40"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--glow)] animate-pulse" />
                online & cozy
              </motion.div>

              <SparklesIcon className="absolute right-4 top-4 h-5 w-5 text-[var(--lilac)] animate-twinkle" />
              <Heart className="absolute bottom-24 right-5 h-4 w-4 fill-[var(--glow)] text-[var(--glow)] animate-twinkle" />

              {/* Name overlay */}
              <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-10 text-center">
                <p className="font-script text-2xl text-[var(--lilac)] drop-shadow-lg">
                  oi, eu sou a
                </p>
                <h1 className="font-display -mt-1 text-6xl italic leading-none">
                  <span className="text-gradient">Arwen</span>
                </h1>
                <div className="mt-2 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/80">
                  <span>geek</span>
                  <PixelHeart />
                  <span>creator</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini about */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-center"
        >
          <p className="mx-auto max-w-sm text-sm leading-relaxed text-[var(--muted-foreground)]">
            dev de dia, geek o tempo todo ✨ <br />
            criando conteúdo cozy sobre <span className="text-[var(--lilac)]">games, livros, setup & lifestyle</span> — bem-vindx pro meu cantinho roxinho 💜
          </p>
        </motion.div>

        {/* Vibe chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-5 flex flex-wrap justify-center gap-2"
        >
          {vibes.map((v) => (
            <div
              key={v.label}
              className="glass flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] text-[var(--lilac)] ring-1 ring-[var(--lilac)]/25"
            >
              <v.icon className="h-3.5 w-3.5" />
              {v.label}
            </div>
          ))}
        </motion.div>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-8 flex w-full items-center gap-3"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--lilac)]/40" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--lilac)]/80">
            ✦ meus links ✦
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--lilac)]/40" />
        </motion.div>

        {/* Links list */}
        <div className="mt-5 flex w-full flex-col gap-3">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.06, duration: 0.45 }}
              whileHover={{ y: -2, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="glass group relative flex items-center gap-3 overflow-hidden rounded-2xl px-4 py-3.5 ring-1 ring-[var(--lilac)]/25 transition-all hover:ring-lilac hover:glow-lilac"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--lavender)]/40 to-[var(--glow)]/25 ring-1 ring-[var(--lilac)]/30">
                <l.icon className="h-5 w-5 text-[var(--lilac)]" />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <div className="text-sm font-semibold">{l.label}</div>
                <div className="truncate text-xs text-[var(--muted-foreground)]">
                  {l.sub}
                </div>
              </div>
              <SparklesIcon className="h-4 w-4 text-[var(--lilac)]/40 transition-all group-hover:rotate-12 group-hover:text-[var(--lilac)]" />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-col items-center gap-2 text-center"
        >
          <PixelHeart />
          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--lilac)]/70">
            made with ♡ by arwen
          </p>
        </motion.div>
      </section>
    </main>
  );
}
