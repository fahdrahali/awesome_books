const createItemLink = (ul, linkTitle) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = linkTitle;
  a.href = '#';
  li.append(a);
  ul.append(li);
};
const CreateNavBar = () => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const logo = document.createElement("span");
  logo.textContent = 'Awesome Books';

  const nav_link = document.createElement("ul");

  createItemLink(nav_link, "List");
  createItemLink(nav_link, '|')
  createItemLink(nav_link, "Add new");
  createItemLink(nav_link, '|')
  createItemLink(nav_link, "Contact");

  nav.append(nav_link);
  header.append(logo);
  header.append(nav);

  document.getElementById('container').append(header);
};

export default CreateNavBar;
