import Image from "next/image";
import React from "react";

interface UserProfileProps {
  nickname: string;
  profileImg?: string;
  email?: string;
}

function UserProfile({ nickname, profileImg, email }: UserProfileProps) {
  return (
    <div className="user-profile-container">
      <div className="relative size-13 aspect-square rounded-full">
        <Image
          className="rounded-full object-cover"
          src={profileImg ?? ""}
          alt="profile"
          fill
        />
      </div>
      <div>
        <div className="user-profile-nickname">{nickname}</div>
        <div className="user-profile-email">{email}</div>
      </div>
    </div>
  );
}

export default UserProfile;
