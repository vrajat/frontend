import mixpanel from 'mixpanel-browser';
mixpanel.init('9ccc60d67f073b64cae7f26f11ba0a2d');

let env_check = process.env.NODE_ENV === 'production';

let actions = {
  identify: (id) => {
    if (env_check) mixpanel.identify(id);
  },
  alias: (id) => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  },
  people: {
    set: (props) => {
      if (env_check) mixpanel.people.set(props);
    },
    set_once: (props) => {
      if (env_check) mixpanel.people.set_once(props);
    },
  },
};

export let Mixpanel = actions;