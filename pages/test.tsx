import React, { useEffect, useState } from "react";
import Head from "next/head";
import ModelViewer from "@/components/3D/ModelViewer";

export default function land() {
  return (
    <>
      <main className="w-screen h-screen font-bodyFont bg-background text-copyLight">
        <div className="w-screen h-screen font-bodyFont bg-background text-copyLight relative">
          <div className=" w-full h-full">
            <ModelViewer />
          </div>
        </div>
      </main>
    </>
  );
}
