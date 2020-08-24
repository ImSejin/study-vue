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
  data: LocalComponent.data, // `LocalComponent.data().index`로 참조할 수 없다. ∵ 컴포넌트 고유의 스코프 때문
};

/**
 * 컴포넌트를 생성한다.
 */
new Vue({
  el: '#app',
  template: `
    <div class="full-screen center">
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
