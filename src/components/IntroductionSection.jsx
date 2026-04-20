import SuccessIcon from "../assets/icons/Success.png";
import TaskoTrackerLogo from "../assets/TaskoTrackerLogo.svg";

export const IntroductionSection = () => {
  const content = {
    title: "What is Tasko Tracker?",
    subtitle: "A calm structure for growing minds",
    description:
      "Tasko Tracker is designed for 9-12 year olds. Parents set what needs to happen—kids decide when and how to do it. Nothing fancy, no screens, just real independence.",
    feature: "Meet Your Tasko",
    text: "Every child gets their own digital companion. Instead of rewards or punishments, your Tasko reflects how consistent you are with routines. This builds intrinsic motivation and genuine confidence.",
  };

  return (
    <section className="flex flex-col items-center justify-center px-10 py-24 relative self-stretch w-full flex-[0_0_auto] bg-tasko-white300">
      <div className="inline-flex flex-col items-center gap-12 relative flex-[0_0_auto] w-full max-w-[1200px]">
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] text-header-2 text-tasko-gray900 text-center px-4">
            {content.title}
          </h2>
          <p className="text-body-large text-tasko-gray400 text-center max-w-[600px] px-4">
            {content.subtitle}
          </p>
        </div>

        <div className="inline-flex flex-col min-[700px]:flex-row items-center min-[700px]:items-center gap-12 relative flex-[0_0_auto] w-full min-[550px]:w-auto px-4 min-[550px]:px-0 min-[700px]:px-10">
          <article className="flex flex-col w-full min-[700px]:flex-1 min-[700px]:max-w-[500px] items-start gap-6 relative self-stretch">
            <p className="relative self-stretch text-body-large text-tasko-gray400">
              {content.description}
            </p>
            
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src={SuccessIcon} alt="Success" className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-tasko-gray900">Set Once</p>
                  <p className="text-body-main text-tasko-gray400">Parents define routines, then step back</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src={SuccessIcon} alt="Success" className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-tasko-gray900">Kid-Controlled</p>
                  <p className="text-body-main text-tasko-gray400">Children decide when and how</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src={SuccessIcon} alt="Success" className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-tasko-gray900">No Screens</p>
                  <p className="text-body-main text-tasko-gray400">Physical device feedback, not apps</p>
                </div>
              </div>
            </div>
          </article>

          <div className="w-full min-[700px]:flex-1 min-[700px]:max-w-[500px] flex flex-col items-center justify-center">
            <div className="w-full h-[400px] bg-gradient-to-br from-tasko-blue300 to-tasko-blue200 rounded-2xl flex items-center justify-center border-2 border-tasko-blue400 shadow-medium-LM">
              <div className="flex flex-col items-center gap-4 text-center">
                <img src={TaskoTrackerLogo} alt="Tasko Tracker" className="w-24 h-24" />
                <p className="text-header-3 text-tasko-gray900">Your Tasko</p>
                <p className="text-body-main text-tasko-gray400 max-w-[300px]">Digital companion that grows with your routines</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="w-full max-w-[850px] gap-4 px-6 py-6 bg-tasko-white400 rounded-xl flex flex-col items-start relative border-2 border-tasko-blue400 shadow-small-LM">
          <div className="flex items-center gap-3 w-full">
            <img src={SuccessIcon} alt="Tasko" className="w-6 h-6" />
            <h4 className="relative flex items-center text-header-3 text-tasko-gray900 font-semibold">
              {content.feature}
            </h4>
          </div>

          <p className="relative flex items-center self-stretch text-body-main text-tasko-gray400">
            {content.text}
          </p>
        </aside>
      </div>
    </section>
  );
};
