import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { router } from "@/app/router";
import { ReportsProvider } from "@/data/reportsStore";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <ReportsProvider>
        <RouterProvider router={router} />
        <Toaster position="bottom-right" richColors />
      </ReportsProvider>
    </LanguageProvider>
  </StrictMode>,
);
