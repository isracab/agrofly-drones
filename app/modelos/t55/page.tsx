import type { Metadata } from "next";
import { ModelDetail } from "../../componentes/model-detail";
import { modelBySlug } from "../../datos";

export const metadata: Metadata = { title: "DJI Agras T55" };
export default function Page() {
  return <ModelDetail model={modelBySlug("t55")} />;
}
