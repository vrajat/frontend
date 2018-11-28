import { features } from './features';

export const dialects = {
  mysql: {
    name: "MYSQL",
    features: ["formatter", "digest"]
  },
  redshift: {
    name: "REDSHIFT",
    features: ["formatter", "digest"]
  },
  oracle:{
    name: "ORACLE",
    features: ["formatter", "digest"]
  }
};

export function default_url(k) {
  return "/" + dialects[k].name.toLowerCase() + "-" +
    features[dialects[k].features[0]];
}

export function all_urls(k) {
  return dialects[k].map((f) => {
    return "/" + dialects[k].name.toLowerCase() + "-" +
      features[f];
  })
}
