import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Music, Headphones, Mic2 } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://i.pravatar.cc/150?img=1"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">John Doe</CardTitle>
            <CardDescription>Artist & Songwriter</CardDescription>
          </div>
        </CardHeader>

        <CardContent>"Nathan's production skills transformed my track into something incredible. The mix was perfect!"</CardContent>
      </Card>

      {/* Profile */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=58"
            alt="Nathan Anglin"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Nathan Anglin</CardTitle>
          <CardDescription className="font-normal text-primary">
            Music Producer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Specializing in electronic, pop, and hip-hop production with a focus on innovative sound design.
          </p>
        </CardContent>

        <CardFooter>
          <div className="flex gap-4">
            <a
              rel="noreferrer noopener"
              href="#"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">SoundCloud icon</span>
              <Music className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Spotify icon</span>
              <Headphones className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Instagram icon</span>
              <Mic2 className="w-5 h-5" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Services */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Production
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$150</span>
            <span className="text-muted-foreground"> /track</span>
          </div>

          <CardDescription>
            Professional music production and mixing services
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Book Now</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Full Track Production", "Mixing & Mastering", "Unlimited Revisions"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Music className="text-green-500 w-4 h-4" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Latest Work */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <Music className="w-6 h-6" />
          </div>
          <div>
            <CardTitle>Latest Release</CardTitle>
            <CardDescription className="text-md mt-2">
              Check out my newest track "Midnight Dreams" now available on all platforms
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
