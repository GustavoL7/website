import ProfileImage from "./assets/profile-bit.png";
import WavingHand from "./assets/waving-hand.png";
import LinkedinLogo from "./assets/linkedin-logo.png";
import GithubLogo from "./assets/github-logo.png";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mt-auto fade-in">
        <img
          className="rounded-full w-32 mb-8 pointer-events-none"
          src={ProfileImage}
          alt="Gustavo Lucas"
        />
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-2xl flex items-center gap-3">
            <img className="w-8 wave-hand pointer-events-none" src={WavingHand} alt="Hello!" /> Hello, I'm
          </h1>
          <h1 className="text-3xl font-semibold">Gustavo Lucas</h1>
        </div>

        <p className="text-center text-gray font-light leading-snug mt-3">
          A back-end developer creating digital
          <br /> solutions, architecture, experiences and
          <br /> more...
        </p>
      </div>

      <div className="flex justify-center items-center mt-auto mb-10">
        <a
          href="https://www.linkedin.com/in/gustavo-lucas-ayres-a68558281/"
          target="_blank"
          rel="noreferrer"
          className="shake glow"
        >
          <img className="w-12" src={LinkedinLogo} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/GustavoL7"
          target="_blank"
          rel="noreferrer"
          className="shake glow"
        >
          <img className="w-12" style={{ transform: "translateY(0%)" }} src={GithubLogo} alt="GitHub" />
        </a>
      </div>
    </main>
  );
}

export default App;
