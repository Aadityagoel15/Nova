import TypewriterTitle from "@/components/ui/TypewriterTitle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grainy">
      <div className="flex flex-col h-[256vh]">
        <div className="flex-1">
          <div className="mx-auto flex flex-col items-center justify-center p-4 text-center my-40">
            <div className="space-y-2">
              <h1 className="text-8xl tracking-tighter sm:text-6xl font-bold">Nova</h1>
              <h1 className="font-semibold text-5xl text-center">
                AI <span className="text-green-600 font-bold">note taking</span> assistant.
              </h1>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold text-3xl text-center text-slate-700">
                <TypewriterTitle />
              </h2>
              <div className="mt-8"></div>

              <div className="mt-8 flex justify-center">
                <Link href='/dashboard'>
                  <Button className="bg-green-600">
                    <ArrowRight className="mr-1 w-5 h-5" strokeWidth={4} />
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex h-44 justify-center items-center text-center font-bold text-7xl ">About Nova</div>
        </div>
        <div className="w-full max-w-7xl mx-auto border-t-2">
          <div className="grid items-center gap-6 p-4 md:grid-cols-1 md:gap-10 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Bring the magic of the AI to your notes making.
              </h2>
              <div className="h-4"></div>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500 font-semibold">
                Empower your productivity with AI note-taking assistant! Effortlessly capture ideas, organize notes intelligently, and gain personalized insights.
              </p>
            </div>
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4="
              width="550"
            />
          </div>
        </div>

        <div className="h-8"></div>

        <div className="w-full max-w-7xl mx-auto border-t-2">
          <div className="grid items-center gap-6 p-4 md:grid-cols-1 md:gap-10 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713225600&semt=ais"
              width="550"
            />
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Thumbnail Generation
              </h2>
              <div className="h-4"></div>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500 font-semibold">
                Experience the power of image generation with thumbnail feature for notes! Instantly enhance your note-taking experience by generating visually appealing thumbnails for each note.
              </p>
            </div>
          </div>
        </div>
        <div className="h-8"></div>

        <div className="w-full max-w-7xl mx-auto border-t-2">
          <div className="grid items-center gap-6 p-4 md:grid-cols-1 md:gap-10 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Notes Making
              </h2>
              <div className="h-4"></div>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500 font-semibold">
                A versatile note-taking platform designed to elevate your productivity and organization. Seamlessly capture, organize, and manage your ideas with ease.
              </p>
            </div>
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2021/08/note-taking.jpeg"
              width="550"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
