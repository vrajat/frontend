import SqlText from "../components/SqlText";
import DefaultLayout from "../containers/DefaultLayout";
import {dialects} from "./dialects";

export const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
];


for (const k of Object.keys(dialects)) {
  routes.push({
    path: '/' + dialects[k].name.toLowerCase(),
    exact: true,
    name: dialects[k].display,
    component: SqlText
  })
}
