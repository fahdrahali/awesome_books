const createFooter = () => {
  const footer = document.createElement("footer");
  footer.id = "footer";
  const span = document.createElement("span");
  span.textContent = "Copyright   ...";
  footer.append(span);
  document.getElementById("container").append(footer);
};

export default createFooter;
