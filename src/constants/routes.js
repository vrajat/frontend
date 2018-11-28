import DbApp from "../components/DbApp";
import { dialects } from './dialects';
import { features } from './features';

export const routes = [];

for (const k of Object.keys(dialects)) {
  for (const f of dialects[k].features) {
    routes.push(
      {
        path: '/' + k.toLowerCase() + '-' + features[f],
        component: DbApp
      }
    )
  }
}

console.log(routes);
