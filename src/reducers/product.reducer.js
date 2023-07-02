const iniState = [
  { id:"PRO9001", img: "Procuct1.jpeg", title: "New Prod 1", author: "JC" },
  { id:"PRO9002", img: "Procuct2.jpeg", title: "New Prod 2", author: "JC" },
  { id:"PRO9003", img: "Procuct3.jpeg", title: "New Prod 3", author: "JC" },
  { id:"PRO9004", img: "Procuct4.jpeg", title: "New Prod 4", author: "JC" },
  { id:"PRO9005", img: "Procuct5.jpeg", title: "New Prod 5", author: "JC" },
  { id:"PRO9006", img: "Procuct1.jpeg", title: "New Prod 6", author: "JC" },
  { id:"PRO9007", img: "Procuct2.jpeg", title: "New Prod 7", author: "JC" },
  { id:"PRO9008", img: "Procuct3.jpeg", title: "New Prod 8", author: "JC" },
];
const productReducer = (state = iniState, action) => {
  switch (action?.type) {
    default:
      return state;
  }
};
export default productReducer;