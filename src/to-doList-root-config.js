import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@to-doList/spa-app-nav",
  () => System.import("@to-doList/spa-app-nav"),
  isActive.nav,
  { domElement: document.getElementById('nav-container') }
);

registerApplication(
  "@to-doList/spa-app-page1",
  () => System.import("@to-doList/spa-app-page1"),
  isActive.page1,
  { domElement: document.getElementById('page1-container') }
);

registerApplication(
  "@to-doList/spa-app-page2",
  () => System.import("@to-doList/spa-app-page2"),
  isActive.page2,
  { domElement: document.getElementById('page2-container') }
);

registerApplication(
  "@to-doList/spa-app-page3",
  () => System.import("@to-doList/spa-app-page3"),
  isActive.page3,
  { domElement: document.getElementById('page3-container') }
);

start();