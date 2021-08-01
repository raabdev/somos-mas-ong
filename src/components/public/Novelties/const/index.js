export const customSizes = (index, type, query) => {
  if (query === true) index = 0;
  switch (type) {
    case "widthCard":
      if (index === 0 || index === 1) return "80%";
      return "25%";
    case "widthImg":
      if (index === 0) return "100%";
      if (index === 1) return "50%";
      return "100%";
    case "height":
      if (index === 1) return "340px";
      if (index > 1) return "250px";
      if (index === 0) return "300px";
      return "250px";
    case "flexD":
      if (index === 1) return "row";
      return "column";
    case "fontSize":
      if (index === 0) return "2em";
      if (index === 1) return "1.5em";
      return "1.3em";
    case "marginTopImg":
      if (index === 0) return "auto";
      if (index === 1) return "auto";
      return "0";
    default:
      return null;
  }
};

export const formatDate = date => {
  date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
