import { useState } from "react";
import { InputForm, DefaultInputProps } from "./InputForm";

const Home = () => {
  const [gender, setGender] = useState<string>();
  const [age, setAge] = useState<number>();

  const handleSubmit = (data: { gender: string; age: number }) => {
    console.log("callback calleds", data);
    setAge(data.age);
    setGender(data.gender);
  };

  const formData: DefaultInputProps = {
    id: "1775",
    name: "gender",
    label: "gender",
    type: "text",
    size: "large",
    callback: handleSubmit,
  };
  return (
    <div>
      <InputForm {...formData} />
    </div>
  );
};
export default Home;
