import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CompetitionForm from "./Forms/Competition"
import Web2Form from "./Forms/Web2"
import Web3Form from "./Forms/Web3"

export default function RegistrationTabs() {
    return (
        <Tabs className="w-full">
            <TabsList className="w-full">
                <TabsTrigger value="competition" className="w-full">
                    Competition
                </TabsTrigger>
                <TabsTrigger value="web2" className="w-full">
                    Web 2
                </TabsTrigger>
                <TabsTrigger value="web3" className="w-full">
                    Web 3
                </TabsTrigger>
            </TabsList>
            <TabsContent value="competition">
                <CompetitionForm />
            </TabsContent>
            <TabsContent value="web2">
                <Web2Form />
            </TabsContent>
            <TabsContent value="web3">
                <Web3Form />
            </TabsContent>
        </Tabs>
    )
}
