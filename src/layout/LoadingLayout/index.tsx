import { Outlet, useNavigation } from "react-router";

export const LoadingLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  if (isNavigating) return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-2">
        <div className="w-6 h-6 bg-white rounded animate-bounce"></div>
        <div className="w-6 h-6 bg-white rounded animate-bounce delay-150"></div>
        <div className="w-6 h-6 bg-white rounded animate-bounce delay-300"></div>
      </div>
    </div>
  )

  return (
    <Outlet />
  )
}
