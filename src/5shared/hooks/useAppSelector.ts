import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../../0app/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
