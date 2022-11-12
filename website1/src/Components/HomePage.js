import { useState } from 'react'

import AnimalCard from './AnimalCard'

import Container from "react-bootstrap/Container"

import Image from 'react-bootstrap/Image'

import { Link } from "react-router-dom"

import { useEffect } from "react";

import Stack from "react-bootstrap/Stack"

import Form from "react-bootstrap/Form"

import Row from "react-bootstrap/Row"

import Col from "react-bootstrap/Col"
import AnimalPreViewModal from './AnimalPreViewModal'
import ProfilePic from './ProfilePic'

import { contractAddress, sponsorshipTokenAbi } from "./SponsorshipToken";

export default () => {

    const [animals, setAnimals] = useState([])

    const [selectedAnimal, setSelectedAnimal] = useState(null)

    const [showModal, setShowModal] = useState(false)

    const onAdopt = async () => {
        const contract = await window.tronLink.tronWeb.contract(sponsorshipTokenAbi.abi, contractAddress)
        const result = await contract.price(selectedAnimal.id).call();
        console.log(result)
        const res2 = await contract.purchase("Placeholder name xd", selectedAnimal.id).send({
            feeLimit: 500_000_000,
            callValue: result
        })
        console.log(res2)
    }

    useEffect(() => {
        const fn = async () => {
            console.log("Getting animals")
            console.log(`TronWeb: ${window.tronLink.tronWeb}`)
            if (!window.tronLink.ready) {
                const res = await window.tronLink.request({ method: 'tron_requestAccounts' })
                console.log(res)
            }
            const contract = await window.tronLink.tronWeb.contract(sponsorshipTokenAbi.abi, contractAddress)
            console.log(`Contract: ${contract}`)
            const result = await contract.getNumberOfTokens().call();
            console.log(result)
            for (let i = 0; i < result.toNumber(); i++) {
                console.log(`Getting animal ${i}`)
                const metadata = await contract.tokenMetadata(i).call()
                setAnimals(prev => [...prev, {
                    ...metadata,
                    id: i
                }])
            }
        }
        if (window.tronWeb && animals.length === 0) {
            fn()
        }
    }, [window.tronLink.tronWeb, animals])

    console.log(animals)

    return (
        <>
            <Stack
                style={{
                    height: "100vh",
                    width: "100vw",
                    overflow: "clip"
                }}
            >
                <Row style={{
                    height: "10%",
                    borderBottom: "1px",
                    boxShadow: "0px 4px 8px 0px rgba(25,135,84,0.28)",
                    alignItems: "center",
                    zIndex: -1
                }}>
                    <Col />
                    <Col xs={6}>
                        <Form.Control
                            placeholder="Search"
                            as="input"
                        />
                    </Col>
                    <Col>
                        <ProfilePic />

                    </Col>
                </Row>
                <Row style={{
                    overflowY: "scroll",
                    paddingTop: "1%",
                    height: "95%"
                }}>
                    {animals.map((animal, index) => (
                        <AnimalCard
                            animal={animal}
                            onClick={() => {
                                setSelectedAnimal(animal)
                                setShowModal(true)
                            }}
                        />
                    ))}
                </Row>
            </Stack>
            <AnimalPreViewModal
                show={showModal}
                onHide={() => setShowModal(false)}
                animal={selectedAnimal}
                onAdopt={onAdopt}
            />
        </>
    )
}

