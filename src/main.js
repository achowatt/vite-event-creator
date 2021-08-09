import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
// import AppLink from "./components/Applink.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(far, fab);

createApp(App)
  .use(router)
  // .component("AppLink", AppLink)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
