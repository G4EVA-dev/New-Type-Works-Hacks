"use client"
import { useState } from 'react';
import Layout from '../components/Layouts';
import { useForm, SubmitHandler } from 'react-hook-form';

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<ContactFormValues> = data => {
    console.log(data); // Replace with actual API call later
    setSuccessMessage('Your message has been sent successfully!');
  };

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-6">If you have any questions or need to get in touch, please fill out the form below:</p>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required', pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Invalid email address' } })}
            className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
          <textarea
            id="message"
            rows={5}
            {...register('message', { required: 'Message is required' })}
            className={`w-full p-2 border rounded ${errors.message ? 'border-red-500' : ''}`}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Send Message</button>
        {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
      </form>
    </Layout>
  );
};

export default Contact;
