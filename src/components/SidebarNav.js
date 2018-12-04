import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem, NavLink as RsNavLink } from 'reactstrap';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { AppSidebarNav } from "@coreui/react";
import { features, dialects } from '../constants';
import { setDialect, setFeature } from "../reducers/actions";

import { connect } from 'react-redux';
import { Mixpanel } from "../lib/MixPanel";

class SidebarNav extends AppSidebarNav {
  handleSelect(feature, dialect) {
    console.log("In HideMobile:" + feature + ":" + dialect);
    this.props.onDbClick(features[feature], dialects[dialect]);
    Mixpanel.track("Choose Feature", {
      dialect: this.props.dialect.name,
      feature: features[feature].display
    });

  }

  // nav link
  navLink(item, key, classes) {
    const url = item.url ? item.url : '';
    const itemIcon = <i className={classes.icon} />;
    const itemBadge = this.navBadge(item.badge);
    const attributes = item.attributes || {};
    return (
      <NavItem key={key} className={classes.item}>
        { attributes.disabled ?
          <RsNavLink href={""} className={classes.link} {...attributes}>
            {itemIcon}{item.name}{itemBadge}
          </RsNavLink>
          :
          this.isExternal(url) ?
            <RsNavLink href={url} className={classes.link} active {...attributes}>
              {itemIcon}{item.name}{itemBadge}
            </RsNavLink> :
            <NavLink to={url} className={classes.link}
                     activeClassName="active"
                     onClick={() => this.handleSelect(item.id, item.dialect)}
                     {...attributes}>
              {itemIcon}{item.name}{itemBadge}
            </NavLink>
        }
      </NavItem>
    );
  }
}

function mapStateToProps(state) {
  return {
    dialect: state.dialect
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onDbClick: (feature, dialect) => {
      dispatch(setFeature(feature));
      dispatch(setDialect(dialect))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarNav)
