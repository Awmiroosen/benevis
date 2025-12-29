"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const getUserPosts = async () => {
  const session = await auth();

  if (!session) return [];

  const userId = session.user?.id;

  if (!userId) return [];

  return prisma.post.findMany({
    where: { authorId: userId },
    orderBy: { createdAt: "desc" },
    include: {
      author: true,
      _count: { select: { likes: true } },
      likes: {
        where: { userId },
        select: { userId: true },
      },
    },
  });
};
