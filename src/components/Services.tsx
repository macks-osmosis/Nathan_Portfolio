import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Music, Headphones, Mic2, Sliders } from "lucide-react";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Music Production",
    description:
      "Professional music production services including beat making, arrangement, and full track production across various genres.",
    icon: <Music className="w-6 h-6" />,
  },
  {
    title: "Mixing & Mastering",
    description:
      "High-quality mixing and mastering services to ensure your tracks sound professional and radio-ready.",
    icon: <Sliders className="w-6 h-6" />,
  },
  {
    title: "Vocal Production",
    description:
      "Expert vocal recording, editing, and processing to make your vocals stand out in the mix.",
    icon: <Mic2 className="w-6 h-6" />,
  },
  {
    title: "Sound Design",
    description:
      "Custom sound design and synthesis for unique textures and effects in your productions.",
    icon: <Headphones className="w-6 h-6" />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Professional{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Comprehensive music production services to bring your creative vision to life.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Music production services"
        />
      </div>
    </section>
  );
};
