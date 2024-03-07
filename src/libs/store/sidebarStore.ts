import { RecoilState, atom } from "recoil";

export const SidebarStore: RecoilState<boolean> = atom<boolean>({
    default: false,
    key: "sidebar-store"
})