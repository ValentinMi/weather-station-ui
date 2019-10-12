import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import "./index.scss";

const PeriodMenu = ({ settings }) => {
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

export default connect(mapStateToProps)(PeriodMenu);
