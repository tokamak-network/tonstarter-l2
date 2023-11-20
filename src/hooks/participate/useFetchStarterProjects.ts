import { useQuery } from "@tanstack/react-query";

const getList = async (queryParam: string | undefined | null) => {
  if (queryParam === undefined || queryParam === null) {
    return null;
  }
  const res = await fetch(queryParam, {
    method: "GET",
  });

  if (res.status !== 200) {
    throw new Error("starter project list error");
  }

  if (res.ok) {
    return res.json();
  }

  return undefined;
};


export function useFetchProjects () {
    const { isLoading, error, data, isError, isLoadingError } = useQuery({
        queryKey: [process.env.NEXT_PUBLIC_STARTER_API],
        queryFn: () => getList(`${process.env.NEXT_PUBLIC_STARTER_API}?chainId=1`),
      });

      if (data) {
        return data.datas
      }
     
      
}