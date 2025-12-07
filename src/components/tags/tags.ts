export const createTag = (value: string) => {
  const tag = document.createElement('div');
  tag.className = `bg-[var(--tag-colour)] text-xs p-2 rounded-lg`;
  tag.textContent = value;
  return tag;
};
