import Image from "next/image";

import Link from "next/link";
import { auth } from "@/lib/auth";
import { userSignOut } from "@/actions/user/auth";
import { getUserPosts } from "@/actions/user/posts";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import dayjs from "@/lib/dayjs";
import { LogOut, Pencil } from "lucide-react";
import EditProfile from "./editProfile";
// import { updateProfile } from "@/actions/user/profile";

type SearchParams = {
  searchParams: { [key: string]: string | undefined };
};

const Profile = async ({ searchParams }: SearchParams) => {
  const session = await auth();
  const data = await getUserPosts();

  const param = await searchParams;

  const editProfile = param.profile === "edit";

  return (
    <section className="mb-16 relative px-4">
      <div className="w-full py-4">
        <div className="w-full">
          <form action={userSignOut}>
            <Button type="submit" variant="secondary">
              <LogOut className="mx-1" size={17} /> خروج
            </Button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col">
          {session?.user?.image && (
            <>
              <Image
                src={session?.user?.image}
                width={100}
                height={100}
                loading="eager"
                alt={`${session?.user?.name} s profile picture`}
                className="rounded-full my-2 border-2 border-stone-300"
              />
              <h3 className="text-xl font-medium">
                {data?.[0]?.author?.name ?? session?.user?.name ?? ""}
              </h3>
            </>
          )}
        </div>
        <Button variant="primary" className="text-sm mb-8">
          <Link href="/profile?profile=edit">ویرایش نام</Link>
        </Button>

        {editProfile && <EditProfile />}
      </div>
      <div className="grid grid-cols-1 gap-2 px-6">
        {data.length === 0 ? (
          <div className="w-full flex justify-center items-center flex-col">
            <h5 className="my-8 text-2xl">نوشته ای نداری!</h5>
            <Link href="/write">
              <Button>
                <Pencil size={16} className="ml-1" />
                از اینجا میتونی بنویسی
              </Button>
            </Link>
          </div>
        ) : (
          data.map((post) => (
            <Card key={post.id}>
              <Card.Head
                name={post.author.name ?? session?.user?.name ?? null}
                date={dayjs(post.createdAt).fromNow() ?? "نامشخص"}
                img={session?.user?.image ?? "/avatar.png"}
              />
              <Card.Body content={post.content} />
              <Card.Foot>
                <Card.Foot.Like
                  postId={post.id}
                  isLiked={post.likes.length > 0}
                  likes={post._count.likes ?? 0}
                />
                <Card.Foot.Delete postId={post.id} />
              </Card.Foot>
            </Card>
          ))
        )}
      </div>
    </section>
  );
};

export default Profile;
