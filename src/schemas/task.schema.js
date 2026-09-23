import { z } from "zod";


// validacion para creacion de tareas
export const createTaskSchema = z.object({
    title: z.string({
        error: "Title is required"
    }),
    description: z.string({
        error: "Description is required"
    }),
    date: z.string().datetime().optional()
})
