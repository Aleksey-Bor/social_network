import { ProfileType } from "./../types";
import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    // "API-KEY": "428e60ad-e035-4b79-b7c9-fde0ee9d7bf7", //для деплоя использовать этот ключ
    "API-KEY": "5eee8c56-cc46-474a-8d87-c0496c3ac09f", //для локал сервера
  },
});

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  followToUser(userId: number) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },

  unFollowToUser(userId: number) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },

  getProfile(userId: number) {
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`);
  },

  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },

  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status });
  },

  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile);
  },
};

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10,
}

type MeResponseType = {
  data: { id: number; email: string; login: string };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};

type LoginResponseType = {
  data: { userId: number };
  resultCode: ResultCodesEnum | ResultCodeForCaptchaEnum;
  messages: Array<string>;
};

export const authAPI = {
  async me() {
    const res = await instance.get<MeResponseType>(`auth/me`);
    return res.data;
  },
  async login(
    email: string,
    password: string,
    rememberMe: boolean = false,
    captcha: null | string = null
  ) {
    const res = await instance.post<LoginResponseType>(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
    return res.data;
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};

//What is response authAPI.me()? You can look
// authAPI.me().then((res: AxiosResponse<any>) => res.data);
