import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactMessage } from '../backend';

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitContactForm(data.name, data.email, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    },
  });
}

export function useGetMessages() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactMessage[]>({
    queryKey: ['messages'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMessages();
    },
    enabled: !!actor && !isFetching,
  });
}
