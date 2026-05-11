import Alpine from "alpinejs";
import collapse from "@alpinejs/collapse";

const alpineModule = () => {
  window.Alpine = Alpine;

  Alpine.plugin(collapse);
  Alpine.start();
};

export default alpineModule;
