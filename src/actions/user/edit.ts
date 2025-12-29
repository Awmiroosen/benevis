"use server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const editProfile = async (formData: FormData) => {
  const session = await auth();

  if (!session) return;

  const userId = session.user?.id as string;

  if (!userId) return;

  const newName = formData.get("name")?.toString().trim();

  if (
    !newName ||
    newName == session.user?.name ||
    newName.length < 2 ||
    newName.length > 25
  )
    return;

  await prisma.user.update({
    where: { id: userId },
    data: { name: newName },
  });

  revalidatePath("/profle");
  revalidatePath("/");
  redirect("/profile");
};
