import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import { changeSelectedPeriod } from "../../actions/settings.actions";

import "./index.scss";

const PeriodMenu = ({ settings, actions }) => {
  let location = useLocation();
  useEffect(() => {
    // Remove "/" in pathname and change selectedPeriod
    actions.changeSelectedPeriod(
      location.pathname
        .split("")
        .splice(1)
        .join("")
    );
    // eslint-disable-next-line
  }, [location]);

  return (
    <>
      {settings.weatherInfos && (
        <div className="period-menu">
          <NavLink className="period-menu-link" to="/today">
            Today
          </NavLink>
          <NavLink className="period-menu-link" to="/week">
            Week
          </NavLink>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  settings: state.settings
});

const mapDispatchToProps = dispatch => ({
  actions: {
    changeSelectedPeriod: period => dispatch(changeSelectedPeriod(period))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeriodMenu);
