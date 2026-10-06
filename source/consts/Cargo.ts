interface ConstCargo<T> {
  [Key: string]: T;
}

const ConstCargo: ConstCargo<string> = {
  BODY_REQUIRED: "Request body cannot be empty.",
  CARGO_NAME: "Cargo name is required and must be a valid string.",
  DEPARTAMENT_CODE: "Department code is required.",
  DEPARTAMENT_DOESNT_EXIST: "The specified department code does not exist."
};

export default ConstCargo;