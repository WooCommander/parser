const { createApp, ref } = Vue;
const App = {
  setup() {
    const message = ref("Hello vue!");
    return {
      message,
    };
  },
};
createApp(App).mount("#app");
