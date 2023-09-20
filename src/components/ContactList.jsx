import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filterPhrase }) => {
  const handleFilteredList = () => {
    let filteredNames = [];
    contacts.forEach(contact => {
      if (contact.name.toLowerCase().includes(filterPhrase)) {
        filteredNames.push(contact);
      }
    });
    return filteredNames;
  };

  if (filterPhrase === '') {
    return (
      <ul>
        {contacts.map(item => (
          <li key={item.id}>
            {item.name}: {item.number}
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <ul>
        {handleFilteredList().map(item => (
          <li key={item.id}>
            {item.name}: {item.number}
          </li>
        ))}
      </ul>
    );
  }
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filterPhrase: PropTypes.string,
};
