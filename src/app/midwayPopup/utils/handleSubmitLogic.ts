import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
// Basic validation to make sure that the visitor navigates to carousel upon entering correct code and sees alert message upon
//    entering wrong code. The code is 1234
const handleSubmit = (e: React.FormEvent<HTMLFormElement>, ref: React.ForwardedRef<HTMLInputElement>, router: AppRouterInstance) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const code = formData.get("code");
    if (Number(code) == 1234) {
        router.push(`/carousel`);
    }
    else {
        alert("Please enter the valid code");
        if (ref && typeof ref !== "function" && ref.current) {
            ref.current.value = "";
            ref.current.focus();
        }
    }
}
export default handleSubmit;
