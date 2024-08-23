//create a component called ContactRow and make sure to make it the default export. this component will be responsible for rendering a single row or tr element, with three columns, td for the name, email and phone number
import React from "react";
import PropTypes from "prop-types";

const ContactRow = ({ contact }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

ContactRow.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactRow;