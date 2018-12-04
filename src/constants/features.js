export const features = {
  formatter: {
    url: "sql-formatter",
    display: "SQL Format",
    api: "pretty",
    actionString: "Pretty Print!",
    icon: 'fa fa-align-center',
    attributes: {
      onClick: "this.handleFormatClick"
    }
  },
  digest: {
    url: "sql-digest",
    display: "SQL Digest",
    api: "digest",
    actionString: "Generate Digest",
    icon: 'fa fa-gears'
  }
};
