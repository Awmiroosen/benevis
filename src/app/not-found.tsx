import { AlertTriangle } from "lucide-react";
const NotFound = () => {
  return (
    <div className="w-full h-svh flex justify-center flex-col items-center">
      <AlertTriangle size={30} />

      <h3 className="mt-6 font-semibold">ارور 404 - پیدا نشد</h3>
    </div>
  );
};

export default NotFound;
