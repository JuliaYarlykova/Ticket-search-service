import { createRouter, createWebHistory } from "vue-router";
import PageCardTicket from "./pages/PageCardTicket.vue";
import PageForm from "./pages/PageForm.vue";
import PageMain from "./pages/PageMain.vue";

import { createPinia, defineStore } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

const pinia = createPinia();

export const useTicketStore = defineStore("ticket", {
  state: () => ({
    id: -1,
    tickets: {},
    showTickets: {},
    sortTickets: [],
    checks: [false, false, false, false],
  }),
  actions: {
    sort(key, elem) {
      if (elem.checked) {
        this.checks[key] = true;
        for (const ticket of this.tickets) {
          if (
            ticket.stops.length === key &&
            this.sortTickets.indexOf(ticket) < 0
          ) {
            this.sortTickets.push(ticket);
          }
        }
      } else {
        this.checks[key] = false;
        for (const ticket of this.tickets) {
          if (ticket.stops.length === key) {
            const index = this.sortTickets.indexOf(ticket);
            this.sortTickets.splice(index, 1);
          }
        }
      }
      this.showTickets = this.sortTickets;
      if (
        !this.checks[0] &&
        !this.checks[1] &&
        !this.checks[2] &&
        !this.checks[3]
      ) {
        this.showTickets = this.tickets;
        return;
      }
    },
    sortCheap() {
      this.showTickets.sort(function (a, b) {
        if (+a.costs > +b.costs) {
          return 1;
        }
        if (+a.costs < +b.costs) {
          return -1;
        }
        return 0;
      });
    },
    sortFast() {
      this.showTickets.sort(function (a, b) {
        const a1 =
          +a.waytime.split("T")[1].slice(0, -8).split(":")[0] * 60 +
          +a.waytime.split("T")[1].slice(0, -8).split(":")[1];
        const b1 =
          +b.waytime.split("T")[1].slice(0, -8).split(":")[0] * 60 +
          +b.waytime.split("T")[1].slice(0, -8).split(":")[1];
        if (a1 > b1) {
          return 1;
        }
        if (a1 < b1) {
          return -1;
        }
        return 0;
      });
    },
  },
});

export const useShowStore = defineStore("show", {
  state: () => ({ show: false }),
});

const routes = [
  { path: "/", component: PageMain },
  { path: "/detailes/:id", name: "intoTicket", component: PageCardTicket },
  { path: "/form", component: PageForm, name: "intoForm" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(pinia).use(router).mount("#app");
