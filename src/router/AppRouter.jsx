import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPages } from "../calendar/pages/CalendarPages";
import { useAuthStore } from "../hooks";

export const AppRouter = () => {
  const { status } = useAuthStore();

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/*" element={<CalendarPages />} />
          <Route path="/auth/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
