import { IAppState } from "../reducers";
import { Auth } from "../../entities/Auth";

export const getAuth = (state: IAppState): Auth | null => state.status.auth ? Auth.deserialize(state.status.auth) : null
