export const truncate = string => {
  if (string.length > 25) {
    var text = "";
    for (let i = 0; i < 25; i++) {
      text += string[i];
    }
    text += "...";
    string = text;
  }
  return string;
};
