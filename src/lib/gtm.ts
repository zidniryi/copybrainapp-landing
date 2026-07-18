declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function pushToDataLayer(data: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}

export function trackDownload(params: {
  platform: string;
  file: string;
  label: string;
}) {
  pushToDataLayer({
    event: "download_click",
    download_platform: params.platform,
    download_file: params.file,
    download_label: params.label,
  });
}

export function trackDownloadCta(params: { location: string; label: string }) {
  pushToDataLayer({
    event: "download_cta_click",
    cta_location: params.location,
    cta_label: params.label,
  });
}
