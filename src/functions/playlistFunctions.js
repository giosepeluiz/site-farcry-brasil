const isFarCry = (value) => {
  switch (value) {
    case "fc2":
    case "fc3":
    case "fc3bd":
    case "fc4":
    case "fcp":
    case "fc5":
    case "fcnd":
    case "fc6":
      return true;
    default:
      return false;
  }
};

export default isFarCry;
