import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormInputs {
  title: string;
  description: string;
  budget: number;
  deadline: Date;
}

const formSchema = z.object({
  title: z.string().min(3, { message: "Title is required" }),
  description: z.string().min(3, { message: "Description is required" }),
  budget: z.number().min(1, { message: "Budget is required" }),
  deadline: z
    .date()
    .min(new Date(), { message: "Deadline must be in the future" }),
});

export default function JobForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<FormInputs>({ resolver: zodResolver(formSchema) });

  const [deadline, setDeadline] = useState(new Date());

  function onSubmit(data: FormInputs) {
    console.log(data);
  }

  const handleDeadlineChange = (date: Date | null) => {
    if (date) {
      setDeadline(date);
      setValue("deadline", date);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-900 mb-2"
          >
            Job Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
            placeholder="Enter job title..."
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-900 mb-2"
          >
            Job Description
          </label>
          <textarea
            id="description"
            {...register("description")}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 resize-none"
            placeholder="Describe the job requirements, skills needed, and project details..."
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-900 mb-2"
          >
            Budget (USD)
          </label>
          <input
            type="number"
            id="budget"
            {...register("budget", { valueAsNumber: true })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
            placeholder="Enter budget amount..."
            min="1"
          />
          {errors.budget && (
            <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="deadline"
            className="block text-sm font-medium text-gray-900 mb-2"
          >
            Project Deadline
          </label>
          <DatePicker
            selected={deadline}
            onChange={handleDeadlineChange}
            minDate={new Date()}
            dateFormat="MMMM dd, yyyy"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900"
            placeholderText="Select deadline..."
          />
          {errors.deadline && (
            <p className="mt-1 text-sm text-red-600">
              {errors.deadline.message}
            </p>
          )}
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? "Posting Job..." : "Post Job"}
        </button>
      </div>
    </form>
  );
}
