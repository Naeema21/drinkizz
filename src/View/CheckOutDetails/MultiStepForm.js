import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Details from "./Details";
import Shipping from "./Shipping";
import Payment from "./Payment";
import Review from "./Review.js";
import Submit from "./Submit";

const steps = [
  { id: "details" },
  { id: "shipping" },
  { id: "payment" },
  { id: "review" },
  { id: "submit" }
];

const defaultData = {
  firstName: "Jane",
  lastName: "Doe",
  nickName: "Jan",
  address: "200 South Main St",
  city: "Anytown",
  state: "CA",
  zip: "90505",
  email: "email@domain.com",
  phone: "+61 4252 454 332"
};

const MultiStepForm = ({ images }) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "details":
      return <Details {...props} />;
    case "shipping":
      return <Shipping {...props} />;
    case "payment":
      return <Payment {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;
