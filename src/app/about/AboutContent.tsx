"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AutomatingDuty from "./AutomatingDuty";
import ManualDocumentation from "./ManualDocumentation";
import MissionAndVision from "./MissionAndVision";
import AutomatedTracking from "./AutomatedTracking";
import SecurityCompliance from "./SecurityCompliance";

export default function AboutContent() {
  return (
    <>
      <AutomatingDuty />
      <ManualDocumentation />

      <MissionAndVision />

      <AutomatedTracking />

      <SecurityCompliance />
    </>
  );
}
