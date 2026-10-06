interface ConstTypePriority<T> {
  [Key: string]: T;
}

const ConstTypePriority: ConstTypePriority<string> = {
  TYPE_PRIORITY_DESCRIPTION: "Priority type description is required and must be a valid string.",
  TYPE_PRIORITY_BADBODY: "Request body is invalid or missing required fields."
};

export default ConstTypePriority;