import QueryLayout from "./QueryLayout";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import UserGithubDetail from "@/components/query/UserGithubDetail";

export default function QueryExample() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get("https://api.github.com/users/godgodwinter")
        .then((res) => res.data),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <QueryLayout>
      <div>
        <UserGithubDetail user={data} />
      </div>
    </QueryLayout>
  );
}
