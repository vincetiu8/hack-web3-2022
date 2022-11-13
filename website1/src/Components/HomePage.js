import {useEffect, useState} from 'react'

import AnimalCard from './AnimalCard'

import Stack from "react-bootstrap/Stack"

import Form from "react-bootstrap/Form"

import Row from "react-bootstrap/Row"


import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import AnimalPreViewModal from './AnimalPreViewModal'
import ProfilePic from './ProfilePic'

import {contractAddress, sponsorshipTokenAbi} from "./SponsorshipToken";

export default (onClearCacheButton) => {

    const [animals, setAnimals] = useState([])

    const [selectedAnimal, setSelectedAnimal] = useState(null)

    const [showModal, setShowModal] = useState(false)
    
    const [searchQuery, setSearchQuery] = useState("")

    const onAdopt = async (name) => {

        const contract = await window.tronLink.tronWeb.contract(sponsorshipTokenAbi.abi, contractAddress)
        const result = await contract.price(selectedAnimal.id).call();
        console.log(result)
        const res2 = await contract.purchase(name, selectedAnimal.id).send({
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
                const adopted = await contract.adopted(i).call()
                if (adopted) continue
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
    }, [ animals])

    console.log(animals)
   
    const buttonStyle = {
        position: "absolute",
        top: "2.5vh",
        left : "10px",
        width: "120px"
    };

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
                    zIndex: 1,
                    backgroundColor: "#fafffa",
                }}> 
                    <Col />
                    <Button style = {buttonStyle} onClick = {onClearCacheButton}>Clear Cache</Button>
                    <Col xs={6}>
                        <Form.Control
                            placeholder="Search"
                            as="input"
                            onChange={value => setSearchQuery(value.target.value)}
                        />
                    </Col>
                    <Col>
                        <ProfilePic />

                    </Col>
                </Row>
                <Row style={{
                    overflowY: "scroll",
                    paddingTop: "1%",
                    height: "95%",
                    paddingLeft: "1%",
                    paddingRight: "1%"
                }}>
                    {animals.filter(
                        animal => animal.name.toLowerCase().includes(searchQuery.toLowerCase())
                    ).map((animal, index) => (
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

