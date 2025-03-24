import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  const updatedContacts = [...contacts, createFakeContact()];
  await writeContacts(updatedContacts);
  console.log('One contact added.');
};

addOneContact();
