// sw-header-main-footer.js
import {
  createStarwindElement,
  defineElement,
} from "./starwind.elements.util.js";

const SwHeaderMainFooterLayout = createStarwindElement({
  min: { var: "--sw-hmf-min", type: "raw" },
  pad: { var: "--sw-hmf-pad", type: "space" },
  gap: { var: "--sw-hmf-gap", type: "space" },

  "header-min": { var: "--sw-hmf-header-min", type: "raw" },
  "header-max": { var: "--sw-hmf-header-max", type: "raw" },
  "footer-min": { var: "--sw-hmf-footer-min", type: "raw" },
  "footer-max": { var: "--sw-hmf-footer-max", type: "raw" },
});

export function defineSwHeaderMainFooter() {
  defineElement("sw-header-main-footer", SwHeaderMainFooterLayout);
}
