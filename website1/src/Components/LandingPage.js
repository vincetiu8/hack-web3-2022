import React from "react"

import Button from "react-bootstrap/Button"

import Container from "react-bootstrap/Container"

import {Link} from "react-router-dom"

export default ({onClearChacheButton}) => {
    const buttonStyle = {
        position: "absolute",
        top: "10px",
        left : "10px"
    };

    return (
        <Container style={{
            display: "flex",
            flex: 1,
            height: "100vh",
            flexDirection: "column",
            justifyContent: "center"
        }}>
            <Button onClick={onClearChacheButton} style={buttonStyle}>Clear Cache</Button>
            <Container
                style={{
                    backgroundColor: "darkgreen",
                    borderRadius: 10,
                    padding: 20,
                    width: "fit-content"
                }}
            >
                <Container>
                    <h1 style={{
                        fontSize: 110,
                        color: "white",
                        marginBottom: "1rem"
                    }}>Fawna</h1>
                </Container>
                <Container>
                    <Link to="/home">
                        <Button
                            onClick={() => {
                            }}
                            variant="success"
                            style={{
                                fontSize: 30,
                            }}
                        >
                            Sponsor an Animal →
                        </Button>
                    </Link>
                </Container>
            </Container>
        </Container>
    )
}
