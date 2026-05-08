const CAPTCHA_TTL_MS = 5 * 60 * 1000;
const MAX_CAPTCHAS = 200;

const store = globalThis.__simpleCaptchaStore ?? new Map();
globalThis.__simpleCaptchaStore = store;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cleanupExpired() {
  const now = Date.now();
  for (const [id, item] of store.entries()) {
    if (item.expiresAt <= now) {
      store.delete(id);
    }
  }
  if (store.size <= MAX_CAPTCHAS) return;
  const entries = Array.from(store.entries()).sort(
    (a, b) => a[1].createdAt - b[1].createdAt
  );
  while (store.size > MAX_CAPTCHAS && entries.length) {
    const [id] = entries.shift();
    store.delete(id);
  }
}

export function createCaptchaChallenge() {
  cleanupExpired();
  const a = randomInt(1, 9);
  const b = randomInt(1, 9);
  const id = crypto.randomUUID();
  const answer = String(a + b);

  store.set(id, {
    answer,
    createdAt: Date.now(),
    expiresAt: Date.now() + CAPTCHA_TTL_MS,
  });

  return {
    captchaId: id,
    prompt: `What is ${a} + ${b}?`,
  };
}

export function verifyCaptchaChallenge(captchaId, captchaAnswer) {
  cleanupExpired();
  if (typeof captchaId !== "string" || typeof captchaAnswer !== "string") return false;

  const challenge = store.get(captchaId);
  if (!challenge) return false;

  store.delete(captchaId);
  return captchaAnswer.trim() === challenge.answer;
}
