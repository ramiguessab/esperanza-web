import { Activities } from "@/components/interface/Activities"
import { DataProvider } from "@/contexts/Data";
export default function Events() {
    return (
        <>
             <DataProvider>
      <Activities />
    </DataProvider>
        </>
    )
}   