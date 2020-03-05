import { connect } from "react-redux";
import { createNewUser, login } from "../../actions/session";
import Signup from "./signup";

const mapStateToProps = (state) => ({
  errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  demoLogin: () => dispatch(login({ 
    nickname: 'evilMorty' , 
    email: 'destroyRick@citadel.com', 
    password: 'basicpassword'
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);