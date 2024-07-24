import { z } from "zod";
import { TicketFormSchema } from "../_schemas/ticket-form-schema";

export type TicketFormType = z.infer<typeof TicketFormSchema>;
