// types.ts
import { z } from 'zod';
import axios from 'axios';
export const tourSchema = z.object({
    id: z.string(),
    name: z.string(),
    image: z.string(),
    info: z.string(),
    price: z.string(),
});

export type Tour = z.infer<typeof tourSchema>;

export const fetchTours = async (): Promise<Tour[]> => {
    const res = await axios.get('/api/react-tours-project')
    const result = tourSchema.array().safeParse(res.data);
    if (!result.success) throw new Error('Failed to parse tours');
    return result.data;
};
