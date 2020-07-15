export const loginAction = (email, password) => dispatch => {
    console.log(email, password);
    dispatch({
     type: 'LOGIN_ACTION',
     email: email,
     password: password
    })
   }
