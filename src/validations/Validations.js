export class Validations {
  static validateEmail(email) {
    const gmailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/;
    return gmailRegex.test(email);
  }

  static validatePassword(password) {
    return password.length >= 8;
  }
  static validateContact(contact)
  {
    const contactRegex = /^[0-9]{10}$/;
    return contactRegex.test(contact);
  } 
}
