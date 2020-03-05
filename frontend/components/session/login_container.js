import { connect } from "react-redux";
import { login } from '../../actions/session';
import Login from './login';

const mapStateToProps = (state) => ({
  errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  demoLogin: () => dispatch(login({ 
    email: 'destroyRick@citadel.com', 
    password: 'basicpassword'
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);