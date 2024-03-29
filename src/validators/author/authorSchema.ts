import {z} from "zod";

export const createAuthorSchema = z.object({
    name: z.string({
        required_error: "Meno nesmie byť prázdne"
    }),

    lastName: z.string({
        required_error: "Priezvisko nesmie byť prázdne"
    }),

    image: z.string({
        required_error: "Fotka nemôže byť prázdna"
    }),

    fullName: z.string({
        required_error: "Autorove celé meno nesmie byť prázdne",
    }),

    birthYear: z.number({
        required_error: "Dátum narodenia nesmie byť prázdny" 
    }),

    isAlive: z.boolean({
        required_error: "isAlive musí byť true alebo false"
    }).optional(),

    country: z.string({
        required_error: "Krajina pôvodu nesmie byť prázdna"
    }),

    description: z.string({
        required_error: "Popis k autorovi nesmie byť prázdny"
    }),

    litPeriod: z.string({
        required_error: "Literárne obdobie nesmie byť prázdne"
    })
});

export type createAuthorType = z.infer<typeof createAuthorSchema>;