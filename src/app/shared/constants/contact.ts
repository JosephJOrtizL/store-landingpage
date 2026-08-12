/**
 * Datos de contacto y redes.
 *
 * IMPORTANTE: WHATSAPP_NUMBER es un numero de prueba. Reemplazalo por el real
 * en formato internacional, sin "+", sin espacios y sin guiones.
 * Ejemplo Colombia: 57 + numero  ->  573001234567
 */
export const WHATSAPP_NUMBER = '573001234567';

export const WHATSAPP_MESSAGE =
  'Hola, vengo de la pagina web y quiero informacion sobre sus perfumes.';

export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export interface SocialLink {
  readonly key: 'instagram' | 'tiktok' | 'whatsapp';
  readonly label: string;
  readonly handle: string;
  readonly url: string;
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    key: 'instagram',
    label: 'Instagram',
    handle: '@PerfumesOficial',
    url: 'https://instagram.com/PerfumesOficial',
  },
  {
    key: 'tiktok',
    label: 'TikTok',
    handle: 'PerfumesOfficial',
    url: 'https://tiktok.com/@PerfumesOfficial',
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    handle: 'Escribenos',
    url: WHATSAPP_URL,
  },
];
