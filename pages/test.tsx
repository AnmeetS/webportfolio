import React, { useEffect, useState } from "react";
import Head from "next/head";
import CombinedDisplay from "@/components/handTracking/HandtrackingTrial";
export default function land() {
  return (
    <>
      <main className="w-screen h-screen font-bodyFont bg-background text-copyLight">
        <div className="w-screen h-screen font-bodyFont bg-background text-copyLight relative">
          <CombinedDisplay />
        </div>
      </main>
    </>
  );
}
