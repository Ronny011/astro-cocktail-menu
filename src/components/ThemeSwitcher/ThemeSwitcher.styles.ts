export const themes = [
  { id: "classic-dark", label: "Classic Dark" },
  { id: "tropical", label: "Tropical" },
  { id: "elegant", label: "Elegant" },
  { id: "neon", label: "Neon" },
  { id: "rustic", label: "Rustic" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

export const navStyles: Record<
  ThemeId,
  { nav: string; button: string; activeButton: string }
> = {
  "classic-dark": {
    nav: "bg-zinc-900 border-b border-zinc-800",
    button: "text-zinc-400 hover:text-zinc-100",
    activeButton: "text-amber-400 border-b-2 border-amber-400",
  },
  tropical: {
    nav: "bg-emerald-600 shadow-lg",
    button: "text-emerald-100 hover:text-white",
    activeButton: "text-white border-b-2 border-yellow-300",
  },
  elegant: {
    nav: "bg-white border-b border-stone-200 shadow-sm",
    button: "text-stone-500 hover:text-stone-900",
    activeButton: "text-stone-900 border-b-2 border-rose-400",
  },
  neon: {
    nav: "bg-gray-900 border-b border-fuchsia-500/30",
    button: "text-gray-400 hover:text-fuchsia-300",
    activeButton: "text-fuchsia-400 border-b-2 border-fuchsia-400",
  },
  rustic: {
    nav: "bg-amber-900 shadow-md",
    button: "text-amber-200 hover:text-white",
    activeButton: "text-white border-b-2 border-orange-300",
  },
};
