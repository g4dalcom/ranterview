import { patchProblemCondition } from '@/app/api/problem';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateProblemCondition = () => {
  const queryClient = useQueryClient();

  const updateProblemCondition = useMutation({
    mutationFn: patchProblemCondition,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allProblems'] });
    },
    onError: (error) => {
      if (error instanceof Error) return;
    },
  });

  return updateProblemCondition;
};
