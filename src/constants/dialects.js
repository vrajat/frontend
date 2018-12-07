import { features } from './features';

export const dialects = {
  mysql: {
    name: "MYSQL",
    display: "MySQL",
    features: ["formatter", "digest", "slow_log"]
  },
  redshift: {
    name: "REDSHIFT",
    display: "AWS Redshift",
    features: ["formatter", "digest"]
  },
  postgres:{
    name: "POSTGRES",
    display: "PostgreSQL",
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
