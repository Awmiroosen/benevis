import { getPosts } from "@/actions/posts/get";
import { Card } from "@/components/ui/Card";
import dayjs from "@/lib/dayjs";
import Link from "next/link";
import { auth } from "@/lib/auth";

const Home = async () => {
  const posts = await getPosts();
  const session = await auth();

  return (
    <>
      <div className="mb-16 px-6">
        <div className="w-full my-8 flex justify-center items-center">
          <h1 className="text-xl font-bold mx-1">بنویس</h1>
          <span>
            <Link href="/about" className="text-sm underline">
              چیه؟
            </Link>
          </span>
        </div>
        <section className="grid grid-cols-1 gap-2">
          {posts.map((post) => (
            <Card key={post.id}>
              <Card.Head
                name={post.author.name}
                img={post.author.image ?? "/avatar.png"}
                date={dayjs(post.createdAt).fromNow() ?? "چندی پیش"}
              />
              <Card.Body content={post.content} />
              <Card.Foot>
                <Card.Foot.Like
                  postId={post.id}
                  isLiked={!session ? false : post.likes.length > 0}
                  likes={post._count.likes ?? 0}
                />
              </Card.Foot>
            </Card>
          ))}
        </section>
      </div>
    </>
  );
};

export default Home;
