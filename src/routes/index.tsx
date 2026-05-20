import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Mail,
  Instagram,
  Youtube,
  Music2,
  Gamepad2,
  BookOpen,
  Sparkles as SparklesIcon,
  Monitor,
  Calendar,
  Package,
  Coffee,
  Camera,
  Star,
  Heart,
  Play,
  Gift,
  MessageCircleHeart,
  Wand2,
  Palette,
  ArrowUpRight,
} from "lucide-react";
import heroPhoto from "@/assets/arwen-hero.png";
import mascot from "@/assets/arwen-mascot.png";
import { Sparkles, PixelHeart, SectionDivider } from "@/components/arwen/Sparkles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arwen — Geek Creator & UGC Portfolio" },
      {
        name: "description",
        content:
          "Arwen — geek, gamer & lifestyle creator. Games, books, makeup, setup, cozy content and UGC with a maximalist purple aesthetic.",
      },
      { property: "og:title", content: "Arwen — Geek Creator" },
      { property: "og:description", content: "Step into Arwen's universe — cozy, geek, purple." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArwenPage,
});

const socials = [
  { icon: Instagram, label: "Instagram", handle: "@by.arwenn", href: "https://instagram.com/by.arwenn" },
  { icon: Music2, label: "TikTok", handle: "@by.arwenn", href: "https://tiktok.com/@by.arwenn" },
  { icon: Youtube, label: "YouTube", handle: "Arwen", href: "#" },
  { icon: Mail, label: "Email", handle: "by.arwenn.contato@gmail.com", href: "mailto:by.arwenn.contato@gmail.com" },
];

const hyperfixations = [
  { icon: Gamepad2, label: "Games", emoji: "🎮", grad: "from-violet-500/40 to-fuchsia-500/30" },
  { icon: BookOpen, label: "Books", emoji: "📚", grad: "from-purple-500/40 to-pink-500/30" },
  { icon: Palette, label: "Makeup", emoji: "💄", grad: "from-fuchsia-500/40 to-rose-400/30" },
  { icon: Monitor, label: "Setup", emoji: "🖥️", grad: "from-indigo-500/40 to-violet-500/30" },
  { icon: Calendar, label: "Geek Events", emoji: "🎟️", grad: "from-purple-600/40 to-fuchsia-400/30" },
  { icon: Package, label: "Collectibles", emoji: "🧸", grad: "from-pink-500/40 to-violet-500/30" },
  { icon: Coffee, label: "Cozy Content", emoji: "☕", grad: "from-violet-400/40 to-purple-600/30" },
  { icon: Camera, label: "UGC", emoji: "📸", grad: "from-fuchsia-400/40 to-purple-500/30" },
];

const services = [
  { icon: MessageCircleHeart, label: "Reviews" },
  { icon: Gift, label: "Unboxing" },
  { icon: Play, label: "TikTok / Reels" },
  { icon: Wand2, label: "Storytelling Videos" },
  { icon: SparklesIcon, label: "Aesthetic Content" },
  { icon: Heart, label: "Geek Lifestyle" },
];

const portfolio = [
  { title: "Setup Tour", tag: "Vlog", grad: "from-violet-600 to-fuchsia-500" },
  { title: "Game Review", tag: "Review", grad: "from-purple-700 to-pink-500" },
  { title: "UGC Beauty", tag: "UGC", grad: "from-fuchsia-500 to-rose-400" },
  { title: "Geek Unboxing", tag: "Unboxing", grad: "from-indigo-600 to-violet-500" },
  { title: "Cozy Gaming", tag: "Stream", grad: "from-purple-600 to-fuchsia-400" },
  { title: "Makeup Reel", tag: "Reel", grad: "from-pink-500 to-violet-500" },
];

const brands = ["Nintendo", "Redragon", "Pichau", "SHEGLAM", "Press Start", "Funko"];

function ArwenPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <Sparkles count={60} />

      {/* TOP NAV / HERO */}
      <section className="relative">
        <div className="relative mx-auto max-w-7xl px-5 pt-6 sm:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-display text-xl italic text-[var(--lilac)]">
              <SparklesIcon className="h-4 w-4" />
              <span>Arwen</span>
              <SparklesIcon className="h-4 w-4" />
            </div>
            <a
              href="mailto:by.arwenn.contato@gmail.com"
              className="glass-strong inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm hover:glow-lilac transition-all"
            >
              <Mail className="h-4 w-4" />
              <span>Business Contact</span>
            </a>
          </nav>
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 pb-12 pt-10 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pt-16">
          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 lg:col-span-7"
          >
            <div className="absolute -left-10 -top-8 h-40 w-40 rounded-full bg-[var(--lavender)]/30 blur-3xl" />
            <div className="relative">
              <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--lilac)]/80">
                <Star className="h-3 w-3 fill-current" />
                <span>geek · gamer · lifestyle</span>
              </div>

              <h1 className="font-display text-[18vw] leading-[0.85] sm:text-[120px] lg:text-[160px]">
                <span className="text-gradient italic">Arwen</span>
              </h1>
              <p className="font-script -mt-2 text-5xl text-[var(--lilac)] sm:text-6xl lg:text-7xl">
                Geek Creator
              </p>

              <h2 className="mt-6 max-w-xl text-2xl font-semibold sm:text-3xl">
                Developer by day,
                <br />
                geek permanently <span className="inline-block animate-twinkle">✨</span>
              </h2>

              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--muted-foreground)]">
                Geek, gamer and lifestyle creator sharing games, books, makeup, setup content,
                events and chaotic hyperfixations with a maximalist cozy aesthetic.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#portfolio"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[var(--lavender)] to-[var(--glow)] px-6 py-3 text-sm font-semibold text-[#1a0626] animate-pulse-glow transition-transform hover:scale-105"
                >
                  <Gamepad2 className="h-4 w-4" />
                  UGC Portfolio
                </a>
                <a
                  href="mailto:by.arwenn.contato@gmail.com"
                  className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:ring-lilac transition-all"
                >
                  <Mail className="h-4 w-4" />
                  Business Contact
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hero photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--glow)]/40 via-[var(--lavender)]/30 to-transparent blur-2xl" />
              <div className="glass-strong relative overflow-hidden rounded-[2rem] ring-lilac">
                <img
                  src={heroPhoto}
                  alt="Arwen in her cozy purple gaming setup"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--deep)] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="glass rounded-full px-3 py-1">✦ now playing: cozy mode</span>
                  <span className="rounded-full bg-[var(--glow)]/30 px-3 py-1 text-[var(--lilac)]">LVL 99</span>
                </div>
              </div>
              {/* floating mascot */}
              <motion.img
                src={mascot}
                alt=""
                aria-hidden
                className="animate-float absolute -bottom-10 -left-10 w-28 sm:w-36 drop-shadow-[0_10px_30px_rgba(216,109,255,0.5)]"
                initial={{ rotate: -6 }}
                animate={{ rotate: [-6, 4, -6] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL BAR */}
      <section className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong relative grid grid-cols-2 gap-3 rounded-3xl p-4 sm:grid-cols-4 sm:gap-6 sm:p-6"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-transparent p-3 transition-all hover:border-[var(--lilac)]/40 hover:bg-white/5"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--lavender)]/30 to-[var(--glow)]/20 ring-1 ring-[var(--lilac)]/30 group-hover:glow-lilac">
                <s.icon className="h-5 w-5 text-[var(--lilac)]" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-[var(--lilac)]">{s.label}</div>
                <div className="truncate text-xs text-[var(--muted-foreground)]">{s.handle}</div>
              </div>
            </a>
          ))}
        </motion.div>
      </section>

      <SectionDivider />

      {/* HYPERFIXATIONS */}
      <section className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="mb-8 text-center text-xs font-bold uppercase tracking-[0.45em] text-[var(--lilac)]">
          ✦ Current Hyperfixations ✦
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {hyperfixations.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="glass group relative overflow-hidden rounded-2xl p-3 ring-1 ring-[var(--lilac)]/20 hover:ring-lilac"
            >
              <div className={`relative aspect-[3/4] rounded-xl bg-gradient-to-br ${h.grad} overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                <div className="absolute inset-0 grid place-items-center text-5xl drop-shadow-[0_4px_20px_rgba(216,109,255,0.6)]">
                  {h.emoji}
                </div>
                <div className="absolute right-2 top-2 text-[var(--lilac)] opacity-70">
                  <SparklesIcon className="h-3 w-3" />
                </div>
              </div>
              <div className="mt-2 flex items-center justify-center gap-1.5 text-xs font-semibold">
                <h.icon className="h-3.5 w-3.5 text-[var(--lilac)]" />
                {h.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* UGC + CREATOR */}
      <section className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong relative overflow-hidden rounded-[2rem] p-6 sm:p-10"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--glow)]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[var(--lavender)]/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-5xl italic sm:text-6xl">
                <span className="text-gradient">UGC</span>{" "}
                <span className="text-foreground/80">+ Creator</span>
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted-foreground)]">
                I create authentic, modern and engaging content designed for connection,
                storytelling and social media performance.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {services.map((s) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="glass flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm ring-1 ring-[var(--lilac)]/20"
                  >
                    <s.icon className="h-4 w-4 text-[var(--lilac)]" />
                    <span className="font-medium">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Collage */}
            <div className="grid grid-cols-3 grid-rows-3 gap-3">
              <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl ring-1 ring-[var(--lilac)]/30">
                <img src={heroPhoto} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="col-span-2 row-span-1 overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-500/40 to-violet-600/40 ring-1 ring-[var(--lilac)]/30">
                <div className="grid h-full place-items-center text-5xl">🎮</div>
              </div>
              <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/40 to-pink-500/30 ring-1 ring-[var(--lilac)]/30">
                <div className="grid h-full place-items-center text-4xl">💜</div>
              </div>
              <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/40 to-violet-500/30 ring-1 ring-[var(--lilac)]/30">
                <div className="grid h-full place-items-center text-4xl">🧸</div>
              </div>
              <div className="col-span-2 row-span-1 overflow-hidden rounded-2xl ring-1 ring-[var(--lilac)]/30">
                <img src={mascot} alt="" className="h-full w-full object-cover bg-white/5" />
              </div>
              <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/40 to-fuchsia-500/30 ring-1 ring-[var(--lilac)]/30">
                <div className="grid h-full place-items-center text-4xl">✨</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* PORTFOLIO */}
      <section id="portfolio" className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="mb-8 text-center text-xs font-bold uppercase tracking-[0.45em] text-[var(--lilac)]">
          ✦ Portfolio ✦
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {portfolio.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group glass relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-[var(--lilac)]/20 hover:ring-lilac"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.grad} opacity-70`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/40 transition-transform group-hover:scale-110">
                  <Play className="h-5 w-5 translate-x-[1px] fill-white text-white" />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <div className="text-[10px] uppercase tracking-widest text-[var(--lilac)]">{p.tag}</div>
                <div className="text-sm font-semibold">{p.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ring-1 ring-[var(--lilac)]/40 hover:glow-lilac transition-all"
          >
            View full portfolio
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <SectionDivider />

      {/* PARTNERSHIPS */}
      <section className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="mb-6 text-center text-xs font-bold uppercase tracking-[0.45em] text-[var(--lilac)]">
          ✦ Partnerships ✦
        </h2>
        <p className="mb-6 text-center text-xs italic text-[var(--muted-foreground)]">
          Dream brands &amp; future collaborations
        </p>
        <div className="glass-strong rounded-3xl p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((b) => (
              <motion.div
                key={b}
                whileHover={{ scale: 1.08 }}
                className="font-display text-center text-xl italic text-[var(--lilac)]/80 transition hover:text-[var(--lilac)]"
                style={{ textShadow: "0 0 20px rgba(216,109,255,0.3)" }}
              >
                {b}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] p-8 sm:p-12"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.75 0.18 320), oklch(0.65 0.22 305) 50%, oklch(0.55 0.25 325))",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
          <div className="relative grid items-center gap-6 sm:grid-cols-[auto_1fr_auto]">
            <div className="text-6xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]">👾</div>
            <div className="text-[#1a0626]">
              <h3 className="font-display text-3xl font-bold sm:text-4xl">
                Let's create something amazing together 💜
              </h3>
              <a
                href="mailto:by.arwenn.contato@gmail.com"
                className="mt-2 inline-block text-sm font-semibold underline underline-offset-4 hover:text-black"
              >
                by.arwenn.contato@gmail.com
              </a>
            </div>
            <div className="hidden sm:flex items-end gap-2 text-5xl">
              <span className="animate-float">🎮</span>
              <span className="animate-float" style={{ animationDelay: "1s" }}>⭐</span>
              <span className="animate-float" style={{ animationDelay: "2s" }}>🌙</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative mx-auto max-w-7xl px-5 pb-10 sm:px-8">
        <div className="flex flex-col items-center gap-3">
          <PixelHeart />
          <p className="text-xs text-[var(--muted-foreground)]">
            © 2026 Arwen. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
