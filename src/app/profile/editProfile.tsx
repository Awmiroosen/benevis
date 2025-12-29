import Link from "next/link";
import Button from "@/components/ui/Button";
import { editProfile } from "@/actions/user/edit";
import { X } from "lucide-react";

const EditProfile = () => {
  return (
    <article className="my-4 p-2 rounded-2xl border border-stone-600/15">
      <div className="flex h-1/6 justify-center relative">
        <Link href="/profile" className="absolute right-2">
          <Button variant="danger">
            <X size={14} />
          </Button>
        </Link>
        <h4>ویرایش نام</h4>
      </div>

      <form
        action={editProfile}
        className="flex flex-col justify-center w-full h-5/6 p-2 my-3"
      >
        <div className="h-5/6">
          <input
            type="text"
            name="name"
            placeholder="نام جدید"
            className="focus:outline-0"
            maxLength={25}
          />
        </div>

        <div className="h-1/6 flex justify-center items-end">
          <Button type="submit" className="text-sm">
            ذخیره
          </Button>
        </div>
      </form>
    </article>
  );
};

export default EditProfile;
