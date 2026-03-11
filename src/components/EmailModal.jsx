import { useState } from "react";

export const EmailModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    
    const API_KEY = "ba25a23f-d818-489d-a00c-3ff2a53af99d"; // User will replace this
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: API_KEY,
          email: e.target.email.value,
          subject: "New Waitlist Submission from Tasko Tracker",
        }),
      });

      const result = await response.json();
      
      if (result.success) {
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
          className="absolute top-4 right-4 text-tasko-gray400 hover:text-tasko-gray900 transition-colors cursor-pointer w-8 h-8 flex items-center justify-center rounded-sm hover:bg-tasko-gray200"
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
            Be the first to know when Tasko Tracker is ready to help your children cultivate independence.
          </p>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-lg bg-tasko-success400/20 rounded-no border-line border-tasko-success400">
            <svg className="w-12 h-12 text-tasko-success400 mb-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p className="text-body-large text-tasko-gray900 font-medium">You're on the list!</p>
            <p className="text-body-main text-tasko-gray500 text-center mt-xs px-md">We've added your email. Keep an eye out for our launch updates.</p>
            
            <button 
              onClick={onClose}
              className="mt-lg w-full h-12 flex items-center justify-center bg-tasko-gray200 hover:bg-tasko-gray300 rounded-sm text-UI-button text-tasko-gray900 transition-colors"
            >
              Close window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-md w-full">
            <div className="flex flex-col gap-xs">
              <label htmlFor="email" className="text-semantic-small text-tasko-gray600 font-semibold px-1">
                Email Address <span className="text-tasko-error700">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full h-12 px-md border-line border-tasko-gray300 rounded-no focus:border-tasko-blue500 focus:ring-1 focus:ring-tasko-blue500 outline-none transition-all text-body-main text-tasko-gray900 placeholder:text-tasko-gray300"
                disabled={status === "submitting"}
              />
            </div>
            
            {status === "error" && (
              <p className="text-semantic-small text-tasko-error700 bg-tasko-error300/30 px-sm py-2 rounded-sm border-line border-tasko-error300">
                Oops! Something went wrong submitting your email. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-sm flex w-full h-12 items-center justify-center gap-sm relative bg-tasko-blue400 rounded-sm shadow-medium-LM cursor-pointer border-0 hover:bg-tasko-blue500 active:bg-tasko-blue600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
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
