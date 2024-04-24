import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Section,
    Text,
    Tailwind,
    Button,
    Column,
    Row,
} from "@react-email/components"
import React from "react"

interface EnvisionEmailProps {
    firstName: string
    lastName: string
}

export function EnvisionEmail({
    firstName = "Rami",
    lastName = "Guessab",
}: EnvisionEmailProps) {
    return (
        <Html>
            <Head />
            <Tailwind>
                <Body>
                    <Container className="font-sans overflow-clip">
                        <Section className="overflow-clip relative border border-solid border-slate-300 rounded-lg p-8 text-center text-slate-800 font-bold bg-white">
                            <Img
                                src="https://www.esperanza-club.tech/assets/envision-logo-2.png"
                                width={643 / 3.5}
                                height={961 / 3.5}
                                className="mx-auto"
                            />
                            <Text className="font-black text-4xl underline decoration-4">
                                Congratulations {firstName} {lastName}
                            </Text>
                            <Text className="text-2xl text-pretty">
                                You have been accepted to ENVISION EVENT
                                organised by ESPERANZA-CLUB
                            </Text>

                            <Button
                                target="_blank"
                                href="https://www.google.com/maps/dir//RQ4H%2B4MQ,+Jijel/@36.8053213,5.6968434,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12f25e2e682a5b41:0xe495274108986cfc!2m2!1d5.7792445!2d36.8053497?entry=ttu"
                                className="bg-slate-900 text-3xl p-2 rounded-lg text-slate-100"
                            >
                                Destination
                            </Button>
                            <Text className="text-xs text-slate-600">
                                ESPERANZA-CLUB 2023/2024
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
