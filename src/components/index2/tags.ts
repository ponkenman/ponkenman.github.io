import { pink } from "./colours";

export const createTag = (value: string) => {
  const tag = document.createElement("div");
  tag.className = `${pink.bg} text-sm px-2 py-1 rounded-full`;
  tag.textContent = value;
  return tag;
}