import type { Children } from "@/types/global";
import { likePost } from "@/actions/posts/like";

import { deletePost } from "@/actions/posts/delete";

import Image from "next/image";
import { Heart, X } from "lucide-react";
import Button from "./Button";

// card component designed by Compound Components Pattern!

const CardComponent = ({ children }: Children) => {
  return (
    <article className="mx-2 my-0.5 p-4 rounded-2xl flex flex-col backdrop-blur-sm border border-stone-300 dark:border-stone-800">
      {children}
    </article>
  );
};

// Card Head Section Component

type Head = {
  name: string | null;
  img: string;
  date: string | null;
};

const Head = ({ name, img = "/avatar.png", date }: Head) => {
  return (
    <div className="flex items-center mb-4 select-none">
      <div className="w-3/4 flex items-center overflow-hidden">
        <Image
          src={img}
          alt={`${name}'s profile picture`}
          width={25}
          height={25}
          className="rounded-full"
        />
        <h4 className="mx-2 font-semibold">{name}</h4>
      </div>
      <div className="w-1/4 flex items-center justify-center">
        <span className="text-[0.65rem] font-light text-stone-700 dark:text-stone-300">
          {date}
        </span>
      </div>
    </div>
  );
};

// Card Body Section Component

type Body = {
  content: string | null;
};

const Body = ({ content }: Body) => {
  return (
    <div className="px-1.5 my-1">
      <p className="text-[0.95rem]">{content}</p>
    </div>
  );
};

// Card Footer Section Component

const Footer = ({ children }: Children) => {
  return <div className="flex mt-4">{children}</div>;
};

// Card Like Section Component

type LikeType = {
  postId: string;
  isLiked: boolean;
  likes: number;
};

const Like = ({ postId, isLiked, likes = 0 }: LikeType) => {
  return (
    <form
      action={likePost}
      className="w-1/2 h-full flex items-center justify-start"
    >
      <input type="hidden" name="postId" value={postId} />
      <button type="submit">
        {isLiked ? (
          <Heart
            fill="red"
            strokeWidth={0}
            className="transition-all duration-500 cursor-pointer"
            size={20}
          />
        ) : (
          <Heart
            className="transition-all duration-500 cursor-pointer"
            size={20}
          />
        )}
        <span className="text-sm select-none font-semibold">{likes}</span>
      </button>
    </form>
  );
};

// Card Delete Section Component

type DeleteType = {
  postId: string;
};

const Delete = ({ postId }: DeleteType) => {
  return (
    <form action={deletePost} className="w-1/2 flex items-center justify-end">
      <input type="hidden" name="postId" value={postId} />
      <Button type="submit" variant="danger" className="flex items-center">
        <span className="text-xs">حذف</span>
        <X size={14} />
      </Button>
    </form>
  );
};

// Exporting Card and sub Components as Object

export const Card = Object.assign(CardComponent, {
  Head,
  Body,
  Foot: Object.assign(Footer, {
    Like,
    Delete,
  }),
});

export default CardComponent;
