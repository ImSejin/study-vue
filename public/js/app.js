// 전역 컴포넌트를 정의한다.
Vue.component('GlobalComponent', {
  template: '<div>This is a global component.</div>'
});

// 지역 컴포넌트를 정의한다.
const LocalComponent = {
  template: '<div>LocalComponent: {{ index }}</div>',
  data() {
    return {
      index: 1,
    };
  },
};

// 다른 컴포넌트의 data를 참조하는 지역 컴포넌트를 정의한다.
const LocalComponent2 = {
  template: '<div>LocalComponent2: {{ index }}</div>',
  data: LocalComponent.data,
};

/**
 * 컴포넌트를 생성한다.
 */
new Vue({
  el: '#app',
  template: `
    <div class="full-screen center" style="text-shadow: 0 0 3em orangered; box-shadow: inset 0 0 30em 0 orangered;">
      <span>Created Vue instance!</span>
      <GlobalComponent></GlobalComponent>
      <LocalComponent></LocalComponent>
      <LocalComponent2></LocalComponent2>
    </div>`,
  components: {
    LocalComponent,
    LocalComponent2,
  },
});

/**
 * 컴포넌트를 생성한다.
 */
new Vue({
  el: '#sub-app',
  components: {
    LocalComponent2,
  },
});
