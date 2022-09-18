import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";

document.querySelectorAll(".parallaxcontainer").forEach((parallaxcontainer) => {
  const elementderskalparallaxes = parallaxcontainer.querySelector("div");
  scroll(animate(elementderskalparallaxes, { y: [10, 500] }), {
    target: elementderskalparallaxes,
  });
});
