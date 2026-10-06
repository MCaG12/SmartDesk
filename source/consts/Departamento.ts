interface ConstDepartamento<T> {
  [Key: string]: T;
}

const ConstDepartamento: ConstDepartamento<string> = {
  BODY_REQUIRED: "Request body cannot be empty.",
  DEPARTAMENTO_NAME_REQUIRED: "Department name is required and must be a valid string."
};

export default ConstDepartamento;