import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      toast.success(
        "Account successfully created. Verification link has been sent to the provided email address",
        { duration: 9000 }
      );
    },
  });

  return { signUp, isPending };
}
