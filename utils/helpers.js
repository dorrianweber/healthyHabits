module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    return parseInt(amount).toLocaleString();
  },
  setChecked: (value, currentValue) => {
    if ( value == currentValue ) {
       return "checked";
    } else {
       return "";
    };
 }
};