import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Game from './components/Game';

const routes = [
  {
    path: "/",
    component: SignIn
  },
  {
    path: "/sign-in",
    component: SignIn
  },
  {
    path: "/sign-up",
    component: SignUp
  },
  {
    path: "/game",
    component: Game
  }
];
export default routes;