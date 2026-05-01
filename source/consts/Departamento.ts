interface ConstDepartamento<T> {
  [Key: string]: T;
}

const ConstDepartamento: ConstDepartamento<string> = {
  BODY_REQUIRED: "",
  DEPARTAMENTO_NAME_REQUIRED : ""

};

export default ConstDepartamento;