export function validatePhoneNumber(input_str : string) {
    var re = /^\(?(\+?\d{2,4})\)?[- ]?(\d{2,4})[- ]?(\d{1,5})$/;
  
    return re.test(input_str);
  }