import { dialects } from './dialects';
import { features } from './features';

export const navigation = {
  items: []
};


for (const k of Object.keys(dialects)) {
  let r = {
    name: dialects[k].display,
    url: '/' + dialects[k].name.toLowerCase(),
    icon: 'fa fa-database',
    children: [],
    attributes: {
      onClick: "this.handleDialectClick"
    }
  };
  for (const f of dialects[k].features) {
    r.children.push(
      {
        dialect: dialects[k].name.toLowerCase(),
        id: f,
        name: features[f].display,
        url: '/' + dialects[k].name.toLowerCase() + '/' + features[f].url,
        icon: features[f].icon
      }
    )
  }
  navigation.items.push(r);
}
