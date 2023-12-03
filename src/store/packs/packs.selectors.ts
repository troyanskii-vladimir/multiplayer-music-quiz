import { State } from '../../types/state';
import { Pack } from '../../types/pack';


export const getPacks = (state: State): Pack[] => state.Packs.packs;
