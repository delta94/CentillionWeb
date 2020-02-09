import { connect } from "react-redux"; 
import { FounderDeskComponent } from "./Founderdesk-component";

const mapStateToProps = state => {
  return {
    currentTheme: state.applicationThemeReducer.currentTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const FounderDeskContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FounderDeskComponent);
