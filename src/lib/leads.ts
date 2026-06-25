import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const PORTAL_ID = process.env.HUBSPOT_PORTAL_ID ?? "148776435";
const FORM_GUID = process.env.HUBSPOT_FORM_GUID ?? "ade970d7-1450-44f0-bb27-145a8a4f9478";

const LeadSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Formato de email no válido"),
  telefono: z.string().min(7, "Teléfono demasiado corto"),
  empresa: z.string().optional().default(""),
  interes: z.string().optional().default(""),
});

export type Lead = z.infer<typeof LeadSchema>;

export const saveLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => LeadSchema.parse(data))
  .handler(async ({ data }) => {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [
            { objectTypeId: "0-1", name: "firstname", value: data.nombre },
            { objectTypeId: "0-1", name: "email", value: data.email },
            { objectTypeId: "0-1", name: "phone", value: data.telefono },
            { objectTypeId: "0-2", name: "name", value: data.empresa },
            { objectTypeId: "0-1", name: "interest", value: data.interes },
          ],
        }),
      }
    );

    if (!res.ok) {
      const body = await res.text();
      console.error("HubSpot submission error:", body);
      throw new Error("Error al enviar el formulario");
    }

    return { ok: true };
  });
