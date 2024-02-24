import React, { useEffect, useState } from "react";
import Head from "next/head";
import HANDyMouseDemo from "@/components/main/HANDyMouseDemo";
export default function land() {
  return (
    <>
      <main className="w-full h-screen font-bodyFont bg-background text-copyLight">
          <HANDyMouseDemo />
      </main>
    </>
  );
}
