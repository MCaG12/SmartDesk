interface ConstTypeUser<T> {
  [Key: string]: T;
}

const ConstTypeUser: ConstTypeUser<string> = {
  TYPE_USER_DESCRIPTION: "",
  TYPE_USER_BADBODY : ""


};

export default ConstTypeUser;