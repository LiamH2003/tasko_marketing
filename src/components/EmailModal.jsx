import { useState } from "react";

const LS_KEY = "tasko_waitlist_email";

export const EmailModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState(
    () => (localStorage.getItem(LS_KEY) ? "success" : "idle")
  );
  const [emailError, setEmailError] = useState("");

  if (!isOpen) return null;

  const validateEmail = (value) => {
    if (!value) return "Email address is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Please enter a valid email address.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = e.target.email.value;
    const validationError = validateEmail(emailValue);
    if (validationError) {
      setEmailError(validationError);
      return;
    }
    setEmailError("");
    setStatus("submitting");

    const API_KEY = "ba25a23f-d818-489d-a00c-3ff2a53af99d";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: API_KEY,
          email: emailValue,
          subject: "New Waitlist Submission from Tasko Tracker",
        }),
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem(LS_KEY, emailValue);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-tasko-gray900/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div
        className="w-full max-w-[400px] bg-tasko-white100 rounded-lg p-xl relative shadow-high-LM animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-tasko-gray400 hover:text-tasko-error700 active:text-tasko-error700 transition-colors cursor-pointer w-8 h-8 flex items-center justify-center rounded-sm border-0"
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex flex-col gap-sm mb-lg">
          <h3 id="modal-headline" className="text-header-3 text-tasko-blue900">
            Join the Waitlist
          </h3>
          <p className="text-body-main text-tasko-gray400">
            Sign up to get our newsletter and get a chance at becoming an early tester in our pilot phase, helping shape Tasko Tracker from the very start.
          </p>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-lg px-md bg-tasko-success400/20 rounded-no border-line border-tasko-success400">
            <svg className="w-12 h-12 text-tasko-success400 mb-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p className="text-body-large text-tasko-gray900 font-medium">You're on the list!</p>
            <p className="text-body-main text-tasko-gray500 text-center mt-xs px-md">You're on the newsletter list and in the running to join our pilot. We'll be in touch!</p>

            <button
              onClick={onClose}
              className="mt-lg w-full h-12 flex items-center justify-center rounded-no text-UI-button text-tasko-gray900 cursor-pointer transition-all bg-tasko-blue100 border-[0.5px] border-tasko-blue400 hover:bg-tasko-blue200 hover:border hover:border-tasko-blue500 active:bg-tasko-blue300 active:border-2 active:border-tasko-blue600"
            >
              Close window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-md w-full">
            <div className="flex flex-col gap-xs">
              <label htmlFor="email" className="text-semantic-small text-tasko-gray600 font-semibold px-1">
                Email Address <span className="text-tasko-error700">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                onChange={() => emailError && setEmailError("")}
                className={`w-full h-12 px-md rounded-no outline-none transition-all text-body-main text-tasko-gray900 placeholder:text-tasko-gray300 ${
                  emailError
                    ? "border-[2px] border-tasko-error700 focus:border-tasko-error700"
                    : "border-line border-tasko-gray300 focus:border-tasko-blue500 focus:ring-1 focus:ring-tasko-blue500"
                }`}
                disabled={status === "submitting"}
              />
              {emailError && (
                <div className="flex items-center gap-xs px-xs">
                  <svg className="w-3.5 h-3.5 text-tasko-error700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-semantic-small text-tasko-error700">{emailError}</p>
                </div>
              )}
            </div>

            {status === "error" && (
              <div className="flex items-start gap-sm px-sm py-sm bg-tasko-error300/30 rounded-no border-[0.5px] border-tasko-error300">
                <svg className="w-4 h-4 text-tasko-error700 shrink-0 mt-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
                <p className="text-semantic-small text-tasko-error700">
                  Something went wrong submitting your email. Please try again.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-sm flex w-full h-12 items-center justify-center gap-sm relative bg-tasko-blue400 rounded-no shadow-medium-LM cursor-pointer border-0 hover:bg-tasko-blue500 active:bg-tasko-blue600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="relative flex items-center justify-center w-full text-UI-button text-center text-tasko-gray900 hover:text-tasko-white100 leading-tight transition-colors">
                {status === "submitting" ? "Joining..." : "Join the waitlist"}
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
