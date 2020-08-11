const User = {
  template: `
    <div>
      User Component
      <router-view></router-view>
    </div>`,
};
const UserProfile = {template: '<p>User Profile Component</p>'};
const UserPost = {template: '<p>User Post Component</p>'};

const routes = [
  {
    path: '/user',
    component: User,
    children: [
      {
        path: 'posts',
        component: UserPost,
      },
      {
        path: 'profile',
        component: UserProfile,
      },
    ],
  },
];

export {routes};
