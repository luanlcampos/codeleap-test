import { removeUsername, setUsername } from "../redux/user"
import store from "../redux/store";

export const logout = () => {
    store.dispatch(removeUsername());
};

export const login = (username) => {
    store.dispatch(setUsername(username));
}