import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
} from "node:fs";
import { join, dirname } from "node:path";

// Archivo JSON en <raíz del proyecto>/data/leads.json
const LEADS_FILE = join(process.cwd(), "data", "leads.json");

// Schema — replica las restricciones HTML5 pero ejecutado en el servidor
const LeadSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Formato de email no válido"),
  telefono: z.string().min(7, "Teléfono demasiado corto"),
  empresa: z.string().optional().default(""),
});

export type Lead = z.infer<typeof LeadSchema> & {
  id: number;
  createdAt: string;
};

function readLeads(): Lead[] {
  try {
    if (!existsSync(LEADS_FILE)) return [];
    return JSON.parse(readFileSync(LEADS_FILE, "utf-8")) as Lead[];
  } catch {
    return [];
  }
}

function writeLeads(leads: Lead[]): void {
  mkdirSync(dirname(LEADS_FILE), { recursive: true });
  writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

/** Guarda un lead nuevo y devuelve su id asignado */
export const saveLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => LeadSchema.parse(data))
  .handler(async ({ data }) => {
    const leads = readLeads();
    const newLead: Lead = {
      ...data,
      id: leads.length + 1,
      createdAt: new Date().toISOString(),
    };
    writeLeads([...leads, newLead]);
    return { ok: true, id: newLead.id };
  });

/** Devuelve todos los leads (útil para un panel de administración futuro) */
export const getLeads = createServerFn({ method: "GET" }).handler(async () =>
  readLeads(),
);
