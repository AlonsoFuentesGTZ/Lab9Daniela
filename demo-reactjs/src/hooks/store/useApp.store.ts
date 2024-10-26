import { create } from 'zustand';
import { sessionStore, SessionStore } from './session.store';


type AppStore = SessionStore;
export const useAppStore = create<AppStore>(set => ({
	...sessionStore(set),
}));