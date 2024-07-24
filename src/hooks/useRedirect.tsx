import { useRouter } from "next/navigation";

export const useRedirect = () => {
  const router = useRouter();

  const redirect = (url: string) => router.push(url);

  return { redirect };
};

export default useRedirect;
