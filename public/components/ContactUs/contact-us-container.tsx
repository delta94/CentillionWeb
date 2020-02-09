import { connect } from "react-redux";
import { ContactUsComponent } from "../ContactUs/contact-us-component";

const mapStateToProps = state => {
  return {
    currentTheme: state.applicationThemeReducer.currentTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const ConatactUsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactUsComponent);
