import { useState } from "react";
import { InputForm, DefaultInputProps } from "../shared/Forms/InputForm";

const Home = () => {
  const [gender, setGender] = useState<string>();
  const [age, setAge] = useState<number>();

  const handleSubmit = (): void => {
    const gender: any = document.getElementById("gender");
    const age: any = document.getElementById("age");
    setAge(age.value);
    setGender(gender.value);
  };

  const formData: DefaultInputProps[] = [
    {
      id: "gender",
      name: "gender",
      label: "gender",
      type: "text",
      size: "large",
      placeholder: "Gender",
    },
    {
      id: "age",
      name: "age",
      label: "age",
      type: "number",
      size: "large",
      placeholder: "age",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {gender}
      {age}
      <InputForm forms={formData} callback={handleSubmit} />
    </div>
  );
};
export default Home;
