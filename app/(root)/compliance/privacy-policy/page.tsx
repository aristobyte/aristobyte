import * as React from "react";
import { PrivacyPolicy as PrivacyPolicyComponent } from "@/components/compliance/PrivacyPolicy";

export const dynamic = "force-dynamic";

export default function PrivacyPolicy() {
  return <PrivacyPolicyComponent />;
}
