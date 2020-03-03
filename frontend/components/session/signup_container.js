import { connect } from "react-redux";
import { createNewUser, login } from "../../actions/session";
import Signup from "./signup";

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  demoLogin: () => dispatch(login({ 
    nickname: 'evilMorty' , 
    email: 'destroyRick@citadel.com', 
    password: 'basicpassword'
  }))
});

export default connect(null, mapDispatchToProps)(Signup);