import { Module } from "vuex";
import { GlobalDataProps } from "./index";

export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

// Module<S, R>
// S 表示当前模块的类型
// R 表示全局模块的类型
const user: Module<UserProps, GlobalDataProps> = {
  mutations: {
    login(state) {
      state.isLogin = true;
      state.userName = "Gopher";
    },
    logout(state) {
      state.isLogin = false;
    },
  },
};

export default user;
