import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  role: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=1",
    name: "Sarah Johnson",
    role: "Singer-Songwriter",
    comment: "Nathan's production skills brought my vision to life. The mix was perfect and he really understood the emotion I wanted to convey in my music.",
  },
  {
    image: "https://i.pravatar.cc/150?img=2",
    name: "Mike Chen",
    role: "Electronic Artist",
    comment: "Working with Nathan was a game-changer for my EP. His attention to detail in sound design and mixing is exceptional.",
  },
  {
    image: "https://i.pravatar.cc/150?img=3",
    name: "Alex Rivera",
    role: "Hip-Hop Artist",
    comment: "The beats Nathan produced for my album were exactly what I needed. He has an incredible ear for modern hip-hop production.",
  },
  {
    image: "https://i.pravatar.cc/150?img=4",
    name: "Emma Davis",
    role: "Pop Artist",
    comment: "Nathan's vocal production skills are outstanding. He made my voice sound better than I ever thought possible.",
  },
  {
    image: "https://i.pravatar.cc/150?img=5",
    name: "James Wilson",
    role: "Music Director",
    comment: "Professional, creative, and efficient. Nathan delivered high-quality production work that exceeded our expectations.",
  },
  {
    image: "https://i.pravatar.cc/150?img=6",
    name: "Lisa Martinez",
    role: "Independent Artist",
    comment: "Nathan's ability to understand different genres and adapt his production style is impressive. He's a true professional.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        What
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Artists Say{" "}
        </span>
        About My Work
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Hear from artists and clients who have worked with me on their music projects
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, role, comment }: TestimonialProps) => (
            <Card
              key={name}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt={name}
                    src={image}
                  />
                  <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{role}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
