"use server";

import { signIn, signOut } from "@/lib/auth";

export const userSignOut = async () => {
  return await signOut();
};
export const userSignIn = async () => {
  return await signIn();
};
