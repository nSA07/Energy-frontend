import Cookies from "js-cookie";

export const getToken = () => {
    const token = Cookies.get("token");
    return token || null;
}

export const setToken = (token: string) => {
    Cookies.set("token", token, { expires: 30 });
}

export const removeToken = () => {
    Cookies.remove("token");
}