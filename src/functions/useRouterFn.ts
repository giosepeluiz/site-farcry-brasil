import { useRouter } from "next/navigation";

export function useRouterFn() {
  const router = useRouter();
  const handleClick = (e: any) => {
    const { value } = e.target;
    e.preventDefault();
    return router.push(`/musicas/${value}`);
  };

  return {
    handleClick, // Retorne a função handleClick como parte de um objeto
  };
}
