import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

import { fetchWholeProfileOfUser } from "@/server-actions/userServerActions";
import { Button } from "@/components/ui/button";


const page = async () => {

  
  const currentLoggedInUser = await currentUser();

  if(!currentLoggedInUser?.privateMetadata?.hasCompletedProfile) {
  
    redirect('/complete_profile');
      
  }


  const user = await fetchWholeProfileOfUser();


  return (
    <div className="px-4 sm:px-8 lg:px-16 py-6 sm:py-10">

      <p className="text-2xl sm:text-3xl text-center roboto-bold tracking-wider text-green-600 mb-4 sm:mb-6">
        Profile
      </p>

      <div className="flex flex-col gap-6 lg:gap-10 mt-6 sm:mt-10 text-base sm:text-lg">

        <div className="flex justify-center">

          <Image
            src={user?.profileImage}
            alt="profile image"
            width={100}
            height={100}
            className="rounded-full border-4 border-green-700 object-cover w-32 h-32 sm:w-44 sm:h-44 shadow-lg"
          />

        </div>

        <div className="flex flex-col gap-5 lg:gap-5 text-base sm:text-lg lg:text-xl">


          <div className="text-center flex flex-col gap-1 lg:flex-row lg:gap-0 lg:justify-between">

            <span className="font-semibold">Full Name:</span>

            <span className="break-words">{user?.firstName} {user?.lastName}</span>


          </div>


          <div className="text-center flex flex-col gap-1 lg:flex-row lg:gap-0 lg:justify-between">

            <span className="font-semibold">Email Address:</span>

            <span className="break-all lg:break-words">{user?.email || 'Not Available'}</span>

          </div>


          <div className="text-center flex flex-col gap-1 lg:flex-row lg:gap-0 lg:justify-between">

            <span className="font-semibold">Age:</span>

            <span>{user?.age} years</span>

          </div>


          <div className="text-center flex flex-col gap-1 lg:flex-row lg:gap-0 lg:justify-between">

            <span className="font-semibold">Gender:</span>

            <span>{user?.gender}</span>

          </div>


          <div className="text-center flex flex-col gap-1 lg:flex-row lg:gap-0 lg:justify-between">

            <span className="font-semibold">Height:</span>

            <span>{user?.height || 'Not Available'} cm</span>

          </div>


          <div className="text-center flex flex-col gap-1 lg:flex-row lg:gap-0 lg:justify-between">

            <span className="font-semibold">Weight:</span>
            
            <span>{user?.weight || 'Not Available'} kg</span>

          </div>

          <div className="text-center flex flex-col gap-1 lg:flex-row lg:gap-0 lg:justify-between">

            <span className="font-semibold">Activity Level:</span>
            
            <span className="break-words">{user?.activityLevel || 'Not Available'}</span>

          </div>

        </div>

        <Link href={`/profile/edit/${user.id}`} className="w-full mt-2 lg:mt-0">
          <Button className='py-6 lg:py-7 capitalize w-full'>Edit Profile</Button>
        </Link>

      </div>
      
    </div>
  );
}

export default page;