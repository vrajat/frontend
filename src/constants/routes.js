import {dialects, features } from ".";

export const routes = [];


for (const k of Object.keys(dialects)) {
  for (const f of dialects[k].features) {
    routes.push({
      path: '/' + dialects[k].name.toLowerCase() + '/' + features[f].url,
      exact: true,
      name: dialects[k].display,
      component: features[f].component
    })
  }
}
