import { addProblem } from '@/app/api/problem';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateProblem = () => {
  const queryClient = useQueryClient();

  const createProblem = useMutation({
    mutationFn: addProblem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allProblems'] });
    },
    onError: (error) => {
      if (error instanceof Error) return;
    },
  });

  return createProblem;
};
