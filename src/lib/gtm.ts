declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function trackDownload(params: {
  platform: string;
  file: string;
  label: string;
}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "download_click",
    download_platform: params.platform,
    download_file: params.file,
    download_label: params.label,
  });
}
