import { useContext } from 'react';
import { ContextSearchParams } from '../providers/SearchProvider';

export const useSearchGoal = () => useContext(ContextSearchParams);
