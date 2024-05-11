export const SET_SELECTED_SINGLE_GENDER = " SET_SELECTED_SINGLE_GENDER"; //single
export const SET_SELECTED_PARTNER_GENDER = " SET_SELECTED_PARTNER_GENDER"; //PARTNER
export const SET_PHONENUMEBR =" SET_PHONENUMEBR"; //SAME FOR BOTH
export const SET_USERTYPE = "SET_USERTYPE";//SAME FOR BOTH
export const setSelectedSingleGender = singleGender => {
    console.log(singleGender, 'singleGender');
    return {
      type: SET_SELECTED_SINGLE_GENDER,
      payload: singleGender,
    };
  }
  export const setSelectedPartnerGender = partnerGender => {
    console.log(partnerGender, 'partnerGender');
    return {
      type: SET_SELECTED_PARTNER_GENDER,
      payload: partnerGender,
    };
  }
  export const setSelectedPhonenumber = phonenumber => {
    console.log(phonenumber, 'phonenumber');
    return {
      type: SET_PHONENUMEBR,
      payload: phonenumber,
    };
  }
  export const setSelectedUsertype = usertype => {
    console.log(usertype, 'usertype');
    return {
      type: SET_USERTYPE,
      payload: usertype,
    };
  }