import type { ReviewData } from '../../content.config';

export const createTag = (value: string) => {
  const tag = document.createElement('div');
  tag.className = `bg-[var(--tag-colour)] text-xs p-2 rounded-lg`;
  tag.textContent = value;
  return tag;
};

export const getTagsFromData = (data: ReviewData) => [...data.tags, (data.offering.year % 100).toString() + 'T' + data.offering.term, data.rating.toUpperCase() + ` Tier`];
