"""Texturas de RondaTomasa (pared pintada y papel), en gris para multiplicar sobre el color de cada bloque.
Ruido fractal periódico generado en el dominio de la frecuencia, así la loseta encaja sin costuras.
Uso: python3 texturas.py <carpeta_salida>"""
import sys, numpy as np
from PIL import Image

def ruido(n, beta, semilla):
    r = np.random.default_rng(semilla)
    f = np.fft.fftfreq(n)[:, None] ** 2 + np.fft.fftfreq(n)[None, :] ** 2
    f[0, 0] = 1
    espectro = (r.normal(size=(n, n)) + 1j * r.normal(size=(n, n))) / f ** (beta / 2)
    espectro[0, 0] = 0
    c = np.real(np.fft.ifft2(espectro))
    return (c - c.min()) / (c.max() - c.min())

def trazos(n, semilla, cuantos, largo):
    """Pinceladas horizontales suaves de rodillo (periódicas en x e y)."""
    r = np.random.default_rng(semilla)
    m = np.zeros((n, n))
    for _ in range(cuantos):
        y = r.integers(0, n); x = r.integers(0, n); l = r.integers(largo // 2, largo); g = r.integers(6, 22)
        ys = (np.arange(y - g, y + g)) % n; xs = (np.arange(x, x + l)) % n
        perfil = np.exp(-((np.arange(-g, g)) / (g * .55)) ** 2)[:, None]
        m[np.ix_(ys, xs)] += perfil * r.uniform(.25, 1)
    return m / (m.max() or 1)

def guardar(arr, ruta, lo, hi):
    img = Image.fromarray((lo + (hi - lo) * arr).clip(0, 255).astype('uint8'), 'L')
    img.save(ruta, quality=70, method=6)

salida = sys.argv[1]
n = 512
# Pared pintada: manchas grandes + grano + rodillo
pared = .55 * ruido(n, 2.6, 7) + .25 * ruido(n, 1.2, 8) + .2 * (1 - trazos(n, 9, 140, 260))
pared = (pared - pared.min()) / (pared.max() - pared.min())
guardar(pared, f'{salida}/pared.webp', 220, 255)  # mínimo alto: el texto negro sobre turquesa debe seguir pasando AA
# Papel: grano fino y alguna fibra
papel = .7 * ruido(n, 1.0, 11) + .3 * ruido(n, 2.2, 12)
papel = (papel - papel.min()) / (papel.max() - papel.min())
guardar(papel, f'{salida}/papel.webp', 226, 255)
print('ok')
