import type { ReviewData } from "../../content.config";
import { closeModal, openModal } from "../modal/modal";

export const openCard = (b: Element) => {
  const container = b.closest(".tier-container") as HTMLElement;
  const card = container.querySelector(".review-card") as HTMLElement;
  if (card.style.display == "none") {
    card.style.display = "flex";

    const media = window.matchMedia("(width >= 64rem)");
    media.addEventListener("change", () => closeCard(b), {once: true});

    // Animations
    if (media.matches) {
      card.style.animation = "0.3s ease-in fadeIn, 0.3s ease-in downIn";
    } else {
      card.style.animation = "0.3s ease-in fadeIn, 0.3s ease-in-out leftIn";
      document.body.style = "overflow: hidden;";

      openModal(b);
    }

    card.onanimationend = () => {
      card.style.animation = "";
      card.dataset.visible = "true";
    };
  }

  const data = JSON.parse((b as HTMLElement).dataset.review as string) as ReviewData;

  const title = card.querySelector(".review-longtitle")! as HTMLElement;
  title.textContent = data.longTitle;

  const id = card.querySelector(".review-course-id") as HTMLElement;
  id.textContent = data.id;

  const tagbar = card.querySelector("review-tagbar") as HTMLElement;
  tagbar.setAttribute("tags", JSON.stringify(data.tags));

  const categories = card.querySelectorAll("rating-category");
  categories.forEach(c => c.setAttribute("rating", data[c.getAttribute('key') as keyof ReviewData] as string));

  const link = card.querySelector(".review-link") as HTMLAnchorElement;
  link.href = `/reviews/${data.id.toLowerCase()}`;
  link.title=`${data.id} review`;

  if (card.dataset.visible == "true") {
    /*
    card.querySelectorAll(".review-dynamic")!.forEach(e => {
      let elem = e as HTMLElement;
      elem.style.animation = "0.5s ease-in-out fadeIn";
      elem.onanimationend = () => {
        elem.style.animation = "";
      }
    });
    */
  }

  const cb = b.closest("colour-button") as HTMLElement;
  cb.setAttribute("active", "true");
  (container.querySelectorAll("colour-button") as NodeListOf<HTMLElement>).forEach(c => {
    if (c !== cb) {
      c.setAttribute("active", "false");
    }
  });
}

export const closeCard = (b: Element) => {
  const container = b.closest(".tier-container") as HTMLElement;
  const card = container.querySelector(".review-card") as HTMLElement;

  closeModal();

  // Animations
  if (window.matchMedia("(width >= 64rem)").matches) {
    card.style.animation = "0.3s ease-out fadeOut, 0.3s ease-out upOut";
  } else {
    card.style.animation = "0.3s ease-out fadeOut, 0.5s ease-in rightOut";
  }
  
  card.onanimationend = () => {
    card.style.display = "none";
    card.style.animation = "";
    document.body.style = "";
  };
  card.dataset.visible = "false";

  container.querySelectorAll("colour-button").forEach(c => c.setAttribute("active", "false"));
}