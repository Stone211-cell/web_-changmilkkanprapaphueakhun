import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden">
      {/* Premium Apple-like Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-400/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            ช่างมิล <span className="text-blue-600">Admin</span>
          </h1>
          <p className="text-slate-500 mt-3 text-base">เข้าสู่ระบบจัดการเว็บไซต์</p>
        </div>
        
        <div className="flex justify-center">
          <SignIn
            appearance={{
              elements: {
                rootBox: "mx-auto w-full",
                card: "bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-6",
                headerTitle: "text-slate-900 font-bold text-xl",
                headerSubtitle: "text-slate-500",
                formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-all shadow-sm",
                formFieldInput: "bg-white/50 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-900 rounded-xl transition-all",
                formFieldLabel: "text-slate-700 font-medium mb-1.5",
                footerActionLink: "text-blue-600 hover:text-blue-700 font-semibold",
                socialButtonsBlockButton: "border-slate-200 hover:bg-slate-50/50 bg-white/50 text-slate-600 font-medium rounded-xl transition-all",
                dividerLine: "bg-slate-200",
                dividerText: "text-slate-400 font-medium",
                formFieldSuccessText: "text-green-600",
                formFieldErrorText: "text-red-500",
                identityPreviewText: "text-slate-900",
                identityPreviewEditButtonIcon: "text-blue-600",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
