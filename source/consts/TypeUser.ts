interface ConstTypeUser<T> {
  [Key: string]: T;
}

const ConstTypeUser: ConstTypeUser<string> = {
  TYPE_USER_DESCRIPTION: "User type description is required and must be a valid string.",
  TYPE_USER_BADBODY: "Request body is invalid or missing required fields."
};

export default ConstTypeUser;