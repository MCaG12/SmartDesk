interface ConstCargo<T> {
  [Key: string]: T;
}

const ConstCargo: ConstCargo<string> = {
  BODY_REQUIRED: "",
  CARGO_NAME: "",
  DEPARTAMENT_CODE: "",
  DEPARTAMENT_DOESNT_EXIST: ""
};

export default ConstCargo;