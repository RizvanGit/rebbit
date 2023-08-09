"use client";
import { useState, FC, HTMLAttributes } from "react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { Icons } from "../icons/Icons";
import { useToast } from "@/hooks/use-toast";

interface IUserAuthFormProps extends HTMLAttributes<HTMLDivElement> { }

const UserAuthForm: FC<IUserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      throw new Error("SOMETHING HAPPENED");
      await signIn("google");
    } catch (error) {
      let errorMessage = "unknown";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast({
        title: "Error",
        description: `There was an error logging in with Google. Error message: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
        onClick={loginWithGoogle}
        isLoading={isLoading}
        size="sm"
        className="w-full"
      >
        {isLoading ? null : <Icons.google className="w-4 h-4" />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
