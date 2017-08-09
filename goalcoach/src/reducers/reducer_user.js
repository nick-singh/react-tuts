import { SIGN_IN } from '../constants';


let user = {
	email:null
}

export default (state = user, action) => {
	switch(action.type){
		case SIGN_IN:
			const { email } = action;
			user = {
				email
			}
			return user;
		default:
			return state;
	}
}
