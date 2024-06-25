import { Activities } from "@/components/interface/Activities"
import { TestimonialProvider } from "@/contexts/TestimonialContext";
export default function Events() {
    return (
        <>
             <TestimonialProvider>
      <Activities />
    </TestimonialProvider>
        </>
    )
}   