const Header = {template: '<div>This place is header</div>'};
const Body = {template: '<div>This place is body</div>'};
const Footer = {template: '<div>This place is footer</div>'};

const LoginHeader = {template: '<div>This place is header for login</div>'};
const LoginBody = {template: '<div>This place is body for login</div>'};
const LoginFooter = {template: '<div>This place is footer for login</div>'};

const routes = [
  {
    path: '/',
    components: {
      default: Body, // For unnamed router-view.
      header: Header,
      footer: Footer,
    }
  },
  {
    path: '/login',
    components: {
      default: LoginBody, // For unnamed router-view.
      header: LoginHeader,
      footer: LoginFooter,
    }
  }
];

export {routes};
