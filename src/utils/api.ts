import { brand } from '../brand';

export type ContactPayload =
{type: 'newsletter';email: string;lang: string;} |
{
  type: 'contact';
  name: string;
  email: string;
  organization?: string;
  reason: string;
  message: string;
  consent: boolean;
  lang: string;
};

export async function postContact(payload: ContactPayload): Promise<void> {
  const res = await fetch(brand.contact.endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  // Mockup only: there is no backend yet. A missing endpoint (404/405) is treated as accepted
  // so the success state can be reviewed. Remove this branch once /api/contact exists.
  if (res.ok || res.status === 404 || res.status === 405) return;
  throw new Error(`Request failed with status ${res.status}`);
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}