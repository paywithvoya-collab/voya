import VoyaLogo from "../../../components/brand/VoyaLogo";
import RoleOptionButton from "../components/RoleOptionButton";

const signUpOptions = [
  {
    id: "business-owner",
    label: "As Business Owner",
    variant: "primary",
  },
  {
    id: "freelancer",
    label: "As Freelancer",
    variant: "secondary",
  },
];

export default function SignUpChoiceScreen() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-10">
      <section className="relative w-full max-w-[22rem] rounded-[2rem] border border-black/5 bg-[var(--color-surface-muted)] px-5 pb-10 pt-6 shadow-[0_8px_30px_rgba(31,41,55,0.08)] sm:px-10">
        <button
          type="button"
          aria-label="Close sign up dialog"
          className="absolute left-5 top-5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white text-sm font-medium text-black/60 transition hover:text-black"
        >
          <span aria-hidden="true">x</span>
        </button>

        <div className="flex flex-col items-center">
          <VoyaLogo markClassName="h-auto w-24" />
          <h1 className="mt-3 text-[2rem] font-extrabold tracking-tight text-[#262626]">
            Sign up
          </h1>
        </div>

        <div className="mt-6 space-y-6">
          {signUpOptions.map((option) => (
            <RoleOptionButton key={option.id} variant={option.variant}>
              {option.label}
            </RoleOptionButton>
          ))}
        </div>
      </section>
    </main>
  );
}
