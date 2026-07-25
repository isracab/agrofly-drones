import type { Metadata } from "next";
import { ModelDetail } from "../../componentes/model-detail";
import { modelBySlug } from "../../datos";

export const metadata: Metadata = { title: "DJI Agras T70P" };
export default function Page() {
  return <ModelDetail model={modelBySlug("t70p")} />;
}
