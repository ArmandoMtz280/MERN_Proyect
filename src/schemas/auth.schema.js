/**
 * Desde aqui se van a validar lo que llegue del front
 */


import { z } from 'zod'; // se importa Zod para hacer las validaciones que llegan al back


export const registerSchema = z.object({
    username: z.string({ // es el tipo de dato
        error: 'Username is required' // es el error que manda en caso de no cumplirse 
    }),
    email: z.email({
        error: 'Invalid email'
    }),
    password: z.string({
        error: 'Password is required'
    })
    .min(6, {
        error: 'Password must be at least 6 characters'
    })
})

export const loginSchema = z.object({
    email: z.email({
        error: 'Invalid email'
    }),
    password: z.string({
        error: 'Password is required'
    })
    .min(6,{
       error: 'Password must be least 6 character'
    })
})