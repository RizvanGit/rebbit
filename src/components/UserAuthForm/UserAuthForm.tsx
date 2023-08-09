"use client";
import { useState, FC, HTMLAttributes } from "react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { Icons } from "../icons/Icons";

interface IUserAuthFormProps extends HTMLAttributes<HTMLDivElement> { }
const UserAuthForm: FC<IUserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoodle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      //toast notification
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
        onClick={loginWithGoodle}
        isLoading={isLoading}
        size="sm"
        className="w-full"
      >
        {isLoading ? "null" : <Icons.google className="w-4 h-4" />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
