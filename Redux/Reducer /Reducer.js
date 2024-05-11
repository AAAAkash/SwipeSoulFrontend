import {SET_SELECTED_SINGLE_GENDER, SET_SELECTED_PARTNER_GENDER, SET_PHONENUMEBR,SET_USERTYPE} from '../Action/Action';
const initialState = {
  selectedSingleGender: null,
  selectedPartnerGender: null,
  selectedPhonenumber: null,
  selectedUsertype:null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SINGLE_GENDER:
      return {
        ...state,
        selectedSingleGender: action.payload,
      };
      case SET_SELECTED_PARTNER_GENDER:
        return {
          ...state,
          selectedPartnerGender: action.payload,
        };
        case SET_PHONENUMEBR:
        return {
          ...state,
          selectedPhonenumber: action.payload,
        };
        case SET_USERTYPE:
          return {
            ...state,
            selectedUsertype: action.payload,
          };
    default:
      return state;
  }
};
export default reducer;
