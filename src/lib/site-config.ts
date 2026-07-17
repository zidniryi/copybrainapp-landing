export const siteConfig = {
  name: "CopyBrain",
  url: "https://copybrainapp.xyz",
  tagline: "Your second brain for everything you copy.",
  description:
    "CopyBrain automatically remembers everything you copy and organizes it into a searchable timeline.",
  email: {
    support: "zidniryi123@gmail.com",
    hello: "zidniryi123@gmail.com",
    security: "zidniryi123@gmail.com",
  },
  nav: [
    { label: "Demo", href: "/#demo" },
    { label: "Features", href: "/#features" },
    { label: "Timeline", href: "/#timeline" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "Download", href: "/download" },
  ],
  social: {
    github: "https://github.com/copybrainapp",
    x: "https://x.com/copybrainapp",
  },
} as const;

export type DownloadAsset = {
  label: string;
  file: string;
  href: string;
  primary?: boolean;
};

export type PlatformDownload = {
  id: "windows" | "macos" | "linux";
  name: string;
  icon: "windows" | "apple" | "linux";
  supports: string[];
  assets: DownloadAsset[];
  version: string;
  size: string;
};

export const downloads: PlatformDownload[] = [
  {
    id: "windows",
    name: "Windows",
    icon: "windows",
    supports: ["Windows 10", "Windows 11", "Intel", "ARM64"],
    version: "2.4.1",
    size: "68 MB",
    assets: [
      {
        label: "Download for Windows",
        file: "CopyBrain-Setup.exe",
        href: "/downloads/CopyBrain-Setup.exe",
        primary: true,
      },
      {
        label: "Portable",
        file: "CopyBrain-Portable.zip",
        href: "/downloads/CopyBrain-Portable.zip",
      },
    ],
  },
  {
    id: "macos",
    name: "macOS",
    icon: "apple",
    supports: ["Apple Silicon", "Intel"],
    version: "2.4.1",
    size: "54 MB",
    assets: [
      {
        label: "Download for macOS",
        file: "CopyBrain.dmg",
        href: "/downloads/CopyBrain.dmg",
        primary: true,
      },
    ],
  },
  {
    id: "linux",
    name: "Linux",
    icon: "linux",
    supports: ["AppImage", "deb", "rpm", "tar.gz"],
    version: "2.4.1",
    size: "61 MB",
    assets: [
      {
        label: "AppImage",
        file: "CopyBrain-2.4.1.AppImage",
        href: "/downloads/CopyBrain-2.4.1.AppImage",
        primary: true,
      },
      {
        label: ".deb",
        file: "copybrain_2.4.1_amd64.deb",
        href: "/downloads/copybrain_2.4.1_amd64.deb",
      },
      {
        label: ".rpm",
        file: "copybrain-2.4.1.x86_64.rpm",
        href: "/downloads/copybrain-2.4.1.x86_64.rpm",
      },
      {
        label: ".tar.gz",
        file: "copybrain-2.4.1-linux.tar.gz",
        href: "/downloads/copybrain-2.4.1-linux.tar.gz",
      },
    ],
  },
];
