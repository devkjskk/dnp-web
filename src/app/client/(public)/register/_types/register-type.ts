import { z } from "zod";

import { RegisterSchema } from "../_schemas/register-schema";

export type RegisterType = z.infer<typeof RegisterSchema>;
