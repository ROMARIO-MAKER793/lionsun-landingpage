/** Número comercial temporal. Revisar con el propietario antes de enero de 2027.
 * Para sustituirlo, editar únicamente whatsappNumber y actualizar la vigencia.
 * Formato internacional: solo dígitos, sin +, espacios ni prefijo 00.
 */
export const contact = {
  whatsappNumber: "51940977636",
  whatsappValidity: "Temporal, vigencia prevista hasta diciembre de 2026",
} as const;

export type WhatsAppInquiry =
  | { kind: "general" }
  | { kind: "wholesale" }
  | { kind: "category"; category: string }
  | { kind: "product"; name: string; code?: string };

function requiredText(value: string): string {
  const text = value.trim();
  if (!text) throw new Error("La consulta de WhatsApp requiere un nombre o categoría.");
  return text;
}

export function getWhatsAppMessage(inquiry: WhatsAppInquiry): string {
  switch (inquiry.kind) {
    case "general":
      return "Hola LIONSUN, quisiera información sobre sus medias y opciones de compra.";
    case "wholesale":
      return "Hola LIONSUN, quisiera una cotización mayorista e información sobre cantidades mínimas y presentaciones.";
    case "category":
      return `Hola LIONSUN, quisiera información sobre medias de la categoría ${requiredText(inquiry.category)}.`;
    case "product": {
      const code = inquiry.code?.trim();
      return `Hola LIONSUN, quisiera consultar por el producto ${requiredText(inquiry.name)}${code ? ` (código: ${code})` : ""}.`;
    }
  }
}

/** Enlace universal de WhatsApp para móvil y escritorio; no envía mensajes automáticamente. */
export function getWhatsAppLink(inquiry: WhatsAppInquiry = { kind: "general" }): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage(inquiry))}`;
}
