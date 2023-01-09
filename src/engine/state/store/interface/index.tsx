import { atom } from "recoil";

export const CAREER_PATH_SLIDER = atom<number>({
  key: "career_path_slider",
  default: 0,
});

export const WINDOW_SCROLL = atom<Event>({
  key: "window_is_scrolled",
  default: undefined,
});

export const ME_EXPERIENCE = "2";

export const SOCIAL_ICONS_LINKS = [
  {
    key: "tg",
    href: "https://t.me/d_maximyuk",
    icon: <span>TG</span>,
  },
  {
    key: "vk",
    href: "https://vk.com/d_maximyuk",
    icon: <span>VK</span>,
  },
  {
    key: "gh",
    href: "https://github.com/dmaximyuk",
    icon: <span>GH</span>,
  },
  {
    key: "hh",
    href: "https://hh.ru/resume/f5f7a20bff0b2688420039ed1f3069454f6135",
    icon: <span>HH</span>,
  },
];
