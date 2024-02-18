import React, { useEffect, useState } from "react";
import Head from "next/head";
import ModelViewer from "@/components/3D/ModelViewer";
import WebcamStreamWithLandmarks from "@/components/handTracking/WebcamStream";

export default function land() {
  return (
    <>
      <main className="w-screen h-screen font-bodyFont bg-background text-copyLight">
        <div className="w-screen h-screen font-bodyFont bg-background text-copyLight relative">
          <div className="relative w-full h-full">
            <div className="absolute w-fit h-fit">
              <WebcamStreamWithLandmarks />
            </div>
            <ModelViewer />
          </div>
        </div>
      </main>
    </>
  );
}
