"use server";

import { currentUser, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import primsaClientConfig from "@/prismaClientConfig";


export const createProfileServerAction = async (prevState, formData) => {

  try {

    const currentLoggedInUser = await currentUser();

    if (!currentLoggedInUser) {

      throw new Error(
        "Please authenticate yourself first before creating the profile",
      );

    }

    const rawData = Object.fromEntries(formData);

    const allergiesOfUser = rawData?.allergies
      ?.split(",")
      .map((allergy) => allergy.trim())
      .filter((allergy) => allergy !== "");

    if (allergiesOfUser.some((allergy) => allergy.toLowerCase() === "no allergies") && allergiesOfUser.length > 1) {

      throw new Error(
        'If you enter "No allergies", you cannot enter any other allergy.',
      );

    }

    if (allergiesOfUser?.length > 5) {

      throw new Error("You can enter a maximum of 5 allergies.");

    }

    for (const allergy of allergiesOfUser) {

      if (allergy.length > 25) {

        throw new Error(
          "Each entered allergy cannot be longer than 25 characters.",
        );

      }

    }

    await primsaClientConfig.profile.create({
      data: {
        clerkId: currentLoggedInUser?.id || "",
        firstName: currentLoggedInUser?.firstName || "",
        lastName: currentLoggedInUser?.lastName || "",
        email: currentLoggedInUser?.primaryEmailAddress?.emailAddress || "",
        profileImage: currentLoggedInUser?.imageUrl || "",
        age: Number(rawData.age) || 0,
        gender: rawData.gender || "",
        activityLevel: rawData?.activityLevel || "",
        allergies: rawData?.allergies || "",
        height: Number(rawData.height) || 0,
        weight: Number(rawData.weight) || 0,
      },
    });

    await clerkClient.users.updateUserMetadata(currentLoggedInUser?.id, {
      privateMetadata: {
        hasCompletedProfile: true,
      },
    });

  } catch (error) {

    console.log(error);

    return {
      message: error?.message || "there was an error while creating your profile, please try again",
    };

  }

  redirect("/profile");

};


export const fetchWholeProfileOfUser = async () => {

  try {

    const user = await currentUser();

    const profileOfUser = await primsaClientConfig.profile.findUnique({
      where: {
        clerkId: user?.id,
      },
    });

    if (!profileOfUser) {

      redirect("/profile/create");

    }

    return profileOfUser;

  } catch (error) {

    console.log(error);

    return {
      message: error?.message || "there was an error while fetching your profile, please try again",
    };

  }

};


export const editUserProfile = async (prevState, formData) => {

  try {

    const user = await currentUser();

    const rawData = Object.fromEntries(formData);

    const allergiesNoOfWordsGreaterThanTwenty = rawData?.allergies?.split(" ");

    if (allergiesNoOfWordsGreaterThanTwenty.length > 20) {

      throw new Error(
        "make sure what you wrote in 'allergies' is lesser than or equals to 20 words",
      );

    }

    const firstName = rawData?.firstName;

    const lastName = rawData?.lastName;

    const email = rawData?.email;

    const age = rawData?.age;

    const gender = rawData?.gender;

    const height = rawData?.height;

    const weight = rawData?.weight;

    const activityLevel = rawData?.activityLevel;

    const allergies = rawData?.allergies;

    await primsaClientConfig.profile.update({
      where: {
        clerkId: user.id,
      },
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: Number(age),
        gender: gender,
        height: Number(height),
        weight: Number(weight),
        activityLevel: activityLevel,
        allergies: allergies,
      },
    });
  } catch (error) {
    console.log(error);

    return {
      message: error?.message || "there was an error while editing your profile, please try again",
    };

  }

  redirect("/profile");
  
};
