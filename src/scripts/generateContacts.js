import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number = 5) => {
  const contacts = await readContacts();
  const updatedContacts = [
    ...contacts,
    ...Array(number).fill(0).map(createFakeContact),
  ];
  await writeContacts(updatedContacts);
  console.log(`Added ${number} new contacts.`);
};

generateContacts(5);
