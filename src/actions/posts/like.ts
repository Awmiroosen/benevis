"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const likePost = async (formData: FormData) => {
  const session = await auth();

  if (!session) redirect("/login");
  if (!session.user) return;

  const userId = session.user.id as string;

  const postId = formData.get("postId")?.toString();

  if (!postId) return;

  const isLiked = await prisma.like.findFirst({ where: { postId, userId } });

  if (isLiked) {
    await prisma.like.delete({ where: { userId_postId: { userId, postId } } });
  } else {
    await prisma.like.create({ data: { userId, postId } });
  }

  revalidatePath("/");
};
