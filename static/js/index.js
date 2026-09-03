function showFallback(media) {
  const fallbackId = media.dataset.fallback;
  if (!fallbackId) return;

  const fallback = document.getElementById(fallbackId);
  if (!fallback) return;

  media.hidden = true;
  fallback.hidden = false;
}

function prepareImageFallbacks() {
  document.querySelectorAll('img[data-fallback]').forEach((image) => {
    image.addEventListener('error', () => showFallback(image));
    if (image.complete && image.naturalWidth === 0) showFallback(image);
  });
}

function prepareVideoFallbacks() {
  document.querySelectorAll('video[data-fallback]').forEach((video) => {
    const fail = () => showFallback(video);
    video.addEventListener('error', fail);
    video.querySelectorAll('source').forEach((source) => source.addEventListener('error', fail));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  prepareImageFallbacks();
  prepareVideoFallbacks();
});
