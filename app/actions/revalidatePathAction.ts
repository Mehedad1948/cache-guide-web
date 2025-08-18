'use server';

import { revalidatePath } from 'next/cache';

export async function revalidatePathAction(tag: string) {
  revalidatePath(tag);
}
