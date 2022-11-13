import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';

import Stack from "react-bootstrap/Stack"
import AnimalPostViewModal from './AnimalPostViewModal';

import AnimalCard from './AnimalCard';

import {useEffect, useState} from 'react';
import {contractAddress, sponsorshipTokenAbi} from "./SponsorshipToken";

export default () => {
    const [showModal, setShowModal] = useState(false)

    const [selectedAnimal, setSelectedAnimal] = useState(null)

    const [animals, setAnimals] = useState([])

    const [addy, setAddy] = useState(null)

    useEffect(() => {
        const fn = async () => {
            console.log("Getting animals")
            console.log(window.tronLink)
            if (!window.tronLink.ready) {
                const res = await window.tronLink.request({method: 'tron_requestAccounts'})
                console.log(res)
            }
            setAddy(window.tronLink.tronWeb.defaultAddress.base58)
            const contract = await window.tronWeb.contract(sponsorshipTokenAbi.abi, contractAddress)
            console.log(`Contract: ${contract}`)
            const result = await contract.getTokensByOwner(window.tronLink.tronWeb.defaultAddress.base58).call();
            console.log(result)
            for (let i of result) {
                console.log(`Getting animal ${i}`)
                const metadata = await contract.tokenMetadata(i).call()
                const price = await contract.price(i).call()
                setAnimals(prev => [...prev, {
                    ...metadata,
                    id: i,
                    price: price
                }])
            }
        }
        if (window.tronWeb && animals.length === 0) {
            fn()
        }
    }, [window.tronWeb, animals])

    return (
        <>
            <Stack
                fluid
                style={{
                    height: "100vh",
                    width: "100vw",
                    overflow: "clip",
                    alignItems: "center",
                }}
            >
                <Row
                    style={{
                        marginTop: "10px",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "1%",
                        width: "fit-content",
                        height: "fit-content",
                    }}
                >
                    <Col><h1>{addy ? addy : "Please connect your account"}</h1></Col>
                </Row>
                <Row
                    style={{
                        marginTop: "10px",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "1%",
                        width: "fit-content",
                        height: "fit-content",
                    }}
                >
                    <h3>My Animals</h3>
                </Row>
                <Row style={{
                    overflowY: "scroll",
                    height: "95%",
                    marginTop: "10px",
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
            <AnimalPostViewModal
                show={showModal}
                onHide={() => setShowModal(false)}
                animal={selectedAnimal}
            />

        </>
    )
}
