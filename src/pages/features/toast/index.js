import ToastLayout from "./ToastLayout";
import toast, { Toaster } from "react-hot-toast";

function recoil() {
  const notify = () => toast.success("Successfully toasted!");
  return (
    <ToastLayout>
      <Toaster position="top-right" reverseOrder={false} />
      <div>
        <button
          onClick={notify}
          className="btn btn-ghost border-2 border-slate-300 rounded-lg font-bold gap-4 flex bg-gradient-to-b from-white to-toast-200 shadow-button text-center py-4 px-6 active:translate-y-0.5 active:shadow-button-active active:bg-gray-100 transform focus:outline-none focus:ring-4"
        >
          <div>🛎 </div>
          <span className="flex-1 mr-2">Make me a toast</span>
        </button>
      </div>
    </ToastLayout>
  );
}

export default recoil;
