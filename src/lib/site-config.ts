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
  note?: string;
};

const RELEASE_BASE =
  "https://github.com/copybrainapp/copybrainapp-releases/releases/download/v1.0.5";

export const sourceRelease = {
  version: "1.0.5",
  href: "https://github.com/copybrainapp/copybrainapp-releases/archive/refs/tags/v1.0.5.zip",
};

export const downloads: PlatformDownload[] = [
  {
    id: "windows",
    name: "Windows",
    icon: "windows",
    supports: ["Windows 10", "Windows 11", "Intel", "ARM64"],
    version: "1.0.5",
    size: "3.8 MB",
    note: 'Windows may show a SmartScreen warning since the app isn\'t code-signed yet. Click "More info" → "Run anyway" to continue.',
    assets: [
      {
        label: "Download for Windows",
        file: "CopyBrain_1.0.5_x64-setup.exe",
        href: `${RELEASE_BASE}/CopyBrain_1.0.5_x64-setup.exe`,
        primary: true,
      },
      {
        label: "MSI Installer",
        file: "CopyBrain_1.0.5_x64_en-US.msi",
        href: `${RELEASE_BASE}/CopyBrain_1.0.5_x64_en-US.msi`,
      },
      {
        label: "Portable (.zip)",
        file: "CopyBrain_1.0.5_x64_portable.zip",
        href: "https://github.com/copybrainapp/copybrainapp-releases/releases/download/v1.0.5/CopyBrain_1.0.5_x64_portable.zip",
      },
    ],
  },
  {
    id: "macos",
    name: "macOS",
    icon: "apple",
    supports: ["Apple Silicon", "Intel"],
    version: "1.0.5",
    size: "12.7 MB",
    note: 'CopyBrain isn\'t notarized by an Apple Developer account yet, so macOS Gatekeeper will block it on first launch. Open System Settings → Privacy & Security and click "Open Anyway" to continue.',
    assets: [
      {
        label: "Download for macOS",
        file: "CopyBrain_1.0.5_universal.dmg",
        href: `${RELEASE_BASE}/CopyBrain_1.0.5_universal.dmg`,
        primary: true,
      },
      {
        label: "Universal (tar.gz)",
        file: "CopyBrain_universal.app.tar.gz",
        href: `${RELEASE_BASE}/CopyBrain_universal.app.tar.gz`,
      },
    ],
  },
  {
    id: "linux",
    name: "Linux",
    icon: "linux",
    supports: ["AppImage", "deb", "rpm"],
    version: "1.0.5",
    size: "80.8 MB",
    assets: [
      {
        label: "AppImage",
        file: "CopyBrain_1.0.5_amd64.AppImage",
        href: `${RELEASE_BASE}/CopyBrain_1.0.5_amd64.AppImage`,
        primary: true,
      },
      {
        label: ".deb",
        file: "CopyBrain_1.0.5_amd64.deb",
        href: `${RELEASE_BASE}/CopyBrain_1.0.5_amd64.deb`,
      },
      {
        label: ".rpm",
        file: "CopyBrain-1.0.5-1.x86_64.rpm",
        href: `${RELEASE_BASE}/CopyBrain-1.0.5-1.x86_64.rpm`,
      },
    ],
  },
];
