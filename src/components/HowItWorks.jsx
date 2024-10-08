import { Ticket, Calendar, Key } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="w-full mx-0 py-16 bg-neutral-800 text-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-50 mix-blend-screen"></div>
      <div className="container mx-auto px-2 md:px-4 relative z-10">
        <h2 className="orbitron-font text-orange-100 text-3xl font-bold mb-16 text-center">
          How it works
        </h2>
        <div className="relative">
          <WigglyPath />
          <div className="space-y-24">
            <Step
              number={1}
              title="Create or Discover Events"
              description="Create an account and easily create your own events or explore a wide range of events, from local community gatherings to large-scale events powered by Ticketmaster."
              image="https://thumbor-cdn.b2match.com/bCC4xgRJbRZEiT9DUJvb3WJznrk=/full-fit-in/1600x0/filters:quality(75):no_upscale()/https://www.b2match.com/img/events-site_header-image.jpg"
              icon={<Ticket className="w-6 h-6" />}
              imageLeft={true}
            />
            <Step
              number={2}
              title="Register and Stay Notified "
              description="Sign up for events in just a few clicks. Receive instant confirmation and personalized notifications to your inbox, keeping you informed about the latest updates."
              image="https://eventshospitality.co.uk/wp-content/uploads/2023/06/7b584f19-f843-4134-b15d-6762025c43b0.webp"
              icon={<Calendar className="w-6 h-6" />}
              imageLeft={false}
            />
            <Step
              number={3}
              title="Attend and Enjoy"
              description="Sync your events with Google Calendar and show up prepared. Enjoy hassle-free ticketing and never miss out on memorable experiences."
              image="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg"
              icon={<Key className="w-6 h-6" />}
              imageLeft={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WigglyPath() {
  return (
    <svg
      className="absolute left-1/2 top-0 h-full -translate-x-1/2"
      width="50"
      height="100%"
      viewBox="0 0 50 450"
      preserveAspectRatio="none"
    >
      <path
        d="M25,0 Q15,200 10,400 Q-0,600 20,10000"
        fill="none"
        stroke="rgba(255, 237, 213)"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
    </svg>
  );
}

function Step({ number, title, description, image, icon, imageLeft }) {
  return (
    <div
      className={`flex items-center ${
        imageLeft ? "flex-row" : "flex-row-reverse"
      } gap-8 md:gap-24`}
    >
      <div className="relative w-1/2">
        <img
          src={image}
          alt={`Step ${number}`}
          className="w-full h-auto rounded-2xl shadow-lg"
        />

        <div
          className={`absolute -top-4 w-12 h-12 text-neutral-800 bg-gradient-to-tr from-orange-100 via-0% to-stone-300  rounded-full flex items-center justify-center ${
            imageLeft ? "-right-4" : "-left-4"
          }`}
        >
          {icon}
        </div>
        <div
          className={`absolute -bottom-2 w-4 h-4 bg-neutral-800 rounded-full ${
            imageLeft ? "-left-2" : "-right-2"
          }`}
        ></div>
        <div
          className={`absolute -top-2  w-2 h-2 bg-neutral-800 rounded-full ${
            imageLeft ? "-left-2" : "-right-2"
          }`}
        ></div>
      </div>
      <div className="w-1/2 space-y-4">
        <div
          className={`flex items-center gap-1 ${
            imageLeft ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`w-10 h-10 p-4 rounded-full bg-gradient-to-tr from-orange-100 via-0% to-stone-300  text-neutral-800 flex items-center justify-center text-2xl font-bold ${
              imageLeft ? "order-first" : "order-first"
            }`}
          >
            {number}
          </div>
          <h3 className="orbitron-font text-orange-100 text-xl font-bold">
            {title}
          </h3>
        </div>
        <p className="text-gray-400  text-sm">{description}</p>
      </div>
    </div>
  );
}
