import { useSession } from "next-auth/react";
import {
  FormEvent,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { api } from "~/utils/api";
import { Button } from "./Button";
import { ProfileImage } from "./ProfileImage";

export function Assesment() {
  const session = useSession();
  const [inputValue, setInputValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>();
  const trpcUtils = api.useContext();




  if (session.status !== "authenticated") return null;
  // ツイートの削除
  // const createMutation = api.assessment.create.useMutation();


  // const handleClick = () => {
  //   createMutation.mutate({}, { onSuccess: () => window.location.reload() });

  // };
  return (
    <>

      {/* <Button onClick={handleClick} className="self-end">Tweet</Button> */}

    </>
  );
}
