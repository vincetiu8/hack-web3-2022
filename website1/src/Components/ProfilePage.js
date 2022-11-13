import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';
// import link and button

import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';

import {Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import Stack from "react-bootstrap/Stack"
import AnimalPostViewModal from './AnimalPostViewModal';

import AnimalCard from './AnimalCard';

import {useEffect, useState} from 'react';
import {contractAddress, sponsorshipTokenAbi} from "./SponsorshipToken";

export default ({onClearCacheButton}) => {
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
            <Navbar style={{backgroundColor: "#e2ffd1"}}>
                <Container fluid>
                    <Button onClick={onClearCacheButton} variant="danger">Logout</Button>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {addy ? "Wallet Address: " + addy : "Please connect your account"}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
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
                        backgroundColor: "#e2ffd1",
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
                <Link to="/home">
                    <Button onClick={() => {
                    }}
                            variant="success"
                            style={{
                                position: 'relative',
                                fontSize: 18,
                                bottom: '80px',
                                backgroundColor: 'darkgreen',
                            }}>
                        Go Back →
                    </Button>
                </Link>
            </Stack>
            <AnimalPostViewModal
                show={showModal}
                onHide={() => setShowModal(false)}
                animal={selectedAnimal}
            />

        </>
    )
}
