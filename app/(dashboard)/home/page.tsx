import { delay } from "@/lib/async";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import Greetings from "@/components/Greetings"
import GreetingsSkeleton from "@/components/GreetingsSkeleton"
import ProjectCard from "@/components/ProjectCard"
import TasksCard from "@/components/TasksCard"
import NewProject from "@/components/NewProject"

import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {

  const getData = async () => {
    delay(2000)
    const user = await getUserFromCookie(cookies());
    const projects = await db.project.findMany({
      where: {
        ownerId: user?.id,
      },
      include: {
        tasks: true,
      },
    });
  
    return { projects };
  };
  const { projects } = await getData();
  return (
    <div className="h-full overflow-y-auto px-6 w-full">
      <div className=" h-full  items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex">
        <Suspense fallback={<GreetingsSkeleton />}>
          <Greetings />
        </Suspense>

        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
          {
               projects.map((project) => (
                <div className="p-3" key={project.id}>
                  <Link href={`/project/${project.id}`}>
                    <ProjectCard project={project} />
                  </Link>
                </div>
              ))
          }
          <div className="w-1/3 p-3">
          <NewProject />
          </div>
        </div>
        <div className="mt-6 flex-2 grow w-full flex">
          <div className="w-full">
          <TasksCard />
          
          </div>
        </div>
      </div>
    </div>
  );
}