import type { Metadata } from "next";
import { ModelDetail } from "../../componentes/model-detail";
import { modelBySlug } from "../../datos";

export const metadata: Metadata = { title: "DJI Agras T100" };
export default function Page() {
  return <ModelDetail model={modelBySlug("t100")} />;
}
