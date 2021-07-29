import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import AppLink from "@/components/Applink.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

createApp(App)
  .use(router)
  .component("AppLink", AppLink)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
