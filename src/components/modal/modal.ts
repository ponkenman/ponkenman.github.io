import { closeCard } from "../index2/card";

export const openModal = (b: Element) => {
  const backdrop = document.querySelector("#modal-backdrop") as HTMLElement;
  backdrop.style.display = "block";
  backdrop.style.animation = "0.3s ease-in fadeInBackdrop";

  backdrop.onanimationend = () => {
    backdrop.style.animation = "";
    backdrop.addEventListener("click", () => closeCard(b), { once: true });
  }

}

export const closeModal = () => {
  const backdrop = document.querySelector("#modal-backdrop") as HTMLElement;
  backdrop.style.animation = "0.3s ease-in-out fadeOutBackdrop";
  
  backdrop.onanimationend = () => {
    backdrop.style.animation = "";
    backdrop.style = "display: hidden;";
  }
}