
const createItem = (ul, textContent) => {
    const li = document.createElement('li');
    li.textContent =  textContent;
    ul.append(li);
}

const createContactSection = () => {
    // create contact section
    const section = document.createElement('section');
    section.id = 'contact';

    //create the title
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Information';

    //create the content
    const p = document.createElement('p');
    p.textContent = 'Do you have any questions or you just want to say "Hello".'
    const p1 = document.createElement('p');
    p1.textContent = 'You can reach out to us!';

    //create a contact details list
    const ul = document.createElement('ul');

    createItem(ul, 'Our e-mail:');
    createItem(ul, 'Our phone number:');
    createItem(ul, 'our address:');

    section.append(h1);
    section.append(p);
    section.append(p1);
    section.append(ul);

    document.getElementById('container').insertBefore(section, document.getElementById('footer'));

}

export default createContactSection;