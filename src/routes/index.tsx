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
} from "lucide-react";
import mascot from "@/assets/arwen-mascot.png";
import { Sparkles, PixelHeart } from "@/components/arwen/Sparkles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arwen — Links" },
      {
        name: "description",
        content:
          "Arwen — geek, gamer & lifestyle creator. All my links in one cozy purple place.",
      },
      { property: "og:title", content: "Arwen — Links" },
      { property: "og:description", content: "Step into Arwen's universe." },
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
    sub: "@by.arwenn",
    href: "https://tiktok.com/@by.arwenn",
  },
  {
    icon: Youtube,
    label: "YouTube",
    sub: "vídeos & vlogs",
    href: "#",
  },
  {
    icon: Camera,
    label: "Portfólio UGC",
    sub: "trabalhos & cases",
    href: "#",
  },
  {
    icon: Gamepad2,
    label: "Twitch / Lives",
    sub: "cozy gaming",
    href: "#",
  },
  {
    icon: Mail,
    label: "Contato comercial",
    sub: "by.arwenn.contato@gmail.com",
    href: "mailto:by.arwenn.contato@gmail.com",
  },
];

function ArwenPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <Sparkles count={50} />

      <section className="relative mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-5 pb-16 pt-14 sm:pt-20">
        {/* Avatar / mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[var(--glow)]/50 via-[var(--lavender)]/40 to-transparent blur-2xl" />
          <div className="glass-strong relative grid h-32 w-32 place-items-center overflow-hidden rounded-full ring-lilac animate-pulse-glow">
            <motion.img
              src={mascot}
              alt="Arwen mascot"
              className="h-28 w-28 object-contain drop-shadow-[0_8px_24px_rgba(216,109,255,0.55)]"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <SparklesIcon className="absolute -right-3 -top-2 h-5 w-5 text-[var(--lilac)] animate-twinkle" />
          <Heart className="absolute -bottom-1 -left-3 h-4 w-4 fill-[var(--glow)] text-[var(--glow)] animate-twinkle" />
        </motion.div>

        {/* Name + bio */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-center"
        >
          <h1 className="font-display text-5xl italic leading-none">
            <span className="text-gradient">Arwen</span>
          </h1>
          <p className="font-script -mt-1 text-3xl text-[var(--lilac)]">
            geek creator
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[var(--lilac)]/80">
            <span>games</span>
            <PixelHeart />
            <span>books</span>
            <PixelHeart />
            <span>cozy</span>
          </div>
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-[var(--muted-foreground)]">
            dev de dia, geek o tempo todo ✨ <br />
            criando conteúdo cozy sobre games, livros, setup & makeup.
          </p>
        </motion.div>

        {/* Links list */}
        <div className="mt-8 flex w-full flex-col gap-3">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.45 }}
              whileHover={{ y: -2, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="glass group relative flex items-center gap-3 overflow-hidden rounded-2xl px-4 py-3.5 ring-1 ring-[var(--lilac)]/25 transition-all hover:ring-lilac hover:glow-lilac"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--lavender)]/35 to-[var(--glow)]/25 ring-1 ring-[var(--lilac)]/30">
                <l.icon className="h-5 w-5 text-[var(--lilac)]" />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <div className="text-sm font-semibold">{l.label}</div>
                <div className="truncate text-xs text-[var(--muted-foreground)]">
                  {l.sub}
                </div>
              </div>
              <SparklesIcon className="h-4 w-4 text-[var(--lilac)]/40 transition-all group-hover:text-[var(--lilac)] group-hover:rotate-12" />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
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
