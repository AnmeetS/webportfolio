import React, { useEffect, useState } from "react";
import Head from "next/head";
import HANDyMouseDemo from "@/components/main/HANDyMouseDemo";
import HandtrackingTrial from "@/components/handTracking/HandtrackingTrial";
export default function land() {
  return (
    <>
      <main className="w-full h-screen font-bodyFont bg-background text-copyLight overflow-hidden">
          I&apos;m not currently testing anything, but I&apos;m glad you&apos;re here!
          <HandtrackingTrial />
      </main>
    </>
  );
}
