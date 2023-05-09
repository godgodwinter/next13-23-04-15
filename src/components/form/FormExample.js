import { useForm } from "react-hook-form";

export default function FormExample() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className="form-control w-full max-w-xs">
        <input
          defaultValue="test"
          {...register("example", { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          {errors.example && (
            <span className="label-text-alt">This field is required</span>
          )}
        </label>
      </div>

      {/* include validation with required or other standard HTML validation rules */}
      <div className="form-control w-full max-w-xs">
        <input
          {...register("exampleRequired", { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          {errors.exampleRequired && (
            <span className="label-text-alt">This field is required</span>
          )}
        </label>
      </div>
      {/* errors will return when field validation fails  */}

      <input type="submit" className="btn btn-sm" />
    </form>
  );
}
