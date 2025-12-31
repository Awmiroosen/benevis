import { addPost } from "@/actions/posts/add";
import Button from "@/components/ui/Button";
import SubmitButton from "@/app/write/ActionButton";

const Write = async () => {
  return (
    <section className="py-8">
      <div className="w-full flex items-center flex-col">
        <h3 className="text-xl font-semibold mb-6">نوشتن</h3>

        <form action={addPost}>
          <textarea
            name="content"
            placeholder="...هرچی تو ذهنت داری رو بنویس"
            required
            autoFocus
            maxLength={200}
            className="resize-none focus:outline-0 w-80 h-36 p-3 rounded-2xl overflow-hidden"
          />
          <SubmitButton />
        </form>
      </div>
    </section>
  );
};

export default Write;
