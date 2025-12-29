"use server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addPost = async (formData: FormData) => {
  const session = await auth();

  if (!session) return;

  if (!session.user?.id) return;

  const content = formData.get("content")?.toString() ?? null;

  if (!content) return;

  if (content?.length > 250) return;

  await prisma.post.create({
    data: {
      content,
      authorId: session.user?.id,
    },
  });

  revalidatePath("/");
  redirect("/");
};
