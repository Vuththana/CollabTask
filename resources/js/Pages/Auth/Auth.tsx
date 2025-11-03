import LoginForm from "@/Components/Auth/AuthForm";
import Title from "@/Components/Auth/Title";

export default function Auth() {
  return (
    <div
       className="min-h-screen mx-auto flex items-center justify-center p-4"
    >
      <div
        className="w-full max-w-md"
      >
        <Title />
        <LoginForm />

        <div className="text-center mt-1">
          <span className="text-sm text-gray-400">By continuing, you agree to our Terms of Service and Privacy Policy</span>
        </div>
       
      </div>
    </div>
  )
}
