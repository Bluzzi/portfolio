import type { ReactElement } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CallButton(): ReactElement {
  useEffect(() => {
    void (async function() {
      const cal = await getCalApi();
      cal("floatingButton", { "calLink": "camilledugas/meeting", "hideButtonIcon": false });
      cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  return <></>;
}