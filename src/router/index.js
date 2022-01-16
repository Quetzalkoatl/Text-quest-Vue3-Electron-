import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import StartLocation from "../views/StartLocation.vue";
import EscapingWithSitizens from "../views/EscapingWithSitizens.vue";
import GoOutOfTheHouse from "../views/GoOutOfTheHouse.vue";
import EscapingWithSoldiers from "../views/EscapingWithSoldiers.vue";
import EnterBarracks from "../views/EnterBarracks.vue";
import RunPastBarracks from "../views/RunPastBarracks.vue";
import GiveSword from "../views/GiveSword.vue";
import LeaveSword from "../views/LeaveSword.vue";
import GoToSewage from "../views/GoToSewage.vue";
import SewageToGates from "../views/SewageToGates.vue";
import WoundHealing from "../views/WoundHealing.vue";
import SewageEscaping from "../views/SewageEscaping.vue";
import StayHere from "../views/StayHere.vue";
import RunToForest from "../views/RunToForest.vue";
import Stray from "../views/Stray.vue";
import GatesDeath from "../views/GatesDeath.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/startlocation",
    name: "StartLocation",
    component: StartLocation,
  },
  {
    path: "/escapingwithsitizens",
    name: "EscapingWithSitizens",
    component: EscapingWithSitizens,
  },
  {
    path: "/gooutofthehouse",
    name: "GoOutOfTheHouse",
    component: GoOutOfTheHouse,
  },
  {
    path: "/escapingwithsoldiers",
    name: "EscapingWithSoldiers",
    component: EscapingWithSoldiers,
  },
  {
    path: "/enterbarracks",
    name: "EnterBarracks",
    component: EnterBarracks,
  },
  {
    path: "/runpastbarracks",
    name: "RunPastBarracks",
    component: RunPastBarracks,
  },
  {
    path: "/leavesword",
    name: "LeaveSword",
    component: LeaveSword,
  },
  {
    path: "/givesword",
    name: "GiveSword",
    component: GiveSword,
  },
  {
    path: "/gotosewage",
    name: "GoToSewage",
    component: GoToSewage,
  },
  {
    path: "/sewagetogates",
    name: "SewageToGates",
    component: SewageToGates,
  },
  {
    path: "/woundhealing",
    name: "WoundHealing",
    component: WoundHealing,
  },
  {
    path: "/sewageescaping",
    name: "SewageEscaping",
    component: SewageEscaping,
  },
  {
    path: "/stayhere",
    name: "StayHere",
    component: StayHere,
  },
  {
    path: "/runtoforest",
    name: "RunToForest",
    component: RunToForest,
  },
  {
    path: "/stray",
    name: "Stray",
    component: Stray,
  },
  {
    path: "/gatesdeath",
    name: "GatesDeath",
    component: GatesDeath,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
