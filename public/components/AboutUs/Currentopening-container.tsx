import { connect } from "react-redux"; 
import { CurrentOpeningComponentWithStyles } from "./Currentopening-component";

const mapStateToProps = state => {
  return {
    currentTheme: state.applicationThemeReducer.currentTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const CurrentOpeningContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentOpeningComponentWithStyles);
