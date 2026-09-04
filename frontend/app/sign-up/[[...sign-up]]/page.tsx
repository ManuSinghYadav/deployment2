import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-background px-4 py-10">
      <div className="flex w-full max-w-[420px] flex-col items-center">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Sign up to continue
          </p>
        </div>

        <SignUp
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "w-full shadow-none border rounded-2xl",
            },
          }}
        />
      </div>
    </main>
  );
}
