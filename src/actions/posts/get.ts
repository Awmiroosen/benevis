"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const getPosts = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  const data = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      author: true,
      _count: { select: { likes: true } },
      likes: { where: { userId }, take: 1, select: { userId: true } },
    },
  });

  return data;
};
