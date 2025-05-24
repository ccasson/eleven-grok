import { useForm } from 'react-hook-form';

export default function ApplyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  return (
    <section id="apply" className="py-20 bg-gray
