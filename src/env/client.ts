import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    client: {
        NEXT_PUBLIC_BASE_URL: z.string().url(),
        NEXT_PUBLIC_MEDUSA_BASE_URL: z.string().url(),
        NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY: z.string(),
    },
    runtimeEnv: {
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
        NEXT_PUBLIC_MEDUSA_BASE_URL: process.env.NEXT_PUBLIC_MEDUSA_BASE_URL,
        NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY:
            process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
    },
});
