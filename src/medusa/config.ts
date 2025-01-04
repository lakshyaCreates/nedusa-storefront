import Medusa from "@medusajs/js-sdk";

import { env } from "@/env/client";

export const medusa = new Medusa({
    baseUrl: env.NEXT_PUBLIC_MEDUSA_BASE_URL,
    publishableKey: env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
    debug: true,
});
