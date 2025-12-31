"use client";

import { useFormStatus } from "react-dom";
import Button from "@/components/ui/Button";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type={pending ? "button" : "submit"}
      variant="primary"
      disable={pending}
    >
      {pending ? "در حال ارسال..." : "پست کردن"}
    </Button>
  );
};

export default SubmitButton;
