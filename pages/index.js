import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import NavBarNew from "../components/NavBarNew";

function MarioLandingPage() {
  return (
    <div>
      <NavBarNew />
      <div className="flex justify-center items-center h-screen bg-green-500">
        Start
      </div>
    </div>
  );
}

export default MarioLandingPage;
