"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const deletePost = async (formData: FormData) => {
  const session = await auth();

  if (!session) return;

  const userId = session.user?.id;

  if (!userId) return;

  const postId = formData.get("postId")?.toString();

  if (!postId) return;

  await prisma.post.delete({ where: { id: postId, authorId: userId } });

  revalidatePath("/profile");
};
